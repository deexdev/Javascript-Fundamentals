import {testObject} from "../src/object"

test('test object', () => {
    const result = testObject()
    expect(result.name).toEqual("Dwi");
})