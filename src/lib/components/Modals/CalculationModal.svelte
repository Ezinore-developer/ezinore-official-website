<script>
  // @ts-nocheck

  import {fade} from "svelte/transition";

  import Icon from "@iconify/svelte";
  //   let sate;
  //   let outputIrradiation;
  //   let generate;
  //   let plantSize;
  //   let benchmark;
  //   let outputSubsidy;
  //   let outputElectricityAnnual;
  //   let outputElectricityLifetime;
  //   let electricityCost;
  //   let outputSavingMonthly;
  //   let outputSavingAnnual;
  //   let outputSavingLifetime;
  //   let co2;
  //   let trees;
  //   let outputWithoutSubsidy;


  

  /**
   * @type {{ val: number; }}
   */
  import { calcOutput, crossOffOutput } from "../../stores/calculation";
  //   calcOutput.subscribe(val => {
  //     output = val
  //   })
</script>

<div id="calc-modal" class="modal p-10" in:fade={{duration:100}} out:fade={{duration:100}}>
  <div class="flex flex-row w-full justify-between mb-10">
    <h2>Recommended Options for you</h2>
    <button on:click={crossOffOutput}><Icon icon="iconoir:cancel" /></button>
  </div>

  <div class="grid grid-cols-4">
    <div class="col-span-1 bg-blue-500 p-5 flex flex-col">
      <h3>3kW</h3>
      <h3>5kW</h3>
      <h3>10kW</h3>
    </div>
    <div class="col-span-3 bg-green-500 overflow-y-scroll flex flex-col px-10">
      <h1>Calculated Results</h1>
      <table>
        <tr>
          <td class="c1">Size of plant</td>
          <td>{$calcOutput.plantSize} Sq.m</td>
        </tr>
        <tr>
          <td class="c1"
            >Cost of plant <br />
            <h6>(Includind Govt. Subsidies)</h6></td
          >
          <td>{$calcOutput.outputSubsidy} Rupees</td>
        </tr>
        <tr>
          <td class="c1"
            >Eneregy generation by power plant <br />
            <h6>(annually)</h6>
          </td>
          <td>{$calcOutput.generate}kW</td>
        </tr>
      </table>
    </div>
  </div>
</div>

<style>
  .modal {
    box-shadow: 0 0 100px rgba(0, 0, 0, 1);
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem /* 24px */;
    height: 80vh;
    width: 80%;
    background-color: white;
    position: absolute;
    margin-top: 1.5rem;
  }
  h6 {
    color: #07212593;
    font-size: small;
  }
  h2 {
    color: black;
    font-weight: bold;
    font-size: 20px;
  }
  h3 {
    color: black;
    font-weight: bold;
    font-size: 15px;
    padding: 0.5rem;
  }
  h1 {
    color: black;
    font-weight: bolder;
    font-size: 25px;
    padding-bottom: 1rem;
  }

  .c1 {
    font-style: normal;
    font-weight: 700;
    font-size: large;
  }

  td {
    padding-bottom: 1rem;
  }
</style>
