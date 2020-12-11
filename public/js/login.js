$(document).ready(() => {
    $('.BtnContainer').click((e) => {
        let BtnType = e.target.name

        if(BtnType == "SIGN_UP") {
            return window.location.assign('signup')
        }

        if(BtnType == "LOGIN") {

            let username = $('input[name = "username"]').val()
            let password = $('input[name = "password"]').val()

            fetch('/login/authenticate?username=' + username + '&password=' + password).then((res) => {
                if(res.ok) {
                    window.location.assign('fetch')
                }
            })
        }
    })
})