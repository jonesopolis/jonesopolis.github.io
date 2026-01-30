const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.classList.add('dark-mode');
    themeToggle.textContent = 'Light';
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
    
    const isDarkMode = html.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? 'Light' : 'Dark';
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
