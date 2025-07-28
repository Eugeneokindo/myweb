function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.classList.add('active');
  }
}
function performSearch() {
  const query = document.querySelector('.search-bar').value.trim();
  if (query !== '') {
    // For example, just log it or redirect
    console.log('Searching for:', query);
    // window.location.href = `search.html?q=${encodeURIComponent(query)}`;
  } else {
    alert('Please enter something to search');
  }
}