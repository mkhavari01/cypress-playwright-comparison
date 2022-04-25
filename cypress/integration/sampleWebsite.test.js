// cy.exec() - to run system commands
// cy.task() - to run code in Node via the pluginsFile
// cy.request() - to make HTTP requests

describe('My First Test', () => {

  // beforeEach(() => {
    // If you're running node.js on your server, you might add a before or beforeEach hook that executes an npm task.
    // in the blow code we see api configration for our testing

    ///reset and seed the database prior to every test
    ///cy.exec('npm run db:reset && npm run db:seed')

    ///seed a post in the DB that we control from our tests
    ///cy.request('POST', '/test/seed/post', {
    ///  title: 'First Post',
    ///  authorId: 1,
    ///  body: '...',
    ///})

    ///cy.request('POST', '/test/seed/user', { name: 'Mahdi' })
    ///  .its('body')
    ///  .as('currentUser')
  // })

  it('Visit Page ', () => {
    cy.visit("/")
  });

  it('finds the content "type"', () => {
    cy.contains('type').click();
  });

  // it("stops the cypress to track and debug",()=>{
  //   cy.pause()
  // });

  it('checking the url is the one that we want', () => {
    cy.url().should('include', '/commands/actions')
  });

  // testing errors

  it('Get an input, type into it and verify that the value has been updated', () => {
    cy.get('.action-email')
    .type('mkhavari0120@gmail.com')
    .should('have.value', 'falseValue@gmail.com')
  });

})