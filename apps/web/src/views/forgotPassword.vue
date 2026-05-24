<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const isLoading = ref(false)

const handleForgotPassword = async () => {
  if (!email.value.trim()) {
    alert('Mohon masukkan email Anda terlebih dahulu!')
    return
  }

  isLoading.value = true
  try {
    const res = await fetch('http://localhost:3000/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value })
    })

    if (res.ok) {
      const data = await res.json()
      alert(data.message || 'Link reset password telah dikirim ke email Anda. Silakan periksa kotak masuk!')
      router.push('/')
    } else {
      const error = await res.json()
      alert(error.message || 'Gagal memproses permintaan reset password')
    }
  } catch (err) {
    console.error(err)
    alert('Terjadi kesalahan jaringan')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
<v-app style="background-color: #F8F1F1;">
  <v-container class="fill-height fill-width d-flex align-center justify-center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="5">
        <v-card class="pa-4 custom-card" elevation="10" color="#F8F1F1" theme="light" rounded="xl">
            <h2 class="text-center fp-title">Lupa Password</h2>

          <v-card-text>
            <v-text-field
              outlined
              dense
              label="Email" 
              prepend-inner-icon="mdi-email"
              type="email"
              color="#11698E"
              class="custom-font-size"
              :disabled="isLoading"
              @keyup.enter="handleForgotPassword"
            ></v-text-field>

          <v-col cols="12">
                <v-row>
                  <v-col cols="12" class="pt-0">
                  <v-btn 
                    class="fp-btn" 
                    block 
                    :loading="isLoading"
                    :disabled="isLoading"
                    @click="handleForgotPassword"
                  >
                    Kirim Link Reset Password
                  </v-btn>
                </v-col>

                  <v-col class="text-center footer-text">
                    <p>
                      Ingat Password?
                      <router-link to="/" class="login-link">
                        Login
                      </router-link>
                    </p>
                  </v-col>
                </v-row>
              </v-col>  
          </v-card-text>
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

.fp-title {
  font-family: 'Poppins', sans-serif !important;
  color: #19456B; 
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem; 
}

.fp-btn {
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