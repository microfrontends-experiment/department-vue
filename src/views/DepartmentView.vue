<template>
  <div>
    <h4>{{ departmentName }}</h4>
    <div
      v-for="(employee, employeeId) in employees"
      :key="employeeId"
      @click="navigateToEmployee(employeeId)"
      class="Card"
    >
      <EmployeeCard :employee="employee" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeCard from "@/components/EmployeeCard.vue";
import router from "@/router";
const baseUrl =
  "https://employee-dir1-default-rtdb.asia-southeast1.firebasedatabase.app/";

export default {
  name: "DepartmentView",
  data() {
    return {
      employees: {},
      departmentIdentifier: this.$route.params.name,
      departmentName: "",
    };
  },
  components: {
    EmployeeCard,
  },
  methods: {
    fetchEmployees() {
      fetch(
        `${baseUrl}employees.json?orderBy="department"&equalTo="${this.departmentName}"`
      )
        .then((resp) => resp.json())
        .then((data) => {
          this.employees = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    fetchData() {
      fetch(baseUrl + "departments/" + this.departmentIdentifier + ".json")
        .then((resp) => resp.json())
        .then((data) => {
          this.departmentName = data;
          this.fetchEmployees();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    navigateToEmployee(emp_id) {
      router.push("/employee/" + emp_id);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.Card {
  border: 1px solid;
  padding: 10px;
  margin: 8px;
}
</style>
