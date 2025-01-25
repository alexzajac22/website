/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefualt()

emailjs.sendForm("service_n5hosop","template_p513xra","#contact-form","NjEgegrUq6EGdu7vN")

.then(() => {
    // show sent message
    contactMessage.text = 'Message sent successfully ✅'       
    // Remove message after five seconds
    setTimeout(()=>{
        contactMessage.textContent=''
    },5000)    
    // Clear input fields
    contactForm.reset()
})
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

