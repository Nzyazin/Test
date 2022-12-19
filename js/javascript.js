/* Dropdown menu  main*/
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

/* Dropdown menu  adapt*/
const dropdownBtn1 = document.getElementById("btn1");
const dropdownMenu1 = document.getElementById("dropdown1");
const toggleArrow1 = document.getElementById("arrow1");

const toggleDropdown1 = function () {
    dropdownMenu1.classList.toggle("show1");
    toggleArrow1.classList.toggle("arrow1");
};

dropdownBtn1.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown1();
});

document.documentElement.addEventListener("click", function () {
    if (dropdownMenu1.classList.contains("show1")) {
        toggleDropdown1();
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

    /* Проверяем количество item: */
    if (n > cont_item2.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = cont_item2.length
    }

    /* Проходим по каждому item в цикле for: */
    for (let item of cont_item2) {
        item.style.display = "none";
    }
    /* Делаем элемент flex: */
    cont_item2[slideIndex - 1].style.display = "flex";
}

/* Placeholder */
let holder = document.querySelectorAll('.holder');
let span_holder = document.querySelectorAll('.span_holder');

for(let i = 0; i < holder.length; i++){
    holder[i].addEventListener('input', function(){
        span_holder[i].style.display = ( this.value == "" ) ? 'inline' : 'none';
    });
}


/* Menu nav toggle */
$('#nav_toggle').on('click', function(event) {
    event.preventDefault();

    $(this).toggleClass('active'),
        $('#nav').toggleClass('active');
});


// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}