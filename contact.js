function sendMail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    emailjs.send("service_43615if","template_wuy1puh",parms).then(alert("Email sent!!"))
}