const Employee = require('../lib/Employee');

test('can create a new employee object', () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe('object');
});

test('Can set name in epmloyee object', () => {
  const employee = new Employee("Efrain");
  expect(employee.name).toBe("Efrain");

});

test('Can set emplyee_id in epmloyee object', () => {
  const employee = new Employee("Efrain", 13);
  expect(employee.employee_id).toBe(13);

});

test('Can set email in epmloyee object', () => {
  const employee = new Employee("Efrain", 13, "efraincastrojr@gmail.com");
  expect(employee.email).toBe("efraincastrojr@gmail.com");

});

test('Can get name from getName() method', () => {
  const employee = new Employee("Efrain", 13, "efraincastrojr@gmail.com");
  expect(employee.getName()).toBe("Efrain");

}); 