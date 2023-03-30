const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link')
const btnLogin = document.querySelector('.btnLogin')
const iconClose = document.querySelector('.icon-close')

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')

})

btnLogin.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup')
    console.log("teste")

})

registerLink.addEventListener('click',()=> {
    wrapper.classList.add('active')
    //console.log("teste")
})

loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active')
})