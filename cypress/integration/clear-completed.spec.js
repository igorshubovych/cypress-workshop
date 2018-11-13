describe ('Clear completed', () => {
  beforeEach(() => {
    cy.stubAndVisit();
  });

  it('should remove completed items from list after button clicked', () => {
    for (let i=0; i<5; i++) {
      cy.addTodo(`Item ${i+1}`, { log: false });
    }
    cy.completeTodo(0);
    cy.completeTodo(1);
    cy.get('li.todo').should('have.length', 5);
    cy.getByTestId('clear-completed')
      .click();
      cy.get('li.todo').should('have.length', 3);
  });
});
