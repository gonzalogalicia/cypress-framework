export default class PersonalizePage {
	addToCartButton = () => cy.get('#btnPersonalizeNext1')

	personalizePageTitle = () => cy.get('.pageTitle')

	thisIsForMeButton = () => cy.get('#btnPersonalizeForme')

	firstNameMissingErrorMsg = () => cy.get('#to_first_name_error_message')

	lastNameMissingErrorMsg = () => cy.get('#to_last_name_error_message')

	totalAmount = () => cy.get('#total')

	clickAddToCartButton() {
		this.addToCartButton().click()
	}

	clickThisIsForMeButton() {
		this.thisIsForMeButton().click()
	}

	verifyFirstNameMissingErrorMsg() {
		this.firstNameMissingErrorMsg().should('be.visible')
	}

	verifyLastNameMissingErrorMsg() {
		this.lastNameMissingErrorMsg().should('be.visible')
	}

	verifyTotalAmount() {
		this.totalAmount().should('not.equal', '$0.00')
	}

	verifyPageTitle() {
		this.personalizePageTitle().contains('Personalize')
	}
}
