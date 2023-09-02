<script>
  // @ts-nocheck

  export let data;
</script>

{#if data.body.patient}
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{data.body.patient.name || "-"}</h5>
        <p class="card-text">Age: {data.body.patient.age || "-"}</p>
        <p class="card-text">Sex: {data.body.patient.sex || "-"}</p>
        <p class="card-text">Address: {data.body.patient.address || "-"}</p>
        <a
          href={`/cbcs/details/${data.body.patient._id}`}
          class="btn btn-outline-success">Report</a
        >
        <a
          href={`/patients/edit/${data.body.patient._id}`}
          class="btn btn-outline-dark">Edit</a
        >
      </div>
    </div>
  </div>
{:else}
  <p>Loading...</p>
{/if}
