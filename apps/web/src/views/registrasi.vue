<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  fullName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
})

const register = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Konfirmasi password tidak cocok')
    return
  }

  try {
    const res = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        full_name: form.value.fullName,
        email: form.value.email,
        username: form.value.username,
        password: form.value.password,
        confirmPassword: form.value.confirmPassword
      })
    })

   if (res.ok) {
      const data = await res.json()
      const token = data.access_token || data.token; 
      
      if (token) {
        localStorage.setItem("jwt_token", token);
        alert(data.message || 'Registrasi berhasil! Anda otomatis masuk.');
        router.push('/Home') 
      } else {

        alert('Registrasi berhasil! Silakan login.');
        router.push('/')
      }

    } else {
      const error = await res.json()
      alert(error.message || 'Registrasi gagal')
    }
  } catch (err) {
    console.error(err)
    alert('Terjadi kesalahan jaringan')
  }
}
</script>

<template>
<v-app style="background-color: #F8F1F1;">
  <v-container class="register-wrapper" fluid>
    <v-layout class="fill-height fill-width align-center justify-center"  style="margin-top: 5px">
      <v-flex xs12 sm8 md6>
        <v-card class="pa-4 custom-card" elevation="3" color="#F8F1F1" theme="light" rounded="xl">
          <v-col>
            <h2 class="text-center register-title">Register</h2>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="form.fullName"
                  outlined
                  dense
                  label="Nama Lengkap"
                  type="text"
                  color="#11698E"
                  class="custom-font-size"
                ></v-text-field>

                <v-text-field
                  v-model="form.email"
                  outlined
                  dense
                  label="Email"
                  type="email"
                  color="#11698E"
                  class="custom-font-size"
                ></v-text-field>

                <v-text-field
                  v-model="form.username"
                  outlined
                  dense
                  label="Username"
                  type="text"
                  color="#11698E"
                  class="custom-font-size"
                ></v-text-field>

                <v-text-field
                  v-model="form.password"
                  outlined
                  dense
                  label="Password"
                  type="password"
                  color="#11698E"
                  class="custom-font-size"
                ></v-text-field>

                <v-text-field
                  outlined
                  dense
                  label="Konfirmasi Password"
                  type="password"
                  color="#11698E"
                  class="custom-font-size"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-row>
                  <v-col cols="12" class="pt-0">
                    <v-btn class="register-btn" block @click="register">
                      Daftar
                    </v-btn>
                  </v-col>

                  <v-col class="text-center footer-text">
                    <p>
                      Sudah punya akun?
                      <router-link to="/" class="login-link">Login</router-link>
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.register-wrapper {
  font-family: 'Poppins', sans-serif !important;
  font-size: 14px;
}

.custom-card {
  border-radius: 12px !important;
}

.register-title {
  font-family: 'Poppins', sans-serif !important;
  color: #19456B;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem;
}

.register-btn {
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
