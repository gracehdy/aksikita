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
          to="/home"
          rounded="xl"
        >
          <v-icon start>mdi-home-variant-outline</v-icon>
          Beranda
        </v-btn>

        <v-btn
          variant="text"
          class="nav-btn mr-2"
          to="/komunitas"
        >
          <v-icon start>mdi-account-group-outline</v-icon>
          Aksi Komunitas
        </v-btn>

        <v-btn variant="text" class="nav-btn" to="/profile">
          <v-icon start>mdi-account-outline</v-icon>
          Akun
        </v-btn>
      </div>
    </v-app-bar>
    <v-spacer></v-spacer>

    <v-main class="bg-white">
      <v-container class="px-15 py-10" fluid>

        <div class="mb-10">
          <h1 class="text-h4 font-weight-bold section-title mb-2">Laporan Masalah</h1>
          <div class="d-flex justify-space-between align-center">
            <p class="section-subtitle">
              Laporkan masalah sosial di lingkungan Anda!
            </p>
            <v-btn color="#11698E" to="/buatLaporan" class="action-btn" elevation="0">
              <v-icon start>mdi-plus</v-icon>
              Buat Laporan
            </v-btn>
          </div>
        </div>

        <v-text-field
          prepend-inner-icon="mdi-magnify"
          placeholder="Cari aksi berdasarkan judul, deskripsi, atau lokasi..."
          variant="outlined"
          rounded="lg"
          hide-details
          class="mb-6 search-bar"
          color="#11698E"
        ></v-text-field>

        <div class="d-flex ga-3 mb-8 overflow-x-auto pb-2">
          <v-btn
            v-for="cat in categories"
            :key="cat"
            class="filter-btn"
            :class="{ 'filter-active': filterCategory === cat }"
            variant="flat"
            @click="filterCategory = cat"
          >
            {{ cat === 'all' ? 'Semua Kategori' : cat }}
          </v-btn>
        </div>

        <v-row v-if="filteredReports.length > 0">
          <v-col
            v-for="report in filteredReports"
            :key="report.id"
            cols="12" md="6" lg="4"
          >
            <v-card class="report-card" elevation="0" @click="goToDetail(report)">
              <v-img
                v-if="report.image"
                :src="report.image"
                height="220"
                cover
                class="rounded-lg"
              ></v-img>
              <div v-else class="no-image-placeholder rounded-lg">
                <v-icon size="48" color="#11698E">mdi-alert-circle-outline</v-icon>
              </div>

              <v-card-text class="px-0 pt-4">
                <div class="d-flex align-center mb-4 ga-3">
                  <v-avatar size="36" color="#11698E">
                    <v-img v-if="report.author?.avatar" :src="report.author.avatar" />
                    <span v-else class="text-[#11698E] font-weight-bold">
                      {{ report.author?.name?.charAt(0).toUpperCase() || 'U' }}
                    </span>
                  </v-avatar>
                  <div>
                    <div class="author-name">{{ report.author?.name || 'User Tanpa Nama' }}</div>
                    <div class="post-date">{{ formatDate(report.createdAt) }}</div>
                  </div>
                </div>

                <div class="d-flex justify-space-between align-center mb-3">
                  <v-chip size="small" class="category-chip">
                    {{ report.category }}
                  </v-chip>

                  <v-chip
                    v-if="report.volunteerAction"
                    size="small"
                    :color="getActionProperties(report.volunteerAction.status).color"
                    class="text-white font-weight-bold"
                  >
                    {{ report.volunteerAction.status }}
                  </v-chip>
                </div>

                <h3 class="report-title mb-2">{{ report.title }}</h3>
                <p class="report-desc mb-4">{{ report.description }}</p>

                <div class="d-flex align-center location-text mb-4">
                  <v-icon size="16" class="mr-1">mdi-map-marker-outline</v-icon>
                  {{ report.location }}
                </div>

                <div v-if="report.volunteerAction" class="volunteer-box mt-4">
                  <div class="d-flex align-center justify-space-between mb-4">
                    <div class="volunteer-info">
                      <v-icon size="18" class="mr-1">mdi-account-group-outline</v-icon>
                      {{ report.volunteerAction.registeredPeople }}/{{ report.volunteerAction.requiredPeople }} Relawan
                    </div>
                    <div class="volunteer-info">
                      <v-icon size="18" class="mr-1">mdi-calendar-blank-outline</v-icon>
                      {{ formatDate(report.volunteerAction.scheduledDate) }}
                    </div>
                  </div>

                  <v-btn
                    block
                    :color="getActionProperties(report.volunteerAction.status).color"
                    :class="getActionProperties(report.volunteerAction.status).textClass"
                    class="volunteer-btn"
                    elevation="0"
                    :disabled="report.volunteerAction.status === 'Selesai'"
                    @click.stop="goToDaftarRelawan(report.id)"
                  >
                    {{ getActionProperties(report.volunteerAction.status).text }}
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row v-else>
          <v-col cols="12">
            <div class="no-reports-placeholder rounded-xl d-flex flex-column align-center justify-center">
              <v-icon size="80" color="#11698E" class="mb-4">
                mdi-clipboard-text-search-outline
              </v-icon>
              <h3 class="placeholder-title">Belum Ada Laporan</h3>
              <p class="placeholder-subtitle text-center mt-2">
                Jadilah yang pertama melaporkan masalah di sekitar Anda!
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const reports = ref<any[]>([])
const filterCategory = ref('all')

const categories = ['all', 'Lingkungan', 'Infrastruktur', 'Sosial', 'Kesehatan']

const fetchReports = async () => {
  const token = localStorage.getItem('jwt_token')

  if (!token) {
    router.push('/')
    return
  }

  try {
    const res = await fetch('/api/reports', {
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
      alert("Sesi Anda telah berakhir. Silakan login kembali.")
      localStorage.removeItem('jwt_token')
      router.push('/')
    } else {
      console.error("Gagal memuat laporan")
    }
  } catch (error) {
    console.error("Error jaringan:", error)
  }
}

onMounted(() => {
  fetchReports()
})

const filteredReports = computed(() => {
  return filterCategory.value === 'all'
    ? reports.value
    : reports.value.filter(r => r.category === filterCategory.value)
})

const getActionProperties = (status: string) => {
  if (status === 'Sedang Berjalan') {
    return {
      color: '#11698E',
      text: 'Lihat Detail',
      textClass: 'text-none text-white font-weight-bold'
    }
  }
  if (status === 'Selesai') {
    return {
      color: '#E0E0E0',
      text: 'Aksi Selesai',
      textClass: 'text-none text-grey-darken-3 font-weight-bold'
    }
  }
  return {
    color: '#16C79A',
    text: 'Daftar Sekarang',
    textClass: 'text-none text-white font-weight-bold'
  }
}

const goToCreate = () => {
  router.push('/buatLaporan')
}

const goToDetail = (report: any) => {
  if (report.volunteerAction) {
    router.push({
      name: 'detailAksi',
      params: { id: report.id }
    });
  }
  else {
    router.push({
      name: 'detailLaporan',
      params: { id: report.id }
    });
  }
}

const formatDate = (date: string | Date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('id-ID')
}

const goToDaftarRelawan = (id: number) => {
  router.push({
    path: '/daftarRelawan',
    query: { idLaporan: id }
  });
}
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

.search-bar :deep(input) {
  font-family: 'Poppins', sans-serif;
}
.search-bar :deep(.v-field__outline) {
  color: #e0e0e0;
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

.section-title {
  font-family: 'Poppins', sans-serif !important;
  color: #19456B;
}

.section-subtitle {
  font-family: 'Poppins', sans-serif !important;
  font-size: 16px;
  color: #666;
}

.action-btn {
  font-family: 'Poppins', sans-serif !important;
  text-transform: none !important;
  font-weight: 600;
  border-radius: 12px;
}

.filter-btn {
  font-family: 'Poppins', sans-serif !important;
  text-transform: none !important;
  background-color: white !important;
  border: 1px solid #E0E0E0 !important;
  color: #555 !important;
  border-radius: 20px;
  font-weight: 500;
}

.filter-active {
  background-color: #11698E !important;
  color: white !important;
  border: none !important;
}

.report-card {
  transition: transform 0.2s;
  background: transparent !important;
}

.report-card:hover {
  transform: translateY(-4px);
}

.no-image-placeholder {
  height: 220px;
  background-color: #F8F1F1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.report-title {
  font-family: 'Poppins', sans-serif !important;
  font-size: 18px;
  font-weight: 700;
  color: #19456B;
}

.report-desc {
  font-family: 'Poppins', sans-serif !important;
  font-size: 14px;
  color: #777;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.author-name {
  font-family: 'Poppins', sans-serif !important;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.post-date, .location-text, .volunteer-info {
  font-family: 'Poppins', sans-serif !important;
  font-size: 12px;
  color: #888;
}

.category-chip {
  background-color: #F8F1F1 !important;
  color: #11698E !important;
  font-weight: 600;
  font-family: 'Poppins', sans-serif !important;
}

.status-chip {
  background-color: #16C79A !important;
  color: white !important;
  font-weight: 600;
  font-family: 'Poppins', sans-serif !important;
}

.volunteer-box {
  background-color: #fcfcfc;
  border-top: 1px solid #eee;
}

.volunteer-btn {
  font-family: 'Poppins', sans-serif !important;
  text-transform: none !important;
  font-weight: 600;
  border-radius: 8px;
}
</style>
