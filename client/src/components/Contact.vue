<template>
  <form class="contact-component" v-on:submit.prevent="submit">
    <h2 class="title"> Contact Us Form </h2>

    <div class="input">
      <input type="email" placeholder="Email" v-model="form.email" :class="{ 'error': formErrors.email }" required>
      <p class="error-message"> {{ formErrors.email }} </p>
    </div>

    <div class="input">
      <input type="text" placeholder="Name" v-model="form.name" :class="{ 'error': formErrors.name }" required>
      <p class="error-message"> {{ formErrors.name }} </p>
    </div>

    <div class="input--message">
      <input type="text" placeholder="Message" v-model="form.message" :class="{ 'error': formErrors.message }" required>
      <p class="error-message"> {{ formErrors.message }} </p>
    </div>
    <button type="submit" class="submit" v-if="!submitted"> Submit </button>
    <p class="success" v-else> Submitted </p>
  </form>
</template>

<script>
import server from '../axios';

export default {
  data() {
    return {
      form: {
        email: 'mujyo@hotmail.com',
        name: 'mujyo',
        message: 'message'
      },
      formErrors: {
        email: '',
        name: '',
        message: ''
      },
      submitted: false
    };
  },
  methods: {
    async submit() {
      this.formErrors = { email: '', name: '', message: '' };

      const response = await server.post('/contact', this.form).catch(error => error.response);
      const { errors } = response.data;

      if (errors.length > 1) {
        this.handleErrors(errors);
        return;
      }

      this.submitted = true;
    },

    handleErrors(errors) {
      errors.reverse().forEach(error => {
        const property = error.path[0];
        this.formErrors[property] = error.message;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) '../styles/index.less';

.contact-component {
  padding: @size-3;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: @size-1;
}

.title {
  margin-bottom: @size-2;
  grid-column: 1 / span 2;
}

.input--message {
  grid-column: 1 / span 2;
  margin-bottom: @size-2;
}

.error {
  .input--error;
}

.error-message {
  color: @red-color;
}

.submit {
  .btn--primary;
  width: max-content;
  justify-self: center;
  grid-column: 1 / span 2;
}

.success {
  color: @green-color;
  font-weight: bold;
  grid-column: 1 / span 2;
  text-align: center;
}
</style>
