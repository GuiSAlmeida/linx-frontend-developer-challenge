/// <reference types="cypress" />

describe('Test register form', () => {
  it('Should show all error messages if all form inputs is empty', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#register-form > .button').click();
    cy.get('#register-warnings').should('contain', 'Preencha todos campos!');
  });

  it('Should show message error if email input is empty', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#name').type('Guilherme');
    cy.get('#cpf').type('123456789');
    cy.get('#male').check();
    cy.get('#register-form > .button').click();

    cy.get('#register-warnings').should('have.text', 'Preencha email válido!');
  });

  it('Should show message success on form submit with all inputs filled', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#name').type('Guilherme');
    cy.get('#email').type('guilherme.dasilva@linx3.com');
    cy.get('#cpf').type('123456789');
    cy.get('#male').check();
    cy.get('#register-form > .button').click();

    cy.get('#register-warnings').should('have.text', 'Enviado!');
  });

  it('Should delete inputs when form submit with success', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#name').type('Guilherme');
    cy.get('#email').type('guilherme.dasilva@linx3.com');
    cy.get('#cpf').type('123456789');
    cy.get('#male').check();
    cy.get('#register-form > .button').click();

    cy.get('#name').should('have.value', '');
    cy.get('#email').should('have.value', '');
    cy.get('#cpf').should('have.value', '');
    cy.get('#male').should('not.be.checked');
    cy.get('#female').should('not.be.checked');
  });
});

describe('Test share form', () => {
  it('Should show all error messages if all form inputs is empty', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#share-form > .button').click();
    cy.get('#share-warnings').should('have.text', 'Preencha campo nome!Preencha email válido!');
  });

  it('Should show email error messages if input is empty', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#name-friend').type('Fulano');
    cy.get('#share-form > .button').click();

    cy.get('#share-warnings').should('have.text', 'Preencha email válido!');
  });

  it('Should show name error messages if input is empty', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#email-friend').type('Fulano@gmail.com');
    cy.get('#share-form > .button').click();

    cy.get('#share-warnings').should('have.text', 'Preencha campo nome!');
  });

  it('Should show message success on form submit with all inputs filled', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#name-friend').type('Fulano');
    cy.get('#email-friend').type('Fulano@gmail.com');
    cy.get('#share-form > .button').click();

    cy.get('#share-warnings').should('have.text', 'Enviado!');
  });

  it('Should delete inputs when share form submit with success', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#name-friend').type('Fulano');
    cy.get('#email-friend').type('Fulano@gmail.com');
    cy.get('#share-form > .button').click();

    cy.get('#name-friend').should('have.value', '');
    cy.get('#email-friend').should('have.value', '');
  });
});
