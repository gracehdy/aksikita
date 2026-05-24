<template>
  <v-app style="background-color:white;" theme="light">
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
    <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
      <v-btn variant="text" @click="$router.back()" class="text-none font-weight-medium text-grey-darken-3" style="font-family: 'Poppins', sans-serif;">
        <v-icon start>mdi-arrow-left</v-icon> Kembali
      </v-btn>
    </v-app-bar>

    <v-main style="background-color:white;" theme="light">
      <v-container class="px-15 py-10" v-if="reportData">
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
            <v-card class="pa-6 mb-6 rounded-xl border-card" elevation="0">
              <div class="d-flex align-center mb-4">
                <v-avatar color="#11698E" size="48" class="mr-3">
                  <span class="text-white text-h6 font-weight-bold">{{ reportData.author.name.charAt(0).toUpperCase() }}</span>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-body-1" style="color: #1a202c;">{{ reportData.author.name }}</div>
                  <div class="text-caption text-grey">{{ formatDate(reportData.createdAt) }}</div>
                </div>
              </div>

              <div class="d-flex gap-3 mb-6">
                <v-chip class="category-chip px-4" size="large">{{ reportData.category }}</v-chip>
                
                <v-chip v-if="reportData.status === 'action'" class="text-white font-weight-medium px-4" size="large" color="#16C79A">
                   Aksi Dibuka
                </v-chip>
              </div>

              <h1 class="font-weight-bold text-h4 mb-6" style="color: #19456B; font-family: 'Poppins', sans-serif !important;">{{ reportData.title }}</h1>
              
              <div class="d-flex flex-wrap ga-4 mb-6 text-grey-darken-3">
                <div class="d-flex align-center text-body-1">
                  <v-icon start size="small" color="grey-darken-1" class="mr-2">mdi-map-marker-outline</v-icon>
                  {{ reportData.location }}
                </div>
                <div class="d-flex align-center text-body-1">
                  <v-icon start size="small" color="grey-darken-1" class="mr-2">mdi-calendar-blank-outline</v-icon>
                  {{ formatDate(reportData.createdAt) }}
                </div>
              </div>

              <p class="text-body-1 text-black" style="line-height: 1.6;">
                {{ reportData.description }}
              </p>
            </v-card>

            <v-card v-if="reportData.status === 'action' && reportData.volunteerAction" class="pa-6 mb-6 rounded-xl border-card" elevation="0">
              <h3 class="text-h5 font-weight-bold mb-6" style="color: #19456B;">Informasi Aksi Relawan</h3>
              
              <div class="mb-6">
                <div class="d-flex align-center mb-4 text-black text-body-1">
                  <v-icon start color="#11698E" size="28" class="mr-4">mdi-account-group-outline</v-icon>
                  <div>
                      <div class="font-weight-bold" style="color: #19456B;">Relawan Terdaftar</div>
                      {{ reportData.volunteerAction.registeredPeople }}/{{ reportData.volunteerAction.requiredPeople }} relawan terdaftar
                  </div>
                </div>
                <div class="d-flex align-center mb-4 text-black text-body-1">
                  <v-icon start color="#11698E" size="28" class="mr-4">mdi-map-marker-outline</v-icon>
                  <div>
                      <div class="font-weight-bold" style="color: #19456B;">Lokasi Pelaksanaan</div>
                      {{ reportData.location }}
                  </div>
                </div>
                <div class="d-flex align-center text-black text-body-1">
                  <v-icon start color="#11698E" size="28" class="mr-4">mdi-calendar-check-outline</v-icon>
                  <div>
                      <div class="font-weight-bold" style="color: #19456B;">Tanggal Pelaksanaan</div>
                      {{ formatDate(reportData.volunteerAction.scheduledDate) }}
                  </div>
                </div>
              </div>

              <v-btn block color="#16C79A" size="large" class="text-white font-weight-bold rounded-lg text-none" elevation="0">
                Daftar Relawan
              </v-btn>
            </v-card>

            <v-card class="pa-6 rounded-xl border-card" elevation="0">
              <div class="d-flex align-center mb-6">
                <v-icon class="mr-2" color="#19456B" size="28">mdi-comment-outline</v-icon>
                <span class="text-h5 font-weight-bold" style="color: #19456B;">Komentar ({{ reportData.comments?.length || 0 }})</span>
              </div>

              <div v-for="comment in reportData.comments" :key="comment.id" class="pa-5 rounded-xl mb-4 d-flex" style="background-color: #F8F1F1;">
                <v-avatar size="40" color="#11698E" class="mr-4 mt-1">
                  <span class="text-white font-weight-bold">{{ comment.author.charAt(0).toUpperCase() }}</span>
                </v-avatar>
                <div class="w-100">
                  <div class="d-flex justify-space-between align-center mb-1">
                    <div class="font-weight-bold text-black text-body-1">{{ comment.author }}</div>
                    <div class="text-caption text-grey-darken-1">{{ comment.time }}</div>
                  </div>
                  <p class="text-grey-darken-2 mb-0">{{ comment.text }}</p>
                </div>
              </div>

              <div class="d-flex align-start gap-4 mt-6">
                <v-text-field
                  placeholder="Tulis komentar..."
                  variant="outlined"
                  hide-details
                  rounded="lg"
                  color="#11698E"
                  class="comment-input"
                  @keyup.enter="submitComment"
                ></v-text-field>
                <v-btn 
                  color="#11698E" 
                  height="56" 
                  class="px-8 text-none font-weight-bold rounded-lg text-white" 
                  flat
                  :disabled="!newComment.trim()"
                  @click="submitComment"
                >
                  <v-icon start>mdi-send-outline</v-icon> Kirim
                </v-btn>
              </div>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();


const reportData = ref(null);
const newComment = ref('');
const reportId = route.params.id;

const fetchReportDetail = async () => {
  const token = localStorage.getItem('jwt_token');

  if (!token) {
    router.push('/');
    return;
  }

  try {
    const res = await fetch(`http://localhost:3000/api/reports/${reportId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    });

    if (res.ok) {
      const data = await res.json();
      reportData.value = data;
    } else if (res.status === 401) {
      alert("Sesi Anda telah berakhir.");
      localStorage.removeItem('jwt_token');
      router.push('/');
    } else {
      console.error("Gagal memuat detail laporan");
    }
  } catch (error) {
    console.error("Terjadi kesalahan jaringan:", error);
  }
};


const submitComment = async () => {
  if (!newComment.value.trim()) return;

  const token = localStorage.getItem('jwt_token');
  if (!token) return;

  try {
    const res = await fetch(`http://localhost:3000/api/reports/${reportId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        text: newComment.value
      })
    });

    if (res.ok) {
  
      newComment.value = '';

      fetchReportDetail(); 
    } else {
      alert("Gagal mengirim komentar.");
    }
  } catch (error) {
    console.error("Kesalahan mengirim komentar:", error);
  }
};


onMounted(() => {
  fetchReportDetail();
});


const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
};

const formatDateWithTime = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('id-ID', options) + ' pukul 08.00';
};
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif !important;
}

.logo-text {
  color: #000000;
  letter-spacing: -0.5px;
  font-size: 25px !important;
}

.nav-btn {
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

.gap-3 {
  display: flex;
  gap: 12px;
}

.gap-4 {
  display: flex;
  gap: 16px;
}

.border-b {
  border-bottom: 1px solid #eeeeee !important;
}

.border-card {
  border: 1px solid #EAEAEA !important;
  background-color: #FFFFFF;
}


.category-chip {
  background-color: #F8F1F1 !important;
  color: #11698E !important;
  font-weight: 600 !important;
}

.comment-input :deep(.v-field__outline) {
  border-color: #EAEAEA;
}
</style>