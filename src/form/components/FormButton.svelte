<script>
  import formState from "../formState"

  export let label
  export let action

  let onClick = (event) => {}
  if (action !== undefined) {
    if (action.transition !== undefined) {
      onClick = (event) => {
        event.preventDefault()
        $formState = {...$formState, currentPageId: action.transition}
      }
    }
  }
</script>

<button
  type="button"
  class="btn btn-dark"
  on:click={onClick}>{label}</button>
