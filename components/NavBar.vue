<template>
  <c-box bg="gray.700" as="nav" h="60px" px="4" d="flex" align-items="center">
    <c-link
      as="nuxt-link"
      to="/"
      color="brand.700"
      font-weight="bold"
      :_hover="{ color: 'brand.900' }"
    >
      Expense Management
    </c-link>

    <c-box
      as="ul"
      d="flex"
      align-items="center"
      list-style-type="none"
      ml="auto"
    >
      <c-box as="li" mr="8">
        <c-link :_hover="{ color: 'brand.400' }" to="/todo" as="nuxt-link">
          Todo
        </c-link>
      </c-box>
      <c-box as="li">
        <c-icon-button
          variant="ghost"
          :variant-color="colorMode == 'light' ? 'whiteAlpha.900' : 'gray.900'"
          :aria-label="`Switch to ${
            colorMode == 'light' ? 'dark' : 'light'
          } mode`"
          :icon="colorMode == 'light' ? 'moon' : 'sun'"
          @click="$toggleColorMode"
        />
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CLink, CIconButton } from '@chakra-ui/vue'
export default {
  name: 'NavBar',
  components: {
    CBox,
    CLink,
    CIconButton,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  computed: {
    colorMode() {
      return this.$chakraColorMode()
    },
  },
}
</script>
