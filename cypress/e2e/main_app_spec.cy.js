describe('main app', () => {
  it('loads the main page', () => {
    cy.visit('http://localhost:3001')
    .get("h1").contains("Welcome to Wally's Wonder Festival App!")
  })
})