/*
Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window['FLS'] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// Функционал 
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
flsFunctions.addTouchClass();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInitTop();
flsFunctions.menuInitLeft();
/* Учет плавающей панели на мобильных устройствах при 100vh */
flsFunctions.fullVHfix();

/*
Модуль работы с табами
*/
flsFunctions.tabs();

// Работа с формами
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/

/* Oтправка формы */
// flsForms.formSubmit();

/* Модуль работы с select. */
import './libs/select.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
*/
// import "./files/forms/inputmask.js";

/* Модуль работы с подсказками (tippy) */

// Работа со слайдером (Swiper)
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./files/sliders.js";

// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация плагина: https://github.com/verlok/vanilla-lazyload
import './files/scroll/lazyload.js';


// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// Документация: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
flsScroll.pageNavigation();

// Прочие плагины 

/* Динамический адаптив */
// Документация: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
import "./libs/dynamic_adapt.js";

// Прочее 
/* Подключаем файлы со своим кодом */
import "./files/script.js";