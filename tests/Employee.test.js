const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with name, id and email", () => {
      const Employee = new Employee("Brock", 1, "b@yahoo.com");
      expect(Employee.name).toEqual("Brock");
      expect(Employee.id).toEqual(1);
      expect(Employee.email).toEqual("b@yahoo.com");
    });
    it("should cause an error if no argument is provided", () => {
      const Employee = new Employee();
      expect(Emplyoee).toThrow;
    });
  });
});
