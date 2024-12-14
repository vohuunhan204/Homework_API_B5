import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    getAllBooks(): Book[] {
        return this.booksService.getAllBooks();
    }

    @Post()
    addBook(@Body() book: Book) {
        this.booksService.addBook(book);
    }
}
