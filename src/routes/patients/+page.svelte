<script>
  // @ts-nocheck

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  // @ts-nocheck
  export let data;
  const deletePatient = async (patientId) => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    await fetch(BASE_URL + "/patients/" + patientId, {
      method: "DELETE",
    });
    goto($page.url);
  };
</script>

<div class="table-responsive">
  <table class="table table-hover table-bordered align-middle">
    <caption>List of patients</caption>
    <thead>
      <tr>
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
              <a href={`/patients/${patient._id}`}>{patient.name || "-"}</a>
            </td>
            <td>
              {patient.age || "-"}
            </td>
            <td>
              {patient.sex || "-"}
            </td>
            <td>
              {patient.address || "-"}
            </td>
            <td>
              <a
                href={`/patients/${patient._id}`}
                class="btn btn-outline-success">View</a
              >
              <a href={`/patients/edit/${patient._id}`} class="btn btn-primary"
                >Edit</a
              >
              <a
                href={`/patients`}
                class="btn btn-danger"
                on:click={deletePatient}>Delete</a
              >
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
  td:last-child {
    width: 21%;
  }
</style>
