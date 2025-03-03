describe('Actions', () => {
    const title = 'Test movie'
    const description = 'Test description'
    const releaseYear = '2000'

    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('button:contains(Add new movie)').as('addMovieButton')
        cy.get('button:contains(Sort by year published)').as('sortButton')
    })

    it('Open movie form, and close it', () => {
        cy.get('@addMovieButton').should('have.text', 'Add new movie').click()
        cy.get('button:contains(✖)').click()
        cy.contains('JAMDb')
    })

    it('Add movie', () => {
        cy.get('@addMovieButton').click()

        cy.get('input[name=title]').type(title)
        cy.get('textarea[name=description]').type(description)
        cy.get('input[name=published]').type(releaseYear)

        cy.get('button[type=submit]').click()
        cy.contains('JAMDb')
    })

    it('Sort by date added', () => {
        const divNames: string[] = []
        cy.get('div').each((element) => divNames.push(element.find('h6').text()))
        //cy.wrap(strings).should('equal', strings.sort())

        cy.get('@sortButton').click()
    })
})
