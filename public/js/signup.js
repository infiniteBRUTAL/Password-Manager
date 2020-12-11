$(document).ready(() => {

    $('button').click((e) => {

        e.preventDefault()

        let username = $('input[name = "username"]').val()
        let password = $('input[name = "password"]').val()
        let confirmPassword = $('input[name = "confirm-password"]').val()

        if(password !== confirmPassword) {
            return alert('Please Confirm Password')
        }


        fetch('/signup/user?username=' + username + '&password=' + password , { method: "POST" })

    })

})