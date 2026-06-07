<template>
  <v-app style="background-color: white" theme="light">
    <Navbar />
    <v-main class="bg-white">
      <v-container class="px-15 py-10" fluid>
        <div class="mb-10">
          <h1 class="text-h4 font-weight-bold section-title mb-2">Aksi Komunitas</h1>
          <p class="section-subtitle">Bergabunglah dengan aksi relawan di sekitar Anda</p>
        </div>

        <v-text-field
          v-model="searchQuery"
          prepend-inner-icon="mdi-magnify"
          placeholder="Cari aksi berdasarkan judul, deskripsi, atau lokasi..."
          variant="outlined"
          rounded="lg"
          hide-details
          class="mb-6 search-bar"
          color="#11698E"
        ></v-text-field>

       <div class="mb-8">
          <v-btn-toggle
            v-model="filterCategory"
            color="#11698E"
            variant="outlined"
            rounded="lg"
            group
            class="filter-group"
          >
            <v-btn
              v-for="cat in categories"
              :key="cat"
              class="filter-btn"
              :class="{ 'filter-active': filterCategory === cat }"
              variant="flat"
              rounded="pill" 
              @click="filterCategory = cat"
            >
              {{ cat === 'all' ? 'Semua Kategori' : cat }}
            </v-btn>
          </v-btn-toggle>
        </div>

        <v-row v-if="filteredReports.length > 0">
          <v-col v-for="report in filteredReports" :key="report.id" cols="12" md="6" lg="4">
            <v-card class="report-card" elevation="0" @click="goToDetail(report)">
              
              <MediaGallery 
                  v-if="report.media && report.media.length > 0" 
                  :mediaList="report.media" 
                />
                <div v-else class="no-image-placeholder rounded-lg">
                  <v-icon size="48" color="#11698E">mdi-alert-circle-outline</v-icon>
                </div>

              <v-card-text class="pa-5">
                <div class="d-flex align-center mb-4 ga-3">
                  <v-avatar color="#11698E" size="36">
                    <span class="text-white font-weight-bold">{{ report.author.name.charAt(0).toUpperCase() }}</span>
                  </v-avatar>
                  <div>
                    <div class="author-name">{{ report.author.name }}</div>
                    <div class="post-date">{{ formatDate(report.createdAt) }}</div>
                  </div>
                </div>

                <div class="d-flex align-center mb-3">
                  <v-chip size="small" class="category-chip mr-2">{{ report.category }}</v-chip>
                  <v-chip size="small" :color="getStatusColor(report._virtualStatus)" variant="flat" class="text-white font-weight-bold">
                    <v-icon start :icon="getStatusIcon(report._virtualStatus)" size="small"></v-icon>
                    {{ formatStatusText(report._virtualStatus) }}
                  </v-chip>
                </div>

                <h3 class="report-title mb-2">{{ report.title }}</h3>
                <p class="report-desc mb-4">{{ report.description }}</p>

                <div class="location-text mb-4">
                  <v-icon size="16" class="mr-1">mdi-map-marker-outline</v-icon> {{ report.location }}
                </div>

                <div class="volunteer-box mt-4 pt-4">
                  <div class="d-flex align-center justify-space-between mb-4">
                    <div class="volunteer-info">
                      <v-icon size="18" class="mr-1">mdi-account-group-outline</v-icon>
                      {{ report.volunteerAction?.registeredPeople || 0 }}/{{ report.volunteerAction?.requiredPeople }} Relawan
                    </div>
                    <div class="volunteer-info">
                      <v-icon size="18" class="mr-1">mdi-calendar-blank-outline</v-icon>
                      {{ report.volunteerAction ? formatDate(report.volunteerAction.scheduledDate) : 'Tanggal belum ditentukan' }}
                    </div>
                  </div>

                  <v-btn
                    block
                    :color="getButtonConfig(report._virtualStatus).color"
                    class="volunteer-btn text-white"
                    elevation="0"
                    :disabled="report.status === 'Selesai'"
                    @click.stop="handleActionClick(report)"
                  >
                    {{ getButtonConfig(report._virtualStatus).text }}
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12">
            <div class="no-reports-placeholder rounded-xl d-flex flex-column align-center justify-center py-15">
              <v-icon size="80" color="#11698E" class="mb-4">
                mdi-clipboard-text-search-outline
              </v-icon>
              <h3 class="placeholder-title">Belum Ada Aksi</h3>
              <p class="placeholder-subtitle text-center mt-2">
                Jadilah yang pertama membuat aksi komunitas di sekitar Anda!
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.card-image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  background-color: #F8F1F1;
  overflow: hidden;
}

.no-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.report-card {
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  border: 1px solid #eee;
}

.report-card:hover { transform: translateY(-4px); }

.section-title { font-family: 'Poppins', sans-serif !important; color: #19456B; }
.section-subtitle { font-family: 'Poppins', sans-serif !important; font-size: 16px; color: #666; }
.report-title { font-family: 'Poppins', sans-serif !important; font-size: 18px; font-weight: 700; color: #19456B; }
.report-desc { font-family: 'Poppins', sans-serif !important; font-size: 14px; color: #777; height: 40px; overflow: hidden; }
.author-name { font-weight: 600; color: #333; }
.post-date, .location-text, .volunteer-info { font-size: 12px; color: #888; }
.category-chip { background-color: #F8F1F1 !important; color: #11698E !important; font-weight: 600; }
.volunteer-box { background-color: #fcfcfc; border-top: 1px solid #eee; }
.volunteer-btn { text-transform: none !important; font-weight: 600; border-radius: 8px; }

.filter-btn {
  font-family: 'Poppins', sans-serif !important; 
  text-transform: none !important; 
  background-color: white !important; 
  border: 1px solid #E0E0E0 !important; 
  color: #555 !important; 
  border-radius: 20px !important;
  font-weight: 500;
  transition: all 0.2s ease; 
  margin-right: 8px !important; 
  margin-bottom: 8px !important;
}

.filter-active {
  background-color: #11698E !important; 
  color: white !important; 
  border: 1px solid #11698E !important;
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import MediaGallery from '../components/mediagallery.vue'
import { formatStatusText, getStatusColor, getStatusIcon, getButtonConfig } from '../utils/status.js'
import { formatDate } from '../utils/date.js'

const router = useRouter()
const reports = ref<any[]>([])
const filterCategory = ref('Semua')
const searchQuery = ref('')

const categories = ['Semua', 'Akan Datang', 'Sedang Berjalan', 'Selesai']

const fetchActions = async () => {
  const token = localStorage.getItem('jwt_token')
  if (!token) { router.push('/'); return }
  try {
    const res = await fetch('http://localhost:3000/api/actions', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if (res.ok) reports.value = await res.json()
  } catch (error) { console.error(error) }
}

onMounted(fetchActions)

const filteredReports = computed(() => {
  const now = new Date();
  const processedReports = reports.value.map(item => {
    const scheduled = item.scheduledAt ? new Date(item.scheduledAt) : null;
    let status = 'Akan Datang';
    
    if (scheduled) {
      if (scheduled > now) status = 'Akan Datang';
      else if (scheduled.toDateString() === now.toDateString()) status = 'Sedang Berjalan';
      else status = 'Selesai';
    }

    return { ...item, _virtualStatus: status };
  });

  if (filterCategory.value === 'Semua') return processedReports;
  return processedReports.filter(r => r._virtualStatus === filterCategory.value);
})

const goToDetail = (report: any) => router.push({ name: 'detailAksi', params: { id: report.id } })

const handleActionClick = (report: any) => {
  const status = formatStatusText(report.volunteerAction);
  status === 'Akan Datang' ? router.push({ path: '/daftarRelawan', query: { idAksi: report.id } }) : goToDetail(report)
}
</script>