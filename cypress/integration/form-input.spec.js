describe('Form input', () => {
    /*
    it('Visits the app', () => {
        cy.visit('/');
    })
    */
    it('Focuses the input on load', () => {
        cy.visit('/');
        cy.focused()
            .should('have.class', 'input-test');
    })

    it.only('Accepts input', () => {
        const typedText = 'Test input';
        cy.visit('/');
        cy.get('.input-test')
            .type(typedText)
            .should('have.value', typedText)
    })
})