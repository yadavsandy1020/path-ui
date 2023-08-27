<script>
// @ts-nocheck

    export let data;
    $:console.log(data.body)
</script>

<h1>Patient Details</h1>
  {#if data.body.patient}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{data.body.patient.name || "N/A"}</h5>
        <p class="card-text">Age: {data.body.patient.age || "N/A"}</p>
        <p class="card-text">Sex: {data.body.patient.sex || "N/A"}</p>
        <p class="card-text">Address: {data.body.patient.address || "N/A"}</p>
        <a href={`/cbcs/${data.body.patient._id}`} class="btn btn-primary">View CBCs</a>
        <a href={`/patients/edit/${data.body.patient._id}`} class="btn btn-primary">Edit</a>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
