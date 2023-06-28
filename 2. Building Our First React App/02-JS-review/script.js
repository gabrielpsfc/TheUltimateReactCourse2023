const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//destructuring

const book = getBook(3)
book

//const title = book.title
//const author = book.author

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book // o nome das variáveis deve ser o mesmo das propriedades nos obj

console.log(author, title, genres)

// Destructuring with arrays, instead of relaying on property names, relays on order.

//const primaryGenre = genres[0]
//const secondaryGenre = genres[1]


//rest and spread operator              //rest operator
const [primaryGenre, secondaryGenre, ...otherGenres/**rest operator, needs to be in the end */] = genres

console.log(primaryGenre, secondaryGenre, otherGenres)

const newGenres = [/*spread operator, take all the values in the array and place one by one*/...genres, 'epic fantasy']
const newnewGenres = ["epic fantasy", ...genres]
newGenres
newnewGenres
// spread operator
const updatedbook = { ...book, moviePublicationDate: '2001-12-19',/**overwrithing page value on book */ pages: 150 }
updatedbook

const updatebook2 = { pages: 150, ...book, moviePublicationDate: '2001-12-19' } // The last value of the property exceeds the first.
updatebook2


//template literals
const year = val => val.split('-')[0]
const summary = `${title}, a ${pages}-page long book, was writton by ${author} and published in ${year(publicationDate)}, the book has${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`
summary

const pagesRange = (pages > 1000 ? 'over thousand' : 'less than 1000')
pagesRange
console.log(`the book has ${pagesRange} pages`)



console.log(true && "some string")
console.log(false && "some string")
console.log(hasMovieAdaptation && 'this book has a movie')

//falsy: 0, '', null, undefined, false, NaN
/**
 * 
false: O valor booleano falso.
0: O número zero.
'' (string vazia): Uma string sem caracteres.
null: Representa a ausência intencional de um valor.
undefined: Representa uma variável não inicializada ou uma propriedade de objeto inexistente.
NaN: Representa um valor que não é um número (Not-a-Number).
 */
console.log('jonas' && 'Something')
// retorna o ultimo ou o ultimo valor falso
console.log("0" && "Some String" && null && '85')

console.log(true || ' any')
console.log(false || "ok")


console.log(book.translations.spanish)

const spanishTranslation = book.translations.spanish || 'not translated'

console.log(false || false || 0 || null)
console.log(false || false || 0 || 'ok' || null || 'last') // retorna o primeiro verdado, se nenhum for verdadeiro, retorna o ultimo falso
console.log('nu' && undefined && 0)
console.log("ok" && "Qi" && "last") // se todos foram verdadeiros retorna o ultimo verdadeiro, se algum for falso, retorna o primeiro falso
spanishTranslation

const count = book.reviews.librarything?.reviewsCount ?? "no data"
count
console.log(book.reviews.librarything?.reviewsCount ?? 'ok')
console.log(book.reviews.librarything?.reviewsCount)

// ?? == ||

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount
  const librarything = book.reviews.librarything?.reviewsCount ?? 0
  return goodreads + librarything
}
const rev = getTotalReviewCount(book)
rev

console.log(NaN || 0 || undefined || 'ok' || '' || null)
console.log(0 ?? NaN ?? '2' ?? 'ok' ?? '' ?? null)

const booksMap = getBooks()

const x = [1, 2, 3, 4, 5].map(el => el * 2)
x

const booksTitles = booksMap.map(book => book.title)
booksTitles

const essentialData = booksMap.map(book => (
  {
    title: book.title,
    author: book.author,
    reviewsCount: (book.reviews.goodreads?.reviewsCount ?? 0) + (book.reviews.librarything?.reviewsCount ?? 0)
  }
))
essentialData

const logBooks = booksMap.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation)
logBooks

const adventureBooks = booksMap.filter(book => book.genres.includes('adventure')).map(book => book.title)
adventureBooks


const pagesAllBooks = booksMap.reduce((acc, book) => acc + book.pages, 0)
pagesAllBooks

const y = [3, 7, 1, 9, 6]
const sortedCresc = [...y].sort((a, b) => b - a)
const sortedDecresc = [...y].sort((a, b) => a - b)

sortedDecresc
sortedCresc

const sortedByPages = booksMap.slice().sort((a, b) => a.pages - b.pages).map(book => book.pages)
sortedByPages

//1) add book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: 'J. K. Rowling'
}

const booksAfterAdding = [...booksMap, newBook]
booksAfterAdding

//2) Delete book object from array

const bookAfterDelete = booksAfterAdding.filter(book => book.id !== booksAfterAdding.length)
bookAfterDelete

//3) update book obj in the array

const bookAfterUpdate = bookAfterDelete.map(book => book.id === 1 ? { ...book, pages: 11 } : book)
bookAfterUpdate



const res = await fetch('https://jsonplaceholder.typicode.com/todos')
const dataFetch = await res.json()

fetch('https://jsonplaceholder.typicode.com/todos').then(
  res => res.json().then(data => console.log(data))
)
//dataFetch

async function getTodos(url) {
  const res = await fetch(url)
  const dataFetch = await res.json()
  return dataFetch
}
const todosData = getTodos('https://jsonplaceholder.typicode.com/todos')
console.log(todosData)


