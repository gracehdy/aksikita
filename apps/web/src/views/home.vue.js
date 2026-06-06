import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import MediaGallery from '../components/mediagallery.vue';
const router = useRouter();
const reports = ref([]);
const filterCategory = ref('all');
const categories = ['all', 'Lingkungan', 'Infrastruktur', 'Sosial', 'Kesehatan'];
const fetchReports = async () => {
    const token = localStorage.getItem('jwt_token');
    if (!token) {
        router.push('/');
        return;
    }
    try {
        const res = await fetch('/api/reports', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (res.ok) {
            const rawReports = await res.json();
            const mappedReports = await Promise.all(rawReports.map(async (item) => {
                try {
                    const nameRes = await fetch(`api/user/displayName/${item.userId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (nameRes.ok) {
                        const nameData = await nameRes.json();
                        return {
                            report: item,
                            displayName: nameData.result || 'User Tanpa Nama'
                        };
                    }
                }
                catch (err) {
                    console.error(`Gagal memuat nama untuk report ${item.id}:`, err);
                }
                return {
                    report: item,
                    displayName: 'User Tanpa Nama'
                };
            }));
            reports.value = mappedReports;
        }
        else if (res.status === 401) {
            alert("Sesi Anda telah berakhir. Silakan login kembali.");
            localStorage.removeItem('jwt_token');
            router.push('/');
        }
        else {
            console.error("Gagal memuat laporan");
        }
    }
    catch (error) {
        console.error("Error jaringan:", error);
    }
};
onMounted(() => {
    fetchReports();
});
const filteredReports = computed(() => {
    return filterCategory.value === 'all'
        ? reports.value
        : reports.value.filter(item => item.report.category === filterCategory.value);
});
const getActionProperties = (status) => {
    if (status === 'Selesai') {
        return { color: 'grey', text: 'Sudah selesai', textClass: 'text-grey' };
    }
    if (status === 'Berlangsung') {
        return { color: 'primary', text: 'Ikut Sekarang', textClass: 'text-primary' };
    }
    return { color: 'secondary', text: 'Ikuti aksi', textClass: 'text-secondary' };
};
const goToCreate = () => {
    router.push('/buatLaporan');
};
const goToDetail = (report) => {
    if (report.volunteerAction) {
        router.push({
            name: 'detailAksi',
            params: { id: report.id }
        });
    }
    else {
        router.push({
            name: 'detailLaporan',
            params: { id: report.id }
        });
    }
};
const formatDate = (date) => {
    if (!date)
        return '';
    return new Date(date).toLocaleDateString('id-ID');
};
const goToDaftarRelawan = (id) => {
    router.push({
        path: '/daftarRelawan',
        query: { idLaporan: id }
    });
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['active-nav']} */ ;
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
/** @ts-ignore @type { | typeof __VLS_components.vSpacer | typeof __VLS_components.VSpacer | typeof __VLS_components['v-spacer'] | typeof __VLS_components.vSpacer | typeof __VLS_components.VSpacer | typeof __VLS_components['v-spacer']} */
vSpacer;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_17;
/** @ts-ignore @type { | typeof __VLS_components.vMain | typeof __VLS_components.VMain | typeof __VLS_components['v-main'] | typeof __VLS_components.vMain | typeof __VLS_components.VMain | typeof __VLS_components['v-main']} */
vMain;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    ...{ class: "bg-white" },
}));
const __VLS_19 = __VLS_18({
    ...{ class: "bg-white" },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
const { default: __VLS_22 } = __VLS_20.slots;
let __VLS_23;
/** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
vContainer;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent1(__VLS_23, new __VLS_23({
    ...{ class: "px-15 py-10" },
    fluid: true,
}));
const __VLS_25 = __VLS_24({
    ...{ class: "px-15 py-10" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
/** @type {__VLS_StyleScopedClasses['px-15']} */ ;
/** @type {__VLS_StyleScopedClasses['py-10']} */ ;
const { default: __VLS_28 } = __VLS_26.slots;
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
let __VLS_29;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent1(__VLS_29, new __VLS_29({
    color: "#11698E",
    to: "/buatLaporan",
    ...{ class: "action-btn" },
    elevation: "0",
}));
const __VLS_31 = __VLS_30({
    color: "#11698E",
    to: "/buatLaporan",
    ...{ class: "action-btn" },
    elevation: "0",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
/** @type {__VLS_StyleScopedClasses['action-btn']} */ ;
const { default: __VLS_34 } = __VLS_32.slots;
let __VLS_35;
/** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
vIcon;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
    start: true,
}));
const __VLS_37 = __VLS_36({
    start: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
const { default: __VLS_40 } = __VLS_38.slots;
var __VLS_38;
var __VLS_32;
let __VLS_41;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    prependInnerIcon: "mdi-magnify",
    placeholder: "Cari laporan berdasarkan judul, deskripsi, atau lokasi...",
    variant: "outlined",
    rounded: "lg",
    hideDetails: true,
    ...{ class: "mb-6 search-bar" },
    color: "#11698E",
}));
const __VLS_43 = __VLS_42({
    prependInnerIcon: "mdi-magnify",
    placeholder: "Cari laporan berdasarkan judul, deskripsi, atau lokasi...",
    variant: "outlined",
    rounded: "lg",
    hideDetails: true,
    ...{ class: "mb-6 search-bar" },
    color: "#11698E",
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
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
for (const [cat] of __VLS_vFor((__VLS_ctx.categories))) {
    let __VLS_46;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent1(__VLS_46, new __VLS_46({
        ...{ 'onClick': {} },
        key: (cat),
        ...{ class: "filter-btn" },
        ...{ class: ({ 'filter-active': __VLS_ctx.filterCategory === cat }) },
        variant: "flat",
    }));
    const __VLS_48 = __VLS_47({
        ...{ 'onClick': {} },
        key: (cat),
        ...{ class: "filter-btn" },
        ...{ class: ({ 'filter-active': __VLS_ctx.filterCategory === cat }) },
        variant: "flat",
    }, ...__VLS_functionalComponentArgsRest(__VLS_47));
    let __VLS_51;
    const __VLS_52 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.filterCategory = cat;
                // @ts-ignore
                [categories, filterCategory, filterCategory,];
            } });
    /** @type {__VLS_StyleScopedClasses['filter-btn']} */ ;
    /** @type {__VLS_StyleScopedClasses['filter-active']} */ ;
    const { default: __VLS_53 } = __VLS_49.slots;
    (cat === 'all' ? 'Semua Kategori' : cat);
    // @ts-ignore
    [];
    var __VLS_49;
    var __VLS_50;
    // @ts-ignore
    [];
}
if (__VLS_ctx.filteredReports.length > 0) {
    let __VLS_54;
    /** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
    vRow;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const { default: __VLS_59 } = __VLS_57.slots;
    for (const [{ report, displayName }] of __VLS_vFor((__VLS_ctx.filteredReports))) {
        let __VLS_60;
        /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
        vCol;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({
            key: (report.id),
            cols: "12",
            md: "6",
            lg: "4",
        }));
        const __VLS_62 = __VLS_61({
            key: (report.id),
            cols: "12",
            md: "6",
            lg: "4",
        }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        const { default: __VLS_65 } = __VLS_63.slots;
        let __VLS_66;
        /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
        vCard;
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent1(__VLS_66, new __VLS_66({
            ...{ 'onClick': {} },
            ...{ class: "report-card" },
            elevation: "0",
        }));
        const __VLS_68 = __VLS_67({
            ...{ 'onClick': {} },
            ...{ class: "report-card" },
            elevation: "0",
        }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        let __VLS_71;
        const __VLS_72 = ({ click: {} },
            { onClick: (...[$event]) => {
                    if (!(__VLS_ctx.filteredReports.length > 0))
                        return;
                    __VLS_ctx.goToDetail(report);
                    // @ts-ignore
                    [filteredReports, filteredReports, goToDetail,];
                } });
        /** @type {__VLS_StyleScopedClasses['report-card']} */ ;
        const { default: __VLS_73 } = __VLS_69.slots;
        if (report.image) {
            let __VLS_74;
            /** @ts-ignore @type { | typeof __VLS_components.vImg | typeof __VLS_components.VImg | typeof __VLS_components['v-img'] | typeof __VLS_components.vImg | typeof __VLS_components.VImg | typeof __VLS_components['v-img']} */
            vImg;
            // @ts-ignore
            const __VLS_75 = __VLS_asFunctionalComponent1(__VLS_74, new __VLS_74({
                src: (report.image),
                height: "220",
                cover: true,
                ...{ class: "rounded-lg" },
            }));
            const __VLS_76 = __VLS_75({
                src: (report.image),
                height: "220",
                cover: true,
                ...{ class: "rounded-lg" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_75));
            /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
        }
        else {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "no-image-placeholder rounded-lg" },
            });
            /** @type {__VLS_StyleScopedClasses['no-image-placeholder']} */ ;
            /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
            let __VLS_79;
            /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
            vIcon;
            // @ts-ignore
            const __VLS_80 = __VLS_asFunctionalComponent1(__VLS_79, new __VLS_79({
                size: "48",
                color: "#11698E",
            }));
            const __VLS_81 = __VLS_80({
                size: "48",
                color: "#11698E",
            }, ...__VLS_functionalComponentArgsRest(__VLS_80));
            const { default: __VLS_84 } = __VLS_82.slots;
            // @ts-ignore
            [];
            var __VLS_82;
        }
        let __VLS_85;
        /** @ts-ignore @type { | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text'] | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text']} */
        vCardText;
        // @ts-ignore
        const __VLS_86 = __VLS_asFunctionalComponent1(__VLS_85, new __VLS_85({
            ...{ class: "px-0 pt-4" },
        }));
        const __VLS_87 = __VLS_86({
            ...{ class: "px-0 pt-4" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_86));
        /** @type {__VLS_StyleScopedClasses['px-0']} */ ;
        /** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
        const { default: __VLS_90 } = __VLS_88.slots;
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
        const __VLS_91 = MediaGallery;
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({
            mediaList: (report.media),
        }));
        const __VLS_93 = __VLS_92({
            mediaList: (report.media),
        }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex align-center mb-4 ga-3" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['ga-3']} */ ;
        let __VLS_96;
        /** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
        vAvatar;
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
            size: "36",
            color: "#11698E",
        }));
        const __VLS_98 = __VLS_97({
            size: "36",
            color: "#11698E",
        }, ...__VLS_functionalComponentArgsRest(__VLS_97));
        const { default: __VLS_101 } = __VLS_99.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-white font-weight-bold" },
        });
        /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        (displayName.charAt(0).toUpperCase() || 'U');
        // @ts-ignore
        [];
        var __VLS_99;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "author-name" },
        });
        /** @type {__VLS_StyleScopedClasses['author-name']} */ ;
        (displayName);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "post-date" },
        });
        /** @type {__VLS_StyleScopedClasses['post-date']} */ ;
        (__VLS_ctx.formatDate(report.createdAt));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "d-flex justify-space-between align-center mb-3" },
        });
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
        /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
        let __VLS_102;
        /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
        vChip;
        // @ts-ignore
        const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
            size: "small",
            ...{ class: "category-chip" },
        }));
        const __VLS_104 = __VLS_103({
            size: "small",
            ...{ class: "category-chip" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_103));
        /** @type {__VLS_StyleScopedClasses['category-chip']} */ ;
        const { default: __VLS_107 } = __VLS_105.slots;
        (report.category);
        // @ts-ignore
        [formatDate,];
        var __VLS_105;
        if (report.volunteerAction) {
            let __VLS_108;
            /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
            vChip;
            // @ts-ignore
            const __VLS_109 = __VLS_asFunctionalComponent1(__VLS_108, new __VLS_108({
                size: "small",
                color: (__VLS_ctx.getActionProperties(report.volunteerAction?.status).color),
                ...{ class: "text-white font-weight-bold" },
            }));
            const __VLS_110 = __VLS_109({
                size: "small",
                color: (__VLS_ctx.getActionProperties(report.volunteerAction?.status).color),
                ...{ class: "text-white font-weight-bold" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_109));
            /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
            /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
            const { default: __VLS_113 } = __VLS_111.slots;
            (report.volunteerAction?.status);
            // @ts-ignore
            [getActionProperties,];
            var __VLS_111;
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
            ...{ class: "report-title mb-2" },
        });
        /** @type {__VLS_StyleScopedClasses['report-title']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
        (report.title);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "report-desc mb-4" },
        });
        /** @type {__VLS_StyleScopedClasses['report-desc']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        (report.description);
        if (report.location) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "d-flex align-center location-text mb-4" },
            });
            /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
            /** @type {__VLS_StyleScopedClasses['location-text']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
            let __VLS_114;
            /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
            vIcon;
            // @ts-ignore
            const __VLS_115 = __VLS_asFunctionalComponent1(__VLS_114, new __VLS_114({
                size: "16",
                ...{ class: "mr-1" },
            }));
            const __VLS_116 = __VLS_115({
                size: "16",
                ...{ class: "mr-1" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_115));
            /** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
            const { default: __VLS_119 } = __VLS_117.slots;
            // @ts-ignore
            [];
            var __VLS_117;
            (report.location);
        }
        if (report.volunteerAction) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "volunteer-box mt-4" },
            });
            /** @type {__VLS_StyleScopedClasses['volunteer-box']} */ ;
            /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "d-flex align-center justify-space-between mb-4" },
            });
            /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
            /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
            /** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
            /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "volunteer-info" },
            });
            /** @type {__VLS_StyleScopedClasses['volunteer-info']} */ ;
            let __VLS_120;
            /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
            vIcon;
            // @ts-ignore
            const __VLS_121 = __VLS_asFunctionalComponent1(__VLS_120, new __VLS_120({
                size: "18",
                ...{ class: "mr-1" },
            }));
            const __VLS_122 = __VLS_121({
                size: "18",
                ...{ class: "mr-1" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_121));
            /** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
            const { default: __VLS_125 } = __VLS_123.slots;
            // @ts-ignore
            [];
            var __VLS_123;
            (report.volunteerAction.registeredPeople);
            (report.volunteerAction.requiredPeople);
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "volunteer-info" },
            });
            /** @type {__VLS_StyleScopedClasses['volunteer-info']} */ ;
            let __VLS_126;
            /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
            vIcon;
            // @ts-ignore
            const __VLS_127 = __VLS_asFunctionalComponent1(__VLS_126, new __VLS_126({
                size: "18",
                ...{ class: "mr-1" },
            }));
            const __VLS_128 = __VLS_127({
                size: "18",
                ...{ class: "mr-1" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_127));
            /** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
            const { default: __VLS_131 } = __VLS_129.slots;
            // @ts-ignore
            [];
            var __VLS_129;
            (report.volunteerAction.scheduledDate
                ? __VLS_ctx.formatDate(report.volunteerAction.scheduledDate)
                : 'Tanggal belum tersedia');
            let __VLS_132;
            /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
            vBtn;
            // @ts-ignore
            const __VLS_133 = __VLS_asFunctionalComponent1(__VLS_132, new __VLS_132({
                ...{ 'onClick': {} },
                block: true,
                color: (__VLS_ctx.getActionProperties(report.volunteerAction?.status).color),
                ...{ class: (__VLS_ctx.getActionProperties(report.volunteerAction?.status).textClass) },
                ...{ class: "volunteer-btn" },
                elevation: "0",
                disabled: (report.volunteerAction?.status === 'Selesai'),
            }));
            const __VLS_134 = __VLS_133({
                ...{ 'onClick': {} },
                block: true,
                color: (__VLS_ctx.getActionProperties(report.volunteerAction?.status).color),
                ...{ class: (__VLS_ctx.getActionProperties(report.volunteerAction?.status).textClass) },
                ...{ class: "volunteer-btn" },
                elevation: "0",
                disabled: (report.volunteerAction?.status === 'Selesai'),
            }, ...__VLS_functionalComponentArgsRest(__VLS_133));
            let __VLS_137;
            const __VLS_138 = ({ click: {} },
                { onClick: (...[$event]) => {
                        if (!(__VLS_ctx.filteredReports.length > 0))
                            return;
                        if (!(report.volunteerAction))
                            return;
                        __VLS_ctx.goToDaftarRelawan(report.id);
                        // @ts-ignore
                        [formatDate, getActionProperties, getActionProperties, goToDaftarRelawan,];
                    } });
            /** @type {__VLS_StyleScopedClasses['volunteer-btn']} */ ;
            const { default: __VLS_139 } = __VLS_135.slots;
            (__VLS_ctx.getActionProperties(report.volunteerAction?.status).text);
            // @ts-ignore
            [getActionProperties,];
            var __VLS_135;
            var __VLS_136;
        }
        // @ts-ignore
        [];
        var __VLS_88;
        // @ts-ignore
        [];
        var __VLS_69;
        var __VLS_70;
        // @ts-ignore
        [];
        var __VLS_63;
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_57;
}
else {
    let __VLS_140;
    /** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
    vRow;
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent1(__VLS_140, new __VLS_140({}));
    const __VLS_142 = __VLS_141({}, ...__VLS_functionalComponentArgsRest(__VLS_141));
    const { default: __VLS_145 } = __VLS_143.slots;
    let __VLS_146;
    /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
    vCol;
    // @ts-ignore
    const __VLS_147 = __VLS_asFunctionalComponent1(__VLS_146, new __VLS_146({
        cols: "12",
    }));
    const __VLS_148 = __VLS_147({
        cols: "12",
    }, ...__VLS_functionalComponentArgsRest(__VLS_147));
    const { default: __VLS_151 } = __VLS_149.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "no-reports-placeholder rounded-xl d-flex flex-column align-center justify-center" },
    });
    /** @type {__VLS_StyleScopedClasses['no-reports-placeholder']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
    let __VLS_152;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_153 = __VLS_asFunctionalComponent1(__VLS_152, new __VLS_152({
        size: "80",
        color: "#11698E",
        ...{ class: "mb-4" },
    }));
    const __VLS_154 = __VLS_153({
        size: "80",
        color: "#11698E",
        ...{ class: "mb-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_153));
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    const { default: __VLS_157 } = __VLS_155.slots;
    // @ts-ignore
    [];
    var __VLS_155;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
        ...{ class: "placeholder-title" },
    });
    /** @type {__VLS_StyleScopedClasses['placeholder-title']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "placeholder-subtitle text-center mt-2" },
    });
    /** @type {__VLS_StyleScopedClasses['placeholder-subtitle']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    // @ts-ignore
    [];
    var __VLS_149;
    // @ts-ignore
    [];
    var __VLS_143;
}
// @ts-ignore
[];
var __VLS_26;
// @ts-ignore
[];
var __VLS_20;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
