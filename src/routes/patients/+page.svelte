
<script>
// @ts-nocheck

  export let data;
</script>
<div class="table-responsive">
<table class="table table-hover table-bordered align-middle">
    <caption>List of patients</caption>
    <thead>
      <tr >
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Sex</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      {#if data}
        {#each data.body.patients.data as patient}
          <tr>
            <td>
             <a href={`/patients/${patient._id}`}>{patient.name || "N/A"}</a>
            </td>
            <td>
              {patient.age || "N/A"}
            </td>
            <td>
            {patient.sex || "N/A"}
            </td>
            <td>
              {patient.address || "N/A"}
            </td>
            <td>
              <a href={`/patients/${patient._id}`} class="btn btn-outline-success">View</a>
              <a href={`/patients/edit/${patient._id}`} class="btn btn-primary">Edit</a>
              <a href={`/patients/${patient._id}`} class="btn btn-danger">Delete</a>
            </td>
          </tr>
        {/each}
        {:else}
           <p>Loading...</p>
      {/if}
    </tbody>
  </table>

</div>

<style>
  td:last-child{
    width: 21%;
  }
</style>