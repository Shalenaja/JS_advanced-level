"use strict";

/*
2. Страница просмотра отзывов.
Показывает список всех продуктов, на которые были оставлены отзывы.
Рядом с каждым продуктом должна быть кнопка "показать отзывы" / "скрыть отзывы" 
(надпись кнопки меняется), при нажатии на которую показываются / скрываются 
отзывы продукта.
После текста отзыва должна быть кнопка "удалить", которая удаляет данный отзыв 
из localstorage и со страницы. 
Если удалены все отзывы продукта, то продукта вовсе должен быть удален, как из 
localstorage, так и со страницы. */

const arr2 = [
  {
    id: "1",
    name: "шляпа",
    com: [
      { id: 1, c: "отзыв_1" },
      { id: 2, c: "отзыв_2" },
    ],
  },
  {
    id: "2",
    name: "кепка",
    com: [
      { id: 3, c: "отзыв_3" },
      { id: 4, c: "отзыв_4" },
    ],
  },
];

const products = document.querySelector(".products");
products.innerHTML = arr2.map(
  (p) => `<div>
<h3>${p.name}</h3>      
<button class="buttonShow" id="${p.id}">показать отзывы</button>
</div>`
);

const buttonShows = document.querySelectorAll(".buttonShow");
const boxComments = document.querySelector(".box-comments");
const arrRes = [];
const arrRes2 = [];
let size = arr2.length;
buttonShows.forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "скрыть отзывы";
    const idBtn = button.id;
    for (const el of arr2) {
      if (el.id === idBtn) {
        const arrComments = el.com;
        arrComments.forEach((e) => {
          arrRes.push(e);
        });
      }
    }
    boxComments.innerHTML = arrRes.map(
      (p) => `<div>
       <p>${p.c}</p>      
       <button class="dell" id="${p.id}">удалить</button>
       </div>`
    );
    const dells = document.querySelectorAll(".dell");
    dells.forEach((dell) => {
      dell.addEventListener("click", () => {
        const idBtnD = Number(dell.id);
        let i = 0;
        while (i < size) {
          for (const el of arr2) {
            if (el.com[i].id === idBtnD) {
              const a = el.com[i];
              console.log(a);
              console.log(el.com[i]);
              console.log(el.com);
              const index = el.com.indexOf(a);
              el.com.splice(index, 1);
              console.log(index);
              const arrComments2 = el.com;
              arrComments2.forEach((e) => {
                arrRes2.push(e);
              });
            }
          }
          i++;
        }
        boxComments.innerHTML = arrRes2.map(
          (p) => `<div>
            <p>${p.com}</p>      
            <button class="dell" id="${p.id}">удалить</button>
            </div>`
        );
      });
    });
  });
});
