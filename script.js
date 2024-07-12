function login(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Show the loader
    document.querySelector(".loader").style.display = "block";

    // Simulate a delay to show the loader (remove this in production)
    setTimeout(function() {
        // Iterate through the array of users
        for (var i = 0; i < users.length; i++) {
            // Check if provided credentials match any user
            if (username === users[i].username && password === users[i].password) {
                alert("Login successful!");
                window.location.href = users[i].redirectPage; // Redirect to user's page
                return; // Exit the function after successful login
            }
        }

        // Hide the loader
        document.querySelector(".loader").style.display = "none";

        // If the loop finishes without finding a matching user, show an error message
        alert("Invalid username or password. Please try again.");
    }, 1000); // Simulated delay of 1 second (remove this in production)
}
