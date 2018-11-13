describe ('Filters', () => {
  beforeEach(() => {
    cy.stubAndVisit();
  });

  it('should have filters invisible initially', () => {
    cy.getByTestId('filters').should('not.be.visible');
  });

  it('should have filters after first element added', () => {
    cy.getByTestId('filters').should('not.be.visible');
    cy.getByTestId('new-todo')
      .type('Buy milk')
      .type('{enter}');
    cy.getByTestId('filters').should('be.visible');
  });

  context('Filters clicking', () => {
    beforeEach(() => {
      for(let i=0; i<5; i++) {
        cy.addTodo(`Item ${i+1}`, { log: false });
      }
    });

    it('should have 0 completed items', () => {
      cy.getByTestId('filter-completed').click();
      cy.get('li.todo').should('have.length', 0);
    });

    it('should have 1 completed items, after it become completed', () => {
      cy.completeTodo(0);
      cy.getByTestId('filter-completed').click();
      cy.get('li.todo').should('have.length', 1);
    });

    it('should have 4 completed items, after one become completed', () => {
      cy.completeTodo(0);
      cy.getByTestId('filter-active').click();
      cy.get('li.todo').should('have.length', 4);
    });

    it('should have 0 completed items, after user unmark completed item', () => {
      cy.completeTodo(0);
      cy.getByTestId('filter-completed').click();
      cy.get('li.todo')
        .first()
        .find('input[type=checkbox]')
        .click();
      cy.get('li.todo').should('have.length', 0);
      cy.getByTestId('filter-active').click();
      cy.get('li.todo').should('have.length', 5);
    });

    it('should have completed items crossed', () => {
      cy.completeTodo(0);

      cy.get('li.todo')
        .first()
        .contains('label', 'Item 1')
        .should('have.css', 'text-decoration')
          .and('match', /line-through/);

      cy.get('li.todo')
        .eq(1)
        .contains('label', 'Item 2')
        .should('have.css', 'text-decoration')
          .and('match', /solid/);
    });
  });
});
