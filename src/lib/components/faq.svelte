<script lang="ts">
  const faqs = [
    {
      question: "What are you trying to solve?",
      answer:
        "We are providiging user with the ability to manage and utilize their energy effectively providing them with comprehnsive solutions which empowers our customers to overcome grid dependency and reduce their electricity bills.",
    },
    {
      question: "Why should we choose ezinore?",
      answer:
        "You should choose ezinore as we provide realtime monitoring and controls on your mobile,with easy integration and installation of renewable energy solutions. We have a scalable and modular design. With the help of AI based energy optimization, our system helps user to reduce their electricity bills to more than 40% ",
    },
    {
      question: "How does SPARKO help in reducing my electricity bill?",
      answer:
        "We provide a single integrated platform that combines Artificial Intelligence, renewable energy solutions and energy storage technologies to optimize energy usage, reduce costs and promote sustainability.",
    },
    // {
    //   question: "What services does ezinore provide?",
    //   answer:
    //     "",
    // },
    // {
    //   question: "How do I get started with SPARKO?",
    //   answer:
    //     " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis ultrices ultricies",
    // },
  ];

  let activeIndex: any = null;

  function toggleFAQ(index: number) {
    if (activeIndex === index) {
      activeIndex = null;
    } else {
      activeIndex = index;
    }
  }
</script>

<h1>Frequently Asked Questions</h1>
<br />
{#each faqs as faq, index}
  <div class="faq-container">
    <div class="flex flex-row justify-between items-center">
      <h2>{faq.question}</h2>
      <button class="btn" on:click={() => toggleFAQ(index)}
        >{index === activeIndex ? "-" : "+"}</button
      >
    </div>
  </div>
  {#if index === activeIndex}
    <p>{faq.answer}</p>
  {/if}
{/each}

<style>
  @font-face {
    font-family: "Supreme";
    src: url("/fonts/Supreme-Variable.ttf");
  }
  @font-face {
    font-family: "Aspekta";
    src: url("/fonts/Aspekta-500.ttf");
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

  .btn {
    background: #072125;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-weight: 500;
    font-size: 1.25rem;
    translate: 0 -0.1rem;
    width: 3rem;
    height: 3rem;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin: 2rem;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.92),
        rgba(255, 255, 255, 0.92)
      ),
      #072125;
    letter-spacing: -0.035em;
    padding: 2.5rem;
    border-radius: 8px;
  }
  .faq-container {
    margin: 1rem 2rem;
    border-radius: 8px;
    padding: 1.5rem 2rem;
    overflow: hidden;
    gap: 32px;
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.92),
        rgba(255, 255, 255, 0.92)
      ),
      #072125;
  }

  h2 {
    font-family: "Aspekta";
    font-style: normal;
    font-weight: 700;
    font-size: 1.313rem;
    line-height: 1.75rem;
    color: #072125;
  }

  @media screen and (max-width: 768px) {
    .faq-container {
      margin: 0.5rem;
      padding: 1rem;
      width: 95%;
    }

    h1 {
      font-size: 1.25rem;
    }

    h2 {
      font-size: 1rem;
      width: 70%;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }

    .btn {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1rem;
    }
  }
</style>
