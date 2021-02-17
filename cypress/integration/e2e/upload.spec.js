describe('Test file upload', () => {
	beforeEach(function () {
		cy.visit('')
	})
	it('Should upload a text file', () => {
		cy.get('h1').contains('Sample File Upload Form')
		cy.get('[type="file"]').attachFile('text.txt')
		cy.get('[type="submit"]').click()
		cy.get('h1').contains('File Upload Results')
	})
})
