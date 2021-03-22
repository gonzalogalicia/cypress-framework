import CartPage from '../../page-objects/tw/CartPage'
import CheckoutPage from '../../page-objects/tw/CheckoutPage'
import ChoosePage from '../../page-objects/tw/ChoosePage'
import PersonalizePage from '../../page-objects/tw/PersonalizePage'

const choose = new ChoosePage()
const personalize = new PersonalizePage()
const cart = new CartPage()
const checkout = new CheckoutPage()

describe('B2C Purchase flow', () => {
	it('should navigate from Choose design to Checkout', () => {
		cy.visit(Cypress.env('b2c'))
		choose.clickNextStepButton()
		cy.wait(4000)
		personalize.clickThisIsForMeButton()
        cy.wait(4000)
		personalize.clickAddToCartButton()
        cy.wait(4000)
		cart.clickCheckoutButton()
		cy.wait(4000)
        checkout.checkoutPageTitle()
	})
})
