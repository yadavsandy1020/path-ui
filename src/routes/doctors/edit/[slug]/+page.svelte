<script>
  // @ts-nocheck

  import { goto } from "$app/navigation";
  import { base } from "$app/paths";

  // @ts-nocheck
  export let data;

  // Define a variable to track form inputs
  let editedDoctor = {};

  $: editedDoctor = data.doctor;

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    await saveDoctor(editedDoctor);
    goto(base + `/doctors/${data.doctor._id}`);
  }

  // create function to update editedDoctor data
  async function saveDoctor(doctorData) {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    console.log(editedDoctor);
    const res = await fetch(`${BASE_URL}/doctors/${data.doctor._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctorData),
    });
    const doctorDetails = await res.json();
    return doctorDetails;
  }
</script>

<main class="container">
  {#if editedDoctor}
    <h1 class="mt-4">Edit Doctor Details</h1>
    <form on:submit={handleSubmit} class="mt-3">
      <div class="row">
        <div class="mb-3 col-lg-3">
          <label for="doctorName" class="form-label">Name:</label>
          <input
            type="text"
            id="doctorName"
            class="form-control"
            bind:value={editedDoctor.name}
          />
        </div>
        <div class="mb-3 col-lg-3">
          <label for="doctorPhone" class="form-label">Phone:</label>
          <input
            id="doctorPhone"
            type="text"
            class="form-control"
            bind:value={editedDoctor.phone}
          />
        </div>
        <div class="mb-3 col-lg-3">
          <label for="doctorAddress" class="form-label">Address:</label>
          <input
            id="doctorAddress"
            type="text"
            class="form-control"
            bind:value={editedDoctor.address}
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>
  /* Additional custom styling can be added here */
</style>
