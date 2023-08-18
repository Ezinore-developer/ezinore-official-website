<script lang="ts">
  export let list: string[];
  export let num: number;
  export let imagePath: string;
  export let heading: string;

  import rightArrow from "$lib/assets/right-arrow.png";
  import leftArrow from "$lib/assets/left-arrow.png";

  let selected: number = 0;

  function handleNext() {
    if (selected < list.length - 1) {
      selected++;
      scrolltoView();
    } else {
      selected = 0;
      scrolltoView();
    }
  }
  function handlePrev() {
    if (selected > 0) {
      selected--;
      scrolltoView();
    } else {
      selected = list.length - 1;
      scrolltoView();
    }
  }

  function scrolltoView() {
    const element =
      num === 1
        ? document.getElementById(`id1-${selected}`)
        : document.getElementById(`id2-${selected}`);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }
</script>

{#if num === 1}
  <h1 id="head-1">
    {heading}
  </h1>

  <div class="main" style="padding:2rem;">
    <div class="flex md:hidden justify-center items-center">
      <img class="img" width="150" src={imagePath} alt="" />
    </div>
    <div class="md:flex hidden justify-center items-center">
      <img class="img" width="250" src={imagePath} alt="" />
    </div>
    <div>
      <ul class="md:flex flex-col hidden">
        {#each list as item}
          <li
            on:click={() => {
              selected = list.indexOf(item);
              scrolltoView();
            }}
            on:keydown={() => {}}
            id={`id1-${list.indexOf(item)}`}
            style={`${
              selected === list.indexOf(item)
                ? "color:rgba(7,33,37,0.75);"
                : "color:rgba(7,33,37,0.2);"
            } transition:0.5s;`}
          >
            {item}
          </li>
        {/each}
      </ul>

      <li class="list-none min-h-[25vh] md:hidden flex">
        {list[selected]}
      </li>
      <div class="flex md:hidden">
        <button on:click={handlePrev}>
          <img width="50" class="handleScroll" alt="" src={leftArrow} />
        </button>
        <button on:click={handleNext}>
          <img width="50" class="handleScroll" alt="" src={rightArrow} />
        </button>
      </div>
      <div class="md:flex hidden">
        <button on:click={handlePrev}>
          <img width="75" class="handleScroll" alt="" src={leftArrow} />
        </button>
        <button on:click={handleNext}>
          <img width="75" class="handleScroll" alt="" src={rightArrow} />
        </button>
      </div>
    </div>
  </div>
{:else if num === 2}
  <div
    style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), #072125; padding:2rem;"
  >
    <h1 id="head-2">
      {heading}
    </h1>
    <div class="main">
      <div>
        <ul class="md:flex md:flex-col hidden">
          {#each list as item}
            <li
              on:click={() => {
                selected = list.indexOf(item);
                scrolltoView();
              }}
              on:keydown={() => {}}
              id={`id2-${list.indexOf(item)}`}
              style={`${
                selected === list.indexOf(item)
                  ? "color:rgba(7,33,37,0.75);"
                  : "color:rgba(7,33,37,0.2);"
              } transition:0.5s;`}
            >
              {item}
            </li>
          {/each}
        </ul>

        <div class="flex md:hidden justify-center items-center">
          <img class="img" width="150" src={imagePath} alt="" />
        </div>

        <li class="list-none min-h-[25vh] md:hidden flex">
          {list[selected]}
        </li>
        <div class="flex md:hidden">
          <button on:click={handlePrev}>
            <img width="50" class="handleScroll" alt="" src={leftArrow} />
          </button>
          <button on:click={handleNext}>
            <img width="50" class="handleScroll" alt="" src={rightArrow} />
          </button>
        </div>
        <div class="md:flex hidden">
          <button on:click={handlePrev}>
            <img width="75" class="handleScroll" alt="" src={leftArrow} />
          </button>
          <button on:click={handleNext}>
            <img width="75" class="handleScroll" alt="" src={rightArrow} />
          </button>
        </div>
      </div>

      <div class="md:flex hidden justify-center items-center">
        <img class="img" width="250" src={imagePath} alt="" />
      </div>
    </div>
  </div>
{/if}

<style>
  @font-face {
    font-family: "Supreme";
    src: url("/fonts/Supreme-Variable.ttf");
  }
  @font-face {
    font-family: "Aspekta";
    src: url("/fonts/Aspekta-500.ttf");
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
  }

  #head-2 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 25px;
    line-height: 32px;
    text-align: center;
    color: #072125;
    width: 60%;
    margin: 2rem auto;
  }

  #head-1 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 700;
    font-size: 1.313rem;
    line-height: 1.75rem;
    color: rgba(7, 33, 37, 0.75);
    width: 80%;
    margin: 5rem auto;
    text-align: center;
  }

  ul {
    height: 50vh;
    overflow-y: auto;
    padding: 2rem;
  }

  ul::-webkit-scrollbar {
    width: 0;
  }

  li {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin: 3rem 0;
    letter-spacing: -0.035em;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .img {
      margin-block: 3rem;
    }

    li {
      font-family: "Supreme";
      font-style: normal;
      font-weight: 500;
      font-size: 1.125rem;
      line-height: 1.75rem;
      letter-spacing: -0.035em;
      width: 100%;
      margin: 1rem;
    }

    h1 {
      font-size: 1rem;
      line-height: 1.5rem;
      color: rgba(7, 33, 37, 0.75);
      width: 80%;
      margin: 5rem auto;
      text-align: center;
    }

    #head-2 {
      width: 95%;
      font-size: 1.313rem;
      line-height: 1.75rem;
      text-align: center;
    }
    #head-1 {
      width: 95%;
      margin: auto;
      text-align: start;
      font-size: 1.313rem;
      line-height: 1.8rem;
    }
  }
</style>
