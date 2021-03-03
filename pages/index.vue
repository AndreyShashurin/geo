<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-text> 
          {{piesocket}}
        </v-card-text>
        <v-card-text> 
          {{websocketE}}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      websocketE: 'websocketE',
      piesocket: 'piesocket'
    })
  }
}
</script>
