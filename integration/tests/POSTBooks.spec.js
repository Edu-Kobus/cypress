import * as POSTBooks from '../requests/POSTBooks.request'

describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        POSTBooks.addBook().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq("Livro")
        })
    })
})