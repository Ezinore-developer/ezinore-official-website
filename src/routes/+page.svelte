<script>
  import Description from "$lib/components/Description.svelte";
  import Form from "$lib/components/Form.svelte";
  import LandingPage from "$lib/components/LandingPage.svelte";
  import Services from "$lib/components/Services.svelte";
  import Whyus from "$lib/components/Whyus.svelte";
  import Testimonials from "$lib/components/Testimonials.svelte";
  import Sellingto from "$lib/components/Sellingto.svelte";
  import Faq from "$lib/components/faq.svelte";
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<svelte:head>
  <title>Ezinore</title>
  <meta
    name="ezinore"
    content="We at ezinore comprehensive solution to meet all your energy needs, including
generation, storage, and management."
  />
  <script type="application/ld+json">
  {
    "@context" : "https://schema.org",
    "@type" : "Organization",
    "name" : "Ezinore",
    "url" : "https://ezinore.com/",
  }
  </script>
</svelte:head>

<LandingPage /> 
<Description />
<!-- <Form /> -->
<Whyus />
<Services />
<Sellingto />
<!-- <Testimonials/> -->
<Faq />

<style>
  @font-face {
    font-family: "Supreme";
    src: url("/fonts/Supreme-Variable.ttf");
  }
  @font-face {
    font-family: "Aspekta";
    src: url("/fonts/Aspekta-500.ttf");
  }
</style>
