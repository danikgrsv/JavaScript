'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// Главный объект
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренних фильмов?', 'Название фильма:');
    let b = prompt('Насколько баллов можете его оценить?', 'Оценка:');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('succes');
    } else {
        console.log('error');
        i--;
    }
}

if (numberOfFilms.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (10 <= numberOfFilms.count < 30) {
    console.log("Вы классический зритель");
} else if (numberOfFilms.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Что то не то');
}

console.log(personalMovieDB);