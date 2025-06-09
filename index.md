---
layout: index
sectionid: home
---

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">

<div class="header-container jumbotron">
    <div class="container">
        <h1>JailbreakRadar: Comprehensive Assessment of Jailbreak Attacks Against LLMs</h1>
        <p>
          <br>
        </p>
        <p>
          <a class="btn btn-primary btn-lg" href="https://arxiv.org/abs/2402.05668" role="button">Learn more</a>
        </p>
    </div>
</div>

<div class="container">
    <div class="row">
        <div class="col-md-6">
            <h2 class="header-light regular-pad" style="font-size: 40px;">Abstract</h2>
              <p class="lead">
              <i>Jailbreak attacks</i> aim to bypass the LLMs' safeguards.
              While researchers have proposed different jailbreak attacks in depth, they have done so in isolation---either with unaligned settings or comparing a limited range of methods.
              To fill this gap, we present a large-scale evaluation of various jailbreak attacks.
              We collect 17 representative jailbreak attacks, summarize their features, and establish a novel jailbreak attack taxonomy.
              Then we conduct comprehensive measurement and ablation studies across nine aligned LLMs on 160 forbidden questions from 16 violation categories.
              Also, we test jailbreak attacks under eight advanced defenses.
              Based on our taxonomy and experiments, we identify some important patterns.
              For example, we find that <strong>heuristic-based</strong> attacks could achieve high attack success rates but are very easy to mitigate by defenses, causing low practicality.
              </p>
        </div>
        <div class="col-md-6 text-center">
            <img src="{{ "/assets/img/overview.png" | relative_url }}" alt="Overview" class="img-responsive" width="80%" style="margin-top: 40px; margin-left: 40px;">
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-4">
            <h1 class="text-center"><i class="fa-solid fa-sitemap" aria-hidden="true"></i></h1>
            <h3 class="text-center">Jailbreak Taxonomy</h3>
            <p>
              We classify the methods based on two criteria: 
              (1) whether the original forbidden question is modified;
              (2) how these modified prompts are generated in the method.
            </p>
        </div>
        <div class="col-sm-4">
            <h1 class="text-center"><i class="fa-solid fa-file-shield" aria-hidden="true"></i></h1>
            <h3 class="text-center">Unified Usage Policy</h3>
            <p>
              We collect and summarize the usage policies from five major LLM-related service providers (Google, OpenAI, Meta, Amazon, and Microsoft).
            </p>
        </div>
        <div class="col-sm-4">
            <h1 class="text-center"><i class="fa-solid fa-gears" aria-hidden="true"></i></h1>
            <h3 class="text-center">Unified Settings</h3>
            <p>
              We align the experimental settings, especially the number of steps in the optimization process, to provide an unbiased and fair experimental setup as much as possible.
            </p>
        </div>
    </div>
</div>
