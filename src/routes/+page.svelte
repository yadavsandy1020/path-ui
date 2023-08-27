

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Samrath pathlab" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</svelte:head>

<div class="container">
	<button class="btn btn-primary p-2 m-2" on:click={()=>window.location.href="/doctors"}>Doctors</button>
	<button class="btn btn-primary p-2 m-2" on:click={()=>window.location.href="/patients"}>Patients</button>
	<button class="btn btn-primary p-2 m-2" on:click={()=>window.location.href="/cbcs"}>Reports</button>
	<button class="btn btn-primary p-2 m-2" on:click={()=> window.location.href="/cbcs/add"}>Add New CBC </button>
</div>
