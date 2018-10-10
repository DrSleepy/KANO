<template>
  <div class="root">
    <header class="title">
      <h1> Your Awesome Page </h1>
    </header>

    <nav class="navigation">
      <h2 class="navigation__title"> Heading Level 2 </h2>
      <i class="navigation__menu" />
    </nav>

    <main class="main">
      <p> HTML Texts </p>
    </main>

    <Contact />

    <footer class="footer"> Footer Area </footer>
  </div>
</template>

<script>
import Contact from './components/Contact.vue';

export default {
  components: { Contact }
};
</script>

<style lang="less">
// global styles
@import './styles/reset.less';
@import './styles/base.less';
</style>

<style lang="less" scoped>
// scoped styles
@import './styles/index.less';

.root {
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  height: 100%;
}

.title {
  .pad-tb-3;
  background-color: @blue-color;
  color: white;
  text-align: center;
}

.navigation {
  background-color: @off-white-color;
  border-bottom: solid 1px rgb(238, 238, 238);
  display: grid;
  grid-template-columns: 1fr max-content;

  &__title {
    padding: @size-3;
    font-weight: bold;
    align-self: center;
  }

  &__menu {
    .giga;
    padding: @size-3;

    &:before {
      content: '\f0c9';
      font-family: FontAwesome;
    }
  }
}

.main {
  text-align: center;
  margin: auto 0;
}

.footer {
  text-align: center;
  padding: @size-3;
}

@media @laptop {
  .root {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-column-gap: @size-10;
    grid-template-areas:
      'navigation  navigation'
      'main        main'
      'footer      contact';
  }

  .title {
    display: none;
  }

  .navigation {
    grid-area: navigation;
  }

  .main {
    grid-area: main;
  }

  .footer {
    grid-area: footer;
  }

  .contact {
    grid-area: contact;
  }
}
</style>
