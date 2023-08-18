<script lang="ts">
  export let content: string;
  export let title: string;
  export let imgPath: string;
</script>

<div class="main">
  <img src={imgPath} alt="" style="width:60%" class="flex md:hidden" />
  <div class="content">
    <h1>{title}</h1>
    <br class="md:flex hidden">
    <p>{content}</p>
  </div>
  <img src={imgPath} alt="" style="width:60%" class="md:flex hidden" />
</div>

<style>
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 70%;
  }

  h1 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 2.313rem;
    line-height: 2.75rem;
    color: #072125;
  }
  .main {
    background-color: white;
    border-radius: 12px;
    padding: 2rem;
    margin-left: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: inline-block;
    justify-content: center;
    min-width: 50rem;
    height: 25rem;
    margin-right: 10rem;
  }
  p {
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.313rem;
    line-height: 1.75rem;
    color: rgba(7, 33, 37, 0.75);
    letter-spacing: -0.035em;
  }

  img {
    translate: 30em -27em;
    scale: 1;
  }

  @media screen and (max-width: 786px) {
    h1 {
      font-size: 1.5em;
      line-height: 2rem;
      text-align: start;
    }

    p {
      width: 100%;
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    .main {
      min-width: 16em;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 1rem;
      flex-direction: column;
      padding: 1rem;
      height: 30rem;
    }

    img{
      translate: 0 0rem ;
      scale: 2;
    }
   
    .content {
      text-align: flex-start;
      justify-content: center;
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
</style>
