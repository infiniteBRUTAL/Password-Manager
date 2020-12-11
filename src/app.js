const express = require('express')
const bcrypt = require('bcrypt')
const hbs = require('hbs')
const path = require('path')
const { resolve } = require('path')
const app = express()
const port = process.env.PORT || 3000

require('./db/mongoose')

let username = ''
const creater = 'infiniteGOD'

const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const publicDirectoryPath = path.join(__dirname, '../public')


const User = require('./models/user')

const key = 10

app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.use(express.json())

app.get('/',(req,res)=> {
    res.render('index', {
        user: username,
        name: creater
    })
})

app.get('/about',(req,res)=> {
    res.render('about', {
        user: username,
        name: creater
    })
})

app.get('/signup', (req, res) => {
    res.render('signup', {
        name: creater
    })
})

app.post('/signup/user', (req, res) => {
    bcrypt.hash(String(req.query.password), key).then((hash) => {
        
        data = new User({
            name: req.query.username.toLowerCase(),
            password: hash
        })

        data.save().then(() => {
            res.status(201).render('login')
        }).catch()
    });
})

app.get('/login', (req, res) => {
    res.render('login', {
        user: username,
        name: creater
    })
})

app.get('/login/authenticate', (req, res) => {
    let user = req.query.username
    let password = req.query.password

    User.findOne({name : user}, (err, resolve) => {
        
        bcrypt.compare(password, resolve.password).then((response) => {
            if(response) {
                username = resolve.name
                res.status(200).send({user: username})
            }
        }).catch()
    })

})

app.get('/fetch', (req, res) => {
    res.render('fetch', {
        user: username,
        name: creater
    })
})

app.get('/fetch/website', (req, res) => {
    User.findOne({name: username}).then((user) => {

        let websiteData = user.websiteData

        websiteData.map((website) => {
            if(website.name == req.query.name) {
                return res.status(200).send(website)
            }
            return res.status(404).send()
        })
    })
})

app.get('/store', (req, res) => {
    res.render('store', {
        user: username,
        name: creater
    })
})

app.get('/store/website', (req, res) => {

    User.findOne({name: username}).then((user) => {

        let websiteData = user.websiteData
        websiteData.map((name) => {
            if(name == req.query.name) {
                return res.status(409).send(false)
            }
        })

        user.websiteData.push({
            name: req.query.name,
            password: req.query.password
        })
        user.save().then(() => {
            res.status(200).send()
        })
    })
})

app.get('/logout', (req, res) => {
    username = ''
    res.status(200).send()
})

app.listen(port)