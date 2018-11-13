// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('getByTestId', (testId, options = {}) => {
  return cy.get(`[data-testid="${testId}"]`, options);
});

Cypress.Commands.add('addTodo', (item, options = {}) => {
  cy.getByTestId('new-todo', options)
    .type(item, options)
    .type('{enter}', options);
});

Cypress.Commands.add('completeTodo', (number, options = {}) => {
  cy.get('li.todo')
    .eq(number)
    .find('input[type=checkbox]')
    .check();
});

Cypress.Commands.add('deleteTodo', (number, options = {}) => {
  cy.get('li.todo')
    .eq(number)
    .find('button.destroy')
    .click({ force: true });
});

Cypress.Commands.add('stubAndVisit', () => {
  cy.server();
  cy.route('/api/todos', []);
  cy.visit('/');
});
