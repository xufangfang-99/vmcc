<template>
  <SvgIcon
    name="menu"
    size="24"
    color="var(--tm-pri-0)"
    clickable
    @click="emit('click')"
  />
</template>

<script setup lang="ts">
  const emit = defineEmits<{
    (e: 'click'): void
  }>()
</script>
