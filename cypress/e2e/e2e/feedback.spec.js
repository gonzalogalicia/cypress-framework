import FeedbackPage from '../../page-objects/pages/FeedbackPage'

describe('Feedback Test using Fixtures', () => {
    before(function() {
        FeedbackPage.load()
    })

    it('Should submit feedback form', () => {
        FeedbackPage.submitFeedback()
    })
})
