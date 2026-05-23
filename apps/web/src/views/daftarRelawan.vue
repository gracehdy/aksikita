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
        <v-btn variant="text" class="nav-btn mr-2" to="/Home">
          <v-icon start>mdi-home-variant-outline</v-icon>Beranda
        </v-btn>

        <v-btn variant="flat" class="nav-btn active-nav mr-2" to="/Komunitas" rounded="xl">
          <v-icon start>mdi-account-group-outline</v-icon>Aksi Komunitas
        </v-btn>

        <v-btn variant="text" class="nav-btn" to="/Profile">
          <v-icon start>mdi-account-outline</v-icon>Akun
        </v-btn>
      </div>
    </v-app-bar>

    <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
      <v-btn variant="text" @click="$router.back()" class="text-none font-weight-medium text-grey-darken-3" style="font-family: 'Poppins', sans-serif;">
        <v-icon start>mdi-arrow-left</v-icon> Kembali
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container v-if="!report" class="py-15 text-center">
        <v-progress-circular indeterminate color="#11698E" size="50"></v-progress-circular>
      </v-container>

      <v-container v-else class="py-10" style="max-width: 900px;">
        <h1 class="font-weight-bold text-h4 mb-6" style="color: #19456B; font-family: 'Poppins', sans-serif !important;">Pendaftaran Relawan</h1>

        <v-card class="pa-6 mb-6 rounded-xl border-card" elevation="0">
          <h3 class="font-weight-bold text-h5 mb-2" style="color: #19456B;">{{ report.title }}</h3>
          <p class="text-body-1 text-black mb-6" style="line-height: 1.6;">
            {{ report.description }}
          </p>
          
          <div class="d-flex align-center mb-4 text-black text-body-1">
            <v-icon start color="#11698E" size="28" class="mr-4">mdi-calendar-check-outline</v-icon>
            <div>
              <div class="font-weight-bold" style="color: #19456B;">Tanggal & Waktu</div>
              {{ report.volunteerAction ? formatDateWithTime(report.volunteerAction.scheduledDate) : 'Menunggu Jadwal' }}
            </div>
          </div>

          <div class="d-flex align-center mb-4 text-black text-body-1">
            <v-icon start color="#11698E" size="28" class="mr-4">mdi-map-marker-outline</v-icon>
            <div>
              <div class="font-weight-bold" style="color: #19456B;">Lokasi</div>
              {{ report.location }}
            </div>
          </div>

          <div class="d-flex align-center text-black text-body-1" v-if="report.volunteerAction">
            <v-icon start color="#11698E" size="28" class="mr-4">mdi-account-group-outline</v-icon>
            <div>
              <div class="font-weight-bold" style="color: #19456B;">Relawan Dibutuhkan</div>
              <span class="font-weight-bold text-teal">{{ report.volunteerAction.registeredPeople }}/{{ report.volunteerAction.requiredPeople }} Terdaftar</span>
            </div>
          </div>
        </v-card>

        <v-card class="pa-6 rounded-xl border-card" elevation="0">
          <h3 class="font-weight-bold text-h5 mb-6" style="color: #19456B; border-bottom: 2px solid #F8F1F1; padding-bottom: 12px;">Formulir Pendaftaran</h3>
          
          <v-form v-model="valid">
            <label class="font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block">Nama Lengkap *</label>
            <v-text-field
              variant="outlined"
              placeholder="Masukkan nama lengkap Anda"
              color="#11698E"
              rounded="lg"
              class="mb-2 input-form"
            ></v-text-field>

            <label class="font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block">Email *</label>
            <v-text-field
              variant="outlined"
              placeholder="contoh@email.com"
              color="#11698E"
              rounded="lg"
              class="mb-2 input-form"
            ></v-text-field>

            <label class="font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block">Nomor Telepon *</label>
            <v-text-field
              variant="outlined"
              placeholder="08xxxxxxxxx"
              color="#11698E"
              rounded="lg"
              class="mb-2 input-form"
            ></v-text-field>

            <label class="font-weight-bold text-body-2 text-grey-darken-3 mb-1 d-block">Kondisi Kesehatan / Alergi (opsional)</label>
            <p class="text-caption text-grey-darken-1 mb-2">Informasi ini membantu panitia mempersiapkan kondisi yang sesuai.</p>
            <v-text-field
              variant="outlined"
              placeholder="Contoh: Alergi debu parah, asma, dll."
              color="#11698E"
              rounded="lg"
              class="mb-2 input-form"
            ></v-text-field>

            <label class="font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block">Alasan Mengikuti Aksi (opsional)</label>
            <v-textarea
              variant="outlined"
              placeholder="Ceritakan mengapa Anda ingin ikut serta dalam aksi ini..."
              rows="3"
              color="#11698E"
              rounded="lg"
              class="mb-6 input-form"
            ></v-textarea>

            <v-sheet color="#F8F1F1" class="pa-5 rounded-xl mb-8">
              <h4 class="font-weight-bold mb-3" style="color: #19456B;">Pernyataan Komitmen & Syarat Ketentuan</h4>
              <v-checkbox
                v-model="agreement1"
                color="#16C79A"
                hide-details
                class="mb-2"
              >
                <template v-slot:label>
                  <span class="text-body-2 text-black ml-2" style="line-height: 1.5;">Saya menyatakan sehat secara fisik dan berkomitmen untuk hadir tepat waktu pada lokasi dan jadwal yang ditentukan.</span>
                </template>
              </v-checkbox>

              <v-checkbox
                v-model="agreement2"
                color="#16C79A"
                hide-details
              >
                <template v-slot:label>
                  <span class="text-body-2 text-black ml-2" style="line-height: 1.5;">Saya bersedia mengikuti seluruh rangkaian aksi relawan ini dan akan mematuhi arahan dari panitia.</span>
                </template>
              </v-checkbox>
            </v-sheet>

            <v-row>
              <v-col cols="6">
                <v-btn block variant="outlined" color="#11698E" size="large" rounded="lg" class="text-none font-weight-bold" @click="$router.back()">
                  Batal
                </v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn 
                  block 
                  :color="agreement1 && agreement2 ? '#16C79A' : 'grey-lighten-2'" 
                  size="large" 
                  rounded="lg" 
                  class="text-none font-weight-bold text-white" 
                  elevation="0"
                  :disabled="!(agreement1 && agreement2)"
                >
                  Kirim Pendaftaran
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mockReports } from '../data/mockReports' 

const route = useRoute()
const report = ref<any>(null)

const valid = ref(false)
const agreement1 = ref(false)
const agreement2 = ref(false)


onMounted(() => {
  
  const id = Number(route.query.idLaporan || route.query.idAksi)
  
  if (id) {
    report.value = mockReports.find(r => r.id === id)
  }
})


const formatDateWithTime = (date: Date | string) => {
  const d = new Date(date)
  const day = d.toLocaleDateString('id-ID', { weekday: 'long' })
  const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
  return `${day}, ${dateStr} pukul 08.00`
}
</script>

<style scoped>

* {
  font-family: 'Poppins', sans-serif !important;
}


.logo-text { color: #000000; letter-spacing: -0.5px; font-size: 25px !important; }
.nav-btn { text-transform: none !important; font-weight: 600 !important; font-size: 18px !important; color: #555555; }
.active-nav { color: #11698E !important; background-color: #F8F1F1 !important; opacity: 1 !important; }
.active-nav :deep(.v-icon) { color: #11698E !important; }
.border-b { border-bottom: 1px solid #eeeeee !important; }


.gap-4 { display: flex; gap: 16px; }
.text-teal { color: #16C79A !important; }


.border-card { 
  border: 1px solid #EAEAEA !important; 
  background-color: #FFFFFF; 
}


.input-form :deep(.v-field__outline) { 
  border-color: #EAEAEA; 
}
</style>