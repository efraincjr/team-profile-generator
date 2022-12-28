const Manager = require('../lib/Manager');

test('Can set office number via constructor', () => {
    const testValue = 100;
    const m = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(m.officeNumber).toBe(testValue);
  });
  
  test('getRole() should return "Manager"', () => {
    const testValue = 'Manager';
    const m = new Manager('Foo', 1, 'test@test.com', 100);
    expect(m.getRole()).toBe(testValue);
  });
  
  test('Can get office number via getOfficeNumber()', () => {
    const testValue = 100;
    const m = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(m.getOfficeNumber()).toBe(testValue);
  });