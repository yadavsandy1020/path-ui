<script>
    // @ts-nocheck
  export let data;
  
    // Define a variable to track form inputs
    let editedPatient = {};

    $:{
      editedPatient = data.body.patient;
    }
  
    // Function to handle form submission
    async function handleSubmit(event) {
      event.preventDefault();
      const patientDetails = await savePatient(editedPatient);
      window.location.href = `/patients/${patientDetails._id}`;
    }

    // create function to update patient data
    async function savePatient(patientData){
      const BASE_URL= import.meta.env.VITE_BASE_URL;
      const res = await fetch(`${BASE_URL}/patients/${data.body.patient._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });
      const patientDetails = await res.json();
      return patientDetails;
    }
  </script>
  <main class="container">
    {#if editedPatient}
      <h1 class="mt-4">Edit Patient</h1>
      <form on:submit={handleSubmit} class="mt-3">
        <div class="row">
        <div class="mb-3 col-lg-3">
          <label for="patientName" class="form-label">Name:</label>
          <input type="text" id="patientName" class="form-control" bind:value={editedPatient.name} />
        </div>
        <div class="mb-3 col-lg-3">
          <label for="patientAge" class="form-label">Age:</label>
          <input id="patientAge" type="number" class="form-control" bind:value={editedPatient.age} />
        </div>
        <div class="mb-3 col-lg-3">
          <label for="patientSex" class="form-label">Sex:</label>
          <input id="patientSex" type="text" class="form-control" bind:value={editedPatient.sex} />
        </div>
        <div class="mb-3 col-lg-3">
          <label for="patientAddress" class="form-label">Address:</label>
          <input id="patientAddress" type="text" class="form-control" bind:value={editedPatient.address} />
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