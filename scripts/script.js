// Example: Toggle dark mode
document.addEventListener('DOMContentLoaded', () => {
    const toggleDarkMode = () => {
        document.body.classList.toggle('dark-mode');
    };

    // Add a button in your HTML to trigger this
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Toggle Dark Mode';
    darkModeButton.onclick = toggleDarkMode;
    document.querySelector('header').appendChild(darkModeButton);
});

// Add this to your CSS for dark mode:
/*
.dark-mode {
    background-color: #222;
    color: #f9f9f9;
}

.dark-mode header, .dark-mode footer {
    background-color: #444;
}
*/