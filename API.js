
let Books = [
    {
        name: 'Half of a yellow sun',
        author: 'Chinua Achebe',
        year: '2006',
        serial_No: '1111'

    },
       { name: 'Rich Dad poor Dad',
        author: 'Rober Kiyosaki',
        year: '1997',
        serial_No: '2222'
       },
]


let avaliable_books = {
    1111: 5,
    2222: 5,
}

let borrowBooks = []

class book {
    constructor(_collection = {title,author,year,serial_No}){
        this.title = _collection.title
        this.author = _collection.author
        this.year = _collection.year
        this.serial_No = _collection.serial_No
    }

    add_collection(Books) {
        Books.year = new Date().toISOString()
        Books.push(collection)
        avaliable_books[collection.serial_No] = avaliable_books[Book.serial_No] ? avaliable_books[Book.serial_No] + 1 : 1
       
        return Books
      }


      
}

console.log(Books)
console.log(avaliable_books)
