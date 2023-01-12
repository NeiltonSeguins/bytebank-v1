describe('Formulário de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Não deve permitir um endereço de email inválido', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .contains('O email digitado é inválido');
  });

  it.only('Não deve permitir campo de email em branco', () => {
    cy.getByData('botao-login').click();
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .contains('O campo email é obrigatório');
  });
});
