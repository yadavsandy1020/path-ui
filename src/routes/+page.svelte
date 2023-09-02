<script>
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Samrath pathlab" />
</svelte:head>

<div class="background-image p-0">
  <div class="overlay" />
</div>

<style>
  .background-image {
    background-image: url("bg.jpg");
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    position: relative;
    height: 100vh; /* Adjust the height as needed */
  }

  /* Add the low-opacity overlay */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Adjust the opacity as needed */
  }
</style>
