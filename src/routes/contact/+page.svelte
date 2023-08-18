<script lang="ts">
  import {goto} from '$app/navigation'
  let message = "";
  let email = "";
 
</script>


<div class="h-full px-20 py-10 grid grid-cols-1 md:grid-cols-2 main gap-10">
  <div class="span-cols-1 w-[100%] flex flex-col mt-10">
    <h1>How can we help you?</h1>
    <input type="text" bind:value={email} placeholder="Email" />
    <input
      type="text"
      bind:value={message}
      placeholder="Message"
      style="vertical-align: top; padding: 1rem 1rem 12rem 1rem;"
      class="h-full"
    />
    <button
      on:click={async (e) => {
        e.preventDefault();

        const res = await fetch("/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, message }),
        });

        if (res.status == 200) {
          goto("/thankyou?title=ts&subtitle=24")
        } else {
          goto("/thankyou?title=err&subtitle=goback")
        }
      }}
    >
      Submit
    </button>
  </div>
  <div class="span-cols-1 w-[100%] flex flex-col bg-white rounded-3xl mt-10">
    <iframe
      id="rightbox"
      title="Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.997286360262!2d77.11578627445043!3d28.749497978761426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1685632063774!5m2!1sen!2sin"
      frameborder="0"
      style="border:0; width: 100%; height: 290px;"
      allowfullscreen
    />
    <div class="flex flex-col justify-evenly p-5">
      <div>
        <h2>Contact Information</h2>

        <p>
          <strong>Phone number:</strong>
          +91 9355482696
        </p>
        <p>
          <strong>Email address:</strong>
          connect@ezinore.com
        </p>
      </div>

      <br />

      <div>
        <h2>Address</h2>
        <p>DTU,IIF,Delhi</p>
      </div>
    </div>
  </div>
</div>

<svelte:head>
  <title>Contact Us</title>
  <meta
    name="ezinore"
    content="Contact Ezinore to start your sustainable journey today"/>
    <script type="application/ld+json">
      {
        "@context" : "https://schema.org",
        "@type" : "Organization",
        "name" : "Ezinore",
        "url" : "https://ezinore.com/contact",
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
  #rightbox {
    background-image: url("$lib/assets/join-us.png");
    background-clip: content-box;
    background-size: contain;
    background-position: center;
    border-top-left-radius: 1.5rem /* 24px */;
    border-top-right-radius: 1.5rem /* 24px */;
    width: 100%;
    height: 50%;
  }

  .main {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.92),
        rgba(255, 255, 255, 0.92)
      ),
      #072125;
    margin: 2rem;
    border-radius: 20px;
  }

  button {
    width: 40%;
    background-color: #f4b931;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 10px;
    border-radius: 50px;
    transition: 0.3s;
  }

  button:hover {
    color: black;
    background-color: #fcd988;
    transition: 0.3s;
  }

  input {
    border-radius: 10px;
    padding: 1rem;
    margin-block: 1rem;
  }

  p {
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    font-size: 1rem;
    font-family: "Supreme";
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.313rem;
    line-height: 1.75rem;
    font-family: "Supreme";
  }

  h1 {
    font-style: normal;
    font-weight: 650;
    font-size: 2rem;
    font-family: "Aspekta";
    color: #072125;
  }

  @font-face {
    font-family: "Supreme";
    src: url("/fonts/Supreme-Variable.ttf");
  }
  @font-face {
    font-family: "Aspekta";
    src: url("/fonts/Aspekta-500.ttf");
  }

  @media screen and (max-width: 768px) {
    .main {
      margin: 2rem;
      padding: 5%;
    }
    #rightbox {
      height: 100%;
      width: 100%;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }

    button {
      width: 100%;
    }
  }
</style>
