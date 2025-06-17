let leftBorder = document.querySelectorAll('.left_border');
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
});
