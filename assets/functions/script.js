const open = document.querySelector('#openMenu');
const close = document.querySelector('#closeMenu');
const sidenav = document.querySelector('#sideNav');

console.log(open)

open.addEventListener('click', () => {
    sidenav.style.display = 'flex';
});

close.addEventListener('click', () => {
    sidenav.style.display = 'none';
})