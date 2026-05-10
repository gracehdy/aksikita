<template>
<v-app style="background-color:white;">
  <!-- Navbar -->
  <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
    <div class="d-flex align-center">
      <v-sheet
        color="#11698E"
        rounded="lg"
        width="36"
        height="36"
        class="d-flex align-center justify-center mr-3"
      >
        <v-icon color="white" size="30">mdi-account-group</v-icon>
      </v-sheet>
      <span class="text-h4 font-weight-bold logo-text">AksiKita</span>
    </div>

    <v-spacer></v-spacer>
    <div class="d-flex align-center gap-4">
      <v-btn variant="text" 
      class="nav-btn mr-2"
      to="/Home"
      >
        <v-icon start >mdi-home-variant-outline</v-icon>
        Beranda
      </v-btn>

      <v-btn
        variant="flat"
        color="#F8F1F1"
        class="nav-btn active-nav mr-2"
        to ="/Komunitas"
        rounded="xl">
        <v-icon start>mdi-account-group-outline</v-icon>
        Aksi Komunitas
      </v-btn>

      <v-btn variant="text" class="nav-btn" to="/Profile">
        <v-icon start>mdi-account-outline</v-icon>
        Akun
      </v-btn>
    </div>
  </v-app-bar>
</v-app>
</template>

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
</style>