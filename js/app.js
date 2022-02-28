

let icon = document.getElementById('listIcon');
let list = document.getElementById('list');


// Show menu on icon click
icon.addEventListener('click', () =>{
    list.classList.toggle('show');
})

// If the menu is displayed -> hide on window click
window.onclick =  (e) => {
    if (e.target != icon) {
        if (list.classList.contains('show')) {
            list.classList.remove('show');
        }
    }
}
