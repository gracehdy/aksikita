<template>
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
        <v-btn
        variant="flat"
        class="nav-btn active-nav mr-2"
        to="/home"
        rounded="xl"
        >
        <v-icon start>mdi-home-variant-outline</v-icon>
        Beranda
        </v-btn>

        <v-btn
        variant="text"
        class="nav-btn mr-2"
        to="/komunitas"
        >
        <v-icon start>mdi-account-group-outline</v-icon>
        Aksi Komunitas
        </v-btn>

        <v-btn variant="text" class="nav-btn" to="/profile">
        <v-icon start>mdi-account-outline</v-icon>
        Akun
        </v-btn>
    </div>
    </v-app-bar>
</template>
