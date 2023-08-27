<svelte:head>
	<title>Doctors</title>
	<meta name="description" content="list of doctors" />
</svelte:head>

<script>
// @ts-nocheck

    export let data
   

</script>


<h1>List of Doctors</h1>
  
<table class="table doctor-table">
    <thead>
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
                        <a href={`/doctors/${doctor._id}`} class="btn btn-outline-success">View</a>
                    </td>
                </tr>
            {/each}
        {:else}
            <tr>
                <td colspan="3">No data available</td>
            </tr>
        {/if}
    </tbody>
</table>

<style>
    /* Custom styling for the table */
    .doctor-table {
        font-size: 14px;
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
    }

    .doctor-table th,
    .doctor-table td {
        padding: 12px;
        text-align: left;
        vertical-align: middle;
        border-top: 1px solid #dee2e6;
    }

    .doctor-table thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
    }

    .doctor-table tbody+tbody {
        border-top: 2px solid #dee2e6;
    }

    .doctor-table tbody tr:hover {
        background-color: #f8f9fa;
    }
</style>

