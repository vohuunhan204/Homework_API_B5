import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
    private books: Book[] = [];

    getAllBooks(): Book[] {
        return this.books;
    }

    addBook(book: Book) {
        book.id = this.books.length + 1;
        book.createdAt = new Date();
        book.updatedAt = new Date();
        this.books.push(book);
    }
}
