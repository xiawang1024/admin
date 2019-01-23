<template>
  <div class="docs-wrap">
    <DocHead />
    <doc-list />
  </div>
</template>
<script>
import DocHead from './docHead'
import DocList from './docList'
export default {
  name: 'DocsWrap',
  components: {
    DocHead,
    DocList
  }
}
</script>
<style lang="scss" scoped>
</style>

