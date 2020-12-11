$(document).ready(() => {
    $('.BtnContainer').click((e) => {
        let BtnType = e.target.name

        if(BtnType == "FETCH") {

            let websiteName = $('input[name = "website"]').val()
            let password = $('#password')

            fetch('/fetch/website?name=' + websiteName).then((res) => {
            
                res.json().then((data) => {
                    console.log(password)
                    password.text(`Password: ${data.password}`)
                })
            }).catch((e) => console.log(e))
        }
    })
})