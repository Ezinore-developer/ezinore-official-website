<script lang="ts">
  export let title: string;
  export let imgPath: string;
  export let content: string;
  export let index: number;
</script>

<!-- <div class="flex flex-row min-w-[10em] md:min-w-[50em] mx-20 my-4"> -->
<div id={`item-${index}`} class="container">
  <img src={imgPath} alt="" />
  <div class="flex flex-col mx-5">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 60em;
    margin-inline: 4rem;
    margin-block: 1rem;
  }

  @media screen and (max-width: 786px) {
    .container {
      flex-direction: column;
      min-width: 20em;
    }
    h1 {
      font-size: 1rem;
    }

    img {
      width: 100%;
    }
    p {
      font-size: 0.75em;
    }
  }

  p {
    color: #072125;
  }

  h1 {
    color: black;
    font-size: 2rem;
    margin-top: 1rem;
    font-weight: 700;
  }
</style>
