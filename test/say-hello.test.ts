import { sayHello } from "../src/say-hello";

describe("SayHello", () => {
    it("should return Hello Izhar", () => {
        expect(sayHello("Izhar")).toBe("Hello Izhar");
    });
});
