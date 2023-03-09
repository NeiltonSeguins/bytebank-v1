describe('Formulário de Login', () => {
  it('Deve acessar a página home', () => {
    cy.fixture('usuarios').then((usuario) => {
      cy.login(usuario[1].email, usuario[1].senha);
      cy.visit('/home');
      cy.url().should('include', '/home');
      cy.getByData('titulo-boas-vindas').should(
        'contain',
        'Bem vindo de volta!'
      );
      cy.contains(usuario[1].nome).should('be.visible');
    });
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
