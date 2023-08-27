
<script>
    let name = "";
    let phone = "";
    let address = "";

    // @ts-ignore
   async function handleSubmit(e) {
        e.preventDefault();
        const doctor = {
            name,
            phone,
            address
        };
        console.log(doctor);
        await saveDoctor(doctor);
        window.location.href = "/doctors";
    }

    // save doctor function
    // @ts-ignore
    async function saveDoctor(doctor) {
        const BASE_URL= import.meta.env.VITE_BASE_URL;
        const res = await fetch(BASE_URL+"/doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(doctor)
        });
        return await res.json();
    }
</script>


<h1 class="mt-4">Add Doctor Details</h1>
<form on:submit={handleSubmit} class="mt-3">
  <div class="row">
  <div class="mb-3 col-lg-3">
    <label for="doctorName" class="form-label">Name:</label>
    <input type="text" id="doctorName" class="form-control" bind:value={name} />
  </div>
  <div class="mb-3 col-lg-3">
    <label for="doctorPhone" class="form-label">Phone:</label>
    <input id="doctorPhone" type="text" class="form-control" bind:value={phone} />
  </div>
  <div class="mb-3 col-lg-3">
    <label for="doctorAddress" class="form-label">Address:</label>
    <input id="doctorAddress" type="text" class="form-control" bind:value={address} />
  </div>
</div>
  <button type="submit" class="btn btn-primary">Save Changes</button>
</form>