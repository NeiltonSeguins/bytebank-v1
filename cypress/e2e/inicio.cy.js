describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Deve renderizar o h1 da página com o texto correto', () => {
    // cy.get('[data-test="titulo-principal"]').contains(
    //   'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    // );
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
