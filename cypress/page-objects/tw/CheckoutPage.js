export default class CheckoutPage {
	// Billing page elements
	submitOrderButton = () => cy.get('#btnCheckoutNext1')

	checkoutPageTitle = () => cy.get('.pageTitle')

	totalAmount = () => cy.get('.half text-right')

	iAgreeCheckbox = () => cy.get('#tandc')

	// CC Info

	fieldCreditCardNumber = () => cy.get('#cc_number')

	fieldCvvNumber = () => cy.get('#cc_sec')

	dropdownMonth = () => cy.get('#months')

	dropdownYear = () => cy.get('#years')

	// Billing Info

	fieldFirstName = () => cy.get('#first_name')

	fieldLastName = () => cy.get('#last_name')

	fieldEmail = () => cy.get('#from_email')

	fieldPhone = () => cy.get('#phone')

	fieldAddressLineOne = () => cy.get('#address1')

	fieldCity = () => cy.get('#city')

	fieldZip = () => cy.get('#zip')

	// Interact with Billing page

	clickOnSubmitOrderButton() {
		this.submitOrderButton().click()
	}

	verifyTotalAmount() {
		this.totalAmount().should('not.equal', '$0.00')
	}

	checkAgreeCheckbox() {
		this.iAgreeCheckbox().check()
	}

	verifyCheckoutPageTitle() {
		this.checkoutPageTitle().contains('Checkout')
	}

	// Fill CC Info

	fillCreditCardNumber(creditcard) {
		this.fieldCreditCardNumber().type(creditcard)
	}

	fillCvvNumber(cvv) {
		this.fieldCvvNumber().type(cvv)
	}

	selectDropdownMonth() {
		this.dropdownMonth().select('03').should('have.value', '03')
	}

	selectDropdownYear() {
		this.dropdownYear().select('2030').should('have.value', '2030')
	}

	// Fill Billing Info

	fillFirstName(fn) {
		this.fieldFirstName().type(fn)
	}

	fillLasttName(ln) {
		this.fieldLastName().type(ln)
	}

	fillEmail(email) {
		this.fieldEmail().type(email)
	}

	fillPhoneNumber(pn) {
		this.fieldPhone().type(pn)
	}

	fillAddressLineOne(add1) {
		this.fieldAddressLineOne().type(add1)
	}

	fillCity(city) {
		this.fieldCity().type(city)
	}

	fillZip(zip) {
		this.fieldZip().type(zip)
	}
}
