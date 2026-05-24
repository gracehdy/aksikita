<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const credentials = ref({
  email: "",
  password: "",
  rememberMe: false,
});

const login = async () => {
  try {
    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: credentials.value.email,
        password: credentials.value.password,
        rememberMe: credentials.value.rememberMe,
      }),
    });

    if (res.ok) {
      const data = await res.json();
  
      const token = data.access_token || data.token; 
      
      if (token) {
        localStorage.setItem("jwt_token", token);
      }

      alert(data.message || "Login berhasil");  
      router.push("/home"); 
      
    } else {
      const error = await res.json();
      alert(error.message || "Login gagal");
    }
  } catch (err) {
    console.error(err);
    alert("Error jaringan");
  }
};

</script>

<template>
  <v-app style="background-color: #f8f1f1">
    <v-container
      class="fill-height fill-width d-flex align-center justify-center"
    >
      <v-row justify="center" align="center">
        <v-col cols="12" sm="10" md="5">
          <v-card
            class="pa-4 custom-card"
            elevation="10"
            color="#F8F1F1"
            theme="light"
            rounded="xl"
          >
            <h2 class="text-center login-title">Login</h2>

            <v-card-text>
              <v-text-field
                v-model="credentials.email"
                outlined
                dense
                label="Email"
                prepend-inner-icon="mdi-account"
                type="username"
                color="#11698E"
                class="custom-font-size"
              ></v-text-field>

              <v-text-field
                v-model="credentials.password"
                outlined
                dense
                label="Password"
                type="password"
                prepend-inner-icon="mdi-lock"
                color="#11698E"
                class="custom-font-size"
                @keyup.enter="login"
              ></v-text-field>
            </v-card-text>

            <v-col cols="12">
              <v-row>
                <v-col cols="12" class="pt-0">
                  <v-btn class="login-btn" block @click="login"> Login </v-btn>
                </v-col>

                <v-col class="text-center footer-text">
                  <p>
                    Lupa Password?
                    <router-link to="/forgotPassword" class="login-link">
                      Klik Di Sini
                    </router-link>
                  </p>
                  <p>
                    Belum Punya Akun?
                    <router-link to="/registrasi" class="login-link">
                      Daftar Sekarang!
                    </router-link>
                  </p>
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
  font-family: "Poppins", sans-serif !important;
  font-size: 14px;
}

.custom-card {
  border-radius: 12px !important;
}

.login-title {
  font-family: "Poppins", sans-serif !important;
  color: #19456b;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem;
}

.login-btn {
  background-color: #11698e !important;
  color: white !important;
  font-family: "Poppins", sans-serif !important;
  font-weight: 600;
  font-size: 13px;
  text-transform: none;
}

.footer-text p {
  font-family: "Poppins", sans-serif !important;
  color: #19456b;
  font-size: 13px;
}

.login-link {
  color: #16c79a !important;
  font-weight: 600;
  text-decoration: none;
}

:deep(.v-label) {
  font-family: "Poppins", sans-serif !important;
  font-size: 13px !important;
}

:deep(input) {
  font-family: "Poppins", sans-serif !important;
  font-size: 14px !important;
}

:deep(.v-application) {
  background-color: #f8f1f1 !important;
}
</style>
