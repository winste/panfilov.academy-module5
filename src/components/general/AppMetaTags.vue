<template>
  <metainfo>
    <title v-text="metaInfo.title"></title>
    <meta
      v-for="tag in metaInfo.meta"
      :key="tag.name"
      :name="tag.name"
      :content="tag.content"
    />
  </metainfo>
</template>

<script>
export default {
  props: {
    metaInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>
