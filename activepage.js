const activePage = window.location.pathname;
const navlinks = document.querySelectorAll('nav li a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})