import Vue from 'vue'

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

Vue.component('AppValidationProvider', ValidationProvider)
Vue.component('AppValidationObserver', ValidationObserver)

extend('required', {
  ...required,
  message: 'This field is required',
})
extend('email', email)
