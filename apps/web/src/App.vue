
 <template>
  <v-app>
    <v-main class="bg-light">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import {RouterView} from 'vue-router';
import{defineComponent} from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    RouterView
  }
});
</script>

<style>
* {
  font-family: 'Poppins', sans-serif !important;
}


.v-application {
  font-family: 'Poppins', sans-serif !important;
}

.v-btn, .v-field, .v-label, .v-card-title, .text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
