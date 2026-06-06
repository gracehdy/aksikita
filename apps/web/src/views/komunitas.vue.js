import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import MediaGallery from '../components/mediagallery.vue';
const router = useRouter();
const reports = ref([]);
const filterStatus = ref('Semua');
const filterOptions = [
    { label: 'Semua', value: 'Semua' },
    { label: 'Akan Datang', value: 'Akan Datang' },
    { label: 'Sedang Berjalan', value: 'Sedang Berjalan' },
    { label: 'Selesai', value: 'Selesai' }
];
const fetchActions = async () => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
        router.push('/');
        return;
    }
    try {
        const res = await fetch('http://localhost:3000/api/actions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.ok) {
            const data = await res.json();
            reports.value = data;
        }
        else if (res.status === 401) {
            localStorage.removeItem('jwt_token');
            router.push('/');
        }
    }
    catch (error) {
        console.error("Error mengambil data aksi:", error);
    }
};
onMounted(() => {
    fetchActions();
});
const filteredReports = computed(() => {
    const dataAksiSaja = reports.value.filter(r => r.volunteerAction);
    if (filterStatus.value === 'Semua')
        return dataAksiSaja;
    return dataAksiSaja.filter(r => {
        const rStatus = formatStatusText(r.status);
        return rStatus === filterStatus.value;
    });
});
const goToDetail = (report) => {
    router.push({ name: 'detailAksi', params: { id: report.id } });
};
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
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
const getProgressBarColor = (status) => {
    const s = formatStatusText(status);
    if (s === 'Sedang Berjalan')
        return '#11698E';
    if (s === 'Selesai')
        return 'grey';
    return '#16C79A';
};
const getButtonConfig = (status) => {
    const s = formatStatusText(status);
    if (s === 'Sedang Berjalan') {
        return { color: '#11698E', text: 'Lihat Detail', textClass: 'text-none text-white font-weight-bold' };
    }
    if (s === 'Selesai') {
        return { color: 'grey-lighten-2', text: 'Aksi Selesai', textClass: 'text-none text-grey-darken-3 font-weight-bold' };
    }
    return { color: '#16C79A', text: 'Daftar Sekarang', textClass: 'text-none text-white font-weight-bold' };
};
const handleActionClick = (report) => {
    const statusText = formatStatusText(report.status);
    if (statusText === 'Akan Datang') {
        router.push({ path: '/daftarRelawan', query: { idAksi: report.id } });
    }
    else {
        goToDetail(report);
    }
};
const goToDaftarRelawan = (id) => {
    router.push({ path: '/daftarRelawan', query: { idAksi: id } });
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['active-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['card-hover']} */ ;
/** @type {__VLS_StyleScopedClasses['report-card']} */ ;
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
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    ...{ class: "bg-white" },
}));
const __VLS_14 = __VLS_13({
    ...{ class: "bg-white" },
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
const { default: __VLS_17 } = __VLS_15.slots;
let __VLS_18;
/** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
vContainer;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
    ...{ class: "px-md-15 py-10" },
    fluid: true,
}));
const __VLS_20 = __VLS_19({
    ...{ class: "px-md-15 py-10" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
/** @type {__VLS_StyleScopedClasses['px-md-15']} */ ;
/** @type {__VLS_StyleScopedClasses['py-10']} */ ;
const { default: __VLS_23 } = __VLS_21.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-10" },
});
/** @type {__VLS_StyleScopedClasses['mb-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-h4 font-weight-bold section-title mb-2" },
});
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['section-title']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex justify-space-between align-center" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "section-subtitle" },
});
/** @type {__VLS_StyleScopedClasses['section-subtitle']} */ ;
let __VLS_24;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    prependInnerIcon: "mdi-magnify",
    placeholder: "Cari aksi berdasarkan judul, deskripsi, atau lokasi...",
    variant: "outlined",
    rounded: "lg",
    hideDetails: true,
    ...{ class: "mb-6 search-bar" },
    color: "#11698E",
}));
const __VLS_26 = __VLS_25({
    prependInnerIcon: "mdi-magnify",
    placeholder: "Cari aksi berdasarkan judul, deskripsi, atau lokasi...",
    variant: "outlined",
    rounded: "lg",
    hideDetails: true,
    ...{ class: "mb-6 search-bar" },
    color: "#11698E",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex ga-3 mb-8 overflow-x-auto pb-2" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['ga-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
for (const [status] of __VLS_vFor((__VLS_ctx.filterOptions))) {
    let __VLS_29;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
        ...{ 'onClick': {} },
        key: (status.value),
        ...{ class: "filter-btn text-none font-weight-medium" },
        ...{ class: ({ 'filter-active': __VLS_ctx.filterStatus === status.value }) },
        variant: "flat",
        rounded: "lg",
    }));
    const __VLS_31 = __VLS_30({
        ...{ 'onClick': {} },
        key: (status.value),
        ...{ class: "filter-btn text-none font-weight-medium" },
        ...{ class: ({ 'filter-active': __VLS_ctx.filterStatus === status.value }) },
        variant: "flat",
        rounded: "lg",
    }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    let __VLS_34;
    const __VLS_35 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.filterStatus = status.value;
                // @ts-ignore
                [filterOptions, filterStatus, filterStatus,];
            } });
    /** @type {__VLS_StyleScopedClasses['filter-btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-medium']} */ ;
    /** @type {__VLS_StyleScopedClasses['filter-active']} */ ;
    const { default: __VLS_36 } = __VLS_32.slots;
    (status.label);
    // @ts-ignore
    [];
    var __VLS_32;
    var __VLS_33;
    // @ts-ignore
    [];
}
if (__VLS_ctx.filteredReports.length > 0) {
    let __VLS_37;
    /** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
    vRow;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const { default: __VLS_42 } = __VLS_40.slots;
    for (const [report] of __VLS_vFor((__VLS_ctx.filteredReports))) {
        let __VLS_43;
        /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
        vCol;
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
            key: (report.id),
            cols: "12",
            md: "6",
            lg: "4",
        }));
        const __VLS_45 = __VLS_44({
            key: (report.id),
            cols: "12",
            md: "6",
            lg: "4",
        }, ...__VLS_functionalComponentArgsRest(__VLS_44));
        const { default: __VLS_48 } = __VLS_46.slots;
        let __VLS_49;
        /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
        vCard;
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
            ...{ 'onClick': {} },
            ...{ class: "rounded-xl border-card report-card pa-0" },
            elevation: "0",
        }));
        const __VLS_51 = __VLS_50({
            ...{ 'onClick': {} },
            ...{ class: "rounded-xl border-card report-card pa-0" },
            elevation: "0",
        }, ...__VLS_functionalComponentArgsRest(__VLS_50));
        let __VLS_54;
        const __VLS_55 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredReports.length > 0))
                        return;
                    __VLS_ctx.goToDetail(report);
                    // @ts-ignore
                    [filteredReports, filteredReports, goToDetail,];
                } });
        /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
        /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
        /** @type {__VLS_StyleScopedClasses['report-card']} */ ;
        /** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
        const { default: __VLS_56 } = __VLS_52.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "pa-0" },
        });
        /** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
        const __VLS_57 = MediaGallery;
        // @ts-ignore
        const __VLS_58 = __VLS_asFunctionalComponent1(__VLS_57, new __VLS_57({
            mediaList: (report.media),
        }));
        const __VLS_59 = __VLS_58({
            mediaList: (report.media),
        }, ...__VLS_functionalComponentArgsRest(__VLS_58));
        let __VLS_62;
        /** @ts-ignore @type { | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text'] | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text']} */
        vCardText;
        // @ts-ignore
        const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
            ...{ class: "pa-5" },
        }));
        const __VLS_64 = __VLS_63({
            ...{ class: "pa-5" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_63));
        /** @type {__VLS_StyleScopedClasses['pa-5']} */ ;
        const { default: __VLS_67 } = __VLS_65.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex align-center mb-4" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        let __VLS_68;
        /** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
        vAvatar;
        // @ts-ignore
        const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
            color: "#11698E",
            size: "36",
            ...{ class: "text-white font-weight-bold" },
        }));
        const __VLS_70 = __VLS_69({
            color: "#11698E",
            size: "36",
            ...{ class: "text-white font-weight-bold" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_69));
        /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        const { default: __VLS_73 } = __VLS_71.slots;
        (report.author.name.charAt(0).toUpperCase());
        // @ts-ignore
        [];
        var __VLS_71;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "ml-3" },
        });
        /** @type {__VLS_StyleScopedClasses['ml-3']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "author-name" },
        });
        /** @type {__VLS_StyleScopedClasses['author-name']} */ ;
        (report.author.name);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "post-date" },
        });
        /** @type {__VLS_StyleScopedClasses['post-date']} */ ;
        (__VLS_ctx.formatDate(report.createdAt));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex align-center mb-3" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
        let __VLS_74;
        /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
        vChip;
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
            size: "small",
            ...{ class: "category-chip" },
        }));
        const __VLS_76 = __VLS_75({
            size: "small",
            ...{ class: "category-chip" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_75));
        /** @type {__VLS_StyleScopedClasses['category-chip']} */ ;
        const { default: __VLS_79 } = __VLS_77.slots;
        (report.category);
        // @ts-ignore
        [formatDate,];
        var __VLS_77;
        let __VLS_80;
        /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
        vChip;
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent1(__VLS_80, new __VLS_80({
            size: "small",
            color: (__VLS_ctx.getStatusColor(report.status)),
            variant: "flat",
            ...{ class: "text-white font-weight-bold px-3" },
        }));
        const __VLS_82 = __VLS_81({
            size: "small",
            color: (__VLS_ctx.getStatusColor(report.status)),
            variant: "flat",
            ...{ class: "text-white font-weight-bold px-3" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        /** @type {__VLS_StyleScopedClasses['px-3']} */ ;
        const { default: __VLS_85 } = __VLS_83.slots;
        let __VLS_86;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent1(__VLS_86, new __VLS_86({
            start: true,
            icon: (__VLS_ctx.getStatusIcon(report.status)),
            size: "small",
        }));
        const __VLS_88 = __VLS_87({
            start: true,
            icon: (__VLS_ctx.getStatusIcon(report.status)),
            size: "small",
        }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        (__VLS_ctx.formatStatusText(report.status));
        // @ts-ignore
        [getStatusColor, getStatusIcon, formatStatusText,];
        var __VLS_83;
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
            ...{ class: "report-title text-truncate" },
        });
        /** @type {__VLS_StyleScopedClasses['report-title']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-truncate']} */ ;
        (report.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-body-2 text-grey-darken-1 mb-4 report-desc" },
            ...{ style: {} },
        });
        /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['report-desc']} */ ;
        (report.description);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-body-2 text-grey-darken-2 mb-1 text-truncate" },
        });
        /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-truncate']} */ ;
        let __VLS_91;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({
            color: "#14b8a6",
            size: "small",
            ...{ class: "mr-2" },
        }));
        const __VLS_93 = __VLS_92({
            color: "#14b8a6",
            size: "small",
            ...{ class: "mr-2" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        /** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
        const { default: __VLS_96 } = __VLS_94.slots;
        // @ts-ignore
        [];
        var __VLS_94;
        (report.location);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-body-2 text-grey-darken-2 mb-5" },
        });
        /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
        let __VLS_97;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_98 = __VLS_asFunctionalComponent1(__VLS_97, new __VLS_97({
            color: "#14b8a6",
            size: "small",
            ...{ class: "mr-2" },
        }));
        const __VLS_99 = __VLS_98({
            color: "#14b8a6",
            size: "small",
            ...{ class: "mr-2" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_98));
        /** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
        const { default: __VLS_102 } = __VLS_100.slots;
        // @ts-ignore
        [];
        var __VLS_100;
        (report.volunteerAction ? __VLS_ctx.formatDate(report.volunteerAction.scheduledDate) : 'Tanggal belum ditentukan');
        if (report.volunteerAction) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "d-flex justify-space-between text-body-2 mb-1" },
            });
            /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
            /** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "text-grey-darken-2" },
            });
            /** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "font-weight-bold" },
            });
            /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
            (report.volunteerAction.registeredPeople);
            (report.volunteerAction.requiredPeople);
            let __VLS_103;
            /** @ts-ignore @type { | typeof __VLS_components.vProgressLinear | typeof __VLS_components.VProgressLinear | typeof __VLS_components['v-progress-linear'] | typeof __VLS_components.vProgressLinear | typeof __VLS_components.VProgressLinear | typeof __VLS_components['v-progress-linear']} */
            vProgressLinear;
            // @ts-ignore
            const __VLS_104 = __VLS_asFunctionalComponent1(__VLS_103, new __VLS_103({
                modelValue: ((report.volunteerAction.registeredPeople / report.volunteerAction.requiredPeople) * 100),
                color: (__VLS_ctx.getProgressBarColor(report.status)),
                height: "8",
                rounded: true,
                ...{ class: "mb-5" },
            }));
            const __VLS_105 = __VLS_104({
                modelValue: ((report.volunteerAction.registeredPeople / report.volunteerAction.requiredPeople) * 100),
                color: (__VLS_ctx.getProgressBarColor(report.status)),
                height: "8",
                rounded: true,
                ...{ class: "mb-5" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_104));
            /** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
        }
        let __VLS_108;
        /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
        vBtn;
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent1(__VLS_108, new __VLS_108({
            ...{ 'onClick': {} },
            block: true,
            color: (__VLS_ctx.getButtonConfig(report.status).color),
            ...{ class: (__VLS_ctx.getButtonConfig(report.status).textClass) },
            rounded: "lg",
            size: "large",
            flat: true,
            disabled: (report.status === 'Selesai'),
        }));
        const __VLS_110 = __VLS_109({
            ...{ 'onClick': {} },
            block: true,
            color: (__VLS_ctx.getButtonConfig(report.status).color),
            ...{ class: (__VLS_ctx.getButtonConfig(report.status).textClass) },
            rounded: "lg",
            size: "large",
            flat: true,
            disabled: (report.status === 'Selesai'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_109));
        let __VLS_113;
        const __VLS_114 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredReports.length > 0))
                        return;
                    __VLS_ctx.handleActionClick(report);
                    // @ts-ignore
                    [formatDate, getProgressBarColor, getButtonConfig, getButtonConfig, handleActionClick,];
                } });
        const { default: __VLS_115 } = __VLS_111.slots;
        (__VLS_ctx.getButtonConfig(report.status).text);
        // @ts-ignore
        [getButtonConfig,];
        var __VLS_111;
        var __VLS_112;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-center mt-4" },
        });
        /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredReports.length > 0))
                        return;
                    __VLS_ctx.goToDetail(report);
                    // @ts-ignore
                    [goToDetail,];
                } },
            href: "#",
            ...{ class: "text-grey-darken-1 text-decoration-none text-caption d-inline-flex align-center hover-blue" },
        });
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-inline-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['hover-blue']} */ ;
        let __VLS_116;
        /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
        vIcon;
        // @ts-ignore
        const __VLS_117 = __VLS_asFunctionalComponent1(__VLS_116, new __VLS_116({
            size: "small",
            ...{ class: "mr-1" },
        }));
        const __VLS_118 = __VLS_117({
            size: "small",
            ...{ class: "mr-1" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_117));
        /** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
        const { default: __VLS_121 } = __VLS_119.slots;
        // @ts-ignore
        [];
        var __VLS_119;
        // @ts-ignore
        [];
        var __VLS_65;
        // @ts-ignore
        [];
        var __VLS_52;
        var __VLS_53;
        // @ts-ignore
        [];
        var __VLS_46;
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_40;
}
else {
    let __VLS_122;
    /** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
    vRow;
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent1(__VLS_122, new __VLS_122({}));
    const __VLS_124 = __VLS_123({}, ...__VLS_functionalComponentArgsRest(__VLS_123));
    const { default: __VLS_127 } = __VLS_125.slots;
    let __VLS_128;
    /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
    vCol;
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent1(__VLS_128, new __VLS_128({
        cols: "12",
    }));
    const __VLS_130 = __VLS_129({
        cols: "12",
    }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    const { default: __VLS_133 } = __VLS_131.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "no-reports-placeholder rounded-xl d-flex flex-column align-center justify-center py-15" },
    });
    /** @type {__VLS_StyleScopedClasses['no-reports-placeholder']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-15']} */ ;
    let __VLS_134;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_135 = __VLS_asFunctionalComponent1(__VLS_134, new __VLS_134({
        size: "80",
        color: "#11698E",
        ...{ class: "mb-4" },
    }));
    const __VLS_136 = __VLS_135({
        size: "80",
        color: "#11698E",
        ...{ class: "mb-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    const { default: __VLS_139 } = __VLS_137.slots;
    // @ts-ignore
    [];
    var __VLS_137;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "placeholder-title" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['placeholder-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "placeholder-subtitle text-center mt-2 text-grey" },
    });
    /** @type {__VLS_StyleScopedClasses['placeholder-subtitle']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
    // @ts-ignore
    [];
    var __VLS_131;
    // @ts-ignore
    [];
    var __VLS_125;
}
// @ts-ignore
[];
var __VLS_21;
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
