<template>
  <div>
    <c-flex justify="flex-end">
      <c-button
        right-icon="add"
        variant-color="blue"
        variant="outline"
        ml="auto"
        to="/todo/add"
        as="nuxt-link"
      >
        Add
      </c-button>
    </c-flex>
    <c-list spacing="3">
      <c-list-item v-for="(item, index) in todoList" :key="index">
        <c-checkbox
          :value="item.completed"
          mt="1"
          @change="handleComplete(item)"
        ></c-checkbox>
        {{ item.title + ': ' + item.description }}
        <c-icon-button
          aria-label="Edit Todo"
          icon="close"
          size="sm"
          is-round
          ml="4"
          @click="handleDelete(item)"
        />
      </c-list-item>
    </c-list>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TodoIndex',
  computed: {
    ...mapGetters({
      todoList: 'todos/list',
    }),
  },
  methods: {
    ...mapMutations({
      completeTodo: 'todos/completeTodo',
      deleteTodo: 'todos/deleteTodo',
    }),
    handleComplete(item) {
      this.completeTodo(item)
    },
    handleDelete(item) {
      this.deleteTodo(item)
    },
  },
}
</script>
