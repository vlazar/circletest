import { foo } from "../src/index";

describe("foo", function() {
  it("is imported", function() {
    expect(foo).toEqual("foo");
  });
});
