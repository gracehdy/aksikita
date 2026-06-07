<template>
  <v-app style="background-color: #fafafa" theme="light">
    <Navbar />

    <v-app-bar
      flat
      class="px-15 border-b"
      color="white"
      height="90"
      theme="light"
    >
      <v-btn
        variant="text"
        @click="$router.back()"
        class="text-none font-weight-medium text-grey-darken-3 poppins-font"
      >
        <v-icon start>mdi-arrow-left</v-icon> Kembali
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="report-wrapper" fluid>
        <div class="d-flex align-center justify-center mb-8">
          <h1
            class="page-title text-h4 font-weight-bold"
            style="color: #19456b"
          >
            Buat Aksi Relawan
          </h1>
        </div>

        <v-row justify="center">
          <v-col cols="12" md="8" lg="6">
            <v-card class="pa-8 custom-card border-card" elevation="0">
              <v-form v-model="isFormValid">
                <div
                  class="volunteer-info-section pa-5 rounded-xl"
                  style="background-color: #f8f1f1"
                >
                  <h3 class="volunteer-title mb-4" style="color: #19456b">
                    Informasi Aksi Relawan
                  </h3>

                  <div class="input-group">
                    <label class="input-label">Tanggal & Waktu Aksi</label>
                    <v-text-field
                      v-model="volunteerForm.date"
                      variant="outlined"
                      type="datetime-local"
                      color="#11698E"
                      class="mt-2 custom-input bg-white"
                      rounded="lg"
                      hide-details="auto"
                    ></v-text-field>
                  </div>

                  <div class="input-group mt-4">
                    <label class="input-label"
                      >Jumlah Relawan yang Dibutuhkan</label
                    >
                    <v-text-field
                      v-model="volunteerForm.requiredPeople"
                      variant="outlined"
                      type="number"
                      min="1"
                      placeholder="Contoh: 15"
                      color="#11698E"
                      class="mt-2 custom-input bg-white"
                      rounded="lg"
                      hide-details="auto"
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
                      hide-details="auto"
                    ></v-text-field>
                  </div>

                  <div class="input-group mt-4">
                    <label class="input-label">Peralatan / Info Tambahan</label>
                    <v-textarea
                      v-model="volunteerForm.additionalInfo"
                      variant="outlined"
                      placeholder="Contoh: Bawa sarung tangan dan kantong sampah sendiri."
                      rows="3"
                      hide-details="auto"
                      color="#11698E"
                      class="mt-2 custom-input bg-white"
                      rounded="lg"
                    ></v-textarea>
                  </div>
                </div>

                <v-row class="mt-8">
                  <v-col cols="6">
                    <v-btn
                      block
                      variant="outlined"
                      color="#19456B"
                      size="large"
                      class="text-none font-weight-bold rounded-lg"
                      @click="$router.back()"
                    >
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

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Navbar from "../components/Navbar.vue";

const router = useRouter();
const route = useRoute();

const isFormValid = ref(false);

interface CreateActionDto {
  date: Date | string;
  requiredPeople: number | string;
  meetingPoint: string;
  additionalInfo: string;
}

const volunteerForm = ref({
  date: "",
  requiredPeople: "",
  meetingPoint: "",
  additionalInfo: "",
});

const reportId = computed(() => {
  const param = route.params.reportId;
  return Array.isArray(param) ? param[0] : param;
});

const submitAction = async () => {
  const { date, requiredPeople, meetingPoint, additionalInfo } =
    volunteerForm.value;

  if (!date || !requiredPeople || !meetingPoint || !additionalInfo) {
    alert(
      "Mohon lengkapi semua kolom wajib aksi (Tanggal, Jumlah Relawan, Peralatan)!",
    );
    return;
  }

  if (Number(requiredPeople) <= 0) {
    alert("Jumlah relawan harus lebih dari 0!");
    return;
  }

  const token = localStorage.getItem("jwt_token");
  if (!token) {
    alert("Anda harus login terlebih dahulu untuk membuat aksi relawan.");
    router.push("/");
    return;
  }

  const convertToISO = (val: string) => {
    const dateObj = new Date(val);
    return dateObj.toISOString();
  };

  try {
    const payloadData = {
      date: convertToISO(volunteerForm.value.date),
      requiredPeople: volunteerForm.value.requiredPeople,
      meetingPoint: volunteerForm.value.meetingPoint,
      additionalInfo: volunteerForm.value.additionalInfo,
      reportId: reportId.value,
    };

    const res = await fetch(`/api/actions/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payloadData),
    });

    if (res.ok) {
      alert("Aksi relawan berhasil dibuka!");
      router.push({
        name: "detailLaporan",
        params: { id: reportId.value },
      });
    } else if (res.status === 401) {
      alert("Sesi login Anda tidak valid. Silakan login ulang.");
      router.push("/");
    } else {
      const error = await res.json();
      alert(error.message || "Gagal membuat aksi relawan");
    }
  } catch (err) {
    console.error(err);
    alert("Terjadi kesalahan jaringan.");
  }
};
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif !important;
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
  color: #11698e !important;
  background-color: #f8f1f1 !important;
  opacity: 1 !important;
}

.gap-4 {
  display: flex;
  gap: 16px;
}
.border-b {
  border-bottom: 1px solid #eeeeee !important;
}
.border-card {
  border: 1px solid #eaeaea !important;
  background-color: #ffffff;
}

.custom-input :deep(.v-field--variant-outlined) {
  border-radius: 12px !important;
  background-color: white !important;
}

.custom-input :deep(.v-field__outline) {
  --v-field-border-opacity: 0.3 !important;
}

.custom-input :deep(.v-field:hover .v-field__outline) {
  --v-field-border-opacity: 1 !important;
  color: #11698e !important;
}

.input-group {
  margin-bottom: 20px;
}

.input-label {
  margin-bottom: 8px !important;
  font-size: 0.95rem !important;
}

.report-wrapper {
  background-color: #fafafa;
  min-height: 100vh;
  padding-bottom: 50px;
}
:deep(.v-field__outline) {
  border-color: #eaeaea !important;
}
:deep(.v-text-field input),
:deep(.v-textarea textarea) {
  font-size: 0.95rem !important;
  color: #1a202c;
}
:deep(.v-label) {
  font-size: 0.95rem !important;
}
</style>