import { isImpar } from "./script";

test("should return 'É par' when the number is even", () => {
  expect(isImpar(2)).toBe("É par");
});

test("should return 'É impar' when the number is odd", () => {
  expect(isImpar(3)).toBe("É impar");
});
