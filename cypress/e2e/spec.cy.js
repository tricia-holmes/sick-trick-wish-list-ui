describe('skateboard page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {
      fixture: 'tricks.json',
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', {
      response: 'new_trick.js',
    }).as('PostAPI')

    cy.visit('http://localhost:3000')
  })

  it('should have a sick title', () => {
    cy.get('h1').contains('Sick Trick Wish List')
  })

  it('should have a form for new tricks', () => {
    cy.get('form')
      .get('select[name="stanceList"]')
      .get('input[name="name"]')
      .get('select[name="obstacleList"]')
      .get('input[name="url"]')
      .get('button')
      .contains('Send It!')
  })

  it('should have tricks displayed', () => {
    cy.get('.tricks')
      .get('#1')
      .contains('regular treflip')
      .get('#1')
      .contains('flatground')
      .get('#1')
      .contains('https://www.youtube.com/watch?v=XGw3YkQmNig')

    cy.get('.tricks')
      .get('#4')
      .contains('goofy Fakie Ollie')
      .get('#4')
      .contains('flatground')
      .get('#4')
      .contains('https://www.youtube.com/watch?v=9N9swrZU1HA')
  })

  it('should let a user input new trick info', () => {
    cy.get('form')
      .get('select[name="stanceList"]')
      .select('Goofy')
      .get('input[name="name"]')
      .type('Nollie')
      .get('select[name="obstacleList"]')
      .select('Flatground')
      .get('input[name="url"]')
      .type(
        'https://www.surfertoday.com/skateboarding/the-ultimate-list-of-skateboard-tricks'
      )
      .get('button')
      .click()
  })
})
