document.addEventListener('DOMContentLoaded', () => {
    const sizes = document.querySelectorAll('.size');
    const price = document.querySelector('.productPrice');

    sizes.forEach((size, index) => {
        size.addEventListener('mouseover', event => {
            const sizeValue = event.target.dataset.size;
            if (sizeValue == 2) {
                price.textContent = "$135";
            }
            if (sizeValue == 3) {
                price.textContent = "$175";
            }
        });

        size.addEventListener('click', () => {
            sizes.forEach(otherSize => {
                if (otherSize !== size) {
                    otherSize.style.backgroundColor = 'white';
                    otherSize.style.color = 'black';
                }
            });
            size.style.backgroundColor = 'black';
            size.style.color = 'white';
        });
    });
});