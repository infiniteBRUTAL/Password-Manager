$(document).ready(() => {
    $('.BtnContainer').click((e) => {
        let BtnType = e.target.name

        if(BtnType == "STORE") {

            let websiteName = $('input[name = "website"]').val()
            let password = $('input[name = "password"]').val()
            let confirmPassword = $('input[name = "confirm-password"]').val()

            if(password !== confirmPassword) {
                return alert('PLease Check your password')
            }

            fetch('/store/website?name=' + websiteName + '&password=' + password).then((res) => {
                if(res.ok) {
                
                    window.location.assign('fetch')
                }
            }).catch((e) => console.log(e))
        }
    })
})