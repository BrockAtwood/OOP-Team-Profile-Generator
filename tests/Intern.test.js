const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and GitHub", () => {
      const Employ = new Intern("Brock", 1, "b@yahoo.com", "school");
      expect(Employ.name).toEqual("Brock");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("b@yahoo.com");
      expect(Employ.school).toEqual("school");
    });
    it("should cause an error if no argument is provided", () => {
      const Employ = () => new Intern();
      expect(Employ).toThrow;
    });
    it("should cause an error if the name is not a string", () => {
      const Employ = () => new Intern(23, 1, "b@yahoo.com", "school");
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a number", () => {
      const Employ = () =>
        new Intern("brock", "brock", "b@yahoo.com", "school");
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a positive number", () => {
      const Employ = () => new Intern("brock", -1, "b@yahoo.com", "school");
      expect(Employ).toThrow;
    });
    it("should cause an error if the email is not a verified email address", () => {
      const Employ = () => new Intern("brock", 1, "b@bb@yahoo.com", "school");
      expect(Employ).toThrow;
    });
    it("should cause an error if the school is not a string", () => {
      const Employ = () => new Intern("brock", "brock", "b@yahoo.com", 2);
      expect(Employ).toThrow;
    });
  });
  describe("getName()", () => {
    it("should return this.name value", () => {
      const gotName = new Intern("brock", 1, "b@yahoo.com", "school");
      const testingName = gotName.getName();
      expect(testingName).toEqual("brock");
    });
  });
  describe("getId()", () => {
    it("should return this.id value", () => {
      const gotId = new Intern("brock", 1, "b@yahoo.com", "school");
      const testingId = gotId.getId();
      expect(testingId).toEqual(1);
    });
  });
  describe("getEmail()", () => {
    it("should return this.email value", () => {
      const gotEmail = new Intern("brock", 1, "b@yahoo.com", "school");
      const testingEmail = gotEmail.getEmail();
      expect(testingEmail).toEqual("b@yahoo.com");
    });
  });
  describe("getSchool()", () => {
    it("should return this.GitHub value", () => {
      const gotSchool = new Intern("brock", 1, "b@yahoo.com", "school");
      const testingSchool = gotSchool.getSchool();
      expect(testingSchool).toEqual("school");
    });
  });
  describe("getRole()", () => {
    it("should return a string", () => {
      const gotRole = new Intern("brock", 1, "b@yahoo.com", "school");
      const testingRole = gotRole.getRole();
      expect(testingRole).toEqual("Intern");
    });
  });
});
