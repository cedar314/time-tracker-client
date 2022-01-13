import * as Yup from 'yup'

const validationErrors = {
  required: 'The field :1 is required.',
  min: 'The :1 field must be at least :2 characters long.',
  max: 'The :1 field must be less than :2 characters long.',
  email: 'The email field must be a valid email.',
}

export function validationError(
  rule: keyof typeof validationErrors,
  ...props: string[]
) {
  const ruleError = validationErrors[rule]
  return props.reduce((acc, prop, index) => {
    acc = acc.replace(`:${index + 1}`, prop)
    return acc
  }, ruleError)
}

const availableValidations = {
  email: emailValidationRule,
  password: passwordValidationRule,
}

export default function validate(validate: keyof typeof availableValidations) {
  return availableValidations[validate]()
}

function emailValidationRule() {
  return Yup.string()
    .email(validationError('email'))
    .required(validationError('required', 'email'))
}

function passwordValidationRule() {
  return Yup.string()
    .min(8, validationError('min', 'password', '8'))
    .max(20, validationError('max', 'password', '20'))
    .required(validationError('required', 'password'))
}
