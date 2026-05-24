<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const form = ref({
  newPassword: '',
  confirmPassword: ''
})

const handleResetPassword = async () => {
  if (form.value.newPassword !== form.value.confirmPassword) {
    alert('Konfirmasi password tidak cocok!')
    return
  }
  const token = route.query.token

  if (!token) {
    alert('Token reset password tidak ditemukan. Silakan minta link reset baru.')
    return
  }

  try {
    const res = await fetch('http://localhost:3000/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: token,
        newPassword: form.value.newPassword
      })
    })

    if (res.ok) {
      const data = await res.json()
      alert(data.message || 'Password berhasil diubah! Silakan login.')
      router.push('/')
    } else {
      const error = await res.json()
      alert(error.message || 'Gagal mengubah password')
    }
  } catch (err) {
    console.error(err)
    alert('Terjadi kesalahan jaringan')
  }
}
</script>

<template>
<v-app style="background-color: #F8F1F1;">
  <v-container class="fill-height fill-width d-flex align-center justify-center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="5">
        <v-card class="pa-4 custom-card" elevation="10" color="#F8F1F1" theme="light" rounded="xl">
            <h2 class="text-center rp-title">Reset Password</h2>

          <v-card-text>
            <v-text-field
              v-model="form.newPassword"
              outlined
              dense
              label="Password Baru" 
              prepend-inner-icon="mdi-account"
              type="password"
              color="#11698E"
              class="custom-font-size"
            ></v-text-field>

            <v-text-field 
              v-model="form.confirmPassword"
              outlined
              dense
              label="Konfirmasi Password Baru" 
              type="password"
              prepend-inner-icon="mdi-lock"
              color="#11698E"
              class="custom-font-size"
            ></v-text-field>
          </v-card-text>

          <v-col cols="12">
                <v-row>
                  <v-col cols="12" class="pt-0">
                    <v-btn class="rp-btn" block @click="handleResetPassword">
                      Reset Password
                    </v-btn>
                  </v-col>
                </v-row>
            </v-col>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-app>
</template>


<style scoped> 
.login-wrapper {
  font-family: 'Poppins', sans-serif !important;
  font-size: 14px; 
}

.custom-card {
  border-radius: 12px !important;
}

.rp-title {
  font-family: 'Poppins', sans-serif !important;
  color: #19456B; 
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem; 
}

.rp-btn {
  background-color: #11698E !important; 
  color: white !important;
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600;
  font-size: 13px;
  text-transform: none;
}

.footer-text p {
  font-family: 'Poppins', sans-serif !important;
  color: #19456B;
  font-size: 13px;
}

.login-link {
  color: #16C79A !important;
  font-weight: 600;
  text-decoration: none;
}

:deep(.v-label) {
  font-family: 'Poppins', sans-serif !important;
  font-size: 13px !important; 
}

:deep(input) {
  font-family: 'Poppins', sans-serif !important;
  font-size: 14px !important; 
}

:deep(.v-application) {
  background-color: #F8F1F1 !important;
}

</style>