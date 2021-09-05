<script>
  import Form from "./form/components/Form.svelte"
  import personForm from "./personForm"

  export let name

  let personData = {
    firstname: "dummy",
    birthday: "1970-01-01"
  }
  let isValid
</script>

<style>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css");
</style>

<main class="container">

	<h1>Hello {personData.firstname} {personData.lastname}!</h1>

  <div class="row">
    <div class="col">
    <Form
      definition={personForm}
      bind:value={personData}
    />
    </div>
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Form data</h5>
          <pre>
{JSON.stringify(isValid, null, 2)}
{JSON.stringify(personData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  </div>
</main>
