import { ValueObject } from "../../value-object";

class stringData extends ValueObject {

  constructor(
    private value: string,
    private number: number
  ) {
    super();
  }  
}
describe('vo unit tests', () => {

  test('Should be equal', () => {
      const string1 = new stringData('test', 1);
      const string2 = new stringData('test', 1);
      expect(string1.equals(string2)).toBe(true);
  } );

  test('Should be different', () => {
    const string1 = new stringData('test 1', 1);
    const string2 = new stringData('test 2', 2);
    expect(string1.equals(string2)).toBe(false);
  })

})