<script>
  import _uniqueId from "lodash/uniqueId"
  import _isEmpty from "lodash/isEmpty"
  import {createEventDispatcher} from "svelte"
  import fieldValidation from "../utils/fieldValidation"

  export let id
  export let value
  export let label
  export let type
  export let validation
  export let isValid

  const dispatch = createEventDispatcher()
  const [hasValidation, required, validate] = fieldValidation(validation)

  isValid = validate(value)

  const onInput = (event) => {
    value = event.target.value
    isValid = validate(value)
    dispatch("valueChanged", value)
  }
</script>

<style>
  .form-field.required label:after {
    content: " (required)"
  }
</style>

<div class="form-field mb-2" class:required {id}>
  <label for={id + "-value"} class="form-label">{label}</label>
  <input
    id={id + "-value"}
    class="form-control"
    class:is-valid={hasValidation && isValid}
    class:is-invalid={hasValidation && !isValid}
    {type}
    value={value !== undefined ? value : ""}
    on:input={onInput}
    {required}
  />
  <div class="invalid-feedback">{
    validation && validation.message ? validation.message : "input is not valid"
  }</div>
</div>
