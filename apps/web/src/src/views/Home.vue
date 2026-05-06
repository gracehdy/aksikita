<template>
<v-app style="background-color: #F8F1F1;">
  <v-container class="fill-height fill-width d-flex align-center justify-center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="5">
        <v-card class="pa-4 custom-card" elevation="10" color="#F8F1F1" theme="light" rounded="xl">
            <h2 class="text-center home-title">Ini Home Page</h2>
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

.home-title {
  font-family: 'Poppins', sans-serif !important;
  color: #19456B; 
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.5rem; 
}

.home-btn {
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