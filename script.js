// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  let email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    e.preventDefault();
  } else {
    alert("Message sent successfully!");
  }
});
