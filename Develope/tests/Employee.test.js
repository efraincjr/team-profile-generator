const employee = requirer("../Employee");

test("can create a new employee object", () => {
  const employee = new Employee();
  expect(typeof employee.toBe("object"));
});
