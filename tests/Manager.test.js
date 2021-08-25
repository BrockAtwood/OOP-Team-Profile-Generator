const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and office number", () => {
      const Employ = new Manager("Brock", 1, "b@yahoo.com", 2);
      expect(Employ.name).toEqual("Brock");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("b@yahoo.com");
      expect(Employ.officeNumber).toEqual(2);
    });
    it("should cause an error if no argument is provided", () => {
      const Employ = () => new Manager();
      expect(Employ).toThrow;
    });
    it("should cause an error if the name is not a string", () => {
      const Employ = () => new Manager(23, 1, "b@yahoo.com", 2);
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a number", () => {
      const Employ = () => new Manager("brock", "brock", "b@yahoo.com", 2);
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a positive number", () => {
      const Employ = () => new Manager("brock", -1, "b@yahoo.com", 2);
      expect(Employ).toThrow;
    });
    it("should cause an error if the email is not a verified email address", () => {
      const Employ = () => new Manager("brock", 1, "b@bb@yahoo.com", 2);
      expect(Employ).toThrow;
    });
    it("should cause an error if the office number is not a number", () => {
      const Employ = () => new Manager("brock", "brock", "b@yahoo.com", 2);
      expect(Employ).toThrow;
    });
    it("should cause an error if the office number is not a positive number", () => {
      const Employ = () => new Manager("brock", -1, "b@yahoo.com", -2);
      expect(Employ).toThrow;
    });
  });
  describe("getName()", () => {
    it("should return this.name value", () => {
      const gotName = new Manager("brock", 1, "b@yahoo.com", 2);
      const testingName = gotName.name;
      expect(testingName).toEqual("brock");
    });
  });
  describe("getId()", () => {
    it("should return this.id value", () => {
      const gotId = new Manager("brock", 1, "b@yahoo.com", 2);
      const testingId = gotId.id;
      expect(testingId).toEqual(1);
    });
  });
  describe("getEmail()", () => {
    it("should return this.email value", () => {
      const gotEmail = new Manager("brock", 1, "b@yahoo.com", 2);
      const testingEmail = gotEmail.email;
      expect(testingEmail).toEqual("b@yahoo.com");
    });
  });
  describe("getofficeNumber()", () => {
    it("should return this.officeNumber value", () => {
      const gotofficeNumber = new Manager("brock", 1, "b@yahoo.com", 2);
      const testingofficeNumber = gotofficeNumber.officeNumber;
      expect(testingofficeNumber).toEqual(2);
    });
  });
  describe("getRole()", () => {
    it("should return a string", () => {
      const gotRole = new Manager("brock", 1, "b@yahoo.com");
      const testingRole = gotRole.getRole();
      expect(testingRole).toEqual("Manager");
    });
  });
});
