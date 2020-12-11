$(document).ready(() => {
    
    $('.BtnContainer').on('click', (e) => { 
        e.preventDefault()

        let name = e.target.name

        if(name === "LOGIN_IN") {
            window.location.assign('login')
        } else if(name === "SIGN_UP") {
            window.location.assign('signup')
        }
    })

    const handleVisibleButtons = () => {
        let user = $('.Username').text()

        console.log(user)

        if(user != "") {
            $('.BtnContainer').addClass('InActive')
        }
    }

    handleVisibleButtons()
})