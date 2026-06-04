<template>
  <v-app style="background-color: #FAFAFA;" theme="light">
    <Navbar />

    <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
      <v-btn variant="text" @click="$router.back()" class="text-none font-weight-medium text-grey-darken-3" style="font-family: 'Poppins', sans-serif;">
        <v-icon start>mdi-arrow-left</v-icon> Kembali
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="report-wrapper" fluid>
        <div class="d-flex align-center justify-center mb-8">
          <h1 class="page-title text-h4 font-weight-bold" style="color: #19456B;">Buat Laporan</h1>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="pa-8 custom-card border-card" elevation="0">
              <v-form v-model="isFormValid">

                <div class="input-group">
                  <label class="input-label">Judul Laporan *</label>
                  <v-text-field
                    v-model="form.title"
                    variant="outlined"
                    placeholder="Contoh: Sampah menumpuk di taman kota"
                    color="#11698E"
                    class="mt-2 custom-input"
                    rounded="lg"
                  ></v-text-field>
                </div>

                <div class="input-group mt-2">
                  <label class="input-label">Kategori *</label>
                  <v-select
                    v-model="form.category"
                    variant="outlined"
                    :items="['Lingkungan', 'Sosial', 'Infrastruktur', 'Keamanan']"
                    placeholder="Pilih Kategori"
                    color="#11698E"
                    class="mt-2 custom-input"
                    rounded="lg"
                  ></v-select>
                </div>

                <div class="input-group mt-2">
                  <label class="input-label">Lokasi *</label>
                  <v-text-field
                    v-model="form.location"
                    variant="outlined"
                    placeholder="Contoh: Taman Menteng, Jakarta Pusat"
                    prepend-inner-icon="mdi-map-marker"
                    color="#11698E"
                    class="mt-2 custom-input"
                    rounded="lg"
                  ></v-text-field>
                </div>

                <div class="input-group mt-2">
                  <label class="input-label">Deskripsi *</label>
                  <v-textarea
                    v-model="form.description"
                    variant="outlined"
                    placeholder="Jelaskan masalah yang Anda temukan secara detail..."
                    rows="4"
                    color="#11698E"
                    class="mt-2 custom-input"
                    rounded="lg"
                  ></v-textarea>
                </div>

                <div class="input-group mt-2">
                  <label class="input-label">Foto (opsional)</label>
                  <div class="upload-area mt-2 d-flex flex-column align-center justify-center">
                    <v-icon size="40" color="#11698E">mdi-cloud-upload-outline</v-icon>
                    <span class="upload-text mt-2">{{ fileName || 'Klik untuk upload foto' }}</span>
                    <span class="upload-subtext" v-if="!fileName">PNG, JPG hingga 10MB</span>
                    <input type="file" class="file-input" accept="image/*" @change="handleFileUpload" />
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
                      @click="submitReport"
                    >
                      Kirim Laporan
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

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CreateReportInterface } from '@aksikita/types'
import Navbar from '../components/Navbar.vue'

const router = useRouter()

const isFormValid = ref(false)
const isRelawan = ref(false)
const fileName = ref('')
const fileObj = ref(null)

const form = ref({
  title: '',
  category: '',
  location: '',
  description: ''
})

const volunteerForm = ref({
  date: '',
  requiredPeople: '',
  meetingPoint: '',
  additionalInfo: ''
})


const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    fileName.value = file.name
    fileObj.value = file
  }
}

const submitReport = async () => {

  if (!form.value.title || !form.value.category || !form.value.location || !form.value.description) {
    alert("Mohon lengkapi semua kolom wajib (Judul, Kategori, Lokasi, Deskripsi)!")
    return
  }

  const token = localStorage.getItem('jwt_token')
  if (!token) {
    alert("Anda harus login terlebih dahulu untuk membuat laporan.")
    router.push('/')
    return
  }

  try {
    const payloadData: CreateReportInterface = {
      category: (!form.value.category || form.value.category === '') ? 'Lainnya' : form.value.category ,
      description: form.value.description,
      location: form.value.location,
      title: form.value.title,
    };

    const res = await fetch('/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payloadData)
    })

    if (res.ok) {
      const data = await res.json();
      if (data.id !== '') {
        alert("Laporan berhasil dikirim!");
        router.push({
          name: 'detailLaporan',
          params: { id: data.id }
        })
      }
    } else if (res.status === 401) {
      alert("Sesi login Anda tidak valid. Silakan login ulang.")
      router.push('/')
    } else {
      const error = await res.json()
      alert(error.message || "Gagal mengirim laporan")
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


.upload-area {
  border: 2px dashed #CFD8DC;
  border-radius: 12px;
  padding: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  background-color: #FAFAFA;
}
.upload-area:hover {
  background-color: #F0F4F7;
  border-color: #11698E;
}
.file-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  top: 0;
  left: 0;
}

:deep(.v-field__outline) { border-color: #EAEAEA !important; }
:deep(.v-text-field input), :deep(.v-textarea textarea) { font-size: 0.95rem !important; color: #1a202c;}
:deep(.v-label) { font-size: 0.95rem !important; }
</style>
