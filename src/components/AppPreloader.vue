<template>
  <!-- General circle preloader, super useful smooth SVG animation -->
  <span :class="extra" class="tutorial-preloader-circle">
    <svg height="40" viewBox="25 25 50 50" width="40">
      <circle cx="50" cy="50" r="20"></circle>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'preloader',
  props: {
    extra: { type: String, default: '' }
  },
  data() {
    return {}
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss">
/* SVG Preloader */
.tutorial-preloader-circle {
  display: inline-block;

  &.large {
    width: 3rem;
    height: 3rem;
  }

  &.small {
    width: 1.6rem;
    height: 1.6rem;
  }

  & > svg {
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: auto;
    transform-origin: center center;
    animation: rotate 2s linear infinite;
  }

  & > svg > circle {
    animation: dash 1.5s ease-in-out infinite;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-width: 0.35rem;
    stroke-miterlimit: 10;
    fill: none;
    stroke: #34495e;
  }

  /*** White version ***/
  &.white > svg > circle {
    stroke: #fff;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
