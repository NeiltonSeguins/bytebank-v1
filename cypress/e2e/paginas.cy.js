describe('Tesntando múltiplas páginas', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('neilton@alura.com');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.location('pathname').should('eq', '/home');
  });

  it('Deve conseguir acessar a página de Cartões ', () => {
    cy.getByData('app-home').find('a').eq(1).click();
    cy.location('pathname').should('eq', '/home/cartoes');
  });

  it.skip('Deve conseguir realizar uma transação', () => {
    cy.getByData('select-opcoes').select('Transferência');
    cy.getByData('form-input').type('50');
    cy.getByData('realiza-transacao').click();

    cy.getByData('lista-transacoes').children().should('have.length', 3);
  });

  it.skip('Deve permitir sair da aplicação/fazer logout', () => {
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });

  afterEach(() => {
    cy.getByData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
});
