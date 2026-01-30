// Small JS for toggling mobile nav and handling form submissions
document.addEventListener('DOMContentLoaded',()=>{
  const navToggle = document.getElementById('nav-toggle')
  const nav = document.getElementById('site-nav')
  const form = document.getElementById('contact-form')
  const formMsg = document.getElementById('form-msg')

  navToggle.addEventListener('click',()=>{
    nav.classList.toggle('show')
  })

  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    if(!name || !email || !message){
      formMsg.textContent = 'Please fill all fields.'
      formMsg.style.color = 'crimson'
      return
    }
    formMsg.textContent = 'Thanks! Your message was sent (demo only).'
    formMsg.style.color = 'green'
    form.reset()
  })
})