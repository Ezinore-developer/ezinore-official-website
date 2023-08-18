<script lang="ts">
  import { page } from "$app/stores";

  const title = $page.url.searchParams.get("title");
  const subtitle = $page.url.searchParams.get("subtitle");
</script>

<div class="h-screen flex justify-center items-center">
  {#if title === "ts" && subtitle === "24"}
    <div id="main">
      <h1>Thank you for your query</h1>
      <br/>
      <h2>We will get back to you within 24h</h2>
      <a href="/" id="button">Back to Home</a>
    </div>
  {:else}
    <div id="main">
      <h1>Some error occured</h1>
      <a href="/contact" id="button">Please try again</a>
    </div>
  {/if}
</div>

<svelte:head>
  <title>Thank you</title>
</svelte:head>

<style>
  h1 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 1.875rem;
    line-height: 2.375rem;
    color: #072125;
  }
  h2 {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.313rem;
    color: rgba(7, 33, 37, 0.75);
    line-height: 1.75rem;
    text-align: center;
    letter-spacing: -0.035em;
  }
  #main {
    display: flex;
    border-radius: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 9.375rem;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.92),
        rgba(255, 255, 255, 0.92)
      ),
      #072125;
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

  @media (max-width: 768px) {
    #main {
      padding: 1rem;
      margin: 1rem;
      text-align: center;
    }
  }
</style>
