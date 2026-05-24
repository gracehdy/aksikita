<template>
  <v-app style="background-color: #FAFAFA;" theme="light">
    <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
      <div class="d-flex align-center">
        <v-sheet color="#11698E" rounded="lg" width="36" height="36" class="d-flex align-center justify-center mr-3">
          <v-icon color="white" size="30">mdi-account-group</v-icon>
        </v-sheet>
        <span class="text-h4 font-weight-bold logo-text">AksiKita</span>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center gap-4">
        <v-btn variant="text" class="nav-btn mr-2" to="/home"><v-icon start>mdi-home-variant-outline</v-icon>Beranda</v-btn>
        <v-btn variant="flat" class="nav-btn active-nav mr-2" to="/komunitas" rounded="xl"><v-icon start>mdi-account-group-outline</v-icon>Aksi Komunitas</v-btn>
        <v-btn variant="text" class="nav-btn" to="/profile"><v-icon start>mdi-account-outline</v-icon>Akun</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container v-if="!report" class="py-15 text-center">
        <v-progress-circular indeterminate color="#11698E" size="50"></v-progress-circular>
      </v-container>

      <v-container v-else class="py-10" style="max-width: 900px;">
        
        <v-btn variant="text" class="mb-6 text-none font-weight-medium text-grey-darken-3" prepend-icon="mdi-arrow-left" @click="goBack" style="font-family: 'Poppins', sans-serif;">
          Kembali
        </v-btn>

        <v-card class="mb-6 rounded-xl border-card px-4 py-4" elevation="0">
          <v-card-text>
            <div class="d-flex align-center mb-6">
              <v-avatar color="#11698E" size="48" class="text-white font-weight-bold text-h6">
                {{ report.author.name.charAt(0).toUpperCase() }}
              </v-avatar>
              <div class="ml-4">
                <div class="font-weight-bold text-body-1 text-black">{{ report.author.name }}</div>
                <div class="text-caption text-grey">{{ formatDate(report.createdAt) }}</div>
              </div>
            </div>

            <div class="d-flex align-center mb-6 gap-3">
              <v-chip class="category-chip px-4" size="large">
                {{ report.category }}
              </v-chip>
              <v-chip :color="getStatusColor(report.status)" class="text-white font-weight-medium px-4" size="large">
                <v-icon start size="small">{{ getStatusIcon(report.status) }}</v-icon> 
                {{ formatStatusText(report.status) }}
              </v-chip>
            </div>

            <h1 class="font-weight-bold text-h4 mb-6 text-black" style="font-family: 'Poppins', sans-serif !important;">
              {{ report.title }}
            </h1>
            
            <div class="d-flex align-center text-body-1 text-grey-darken-3 mb-2">
              <v-icon color="grey-darken-1" size="small" class="mr-3">mdi-map-marker-outline</v-icon> 
              {{ report.location }}
            </div>
            <div class="d-flex align-center text-body-1 text-grey-darken-3 mb-6">
              <v-icon color="grey-darken-1" size="small" class="mr-3">mdi-calendar-blank-outline</v-icon> 
              {{ report.volunteerAction ? formatDateWithTime(report.volunteerAction.scheduledDate) : 'Tanggal belum ditentukan' }}
            </div>

            <p class="text-body-1 text-black" style="line-height: 1.6;">
              {{ report.description }}
            </p>
          </v-card-text>
        </v-card>

        <v-card v-if="report.volunteerAction" class="mb-6 rounded-xl border-card px-4 py-4" elevation="0">
          <v-card-title class="font-weight-bold text-h5 text-primary-dark mb-4">Informasi Aksi</v-card-title>
          
          <v-card-text>
            <div class="info-item mb-6">
              <v-icon color="#11698E" size="28" class="mr-4 mt-1">mdi-calendar-check-outline</v-icon>
              <div>
                <div class="font-weight-bold text-primary-dark text-subtitle-1">Tanggal & Waktu</div>
                <div class="text-black">{{ formatDateWithTime(report.volunteerAction.scheduledDate) }}</div>
              </div>
            </div>

            <div class="info-item mb-6">
              <v-icon color="#11698E" size="28" class="mr-4 mt-1">mdi-account-group-outline</v-icon>
              <div class="w-100">
                <div class="font-weight-bold text-primary-dark text-subtitle-1">Relawan Dibutuhkan</div>
                <div class="d-flex justify-space-between align-center mb-1">
                  <div class="text-black">{{ report.volunteerAction.requiredPeople }} orang</div>
                  <div class="font-weight-bold text-teal">{{ report.volunteerAction.registeredPeople }}/{{ report.volunteerAction.requiredPeople }} terdaftar</div>
                </div>
                <v-progress-linear 
                  :model-value="(report.volunteerAction.registeredPeople / report.volunteerAction.requiredPeople) * 100" 
                  color="#16C79A" 
                  height="10" 
                  rounded>
                </v-progress-linear>
              </div>
            </div>

            <div class="info-item mb-8">
              <v-icon color="#11698E" size="28" class="mr-4 mt-1">mdi-map-marker-outline</v-icon>
              <div>
                <div class="font-weight-bold text-primary-dark text-subtitle-1">Lokasi Pelaksanaan</div>
                <div class="text-black">{{ report.location }}</div>
              </div>
            </div>

            <v-sheet color="#FFF7F7" class="pa-6 rounded-xl border-red-light">
              <h4 class="font-weight-bold text-primary-dark mb-2">Informasi Tambahan</h4>
              <p class="text-black mb-0">Peralatan untuk aksi ini sudah dikoordinasikan. Pastikan Anda datang tepat waktu.</p>
            </v-sheet>
          </v-card-text>
        </v-card>

        <v-card id="komentar-section" class="rounded-xl border-card px-4 py-4" elevation="0">
          <v-card-title class="font-weight-bold text-h5 text-primary-dark mb-4 d-flex align-center">
            <v-icon class="mr-2" size="28">mdi-comment-outline</v-icon> Komentar (2)
          </v-card-title>
          
          <v-card-text>
            <v-sheet color="#F8F1F1" class="pa-5 rounded-xl mb-4 d-flex">
              <v-avatar color="#11698E" size="40" class="text-white font-weight-bold mr-4 mt-1">R</v-avatar>
              <div class="w-100">
                <div class="d-flex justify-space-between align-center mb-1">
                  <div class="font-weight-bold text-black text-body-1">Rina Putri</div>
                  <div class="text-caption text-grey-darken-1">3/5/2026 09.20</div>
                </div>
                <p class="text-grey-darken-2 mb-0">Saya sudah mendaftar! Tidak sabar untuk bergabung.</p>
              </div>
            </v-sheet>

            <v-sheet color="#F8F1F1" class="pa-5 rounded-xl mb-8 d-flex">
              <v-avatar color="#11698E" size="40" class="text-white font-weight-bold mr-4 mt-1">A</v-avatar>
              <div class="w-100">
                <div class="d-flex justify-space-between align-center mb-1">
                  <div class="font-weight-bold text-black text-body-1">Ahmad Rizki</div>
                  <div class="text-caption text-grey-darken-1">4/5/2026 11.45</div>
                </div>
                <p class="text-grey-darken-2 mb-0">Apakah perlu membawa peralatan sendiri?</p>
              </div>
            </v-sheet>

            <div class="d-flex align-start gap-4 mt-6">
              <v-text-field
                v-model="newComment"
                placeholder="Tulis komentar..."
                variant="outlined"
                rounded="lg"
                hide-details
                color="#11698E"
                class="comment-input"
                @keyup.enter="submitComment"
              ></v-text-field>
              <v-btn 
                color="#11698E" 
                height="56" 
                rounded="lg" 
                class="text-none font-weight-bold px-8 text-white" 
                flat
                :disabled="!newComment.trim()"
                @click="submitComment"
              >
                <v-icon start>mdi-send-outline</v-icon> Kirim
              </v-btn>
            </div>
          </v-card-text>
        </v-card>

      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

* {
  font-family: 'Poppins', sans-serif !important;
}

.logo-text { color: #000000; letter-spacing: -0.5px; font-size: 25px !important; }
.nav-btn { text-transform: none !important; font-weight: 600 !important; font-size: 18px !important; color: #555555; }
.active-nav { color: #11698E !important; background-color: #F8F1F1 !important; opacity: 1 !important; }
.active-nav :deep(.v-icon) { color: #11698E !important; }
.border-b { border-bottom: 1px solid #eeeeee !important; }


.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
.text-primary-dark { color: #19456B !important; }
.text-teal { color: #16C79A !important; }


.border-card { border: 1px solid #EAEAEA !important; background-color: #FFFFFF; }
.border-red-light { border: 1px solid #FBE9E9 !important; }


.info-item { display: flex; align-items: flex-start; }


.comment-input :deep(.v-field__outline) { border-color: #EAEAEA; }


.category-chip {
  background-color: #F8F1F1 !important;
  color: #11698E !important;
  font-weight: 600;
  font-family: 'Poppins', sans-serif !important;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const report = ref<any>(null)
const newComment = ref<string>('') 
const idAksi = route.params.id 

const fetchDetailAksi = async () => {
  const token = localStorage.getItem('jwt_token')
  
  if (!token) {
    router.push('/')
    return
  }

  try {
    const res = await fetch(`http://localhost:3000/api/actions/${idAksi}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    })

    if (res.ok) {
      const data = await res.json()
      report.value = data
    } else if (res.status === 401) {
      alert("Sesi Anda telah berakhir.")
      localStorage.removeItem('jwt_token')
      router.push('/')
    }
  } catch (error) {
    console.error("Gagal memuat detail aksi:", error)
  }
}

const submitComment = async () => {
  if (!newComment.value.trim()) return

  const token = localStorage.getItem('jwt_token')
  if (!token) return

  try {
    const res = await fetch(`http://localhost:3000/api/reports/${idAksi}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        text: newComment.value
      })
    })

    if (res.ok) {
      newComment.value = ''
      fetchDetailAksi()
    } else {
      alert("Gagal mengirim komentar.")
    }
  } catch (error) {
    console.error("Kesalahan mengirim komentar:", error)
  }
}

onMounted(() => {
  fetchDetailAksi()
})

const goBack = () => {
  router.back()
}

const formatDate = (date: Date | string) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('id-ID')
}

const formatDateWithTime = (date: Date | string) => {
  if (!date) return ''
  const d = new Date(date)
  const day = d.toLocaleDateString('id-ID', { weekday: 'long' })
  const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  return `${day}, ${dateStr} pukul 08.00`
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
</script>