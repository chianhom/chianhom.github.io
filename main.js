function submitForm() {
    const userName = document.getElementById('userName').value;
    const teamMembers = document.getElementById('teamMembers').value;

    // Send data to the server (AJAX, Fetch API, etc.)
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, teamMembers }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
