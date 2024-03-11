import {palindromeChecker} from "../src/palindromeChecker";

test("test palindrome checker", () => {
    const result = palindromeChecker("civic");
    expect(result).toBe(true);
});