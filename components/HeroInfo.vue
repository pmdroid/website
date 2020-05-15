<template>
  <section class="hero is-medium">
    <div class="hero-overlay"></div>
    <img class="hero-image" src="~/assets/overlay.png" />
    <div class="hero-body">
      <div class="container">
        <div class="hero-info is-hidden-desktop has-centered-content">
          <p class="image is-128x128" style="margin-right: 20px;">
            <img class="is-rounded" src="~/assets/me.jpg" />
          </p>
          <div>
            <h1 class="title has-text-white">
              Pascal Matthiesen
            </h1>
            <h2 class="subtitle has-text-white">
              <p>Software Engineer</p>
            </h2>
          </div>
        </div>
        <div class="buttons is-centered">
          <a
            href="mailto:hallo@pascal.sh"
            class="button is-pulled-left is-primary is-inverted is-hidden-desktop"
          >
            <span class="icon">
              <i class="far fa-envelope-open"></i>
            </span>

            <span>Contact Me</span>
          </a>

          <a
            download="Pascal Matthiesen.pdf"
            style="margin-left: 20px"
            href="/pdf"
            class="button is-pulled-left is-primary is-inverted is-hidden-desktop"
          >
            <span class="icon">
              <i class="far fa-envelope-open"></i>
            </span>

            <span>Download Resume</span>
          </a>
        </div>
        <div class="columns is-hidden-touch">
          <div class="column">
            <p class="image is-128x128 is-pulled-left">
              <img class="is-rounded" src="~/assets/me.jpg" />
            </p>
            <div class="hero-info has-text-left">
              <div>
                <h1 class="title has-text-white">
                  Pascal Matthiesen
                </h1>
                <h2 class="subtitle has-text-white">
                  <p>Software Engineer</p>
                </h2>

                <a
                  href="mailto:hallo@pascal.sh"
                  class="button is-pulled-left is-primary is-inverted"
                >
                  <span class="icon">
                    <i class="far fa-envelope-open"></i>
                  </span>

                  <span>Contact Me</span>
                </a>

                <a
                  download="Pascal Matthiesen.pdf"
                  style="margin-left: 20px"
                  href="/pdf"
                  class="button is-pulled-left is-primary is-inverted"
                >
                  <span class="icon">
                    <i class="far fa-envelope-open"></i>
                  </span>

                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;
}

.hero-info {
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-bottom: 20px;
}

.hero-body {
  z-index: 1;
}

.hero-image {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  object-fit: cover;
}

.hero-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  background-image: linear-gradient(
    360deg,
    rgba(137, 45, 51, 0.9) -28.58%,
    rgba(243, 138, 138, 0.7) 93.05%
  );
}
</style>
