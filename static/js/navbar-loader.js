const currentPage = window.location.pathname || "/";

console.log(currentPage);
document.addEventListener("DOMContentLoaded", function() {
    fetch("/navbar.html")
    .then(response => response.text())
    .then(data => {
        const navbarPlaceholder = document.getElementById("navbar-placeholder");
        navbarPlaceholder.innerHTML = data;
        const dropdownItem = document.querySelector(`a.dropdown-item[href="${currentPage}"]`);
        if (dropdownItem) {
            dropdownItem.classList.add('nav-link-current');
        }
        const navLink = document.querySelector(`a.nav-link[href="${currentPage}"]`);
        if (navLink) {
            navLink.classList.add('nav-link-current');
        }

        const gamesLink = document.querySelector("a.nav-link[href='/games.html']");
        if (gamesLink && currentPage.includes("/games/")) {
            gamesLink.classList.add('nav-link-current');
        }
    });
});