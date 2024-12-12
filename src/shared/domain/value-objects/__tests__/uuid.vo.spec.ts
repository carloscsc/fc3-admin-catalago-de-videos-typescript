import { InvalidUuidError, Uuid } from "../uuid.vo"
import {validate } from 'uuid'



describe('Uuid Unit Test', () => { 

  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

  test('shold throw a error when uuid is invalid', () => { 
    
    expect(() => { 
      new Uuid('Invalid UUID')
     }).toThrowError(new InvalidUuidError())

     expect(validateSpy).toHaveBeenCalled()
   })

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(validate(uuid.id)).toBe(true);
  });

  test('should create a valid uuid with a valid uuid string', () => {
    const uuid = new Uuid('f47ac10b-58cc-4372-a567-0e02b2c3d479');
    expect(validate(uuid.id)).toBe(true);
  });

 })