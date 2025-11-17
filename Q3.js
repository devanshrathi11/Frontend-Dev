// Q3: Library Management System

class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "111"),
    new Book("Harry Potter", "J.K. Rowling", "222"),
    new Book("Atomic Habits", "James Clear", "333", true),
    new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "444")
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));

function issueByISBN(isbn) {
    let book = books.find(b => b.isbn === isbn);
    if (book && !book.isIssued) {
        book.issueBook();
        console.log(`Book Issued: ${book.title}`);
    } else {
        console.log("Book not found or already issued");
    }
}

issueByISBN("222");
