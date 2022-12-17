/* Dropdown menu */
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    }
});

/* Slider */

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let cont_item2 = document.getElementsByClassName("сontent_item2");
    let min_cont = document.getElementsByClassName("mini_container");
    let cont_buttons = document.getElementsByClassName("content_buttons");
    /* Проверяем количество item: */
    console.log(cont_item2.length)
    if (n > cont_item2.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = cont_item2.length
    }
    /* Проверяем количество container */
    if (n > min_cont.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = min_cont.length
    }

    /* Проходим по каждому cont в цикле for: */
    for (let cont of min_cont) {
        cont.style.display = "none";
    }
    /* Делаем элемент flex: */
    min_cont[slideIndex - 1].style.display = "flex";

    /* Проходим по каждому item в цикле for: */
    for (let item of cont_item2) {
        item.style.display = "none";
    }
    /* Делаем элемент flex: */
    cont_item2[slideIndex - 1].style.display = "flex";
}