describe('Formulário de Login', () => {
  it('Deve acessar a página home', () => {
    cy.login('neilton@alura.com', '123456');
    cy.visit('/home');
    cy.getByData('titulo-boas-vindas').should('contain', 'Bem vindo de volta!');
  });
  // it('Não deve permitir um endereço de email inválido', () => {
  //   cy.getByData('botao-login').click();
  //   cy.getByData('email-input').type('neilton@alura');
  //   cy.getByData('botao-enviar').click();
  //   cy.getByData('mensagem-erro')
  //     .should('exist')
  //     .contains('O email digitado é inválido');
  // });

  // it('Não deve permitir campo de email em branco', () => {
  //   cy.getByData('botao-login').click();
  //   cy.getByData('botao-enviar').click();
  //   cy.getByData('mensagem-erro')
  //     .should('exist')
  //     .contains('O campo email é obrigatório');
  // });
});
