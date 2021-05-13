describe('store-shared-ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=headercomponent--primary&knob-title=')
  );

  it('should render the component', () => {
    cy.get('bg-hoard-header').should('exist');
  });

  it('should show the title', () => {
    cy.visit(
      '/iframe.html?id=headercomponent--primary&knob-title=BoardGameHoard'
    );

    cy.get('bg-hoard-header').contains('BoardGameHoard');
  });
});
