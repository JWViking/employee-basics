const Engineer = require('../lib/Engineer.js');
describe('test engineer', () => {

    test('creates an engineer object extended from employee', () => {
        const engineer = new Engineer('Bob', 2, 'bob@juno.com', 'BobCoder');

        expect(engineer.github).toEqual(expect.any(String));
    });
});