$(document).ready(() => {
    let user = $('.Username').text()
    
    let button = $('.Button')

    if(user == "") {
        button.text('Login')
    }

    button.click((e) => {
        let btnType = button.text()
        console.log(btnType)

        if(btnType == "Login") {
            window.location.assign('login')
        } else if(btnType == "Logout") {
            fetch('/logout').then(() => {
                window.location.assign('login')
            })
        }
    })
})