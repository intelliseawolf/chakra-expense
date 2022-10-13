<template>
  <div class="container">
    <c-theme-provider>
      <c-color-mode-provider v-slot="{ colorMode }">
        <c-box v-bind="mainStyles[colorMode]" w="100vw" h="100vh" as="section">
          <c-reset />
          <nav-bar />

          <c-box max-w="5xl" mx="auto" mt="3">
            <nuxt />
          </c-box>
        </c-box>
      </c-color-mode-provider>
    </c-theme-provider>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
  },
  data() {
    return {
      mainStyles: {
        dark: {
          bg: 'gray.900',
          color: 'whiteAlpha.900',
        },
        light: {
          bg: 'whiteAlpha.900',
          color: 'gray.900',
        },
      },
    }
  },
}
</script>
