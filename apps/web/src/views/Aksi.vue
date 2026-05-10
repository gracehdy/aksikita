<template>
  <v-app style="background-color:white;" theme="light">
    <!-- Navbar -->
    <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
        <div class="d-flex align-center">
        <v-sheet
            color="#11698E"
            rounded="lg"
            width="36"
            height="36"
            class="d-flex align-center justify-center mr-3"
        >
            <v-icon color="white" size="30">mdi-account-group</v-icon>
        </v-sheet>
        <span class="text-h4 font-weight-bold logo-text">AksiKita</span>
        </div>

        <v-spacer></v-spacer>
        <div class="d-flex align-center gap-4">
        <v-btn 
            variant="flat"
            class="nav-btn active-nav mr-2"
            to ="/Home"
            rounded="xl"
            
        >
            <v-icon start >mdi-home-variant-outline</v-icon>
            Beranda
        </v-btn>

        <v-btn
            variant="text" 
            class="nav-btn mr-2"
            to="/Komunitas">
            <v-icon start>mdi-account-group-outline</v-icon>
            Aksi Komunitas
        </v-btn>

        <v-btn variant="text" class="nav-btn" to="/Profile">
            <v-icon start>mdi-account-outline</v-icon>
            Akun
        </v-btn>
        </div>
    </v-app-bar>
    <!-- Navbar Kembali -->
    <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
      <v-btn variant="text" @click="$router.back()" class="text-none">
        <v-icon start>mdi-arrow-left</v-icon> Kembali
      </v-btn>
    </v-app-bar>

    <!-- Card Laporan -->

   <v-main style="background-color:white;" theme="light">
      <v-container class="px-15 py-10" v-if="reportData">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <v-card class="pa-6 mb-6 rounded-xl" elevation="0" border>
              <div class="d-flex align-center mb-4">
                <v-avatar color="#11698E" size="48" class="mr-3">
                  <span class="text-white text-h6">{{ reportData.author.name.charAt(0) }}</span>
                </v-avatar>
                <div>
                  <div class="font-weight-bold">{{ reportData.author.name }}</div>
                  <div class="text-caption text-grey">{{ formatDate(reportData.createdAt) }}</div>
                </div>
              </div>

              <div class="d-flex gap-2 mb-4">
                <v-chip size="small" background-color="#F8F1F1" class="text-[#11698E]">{{ reportData.category }}</v-chip>
                <v-chip v-if="reportData.status === 'action'" size="small" color="#16C79A" theme="dark">Aksi Dibuka</v-chip>
              </div>

              <h1 class="text-h4 font-weight-bold mb-4" style="color: #19456B;">{{ reportData.title }}</h1>
              
              <div class="d-flex flex-wrap ga-4 mb-6 text-grey-darken-1">
                <div class="d-flex align-center">
                  <v-icon start size="18">mdi-map-marker-outline</v-icon>
                  {{ reportData.location }}
                </div>
                <div class="d-flex align-center">
                  <v-icon start size="18">mdi-calendar-outline</v-icon>
                  {{ formatDate(reportData.createdAt) }}
                </div>
              </div>

              <p class="text-body-1 text-grey-darken-2" style="line-height: 1.6;">
                {{ reportData.description }}
              </p>
            </v-card>

            <!-- Card Informasi Aksi Relawan -->
            <v-card v-if="reportData.status === 'action' && reportData.volunteerAction" class="pa-6 mb-6 rounded-xl" elevation="0" border>
              <h3 class="text-h6 font-weight-bold mb-4" style="color: #11698E;">Informasi Aksi Relawan</h3>
              
              <div class="mb-6">
                <div class="d-flex align-center mb-3 text-grey-darken-2">
                  <v-icon start color="#11698E">mdi-account-group-outline</v-icon>
                  {{ reportData.volunteerAction.registeredPeople }}/{{ reportData.volunteerAction.requiredPeople }} relawan terdaftar
                </div>
                <div class="d-flex align-center mb-3 text-grey-darken-2">
                  <v-icon start color="#11698E">mdi-map-marker-outline</v-icon>
                  {{ reportData.location }}
                </div>
                <div class="d-flex align-center text-grey-darken-2">
                  <v-icon start color="#11698E">mdi-calendar-clock-outline</v-icon>
                  {{ formatDate(reportData.volunteerAction.scheduledDate) }}
                </div>
              </div>

              <v-btn block color="#16C79A" size="large" class="text-white font-weight-bold rounded-lg text-none" elevation="0">
                Daftar Relawan
              </v-btn>
            </v-card>

            <!-- Card Komentar -->
            <v-card class="pa-6 rounded-xl" elevation="0" border>
              <div class="d-flex align-center mb-6">
                <v-icon class="mr-2" color="#11698E">mdi-comment-outline</v-icon>
                <span class="text-h6 font-weight-bold">Komentar ({{ reportData.comments?.length || 0 }})</span>
              </div>

              <!-- Card List Komentar -->
              <div v-for="comment in reportData.comments" :key="comment.id" class="bg-grey-lighten-4 pa-4 rounded-lg mb-4">
                <div class="d-flex justify-space-between align-center mb-2">
                  <div class="d-flex align-center">
                    <v-avatar size="32" color="#11698E" class="mr-2">
                      <span class="text-white text-caption">{{ comment.author.charAt(0) }}</span>
                    </v-avatar>
                    <span class="font-weight-bold">{{ comment.author }}</span>
                  </div>
                  <span class="text-caption text-grey">{{ comment.time }}</span>
                </div>
                <p class="text-body-2 ml-10">{{ comment.text }}</p>
              </div>

              <!-- Input Komentar -->
              <v-row dense class="mt-4">
                <v-col>
                  <v-text-field
                    placeholder="Tulis komentar..."
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    rounded="lg"
                  ></v-text-field>
                </v-col>
                <v-col cols="auto">
                  <v-btn color="#11698E" height="48" class="px-6 text-none rounded-lg" theme="dark">
                    <v-icon start>mdi-send</v-icon> Kirim
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { mockReports } from '../data/mockReports'

const route = useRoute();
const reportId = route.params.id;

const reportData = computed(() => {
  return mockReports.find(r => r.id === parseInt(reportId));
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
};
</script>

<style scoped>
.logo-text {
  font-family: 'Poppins', sans-serif !important;
  color: #000000;
  letter-spacing: -0.5px;
  font-size: 25px !important;
}

.nav-btn {
  font-family: 'Poppins', sans-serif !important;
  text-transform: none !important;
  font-weight: 600 !important;
  font-size: 18px !important;
  color: #555555;
}


.active-nav {
  color: #11698E !important;
  background-color: #F8F1F1 !important;
  --v-activated-opacity: 0 !important;
  opacity: 1 !important;
}

.active-nav :deep(.v-icon) {
  color: #11698E !important;
}


.v-btn--variant-text:hover {
  color: #11698E !important;
}

.gap-2 {
  display: flex;
  gap: 8px;
}

.border-b {
  border-bottom: 1px solid #eeeeee !important;
}
.v-card {
  border-color: #EEEEEE !important;
}
.logo-text {
  font-family: 'Poppins', sans-serif !important;
}
</style>