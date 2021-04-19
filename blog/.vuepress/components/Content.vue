<template>
  <div v-html="$page.frontmatter.description"></div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$page);
  },
};
</script>