<script lang="ts">
  import { onMount } from "svelte";

  import sparko from "$lib/assets/sparko.png";
  import ScrollModal from "$lib/components/Modals/ScrollModal.svelte";
  import sparkoVideo from "$lib/assets/sparkoVid.mp4";
  import moblieApp from "$lib/assets/mobile-app.png";

  let video: HTMLVideoElement;

  onMount(() => {
    video.play();
  });

  let list1 = [
    "Utilizing artificial intelligence algorithms to analyse energy consumption patterns, weather patterns and solar irradiance to identify inefficiencies, and provide personalized recommendations for optimal energy usage.",
    "A scalable and modular design, allowing easy integration into existing energy infrastructure and future expansions.",
    "Inbuild battery system with integrated liquid cooling to increase battery life and efficiency.",
  ];
  let list2 = [
    "Provides you with real-time insights into your energy consumption, generation, and storage",
    "Offers detailed analytics and visualizations of your energy usage patterns. You can view historical data, analyse trends, and identify areas where you can optimize your energy consumption.",
    "Allows to monitor and manage energy storage effectively. You can check the state of charge, set charging and discharging schedules, and receive notifications about the performance of your energy storage system.",
    "Get notified about high energy usage, low battery levels, system malfunctions, or any other critical updates.",
    "The app offers easy access to our customer care and after sales services.",
  ];
</script>

<div class=" flex flex-col items-center justify-center main">
  <h1 class="text-center">Coming Soon</h1>
  <div class="md:hidden flex">
    <img
      class="main-img"
      src={sparko}
      width="170"
      alt=""
      style="margin-top: 5rem;"
    />
  </div>
  <div class="md:flex hidden">
    <img class="main-img" src={sparko} width="300" alt="" />
  </div>
  <h2>
    An AI powered smart energy control system with integrated inverter system
    and in build liquid cooled energy storage system.
  </h2>
</div>
<div class="bg-white">
  <video bind:this={video} autoplay muted loop>
    <track kind="captions" />
    <source src={sparkoVideo} type="video/mp4" />
  </video>
</div>

<ScrollModal
  list={list1}
  imagePath={sparko}
  num={1}
  heading="Sparko tracks the amount of energy that solar panels produce and automatically
adjusts the energy flow from grids and solar panels for maximum energy
consumption. Any excess energy generated is stored in the inbuilt battery
system further savings."
/>
<ScrollModal
  list={list2}
  imagePath={moblieApp}
  num={2}
  heading="Sparko comes with an app that allows you to monitor and control the flow of energy."
/>

<svelte:head>
  <title>Our Products</title>
  <meta name="Ezinore Products" content="We at ezinore provide various product for your varying energy demands"/>
  <script type="application/ld+json">
    {
      "@context" : "https://schema.org",
      "@type" : "Organization",
      "name" : "Ezinore",
      "url" : "https://ezinore.com/product",
    }</script>
</svelte:head>

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
    background-color: #0e0d0b;
  }

  .main-img {
    translate: 0 -5rem;
  }

  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    scale: 0.8;
  }
  h1 {
    margin-top: 5rem;
    font-style: normal;
    font-weight: 650;
    font-size: 8rem;
    width: 100%;
    font-family: "Aspekta";
    color: #ddf6a2;
  }

  h2 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 1.563rem;
    line-height: 2rem;
    width: 50%;
    position: absolute;
    translate: 0 15rem;
    text-align: center;
    color: #ddf6a2;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    img {
      translate: 0 0;
    }
    h2 {
      width: 90%;
      font-size: 1rem;
      translate: 0 10rem;
      line-height: 1.28rem;
    }

    .main {
      padding: 3rem;
    }
  }
</style>
