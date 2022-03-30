<template>
  <div>
    <div>{{ employee.fullName }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    employee: Object,
  },
  mounted() {
    console.log(this.employee);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
