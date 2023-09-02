<script>
  // @ts-nocheck

  import Widal from "./widal.svelte";

  // @ts-nocheck
  export let data;
  function convertToIndianDateFormat(utcDateString) {
    const utcDate = new Date(utcDateString);
    utcDate.setHours(utcDate.getHours() + 5); // Add 5 hours
    utcDate.setMinutes(utcDate.getMinutes() + 30); // Add 30 minutes

    // add time as weill in toLocaleDateString
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Asia/Kolkata",
    };
    const indianDateFormat = utcDate.toLocaleTimeString("en-IN", options);

    return indianDateFormat;
  }

  /**
   * @param {{ toString: () => string; }} value
   */
  function addCommasToNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
</script>

{#if data}
  <div class="container mb-3 mt-3">
    <div class="border border-dark" />
  </div>
  <div class="container">
    <table class="table table-borderles mt-2">
      <tbody>
        <tr>
          <td
            >Patient Name: <b
              >{data.props.data.data[0].patient_id.name || "-"}</b
            ></td
          >
          <td>Age: <b>{data.props.data.data[0].patient_id.age || "-"}</b></td>
          <td>Sex: <b> {data.props.data.data[0].patient_id.sex || "-"}</b></td>
        </tr>
        <tr>
          <td>
            <i>Referred by: </i>
            <b
              >Dr. {(data.props.data.data[0].doctor_id &&
                data.props.data.data[0].doctor_id.name) ||
                "Self"}</b
            >
          </td>
          <td>
            Date: <b>
              {convertToIndianDateFormat(data.props.data.data[0].created_at) ||
                new Date().toLocaleDateString()}</b
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="container mb-3 mt-3">
    <div class="border border-dark" />
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
        {#each data.props.data.data as report}
          <tr>
            <td>Haemoglobin <br />Cyanmeth method </td>

            <td
              class:outOfRange={report.haemoglobin < 12.0 ||
                report.haemoglobin > 18.0}
              >{report.haemoglobin !== undefined ? report.haemoglobin : "-"}</td
            >
            <td>12.0 - 18.0</td>
            <td>Gm.%</td>
          </tr>
          <tr>
            <td>Total RBC</td>
            <td class:outOfRange={report.rbc < 4.5 || report.rbc > 6}
              >{report.rbc !== undefined ? report.rbc : "-"}</td
            >
            <td>4.50 - 6.0</td>
            <td>Millions/ cu.mm</td>
          </tr>
          <tr>
            <td>Total WBC <br />Differential WBCs</td>
            <td class:outOfRange={report.wbc < 4000 || report.wbc > 11000}
              >{report.wbc !== undefined ? report.wbc : "-"}</td
            >
            <td>4000 - 11000</td>
            <td>Cu. mm</td>
          </tr>
          <tr>
            <td>Neutrophils</td>
            <td
              class:outOfRange={report.neutrophils < 55 ||
                report.neutrophils > 65}
              >{report.neutrophils !== undefined ? report.neutrophils : "-"}</td
            >
            <td>55 - 65</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Lymphocytes</td>
            <td
              class:outOfRange={report.lymphocytes < 30 ||
                report.lymphocytes > 35}
              >{report.lymphocytes !== undefined ? report.lymphocytes : "-"}</td
            >
            <td>30 - 35</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Eosinophils</td>
            <td
              class:outOfRange={report.eosinophils < 1 ||
                report.eosinophils > 6}
              >{report.eosinophils !== undefined ? report.eosinophils : "-"}</td
            >
            <td>1 - 6</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Monocytes</td>
            <td class:outOfRange={report.monocytes < 1 || report.monocytes > 5}
              >{report.monocytes !== undefined ? report.monocytes : "-"}</td
            >
            <td>1 - 5</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Basophils</td>
            <td class:outOfRange={report.basophils < 0 || report.wbc > 1}
              >{report.basophils !== undefined ? report.basophils : "-"}</td
            >
            <td>0 - 1</td>
            <td>%</td>
          </tr>
          <tr>
            <td>HCT</td>
            <td class:outOfRange={report.hct < 40 || report.hct > 54}
              >{report.hct !== undefined ? report.hct : "-"}</td
            >
            <td>40 - 54</td>
            <td>%</td>
          </tr>

          <tr>
            <td>M.C.V</td>
            <td class:outOfRange={report.mcv < 75 || report.mcv > 95}
              >{report.mcv !== undefined ? report.mcv : "-"}</td
            >
            <td>75 - 95</td>
            <td>FL</td>
          </tr>
          <tr>
            <td>M.C.H</td>
            <td class:outOfRange={report.mch < 26 || report.wbc > 34}
              >{report.mch !== undefined ? report.mch : "-"}</td
            >
            <td>26 - 34</td>
            <td>Pg</td>
          </tr>
          <tr>
            <td>M.C.H.C</td>
            <td class:outOfRange={report.mchc < 32 || report.mchc > 36}
              >{report.mchc !== undefined ? report.mchc : "-"}</td
            >
            <td>32 - 36</td>
            <td>%</td>
          </tr>
          <tr>
            <td>E.S.R</td>
            <td class:outOfRange={report.esr < 32 || report.mchc > 36}
              >{report.esr !== undefined ? report.esr : "-"}</td
            >
            <td>32 - 36</td>
            <td>%</td>
          </tr>
          <tr>
            <td>Platelets Counts</td>
            <td class:outOfRange={report.wbc < 150000 || report.wbc > 450000}
              >{@html `<span>${
                report.platelets !== undefined
                  ? addCommasToNumber(report.platelets)
                  : "-"
              }</span>`}</td
            >
            <td>1.5 - 4.5</td>
            <td>Lac/ Cu.mm</td>
          </tr>
        {/each}
      </tbody>
    </table>
    <Widal widal={data.props.data.data[0].widal} />
    <p />
  </div>
{/if}

<style>
  .outOfRange {
    font-weight: bold;
  }

  table td,
  .table th {
    padding: 0.2rem !important;
  }
  tr {
    text-align: left !important;
    border-top: none !important;
    border-bottom: none !important;
  }
  th,
  td {
    border-top: none !important;
    border-bottom: none !important;
  }
  :global(body) {
    font-family: "cambria";
  }
  tr th {
    font-weight: bold;
  }
</style>
