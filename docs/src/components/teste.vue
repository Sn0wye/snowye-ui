
<template>
  <div id="app">
      <my-dashboard/>
  </div>
</template>

<script lang="ts">
import { Button } from "@snowye-ui/react";
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
        'my-button': Button
    }
})
export default class App extends Vue {}
</script>

<style>
</style>