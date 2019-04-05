describe ('Remove items', () => {
  beforeEach(() => {
    cy.stubAndVisit();
  });

  it('should destroy items', () => {
    cy.get('li.todo').should('have.length', 0);
    cy.getByTestId('new-todo')
      .type('Buy milk{enter}');
    cy.get('li.todo').should('have.length', 1);
    cy.get('li.todo')
      .first()
      .find('button.destroy')
      .click({force: true});
    cy.get('li.todo').should('have.length', 0);
  });
});
