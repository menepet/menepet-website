/* eslint-disable no-undef */
describe('Visits Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('contains visible buttons', () => {
    cy.get('.icon').should('be.visible')
    cy.get('img.w-100').should('be.visible')
  })

  it('waits and clicks button to About Page', () => {
    cy.wait(13 * 1000)
    cy.contains('menePet')
    cy.contains('Petousis Menelaos')
    cy.contains('Software Engineer')
    cy.contains('click here').click()
  })
})

describe('Visits About Page', () => {
  it('successfully loads', () => {
    cy.url().should('include', '/about')
    cy.get('.d-none > .btn').click()
  })
})

describe('Visits Resume Page', () => {
  it('successfully loads', () => {
    cy.url().should('include', '/resume')
  })

  it('contains visible buttons', () => {
    cy.get('.container > :nth-child(2) > .svg-inline--fa').should('be.visible')
    cy.get('a > .svg-inline--fa').should('be.visible')
  })

  it('clicks button to Contact Page', () => {
    cy.get('.w-100 > .btn').click()
  })
})

describe('Visits Contact Page', () => {
  it('successfully loads', () => {
    cy.url().should('include', '/contact')
  })

  it('contains visible buttons', () => {
    cy.get('.fork-me').should('be.visible')
    cy.get('.btn').should('be.visible')
  })
})

describe('Checks light/dark theme functionality', () => {
  it('has dark mode as system default', () => {
    cy.get('html').should('have.class', 'dark-mode')
  })

  it('changes from light to dark', () => {
    cy.get('input[type="checkbox"]').click()
    cy.get('input[type="checkbox"]').click()
  })

  it('has light mode', () => {
    cy.get('html').should('have.class', 'light-mode')
  })
})
