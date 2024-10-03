const categories = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    // Спробуємо знайти заголовок
    const categoryTitle = category.querySelector('h2');
    
    if (categoryTitle) { // Перевіряємо, чи заголовок знайдений
        const elementsCount = category.querySelectorAll('ul li');
        
        // Додаємо класи
        categoryTitle.classList.add('title-h2'); // Додаємо клас до h2
        const ulElement = category.querySelector('ul');
        if (ulElement) {
            ulElement.classList.add('item-list'); // Додаємо клас до ul
        }
        
        elementsCount.forEach(item => item.classList.add('item-list-item')); // Додаємо клас до li

        console.log(`Category: ${categoryTitle.textContent}`);
        console.log(`Elements: ${elementsCount.length}`);
    } else {
        console.error('Category title not found'); // Лог повідомлення про помилку
    }
});
