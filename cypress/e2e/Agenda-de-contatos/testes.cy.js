///  <reference types="cypress" />

describe('Testes dos contatos', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('Deve incluír 1 contato', () => {
    cy.get('input[type=text]').type('Aaron da Costa')
    cy.get('input[type=email]').type('teste@exemplo.com')
    cy.get('input[type=tel]').type('11 911112222')
    cy.get('.adicionar').click()

    cy.contains('Aaron da Costa').should('exist');
    cy.contains('teste@exemplo.com').should('exist');
    cy.contains('11 911112222').should('exist');
  })

  it('Deve editar 1 contato', () => {
    cy.get('.edit').first().click()
    cy.get('input[type=text]').clear().type('Novo nome')
    cy.get('input[type=email]').clear().type('exemplo@exemplo.com')
    cy.get('input[type=tel]').clear().type('11 922221111')
    cy.get('.alterar').click()

    cy.contains('Novo nome').should('exist');
    cy.contains('exemplo@exemplo.com').should('exist');
    cy.contains('11 922221111').should('exist');
  })

  it('Deve excluir 1 contato', () => {
    cy.get('.delete').first().click()
    cy.contains('Novo nome').should('not.exist');
  })
})