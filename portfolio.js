function sendEmail() {
    Email.send({
    SecureToken: "48b0c6b6-c98c-4c7d-bcaf-1ae4bc4f3459",
    To : 'sinhashreya2679@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact form Enquiry",
    Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: " + document.getElementById("phone").value 
        + "<br> Message: " + document.getElementById("message").value  

}).then(
  message => alert("Message Sent Succesfully")
);
}
