document.querySelector("form").addEventListener("submit", async function(event) {
event.preventDefault(); // stop the page from reloading

  const form = event.target;
  const formData = new FormData(form);

  // Send the data to Formspree manually
  const response = await fetch(form.action, {
    	method: form.method,
    	body: formData,
    	headers: { 'Accept': 'application/json' }
  });

  // Redirect only if the form was sent successfully
  if (response.ok) {
    	window.location.href = "thankyou.html";
  } else {
    	alert("There was a problem sending your message. Please try again.");
  }
});
