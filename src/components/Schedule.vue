<template>
    <div>
        <h3> Weekly Schedule </h3>
        <img src="./schedule.png" alt="Schedule Template" width="800" height="700">
        <form action="/action_page.php">
            <input type="file" name="pic" accept="image/*">
            <input type="submit">
        </form>
    </div>
</template>

<script src='moment.js'></script>
<script src='jquery.js'></script>
<script src='fullcalendar.js'></script>
<script src='scheduler.js'></script>
<script>
export default {
  name: 'Schedule'
}
</script>
