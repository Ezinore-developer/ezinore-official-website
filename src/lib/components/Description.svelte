<script>
  import product from "$lib/assets/sparko-with-app.png";
</script>

<div id="main">
  <div class="col-span-1 flex justify-center items-center">
    <div class="hidden md:flex">
      <img width="400" src={product} alt="" style="margin:3rem;" />
    </div>

    <div class="flex md:hidden">
      <img width="200" src={product} alt="" style="margin:3rem;" />
    </div>
  </div>
  <div class="col-span-1 content">
    <h1>What is the solution?</h1>
    <p>
      'Sparko' is an all-in-one solution to store and manage energy. It
      seamlessly integrates with solar panels and the grid, using artificial
      intelligence algorithms to analyze energy consumption patterns and weather
      conditions of the future to save your energy. It comes with an app that
      allows you to monitor and control the flow of energy.
    </p>
    <a href="/about" id="button"> Learn More </a>
  </div>
</div>

<style>
  h1 {
    font-style: normal;
    font-weight: 650;
    font-size: 44px;
    line-height: 54px;
    color: black;
    margin-block: 1rem;
    font-family: "Aspekta";
  }
  p {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 28px;
    color: rgba(7, 33, 37, 0.75);
    letter-spacing: -0.035em;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-right: 3rem;
    margin: 1rem;
  }
  #main {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    background-color: white;
  }

  #button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    color: #072125;
    border-radius: 100px;
    margin-block: 1.5rem;
    background-color: #f4b931;
    transition: 0.3s;
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.125rem;
    letter-spacing: -0.035em;
  }

  #button:hover {
    color: black;
    background-color: #fcd988;
    transition: 0.3s;
  }
  @media screen and (max-width: 786px) {
    #main {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
