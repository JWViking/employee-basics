const Intern = require('../lib/Intern.js');
describe('test intern', () => {

    test('creates an intern object extended from employee', () => {
        const intern = new Intern('Bob', 2, 'bob@juno.com', 'UofU');

        expect(intern.school).toEqual(expect.any(String));
    });
});