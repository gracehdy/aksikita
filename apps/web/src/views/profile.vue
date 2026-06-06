<template>
<v-app style="background-color:white;">
  <Navbar />

  <v-app-bar flat class="px-15 border-b" color="white" height="90" theme="light">
    <v-btn variant="text" @click="$router.back()" class="text-none font-weight-medium text-grey-darken-3" style="font-family: 'Poppins', sans-serif;">
      <v-icon start>mdi-arrow-left</v-icon> Kembali
    </v-btn>
  </v-app-bar>

  <v-main class="bg-white">
    <v-container class="px-15 py-10" fluid>
      <v-row justify="center">
        <v-col cols="12" md="11" lg="10">

          <v-card class="pa-8 mb-6 custom-card border-card" elevation="0" theme="light">
            <v-row align="center" no-gutters>
              <v-col cols="12" sm="4" class="d-flex justify-center">
                <v-avatar color="#16C79A" size="160">
                  <span class="text-white text-h3 font-weight-bold initial">{{ userData.initials }}</span>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="8" class="text-center text-sm-left">
                <div class="d-flex justify-space-between align-start">
                  <div>
                    <h2 class="user-name">{{ userData.name }}</h2>
                    <p class="user-email">{{ userData.email }}</p>
                    <p class="join-date">{{ userData.joinDate }}</p>
                  </div>
                  <v-btn color="error" variant="outlined" class="text-none font-weight-bold rounded-lg" @click="handleLogout">
                    <v-icon start>mdi-logout</v-icon> Keluar
                  </v-btn>
                </div>

                <v-row class="mt-6" justify="start">
                  <div cols="auto" class="mr-16 text-center">
                    <div class="stat-val">{{ userData.stats.completed }}</div>
                    <div class="stat-label">Aksi Selesai</div>
                  </div>
                  <div cols="auto" class="mx-16 text-center">
                    <div class="stat-val">{{ userData.stats.created }}</div>
                    <div class="stat-label">Laporan Dibuat</div>
                  </div>
                  <div  cols="auto" class="ml-16 text-center">
                    <div class="stat-val">{{ userData.stats.badges }}</div>
                    <div class="stat-label">Badge Diraih</div>
                  </div>
                </v-row>
              </v-col>
            </v-row>
          </v-card>

          <v-card class="pa-6 mb-6 custom-card border-card" elevation="0" theme="light">
            <div class="d-flex align-center mb-4">
              <v-icon color="#11698E" class="mr-2">mdi-trophy-outline</v-icon>
              <h3 class="section-title">Poin Kontribusi</h3>
            </div>
            <div class="d-flex justify-space-between mb-2 progress-text text-body-2 text-grey-darken-2">
              <span>Progress menuju level berikutnya</span>
              <span class="font-weight-bold" style="color: #19456B;">{{ userData.points }} / {{ userData.nextLevelPoints }} poin</span>
            </div>
            <v-progress-linear
              :model-value="progressPercent"
              color="#16C79A"
              height="12"
              rounded
              class="mb-6"
            ></v-progress-linear>

            <v-row class="mt-4 text-center">
              <v-col cols="6" sm="3" v-for="(item, i) in poinInfo" :key="i">
                <div class="poin-box pa-3">
                  <div class="poin-add">+{{ item.val }}</div>
                  <div class="poin-desc mt-1">{{ item.text }}</div>
                </div>
              </v-col>
            </v-row>
          </v-card>

          <v-row>
            <v-col>
              <v-card class="pa-6 mb-6 custom-card border-card h-100" elevation="0" theme="light">
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

            <v-col>
              <v-card class="pa-6 custom-card border-card h-100" elevation="0" theme="light">
                <div class="d-flex align-center mb-4">
                  <v-icon color="#11698E" class="mr-2">mdi-certificate-outline</v-icon>
                  <h3 class="section-title">Sertifikat</h3>
                </div>
                <v-list>
                  <v-list-item v-for="(cert, i) in certs" :key="i" class="cert-item pa-0 mb-3">
                    <v-list-item-content>
                      <v-list-item-title class="cert-title mb-1">{{ cert.title }}</v-list-item-title>
                      <v-list-item-subtitle class="cert-sub">
                        {{ cert.date }} • <v-chip size="small" color="#F8F1F1" text-color="#11698E" class="font-weight-bold">{{ cert.tag }}</v-chip>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <template v-slot:append>
                      <v-btn color="#16C79A" variant="text" size="small" class="font-weight-bold text-none">
                        <v-icon start>mdi-download</v-icon> Unduh
                      </v-btn>
                    </template>
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

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

const router = useRouter()

const userData = ref({
  name: '',
  email: '',
  initials: '',
  joinDate: '',
  points: 0,
  nextLevelPoints: 1000,
  stats: {
    completed: 0,
    created: 0,
    badges: 0
  }
})

const poinInfo = ref([
  { val: 50, text: 'Per aksi selesai' },
  { val: 20, text: 'Per laporan dibuat' },
  { val: 10, text: 'Per laporan disukai' },
  { val: 100, text: 'Per badge diraih' }
])

interface Badge {
  name: string
  desc?: string
  date?: string
  earned: boolean
  color?: string
  icon?: string
}

const badges = ref<Badge[]>([])

interface Cert {
  title: string
  date?: string
  tag?: string
}

const certs = ref<Cert[]>([])

function getInitials(name: string) {
  if (!name) return '';
  return name
    .trim()
    .split(' ')
    .filter((part) => part.length > 0)
    .map((part) => part[0].toUpperCase())
    .slice(0, 2)
    .join('');
}

const handleLogout = () => {
  const confirmLogout = confirm("Apakah Anda yakin ingin keluar?");
  if (confirmLogout) {
    localStorage.removeItem('jwt_token');
    router.push('/');
  }
}

const formatDate = (isoString: string) => {
  if (!isoString) return '';

  const locale = navigator.language || 'id-ID';

  return new Date(isoString).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};


const fetchProfile = async () => {
  const token = localStorage.getItem('jwt_token');

  if (!token) {
    router.push('/');
    return;
  }

  try {

      const res = await fetch('/api/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (res.ok) {
        const data = await res.json();
        if (data) {
          // Map backend UserProfileResponseDto to frontend state
          userData.value.name = data.user?.fullName || ''
          userData.value.email = data.user?.email || ''
          userData.value.initials = getInitials(data.user?.fullName || '')
          userData.value.joinDate = `Bergabung sejak ${formatDate(data.user?.createdAt) || ''}`
          userData.value.stats = {
            completed: data.stats?.totalAksiSelesai || 0,
            created: data.stats?.totalLaporanDibuat || 0,
            badges: data.stats?.totalBadgeDiraih || 0
          }
          userData.value.points = data.kontribusi?.currentPoin || 0
          userData.value.nextLevelPoints = data.kontribusi?.targetPoin || 1000

          badges.value = (data.badges || []).map((b:any) => ({
            name: b.name,
            desc: b.description || '',
            date: b.isEarned ? '' : '',
            icon: 'mdi-star',
            color: b.isEarned ? '#16C79A' : '#BDBDBD',
            earned: !!b.isEarned
          }))

          certs.value = (data.sertifikat || []).map((c:any) => ({
            title: c.title,
            date: '',
            tag: c.file || ''
          }))
        } else {
          alert('Gagal memuat data profil')
        }
    }
  } catch (error) {
    console.error("Gagal mengambil data profil:", error);
  }
}

onMounted(() => {
  fetchProfile();
})

const progressPercent = computed(() => {
  const p = userData.value.points || 0
  const t = userData.value.nextLevelPoints || 1
  return Math.round((p / t) * 100)
})
</script>

<style scoped>

* {
  font-family: 'Poppins', sans-serif !important;
}

.logo-text { color: #000000; letter-spacing: -0.5px; font-size: 25px !important; }
.nav-btn { text-transform: none !important; font-weight: 600 !important; font-size: 18px !important; color: #555555; }
.active-nav { color: #11698E !important; background-color: #F8F1F1 !important; opacity: 1 !important; }
.active-nav :deep(.v-icon) { color: #11698E !important; }

.gap-4 { display: flex; gap: 16px; }
.border-b { border-bottom: 1px solid #eeeeee !important; }
.border-card { border: 1px solid #EAEAEA !important; background-color: #FFFFFF; }

.initial { font-size: 4.5rem; letter-spacing: -2px; }
.custom-card { border-radius: 20px !important; width: 100%; }

.user-name { color: #19456B; font-weight: 700; font-size: 2.2rem; margin-bottom: 0; }
.user-email, .join-date { color: #78909C; font-size: 1rem; margin-bottom: 2px; }

.stat-val { font-size: 2rem; font-weight: 700; color: #11698E; line-height: 1.2; }
.stat-label { font-size: 0.85rem; color: #19456B; font-weight: 500; white-space: nowrap; }

.section-title { font-size: 1.1rem; font-weight: 600; color: #19456B; }

.poin-box { background-color: #F8F1F1; border-radius: 12px; border: 1px solid #EAEAEA; }
.poin-add { color: #16C79A; font-weight: 700; font-size: 1.25rem; }
.poin-desc { font-size: 0.75rem; color: #78909C; font-weight: 500;}

.badge-card { border-radius: 12px !important; border: 1px solid #EAEAEA !important; }
.badge-name { font-size: 0.9rem; font-weight: 600; color: #19456B; }
.badge-desc { font-size: 0.75rem; color: #78909C; line-height: 1.3; }
.badge-date { font-size: 0.7rem; color: #B0BEC5; margin-top: 4px; font-weight: 500;}

.cert-item { border-bottom: 1px solid #F5F5F5; padding-bottom: 12px !important; }
.cert-title { font-size: 1rem; font-weight: 600; color: #19456B; }
</style>
