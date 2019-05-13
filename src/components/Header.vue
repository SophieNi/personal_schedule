<template>
  <div class="hello">
    <div class="crumbs">
            <div class="container-fluid">
                <ul class="breadcrumb">
                    <li><router-link v-bind:to="'/main'">Home</router-link></li>
                    <li><router-link v-bind:to="'/CreateToDo'">CreateToDo</router-link></li>
                    <li><router-link v-bind:to="'/Schedule'">Schedule</router-link></li>
                </ul>
            </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
</style>
