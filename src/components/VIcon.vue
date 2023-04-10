<template lang="">
    <svg :width="20" :height="20">
      <use
        :xlink:href="`#${nameIcon}`"
      />
    </svg>
</template>

<script>
export default {
  props: {
    nameIcon: String,
  }  
}
</script >
<style lang="scss">
    
</style>