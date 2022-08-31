<template>
  <h2>我是vue渲染出来的</h2>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello Vue3',
    };
  },
};
</script>

<style scoped>
h2 {
  color: pink;
}
</style>
