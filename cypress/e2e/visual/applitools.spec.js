import { url } from '../../../config'

describe('Applitools Home Page check', () => {
	beforeEach(() =>
		cy.eyesOpen({
			appName: 'Zero Bank',
			batchName: 'Test Batch',
			apiKey: Cypress.env('applitoolsApiKey'),
		})
	)
	afterEach(() => cy.eyesClose())

	it('should take a screenshot after visiting homepage', () => {
		cy.visit(url)
		cy.eyesCheckWindow('Homepage')
	})
})
