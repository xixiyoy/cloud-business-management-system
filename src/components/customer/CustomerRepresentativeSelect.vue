<template>
  <div class="customer-representative-select">
      {{ message }}
      <input :value="value" @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: 'CustomerRepresentativeSelect',
  props: {
    message: {
      type: String,
      default: '默认值'
    },
    value: {
      type: String
    }
  }
}
</script>
