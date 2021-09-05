import Ajv from "ajv"
import _isEmpty from "lodash/isEmpty"

const validateRequired = (value) => !_isEmpty(value)

export default (validation) => {
  if (_isEmpty(validation)) {
    return [
      false,
      false,
      () => true
    ]
  }

  let validators = []

  if (validation.required !== undefined) {
    validators.push(validateRequired)
  }

  if (validation.schema !== undefined) {
    const validator = new Ajv({allErrors: true})
    validators.push(validator.compile(validation.schema))
  }

  return [
    true,
    validation.required === true,
    (value) => validators.every(fn => fn(value))
  ]
}
