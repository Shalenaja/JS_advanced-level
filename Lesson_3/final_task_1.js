"use strict";
/*# Заключительное задание.
Создайте две html-страницы:*/

/*1. Страница добавления отзыва о продукте.
Должна содержать форму с полем для ввода названия продукта и текстовое поле 
для текста отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в localstorage.
Необходимо реализовать проверку, оба поля должны быть заполнены, если это не 
так, необходимо выводить ошибку пользователю. */

//myStorage = window.localStorage;

const product = document.querySelector(".product");
const commentText = document.querySelector(".comment");
const comments = document.querySelector(".comments");
const errorBox = document.querySelector(".error-box");
const button = document.querySelector("button");

let UserList = JSON.parse(localStorage.getItem("UserList")) || [];

const updateUserList = () => {
  comments.innerHTML = "";

  UserList.forEach((item) => {
    const commentEl = document.createElement("p");
    commentEl.textContent = `${item.productName} : ${item.comment}`;
    comments.append(commentEl);
  });
  localStorage.setItem("UserList", JSON.stringify(UserList));
};

button.addEventListener("click", () => {
  try {
    if (product.value !== "" && commentText.value !== "") {
      const user = {
        productName: product.value,
        comment: commentText.value,
      };
      UserList.push(user);
      (product.value = ""), (commentText.value = ""), updateUserList();
      errorBox.textContent = "";
    } else {
      throw new Error("Заполните оба поля!");
    }
  } catch (err) {
    errorBox.textContent = err.message;
  } finally {
    console.log("Добавление комментария завершено");
  }
});
updateUserList();
//localStorage.clear()
