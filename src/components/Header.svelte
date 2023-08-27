<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</svelte:head>
<script>
    	import { page } from '$app/stores';
</script>


<header class="header navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Samrath Pathalogy</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item" aria-current={$page.url.pathname.startsWith('/cbcs') ? 'page' : undefined}>
				<a class="nav-link" href="/cbcs">Reports</a>
			</li>
            <li class="nav-item" aria-current={$page.url.pathname === '/doctors' ? 'page' : undefined}>
				<a class="nav-link"  href="/doctors">Doctors</a>
			</li>
		
            <li class="nav-item" aria-current={$page.url.pathname === '/patients' ? 'page' : undefined}>
				<a class="nav-link" href="/patients">Patients</a>
			</li>
			<li class="nav-item" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a class="nav-link" href="/about">About</a>
			</li>
			
        </ul>
    </div>
</header>



