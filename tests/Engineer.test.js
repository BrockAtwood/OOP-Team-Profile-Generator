const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with name, id, email, and GitHub", () => {
      const Employ = new Engineer("Brock", 1, "b@yahoo.com", "BrockAtwood");
      expect(Employ.name).toEqual("Brock");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("b@yahoo.com");
      expect(Employ.GitHub).toEqual("BrockAtwood");
    });
    it("should cause an error if no argument is provided", () => {
      const Employ = () => new Engineer();
      expect(Employ).toThrow;
    });
    it("should cause an error if the name is not a string", () => {
      const Employ = () => new Engineer(23, 1, "b@yahoo.com", "BrockAtwood");
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a number", () => {
      const Employ = () =>
        new Engineer("brock", "brock", "b@yahoo.com", "BrockAtwood");
      expect(Employ).toThrow;
    });
    it("should cause an error if the id is not a positive number", () => {
      const Employ = () =>
        new Engineer("brock", -1, "b@yahoo.com", "BrockAtwood");
      expect(Employ).toThrow;
    });
    it("should cause an error if the email is not a verified email address", () => {
      const Employ = () =>
        new Engineer("brock", 1, "b@bb@yahoo.com", "BrockAtwood");
      expect(Employ).toThrow;
    });
    it("should cause an error if the GitHub is not a string", () => {
      const Employ = () => new Engineer("brock", "brock", "b@yahoo.com", 2);
      expect(Employ).toThrow;
    });
  });
  describe("getName()", () => {
    it("should return this.name value", () => {
      const gotName = new Engineer("brock", 1, "b@yahoo.com", "BrockAtwood");
      const testingName = gotName.name;
      expect(testingName).toEqual("brock");
    });
  });
  describe("getId()", () => {
    it("should return this.id value", () => {
      const gotId = new Engineer("brock", 1, "b@yahoo.com", "BrockAtwood");
      const testingId = gotId.id;
      expect(testingId).toEqual(1);
    });
  });
  describe("getEmail()", () => {
    it("should return this.email value", () => {
      const gotEmail = new Engineer("brock", 1, "b@yahoo.com", "BrockAtwood");
      const testingEmail = gotEmail.email;
      expect(testingEmail).toEqual("b@yahoo.com");
    });
  });
  describe("getGitHub()", () => {
    it("should return this.GitHub value", () => {
      const gotGitHub = new Engineer("brock", 1, "b@yahoo.com", "BrockAtwood");
      const testingGitHub = gotGitHub.GitHub;
      expect(testingGitHub).toEqual("BrockAtwood");
    });
  });
  describe("getRole()", () => {
    it("should return a string", () => {
      const gotRole = new Engineer("brock", 1, "b@yahoo.com", "BrockAtwood");
      const testingRole = gotRole.getRole();
      expect(testingRole).toEqual("Engineer");
    });
  });
});
