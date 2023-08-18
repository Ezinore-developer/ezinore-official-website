<script>
  import ServicesModal from "./Modals/ServicesModal.svelte";
  import l1 from "$lib/assets/services/l1.png";
  import l2 from "$lib/assets/services/l2.png";
  import l3 from "$lib/assets/services/l3.png";
  import l4 from "$lib/assets/services/l4.png";
  import l5 from "$lib/assets/services/l5.png";

  import { onMount } from "svelte";

  onMount(() => {
    const body = document.getElementById("body");

    body?.addEventListener("scroll", () => {
      if (body.scrollTop > 50) {
        console.log("hello");
      }
    });
  });
</script>

<div id="body">
  <h1 class="px-10">Our Services</h1>
  <div class="scrollbar-hide px-10">
    <ServicesModal
      content={"We visit the site of installation and inspect the infrastructure to estimate the system configuration that would be suitable for installation."}
      title={"Inspection"}
      imgPath={l1}
    />

    <ServicesModal
      content={"A 3D model of SPARKO and associated solar panel system is designed."}
      title={"3D Modelling"}
      imgPath={l2}
    />

    <ServicesModal
      content={"Our technicians visit the site and set up the complete solar solution consisting of solar panels and the SPARKO."}
      title={"Installation"}
      imgPath={l3}
    />
    <ServicesModal
      content={"Through the SPARKO companion app, you get a real-time view of the solar generation and battery status. The flow of energy can also be manually controlled through the app"}
      title={"Digital Monitoring and Energy flow control"}
      imgPath={l4}
    />
    <ServicesModal
      content={"Cleaning of solar panels along with maintenance and upkeep of SPARKO would be provided on a subscription basis at a minimal cost."}
      title={"Maintainence and After sales services"}
      imgPath={l5}
    />
  </div>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  #body {
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    background-color: #072125;
    padding-block: 2.5rem;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;

    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    width: 100%;
  }

  h1 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 2.75rem;
    margin-left: 1rem;
    line-height: 3.375rem;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5em;
      text-align: center;
    }
  }
</style>
