<script>
  import residentialImage from "$lib/assets/residential-icon.png";
  import commercialImage from "$lib/assets/commercial-icon.png";
</script>

<div id="sellingto">
  <div>
    <h1>Who are we selling to?</h1>
    <br />
    <p class="md:flex hidden">
      We are catering to both the sectors and provide customized solutions to
      everyone.
    </p>
  </div>
  <div class="flex flex-row">
    <div class="flex flex-col items-center justify-center">
      <img src={residentialImage} alt="" />
      <br/>
      <h2>Residential</h2>
    </div>
    <div class="flex flex-col items-center justify-center">
      <img src={commercialImage} alt="" />
      <br/>
      <h2>Commercial</h2>
    </div>
  </div>
</div>

<style>
  h1 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 2.75rem;
    line-height: 3.375rem;
    text-align: left;
    color: #072125;
  }
  img {
    width: 60%;
    min-width: 60%;
    background-color: white;
    border-radius: 100%;
    padding: 1rem;
  }
  #sellingto {
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 24px;
    padding: 3rem;
    margin: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: rgb(240, 240, 240);
  }

  p {
    /* font-style: normal;
    font-weight: 500;
    margin-top: 1.5rem;
    font-family: 'Supreme'; */
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.313rem;
    line-height: 1.75rem;
    color: rgba(7, 33, 37, 0.75);
    letter-spacing: -0.035em;
  }
  h2 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 700;
    font-size: 1.313rem;
    line-height: 1.75rem;
    color: rgba(7, 33, 37, 0.75);
  }

  @media (max-width: 768px) {
    #sellingto {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 1.3rem;
      text-align: center;
    }

    h2 {
      font-size: 1rem;
      text-align: center;
    }

    img {
      widows: 90%;
      min-width: 90%;
      margin-inline: 1rem;
    }
  }
</style>
