<template>
  <v-app style="background-color: white;" theme="light">
    <!-- Navbar -->
    <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
      <div class="d-flex align-center">
        <v-sheet color="#11698E" rounded="lg" width="36" height="36" class="d-flex align-center justify-center mr-3">
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

    <v-main>
      <v-container class="report-wrapper" fluid>
        <div class="d-flex align-center justify-center mb-8">
          <v-spacer></v-spacer>
          <h1 class="page-title">Buat Laporan</h1>
          <v-spacer></v-spacer>
          <div style="width: 50px"></div> 
        </div>

        <!-- Form Card -->
        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="pa-6 custom-card" elevation="2">
              <v-form>
                <div class="input-group">
                  <label class="input-label">Judul Laporan</label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Contoh: Sampah menumpuk di taman kota"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-text-field>
                </div>

                <div class="input-group mt-4">
                  <label class="input-label">Kategori</label>
                  <v-select
                    outlined
                    dense
                    :items="['Lingkungan', 'Sosial', 'Infrastruktur', 'Keamanan']"
                    placeholder="Pilih Kategori"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-select>
                </div>

                <div class="input-group mt-4">
                  <label class="input-label">Lokasi</label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Contoh: Taman Menteng, Jakarta Pusat"
                    prepend-inner-icon="mdi-map-marker"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-text-field>
                </div>

                <div class="input-group mt-4">
                  <label class="input-label">Deskripsi</label>
                  <v-textarea
                    outlined
                    dense 
                    placeholder="Jelaskan masalah yang Anda temukan..."
                    rows="4"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-textarea>
                </div>

                <div class="input-group mt-4">
                  <label class="input-label">Foto (opsional)</label>
                  <div class="upload-area mt-1 d-flex flex-column align-center justify-center">
                    <v-icon size="40" color="#11698E">mdi-cloud-upload-outline</v-icon>
                    <span class="upload-text mt-2">Klik untuk upload foto</span>
                    <span class="upload-subtext">PNG, JPG hingga 10MB</span>
                    <input type="file" class="file-input" accept="image/*" />
                  </div>
                </div>


                <v-checkbox
                  v-model="isRelawan"
                  label="Ubah menjadi aksi relawan"
                  color="#16C79A"
                  class="mt-6 custom-checkbox"
                  hide-details
                ></v-checkbox>

                <div v-if="isRelawan" class="volunteer-info-section pa-4 mt-4 mb-2">
                  <h3 class="volunteer-title mb-4">Informasi Aksi Relawan</h3>

                  <label class="input-label">Tanggal & Waktu Aksi</label>
                  <v-text-field
                    outlined
                    dense
                    type="datetime-local"
                    placeholder="dd/mm/yyyy --:--"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-text-field>

                  <label class="input-label">Jumlah Relawan yang Dibutuhkan</label>
                  <v-text-field
                    outlined
                    dense
                    type="number"
                    value="0"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-text-field>

                  <label class="input-label">Tempat Pelaksanaan (opsional jika sama dengan lokasi laporan)</label>
                  <v-text-field
                    outlined
                    dense
                    placeholder="Lokasi aksi relawan"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-text-field>

                  <label class="input-label">Informasi Tambahan (opsional)</label>
                  <v-textarea
                    outlined
                    placeholder="Contoh: Bawa peralatan sendiri, titik kumpul di gerbang utama, dll."
                    rows="3"
                    color="#11698E"
                    class="mt-1 custom-input"
                  ></v-textarea>
                </div>

                <v-row class="mt-6">
                  <v-col cols="6">
                    <v-btn block outlined color="#19456B" class="action-btn-cancel" @click="$router.back()">
                        Batal
                      </v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn block depressed color="#16C79A" class="action-btn-submit disabled-btn">
                        Kirim 
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

<script>
export default {
  name: 'BuatLaporan',
  data() {
    return {
      isRelawan: false,
    };
  },
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

.app-brand {
  font-weight: 600;
  color: #19456B;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
}

.nav-item {
  text-transform: uppercase; 
  color: #19456B !important;
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.report-wrapper {
  font-family: 'Poppins', sans-serif !important;
  background-color: #F8F1F1;
  min-height: 100vh;
  padding-top: 20px;
}

.custom-card {
  border-radius: 12px !important;
}

.header-title {
  font-weight: 600;
  color: #19456B;
  font-size: 1.25rem;
}

.back-text {
  font-size: 0.9rem;
  color: #19456B;
  font-weight: 500;
}

.input-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #19456B;
  display: block;
  margin-top: 10px;
}

.upload-area {
  border: 2px dashed #CFD8DC;
  border-radius: 8px;
  padding: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
}

.upload-area:hover {
  background-color: #f0f4f7;
  border-color: #11698E;
}

.file-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.upload-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #19456B;
}

.upload-subtext {
  font-size: 0.75rem;
  color: #90A4AE;
}

.action-btn-cancel {
  text-transform: none;
  font-weight: 600;
  border-radius: 8px;
}

.action-btn-submit {
  text-transform: none;
  font-weight: 600;
  border-radius: 8px;
}

:deep(.v-text-field input),
:deep(.v-select__selection),
:deep(.v-label),
:deep(.v-btn__content) {
  font-family: 'Poppins', sans-serif !important;
  font-size: 0.9rem !important;
}

:deep(.v-input--checkbox .v-label) {
  font-size: 0.85rem !important;
  color: #19456B !important;
}

</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { mockReports } from '../data/mockReports'

const router = useRouter()

const reports = ref(mockReports)
const filterCategory = ref('all')

const categories = ['all', 'Lingkungan', 'Infrastruktur', 'Sosial', 'Kesehatan']

const filteredReports = computed(() => {
  return filterCategory.value === 'all'
    ? reports.value
    : reports.value.filter(r => r.category === filterCategory.value)
})

const goToCreate = () => {
  router.push('/buat-laporan')
}

const goToDetail = (report : { id: number }) => {
  router.push({
    name: 'Aksi', 
    params: { id: report.id } 
  });
}

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('id-ID')
}
</script>

