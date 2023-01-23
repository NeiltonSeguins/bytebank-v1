export const isMobile = () => {
  return Cypress.config('viewportWidth') < 425;
};
