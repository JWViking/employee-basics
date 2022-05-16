const Employee = require('../lib/Employee.js');
describe('test employee', () => {


    test('creates an employee object', () => {
        const employee = new Employee('Bob', 2, 'bob@juno.com');

        expect(employee.name).toEqual('Bob');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
});