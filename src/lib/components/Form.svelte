<script>
  // @ts-nocheck

  import { onMount } from "svelte";

  let selectedOption = 0;
  let electricityCost = 4.0;
  let state = "Select State";
  let customerType = "Select Customer Type";
  let area = 0;
  let areaPercentage = 0;
  let budget = 0;
  let output = {};
  let capacity = 0;
  let areaType = "sqm";

  import states from "$lib/data/states";
  import CalculationModal from "./Modals/CalculationModal.svelte";
  import { calcOutput, displayOutput } from "../stores/calculation";

  // onMount(() => {
  //   const modal = document.getElementById("calc-modal");
  //   modal.scrollIntoView({ behavior: "smooth" });
  // });

  const categories = [
    "Residential",
    "Institutional",
    "Industrial",
    "Commerical",
    "Government",
    "Social Sector",
  ];

  async function calculate() {
    const res = await fetch("/calculation-result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        electricityCost,
        state,
        capacity,
        customerType,
        selectedOption,
        area,
        areaPercentage,
        budget,
      }),
    });

    if (res.status === 204) {
      output = { message: res.body };
    } else {
      var x = await res.json();
      output = x;
    }

    displayOutput(output);

  }
</script>

<div class=" flex-col flex items-center">
  <div class=" flex flex-col md:flex-row justify-between w-full p-10">
    <div class=" flex flex-col items-start h-full md:w-[40vw]">
      <h1>Cost of the solution</h1>

      <p class="mb-5">The Sparko comes in three configurations:</p>
      <ul
        class="list-disc list-inside flex flex-row md:flex-col justify-between w-full"
      >
        <li>3kW</li>
        <li>5kW</li>
        <li>10kW</li>
      </ul>
      <p class="my-5">
        Put in your monthly electrical consumption or the area available on your
        rooftop, and we’ll tell you which version of SPARKO is best suited for
        you.
      </p>
    </div>
    <div class="card">
      <h2>Total Rooftop Area</h2>
      <div class="options">
        <input
          type="number"
          bind:value={area}
          placeholder="Area"
          class="input-box"
        />
        <form id="form">
          <label
            >Sq.m
            <input
              type="radio"
              group={areaType}
              name="areaType"
              value={"sqm"}
            />
          </label>
          <label
            >Sq.feet
            <input
              type="radio"
              group={areaType}
              name="areaType"
              value={"sqf"}
            />
          </label>
        </form>
      </div>
      <h2>Percentage area available: {areaPercentage}%</h2>
      <div class="options">
        <input
          type="number"
          class="range-input"
          min={0}
          max={100}
          step={1}
          bind:value={areaPercentage}
        />
      </div>
      <div class="md:flex flex-row w-full">
        <form class="select-form">
          <h2>Select your state</h2>
          <select bind:value={state}>
            {#each states as val}
              <option class="text-black" value={val.name}>
                {val.name}
              </option>
            {/each}
          </select>
        </form>
        <form class="select-form">
          <h2>Select your category</h2>
          <select bind:value={customerType}>
            {#each categories as val}
              <option class="text-black" value={val}>
                {val}
              </option>
            {/each}
          </select>
        </form>
      </div>

      <div class="md:flex flex-row w-full">
        <form class="select-form">
          <h2>Select your budget: {budget} Rupees</h2>
          <input
            type="number"
            class="range-input md:mr-2"
            min={100000}
            max={10000000}
            step={50000}
            bind:value={budget}
          />
        </form>
        <form class="select-form">
          <h2>Average electricity cost: {electricityCost}Rs/kW</h2>
          <input
            type="number"
            class="range-input md:ml-2"
            min={4}
            max={20}
            step={0.25}
            bind:value={electricityCost}
          />
        </form>
      </div>


      <button
        on:click={calculate}
        class="bg-primary-yellow text-black hover:text-whiteF mt-5 px-7 py-4 rounded-full hover:text-white hover:bg-black ease-in duration-100 text-sm"
      >
        Calculate
      </button>
    </div>
  </div>

  {#if $calcOutput.val === 1}
      <CalculationModal />
  {/if}

  


</div>

<style>
  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 1;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-family: 'Aspekta';
  }

  h2 {
    color: black;
    font-weight: bold;
    font-size: 1rem;
    font-family: 'Supreme';
  }

  input {
    background-color: #0721252c;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: 10px;
  }

  select {
    width: 70%;
    padding-inline: 1rem;
    background-color: #0721252c;
    padding: 0.5rem;
    border-radius: 10px;
  }

  .select-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;    
    padding: 0.5rem;
  }

  .range-input {
    cursor: pointer;
    appearance: none;
    background-color: #0721252c;
    width: 100%;
    border-radius: 10px;
  }

  .options {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .card {
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    padding: 2.5rem;
    background-color: white;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  label {
    padding-inline: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .card {
      width: 90vw;
      margin: 0.5rem;
      translate: -2rem 0;
    }

    input{
      width: 50%;
    }

    select{
      width: 100%;
    }
    

    h2 {
      font-size: small;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
    }

    #form{
      display: flex;
      flex-direction: row;
    }
  }
</style>
