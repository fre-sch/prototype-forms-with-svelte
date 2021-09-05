<script>
  import _get from "lodash/get"
  import _set from "lodash/set"
  import _uniqueId from "lodash/uniqueId"
  import fieldFactory from "../utils/fieldFactory"

  export let id
  export let value
  export let definition
  export let isValid

  let fieldsValid = new Array(definition.view.length)
  $: isValid = fieldsValid.every(it => it)

  const onValueChanged = (fieldKey, fieldValue) => {
    value = _set(value, fieldKey, fieldValue)
  }

  const fieldId = (field, index) => field.key && (
    field.key.toLowerCase().replace(/[^a-z0-9]+/i, "-")
    + index
  )
</script>

<form class="form-page" {id}>
  {#each definition.view as field, index}
    <svelte:component
      id={fieldId(field, index)}
      this={fieldFactory(field.type)}
      {...field}
      value={_get(value, field.key)}
      bind:isValid={fieldsValid[index]}
      on:valueChanged={event => onValueChanged(field.key, event.detail)}
    />
  {/each}
</form>
