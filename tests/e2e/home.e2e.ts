describe('Home', () => {
  describe('Search', () => {
    it('displays a card with searched post title', () => {
      const postTitle = 'sapiente omnis fugit eos';

      cy.visit('/').wait(1000);

      cy.findByLabelText('Search')
        .type(postTitle)
        .should('have.value', postTitle);

      cy.findByText(postTitle).should('exist');
    });
  });
});
