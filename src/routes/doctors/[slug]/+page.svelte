<script>
// @ts-nocheck

    export let data;
</script>

<h1>Doctor Details</h1>
  {#if data.props.doctor}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{data.props.doctor.name || "N/A"}</h5>
        <p class="card-text">Phone: {data.props.doctor.phone || "N/A"}</p>
        <p class="card-text">Address: {data.props.doctor.address || "N/A"}</p>
        <a href={`/cbcs/${data.props.doctor._id}`} class="btn btn-primary">View CBCs</a>
        <a href={`/doctors/edit/${data.props.doctor._id}`} class="btn btn-primary">Edit</a>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}

