<template>
  <div class="Department">
    <div class="Department_name">{{ departmentName }}</div>
    <div
      v-for="(employee, employeeId) in employees"
      :key="employeeId"
      @click="navigateToEmployee(employeeId)"
      class="Card"
    >
      <EmployeeCard :employee="employee" />
    </div>
    <div v-if="showNoEmployeesBox">No employees in this department</div>
    <div
      style="
        position: absolute;
        left: 32px;
        bottom: 32px;
        display: flex;
        align-items: center;
        background-color: #42b883;
        padding: 5px;
        z-index: 5;
        border-radius: 60px;
      "
    >
      <picture
        style="
          margin-right: 10px;
          background-color: #fff;
          border-radius: 50%;
          height: 40px;
          width: 40px;
        "
      >
        <img
          src="../assets/logo-vue-icon.png"
          style="height: 30px; width: 30px; margin-top: 8px; margin-left: 5px"
        />
      </picture>
      <div style="color: #000; font-size: 18px; padding-right: 10px">
        Built with Vue JS
      </div>
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
      showNoEmployeesBox: false,
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
          this.showNoEmployeesBox =
            Object.keys(data).length === 0 ? true : false;
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
.Department {
  padding: 32px 64px;
}
.Department_name {
  font-size: 24px;
  margin-bottom: 16px;
}
.Card {
  border: 1px solid #000;
  padding: 32px;
  margin: 16px;
  color: #000;
  transition: 0.5s;
  cursor: pointer;
}
.Card:hover {
  background-color: #000;
  color: #fff;
}
.techDetail {
  position: absolute;
  left: 32px;
  bottom: 32px;
  z-index: 5;
  background-color: "#61dafb";
  border-radius: "60px";
  display: "flex";
  align-items: "center";
  padding: "5px";
}
.techLogo {
  height: 40px;
  margin-right: 10px;
}
.techText {
  color: "#000";
  font-size: "18px";
  padding-right: "10px";
}
</style>
