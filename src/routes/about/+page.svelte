<script lang="ts">
  import k1 from "$lib/assets/aim/a1.png";
  import k2 from "$lib/assets/aim/a2.png";
  import k3 from "$lib/assets/aim/a3.png";

  import gopal from "$lib/assets/team/gopal.png";
  import rohit from "$lib/assets/team/rohit.png";
  import saumya from "$lib/assets/team/saumya.jpg";
  import anshu from "$lib/assets/team/anshu.jpg";
  import keshav from "$lib/assets/team/keshav.jpg";
  import nirmal1 from "$lib/assets/team/1.png";

  import rightArrow from "$lib/assets/right-arrow.png";
  import leftArrow from "$lib/assets/left-arrow.png";
  import Testimonials from "$lib/components/Testimonials.svelte";

  let selected: number = 0;

  function handleNext() {
    if (selected < team.length - 1) {
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
      selected = team.length - 1;
      scrolltoView();
    }
  }

  function scrolltoView() {
    const element = document.getElementById(`id-${selected}`);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      
      });
  }

  const team = [
    { img: nirmal1, name: "Nirmal Yadav", position: "Founder/CEO", id: 0 },
    { img: rohit, name: "Rohit Gorai", position: "Design Head", id: 1 },
    {
      img: gopal,
      name: "Gopal Mathur",
      position: "Full Stack Developer",
      id: 2,
    },
    { img: saumya, name: "Saumya Garg", position: "UI/UX Designer", id: 3 },
    { img: anshu, name: "Anshukanchan Mohanta", position: "3D Designer", id: 4 },
    { img: keshav, name: "Keshav Singhal", position: "AI/ML Engineer", id: 5 },
    // { img: sujal, name: "Sujal", position: "Emdedded Engineer", id: 6},
  ];
</script>

<div class=" hidden md:grid grid-cols-1">
  <div
    class={`bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex flex-col-reverse items-center z-0`}
  />
</div>

<div
  class="flex md:hidden bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex-col-reverse items-center z-0"
/>

<div class="py-10 md:px-14 px-4">
  <h2>Aim</h2>
  <p class="aim-para">
    Our goal is to revolutionise today's power grid system with the help of an
    all-in-one sustainable solution that seamlessly embeds itself into the
    existing infrastructure.
  </p>

  <div class="flex md:flex-row flex-col m-0 mt-10 md:w-full md:justify-between">
    <div class="ans">
      <img src={k1} alt="" />
      <br />
      <p>
        Sustainable electricity with minimal environmental impact, powered by
        renewable energy sources.
      </p>
    </div>
    <div class="ans">
      <img src={k2} alt="" />
      <br />
      <p>
        A future where every building is a net-zero energy building, enabled by
        renewable energy and smart grid technologies optimized by AI.
      </p>
    </div>
    <div class="ans">
      <img src={k3} alt="" />
      <br />
      <p>
        An efficient and resilient electricity grid, powered by sustainable
        energy and fine-tuned to minimize waste and emissions.
      </p>
    </div>
  </div>
</div>

<div class="team-section m-0 py-12 md:px-14 px-4">
  <div class="flex flex-row justify-between">
    <h2>Team</h2>
    <div class="md:flex hidden">
      <button class="text-2xl" on:click={handlePrev}>
        <img class="handleScroll" alt="" src={leftArrow} />
      </button>
      <button class="text-2xl" on:click={handleNext}>
        <img class="handleScroll" alt="" src={rightArrow} />
      </button>
    </div>
  </div>

  <br />
  <ul class="slider">
    {#each team as member}
      <li
        on:click={() => {
          selected = member.id;
          scrolltoView();
        }}
        on:keydown={() => {}}
        id={`id-${member.id}`}
        class=" element"
        style={`background-image: url('${
          member.img
        }'); background-size: cover; background-position: center; ${
          selected === member.id ? "scale:1.05;" : "scale:1;"
        } `}
      >
        <div class=" w-full p-3 bg-white rounded-b-[19px]">
          <h3>{member.name}</h3>
          <br />
          <h4>{member.position}</h4>
        </div>
      </li>
    {/each}
  </ul>
</div>

<svelte:head>
  <title>About Us</title>
  <meta
    name="description"
    content="We at Ezinore believe in sustainable future aimed towards customer satisfatction through are products and services."/>
    <script type="application/ld+json">
    {
      "@context" : "https://schema.org",
      "@type" : "Organization",
      "name" : "Ezinore",
      "url" : "https://ezinore.com/about",
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

  .team-section {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.92),
        rgba(255, 255, 255, 0.92)
      ),
      #072125;
  }
  li {
    height: 27rem;
    min-width: 17rem;
    margin: 1rem;
    display: flex;
    flex-direction: column-reverse;
    transition: transform 0.3s ease;
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;
  }
  #button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    color: black;
    border-radius: 100px;
    margin-block: 1.5rem;
    background-color: #f4b931;
    transition: 0.3s;
  }

  #button:hover {
    color: #f4b931;
    background-color: black;
    transition: 0.3s;
  }

  .handleScroll {
    display: flex;
    justify-self: center;
    align-items: center;
    border-radius: 150px;
    margin: 0 0.5rem;
    transition: 0.3s;
    width: 3rem;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    font-family: "Aspekta";
  }
  h4 {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 700;
    font-size: 1.313rem;
    line-height: 1.313rem;
    color: rgba(7, 33, 37, 0.75);
    letter-spacing: -0.02em;
  }

  h3 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 1.563rem;
    line-height: 2rem;
    color: #072125;
  }

  p {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: -0.035em;
    color: rgba(7, 33, 37, 0.75);
  }

  .slider {
    height: fit-content;
    scrollbar-width: 0em;
    scrollbar-color: transparent transparent;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .slider::-webkit-scrollbar {
    width: 0em;
  }

  .slider::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .ans {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 20em;
    padding-bottom: 2rem;
  }

  .aim-para {
    margin-right: 20rem;
    margin-top: 1rem;
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: -0.035em;
  }

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1rem;
      line-height: 1em;
    }

    h4 {
      font-size: 0.875rem;
    }

    h2 {
      font-size: 2rem;
      text-align: center;
    }

    li {
      height: 20rem;
      min-width: 10rem;
    }
    .aim-para {
      width: 100%;
      margin-bottom: 1rem;
    }
    .ans {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-bottom: 2rem;
      margin: 0;
    }

    p {
      text-align: center;
    }
    img {
      width: 30%;
      margin: 1rem;
    }
  }
</style>
