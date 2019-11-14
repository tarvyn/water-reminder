import { getGreeting } from '../support/app.po';

describe('frontend-react', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to frontend-react!');
  });
});
