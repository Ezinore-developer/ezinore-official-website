<script lang="ts">
  import logo from "$lib/assets/ezinore-logo.svg";
  import { page } from "$app/stores";

  import Icon from "@iconify/svelte";
  import { slide } from "svelte/transition";

  let isOpen: boolean = false;

  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>

<nav
  class=" hidden z-20 text-black items-center md:flex flex-row justify-between w-full md:p-5 p-2"
>
  {#if $page.url.pathname !== "/"}
    <a href="/" class="nav-element"><img src={logo} width="150" alt="" /> </a>
  {:else}
    <a href="/">
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
</nav>

<nav class="flex md:hidden w-full bg-white z-20 p-2 justify-between">
  {#if $page.url.pathname !== "/"}
    <a href="/" class="nav-element"><img src={logo} width="150" alt="" /> </a>
  {:else}
    <a href="/">
      <img src={logo} width="150" alt="" class="nav-element cursor-pointer" />
    </a>
  {/if}
  <button on:click={() => toggleSidebar()}>
    <Icon icon="charm:menu-hamburger" color="#12a2ad" width="40" />
  </button>

  {#if isOpen}
    <div
      class="flex flex-col items-center justify-start w-[50%] h-screen bg-white absolute top-0 right-0 z-10"
      in:slide={{ axis: "x", duration: 400 }}
      out:slide={{ axis: "x", duration: 400 }}
    >
      <button class="nav-element-sidebar" on:click={() => toggleSidebar()}
        ><Icon icon="akar-icons:cross" color="#12a2ad" width="40" />
      </button>
      <a on:click={() => toggleSidebar()} href="/" class="nav-element-sidebar"
        >Home</a
      >
      <a
        on:click={() => toggleSidebar()}
        href="/about"
        class="nav-element-sidebar">About</a
      >
      <a
        on:click={() => toggleSidebar()}
        href="/product"
        class="nav-element-sidebar">Product</a
      >
      <a on:click={() => toggleSidebar()} href="/contact" class="contact"
        >Contact Us</a
      >
    </div>
  {/if}
</nav>

<style>
  @font-face {
    font-family: "Supreme";
    src: url("/fonts/Supreme-Variable.ttf");
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

  .nav-element-sidebar {
    font-weight: 500;
    margin: 1rem 2rem 1rem 2rem;
    text-align: flex-start;
    font-family: "Supreme";
    transition: 0.2s;
  }

  .nav-element:hover {
    color: #f4b931;
    transition: 0.2s;
  }

  nav {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.92),
        rgba(255, 255, 255, 0.92)
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
    transition: 0.2s;
  }

  @media screen and (max-width: 768px) {
    .contact {
      margin: 1rem 0;
    }
  }
</style>
