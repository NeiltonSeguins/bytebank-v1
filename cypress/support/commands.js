Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('login', (email, senha) => {
  cy.visit('http://localhost:3000');
  cy.getByData('botao-login').click();
  cy.getByData('email-input').type(`${email}`);
  cy.getByData('senha-input').type(`${senha}`);
  cy.getByData('botao-enviar').click();
});
