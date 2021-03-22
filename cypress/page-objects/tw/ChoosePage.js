export default class ChoosePage {
	nextStepButton = () => cy.get('#btnChooseNext1')

	choosePageTitle = () => cy.get('.pageTitle')

	clickNextStepButton() {
		this.nextStepButton().click()
	}

	verifyPageTitle() {
		this.choosePageTitle().contains('Choose')
	}
}
