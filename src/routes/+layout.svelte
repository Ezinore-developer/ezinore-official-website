<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  // const path = $page;

  // if (path === "/") console.log(true);
</script>

<div class="main">
  <!-- {#if $page.url.pathname !== "/"} -->
  <Navbar />
  <!-- {/if} -->
  <slot />
  <Footer />
</div>

