---
layout: index
sectionid: home
---

<section class="hero-section">
  <div class="site-shell hero-grid">
    <div class="hero-copy">
      <p class="hero-kicker"><span>Jailbreak evaluation</span><span>LLM safety</span></p>
      <h1>Classify each attack<br><em>Analyze each type</em></h1>
      <p class="hero-summary">JailbreakRadar provides a unified view of how representative jailbreak attacks perform across aligned language models—and how well advanced defenses hold up.</p>
      <div class="hero-actions">
        <a class="button button-primary" href="https://arxiv.org/abs/2402.05668">Read the paper <span aria-hidden="true">↗</span></a>
        <a class="button button-secondary" href="{{ '/leaderboard' | relative_url }}">Explore results <span aria-hidden="true">→</span></a>
      </div>
      <p class="hero-citation"><span class="venue-badge">ACL 2025</span><span>Chu et al. · arXiv:2402.05668</span></p>
    </div>

    <div class="radar-blueprint" aria-label="JailbreakRadar evaluation coverage">
      <div class="blueprint-head">
        <span>Assessment coverage</span>
        <span class="status-pill"><i></i> Unified benchmark</span>
      </div>
      <div class="radar-display" aria-hidden="true">
        <div class="radar-ring ring-one"></div>
        <div class="radar-ring ring-two"></div>
        <div class="radar-ring ring-three"></div>
        <div class="radar-axis axis-x"></div>
        <div class="radar-axis axis-y"></div>
        <div class="radar-sweep"></div>
        <span class="radar-dot dot-one"></span>
        <span class="radar-dot dot-two"></span>
        <span class="radar-dot dot-three"></span>
        <span class="radar-dot dot-four"></span>
        <div class="radar-center"><strong>17</strong><span>attacks</span></div>
      </div>
      <div class="coverage-grid">
        <p><strong>9</strong><span>aligned LLMs</span></p>
        <p><strong>160</strong><span>questions</span></p>
        <p><strong>16</strong><span>policy areas</span></p>
        <p><strong>8</strong><span>defenses</span></p>
      </div>
    </div>
  </div>
</section>

<section class="proof-strip" aria-label="Evaluation principles">
  <div class="site-shell proof-grid">
    <p><strong>Comprehensive</strong><span>17 representative attacks</span></p>
    <p><strong>Comparable</strong><span>Unified experimental settings</span></p>
    <p><strong>Practical</strong><span>Eight advanced defenses</span></p>
  </div>
</section>

<section class="overview-section section-space">
  <div class="site-shell overview-layout">
    <div class="overview-copy">
      <p class="section-kicker">Evaluation at a glance</p>
      <h2>A unified view of jailbreak evaluation.</h2>
      <p>We organize jailbreak methods by how they transform harmful questions, then evaluate attacks and defenses under aligned settings.</p>
      <ul class="overview-list">
        <li><span>01</span><strong>Classify</strong><small>A unified jailbreak taxonomy</small></li>
        <li><span>02</span><strong>Align</strong><small>Comparable models and settings</small></li>
        <li><span>03</span><strong>Stress-test</strong><small>Attack and defense evaluation</small></li>
      </ul>
    </div>

    <figure class="method-figure">
      <div class="method-figure-topline"><span>Study overview</span><span>Comprehensive assessment</span></div>
      <a class="method-figure-link" href="{{ '/assets/img/overview.png' | relative_url }}" aria-label="Open the full JailbreakRadar overview figure">
        <img src="{{ '/assets/img/overview.png' | relative_url }}" alt="JailbreakRadar overview showing the unified evaluation of attacks, language models, questions, and defenses">
      </a>
      <figcaption><span>From jailbreak taxonomy to real-world practicality.</span><a href="{{ '/assets/img/overview.png' | relative_url }}">View full figure <span aria-hidden="true">↗</span></a></figcaption>
    </figure>
  </div>
</section>

<section class="findings-section section-space">
  <div class="site-shell">
    <div class="section-heading section-heading-light">
      <div>
        <p class="section-kicker">What the radar reveals</p>
        <h2>High success does not always mean practical.</h2>
      </div>
      <p>Our evaluation separates headline attack success from resilience under defenses, revealing where apparent strength quickly disappears.</p>
    </div>
    <div class="finding-board">
      <div class="finding-primary">
        <span class="board-label">Core observation</span>
        <blockquote>Heuristic-based attacks can reach high success rates, yet remain especially easy to mitigate.</blockquote>
      </div>
      <div class="finding-metrics">
        <a href="{{ '/leaderboard' | relative_url }}"><span>Compare</span><strong>Attack performance</strong><small>Across six reported model families</small><b>→</b></a>
        <a href="{{ '/taxonomy' | relative_url }}"><span>Understand</span><strong>Attack taxonomy</strong><small>Seven method families, one framework</small><b>→</b></a>
        <a href="{{ '/policy' | relative_url }}"><span>Inspect</span><strong>Policy coverage</strong><small>Seventeen violation categories</small><b>→</b></a>
      </div>
    </div>
  </div>
</section>

<section class="resource-section section-space">
  <div class="site-shell resource-grid">
    <div class="resource-intro">
      <p class="section-kicker">Use JailbreakRadar</p>
      <h2>Paper, code, and evaluation data.</h2>
      <p>Everything needed to inspect the study, reuse the benchmark, or build on its taxonomy.</p>
    </div>
    <a class="resource-card" href="https://arxiv.org/abs/2402.05668">
      <span class="resource-type">Research</span><strong>Read the paper</strong><small>Methods, experiments, and findings</small><b aria-hidden="true">↗</b>
    </a>
    <a class="resource-card" href="https://github.com/TrustAIRLab/JailbreakRadar">
      <span class="resource-type">Benchmark</span><strong>Reuse the benchmark</strong><small>Code repository</small><b aria-hidden="true">↗</b>
    </a>
    <a class="resource-card" href="{{ '/dataset' | relative_url }}">
      <span class="resource-type">Resources</span><strong>Access the dataset</strong><small>160 forbidden questions and targets</small><b aria-hidden="true">→</b>
    </a>
  </div>
</section>
