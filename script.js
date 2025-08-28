 // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Theme toggle using Bootstrap 5.3 CSS variables
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const sun = document.getElementById('sunIcon');
    const moon = document.getElementById('moonIcon');

    // Persist preference
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-bs-theme', saved);
    updateIcons();

    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-bs-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-bs-theme', next);
      localStorage.setItem('theme', next);
      updateIcons();
    });

    function updateIcons(){
      const mode = root.getAttribute('data-bs-theme');
      const isDark = mode === 'dark';
      sun.classList.toggle('d-none', !isDark);
      moon.classList.toggle('d-none', isDark);
    }
  function showImage(path) {
    const img = document.getElementById('displayImage');
    img.src = path;
    img.style.display = 'block';
  }
    function showCert(fileName) {
  const img = document.getElementById('certImage');

  // Make sure the file path matches where the image is stored
  img.src = fileName; 

  // Show the image
  img.style.display = 'block';

  // Set alt text
  img.alt = "Certificate: " + fileName;

  // Scroll to the image
  img.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
