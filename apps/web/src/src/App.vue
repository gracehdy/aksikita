
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
