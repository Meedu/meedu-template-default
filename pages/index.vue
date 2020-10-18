<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["user"],
  layout: "app",
};
</script>

<style>
</style>
