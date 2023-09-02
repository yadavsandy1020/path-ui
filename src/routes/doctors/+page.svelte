<script>
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  // @ts-nocheck

  export let data;
</script>

<svelte:head>
  <title>Doctors</title>
  <meta name="description" content="list of doctors" />
</svelte:head>

<div class="container mt-3 mb-3">
  <button
    class="btn btn-outline-success"
    on:click={() => goto(base + "/doctors/add")}
  >
    Add Doctor
  </button>
</div>

<div class="">
  <table class="table table-hover table-striped table-responsive">
    <thead class="thead-dark">
      <tr>
        <th>Name</th>
        <th>Phone No.</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {#if data.body.doctors}
        {#each data.body.doctors as doctor}
          <tr>
            <td>{doctor?.name || "-"}</td>
            <td>{doctor?.phone || "-"}</td>
            <td>{doctor?.address || "-"}</td>
            <td>
              <a href={`/doctors/${doctor._id}`} class="btn btn-outline-success"
                >View</a
              >
            </td>
          </tr>
        {/each}
      {:else}
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      {/if}
    </tbody>
  </table>
</div>

<style>
  .table {
    font-size: 14px;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
  }

  .table th,
  .table td {
    padding: 12px;
    text-align: left;
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
  }

  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }

  .table-hover tbody tr:hover {
    background-color: #f8f9fa;
  }

  .thead-dark th {
    background-color: #343a40;
    color: white;
  }
</style>
