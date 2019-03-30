describe('Basic checks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have correct title', () => {
    cy.title().should('be.equal', 'TodoMVC');
  });

  it('should have correct header', () => {
    cy.get('h1').should('contain', 'todos');
  });
});
