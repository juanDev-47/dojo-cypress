describe('Todo list Compiled', () => {
    it('Page initial compiled', () => {
        cy.visit('http://localhost:3000/');
        cy.contains('Mi lista de tareas');
    });

    it('I can add Task', () => {
        cy.visit('http://localhost:3000/');
        cy.get("#input-task")
          .type('Nueva tarea Bonita');
        cy.get("#form-submit").click();
        cy.get('[name=label-task]').contains('Nueva tarea Bonita').should('contain', 'Nueva tarea Bonita')
    });
});