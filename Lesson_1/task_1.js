"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
    albums: [
        {
            title: "Name1",
            artist: "performer1",
            year: "2000"
        },
        {
            title: "Name2",
            artist: "performer2",
            year: "2005"
        },
        {
            title: "Name3",
            artist: "performer3",
            year: "2020"
        },
    ],
    * [Symbol.iterator]() {
        for (const album of this.albums) {
            yield album;
        }
    }
}

for (const album of musicCollection) {
     console.log(`${album.title} - ${album.artist} - ${album.year}`);
}

// Для себя))
//    [Symbol.iterator]() {
//     let nextIndex = 0;
//     const array = this.albums;
//     return {
//         next() {
//             return nextIndex < array.length
//               ? { value: array[nextIndex++], done: false }
//               : { done: true };
//           },
//         };
//     }