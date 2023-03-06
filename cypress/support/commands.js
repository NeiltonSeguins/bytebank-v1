Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('login', (email, senha) => {
  cy.visit('/');
  cy.getByData('botao-login').click();
  cy.getByData('email-input').type(`${email}`);
  cy.getByData('senha-input').type(`${senha}`);
  cy.getByData('botao-enviar').click();
  cy.url().should('contain', '/home');
});
