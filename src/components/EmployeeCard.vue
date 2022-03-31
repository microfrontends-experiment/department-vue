<template>
  <div class="Employee">
    <div>Employee Name : {{ employee.fullName }}</div>
    <div>Email Id : {{ employee.email }}</div>
    <div>Contact No : {{ employee.phone }}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    employee: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Employee {
  display: grid;
  grid-template-columns: 1fr;
}
@media screen and (min-width: 768px) {
  .Employee {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
