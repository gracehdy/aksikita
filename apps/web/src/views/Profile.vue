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
         variant="text" class="nav-btn" to="/Komunitas">
        <v-icon start>mdi-account-group-outline</v-icon>
        Aksi Komunitas
      </v-btn>

      <v-btn
        variant="flat"
        color="#F8F1F1"
        class="nav-btn active-nav mr-2"
        to ="/Profile"
        rounded="xl"
      >
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

     <!-- Profile Content -->
    <v-main class="bg-white">
      <v-container class="px-15 py-10" fluid>
        <v-row justify="center">
          <v-col cols="12" md="11" lg="10">
            
            <!-- Profile Card -->
            <v-card class="pa-8 mb-6 custom-card" elevation="1" theme="light" >
              <v-row align="center" no-gutters>
                <v-col cols="12" sm="4" class="d-flex justify-center">
                  <v-avatar color="#16C79A" size="160">
                    <span class="text-white text-h3 font-weight-bold initial">AM</span>
                  </v-avatar>
                </v-col>
                <v-col cols="12" sm="6" class="text-center text-sm-left">
                  <h2 class="user-name">Andi Maulana</h2>
                  <p class="user-email">andi.maulana@gmail.com</p>
                  <p class="join-date">Bergabung sejak Januari 2026</p>
                  
                  <v-row class="mt-6" justify="start">
                    <div cols="auto" class="mr-16 text-center">
                      <div class="stat-val">12</div>
                      <div class="stat-label">Aksi Selesai</div>
                    </div>
                    <div cols="auto" class="mx-16 text-center">
                      <div class="stat-val">5</div>
                      <div class="stat-label">Laporan Dibuat</div>
                    </div>
                    <div  cols="auto" class="ml-16 text-center">
                      <div class="stat-val">3</div>
                      <div class="stat-label">Badge Diraih</div>
                    </div>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>

            <!-- 2. Poin Kontribusi -->
            <v-card class="pa-6 mb-6 custom-card" elevation="1" theme="light">
              <div class="d-flex align-center mb-4">
                <v-icon color="#11698E" class="mr-2">mdi-trophy-outline</v-icon>
                <h3 class="section-title">Poin Kontribusi</h3>
              </div>
              <div class="d-flex justify-space-between mb-2 progress-text">
                <span>Progress menuju level berikutnya</span>
                <span class="font-weight-bold">650 / 1000 poin</span>
              </div>
              <v-progress-linear
                model-value="65"
                color="#16C79A"
                height="12"
                rounded
                class="mb-6"
              ></v-progress-linear>
              
              <v-row class="mt-4 text-center">
                <v-col cols="6" sm="3" v-for="(item, i) in poinInfo" :key="i">
                  <div class="poin-box pa-2 ">
                    <div class="poin-add">+{{ item.val }}</div>
                    <div class="poin-desc">{{ item.text }}</div>
                  </div>
                </v-col>
              </v-row>
            </v-card>

            <!-- 3. Badge & Sertifikat (Side by Side) -->
            <v-row>
              <!-- Badge Section -->
              <v-col>
                <v-card class="pa-6 mb-6 custom-card" elevation="1" theme="light">
                  <div class="d-flex align-center mb-4">
                    <v-icon color="#11698E" class="mr-2">mdi-medal-outline</v-icon>
                    <h3 class="section-title">Badge Pencapaian</h3>
                  </div>
                  <v-row>
                    <v-col cols="12" sm="6" v-for="(badge, i) in badges" :key="i">
                      <v-card variant="flat" class="pa-3 badge-card d-flex align-center" :disabled="!badge.earned">
                        <v-avatar :color="badge.earned ? badge.color : '#E0E0E0'" size="50" class="mr-4">
                          <v-icon color="white">{{ badge.icon }}</v-icon>
                        </v-avatar>
                        <div>
                          <div class="badge-name">{{ badge.name }}</div>
                          <div class="badge-desc">{{ badge.desc }}</div>
                          <div class="badge-date">{{ badge.earned ? 'Diraih ' + badge.date : 'Belum diraih' }}</div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <!-- Certificate Section -->
              <v-col>
                <v-card class="pa-6 custom-card" elevation="1" theme="light">
                  <div class="d-flex align-center mb-4">
                    <v-icon color="#11698E" class="mr-2">mdi-certificate-outline</v-icon>
                    <h3 class="section-title">Sertifikat</h3>
                  </div>
                  <v-list>
                    <v-list-item v-for="(cert, i) in certs" :key="i" class="cert-item pa-0 mb-3">
                        <v-list-item-content>
                          <v-list-item-title class="cert-title">{{ cert.title }}</v-list-item-title>
                          <v-list-item-subtitle class="cert-sub">
                            {{ cert.date }} • <v-chip x-small color="#19456B">{{ cert.tag }}</v-chip>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      <v-list-item-action>
                        <v-btn color="#16C79A" variant="text" size="small">
                          <v-icon>mdi-download</v-icon> Unduh
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  
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

.initial {
  font-size: 4.5rem; 
  letter-spacing: -2px;
}

.profile-wrapper { 
    background-color: #F8F1F1; 
    min-height: 100vh; 
}
.custom-card { 
    border-radius: 20px !important; 
    width: 100%;
}
.user-name { 
    color: #19456B; 
    font-weight: 700; 
    font-size: 2.2rem;
    margin-bottom: 0; 
}
.user-email, .join-date { 
    color: #78909C; 
    font-size: 1rem; 
    margin-bottom: 2px; 
}

.stat-val { 
    font-size: 2rem; 
    font-weight: 600; 
    color: #11698E;
    line-height: 1.2;
}
.stat-label { 
    font-size: 0.75rem; 
    color: #19456B;
    font-weight: 500;
    white-space: nowrap; 
}

.section-title { 
    font-size: 1rem; 
    font-weight: 600; 
    color: #19456B; 
}
.small-text { 
    font-size: 0.8rem; 
    color: #546E7A; 
}

.poin-box { 
    background-color: #FAFAFA; 
    border-radius: 8px; 
}
.poin-add { 
    color: #16C79A; 
    font-weight: 600; 
    font-size: 1.1rem; 
}
.poin-desc { 
    font-size: 0.65rem; 
    color: #78909C; 
}

.badge-card { 
    border-radius: 8px !important; 
    border: 1px solid #ECEFF1 !important; 
}
.badge-name { 
    font-size: 0.85rem; 
    font-weight: 600; 
    color: #19456B; 
}
.badge-desc { 
    font-size: 0.7rem; 
    color: #78909C; 
    line-height: 1.2; 
}
.badge-date { 
    font-size: 0.65rem; 
    color: #B0BEC5; 
    margin-top: 4px; 
}

.cert-item { 
    border-bottom: 1px solid #F5F5F5; 
}
.cert-title { 
    font-size: 0.9rem; 
    font-weight: 500; 
    color: #19456B; 
}
.cert-sub { 
    font-size: 0.75rem !important; 
    color: #19456B !important; 
}

.app-brand { 
    font-weight: 600; 
    color: #19456B; 
    font-size: 1.2rem; 
}
.nav-item { 
    color: #19456B !important; 
    font-weight: 600; 
    font-size: 0.85rem; 
}
.navbar-border { 
    border-bottom: 1px solid #E0E0E0 !important; 
}

</style>

<script>
export default {
  data: () => ({
    poinInfo: [
      { val: 50, text: 'Per aksi selesai' },
      { val: 20, text: 'Per laporan dibuat' },
      { val: 10, text: 'Per laporan disukai' },
      { val: 100, text: 'Per badge diraih' }
    ],
    badges: [
      { name: 'Aksi Pertama', desc: 'Menyelesaikan aksi relawan pertama', date: '15/4/2026', icon: 'mdi-star', color: '#19456B', earned: true },
      { name: 'Kontributor Aktif', desc: 'Mengikuti 5+ aksi dalam sebulan', date: '20/4/2026', icon: 'mdi-trending-up', color: '#11698E', earned: true },
      { name: 'Spesialis Lingkungan', desc: 'Mengikuti 10 aksi kategori Lingkungan', date: '25/4/2026', icon: 'mdi-leaf', color: '#16C79A', earned: true },
      { name: 'Perintis Aksi', desc: 'Membuat 5 aksi relawan', date: '', icon: 'mdi-account-group', color: '#BDBDBD', earned: false }
    ],
    certs: [
      { title: 'Bersih-Bersih Taman Menteng', date: '20/4/2026', tag: 'Lingkungan' },
      { title: 'Donor Darah Komunitas', date: '15/4/2026', tag: 'Kesehatan' }
    ]
  })
}
</script>