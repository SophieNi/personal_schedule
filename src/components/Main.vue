<template>
  <div>
    <h1 align="left"> Hello, this is your Personal Schedule Maker!</h1>
    <h2 align="left"> Today is {{ date }}, it is {{ estTime }} now </h2>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <div class="container-fluid">
        <h3 align="centre"> Progress Bar</h3>
    <div class="progress">
            <div v-if=true>
                <div class="circle active">
                    <span class="label"> Start </span>
                    <span class="title">  First_Week </span>
                </div>
                <span class="bar"></span>
                <div class="circle">
                    <span class="label"> Mid </span>
                    <span class="title"> Second_Week </span>
                </div>
                <span class="bar"></span>
                <div class="circle">
                    <span class="label"> End </span>
                    <span class="title"> End_Of_Cycle </span>
                </div>
            </div>
            <div v-else-if="true">
                <div class="circle done">
                    <span class="label">1</span>
                    <span class="title"> d </span>
                </div>
                <span class="bar"></span>
                <div class="circle active">
                    <span class="label">2</span>
                    <span class="title"> e </span>
                </div>
                <span class="bar"></span>
                <div class="circle">
                    <span class="label">3</span>
                    <span class="title"> f </span>
                </div>
            </div>
            <div v-else-if=true>
                <div class="circle done">
                    <span class="label">1</span>
                    <span class="title"> g </span>
                </div>
                <span class="bar done"></span>
                <div class="circle done">
                    <span class="label">2</span>
                    <span class="title"> h </span>
                </div>
                <span class="bar"></span>
                <div class="circle active">
                    <span class="label">3</span>
                    <span class="title"> i </span>
                </div>
            </div>
            <div v-else>
                <div class="circle done">
                    <span class="label">1</span>
                    <span class="title"> j </span>
                </div>
                <span class="bar done"></span>
                <div class="circle done">
                    <span class="label">2</span>
                    <span class="title"> k </span>
                </div>
                <span class="bar done"></span>
                <div class="circle done">
                    <span class="label">3</span>
                    <span class="title"> l </span>
                </div>
            </div>
        </div>
    </div>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <h3>ToDo List</h3>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th width="240px">
                        Item Name
                    </th>
                    <th width="240px">
                        Period
                    </th>
                    <th class="lightgray-border-left lightgray-border-right"
                        width="240px">
                        Details
                    </th>
                    <th class="align-center">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(rowData, index) in undoList"
                    :key="`undoList-${index}`">
                        <td class="align-center">
                            {{ rowData[0] }}
                        </td>
                        <td class="align-center">
                            {{ rowData[1] }}
                        </td>
                        <td class="align-center">
                            {{ rowData[2] }}
                        </td>
                        <td class="align-center">
                            <div v-if="rowData[3]" type="button"
                            class="btn danger">
                                Finish
                            </div>
                            <div v-else type="button"
                            class="btn info">
                                In Progress
                            </div>
                        </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      date: new Date().toDateString(),
      estTime: new Date().toLocaleTimeString().slice(0, 25),
      undoList: [
        ['cs341 a1', '2018/09/03-2018/09/08', 'finish assignment', true],
        ['stat330 a1', '2018/09/05-2018/09/10', 'finish assignment', false],
        ['do laundry', '2018/09/10', '', false],
        ['go to watch Crazy Rich Asian', '2018/09/13', 'with Lucy', false],
        ['my birthday', '2018/09/17', 'go to karaoke', false]
      ]
    }
  }
}
// import { Component, Vue } from 'vue-property-decorator';
// import { mapGetters } from 'vuex';

// @Component({
//     data() {
//         return {
//             timesheetSubmitted: 'Timesheet_Submitted',
//             payrollApproved: 'Payroll_Approved',
//             payrollReleased: 'Payroll_Released',
//             pending: true,
//             approved: false,
//             realeased: false,
//         };
//     },
//     computed: {
//         ...mapGetters('PayDashboard/PayDashboardPayPeriodDetail', [
//             'payPeriodStatus',
//             'timesheetTotal',
//             'timesheetSignedOff',
//         ]),
//     },
// })
// export default class Main extends Vue {}
</script>

<style scoped>
*, *:after, *:before {
    margin: 10px;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
}

/* Form Progress */
.progress {
    width: 1000px;
    height: 100px;
    margin: 10px auto;
    text-align: center;
}
.progress .circle,
.progress .bar {
    display: inline-block;
    background: #fff;
    width: 40px; height: 40px;
    border-radius: 40px;
    border: 1px solid #d5d5da;
}
.progress .bar {
    position: relative;
    width: 300px;
    height: 6px;
    margin: 0 -5px 17px -5px;
    border-left: none;
    border-right: none;
    border-radius: 0;
}
.progress .circle .label {
    display: inline-block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 32px;
    margin-top: 3px;
    color: #b5b5ba;
    font-size: 17px;
    margin: 2.4px;
}
.progress .circle .title {
    color: #b5b5ba;
    font-size: 13px;
    line-height: 30px;
    margin-left: -5px;
}

/* Done / Active */
.progress .bar.done,
.progress .circle.done {
    background: #eee;
}
.progress .bar.active {

    background: linear-gradient(to right, #EEE 40%, #FFF 60%);
}
.progress .circle.done .label {
    color: #FFF;
    background: #8bc435;
    margin: 2.4px;
    box-shadow: inset 0 0 2px rgba(0,0,0,.2);
}
.progress .circle.done .title {
    color: #444;
}
.progress .circle.active .label {
    color: #FFF;
    background: #0c95be;
    margin: 2.4px;
    box-shadow: inset 0 0 2px rgba(0,0,0,.2);
}
.progress .circle.active .title {
    color: #0c95be;
}

.container-fluid {
    border-style: groove;
    background-color: lightgoldenrodyellow
}

table {
    border-collapse: collapse;
    width: 100%
}

th, td {
    padding: 15px;
    text-align: left;
}

table, th, td {
   border: 1px solid black;
}

.btn {
    border: yes;
    background-color: lightgrey;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
}

.info {color: dodgerblue;}

.danger {color: red;}
</style>
