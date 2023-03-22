describe('Jornada do usuário', () => {
  it('Deve permitir que o usuário acesse a aplicação, realize uma transação, visite outras páginas e realize um logout', () => {
    cy.visit('http://localhost:3000/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('80');
    cy.getByData('realiza-transacao').click();

    cy.getByData('app-home').find('a').eq(4).click();
    cy.location('pathname').should('eq', '/home/investimentos');

    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
});
