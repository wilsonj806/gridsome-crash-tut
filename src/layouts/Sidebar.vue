<template>
  <div>
  <div class="sidebar">
    <slot/>
  </div>
  <div class="sidebar2">
    <div style="border: 2px solid black">
      waaaa
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sidebar {
  float: left;
  width: 70%;
}
.sidebar2 {
  float: right;
  width: 30%;
}
</style>