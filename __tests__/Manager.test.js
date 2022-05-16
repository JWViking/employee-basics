const Manager = require('../lib/Manager.js');
describe('test manager', () => {

    test('creates an manager object extended from employee', () => {
        const manager = new Manager('Bob', 2, 'bob@juno.com', '801-444-2345');

        expect(manager.officeNumber).toEqual(expect.any(String));
    });
});