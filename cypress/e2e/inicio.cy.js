describe('Página inicial', () => {
  it('Deve renderizar o h1 da página com o texto correto', () => {
    cy.visit('http://localhost:3000/');
    cy.get('h1').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
