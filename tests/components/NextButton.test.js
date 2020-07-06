import { getNextUrl } from "../../components/NextButton";

describe("NextButton", () => {
  it("should return test", () => {
    expect(true).toEqual(true);
    expect(getNextUrl()).toEqual("test");
  });
});
