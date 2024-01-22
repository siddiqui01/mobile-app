<!-- ... (Previous HTML and CSS code as before) -->

<script>
    function checkCredentials(event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'mohsin' && password === 'abc') {
            // Redirect to Wikipedia or show content
            window.location.href = 'https://www.wikipedia.org';
        } else {
            // Show access denied message
            document.getElementById('access-denied-message').style.display = 'block';
        }
    }
</script>

<!-- ... (Closing tags for body and html) -->