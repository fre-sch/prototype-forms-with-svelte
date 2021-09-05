<script>
  import FormButton from "./FormButton.svelte"

  export let buttons

  let leftButtons = buttons.filter(b => b.position == "left")
  let rightButtons = buttons.filter(b => b.position == "right")
</script>

<div class="mb-3 d-flex justify-content-between">
  <div>
    {#each leftButtons as button}
      <FormButton {...button} />
    {/each}
  </div>
  <div>
    {#each rightButtons as button}
      <FormButton {...button} />
    {/each}
  </div>
</div>
