it('API Test - Chuck Norris Challenge', () => {
	cy.request({
		method: 'GET',
		url: 'https://api.chucknorris.io/jokes/random',
		failOnStatusCode: false,
	}).as('joke')
	cy.get('@joke').its('status').should('equal', 200)
})

it('API Test - Validate Status Code', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 200)
})
