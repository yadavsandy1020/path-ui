
<script>
    import { onMount } from 'svelte';
    /**
   * @type {string | any[]}
   */
    let doctors = [];
    // onmount get doctors list function
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    onMount(async () => {
        const res = await fetch(`${BASE_URL}/doctors`);
        doctors = await res.json();
    });

    let patientName = "";
    let patientAge = 0;
    let patientSex = "";
    // @ts-ignore
    let doctorId = "";
    let platelets = 0;
    let neutrophils = 0;
    let lymphocytes = 0;
    let monocytes = 0;
    let eosinophils = 0;
    let basophils = 0;
    let wbc = 0;
    let rbc = 0;
    let haemoglobin = 0;
    let mcv = 0;
    let mch = 0;
    let mchc = 0;
    let hct = 0;
    let mp = ""
    let esr = 0;
    let widal = "";
    let showWidal = false;
    let showMp = false;
    let showEsr = false;

    // add widal test fields
    let styphiO = 0;
    let styphiH = 0;
    let sParaTyphiAH = 0;
    let sParaTyphiBH = 0;

   async function handleSubmit(){
        // @ts-ignore

        let patientData ={
            name: patientName,
            age: patientAge,
            sex: patientSex,
        }
        const patientDetails =await savePatient(patientData);
        console.log(patientDetails)
        let data = {
            // @ts-ignore
            patient_id: patientDetails._id,
            doctor_id: doctorId,
            platelets,
            neutrophils,
            lymphocytes,
            monocytes,
            eosinophils,
            basophils,
            wbc,
            rbc,
            haemoglobin,
            mcv,
            mch,
            mchc,
            hct,
        }
       // post api call here to save data to db
        const res = await saveCbc(data);
        console.log({res});
        handleReset();
    }

    function handleCancel() {
        window.location.href = "/cbcs";
        //clear all the fields
        handleReset();
    }
    
    // function to make post api call to save data to db
    // @ts-ignore
    async function saveCbc(data){
        const BASE_URL = import.meta.env.VITE_BASE_URL;
      const res= await fetch(BASE_URL+"/cbcs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return res.json();
    }
    // function to save patient details
    // @ts-ignore
    async function savePatient(data){
        const BASE_URL = import.meta.env.VITE_BASE_URL;
       const res= await fetch(BASE_URL+"/patients", {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         });

         return res.json();
     }
    

  function handleReset() {
    patientName = "";
    patientAge = 0;
    patientSex = "";
    doctorId = "";
    platelets = 0;
    neutrophils = 0;
    lymphocytes = 0;
    monocytes = 0;
    eosinophils = 0;
    basophils = 0;
    wbc = 0;
    rbc = 0;
    haemoglobin = 0;
    mcv = 0;
    mch = 0;
    mchc = 0;
    hct = 0;
  }

</script>
<span class="badge badge-dark text-bg-light p-3">Patient Details</span>
<div class="row p-1">
    <div class="mb-3 col-lg-3">
        <label for="patientName" class="form-label font-weight-bold">Patient Name</label>
        <input type="text" class="form-control" id="patientName" required placeholder="Ankit Yadav" bind:value={patientName}>
    </div>
    
    <div class="mb-3 col-lg-3">
        <label for="patientAge" class="form-label font-weight-bold">Patient Age</label>
        <input type="number" class="form-control" id="patientAge" required placeholder="20" bind:value={patientAge}>
    </div>
    <div class="mb-3 col-lg-3">
        <label for="doctorName" class="form-label font-weight-bold">Sex</label>
        <select class="form-control" id="doctorName" required bind:value={patientSex}>
            <option value="" selected disabled>Select M/F</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
        </select>
    </div>
    <div class="mb-3 col-lg-3">
        <label for="doctorName" class="form-label font-weight-bold">Referred By</label>
        <select class="form-control" id="doctorName" bind:value={doctorId}>
            <option value="" selected disabled>Select Doctor</option>
            {#each doctors as doctor}
                <option value={doctor._id}>{doctor.name}</option>
            {/each}
        </select>
    </div>

</div>

<span class="badge badge-dark text-bg-light p-3">Haematological Investigation</span>
<div class="row p-lg-1">

    <div class="mb-3 col-lg-3">
        <label for="haemogloabin" class="form-label font-weight-bold">Hemoglobin (Cyanmeth Method)</label>
        <input type="text" class="form-control" id="haemogloabin"  bind:value={haemoglobin}>
        <div id="haemogloabinHelp" class="form-text">
            12.0-18.0 Gm. %
        </div>
    </div>

    <div class="mb-3 col-lg-3">
        <label for="totalRbc" class="form-label font-weight-bold">Total RBC</label>
        <input type="text" class="form-control" id="totalRbc"  bind:value={rbc}>
        <div id="totalRbcHelp" class="form-text">
            4.5-6.5 Million/Cmm
        </div>
    </div>
    
    <div class="mb-3 col-lg-3">
        <label for="totalWbc" class="form-label font-weight-bold">Total WBC (Differential Method)</label>
        <input type="text" class="form-control" id="totalWbc"  bind:value={wbc}>
        <div id="totalWbcHelp" class="form-text">
            4000-11000/Cmm
        </div>
    </div>

    <div class="mb-3 col-lg-3">
        <label for="neutrophils" class="form-label font-weight-bold">Neutrophils</label>
        <input type="text" class="form-control" id="neutrophils"  bind:value={neutrophils}>
        <div id="neutrophilsHelp" class="form-text">
            55-65%
        </div>
    </div>
    

    <div class="mb-3 col-lg-3">
        <label for="lymphocytes" class="form-label font-weight-bold">Lymphocytes</label>
        <input type="text" class="form-control" id="lymphocytes"  bind:value={lymphocytes}>
        <div id="lymphocytesHelp" class="form-text">
            30-35%
        </div>
    </div>

    <div class="mb-3 col-lg-3">
        <label for="eosinophils" class="form-label font-weight-bold">Eosinophils</label>
        <input type="text" class="form-control" id="eosinophils"  bind:value={eosinophils}>
        <div id="eosinophilsHelp" class="form-text">
            1-6%
        </div>
    </div>

    <div class="mb-3 col-lg-3">
        <label for="monocytes" class="form-label font-weight-bold">Monocytes</label>
        <input type="text" class="form-control" id="monocytes"  bind:value={monocytes}>
        <div id="monocytesHelp" class="form-text">
            1-5%
        </div>
    </div>

   
    <div class="mb-3 col-lg-3">
        <label for="basophils" class="form-label font-weight-bold">Basophils</label>
        <input type="text" class="form-control" id="basophils"  bind:value={basophils}>
        <div id="basophilsHelp" class="form-text">
            0-1%
        </div>
    </div>


    <div class="mb-3 col-lg-3">
        <label for="mcv" class="form-label font-weight-bold">MCV</label>
        <input type="text" class="form-control" id="mcv"  bind:value={mcv}>
        <div id="mcvHelp" class="form-text">
            75-95 FI
        </div>
    </div>

    <div class="mb-3 col-lg-3">
        <label for="mch" class="form-label font-weight-bold">MCH</label>
        <input type="text" class="form-control" id="mch"  bind:value={mch}>
        <div id="mchHelp" class="form-text">
            26-34 Pg
        </div>
    </div>

    <div class="mb-3 col-lg-3">
        <label for="mchc" class="form-label font-weight-bold">MCHC</label>
        <input type="text" class="form-control" id="mchc"  bind:value={mchc}>
        <div id="mchcHelp" class="form-text">
            32-36%
        </div>
    </div>

    <div class="mb-3 col-lg-3">
        <label for="platelets" class="form-label font-weight-bold">Platelets</label>
        <input type="text" class="form-control" id="platelets"  bind:value={platelets}>
        <div id="plateletsHelp" class="form-text">
            1,50,000-4,50,000/Cmm
        </div>
    </div>
</div>

<span class="badge badge-dark text-bg-light p-3">MP, Widal, ESR</span>
<div class="container">
    <div class="row p-lg-1">
        <div class="col-lg-4">
            <input type="checkbox" bind:checked={showWidal} class="form-check-input" id="widalCheck">   
            <label class="form-check-label" for="widalCheck">Widal Test</label>
        </div>
        <div class="col-lg-4">
            <input type="checkbox" bind:checked={showMp} class="form-check-input" id="mpCheck">
            <label class="form-check-label" for="mpCheck">MP</label>
        </div>
        <div class="col-lg-4">
            <input type="checkbox" bind:checked={showEsr} class="form-check-input" id="esrCheck">
            <label class="form-check-label" for="esrCheck">ESR</label>
        </div>
    </div>
    
</div>

{#if showWidal}
    <div class="row p-lg-1">
        <div class="mb-3 col-lg-3">
            <label for="styphiO" class="form-label font-weight-bold">Styphi O</label>
            <select class="form-control" id="styphiO" bind:value={styphiO}>
                <option value="" selected disabled>Select Value</option>
            <option value="80" >80</option>
                <option value="160" >160</option>
                <option value="320"> 320</option>
            </select>
        </div>
        <div class="mb-3 col-lg-3">
            <label for="styphiH" class="form-label font-weight-bold">Styphi H</label>
            <select class="form-control" id="styphiH" bind:value={styphiH}>
                <option value="" selected disabled>Select Value</option>
            <option value="80" >80</option>
                <option value="160" >160</option>
                <option value="320"> 320</option>
            </select>
        </div>
        <div class="mb-3 col-lg-3">
            <label for="sParaTyphiAH" class="form-label font-weight-bold">S. Para Typhi A H</label>
            <select class="form-control" id="sParaTyphiAH" bind:value={sParaTyphiAH}>
                <option value="" selected disabled>Select Value</option>
            <option value="80" >80</option>
                <option value="160" >160</option>
                <option value="320"> 320</option>
            </select>
        </div>

        <div class="mb-3 col-lg-3">
            <label for="sParaTyphiBH" class="form-label font-weight-bold">S. Para Typhi B H</label>
            <select class="form-control" id="sParaTyphiBH" bind:value={sParaTyphiBH}>
                <option value="" selected disabled>Select Value</option>
            <option value="80" >80</option>
                <option value="160" >160</option>
                <option value="320"> 320</option>
            </select>
        </div>
    </div>
{/if}
{#if showMp}
    <div class="row p-lg-1">
        <div class="mb-3 col-lg-3">
            <label for="mp" class="form-label font-weight-bold">MP</label>
            <select class="form-control" id="mp" bind:value={mp}>
                <option value="" selected disabled>Select Value</option>
                <option value="Negative">Negative</option>
                <option value="Positive">Positive</option>
            </select>
        </div>
    </div>
{/if}
{#if showEsr}
    <div class="row p-lg-1">
        <div class="mb-3 col-lg-3">
            <label for="esr" class="form-label font-weight-bold">ESR</label>
            <input type="number" class="form-control" id="esr"  bind:value={esr}>
            <div id="plateletsHelp" class="form-text">
                0-20 mm/hr
            </div>
        </div>
    </div>
{/if}

<div class="mb-3 col-lg-3 text-center">
    <button type="submit" class="btn btn-primary p-2 m-2" on:click={handleSubmit}>Submit</button>
    <button type="reset" class="btn btn-secondary p-2 m-2" on:click={handleReset}>Reset</button>
    <button type="button" class="btn btn-danger p-2 m-2" on:click={handleCancel}>Cancel</button>
</div>