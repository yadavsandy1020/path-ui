<script>
// @ts-nocheck

    // @ts-ignore
    export let data;

    
    // @ts-ignore
    function convertToIndianDateFormat(utcDateString) {
        const utcDate = new Date(utcDateString);
        utcDate.setHours(utcDate.getHours() + 5);        // Add 5 hours
        utcDate.setMinutes(utcDate.getMinutes() + 30);  // Add 30 minutes

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' };
        // @ts-ignore
        const indianDateFormat = utcDate.toLocaleDateString('en-IN', options);

        return indianDateFormat;
    }
</script>

<div class="d-flex mt-4 container">
    <button type="button" class="btn btn-primary"><a class="nav-link" href="/cbcs/add">Add New CBC </a></button>
</div>
{#if data}
<div class="container p-3">
   Total: <b>{data.body.cbcs.totalCount}</b>
</div>
    
    {/if}

<div class="container mt-4">
    <table class="table table-hover table-striped">
        <thead class="thead-dark">
            <tr>
                <th>Patient Name</th>
                <th>Referred Doctor</th>
                <th>Date</th>
                
            </tr>
        </thead>
        <tbody>
            {#if data}
                {#if data.body.cbcs.data.length === 0}
                    <tr>
                        <td colspan="3">No CBCs found</td>
                    </tr>

                    {:else}
                    {#each data.body.cbcs.data as entry}
                    <tr>
                        <td><a href={`/cbcs/details/${entry.patient_id._id}`}>{entry.patient_id.name}</a></td>
                       <td><a href={`/doctors/${entry.doctor_id._id}`}>{entry.doctor_id.name}</a></td>
                        <td>{convertToIndianDateFormat(entry.created_at)}</td>
                    </tr>
                {/each}
                {/if}
               
                {:else}
                    <tr>
                        <td colspan="3">Loading...</td>
                    </tr>
            {/if}
           
        </tbody>
    </table>
</div>


<style>

    button > a {
        color: #fff;
    }
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