/// <reference types="Cypress" />

describe('Adding items', () => {
  beforeEach(() => {
    // cy.visit('/');
    cy.stubAndVisit();
  });

  it('should start with 0 items', () => {
    cy.getByTestId('todo-list')
      .find('li.todo')
      .should('have.length', 0);
  });

  it('should have 2 items after 2 items added', () => {
    cy.getByTestId('new-todo')
      .type('Buy milk')
      .type('{enter}')
      .type('Take kids from school')
      .type('{enter}');
    cy.getByTestId('todo-list')
      .find('li.todo')
      .should('have.length', 2);
  });

  it('should correctly add 2 items', () => {
    cy.getByTestId('new-todo')
      .type('Buy milk')
      .type('{enter}')
      .type('Take kids from school')
      .type('{enter}');
    cy.contains('li.todo', 'Buy milk').should('be.visible');
    cy.contains('li.todo', 'Take kids from school').should('be.visible');
  });
});
