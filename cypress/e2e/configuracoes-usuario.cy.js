import { faker } from '@faker-js/faker/locale/pt_BR';

describe('Atualização de dados do usuário', () => {
  const novoUsuario = {
    nome: faker.name.fullName(),
    senha: faker.internet.password(),
  };

  beforeEach(() => {
    // Carrega os dados do usuário a partir do arquivo fixtures
    cy.fixture('usuarios.json').as('usuario');
  });

  it('Deve permitir o usuario atualizar seus dados', () => {
    cy.get('@usuario').then((usuario) => {
      // Faz login antes de cada teste
      cy.login(usuario[0].email, usuario[0].senha);

      //Visita a página Home e verifica se a url inclui o caminho /home
      cy.visit('/home');
      cy.url().should('include', '/home');

      // Verifica se o nome do usuário logado aparece na tela
      cy.contains(usuario[0].nome).should('be.visible');

      // Clica na página de minha conta
      cy.getByData('app-home').find('a').eq(1).click();

      // Verifica se a nova url inclui o caminho /minha-conta
      cy.url().should('include', '/minha-conta');
      cy.getByData('botao-salvar-alteracoes').should('be.disabled');

      cy.get('[name = "nome"]').type(novoUsuario.nome);
      cy.get('[name = "senha"]').type(novoUsuario.senha);

      cy.getByData('botao-salvar-alteracoes').should('not.be.disabled');
      cy.getByData('botao-salvar-alteracoes').click();

      cy.on('window:alert', (textoDoAlerta) => {
        // Verificar se o texto do alerta está correto
        expect(textoDoAlerta).to.equal('Alterações salvas com sucesso!');
      });

      cy.url().should('include', '/home');

      cy.window().then((win) => {
        expect(win.localStorage.getItem('nomeUsuario')).to.equal(
          novoUsuario.nome
        );
        const userId = win.localStorage.getItem('userId');

        // Faz uma requisição para a API e verifica se os dados estão corretos
        cy.request('GET', `http://localhost:8000/users/${userId}`).then(
          (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.nome).to.be.equal(novoUsuario.nome);
            expect(response.body.senha).to.be.equal(novoUsuario.senha);
          }
        );
      });
    });
  });
});
