const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// Главный объект
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
};

let firstQuestLastFilm = prompt('Один из последних просмотренних фильмов?', 'Название фильма:');
let firstQuestRating = +prompt('Насколько баллов можете его оценить?', 'Оценка:');

let secondQuestLastFilm = prompt('Один из последних просмотренних фильмов?', 'Название фильма:');
let secondQuestRating = +prompt('Насколько балов можете его оценить?', 'Оценка:');

personalMovieDB.movies[firstQuestLastFilm] = firstQuestRating;      //первый фильм
personalMovieDB.movies[secondQuestLastFilm] = secondQuestRating;        //второй фильм
personalMovieDB.genres = [1, 2, 3, 4, 5, 6];

console.log(personalMovieDB);
