import { url } from '../../../config'

beforeEach(() => {
	cy.eyesOpen({ 
		appName: 'Zero Bank', 
		testName: Cypress.currentTest.title,
	 })
})

afterEach(() => {
	cy.eyesClose()
}) 

describe('Applitools Home Page check', () => {
	it('should take a screenshot after visiting homepage', () => {
		cy.visit(url)
		cy.eyesCheckWindow('Homepage')
	})
})
