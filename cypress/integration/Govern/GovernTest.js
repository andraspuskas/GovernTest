describe('Govern test', function () {
    it('Visit page', function () {
        cy.visit("https://govern.hu/kezdolap");
    });

    it('Accept cookies', function () {
        cy.get('.custom-control-label').click();
        cy.get('[class="btn btn-primary"]').click();
        Cypress.Cookies.preserveOnce('cookies-accepted');
    });

    it('Navigate', function () {
        if ( Cypress.config("viewportWidth") <= 1200 ) cy.get('#hamburger-menu-button').click();
        cy.contains('Szoftvereink').trigger('mouseover');
        cy.contains('Dobozos szoftverek').click();
        Cypress.Cookies.preserveOnce('cookies-accepted');
    });

    it('Product count', function () {
        cy.get('.product-item').should('have.length', 27);
    });

    it('Click and check Meshwork', function () {
        cy.get('[title="Meshwork"] > .product-item > a').invoke('removeAttr', 'target').click();
        cy.url().should('eq', 'https://govern.hu/termek/meshwork');
    });
});
