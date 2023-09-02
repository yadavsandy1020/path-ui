<script>
  // @ts-nocheck

  export let data;
</script>

{#if data.props.doctor}
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{data.props.doctor.name || "-"}</h5>
        <p class="card-text">Phone: {data.props.doctor.phone || "-"}</p>
        <p class="card-text">Address: {data.props.doctor.address || "-"}</p>
        <a
          href={`/cbcs/${data.props.doctor._id}`}
          class="btn btn-outline-success">Reports</a
        >
        <a
          href={`/doctors/edit/${data.props.doctor._id}`}
          class="btn btn-outline-dark">Edit</a
        >
      </div>
    </div>
  </div>
{:else}
  <p>Loading...</p>
{/if}
