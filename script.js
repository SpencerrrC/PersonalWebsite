// BUTTON REDIRECT FUNCTION
function redirectToPage(event) {
    
    // Get the button that was clicked and the URL
    const button = event.target;
    const url = button.getAttribute('data-url');

    // Redirect to the specified URL
    if (url) {
        window.open(url, '_blank');
    } else {
        console.error('No URL specified for this button.');
    }
}
