import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mockReports } from '../data/mockReports';
import Navbar from '../components/Navbar.vue';
const route = useRoute();
const router = useRouter();
const report = ref(null);
const valid = ref(false);
const agreement1 = ref(false);
const agreement2 = ref(false);
const form = ref({
    fullName: '',
    email: '',
    phone: '',
    healthCondition: '',
    reason: ''
});
onMounted(async () => {
    const idAksi = route.query.idAksi;
    const idLaporan = route.query.idLaporan;
    const token = localStorage.getItem('jwt_token');
    if (!token) {
        router.push('/');
        return;
    }
    try {
        // Coba ambil dari backend dulu dengan idAksi
        if (idAksi) {
            const res = await fetch(`http://localhost:3000/api/actions/${idAksi}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                report.value = data;
                return;
            }
        }
        // Fallback: cari dari mockReports
        const id = Number(idLaporan);
        if (id) {
            report.value = mockReports.find(r => r.id === id);
        }
    }
    catch (error) {
        console.error('Error fetching action:', error);
        // Fallback ke mockReports jika error
        const id = Number(idLaporan);
        if (id) {
            report.value = mockReports.find(r => r.id === id);
        }
    }
});
const formatDateWithTime = (date) => {
    const d = new Date(date);
    const day = d.toLocaleDateString('id-ID', { weekday: 'long' });
    const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    return `${day}, ${dateStr} pukul 08.00`;
};
const submitRegistration = async () => {
    if (!form.value.fullName || !form.value.email || !form.value.phone) {
        alert("Mohon isi Nama Lengkap, Email, dan Nomor Telepon Anda.");
        return;
    }
    const token = localStorage.getItem('jwt_token');
    if (!token) {
        alert("Anda harus login terlebih dahulu untuk mendaftar.");
        router.push('/');
        return;
    }
    try {
        const payload = {
            actionId: report.value?.id,
            ...form.value
        };
        const res = await fetch('http://localhost:3000/api/volunteers/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        });
        if (res.ok) {
            alert("Pendaftaran berhasil! Terima kasih atas partisipasi Anda.");
            router.push('/komunitas');
        }
        else if (res.status === 401) {
            alert("Sesi login Anda sudah habis. Silakan login ulang.");
            localStorage.removeItem('jwt_token');
            router.push('/');
        }
        else {
            const error = await res.json();
            alert(error.message || "Gagal mendaftar. Silakan coba lagi.");
        }
    }
    catch (err) {
        console.error("Terjadi kesalahan jaringan:", err);
        alert("Terjadi kesalahan jaringan.");
    }
};
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
    theme: "light",
}));
const __VLS_2 = __VLS_1({
    ...{ style: {} },
    theme: "light",
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
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_35.slots;
if (!__VLS_ctx.report) {
    let __VLS_38;
    /** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
    vContainer;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
        ...{ class: "py-15 text-center" },
    }));
    const __VLS_40 = __VLS_39({
        ...{ class: "py-15 text-center" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    /** @type {__VLS_StyleScopedClasses['py-15']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    const { default: __VLS_43 } = __VLS_41.slots;
    let __VLS_44;
    /** @ts-ignore @type { | typeof __VLS_components.vProgressCircular | typeof __VLS_components.VProgressCircular | typeof __VLS_components['v-progress-circular'] | typeof __VLS_components.vProgressCircular | typeof __VLS_components.VProgressCircular | typeof __VLS_components['v-progress-circular']} */
    vProgressCircular;
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
        indeterminate: true,
        color: "#11698E",
        size: "50",
    }));
    const __VLS_46 = __VLS_45({
        indeterminate: true,
        color: "#11698E",
        size: "50",
    }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    // @ts-ignore
    [report,];
    var __VLS_41;
}
else {
    let __VLS_49;
    /** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
    vContainer;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
        ...{ class: "py-10" },
        ...{ style: {} },
    }));
    const __VLS_51 = __VLS_50({
        ...{ class: "py-10" },
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    /** @type {__VLS_StyleScopedClasses['py-10']} */ ;
    const { default: __VLS_54 } = __VLS_52.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "font-weight-bold text-h4 mb-6" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    let __VLS_55;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
        ...{ class: "pa-6 mb-6 rounded-xl border-card" },
        elevation: "0",
    }));
    const __VLS_57 = __VLS_56({
        ...{ class: "pa-6 mb-6 rounded-xl border-card" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    /** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    const { default: __VLS_60 } = __VLS_58.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "font-weight-bold text-h5 mb-2" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    (__VLS_ctx.report.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-body-1 text-black mb-6" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    (__VLS_ctx.report.description);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center mb-4 text-black text-body-1" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    let __VLS_61;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
        start: true,
        color: "#11698E",
        size: "28",
        ...{ class: "mr-4" },
    }));
    const __VLS_63 = __VLS_62({
        start: true,
        color: "#11698E",
        size: "28",
        ...{ class: "mr-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
    const { default: __VLS_66 } = __VLS_64.slots;
    // @ts-ignore
    [report, report,];
    var __VLS_64;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "font-weight-bold" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    (__VLS_ctx.report.volunteerAction ? __VLS_ctx.formatDateWithTime(__VLS_ctx.report.volunteerAction.scheduledDate) : 'Menunggu Jadwal');
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center mb-4 text-black text-body-1" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    let __VLS_67;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
        start: true,
        color: "#11698E",
        size: "28",
        ...{ class: "mr-4" },
    }));
    const __VLS_69 = __VLS_68({
        start: true,
        color: "#11698E",
        size: "28",
        ...{ class: "mr-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
    const { default: __VLS_72 } = __VLS_70.slots;
    // @ts-ignore
    [report, report, formatDateWithTime,];
    var __VLS_70;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "font-weight-bold" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    (__VLS_ctx.report.location);
    if (__VLS_ctx.report.volunteerAction) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex align-center text-black text-body-1" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
        let __VLS_73;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_74 = __VLS_asFunctionalComponent1(__VLS_73, new __VLS_73({
            start: true,
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4" },
        }));
        const __VLS_75 = __VLS_74({
            start: true,
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_74));
        /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
        const { default: __VLS_78 } = __VLS_76.slots;
        // @ts-ignore
        [report, report,];
        var __VLS_76;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "font-weight-bold" },
            ...{ style: {} },
        });
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "font-weight-bold text-teal" },
        });
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-teal']} */ ;
        (__VLS_ctx.report.volunteerAction.registeredPeople);
        (__VLS_ctx.report.volunteerAction.requiredPeople);
    }
    // @ts-ignore
    [report, report,];
    var __VLS_58;
    let __VLS_79;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
        ...{ class: "pa-6 rounded-xl border-card" },
        elevation: "0",
    }));
    const __VLS_81 = __VLS_80({
        ...{ class: "pa-6 rounded-xl border-card" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    /** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    const { default: __VLS_84 } = __VLS_82.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "font-weight-bold text-h5 mb-6" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    let __VLS_85;
    /** @ts-ignore @type { | typeof __VLS_components.vForm | typeof __VLS_components.VForm | typeof __VLS_components['v-form'] | typeof __VLS_components.vForm | typeof __VLS_components.VForm | typeof __VLS_components['v-form']} */
    vForm;
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
        modelValue: (__VLS_ctx.valid),
    }));
    const __VLS_87 = __VLS_86({
        modelValue: (__VLS_ctx.valid),
    }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    const { default: __VLS_90 } = __VLS_88.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    let __VLS_91;
    /** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
    vTextField;
    // @ts-ignore
    const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({
        modelValue: (__VLS_ctx.form.fullName),
        variant: "outlined",
        placeholder: "Masukkan nama lengkap Anda",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }));
    const __VLS_93 = __VLS_92({
        modelValue: (__VLS_ctx.form.fullName),
        variant: "outlined",
        placeholder: "Masukkan nama lengkap Anda",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_92));
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-form']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    let __VLS_96;
    /** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
    vTextField;
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
        modelValue: (__VLS_ctx.form.email),
        variant: "outlined",
        placeholder: "contoh@email.com",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }));
    const __VLS_98 = __VLS_97({
        modelValue: (__VLS_ctx.form.email),
        variant: "outlined",
        placeholder: "contoh@email.com",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-form']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    let __VLS_101;
    /** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
    vTextField;
    // @ts-ignore
    const __VLS_102 = __VLS_asFunctionalComponent1(__VLS_101, new __VLS_101({
        modelValue: (__VLS_ctx.form.phone),
        variant: "outlined",
        placeholder: "08xxxxxxxxx",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }));
    const __VLS_103 = __VLS_102({
        modelValue: (__VLS_ctx.form.phone),
        variant: "outlined",
        placeholder: "08xxxxxxxxx",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_102));
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-form']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "font-weight-bold text-body-2 text-grey-darken-3 mb-1 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-caption text-grey-darken-1 mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    let __VLS_106;
    /** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
    vTextField;
    // @ts-ignore
    const __VLS_107 = __VLS_asFunctionalComponent1(__VLS_106, new __VLS_106({
        modelValue: (__VLS_ctx.form.healthCondition),
        variant: "outlined",
        placeholder: "Contoh: Alergi debu parah, asma, dll.",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }));
    const __VLS_108 = __VLS_107({
        modelValue: (__VLS_ctx.form.healthCondition),
        variant: "outlined",
        placeholder: "Contoh: Alergi debu parah, asma, dll.",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-2 input-form" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_107));
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-form']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        ...{ class: "font-weight-bold text-body-2 text-grey-darken-3 mb-2 d-block" },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-block']} */ ;
    let __VLS_111;
    /** @ts-ignore @type { | typeof __VLS_components.vTextarea | typeof __VLS_components.VTextarea | typeof __VLS_components['v-textarea'] | typeof __VLS_components.vTextarea | typeof __VLS_components.VTextarea | typeof __VLS_components['v-textarea']} */
    vTextarea;
    // @ts-ignore
    const __VLS_112 = __VLS_asFunctionalComponent1(__VLS_111, new __VLS_111({
        modelValue: (__VLS_ctx.form.reason),
        variant: "outlined",
        placeholder: "Ceritakan mengapa Anda ingin ikut serta dalam aksi ini...",
        rows: "3",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-6 input-form" },
    }));
    const __VLS_113 = __VLS_112({
        modelValue: (__VLS_ctx.form.reason),
        variant: "outlined",
        placeholder: "Ceritakan mengapa Anda ingin ikut serta dalam aksi ini...",
        rows: "3",
        color: "#11698E",
        rounded: "lg",
        ...{ class: "mb-6 input-form" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_112));
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['input-form']} */ ;
    let __VLS_116;
    /** @ts-ignore @type { | typeof __VLS_components.vSheet | typeof __VLS_components.VSheet | typeof __VLS_components['v-sheet'] | typeof __VLS_components.vSheet | typeof __VLS_components.VSheet | typeof __VLS_components['v-sheet']} */
    vSheet;
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent1(__VLS_116, new __VLS_116({
        color: "#F8F1F1",
        ...{ class: "pa-5 rounded-xl mb-8" },
    }));
    const __VLS_118 = __VLS_117({
        color: "#F8F1F1",
        ...{ class: "pa-5 rounded-xl mb-8" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    /** @type {__VLS_StyleScopedClasses['pa-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
    const { default: __VLS_121 } = __VLS_119.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
        ...{ class: "font-weight-bold mb-3" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    let __VLS_122;
    /** @ts-ignore @type { | typeof __VLS_components.vCheckbox | typeof __VLS_components.VCheckbox | typeof __VLS_components['v-checkbox'] | typeof __VLS_components.vCheckbox | typeof __VLS_components.VCheckbox | typeof __VLS_components['v-checkbox']} */
    vCheckbox;
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent1(__VLS_122, new __VLS_122({
        modelValue: (__VLS_ctx.agreement1),
        color: "#16C79A",
        hideDetails: true,
        ...{ class: "mb-2" },
    }));
    const __VLS_124 = __VLS_123({
        modelValue: (__VLS_ctx.agreement1),
        color: "#16C79A",
        hideDetails: true,
        ...{ class: "mb-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    const { default: __VLS_127 } = __VLS_125.slots;
    {
        const { label: __VLS_128 } = __VLS_125.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-body-2 text-black ml-2" },
            ...{ style: {} },
        });
        /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        /** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
        // @ts-ignore
        [valid, form, form, form, form, form, agreement1,];
    }
    // @ts-ignore
    [];
    var __VLS_125;
    let __VLS_129;
    /** @ts-ignore @type { | typeof __VLS_components.vCheckbox | typeof __VLS_components.VCheckbox | typeof __VLS_components['v-checkbox'] | typeof __VLS_components.vCheckbox | typeof __VLS_components.VCheckbox | typeof __VLS_components['v-checkbox']} */
    vCheckbox;
    // @ts-ignore
    const __VLS_130 = __VLS_asFunctionalComponent1(__VLS_129, new __VLS_129({
        modelValue: (__VLS_ctx.agreement2),
        color: "#16C79A",
        hideDetails: true,
    }));
    const __VLS_131 = __VLS_130({
        modelValue: (__VLS_ctx.agreement2),
        color: "#16C79A",
        hideDetails: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_130));
    const { default: __VLS_134 } = __VLS_132.slots;
    {
        const { label: __VLS_135 } = __VLS_132.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-body-2 text-black ml-2" },
            ...{ style: {} },
        });
        /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        /** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
        // @ts-ignore
        [agreement2,];
    }
    // @ts-ignore
    [];
    var __VLS_132;
    // @ts-ignore
    [];
    var __VLS_119;
    let __VLS_136;
    /** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
    vRow;
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent1(__VLS_136, new __VLS_136({}));
    const __VLS_138 = __VLS_137({}, ...__VLS_functionalComponentArgsRest(__VLS_137));
    const { default: __VLS_141 } = __VLS_139.slots;
    let __VLS_142;
    /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
    vCol;
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent1(__VLS_142, new __VLS_142({
        cols: "6",
    }));
    const __VLS_144 = __VLS_143({
        cols: "6",
    }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    const { default: __VLS_147 } = __VLS_145.slots;
    let __VLS_148;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_149 = __VLS_asFunctionalComponent1(__VLS_148, new __VLS_148({
        ...{ 'onClick': {} },
        block: true,
        variant: "outlined",
        color: "#11698E",
        size: "large",
        rounded: "lg",
        ...{ class: "text-none font-weight-bold" },
    }));
    const __VLS_150 = __VLS_149({
        ...{ 'onClick': {} },
        block: true,
        variant: "outlined",
        color: "#11698E",
        size: "large",
        rounded: "lg",
        ...{ class: "text-none font-weight-bold" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_149));
    let __VLS_153;
    const __VLS_154 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!!(!__VLS_ctx.report))
                    return;
                __VLS_ctx.$router.back();
                // @ts-ignore
                [$router,];
            } });
    /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    const { default: __VLS_155 } = __VLS_151.slots;
    // @ts-ignore
    [];
    var __VLS_151;
    var __VLS_152;
    // @ts-ignore
    [];
    var __VLS_145;
    let __VLS_156;
    /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
    vCol;
    // @ts-ignore
    const __VLS_157 = __VLS_asFunctionalComponent1(__VLS_156, new __VLS_156({
        cols: "6",
    }));
    const __VLS_158 = __VLS_157({
        cols: "6",
    }, ...__VLS_functionalComponentArgsRest(__VLS_157));
    const { default: __VLS_161 } = __VLS_159.slots;
    let __VLS_162;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_163 = __VLS_asFunctionalComponent1(__VLS_162, new __VLS_162({
        ...{ 'onClick': {} },
        block: true,
        color: (__VLS_ctx.agreement1 && __VLS_ctx.agreement2 ? '#16C79A' : 'grey-lighten-2'),
        size: "large",
        rounded: "lg",
        ...{ class: "text-none font-weight-bold text-white" },
        elevation: "0",
        disabled: (!(__VLS_ctx.agreement1 && __VLS_ctx.agreement2)),
    }));
    const __VLS_164 = __VLS_163({
        ...{ 'onClick': {} },
        block: true,
        color: (__VLS_ctx.agreement1 && __VLS_ctx.agreement2 ? '#16C79A' : 'grey-lighten-2'),
        size: "large",
        rounded: "lg",
        ...{ class: "text-none font-weight-bold text-white" },
        elevation: "0",
        disabled: (!(__VLS_ctx.agreement1 && __VLS_ctx.agreement2)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_163));
    let __VLS_167;
    const __VLS_168 = ({ click: {} },
        { onClick: (__VLS_ctx.submitRegistration) });
    /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    const { default: __VLS_169 } = __VLS_165.slots;
    // @ts-ignore
    [agreement1, agreement1, agreement2, agreement2, submitRegistration,];
    var __VLS_165;
    var __VLS_166;
    // @ts-ignore
    [];
    var __VLS_159;
    // @ts-ignore
    [];
    var __VLS_139;
    // @ts-ignore
    [];
    var __VLS_88;
    // @ts-ignore
    [];
    var __VLS_82;
    // @ts-ignore
    [];
    var __VLS_52;
}
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
