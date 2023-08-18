<script lang="ts">
  import { page } from "$app/stores";

  import instagram from "$lib/assets/social/instagram.png";
  import facebook from "$lib/assets/social/facebook.png";
  import twitter from "$lib/assets/social/twitter.png";
  import linkedin from "$lib/assets/social/linkedin.png";

  import logo from "$lib/assets/ezinore-logo.svg";
</script>

<nav class="md:flex flex-col hidden">
  <div
    class=" text-black items-center flex flex-row justify-between w-full p-5"
  >
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element"><img src={logo} width="150" alt="" /> </a>
    {:else}
      <a href="#home">
        <img src={logo} width="150" alt="" class="nav-element cursor-pointer" />
      </a>
    {/if}

    <div class="flex flex-row items-center">
      {#if $page.url.pathname !== "/"}
        <a href="/" class="nav-element">Home</a>
      {:else}
        <a href="#home" class="nav-element">Home</a>
      {/if}
      <a href="/about" class="nav-element">About</a>
      <a href="/product" class="nav-element">Product</a>
      <a href="/contact" class="contact">Contact Us</a>
    </div>
  </div>
  <div class="flex flex-row-reverse px-3 items-center">
    <a href="https://www.instagram.com/ezinore/" target="_blank">
      <img src={instagram} width="30" alt="" />
    </a>
    <a href="https://www.facebook.com/ezinore" target="_blank">
      <img src={facebook} width="30" alt="" />
    </a>
    <a href="https://twitter.com/ezinore" target="_blank">
      <img src={twitter} width="30" alt="" />
    </a>
    <a
      href="https://www.linkedin.com/company/ezinore-private-limited/?originalSubdomain=in"
      target="_blank"
    >
      <img src={linkedin} width="30" alt="" />
    </a>
    <h2>Follow us:</h2>
  </div>
  <hr />
  <h3>@ Ezinore 2023. All Right Reserved</h3>
</nav>

<nav class="md:hidden flex flex-col absolute w-full">
  <div class="flex flex-row justify-between items-center">
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element"><img src={logo} alt="" width="100" /> </a>
    {:else}
      <a href="#home">
        <img src={logo} width="150" alt="" class="nav-element cursor-pointer" />
      </a>
    {/if}

    <a href="/contact" class="contact">Contact Us</a>
  </div>

  <div class="flex flex-row justify-between p-5">
    {#if $page.url.pathname !== "/"}
      <a href="/" class="nav-element">Home</a>
    {:else}
      <a href="#home" class="nav-element">Home</a>
    {/if}
    <a href="/about" class="nav-element">About</a>
    <a href="/product" class="nav-element">Product</a>
  </div>

  <div class="flex flex-row justify-between p-5">
    <h2>Follow us:</h2>
    <a href="https://www.instagram.com/ezinore/" target="_blank">
      <img src={instagram} width="30" alt="" />
    </a>
    <a href="https://www.facebook.com/ezinore" target="_blank">
      <img src={facebook} width="30" alt="" />
    </a>
    <a href="https://twitter.com/ezinore" target="_blank">
      <img src={twitter} width="30" alt="" />
    </a>
    <a
      href="https://www.linkedin.com/company/ezinore-private-limited/?originalSubdomain=in"
      target="_blank"
    >
      <img src={linkedin} width="30" alt="" />
    </a>
  </div>
  <hr />
  <h3>@ Ezinore 2023. All Right Reserved</h3>
</nav>

<style>
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #072125ad;
    letter-spacing: -0.035em;
    margin: 1.5rem 0 2rem 0;
  }
  hr {
    border: none;
    height: 1px;
    background-color: #0721255e;
    margin: 1rem;
  }
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    margin-inline: 1rem;
    color: #072125;
  }
  img {
    margin-inline: 0.5rem;
  }
  .nav-element {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.125rem;
    letter-spacing: -0.035em;
    color: #072125;
    margin-inline: 1.5rem;
  }
  .nav-element:hover {
    color: #f4b931;
    transition: 0.2s;
  }
  nav {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.97),
        rgba(255, 255, 255, 0.97)
      ),
      #072125;
  }

  .contact {
    border-radius: 100px;
    font-family: "Supreme";
    color: black;
    margin: 0 2rem 0 1rem;
    align-items: center;
    padding: 0.7rem 1.4rem;
    gap: 10px;
    text-align: center;
    justify-content: center;
    display: flex;
    background-color: #f4b931;
    transition: 0.2s;
  }

  .contact:hover {
    color: black;
    background-color: #fcd988;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    .contact {
      border-radius: 30px;
      color: black;
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 0.75rem;
      background-color: #f4b931;
      width: 30%;
      padding: 0.5rem;
      margin: 1rem;
    }
  }
</style>
