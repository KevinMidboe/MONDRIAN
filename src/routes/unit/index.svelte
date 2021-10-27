<script context="module" lang="ts">
  import Rack from '../../components/Rack.svelte'

  // export const router = browser;
  export const prerender = true;
</script>

<svelte:head>
  <title>kasperrt</title>
</svelte:head>

<section>
  <h1>👋 hi</h1>

  <p>
    my name is kasper, and i am a lead developer at aller media norway. i have worked with a range
    of technologies, all from episerver, c# and .net, to golang, svelte, react, vue.js, and mongodb,
    and a bunch more.
  </p>

  <p>programming is one of my hobbies, so i made this to showcase some of my stuff.</p>
  <p>
    want to get to know me?
    <br />
    <a href="mailto:kasper@rynning-toennesen.no"> kasper@rynning-toennesen.no </a>
  </p>
</section>

<style lang="scss">
  @import '../../sass/breakpoints.scss';

  @function randomBgr(){
    @return rgb(random(255), random(255), random(255));
  }

  section {
    margin: 0 auto;
    width: 60vw;
    max-width: 700px;
    // width: 40vw;

    @include small {
      width: 95vw;
      height: auto;
      margin-top: 0px;
      max-width: 90vw;
    }
  }
</style>
