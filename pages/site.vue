<template>
  <components></components>
</template>

<script>
import components from '@/components/components.vue';
import { mapState } from 'vuex'
export default {
  components: {
    components,
  },
  computed: {
    ...mapState({
      websocketE: 'websocketE',
      piesocket: 'piesocket'
    })
  },
}
</script>
