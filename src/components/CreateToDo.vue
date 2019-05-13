<template>
    <div>
        <h3> Create ToDo Item </h3>
        <div class="container-fluid">
                    <div align="left" class="padding-bottom-medium">
                        <span>Item Name</span>
                        <input class="input-width-xlarge"
                            type="text">
                    </div>
                                <p>&nbsp;</p>
                    <div align="left" class="padding-bottom-medium">
                        <span>Start Date</span>
                        <datepicker></datepicker>
                    </div>
                                <p>&nbsp;</p>
                    <div align="left" class="padding-bottom-medium">
                        <span>Expiration Date</span>
                        <datepicker></datepicker>
                    </div>
                                <p>&nbsp;</p>
                    <div align="left">
                        <span>Details</span>
                        <input class="input-width-xlarge"
                            type="text">
                    </div>
            <div>
                <span>
                    <span class="btn success">Save</span>
                </span>
                <router-link to="/main">
                    <span class="btn default">Cancel</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'CreateToDo',
  components: {
    Datepicker
  }
}
</script>

<style scoped>
.container-fluid {
    border-style: groove;
    background-color: whitesmoke
}

.btn {
    border: yes;
    background-color: lightgrey;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
}

.default {color: gray;}

.success {color: green;}
</style>
