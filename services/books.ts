import api from "./axios"
export type Book = {
    id: any;
    name: string,
    description: string,
    isbn: string,
    isBorrowed: boolean,
};
export type UpdateBook = {
    id: string,
    name: string,
    description: string,
    isbn: string,
}

export type CreateBook = {
    isbn: string,
    name: string,
    description: string
};

export const getAllBooks = async (): Promise<Book[]> => {
    const response = await api.get('/books');
    return response.data as Book[];
};

export const createBook = async (request: CreateBook): Promise<Book> => {
    const response = await api.post('/books', request);
    return response.data as Book;
};

export const updateBook = async (request: UpdateBook): Promise<Book> => {
    const response = await api.put('/books', request);
    return response.data as Book;
};
