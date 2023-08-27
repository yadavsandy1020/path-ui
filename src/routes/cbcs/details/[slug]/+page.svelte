


<script>
// @ts-nocheck
    export let data;
    function convertToIndianDateFormat(utcDateString) {
        const utcDate = new Date(utcDateString);
        utcDate.setHours(utcDate.getHours() + 5);        // Add 5 hours
        utcDate.setMinutes(utcDate.getMinutes() + 30);  // Add 30 minutes

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' };
        const indianDateFormat = utcDate.toLocaleDateString('en-IN', options);

        return indianDateFormat;
    }

    function addCommasToNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

{#if data}
<div class="container mb-3 mt-3">
    <div class="border border-dark  "></div>
</div>
<div class="container">
    <div class="row">
        <div class="col-lg-4">
            Patient Name: <b> {data.props.data.data[0].patient_id.name || ""}</b>
        </div>
        <div class="col-lg-4">
            Age: <b> {data.props.data.data[0].patient_id.age || ""}</b>
        </div>
        <div class="col-lg-4">
            Sex: <b> {data.props.data.data[0].patient_id.sex || ""}</b>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6">
           <i>Referred by: </i>  <b>Dr. {data.props.data.data[0].doctor_id && data.props.data.data[0].doctor_id.name || ""}</b>
        </div>
        <div class="col-lg-6 justify-content-end">
            Date: <b> {convertToIndianDateFormat(data.props.data.data[0].created_at) || new Date().toLocaleDateString()}</b>
        </div>
    </div>
</div>

<div class="container mb-3 mt-3">
    <div class="border border-dark  "></div>
</div>
<div class="container text-center">
    <span class="font-weight-bold">HAEMATOLOGICAL INVESTIGATIONS</span>
    <table class="table table-borderles mt-2">
        <thead>
            <tr>
                <th>Test</th>
                <th>Result</th>
                <th>Normal Range</th>
                <th>Unit</th>
            </tr>
        </thead>
        <tbody>
            {#each data.props.data.data as entry}
                <tr>
                    <td>Haemoglobin <br>Cyanmeth method </td>
                  
                    <td class:outOfRange={entry.haemoglobin < 12.0 || entry.haemoglobin > 18.0}>{entry.haemoglobin}</td>
                    <td>12.0 - 18.0</td>
                    <td>Gm.%</td>
                </tr>
                <tr>
                    <td>Total RBC</td>
                    <td class:outOfRange={entry.rbc < 4.5 || entry.rbc > 6}>{entry.rbc}</td>
                    <td>4.50 - 6.0</td>
                    <td>Millions/ cu.mm</td>
                </tr>
                <tr>
                    <td>Total WBC <br>Differential WBCs</td>
                    <td class:outOfRange={entry.wbc <4000 || entry.wbc > 11000}>{entry.wbc}</td>
                    <td>4000 - 11000</td>
                    <td>Cu. mm</td>
                </tr>
                <tr>
                    <td>Neutrophils</td>
                    <td class:outOfRange={entry.neutrophils <55 || entry.neutrophils > 65}>{entry.neutrophils}</td>
                    <td>55 - 65</td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Lymphocytes</td>
                    <td class:outOfRange={entry.lymphocytes <30 || entry.lymphocytes > 35}>{entry.lymphocytes}</td>
                    <td>30 - 35</td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Eosinophils</td>
                    <td class:outOfRange={entry.eosinophils <1 || entry.eosinophils > 6}>{entry.eosinophils}</td>
                    <td>1 - 6</td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Monocytes</td>
                    <td class:outOfRange={entry.monocytes <1 || entry.monocytes > 5}>{entry.monocytes}</td>
                    <td>1 - 5</td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Basophils</td>
                    <td class:outOfRange={entry.basophils <0 || entry.wbc > 1}>{entry.basophils}</td>
                    <td>0 - 1</td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>HCT</td>
                    <td class:outOfRange={entry.hct <40 || entry.hct > 54}>{entry.hct}</td>
                    <td>40 - 54</td>
                    <td>%</td>
                </tr>

                <tr>
                    <td>M.C.V</td>
                    <td class:outOfRange={entry.mcv <75 || entry.mcv > 95}>{entry.mcv}</td>
                    <td>75 - 95</td>
                    <td>FL</td>
                </tr>
                <tr>
                    <td>M.C.H</td>
                    <td class:outOfRange={entry.mch <26 || entry.wbc > 34}>{entry.mch}</td>
                    <td>26 - 34</td>
                    <td>Pg</td>
                </tr>
                <tr>
                    <td>M.C.H.C</td>
                    <td class:outOfRange={entry.mchc <32 || entry.mchc > 36}>{entry.mchc}</td>
                    <td>32 - 36</td>
                    <td>%</td>
                </tr>
                <tr>
                    <td>Platelets Counts</td>
                    <td class:outOfRange={entry.wbc <150000 || entry.wbc > 450000}>{@html `<span>${addCommasToNumber(entry.platelets)}</span>`}</td>
                    <td>1.5 - 4.5</td>
                    <td>Lac/ Cu.mm</td>
                </tr>
               
            {/each}
        </tbody>
        
     </table>
</div>

{/if}

<style>
    .outOfRange {
    font-weight: bold;
  }
    .margin-top-6rem{
        margin-top: 20rem;
    }
    table td, .table th {
    padding: 0.2rem !important;
    }
    tr{
        text-align: left !important;
        border-top: none !important;
        border-bottom: none !important;
    }
    th,td{
        border-top: none !important;
        border-bottom: none !important;
    }
    :global(body) {
        font-family: "cambria";
    }
    tr th{
            font-weight: bold;
        }
    
</style>
