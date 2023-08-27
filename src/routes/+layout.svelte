

<script>
	import Header from '../components/Header.svelte';
</script>

<div class="app">
	<Header />
	<div class="container">
		<button class="btn btn-primary p-2 m-2" on:click={()=>window.location.href="/doctors"}>Doctors</button>
		<button class="btn btn-primary p-2 m-2" on:click={()=>window.location.href="/patients"}>Patients</button>
		<button class="btn btn-primary p-2 m-2" on:click={()=>window.location.href="/cbcs"}>Reports</button>
		<button class="btn btn-primary p-2 m-2" on:click={()=> window.location.href="/cbcs/add"}>Add New CBC </button>
	</div>
	<main>
		<slot />
	</main>
<!-- 
	<footer>
        <div class="footer-content">
            <p>&copy; 2023 Samrath Pathalogy. All rights reserved.</p>
        </div>
    </footer> -->
</div>

<style >
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: sticky;
    bottom: 0;
    width: 100%;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	
</style>
