<template>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
            <v-col
                cols="12"
                sm="6"
            >
                <v-card>
                    <v-card-title>
                        https://www.piesocket.com/websocket-tester
                    </v-card-title>
                    <v-card-text>
                        {{piesocketMessage}}
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
                <v-card>
                    <v-card-title>
                        https://www.piesocket.com/websocket-tester
                    </v-card-title>
                    <v-card-text>
                        {{wsMessage}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      wsMessage: 'wsMessage',
      piesocketMessage: 'piesocketMessage'
    })
  },
  mounted() {
    this.$store.dispatch('getSocketMessage');
  }
}
</script>
