import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
	static login(username, password) {
		cy.login(username, password)
	}

	static clickForgotPasswordLink() {
		cy.contains('Forgot your password ?').click()
	}

	static displayErrorMessage() {
		//cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
		cy.isVisible('.alert-error')
	}
}
