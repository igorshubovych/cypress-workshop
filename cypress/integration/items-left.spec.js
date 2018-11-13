describe('Items left counter', () => {
  beforeEach(() => {
    cy.stubAndVisit();
  });

  context('Empty list', () => {
    it('should not be visible by default', () => {
      cy.getByTestId('todo-count')
        .should('not.be.visible');
    });

    it('should not be visible after we add and remove item', () => {
      cy.addTodo('Buy milk');
      cy.deleteTodo(0);
      cy.getByTestId('todo-count')
        .should('not.be.visible');
    });
  });

  context('Non-empty list', () => {
    beforeEach(() => {
      for(let i=0; i<5; i++) {
        cy.addTodo(`Item ${i+1}`, { log: false });
      }
    });

    it('should be visible', () => {
      cy.getByTestId('todo-count').should('be.visible');
    });

    it('should be on active tab', () => {
      cy.getByTestId('filter-active').click();
      cy.getByTestId('todo-count').should('be.visible');
    });

    it('should be on completed tab', () => {
      cy.getByTestId('filter-completed').click();
      cy.getByTestId('todo-count').should('be.visible');
    });

    it('should have 5 items left', () => {
      cy.getByTestId('todo-count')
        .should('contain', '5')
        .and('contain', 'items left');
    });

    it('should have 3 items left after 2 completed', () => {
      cy.completeTodo(0);
      cy.completeTodo(1);
      cy.getByTestId('todo-count')
        .should('contain', '3')
        .and('contain', 'items left');
    });
  });
});
