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
        <v-btn variant="text" class="nav-btn mr-2" to="/home" rounded="xl">
            <v-icon start>mdi-home-variant-outline</v-icon>
            Beranda
        </v-btn>

        <v-btn variant="text" class="nav-btn mr-2" to="/komunitas">
            <v-icon start>mdi-account-group-outline</v-icon>
            Aksi Komunitas
        </v-btn>

        <v-btn variant="text" class="nav-btn" to="/profile">
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

    <v-main>
      <v-container class="report-wrapper" fluid>
        <div class="d-flex align-center justify-center mb-8">
          <h1 class="page-title text-h4 font-weight-bold" style="color: #19456B;">Buat Aksi Relawan</h1>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="pa-8 custom-card border-card" elevation="0">
              <v-form v-model="isFormValid">

                <div class="volunteer-info-section pa-5 rounded-xl" style="background-color: #F8F1F1;">
                  <h3 class="volunteer-title mb-4" style="color: #19456B;">Informasi Aksi Relawan</h3>

                  <div class="input-group">
                    <label class="input-label">Tanggal & Waktu Aksi</label>
                    <v-text-field
                      v-model="volunteerForm.date"
                      variant="outlined"
                      type="datetime-local"
                      color="#11698E"
                      class="mt-2 custom-input bg-white"
                      rounded="lg"
                    ></v-text-field>
                  </div>

                  <div class="input-group mt-4">
                    <label class="input-label">Jumlah Relawan yang Dibutuhkan</label>
                    <v-text-field
                      v-model="volunteerForm.requiredPeople"
                      variant="outlined"
                      type="number"
                      min="1"
                      placeholder="Contoh: 15"
                      color="#11698E"
                      class="mt-2 custom-input bg-white"
                      rounded="lg"
                    ></v-text-field>
                  </div>

                  <div class="input-group mt-4">
                    <label class="input-label">Tempat Kumpul</label>
                    <v-text-field
                      v-model="volunteerForm.meetingPoint"
                      variant="outlined"
                      placeholder="Contoh: Di depan gerbang utama"
                      color="#11698E"
                      class="mt-2 custom-input bg-white"
                      rounded="lg"
                    ></v-text-field>
                  </div>

                  <div class="input-group mt-4">
                    <label class="input-label">Peralatan / Info Tambahan</label>
                    <v-textarea
                      v-model="volunteerForm.additionalInfo"
                      variant="outlined"
                      placeholder="Contoh: Bawa sarung tangan dan kantong sampah sendiri."
                      rows="3"
                      color="#11698E"
                      class="mt-2 custom-input bg-white"
                      rounded="lg"
                    ></v-textarea>
                  </div>
                </div>

                <v-row class="mt-8">
                  <v-col cols="6">
                    <v-btn block variant="outlined" color="#19456B" size="large" class="text-none font-weight-bold rounded-lg" @click="$router.back()">
                      Batal
                    </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn
                      block
                      color="#16C79A"
                      size="large"
                      class="text-none font-weight-bold text-white rounded-lg"
                      elevation="0"
                      @click="submitAction"
                    >
                      Buka Aksi Relawan
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isFormValid = ref(false)

const reportId = route.query.idLaporan

const volunteerForm = ref({
  date: '',
  requiredPeople: '',
  meetingPoint: '',
  additionalInfo: ''
})

const submitAction = async () => {
  if (!volunteerForm.value.date || !volunteerForm.value.requiredPeople || !volunteerForm.value.additionalInfo) {
    alert("Mohon lengkapi semua kolom wajib aksi (Tanggal, Jumlah Relawan, Peralatan)!")
    return
  }

  const token = localStorage.getItem('jwt_token')
  if (!token) {
    alert("Anda harus login terlebih dahulu untuk membuat aksi relawan.")
    router.push('/')
    return
  }

  try {
    const payloadData = {
      reportId: Number(reportId), 
      scheduledDate: volunteerForm.value.date,
      requiredPeople: Number(volunteerForm.value.requiredPeople),
      meetingPoint: volunteerForm.value.meetingPoint,
      additionalInfo: volunteerForm.value.additionalInfo
    }

    const res = await fetch(`http://localhost:3000/api/reports/${reportId}/action`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payloadData)
    })

    if (res.ok) {
      alert("Aksi relawan berhasil dibuka!")
      router.push({
        name: 'detailLaporan',
        params: { id: reportId }
      })
    } else if (res.status === 401) {
      alert("Sesi login Anda tidak valid. Silakan login ulang.")
      router.push('/')
    } else {
      const error = await res.json()
      alert(error.message || "Gagal membuat aksi relawan")
    }

  } catch (err) {
    console.error(err)
    alert("Terjadi kesalahan jaringan.")
  }
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif !important;
}

.logo-text { color: #000000; letter-spacing: -0.5px; font-size: 25px !important; }
.nav-btn { text-transform: none !important; font-weight: 600 !important; font-size: 18px !important; color: #555555; }
.active-nav { color: #11698E !important; background-color: #F8F1F1 !important; opacity: 1 !important; }

.gap-4 { display: flex; gap: 16px; }
.border-b { border-bottom: 1px solid #eeeeee !important; }
.border-card { border: 1px solid #EAEAEA !important; background-color: #FFFFFF; }

.report-wrapper {
  background-color: #FAFAFA;
  min-height: 100vh;
  padding-bottom: 50px;
}

.input-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #19456B;
  display: block;
}

:deep(.v-field__outline) { border-color: #EAEAEA !important; }
:deep(.v-text-field input), :deep(.v-textarea textarea) { font-size: 0.95rem !important; color: #1a202c;}
:deep(.v-label) { font-size: 0.95rem !important; }
</style>