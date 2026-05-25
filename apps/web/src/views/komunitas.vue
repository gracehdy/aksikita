<template>
  <v-app>
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
      <v-btn variant="text" 
      class="nav-btn mr-2"
      to="/home"
      >
        <v-icon start >mdi-home-variant-outline</v-icon>
        Beranda
      </v-btn>

      <v-btn
        variant="flat"
        color="#F8F1F1"
        class="nav-btn active-nav mr-2"
        to="/komunitas"
        rounded="xl">
        <v-icon start>mdi-account-group-outline</v-icon>
        Aksi Komunitas
      </v-btn>

      <v-btn variant="text" class="nav-btn" to="/profile">
        <v-icon start>mdi-account-outline</v-icon>
        Akun
      </v-btn>
    </div>
  </v-app-bar>


<v-main class="bg-white">
    <v-container class="px-md-15 py-10" fluid>

      <div class="mb-6">
        <h1 class="font-weight-bold" style="color: #1a202c; font-size: 32px; font-family: 'Poppins', sans-serif;">Aksi Komunitas</h1>
        <p class="text-grey-darken-1 mt-1" style="font-family: 'Poppins', sans-serif; font-size: 16px;">Bergabunglah dengan aksi relawan di sekitar Anda</p>
      </div>

      <v-text-field
        prepend-inner-icon="mdi-magnify"
        placeholder="Cari aksi berdasarkan judul, deskripsi, atau lokasi..."
        variant="outlined"
        rounded="lg"
        hide-details
        class="mb-6 search-bar"
        color="#11698E"
        @keyup.enter="handleSearch"
      ></v-text-field>

      <div class="d-flex ga-3 mb-8 overflow-x-auto pb-2">
        <v-btn
          v-for="status in filterOptions"
          :key="status.value"
          class="filter-btn text-none font-weight-medium"
          :class="{ 'filter-active': filterStatus === status.value }"
          variant="flat"
          rounded="lg"
          @click="filterStatus = status.value"
        >
          {{ status.label }}
        </v-btn>
      </div>

      <v-row v-if="filteredReports.length > 0">
        <v-col
          v-for="report in filteredReports" 
          :key="report.id" 
          cols="12" md="6" lg="4"
        >
          <v-card elevation="0" class="rounded-xl card-hover" style="font-family: 'Poppins', sans-serif;" @click="goToDetail(report)">
            <v-sheet color="#F8F1F1" height="200" class="d-flex justify-center align-center">
              <v-icon size="80" color="#4a5568">mdi-account-group</v-icon>
            </v-sheet>
            
            <v-card-text class="pa-5">
              <div class="d-flex align-center mb-4">
                <v-avatar color="#11698E" size="36" class="text-white font-weight-bold">
                  {{ report.author.name.charAt(0).toUpperCase() }}
                </v-avatar>
                <div class="ml-3">
                  <div class="font-weight-bold text-body-1" style="color: #1a202c;">{{ report.author.name }}</div>
                  <div class="text-caption text-grey">{{ formatDate(report.createdAt) }}</div>
                </div>
              </div>

              <div class="d-flex justify-space-between align-center mb-4">
                <v-chip size="small" class="category-chip">
                  {{ report.category }}
                </v-chip>
                <v-chip size="small" :color="getStatusColor(report.status)" variant="flat" class="text-white font-weight-bold px-3">
                  <v-icon start :icon="getStatusIcon(report.status)" size="small"></v-icon> 
                  {{ formatStatusText(report.status) }}
                </v-chip>
              </div>

              <h3 class="report-title text-truncate">{{ report.title }}</h3>
              <p class="text-body-2 text-grey-darken-1 mb-4 report-desc" style="line-height: 1.5; height: 60px;">{{ report.description }}</p>

              <div class="text-body-2 text-grey-darken-2 mb-1 text-truncate">
                <v-icon color="#14b8a6" size="small" class="mr-2">mdi-map-marker</v-icon> {{ report.location }}
              </div>
              <div class="text-body-2 text-grey-darken-2 mb-5">
                <v-icon color="#14b8a6" size="small" class="mr-2">mdi-calendar-blank</v-icon> 
                {{ report.volunteerAction ? formatDate(report.volunteerAction.scheduledDate) : 'Tanggal belum ditentukan' }}
              </div>

              <div v-if="report.volunteerAction">
                <div class="d-flex justify-space-between text-body-2 mb-1">
                  <span class="text-grey-darken-2">Relawan terdaftar</span>
                  <span class="font-weight-bold">{{ report.volunteerAction.registeredPeople }}/{{ report.volunteerAction.requiredPeople }}</span>
                </div>
                <v-progress-linear 
                  :model-value="(report.volunteerAction.registeredPeople / report.volunteerAction.requiredPeople) * 100" 
                  :color="getProgressBarColor(report.status)" 
                  height="8" 
                  rounded 
                  class="mb-5"
                ></v-progress-linear>
              </div>

              <v-btn 
                block 
                :color="getButtonConfig(report.status).color" 
                :class="getButtonConfig(report.status).textClass" 
                rounded="lg" 
                size="large" 
                flat
                :disabled="report.status === 'Selesai'"
                @click.stop="handleActionClick(report)"
              >
                {{ getButtonConfig(report.status).text }}
              </v-btn>
              
              <div class="text-center mt-4">
                <a href="#" 
                @click.prevent="goToDetail(report)"
                class="text-grey-darken-1 text-decoration-none text-caption d-inline-flex align-center hover-blue">
                  <v-icon size="small" class="mr-1">mdi-comment-outline</v-icon> Lihat komentar
                </a>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="12">
          <div class="no-reports-placeholder rounded-xl d-flex flex-column align-center justify-center py-15">
            <v-icon size="80" color="#11698E" class="mb-4">
              mdi-account-group-outline
            </v-icon>
            <h3 class="placeholder-title" style="font-family: 'Poppins', sans-serif; color: #19456B;">Belum Ada Aksi</h3>
            <p class="placeholder-subtitle text-center mt-2 text-grey">
              Tidak ada aksi komunitas untuk filter yang dipilih.
            </p>
          </div>
        </v-col> 
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

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
.border-b {
  border-bottom: 1px solid #eeeeee !important;
}


.search-bar :deep(input) {
  font-family: 'Poppins', sans-serif;
}
.search-bar :deep(.v-field__outline) {
  color: #e0e0e0;
}

.filter-btn {
  background-color: white !important;
  border: 1px solid #E0E0E0 !important;
  color: #757575 !important;
}

.filter-active {
  background-color: #11698E !important;
  color: white !important;
  border-color: #11698E !important;
}


.card-hover {
  transition: all 0.3s ease;
  background: white !important;
}
.card-hover:hover {
  border-color: #11698E !important;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transform: translateY(-4px);
}

.report-desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
}

.hover-blue:hover {
  color: #11698E !important;
}


.category-chip {
  background-color: #F8F1F1 !important;
  color: #11698E !important;
  font-weight: 600;
  font-family: 'Poppins', sans-serif !important;
}

.report-title {
  font-family: 'Poppins', sans-serif !important;
  font-size: 18px;
  font-weight: 700;
  color: #19456B; 
}
</style>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const reports = ref<any[]>([]) 
const filterStatus = ref('Semua')
const searchKeyword = ref('')

const filterOptions = [
  { label: 'Semua', value: 'Semua' },
  { label: 'Akan Datang', value: 'Akan Datang' },
  { label: 'Sedang Berjalan', value: 'Sedang Berjalan' },
  { label: 'Selesai', value: 'Selesai' }
]

const fetchActions = async () => {
  const token = localStorage.getItem('jwt_token')
  
  if (!token) {
    router.push('/')
    return
  }

  try {
    const res = await fetch('http://localhost:3000/api/actions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    })

    if (res.ok) {
      const data = await res.json()
      reports.value = data
    } else if (res.status === 401) {
      localStorage.removeItem('jwt_token')
      router.push('/')
    }
  } catch (error) {
    console.error("Error mengambil data aksi:", error)
  }
}

const handleSearch = async () => {
  const token = localStorage.getItem('jwt_token')
  if (!token) return
  if (!searchKeyword.value.trim()) {
    fetchActions()
    return
  }

  try {
    const res = await fetch('http://localhost:3000/pelaporan/search', { 
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        keywords: searchKeyword.value
      })
    })

    if (res.ok) {
      const data = await res.json()
      reports.value = data
    } else if (res.status === 401) {
      alert("Sesi Anda telah berakhir. Silakan login kembali.")
      localStorage.removeItem('jwt_token')
      router.push('/')
    } else {
      console.error("Gagal melakukan pencarian")
    }
  } catch (error) {
    console.error("Error saat melakukan pencarian:", error)
  }
}

onMounted(() => {
  fetchActions()
})

const filteredReports = computed(() => {
  const dataAksiSaja = reports.value.filter(r => r.volunteerAction)

  if (filterStatus.value === 'Semua') return dataAksiSaja
  
  return dataAksiSaja.filter(r => {
    const rStatus = formatStatusText(r.status)
    return rStatus === filterStatus.value
  })
})


const goToDetail = (report: any) => {
  router.push({ name: 'detailAksi', params: { id: report.id } });
}

const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })
}

const formatStatusText = (status: string) => {
  if (!status) return 'Akan Datang'
  if (status.toLowerCase().includes('jalan')) return 'Sedang Berjalan'
  if (status.toLowerCase().includes('selesai')) return 'Selesai'
  return 'Akan Datang'
}

const getStatusColor = (status: string) => {
  const s = formatStatusText(status)
  if (s === 'Sedang Berjalan') return '#19456B' 
  if (s === 'Selesai') return '#16C79A' 
  return '#11698E'
}

const getStatusIcon = (status: string) => {
  const s = formatStatusText(status)
  if (s === 'Sedang Berjalan') return 'mdi-play'
  if (s === 'Selesai') return 'mdi-check-circle-outline'
  return 'mdi-clock-outline'
}

const getProgressBarColor = (status: string) => {
  const s = formatStatusText(status)
  if (s === 'Sedang Berjalan') return '#11698E'
  if (s === 'Selesai') return 'grey'
  return '#16C79A'
}

const getButtonConfig = (status: string) => {
  const s = formatStatusText(status)
  if (s === 'Sedang Berjalan') {
    return { color: '#11698E', text: 'Lihat Detail', textClass: 'text-none text-white font-weight-bold' }
  }
  if (s === 'Selesai') {
    return { color: 'grey-lighten-2', text: 'Aksi Selesai', textClass: 'text-none text-grey-darken-3 font-weight-bold' }
  }
  return { color: '#16C79A', text: 'Daftar Sekarang', textClass: 'text-none text-white font-weight-bold' }
}

const handleActionClick = (report: any) => {
  const statusText = formatStatusText(report.status)
  if (statusText === 'Akan Datang') { 
    router.push({ path: '/daftarRelawan', query: { idAksi: report.id } })
  } else {
    goToDetail(report)
  }
}
const goToDaftarRelawan = (id: number) => {
  router.push({ path: '/daftarRelawan', query: { idAksi: id } });
}
</script>