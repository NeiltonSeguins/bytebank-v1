context('GET /users', () => {
  it('Deve retornar uma lista de usuários', () => {
    cy.request('GET', 'http://localhost:8000/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).length.to.be.greaterThan(1);
    });
  });
});

context('GET /users/:userId', function () {
  it('Deve retornar um único usuário', function () {
    cy.request(
      'GET',
      'http://localhost:8000/users/40a41438-84a6-4b4d-ae1d-7f1713d0a9fe'
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('nome');
    });
  });
});

it('Deve retornar um erro quando o usuário for inválido', function () {
  cy.request({
    method: 'GET',
    url: 'http://localhost:8000/users/40a41438-84a6-4b4d',
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
    expect(response.body).to.eq('Not Found');
  });
});

context('Interceptando solicitações de rede', () => {
  it('Testando interceptação de login', () => {
    cy.intercept('POST', 'users/login').as('loginRequest');

    cy.login('neilton@alura.com', '123456');

    cy.wait('@loginRequest').then((interception) => {
      // Simulando uma resposta de sucesso
      interception.response = {
        statusCode: 200,
        body: {
          success: true,
          message: 'Login bem sucedido!',
        },
      };
      cy.visit('/home');

      // Verificando o comportamento da aplicação após o login
      cy.getByData('titulo-boas-vindas').should(
        'contain.text',
        'Bem vindo de volta!'
      );
    });
  });
  Cypress.session.clearAllSavedSessions();
});

context('Fazendo login com variáveis de ambiente', function () {
  it('Deve permitir o login do usuário Neilton', function () {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8000/users/login',
      body: Cypress.env(),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).is.not.empty;
      expect(response.body.user).to.have.property('nome');
      expect(response.body.user.nome).to.be.equal('Neilton Seguins');
    });
  });
});