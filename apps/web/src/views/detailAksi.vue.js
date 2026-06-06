import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import MediaGallery from "../components/mediagallery.vue";
const route = useRoute();
const router = useRouter();
const report = ref(null);
const newComment = ref('');
const idAksi = route.params.id;
const fetchDetailAksi = async () => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
        router.push('/');
        return;
    }
    try {
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
        }
        else if (res.status === 401) {
            alert("Sesi Anda telah berakhir.");
            localStorage.removeItem('jwt_token');
            router.push('/');
        }
    }
    catch (error) {
        console.error("Gagal memuat detail aksi:", error);
    }
};
const submitComment = async () => {
    if (!newComment.value.trim())
        return;
    const token = localStorage.getItem('jwt_token');
    if (!token)
        return;
    try {
        const res = await fetch(`http://localhost:3000/api/reports/${idAksi}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                text: newComment.value
            })
        });
        if (res.ok) {
            newComment.value = '';
            fetchDetailAksi();
        }
        else {
            alert("Gagal mengirim komentar.");
        }
    }
    catch (error) {
        console.error("Kesalahan mengirim komentar:", error);
    }
};
onMounted(() => {
    fetchDetailAksi();
});
const goBack = () => {
    router.back();
};
const formatDate = (date) => {
    if (!date)
        return '';
    return new Date(date).toLocaleDateString('id-ID');
};
const formatDateWithTime = (date) => {
    if (!date)
        return '';
    const d = new Date(date);
    const day = d.toLocaleDateString('id-ID', { weekday: 'long' });
    const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    return `${day}, ${dateStr} pukul 08.00`;
};
const formatStatusText = (status) => {
    if (!status)
        return 'Akan Datang';
    if (status.toLowerCase().includes('jalan'))
        return 'Sedang Berjalan';
    if (status.toLowerCase().includes('selesai'))
        return 'Selesai';
    return 'Akan Datang';
};
const getStatusColor = (status) => {
    const s = formatStatusText(status);
    if (s === 'Sedang Berjalan')
        return '#19456B';
    if (s === 'Selesai')
        return '#16C79A';
    return '#11698E';
};
const getStatusIcon = (status) => {
    const s = formatStatusText(status);
    if (s === 'Sedang Berjalan')
        return 'mdi-play';
    if (s === 'Selesai')
        return 'mdi-check-circle-outline';
    return 'mdi-clock-outline';
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
/** @ts-ignore @type { | typeof __VLS_components.vMain | typeof __VLS_components.VMain | typeof __VLS_components['v-main'] | typeof __VLS_components.vMain | typeof __VLS_components.VMain | typeof __VLS_components['v-main']} */
vMain;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
const { default: __VLS_17 } = __VLS_15.slots;
if (!__VLS_ctx.report) {
    let __VLS_18;
    /** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
    vContainer;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
        ...{ class: "py-15 text-center" },
    }));
    const __VLS_20 = __VLS_19({
        ...{ class: "py-15 text-center" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    /** @type {__VLS_StyleScopedClasses['py-15']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    const { default: __VLS_23 } = __VLS_21.slots;
    let __VLS_24;
    /** @ts-ignore @type { | typeof __VLS_components.vProgressCircular | typeof __VLS_components.VProgressCircular | typeof __VLS_components['v-progress-circular'] | typeof __VLS_components.vProgressCircular | typeof __VLS_components.VProgressCircular | typeof __VLS_components['v-progress-circular']} */
    vProgressCircular;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
        indeterminate: true,
        color: "#11698E",
        size: "50",
    }));
    const __VLS_26 = __VLS_25({
        indeterminate: true,
        color: "#11698E",
        size: "50",
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    // @ts-ignore
    [report,];
    var __VLS_21;
}
else {
    let __VLS_29;
    /** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
    vContainer;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
        ...{ class: "py-10" },
        ...{ style: {} },
    }));
    const __VLS_31 = __VLS_30({
        ...{ class: "py-10" },
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    /** @type {__VLS_StyleScopedClasses['py-10']} */ ;
    const { default: __VLS_34 } = __VLS_32.slots;
    let __VLS_35;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
        ...{ 'onClick': {} },
        variant: "text",
        ...{ class: "mb-6 text-none font-weight-medium text-grey-darken-3" },
        prependIcon: "mdi-arrow-left",
        ...{ style: {} },
    }));
    const __VLS_37 = __VLS_36({
        ...{ 'onClick': {} },
        variant: "text",
        ...{ class: "mb-6 text-none font-weight-medium text-grey-darken-3" },
        prependIcon: "mdi-arrow-left",
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    let __VLS_40;
    const __VLS_41 = ({ click: {} },
        { onClick: (__VLS_ctx.goBack) });
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    const { default: __VLS_42 } = __VLS_38.slots;
    // @ts-ignore
    [goBack,];
    var __VLS_38;
    var __VLS_39;
    let __VLS_43;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
        ...{ class: "mb-6 rounded-xl border-card px-4 py-4" },
        elevation: "0",
    }));
    const __VLS_45 = __VLS_44({
        ...{ class: "mb-6 rounded-xl border-card px-4 py-4" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_44));
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-4']} */ ;
    const { default: __VLS_48 } = __VLS_46.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "mt-6" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "text-h6 font-weight-bold mb-3" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
    const __VLS_49 = MediaGallery;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
        mediaList: (__VLS_ctx.report.media),
    }));
    const __VLS_51 = __VLS_50({
        mediaList: (__VLS_ctx.report.media),
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    let __VLS_54;
    /** @ts-ignore @type { | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text'] | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text']} */
    vCardText;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const { default: __VLS_59 } = __VLS_57.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    let __VLS_60;
    /** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
    vAvatar;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({
        color: "#11698E",
        size: "48",
        ...{ class: "text-white font-weight-bold text-h6" },
    }));
    const __VLS_62 = __VLS_61({
        color: "#11698E",
        size: "48",
        ...{ class: "text-white font-weight-bold text-h6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
    const { default: __VLS_65 } = __VLS_63.slots;
    (__VLS_ctx.report.author.name.charAt(0).toUpperCase());
    // @ts-ignore
    [report, report,];
    var __VLS_63;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "ml-4" },
    });
    /** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "font-weight-bold text-body-1 text-black" },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    (__VLS_ctx.report.author.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-caption text-grey" },
    });
    /** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
    (__VLS_ctx.formatDate(__VLS_ctx.report.createdAt));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center mb-6 gap-3" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    let __VLS_66;
    /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
    vChip;
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
        ...{ class: "category-chip px-4" },
        size: "large",
    }));
    const __VLS_68 = __VLS_67({
        ...{ class: "category-chip px-4" },
        size: "large",
    }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    /** @type {__VLS_StyleScopedClasses['category-chip']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    const { default: __VLS_71 } = __VLS_69.slots;
    (__VLS_ctx.report.category);
    // @ts-ignore
    [report, report, report, formatDate,];
    var __VLS_69;
    let __VLS_72;
    /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
    vChip;
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent1(__VLS_72, new __VLS_72({
        color: (__VLS_ctx.getStatusColor(__VLS_ctx.report.status)),
        ...{ class: "text-white font-weight-medium px-4" },
        size: "large",
    }));
    const __VLS_74 = __VLS_73({
        color: (__VLS_ctx.getStatusColor(__VLS_ctx.report.status)),
        ...{ class: "text-white font-weight-medium px-4" },
        size: "large",
    }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    const { default: __VLS_77 } = __VLS_75.slots;
    let __VLS_78;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent1(__VLS_78, new __VLS_78({
        start: true,
        size: "small",
    }));
    const __VLS_80 = __VLS_79({
        start: true,
        size: "small",
    }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    const { default: __VLS_83 } = __VLS_81.slots;
    (__VLS_ctx.getStatusIcon(__VLS_ctx.report.status));
    // @ts-ignore
    [report, report, getStatusColor, getStatusIcon,];
    var __VLS_81;
    (__VLS_ctx.formatStatusText(__VLS_ctx.report.status));
    // @ts-ignore
    [report, formatStatusText,];
    var __VLS_75;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "font-weight-bold text-h4 mb-6 text-black" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    (__VLS_ctx.report.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center text-body-1 text-grey-darken-3 mb-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    let __VLS_84;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent1(__VLS_84, new __VLS_84({
        color: "grey-darken-1",
        size: "small",
        ...{ class: "mr-3" },
    }));
    const __VLS_86 = __VLS_85({
        color: "grey-darken-1",
        size: "small",
        ...{ class: "mr-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    /** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
    const { default: __VLS_89 } = __VLS_87.slots;
    // @ts-ignore
    [report,];
    var __VLS_87;
    (__VLS_ctx.report.location);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center text-body-1 text-grey-darken-3 mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    let __VLS_90;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({
        color: "grey-darken-1",
        size: "small",
        ...{ class: "mr-3" },
    }));
    const __VLS_92 = __VLS_91({
        color: "grey-darken-1",
        size: "small",
        ...{ class: "mr-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    /** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
    const { default: __VLS_95 } = __VLS_93.slots;
    // @ts-ignore
    [report,];
    var __VLS_93;
    (__VLS_ctx.report.volunteerAction ? __VLS_ctx.formatDateWithTime(__VLS_ctx.report.volunteerAction.scheduledDate) : 'Tanggal belum ditentukan');
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-body-1 text-black" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    (__VLS_ctx.report.description);
    // @ts-ignore
    [report, report, report, formatDateWithTime,];
    var __VLS_57;
    // @ts-ignore
    [];
    var __VLS_46;
    if (__VLS_ctx.report.volunteerAction) {
        let __VLS_96;
        /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
        vCard;
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
            ...{ class: "mb-6 rounded-xl border-card px-4 py-4" },
            elevation: "0",
        }));
        const __VLS_98 = __VLS_97({
            ...{ class: "mb-6 rounded-xl border-card px-4 py-4" },
            elevation: "0",
        }, ...__VLS_functionalComponentArgsRest(__VLS_97));
        /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
        /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['py-4']} */ ;
        const { default: __VLS_101 } = __VLS_99.slots;
        let __VLS_102;
        /** @ts-ignore @type { | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components['v-card-title'] | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components['v-card-title']} */
        vCardTitle;
        // @ts-ignore
        const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
            ...{ class: "font-weight-bold text-h5 text-primary-dark mb-4" },
        }));
        const __VLS_104 = __VLS_103({
            ...{ class: "font-weight-bold text-h5 text-primary-dark mb-4" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_103));
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-primary-dark']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        const { default: __VLS_107 } = __VLS_105.slots;
        // @ts-ignore
        [report,];
        var __VLS_105;
        let __VLS_108;
        /** @ts-ignore @type { | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text'] | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text']} */
        vCardText;
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent1(__VLS_108, new __VLS_108({}));
        const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
        const { default: __VLS_113 } = __VLS_111.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "info-item mb-6" },
        });
        /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
        let __VLS_114;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_115 = __VLS_asFunctionalComponent1(__VLS_114, new __VLS_114({
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4 mt-1" },
        }));
        const __VLS_116 = __VLS_115({
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4 mt-1" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_115));
        /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        const { default: __VLS_119 } = __VLS_117.slots;
        // @ts-ignore
        [];
        var __VLS_117;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "font-weight-bold text-primary-dark text-subtitle-1" },
        });
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-primary-dark']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-black" },
        });
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        (__VLS_ctx.formatDateWithTime(__VLS_ctx.report.volunteerAction.scheduledDate));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "info-item mb-6" },
        });
        /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
        let __VLS_120;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_121 = __VLS_asFunctionalComponent1(__VLS_120, new __VLS_120({
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4 mt-1" },
        }));
        const __VLS_122 = __VLS_121({
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4 mt-1" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_121));
        /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        const { default: __VLS_125 } = __VLS_123.slots;
        // @ts-ignore
        [report, formatDateWithTime,];
        var __VLS_123;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "w-100" },
        });
        /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "font-weight-bold text-primary-dark text-subtitle-1" },
        });
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-primary-dark']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex justify-space-between align-center mb-1" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-black" },
        });
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        (__VLS_ctx.report.volunteerAction.requiredPeople);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "font-weight-bold text-teal" },
        });
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-teal']} */ ;
        (__VLS_ctx.report.volunteerAction.registeredPeople);
        (__VLS_ctx.report.volunteerAction.requiredPeople);
        let __VLS_126;
        /** @ts-ignore @type { | typeof __VLS_components.vProgressLinear | typeof __VLS_components.VProgressLinear | typeof __VLS_components['v-progress-linear'] | typeof __VLS_components.vProgressLinear | typeof __VLS_components.VProgressLinear | typeof __VLS_components['v-progress-linear']} */
        vProgressLinear;
        // @ts-ignore
        const __VLS_127 = __VLS_asFunctionalComponent1(__VLS_126, new __VLS_126({
            modelValue: ((__VLS_ctx.report.volunteerAction.registeredPeople / __VLS_ctx.report.volunteerAction.requiredPeople) * 100),
            color: "#16C79A",
            height: "10",
            rounded: true,
        }));
        const __VLS_128 = __VLS_127({
            modelValue: ((__VLS_ctx.report.volunteerAction.registeredPeople / __VLS_ctx.report.volunteerAction.requiredPeople) * 100),
            color: "#16C79A",
            height: "10",
            rounded: true,
        }, ...__VLS_functionalComponentArgsRest(__VLS_127));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "info-item mb-8" },
        });
        /** @type {__VLS_StyleScopedClasses['info-item']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
        let __VLS_131;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_132 = __VLS_asFunctionalComponent1(__VLS_131, new __VLS_131({
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4 mt-1" },
        }));
        const __VLS_133 = __VLS_132({
            color: "#11698E",
            size: "28",
            ...{ class: "mr-4 mt-1" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_132));
        /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        const { default: __VLS_136 } = __VLS_134.slots;
        // @ts-ignore
        [report, report, report, report, report,];
        var __VLS_134;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "font-weight-bold text-primary-dark text-subtitle-1" },
        });
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-primary-dark']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-black" },
        });
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        (__VLS_ctx.report.location);
        // @ts-ignore
        [report,];
        var __VLS_111;
        // @ts-ignore
        [];
        var __VLS_99;
    }
    let __VLS_137;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_138 = __VLS_asFunctionalComponent1(__VLS_137, new __VLS_137({
        ...{ class: "pa-6 rounded-xl border-card mb-6" },
        elevation: "0",
    }));
    const __VLS_139 = __VLS_138({
        ...{ class: "pa-6 rounded-xl border-card mb-6" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_138));
    /** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    const { default: __VLS_142 } = __VLS_140.slots;
    let __VLS_143;
    /** @ts-ignore @type { | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components['v-card-title'] | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components['v-card-title']} */
    vCardTitle;
    // @ts-ignore
    const __VLS_144 = __VLS_asFunctionalComponent1(__VLS_143, new __VLS_143({
        ...{ class: "font-weight-bold text-h5 text-primary-dark mb-4" },
    }));
    const __VLS_145 = __VLS_144({
        ...{ class: "font-weight-bold text-h5 text-primary-dark mb-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_144));
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-primary-dark']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    const { default: __VLS_148 } = __VLS_146.slots;
    // @ts-ignore
    [];
    var __VLS_146;
    let __VLS_149;
    /** @ts-ignore @type { | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text'] | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text']} */
    vCardText;
    // @ts-ignore
    const __VLS_150 = __VLS_asFunctionalComponent1(__VLS_149, new __VLS_149({}));
    const __VLS_151 = __VLS_150({}, ...__VLS_functionalComponentArgsRest(__VLS_150));
    const { default: __VLS_154 } = __VLS_152.slots;
    if (__VLS_ctx.report.volunteerAction?.notes) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-black mb-0" },
        });
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
        (__VLS_ctx.report.volunteerAction.notes);
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-grey mb-0" },
        });
        /** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    }
    // @ts-ignore
    [report, report,];
    var __VLS_152;
    // @ts-ignore
    [];
    var __VLS_140;
    let __VLS_155;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_156 = __VLS_asFunctionalComponent1(__VLS_155, new __VLS_155({
        ...{ class: "pa-6 rounded-xl border-card" },
        elevation: "0",
    }));
    const __VLS_157 = __VLS_156({
        ...{ class: "pa-6 rounded-xl border-card" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_156));
    /** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    const { default: __VLS_160 } = __VLS_158.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    let __VLS_161;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_162 = __VLS_asFunctionalComponent1(__VLS_161, new __VLS_161({
        ...{ class: "mr-2" },
        color: "#19456B",
        size: "28",
    }));
    const __VLS_163 = __VLS_162({
        ...{ class: "mr-2" },
        color: "#19456B",
        size: "28",
    }, ...__VLS_functionalComponentArgsRest(__VLS_162));
    /** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
    const { default: __VLS_166 } = __VLS_164.slots;
    // @ts-ignore
    [];
    var __VLS_164;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-h5 font-weight-bold" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    (__VLS_ctx.report.comments?.length || 0);
    for (const [comment] of __VLS_vFor((__VLS_ctx.report.comments))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (comment.id),
            ...{ class: "pa-5 rounded-xl mb-4 d-flex" },
            ...{ style: {} },
        });
        /** @type {__VLS_StyleScopedClasses['pa-5']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        let __VLS_167;
        /** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
        vAvatar;
        // @ts-ignore
        const __VLS_168 = __VLS_asFunctionalComponent1(__VLS_167, new __VLS_167({
            size: "40",
            color: "#11698E",
            ...{ class: "mr-4 mt-1" },
        }));
        const __VLS_169 = __VLS_168({
            size: "40",
            color: "#11698E",
            ...{ class: "mr-4 mt-1" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_168));
        /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        const { default: __VLS_172 } = __VLS_170.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-white font-weight-bold" },
        });
        /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        (comment.user.name.charAt(0).toUpperCase());
        // @ts-ignore
        [report, report,];
        var __VLS_170;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "w-100" },
        });
        /** @type {__VLS_StyleScopedClasses['w-100']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex justify-space-between align-center mb-1" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "font-weight-bold text-black text-body-1" },
        });
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
        (comment.user.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-caption text-grey-darken-1" },
        });
        /** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
        (__VLS_ctx.formatDate(comment.createdAt));
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-grey-darken-2 mb-0" },
        });
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
        (comment.text);
        // @ts-ignore
        [formatDate,];
    }
    if (!__VLS_ctx.report.comments?.length) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-center text-grey my-6" },
        });
        /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
        /** @type {__VLS_StyleScopedClasses['my-6']} */ ;
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-start gap-4 mt-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
    let __VLS_173;
    /** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
    vTextField;
    // @ts-ignore
    const __VLS_174 = __VLS_asFunctionalComponent1(__VLS_173, new __VLS_173({
        ...{ 'onKeyup': {} },
        modelValue: (__VLS_ctx.newComment),
        placeholder: "Tulis komentar...",
        variant: "outlined",
        hideDetails: true,
        rounded: "lg",
        color: "#11698E",
        ...{ class: "comment-input" },
    }));
    const __VLS_175 = __VLS_174({
        ...{ 'onKeyup': {} },
        modelValue: (__VLS_ctx.newComment),
        placeholder: "Tulis komentar...",
        variant: "outlined",
        hideDetails: true,
        rounded: "lg",
        color: "#11698E",
        ...{ class: "comment-input" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_174));
    let __VLS_178;
    const __VLS_179 = ({ keyup: {} },
        { onKeyup: (__VLS_ctx.submitComment) });
    /** @type {__VLS_StyleScopedClasses['comment-input']} */ ;
    var __VLS_176;
    var __VLS_177;
    let __VLS_180;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_181 = __VLS_asFunctionalComponent1(__VLS_180, new __VLS_180({
        ...{ 'onClick': {} },
        color: "#11698E",
        height: "56",
        ...{ class: "px-8 text-none font-weight-bold rounded-lg text-white" },
        flat: true,
        disabled: (!__VLS_ctx.newComment.trim()),
    }));
    const __VLS_182 = __VLS_181({
        ...{ 'onClick': {} },
        color: "#11698E",
        height: "56",
        ...{ class: "px-8 text-none font-weight-bold rounded-lg text-white" },
        flat: true,
        disabled: (!__VLS_ctx.newComment.trim()),
    }, ...__VLS_functionalComponentArgsRest(__VLS_181));
    let __VLS_185;
    const __VLS_186 = ({ click: {} },
        { onClick: (__VLS_ctx.submitComment) });
    /** @type {__VLS_StyleScopedClasses['px-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    const { default: __VLS_187 } = __VLS_183.slots;
    let __VLS_188;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_189 = __VLS_asFunctionalComponent1(__VLS_188, new __VLS_188({
        start: true,
    }));
    const __VLS_190 = __VLS_189({
        start: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_189));
    const { default: __VLS_193 } = __VLS_191.slots;
    // @ts-ignore
    [report, newComment, newComment, submitComment, submitComment,];
    var __VLS_191;
    // @ts-ignore
    [];
    var __VLS_183;
    var __VLS_184;
    // @ts-ignore
    [];
    var __VLS_158;
    // @ts-ignore
    [];
    var __VLS_32;
}
// @ts-ignore
[];
var __VLS_15;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
