<script setup lang="ts">
</script>

<template> <!-- SVG滤镜定义 -->
  <svg style="position: absolute; width: 0; height: 0; pointer-events: none;" data-astro-cid-46beyuii="">
    <defs data-astro-cid-46beyuii="">
      <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox"
        data-astro-cid-46beyuii="">
        <feTurbulence type="fractalNoise" baseFrequency="0.001 0.004" numOctaves="1" seed="17" result="turbulence"
          data-astro-cid-46beyuii=""></feTurbulence> <!-- Liked Seeds: 5, 14, 17 -->
        <feComponentTransfer in="turbulence" result="mapped" data-astro-cid-46beyuii="">
          <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" data-astro-cid-46beyuii=""></feFuncR>
          <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" data-astro-cid-46beyuii=""></feFuncG>
          <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" data-astro-cid-46beyuii=""></feFuncB>
        </feComponentTransfer>
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" data-astro-cid-46beyuii=""></feGaussianBlur>
        <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100"
          lighting-color="white" result="specLight" data-astro-cid-46beyuii="">
          <fePointLight x="-200" y="-200" z="300" data-astro-cid-46beyuii=""></fePointLight>
        </feSpecularLighting>
        <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage"
          data-astro-cid-46beyuii=""></feComposite>
        <feDisplacementMap in="SourceGraphic" in2="softMap" scale="100" xChannelSelector="R" yChannelSelector="G"
          data-astro-cid-46beyuii=""></feDisplacementMap>
      </filter>
    </defs>
  </svg>
  <div class="layout-wrapper">
    <div class="wrapper">
      <Header />
      <div class="content">
        <router-view></router-view>
      </div>

      <!-- <Footer /> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-wrapper {
  width: 100%;
  height: 100vh;
  overflow-y: visible;

  .wrapper {
    padding: 0 12%;
    width: calc(100% - 24%);
    max-width: 1240px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0 5%;
      width: calc(100% - 10%);
    }

    // 更小屏幕调整
    @media (max-width: 480px) {
      padding: 0 3%;
      width: calc(100% - 6%);
    }
  }

}

.content {
  margin-top: 30px;
  width: 100%;
}
</style>
