<script setup lang="ts">
import { ref } from 'vue'

const data = ref('123123')

fetch('https://jsonplaceholder.typicode.com/todos/2')
  .then(response => response.json())
  .then(json => data.value = json)
</script>

<template>
  <div>
    {{ data }}
  </div>
</template>
