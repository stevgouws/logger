import { getNextUrl } from "../../components/NextButton";

describe("NextButton", () => {
  it("should return '/2' if the current url is '/1'", () => {
    const urls = ["/1", "/2"];
    expect(getNextUrl({ currentUrl: "/1", urls })).toEqual("/2");
  });

  it("should return the same url if it's the last one", () => {
    const urls = ["/1", "/2"];
    expect(getNextUrl({ currentUrl: "/2", urls })).toEqual("/2");
  });
});
