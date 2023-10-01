<script>
  import nexus from "$lib/assets/investors/nexus.jpg";
  import nidhi from "$lib/assets/investors/nidhi.jpg";
</script>

<h1>Supported by</h1>
<div>
  <img src={nexus} alt="nexus" />
  <img src={nidhi} alt="nidhi" />
</div>

<style>
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  h1 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 650;
    font-size: 2.75rem;
    line-height: 3.375rem;
    text-align: center;
    color: #000000;
  }

  img{
    width: 20rem;
    margin: 5rem;
  }

  @media screen and (max-width: 768px) {
    div {
      flex-direction: column;
    }
    h1 {
      font-size: 1.25rem;
    }

    img{
      width: 15rem;
      margin: 2rem;
    }
  }
</style>
