const Intern = require('../lib/Intern');

test('Can set school via constructor', () => {
    const testValue = 'UC Berkeley';
    const i = new Intern('Foo', 1, 'test@test.com', testValue);
    expect(i.school).toBe(testValue);
  });
  
  test('getRole() should return "Intern"', () => {
    const testValue = 'Intern';
    const i = new Intern('Foo', 1, 'test@test.com', 'UC Berkeley');
    expect(i.getRole()).toBe(testValue);
  });
  
  test('Can get school via getSchool()', () => {
    const testValue = 'UC Berkeley';
    const i = new Intern('Foo', 1, 'test@test.com', testValue);
    expect(i.getSchool()).toBe(testValue);
  });