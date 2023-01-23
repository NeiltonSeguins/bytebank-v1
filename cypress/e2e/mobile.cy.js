describe('Tesntando múltiplas páginas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.location('pathname').should('eq', '/home');
  });

  it(
    'Deve existir um botão menu burguer',
    () => {
      cy.getByData('menu-burguer').click();
      cy.getByData('menu-lateral').find('a').eq(3).click();
      cy.location('pathname').should('eq', '/home/investimentos');
    }
  );
});