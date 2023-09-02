<script>
  /**
   * @type {any}
   */
  export let widal;

  const deriveWidalResult = (/** @type {any} */ widalDetails) => {
    if (widalDetails) {
      let result = [];
      if (widalDetails.styphiO >= 80) {
        result.push("O");
      }
      if (widalDetails.styphiH >= 80) {
        result.push("H");
      }
      if (widalDetails.sParaTyphiAH >= 80) {
        result.push("AH");
      }
      if (widalDetails.sParaTyphiBH >= 80) {
        result.push("BH");
      }
      return result;
    }
  };
  $: result = deriveWidalResult(widal) || [];
</script>

{#if widal}
  <div class="row no-gutters">
    <div class="col-6 col-lg-3">
      <p class="text-left font-weight-bold">Widal Test &nbsp;:</p>
    </div>
    <div class="col-6 col-lg-9">
      <p class="text-left font-weight-bold">
        {result.length > 0
          ? `S.Typh[${result.join(",")}] Positive`
          : `Negative`}
      </p>
    </div>
  </div>
  <table class="table mt-2">
    <thead>
      <tr>
        <th>Widal Test</th>
        <th>1/20</th>
        <th>1/40</th>
        <th>1/80</th>
        <th>1/160</th>
        <th>1/320</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>S. typhi O</td>
        <td>+</td>
        <td>+</td>
        <td>{widal.styphiO >= 80 ? "+" : "-"}</td>
        <td>{widal.styphiO >= 160 ? "+" : "-"}</td>
        <td>{widal.styphiO >= 320 ? "+" : "-"}</td>
      </tr>
      <tr>
        <td>S. typhi H</td>
        <td>+</td>
        <td>+</td>
        <td>{widal.styphiH >= 80 ? "+" : "-"}</td>
        <td>{widal.styphiH >= 160 ? "+" : "-"}</td>
        <td>{widal.styphiH >= 320 ? "+" : "-"}</td>
      </tr>
      <tr>
        <td>S. Paratyphi AH</td>
        <td>Nil</td>
        <td>-</td>
        <td>{widal.sParaTyphiAH >= 80 ? "+" : "-"}</td>
        <td>{widal.sParaTyphiAH >= 160 ? "+" : "-"}</td>
        <td>{widal.sParaTyphiAH >= 320 ? "+" : "-"}</td>
      </tr>
      <tr>
        <td>S. Paratyphi BH</td>
        <td>Nil</td>
        <td>-</td>
        <td>{widal.sParaTyphiBH >= 80 ? "+" : "-"}</td>
        <td>{widal.sParaTyphiBH >= 160 ? "+" : "-"}</td>
        <td>{widal.sParaTyphiBH >= 320 ? "+" : "-"}</td>
      </tr>
    </tbody>
  </table>
{/if}

<style>
  table {
    border: 1px solid !important;
  }
  th:first-child,
  td:first-child {
    text-align: left;
  }
  th,
  tr,
  td {
    border: 1px solid !important;
  }
</style>
