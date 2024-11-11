document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Display a success message
    alert('Registration successful!');

    // Redirect to the index page after a short delay
    setTimeout(function() {
        window.location.href = 'index.html';
    }, 2000); // Redirects after 2 seconds
});