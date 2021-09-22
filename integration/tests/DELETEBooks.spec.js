import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';

describe('DELETE Books', () => {
    it('Deletar um livro', ()=> {
        GETBooks.allBooks().then((resAllBooks) => {
            cy.log()
            DELETEBooks.deleteBook(resAllBooks.body[0].ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200)
            })
        })
    })
})