<script>
  import FormPage from "./FormPage.svelte"
  import formState from "../formState"

  export let definition
  export let value

  $formState = {
    currentPageId: definition.start
  }

  $: currentPage = definition.pages[$formState.currentPageId]
</script>

{#key $formState.currentPageId}
  <FormPage
    id={$formState.currentPageId}
    definition={currentPage}
    bind:value
  />
{/key}
