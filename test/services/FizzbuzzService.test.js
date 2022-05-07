const FizzbuzzService = require("../../app/lib/services/FizzbuzzService");

describe("Unit Test for FizzbuzzService", () => {
  
  test("1.- Validaciones para FizzbuzzService SIN multiplo de 3 | 5", () => {
    const explorer1 = {name: "Carlo", score: 1 }
    const explorer = FizzbuzzService.applyValidationInExplorer(explorer1);
    expect(explorer1.trick).toBe(1)
  })
  
  test("2.- Validaciones para FizzbuzzService CON multiplo de 3", () => {
    const explorer3 = {name: "Carlo", score: 3 }
    const explorer = FizzbuzzService.applyValidationInExplorer(explorer3);
    expect(explorer3.trick).toBe('FIZZ')
  })
  
  test("3.- Validaciones para FizzbuzzService CON multiplo de 5", () => {
    const explorer5 = {name: "Carlo", score: 5 }
    const explorer = FizzbuzzService.applyValidationInExplorer(explorer5);
    expect(explorer5.trick).toBe('BUZZ')
  })
  
  test("4.- Validaciones para FizzbuzzService CON multiplo de 3 Y 5", () => {
    const explorerFizzBuzz = {name: "Carlo", score: true }
    const explorer = FizzbuzzService.applyValidationInExplorer(explorerFizzBuzz);
    expect(explorerFizzBuzz.trick).toBe('FIZZBUZZ')
  })
})
