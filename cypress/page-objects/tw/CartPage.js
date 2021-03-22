export default class CartPage {
	checkoutButton = () => cy.get('#btnCartNext2')

	cartPageTitle = () => cy.get('.pageTitle')

	totalAmount = () => cy.get('.half text-right')

	clickCheckoutButton() {
		this.checkoutButton().click({ force: true })
	}

	verifyTotalAmount() {
		this.totalAmount().should('not.equal', '$0.00')
	}

	verifyCartPageTitle() {
		this.cartPageTitle().contains('Cart')
	}
}
