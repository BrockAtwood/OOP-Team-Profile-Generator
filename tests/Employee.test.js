const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with name, id and email", () => {
      const Employ = new Employee("Brock", 1, "b@yahoo.com");
      expect(Employ.name).toEqual("Brock");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("b@yahoo.com");
    });
    it("should cause an error if no argument is provided", () => {
      const Employ = () => new Employee();
      expect(Employ).toThrow;
    });
    it("should cause an error if the name is not a string", () => {
      const Employ = () => new Employee(23, 1, "b@yahoo.com");
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a number", () => {
      const Employ = () => new Employee("brock", "brock", "b@yahoo.com");
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a positive number", () => {
      const Employ = () => new Employee("brock", -1, "b@yahoo.com");
      expect(Employ).toThrow;
    });
    it("should cause an error if the email is not a verified email address", () => {
      const Employ = () => new Employee("brock", 1, "b@bb@yahoo.com");
      expect(Employ).toThrow;
    });
  });
  describe("getName()", () => {
    it("should return this.name value", () => {
      const gotName = new Employee("brock", 1, "b@yahoo.com");
      const testingName = gotName.getName();
      expect(testingName).toEqual("brock");
    });
  });
  describe("getId()", () => {
    it("should return this.id value", () => {
      const gotId = new Employee("brock", 1, "b@yahoo.com");
      const testingId = gotId.getId();
      expect(testingId).toEqual(1);
    });
  });
  describe("getEmail()", () => {
    it("should return this.email value", () => {
      const gotEmail = new Employee("brock", 1, "b@yahoo.com");
      const testingEmail = gotEmail.getEmail();
      expect(testingEmail).toEqual("b@yahoo.com");
    });
  });
  describe("getRole()", () => {
    it("should return a string", () => {
      const gotRole = new Employee("brock", 1, "b@yahoo.com");
      const testingRole = gotRole.getRole();
      expect(testingRole).toEqual("Employee");
    });
  });
});
