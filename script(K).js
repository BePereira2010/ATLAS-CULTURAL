const leftBorderBox = document.getElementById('left-border-box');
const box1 = document.getElementById('box1');

box1.addEventListener('click', function() {
    leftBorderBox.classList.toggle('visible');
});

// PREVIOUS CODE FOR TOGGLING LEFT BORDER:
/*let leftBorder = document.querySelectorAll('.left_border');
const button_box_1 = document.querySelectorAll('.left_border_button');
leftBorder.forEach(Element => Element.style.display = 'none');
//button box function toggleLeftBorder()
button_box_1.forEach(button => {
    button.addEventListener('click', function() {
        leftBorder.forEach(border => {
            if (border.style.display === 'none') {
                border.style.display = 'block';
            } else {
                border.style.display = 'none';
            }
        });
    });
});*/

/*<!--Why aren't you rendering?-->*/

document.addEventListener('DOMContentLoaded', function() {
    const filterbox = document.getElementById('filterbox');
    const dropdown = filterbox.querySelector('.filter-dropdown');

    // Toggle dropdown on filterbox click
    filterbox.addEventListener('click', function(e) {
        dropdown.classList.toggle('open');
        e.stopPropagation(); // Prevent click from bubbling up
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!filterbox.contains(e.target)) {
            dropdown.classList.remove('open');
        }
    });

    // Optional: Hide dropdown on pressing Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdown.classList.remove('open');
        }
    });
});