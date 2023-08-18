<script lang="ts">
  import ans1 from "$lib/assets/ans/ans1.svg";
  import ans2 from "$lib/assets/ans/ans2.svg";
  import ans3 from "$lib/assets/ans/ans3.svg";
  import ans4 from "$lib/assets/ans/ans4.svg";
  import ans5 from "$lib/assets/ans/ans5.svg";
  import ans6 from "$lib/assets/ans/ans6.svg";
</script>

<div class="main h-full p-10">
  <h1>Why choose us?</h1>

  <div class="answers">
    <div class="ans">
      <img src={ans1} alt="" />
      <br />
      <h2>All-in-one solution</h2>
      <br />
      <p>
        A single platform for generation, storage and management of the energy.
      </p>
    </div>
    <div class="ans">
      <img src={ans2} alt="" />
      <br />
      <h2>Real-time Monitoring and Analytics</h2>
      <br />
      <p>
        Customer satisfaction is at the core of everything we do. We are
        committed to providing exceptional service and building long-term
        relationships with our clients.
      </p>
    </div>
    <div class="ans">
      <img src={ans3} alt="" />
      <br />
      <h2>Quality and Reliability</h2>
      <br />
      <p>
        Partnered with reputable suppliers and manufacturers to get High-quality
        components.
      </p>
    </div>
    <div class="ans">
      <img src={ans4} alt="" />
      <br />
      <h2>End-to-end Solution</h2>
      <br />
      <p>
        Handle every aspect of your solar project, from initial project planning
        and engineering design to procurement, installation, and ongoing
        maintenance.
      </p>
    </div>
    <div class="ans">
      <img src={ans5} alt="" />
      <br />
      <h2>Extra Savings</h2>
      <br />
      <p>30% to 40% more saving from regular solar inverter systems.</p>
    </div>
    <div class="ans">
      <img src={ans6} alt="" />
      <br />
      <h2>Experience and Support</h2>
      <br />
      <p>
        Customer satisfaction is at the core of everything we do. We are
        committed to providing exceptional service and building long-term
        relationships with our clients.
      </p>
    </div>
  </div>
</div>

<style>
  h2 {
    /* font-weight: 650;
    margin: 1rem 1rem;
    font-family: "Aspekta";
    font-size: 1.5rem; */
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 750;
    font-size: 1.313rem;
    line-height: 1.75rem;
    text-align: center;
  }

  .ans {
    display: flex;
    flex-direction: column;
    margin: 2rem;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 12px;

    padding: 1.5rem;
  }

  .answers {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: minmax(100px, auto);
  }
  p {
    /* color: #072125;
    font-size: 0.875rem;
    font-family: "Supreme";
    font-weight: 550; */
    font-family: "Supreme";
    font-style: normal;
    font-weight: 500;
    font-size: 1.313rem;
    line-height: 1.75rem;
    text-align: center;
    letter-spacing: -0.035em;
    color: rgba(7, 33, 37, 0.75);
  }
  h1 {
    color: black;
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 1rem;
    font-weight: bold;
    font-family: "Aspekta";
  }

  .main {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.92),
        rgba(255, 255, 255, 0.92)
      ),
      #072125;
  }

  @media screen and (max-width: 768px) {
    .answers {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 2rem;
      text-align: center;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
</style>
