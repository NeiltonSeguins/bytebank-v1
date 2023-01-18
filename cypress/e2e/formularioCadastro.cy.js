describe('Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  context('Cenário feliz :)', () => {
    it('Deve permitir que usuários se cadastrem na aplicação', () => {
      cy.getByData('botao-cadastro').click();
      cy.getByData('nome-input').type('Guilherme Lima');
      cy.getByData('email-input').type('gui@uol.com');
      cy.getByData('senha-input').type('456789');
      cy.getByData('checkbox-input').click();
      cy.getByData('botao-enviar').click();
      cy.getByData('mensagem-sucesso')
        .should('exist')
        .contains('Usuário cadastrado com sucesso!');
    });
  });

  context('Cenário triste :(', () => {
    it('Não deve permitir o cadastro de usuários com o mesmo email', () => {
      cy.getByData('botao-cadastro').click();
      cy.getByData('nome-input').type('Neilton Seguins');
      cy.getByData('email-input').type('neilton@alura.com');
      cy.getByData('senha-input').type('123456');
      cy.getByData('checkbox-input').click();
      cy.getByData('botao-enviar').click();
      cy.getByData('mensagem-erro')
        .should('exist')
        .contains('E-mail já cadastrado!');
    });
  });
});
