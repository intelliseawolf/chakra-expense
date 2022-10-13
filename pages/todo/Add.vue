<template>
  <app-validation-observer v-slot="{ handleSubmit }">
    <form class="form" @submit.prevent="handleSubmit(onSubmit)">
      <app-validation-provider v-slot="{ errors }" rules="required">
        <c-input
          v-model="formData.title"
          type="text"
          name="title"
          :is-invalid="isInValid(errors)"
          error-border-color="crimson"
          placeholder="Title"
        />
        <c-text color="red" font-size="xs">
          {{ errors[0] }}
        </c-text>
      </app-validation-provider>
      <app-validation-provider v-slot="{ errors }" rules="required">
        <c-input
          v-model="formData.description"
          name="descriptioin"
          :is-invalid="isInValid(errors)"
          error-border-color="crimson"
          placeholder="Description"
          mt="4"
        />
        <c-text color="red" font-size="xs">
          {{ errors[0] }}
        </c-text>
      </app-validation-provider>
      <c-flex justify="flex-end" mt="4">
        <c-button variant-color="green" type="submit">Add</c-button>
      </c-flex>
    </form>
  </app-validation-observer>
</template>

<script>
import { mapMutations } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'TodoAdd',
  data() {
    return {
      formData: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    ...mapMutations({
      addTodo: 'todos/addTodo',
    }),
    onSubmit() {
      this.addTodo({ ...this.formData, id: uuidv4() })
      this.$router.push('/todo')
    },
    isInValid(errors) {
      return errors && errors[0] && errors[0].length !== 0
    },
  },
}
</script>
