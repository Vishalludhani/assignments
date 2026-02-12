/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/


class Book{
    constructor(title, author, pages, isAvailable=true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true;
    }

    borrow(){
        this.isAvailable=false;
    }

    returnBook(){
        this.isAvailable=true;
    }

    getInfo(){
        return this.title+":"+this.author+"("+this.pages+")"
    }

    isLongBook(){
        return this.pages>300
    }

}

let Book1=new Book("Harry Potter","J.K Rowling",375,true)
let Book2=new Book("Percy Jackson","Rick Riordon",350,true)
let Book3=new Book("The Great Gatsby","F.Scott",180,true)
let Book4=new Book("To kill a Mockingbird","Harper Lee",281,true)
let Book5=new Book("The Hobbit","J.R.R Tolkien",310,true)

let books = [Book1, Book2, Book3, Book4, Book5]

console.log("i. Display info of all books:")
for(let book of books){
    console.log(book.getInfo())
}

console.log("\nii. Borrow 2 books:")
Book1.borrow()
Book2.borrow()
console.log(`${Book1.title} is available: ${Book1.isAvailable}`)
console.log(`${Book2.title} is available: ${Book2.isAvailable}`)

console.log("\niii. Return 1 book:")
Book2.returnBook()
console.log(`${Book2.title} is available: ${Book2.isAvailable}`)

console.log("\niv. Count long books (more than 300 pages):")
let longBookCount = 0
for(let book of books){
    if(book.isLongBook()){
        longBookCount++
    }
}
console.log(`Total long books: ${longBookCount}`)

console.log("\nv. List all available books:")
for(let book of books){
    if(book.isAvailable){
        console.log(book.getInfo())
    }
}