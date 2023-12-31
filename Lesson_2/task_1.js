"use strict";
/* Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку */

function hasDuplicates(arr) {
  return new Set(arr).size === arr.length;
}

class Library {
  #books = [];

  constructor([...arg]) {
    try {
      if (hasDuplicates([...arg])) {
        this.books = [...arg];
        console.log("No Duplicates found.");
      } else {
        throw new Error("Duplicate elements found.");
      }
    } catch (err) {
      console.log(err.name + ":" + err.message);
    } finally {
      console.log("Library created");
    }
  }

  allBooks() {
    return this.#books;
  }

  addBook(title) {
    try {
      if (this.books.indexOf(title) === -1) {
        this.books.push(title);
      } else {
        throw new Error("книга с таким названием уже существует в списке");
      }
    } catch (err) {
      console.log(err.name + ":" + err.message);
    } finally {
      console.log("Book added");
    }
  }

  removeBook(title) {
    try {
      if (this.hasBook(title)) {
        this.books.splice(this.books.indexOf(title), 1);
        return this.books;
      } else {
        throw new Error("книги с таким названием не существует в списке");
      }
    } catch (err) {
      console.log(err.name + ":" + err.message);
    } finally {
      console.log("Book deleted");
    }
  }

  hasBook(title) {
    return this.books.some((book) => book === title);
  }
}

const myLibrary = new Library([
  "Пышка",
  "Королева Марго",
  "Всадник без головы",
]);
console.log(myLibrary);
myLibrary.addBook("Чебурашка");
console.log(myLibrary);
myLibrary.addBook("Чебурашка");
console.log(myLibrary.hasBook("Чебурашка"));
console.log(myLibrary.hasBook("Чебур"));
myLibrary.removeBook("Чебурашка");
console.log(myLibrary);
console.log(myLibrary.allBooks());
