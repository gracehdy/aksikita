import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
const router = useRouter();
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
});
const poinInfo = ref([
    { val: 50, text: 'Per aksi selesai' },
    { val: 20, text: 'Per laporan dibuat' },
    { val: 10, text: 'Per laporan disukai' },
    { val: 100, text: 'Per badge diraih' }
]);
const badges = ref([]);
const certs = ref([]);
function getInitials(name) {
    if (!name)
        return '';
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
};
const formatDate = (isoString) => {
    if (!isoString)
        return '';
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
                userData.value.name = data.user?.fullName || '';
                userData.value.email = data.user?.email || '';
                userData.value.initials = getInitials(data.user?.fullName || '');
                userData.value.joinDate = `Bergabung sejak ${formatDate(data.user?.createdAt) || ''}`;
                userData.value.stats = {
                    completed: data.stats?.totalAksiSelesai || 0,
                    created: data.stats?.totalLaporanDibuat || 0,
                    badges: data.stats?.totalBadgeDiraih || 0
                };
                userData.value.points = data.kontribusi?.currentPoin || 0;
                userData.value.nextLevelPoints = data.kontribusi?.targetPoin || 1000;
                badges.value = (data.badges || []).map((b) => ({
                    name: b.name,
                    desc: b.description || '',
                    date: b.isEarned ? '' : '',
                    icon: 'mdi-star',
                    color: b.isEarned ? '#16C79A' : '#BDBDBD',
                    earned: !!b.isEarned
                }));
                certs.value = (data.sertifikat || []).map((c) => ({
                    title: c.title,
                    date: '',
                    tag: c.file || ''
                }));
            }
            else {
                alert('Gagal memuat data profil');
            }
        }
    }
    catch (error) {
        console.error("Gagal mengambil data profil:", error);
    }
};
onMounted(() => {
    fetchProfile();
});
const progressPercent = computed(() => {
    const p = userData.value.points || 0;
    const t = userData.value.nextLevelPoints || 1;
    return Math.round((p / t) * 100);
});
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['active-nav']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.vApp | typeof __VLS_components.VApp | typeof __VLS_components['v-app'] | typeof __VLS_components.vApp | typeof __VLS_components.VApp | typeof __VLS_components['v-app']} */
vApp;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5;
const { default: __VLS_6 } = __VLS_3.slots;
const __VLS_7 = Navbar;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({}));
const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
/** @ts-ignore @type { | typeof __VLS_components.vAppBar | typeof __VLS_components.VAppBar | typeof __VLS_components['v-app-bar'] | typeof __VLS_components.vAppBar | typeof __VLS_components.VAppBar | typeof __VLS_components['v-app-bar']} */
vAppBar;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    flat: true,
    ...{ class: "px-15 border-b" },
    color: "white",
    height: "90",
    theme: "light",
}));
const __VLS_14 = __VLS_13({
    flat: true,
    ...{ class: "px-15 border-b" },
    color: "white",
    height: "90",
    theme: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['px-15']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
const { default: __VLS_17 } = __VLS_15.slots;
let __VLS_18;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    ...{ 'onClick': {} },
    variant: "text",
    ...{ class: "text-none font-weight-medium text-grey-darken-3" },
    ...{ style: {} },
}));
const __VLS_20 = __VLS_19({
    ...{ 'onClick': {} },
    variant: "text",
    ...{ class: "text-none font-weight-medium text-grey-darken-3" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
let __VLS_23;
const __VLS_24 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.$router.back();
            // @ts-ignore
            [$router,];
        } });
/** @type {__VLS_StyleScopedClasses['text-none']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
const { default: __VLS_25 } = __VLS_21.slots;
let __VLS_26;
/** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
vIcon;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent1(__VLS_26, new __VLS_26({
    start: true,
}));
const __VLS_28 = __VLS_27({
    start: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
const { default: __VLS_31 } = __VLS_29.slots;
// @ts-ignore
[];
var __VLS_29;
// @ts-ignore
[];
var __VLS_21;
var __VLS_22;
// @ts-ignore
[];
var __VLS_15;
let __VLS_32;
/** @ts-ignore @type { | typeof __VLS_components.vMain | typeof __VLS_components.VMain | typeof __VLS_components['v-main'] | typeof __VLS_components.vMain | typeof __VLS_components.VMain | typeof __VLS_components['v-main']} */
vMain;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    ...{ class: "bg-white" },
}));
const __VLS_34 = __VLS_33({
    ...{ class: "bg-white" },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
const { default: __VLS_37 } = __VLS_35.slots;
let __VLS_38;
/** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
vContainer;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    ...{ class: "px-15 py-10" },
    fluid: true,
}));
const __VLS_40 = __VLS_39({
    ...{ class: "px-15 py-10" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
/** @type {__VLS_StyleScopedClasses['px-15']} */ ;
/** @type {__VLS_StyleScopedClasses['py-10']} */ ;
const { default: __VLS_43 } = __VLS_41.slots;
let __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    justify: "center",
}));
const __VLS_46 = __VLS_45({
    justify: "center",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
let __VLS_50;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
    cols: "12",
    md: "11",
    lg: "10",
}));
const __VLS_52 = __VLS_51({
    cols: "12",
    md: "11",
    lg: "10",
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
const { default: __VLS_55 } = __VLS_53.slots;
let __VLS_56;
/** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
vCard;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
    ...{ class: "pa-8 mb-6 custom-card border-card" },
    elevation: "0",
    theme: "light",
}));
const __VLS_58 = __VLS_57({
    ...{ class: "pa-8 mb-6 custom-card border-card" },
    elevation: "0",
    theme: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
/** @type {__VLS_StyleScopedClasses['pa-8']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-card']} */ ;
const { default: __VLS_61 } = __VLS_59.slots;
let __VLS_62;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
    align: "center",
    noGutters: true,
}));
const __VLS_64 = __VLS_63({
    align: "center",
    noGutters: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
const { default: __VLS_67 } = __VLS_65.slots;
let __VLS_68;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
    cols: "12",
    sm: "4",
    ...{ class: "d-flex justify-center" },
}));
const __VLS_70 = __VLS_69({
    cols: "12",
    sm: "4",
    ...{ class: "d-flex justify-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
const { default: __VLS_73 } = __VLS_71.slots;
let __VLS_74;
/** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
vAvatar;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
    color: "#16C79A",
    size: "160",
}));
const __VLS_76 = __VLS_75({
    color: "#16C79A",
    size: "160",
}, ...__VLS_functionalComponentArgsRest(__VLS_75));
const { default: __VLS_79 } = __VLS_77.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-white text-h3 font-weight-bold initial" },
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['initial']} */ ;
(__VLS_ctx.userData.initials);
// @ts-ignore
[userData,];
var __VLS_77;
// @ts-ignore
[];
var __VLS_71;
let __VLS_80;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent1(__VLS_80, new __VLS_80({
    cols: "12",
    sm: "8",
    ...{ class: "text-center text-sm-left" },
}));
const __VLS_82 = __VLS_81({
    cols: "12",
    sm: "8",
    ...{ class: "text-center text-sm-left" },
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm-left']} */ ;
const { default: __VLS_85 } = __VLS_83.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-space-between align-start" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-start']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "user-name" },
});
/** @type {__VLS_StyleScopedClasses['user-name']} */ ;
(__VLS_ctx.userData.name);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "user-email" },
});
/** @type {__VLS_StyleScopedClasses['user-email']} */ ;
(__VLS_ctx.userData.email);
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "join-date" },
});
/** @type {__VLS_StyleScopedClasses['join-date']} */ ;
(__VLS_ctx.userData.joinDate);
let __VLS_86;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_87 = __VLS_asFunctionalComponent1(__VLS_86, new __VLS_86({
    ...{ 'onClick': {} },
    color: "error",
    variant: "outlined",
    ...{ class: "text-none font-weight-bold rounded-lg" },
}));
const __VLS_88 = __VLS_87({
    ...{ 'onClick': {} },
    color: "error",
    variant: "outlined",
    ...{ class: "text-none font-weight-bold rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_87));
let __VLS_91;
const __VLS_92 = ({ click: {} },
    { onClick: (__VLS_ctx.handleLogout) });
/** @type {__VLS_StyleScopedClasses['text-none']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
const { default: __VLS_93 } = __VLS_89.slots;
let __VLS_94;
/** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
vIcon;
// @ts-ignore
const __VLS_95 = __VLS_asFunctionalComponent1(__VLS_94, new __VLS_94({
    start: true,
}));
const __VLS_96 = __VLS_95({
    start: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_95));
const { default: __VLS_99 } = __VLS_97.slots;
// @ts-ignore
[userData, userData, userData, handleLogout,];
var __VLS_97;
// @ts-ignore
[];
var __VLS_89;
var __VLS_90;
let __VLS_100;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent1(__VLS_100, new __VLS_100({
    ...{ class: "mt-6" },
    justify: "start",
}));
const __VLS_102 = __VLS_101({
    ...{ class: "mt-6" },
    justify: "start",
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
const { default: __VLS_105 } = __VLS_103.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    cols: "auto",
    ...{ class: "mr-16 text-center" },
});
/** @type {__VLS_StyleScopedClasses['mr-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stat-val" },
});
/** @type {__VLS_StyleScopedClasses['stat-val']} */ ;
(__VLS_ctx.userData.stats.completed);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stat-label" },
});
/** @type {__VLS_StyleScopedClasses['stat-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    cols: "auto",
    ...{ class: "mx-16 text-center" },
});
/** @type {__VLS_StyleScopedClasses['mx-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stat-val" },
});
/** @type {__VLS_StyleScopedClasses['stat-val']} */ ;
(__VLS_ctx.userData.stats.created);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stat-label" },
});
/** @type {__VLS_StyleScopedClasses['stat-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    cols: "auto",
    ...{ class: "ml-16 text-center" },
});
/** @type {__VLS_StyleScopedClasses['ml-16']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stat-val" },
});
/** @type {__VLS_StyleScopedClasses['stat-val']} */ ;
(__VLS_ctx.userData.stats.badges);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "stat-label" },
});
/** @type {__VLS_StyleScopedClasses['stat-label']} */ ;
// @ts-ignore
[userData, userData, userData,];
var __VLS_103;
// @ts-ignore
[];
var __VLS_83;
// @ts-ignore
[];
var __VLS_65;
// @ts-ignore
[];
var __VLS_59;
let __VLS_106;
/** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
vCard;
// @ts-ignore
const __VLS_107 = __VLS_asFunctionalComponent1(__VLS_106, new __VLS_106({
    ...{ class: "pa-6 mb-6 custom-card border-card" },
    elevation: "0",
    theme: "light",
}));
const __VLS_108 = __VLS_107({
    ...{ class: "pa-6 mb-6 custom-card border-card" },
    elevation: "0",
    theme: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_107));
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-card']} */ ;
const { default: __VLS_111 } = __VLS_109.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
let __VLS_112;
/** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
vIcon;
// @ts-ignore
const __VLS_113 = __VLS_asFunctionalComponent1(__VLS_112, new __VLS_112({
    color: "#11698E",
    ...{ class: "mr-2" },
}));
const __VLS_114 = __VLS_113({
    color: "#11698E",
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_113));
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
const { default: __VLS_117 } = __VLS_115.slots;
// @ts-ignore
[];
var __VLS_115;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "section-title" },
});
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-space-between mb-2 progress-text text-body-2 text-grey-darken-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "font-weight-bold" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
(__VLS_ctx.userData.points);
(__VLS_ctx.userData.nextLevelPoints);
let __VLS_118;
/** @ts-ignore @type { | typeof __VLS_components.vProgressLinear | typeof __VLS_components.VProgressLinear | typeof __VLS_components['v-progress-linear'] | typeof __VLS_components.vProgressLinear | typeof __VLS_components.VProgressLinear | typeof __VLS_components['v-progress-linear']} */
vProgressLinear;
// @ts-ignore
const __VLS_119 = __VLS_asFunctionalComponent1(__VLS_118, new __VLS_118({
    modelValue: (__VLS_ctx.progressPercent),
    color: "#16C79A",
    height: "12",
    rounded: true,
    ...{ class: "mb-6" },
}));
const __VLS_120 = __VLS_119({
    modelValue: (__VLS_ctx.progressPercent),
    color: "#16C79A",
    height: "12",
    rounded: true,
    ...{ class: "mb-6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_119));
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
let __VLS_123;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_124 = __VLS_asFunctionalComponent1(__VLS_123, new __VLS_123({
    ...{ class: "mt-4 text-center" },
}));
const __VLS_125 = __VLS_124({
    ...{ class: "mt-4 text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_124));
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
const { default: __VLS_128 } = __VLS_126.slots;
for (const [item, i] of __VLS_vFor((__VLS_ctx.poinInfo))) {
    let __VLS_129;
    /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
    vCol;
    // @ts-ignore
    const __VLS_130 = __VLS_asFunctionalComponent1(__VLS_129, new __VLS_129({
        cols: "6",
        sm: "3",
        key: (i),
    }));
    const __VLS_131 = __VLS_130({
        cols: "6",
        sm: "3",
        key: (i),
    }, ...__VLS_functionalComponentArgsRest(__VLS_130));
    const { default: __VLS_134 } = __VLS_132.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "poin-box pa-3" },
    });
    /** @type {__VLS_StyleScopedClasses['poin-box']} */ ;
    /** @type {__VLS_StyleScopedClasses['pa-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "poin-add" },
    });
    /** @type {__VLS_StyleScopedClasses['poin-add']} */ ;
    (item.val);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "poin-desc mt-1" },
    });
    /** @type {__VLS_StyleScopedClasses['poin-desc']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
    (item.text);
    // @ts-ignore
    [userData, userData, progressPercent, poinInfo,];
    var __VLS_132;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_126;
// @ts-ignore
[];
var __VLS_109;
let __VLS_135;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_136 = __VLS_asFunctionalComponent1(__VLS_135, new __VLS_135({}));
const __VLS_137 = __VLS_136({}, ...__VLS_functionalComponentArgsRest(__VLS_136));
const { default: __VLS_140 } = __VLS_138.slots;
let __VLS_141;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_142 = __VLS_asFunctionalComponent1(__VLS_141, new __VLS_141({}));
const __VLS_143 = __VLS_142({}, ...__VLS_functionalComponentArgsRest(__VLS_142));
const { default: __VLS_146 } = __VLS_144.slots;
let __VLS_147;
/** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
vCard;
// @ts-ignore
const __VLS_148 = __VLS_asFunctionalComponent1(__VLS_147, new __VLS_147({
    ...{ class: "pa-6 mb-6 custom-card border-card h-100" },
    elevation: "0",
    theme: "light",
}));
const __VLS_149 = __VLS_148({
    ...{ class: "pa-6 mb-6 custom-card border-card h-100" },
    elevation: "0",
    theme: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_148));
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-card']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
const { default: __VLS_152 } = __VLS_150.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
let __VLS_153;
/** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
vIcon;
// @ts-ignore
const __VLS_154 = __VLS_asFunctionalComponent1(__VLS_153, new __VLS_153({
    color: "#11698E",
    ...{ class: "mr-2" },
}));
const __VLS_155 = __VLS_154({
    color: "#11698E",
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_154));
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
const { default: __VLS_158 } = __VLS_156.slots;
// @ts-ignore
[];
var __VLS_156;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "section-title" },
});
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
let __VLS_159;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_160 = __VLS_asFunctionalComponent1(__VLS_159, new __VLS_159({}));
const __VLS_161 = __VLS_160({}, ...__VLS_functionalComponentArgsRest(__VLS_160));
const { default: __VLS_164 } = __VLS_162.slots;
for (const [badge, i] of __VLS_vFor((__VLS_ctx.badges))) {
    let __VLS_165;
    /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
    vCol;
    // @ts-ignore
    const __VLS_166 = __VLS_asFunctionalComponent1(__VLS_165, new __VLS_165({
        cols: "12",
        sm: "6",
        key: (i),
    }));
    const __VLS_167 = __VLS_166({
        cols: "12",
        sm: "6",
        key: (i),
    }, ...__VLS_functionalComponentArgsRest(__VLS_166));
    const { default: __VLS_170 } = __VLS_168.slots;
    let __VLS_171;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_172 = __VLS_asFunctionalComponent1(__VLS_171, new __VLS_171({
        variant: "flat",
        ...{ class: "pa-3 badge-card d-flex align-center" },
        disabled: (!badge.earned),
    }));
    const __VLS_173 = __VLS_172({
        variant: "flat",
        ...{ class: "pa-3 badge-card d-flex align-center" },
        disabled: (!badge.earned),
    }, ...__VLS_functionalComponentArgsRest(__VLS_172));
    /** @type {__VLS_StyleScopedClasses['pa-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['badge-card']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    const { default: __VLS_176 } = __VLS_174.slots;
    let __VLS_177;
    /** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
    vAvatar;
    // @ts-ignore
    const __VLS_178 = __VLS_asFunctionalComponent1(__VLS_177, new __VLS_177({
        color: (badge.earned ? badge.color : '#E0E0E0'),
        size: "50",
        ...{ class: "mr-4" },
    }));
    const __VLS_179 = __VLS_178({
        color: (badge.earned ? badge.color : '#E0E0E0'),
        size: "50",
        ...{ class: "mr-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_178));
    /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
    const { default: __VLS_182 } = __VLS_180.slots;
    let __VLS_183;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_184 = __VLS_asFunctionalComponent1(__VLS_183, new __VLS_183({
        color: "white",
    }));
    const __VLS_185 = __VLS_184({
        color: "white",
    }, ...__VLS_functionalComponentArgsRest(__VLS_184));
    const { default: __VLS_188 } = __VLS_186.slots;
    (badge.icon);
    // @ts-ignore
    [badges,];
    var __VLS_186;
    // @ts-ignore
    [];
    var __VLS_180;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "badge-name" },
    });
    /** @type {__VLS_StyleScopedClasses['badge-name']} */ ;
    (badge.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "badge-desc" },
    });
    /** @type {__VLS_StyleScopedClasses['badge-desc']} */ ;
    (badge.desc);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "badge-date" },
    });
    /** @type {__VLS_StyleScopedClasses['badge-date']} */ ;
    (badge.earned ? 'Diraih ' + badge.date : 'Belum diraih');
    // @ts-ignore
    [];
    var __VLS_174;
    // @ts-ignore
    [];
    var __VLS_168;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_162;
// @ts-ignore
[];
var __VLS_150;
// @ts-ignore
[];
var __VLS_144;
let __VLS_189;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_190 = __VLS_asFunctionalComponent1(__VLS_189, new __VLS_189({}));
const __VLS_191 = __VLS_190({}, ...__VLS_functionalComponentArgsRest(__VLS_190));
const { default: __VLS_194 } = __VLS_192.slots;
let __VLS_195;
/** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
vCard;
// @ts-ignore
const __VLS_196 = __VLS_asFunctionalComponent1(__VLS_195, new __VLS_195({
    ...{ class: "pa-6 custom-card border-card h-100" },
    elevation: "0",
    theme: "light",
}));
const __VLS_197 = __VLS_196({
    ...{ class: "pa-6 custom-card border-card h-100" },
    elevation: "0",
    theme: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_196));
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-card']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
const { default: __VLS_200 } = __VLS_198.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-center mb-4" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
let __VLS_201;
/** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
vIcon;
// @ts-ignore
const __VLS_202 = __VLS_asFunctionalComponent1(__VLS_201, new __VLS_201({
    color: "#11698E",
    ...{ class: "mr-2" },
}));
const __VLS_203 = __VLS_202({
    color: "#11698E",
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_202));
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
const { default: __VLS_206 } = __VLS_204.slots;
// @ts-ignore
[];
var __VLS_204;
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "section-title" },
});
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
let __VLS_207;
/** @ts-ignore @type { | typeof __VLS_components.vList | typeof __VLS_components.VList | typeof __VLS_components['v-list'] | typeof __VLS_components.vList | typeof __VLS_components.VList | typeof __VLS_components['v-list']} */
vList;
// @ts-ignore
const __VLS_208 = __VLS_asFunctionalComponent1(__VLS_207, new __VLS_207({}));
const __VLS_209 = __VLS_208({}, ...__VLS_functionalComponentArgsRest(__VLS_208));
const { default: __VLS_212 } = __VLS_210.slots;
for (const [cert, i] of __VLS_vFor((__VLS_ctx.certs))) {
    let __VLS_213;
    /** @ts-ignore @type { | typeof __VLS_components.vListItem | typeof __VLS_components.VListItem | typeof __VLS_components['v-list-item'] | typeof __VLS_components.vListItem | typeof __VLS_components.VListItem | typeof __VLS_components['v-list-item']} */
    vListItem;
    // @ts-ignore
    const __VLS_214 = __VLS_asFunctionalComponent1(__VLS_213, new __VLS_213({
        key: (i),
        ...{ class: "cert-item pa-0 mb-3" },
    }));
    const __VLS_215 = __VLS_214({
        key: (i),
        ...{ class: "cert-item pa-0 mb-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_214));
    /** @type {__VLS_StyleScopedClasses['cert-item']} */ ;
    /** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    const { default: __VLS_218 } = __VLS_216.slots;
    let __VLS_219;
    /** @ts-ignore @type { | typeof __VLS_components.vListItemContent | typeof __VLS_components.VListItemContent | typeof __VLS_components['v-list-item-content'] | typeof __VLS_components.vListItemContent | typeof __VLS_components.VListItemContent | typeof __VLS_components['v-list-item-content']} */
    vListItemContent;
    // @ts-ignore
    const __VLS_220 = __VLS_asFunctionalComponent1(__VLS_219, new __VLS_219({}));
    const __VLS_221 = __VLS_220({}, ...__VLS_functionalComponentArgsRest(__VLS_220));
    const { default: __VLS_224 } = __VLS_222.slots;
    let __VLS_225;
    /** @ts-ignore @type { | typeof __VLS_components.vListItemTitle | typeof __VLS_components.VListItemTitle | typeof __VLS_components['v-list-item-title'] | typeof __VLS_components.vListItemTitle | typeof __VLS_components.VListItemTitle | typeof __VLS_components['v-list-item-title']} */
    vListItemTitle;
    // @ts-ignore
    const __VLS_226 = __VLS_asFunctionalComponent1(__VLS_225, new __VLS_225({
        ...{ class: "cert-title mb-1" },
    }));
    const __VLS_227 = __VLS_226({
        ...{ class: "cert-title mb-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_226));
    /** @type {__VLS_StyleScopedClasses['cert-title']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    const { default: __VLS_230 } = __VLS_228.slots;
    (cert.title);
    // @ts-ignore
    [certs,];
    var __VLS_228;
    let __VLS_231;
    /** @ts-ignore @type { | typeof __VLS_components.vListItemSubtitle | typeof __VLS_components.VListItemSubtitle | typeof __VLS_components['v-list-item-subtitle'] | typeof __VLS_components.vListItemSubtitle | typeof __VLS_components.VListItemSubtitle | typeof __VLS_components['v-list-item-subtitle']} */
    vListItemSubtitle;
    // @ts-ignore
    const __VLS_232 = __VLS_asFunctionalComponent1(__VLS_231, new __VLS_231({
        ...{ class: "cert-sub" },
    }));
    const __VLS_233 = __VLS_232({
        ...{ class: "cert-sub" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_232));
    /** @type {__VLS_StyleScopedClasses['cert-sub']} */ ;
    const { default: __VLS_236 } = __VLS_234.slots;
    (cert.date);
    let __VLS_237;
    /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
    vChip;
    // @ts-ignore
    const __VLS_238 = __VLS_asFunctionalComponent1(__VLS_237, new __VLS_237({
        size: "small",
        color: "#F8F1F1",
        textColor: "#11698E",
        ...{ class: "font-weight-bold" },
    }));
    const __VLS_239 = __VLS_238({
        size: "small",
        color: "#F8F1F1",
        textColor: "#11698E",
        ...{ class: "font-weight-bold" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_238));
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    const { default: __VLS_242 } = __VLS_240.slots;
    (cert.tag);
    // @ts-ignore
    [];
    var __VLS_240;
    // @ts-ignore
    [];
    var __VLS_234;
    // @ts-ignore
    [];
    var __VLS_222;
    {
        const { append: __VLS_243 } = __VLS_216.slots;
        let __VLS_244;
        /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
        vBtn;
        // @ts-ignore
        const __VLS_245 = __VLS_asFunctionalComponent1(__VLS_244, new __VLS_244({
            color: "#16C79A",
            variant: "text",
            size: "small",
            ...{ class: "font-weight-bold text-none" },
        }));
        const __VLS_246 = __VLS_245({
            color: "#16C79A",
            variant: "text",
            size: "small",
            ...{ class: "font-weight-bold text-none" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_245));
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
        const { default: __VLS_249 } = __VLS_247.slots;
        let __VLS_250;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_251 = __VLS_asFunctionalComponent1(__VLS_250, new __VLS_250({
            start: true,
        }));
        const __VLS_252 = __VLS_251({
            start: true,
        }, ...__VLS_functionalComponentArgsRest(__VLS_251));
        const { default: __VLS_255 } = __VLS_253.slots;
        // @ts-ignore
        [];
        var __VLS_253;
        // @ts-ignore
        [];
        var __VLS_247;
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_216;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_210;
// @ts-ignore
[];
var __VLS_198;
// @ts-ignore
[];
var __VLS_192;
// @ts-ignore
[];
var __VLS_138;
// @ts-ignore
[];
var __VLS_53;
// @ts-ignore
[];
var __VLS_47;
// @ts-ignore
[];
var __VLS_41;
// @ts-ignore
[];
var __VLS_35;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
