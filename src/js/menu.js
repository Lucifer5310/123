const log4js = require("log4js");
log4js.configure({
appenders: { log: { type: "file", filename: "file-log.log" } },
categories: { default: { appenders: ["log"], level: "info" } }
});

const logger = log4js.getLogger("MENU");

//создаем переменную, в которую кладем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//переменная, в которую кладем меню
let menu = document.querySelector('.sidebar');
let menuIcon = document.querySelector('#menu-icon');
//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    logger.info("Menu clicked.");
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    //вешаем класс на меню, когда кликнули по кнопке
    menu.classList.toggle('visible');
    menuIcon.classList.toggle('icon-active')
})