import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import MediaGallery from "../components/mediagallery.vue";
const route = useRoute();
const router = useRouter();
const reportData = ref(null);
const newComment = ref("");
const reportId = route.params.id;
const authorName = computed(() => {
    const a = reportData.value?.author;
    if (a && typeof a === "object" && a.name && a.name !== "User")
        return a.name;
    if (a && typeof a === "string" && a !== "User")
        return a;
    const u = reportData.value?.user;
    if (u)
        return u.displayName || u.username || "User";
    return "User";
});
const fetchReportDetail = async () => {
    const token = localStorage.getItem("jwt_token");
    if (!token) {
        router.push("/");
        return;
    }
    try {
        const res = await fetch(`http://localhost:3000/api/reports/${reportId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        if (res.ok) {
            const data = await res.json();
            console.log("fetchReportDetail response:", data);
            reportData.value = data;
        }
        else if (res.status === 401) {
            alert("Sesi Anda telah berakhir. Silakan login kembali.");
            localStorage.removeItem("jwt_token");
            router.push("/");
        }
        else {
            console.error("Gagal memuat detail laporan");
        }
    }
    catch (error) {
        console.error("Terjadi kesalahan jaringan:", error);
    }
};
const submitComment = async () => {
    if (!newComment.value.trim())
        return;
    const token = localStorage.getItem("jwt_token");
    if (!token)
        return;
    try {
        const res = await fetch(`http://localhost:3000/api/reports/${reportId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                text: newComment.value,
            }),
        });
        if (res.ok) {
            newComment.value = "";
            fetchReportDetail();
        }
        else {
            alert("Gagal mengirim komentar.");
        }
    }
    catch (error) {
        console.error("Kesalahan mengirim komentar:", error);
    }
};
const goToBuatAksi = (id) => {
    router.push({
        path: `/buatAksi/${id}`,
        // query: { idLaporan: id }
    });
};
onMounted(() => {
    fetchReportDetail();
});
const formatDate = (dateString) => {
    if (!dateString)
        return "";
    const date = new Date(dateString);
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
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
const __VLS_33 = __VLS_asFunctionalComponent1(__VLS_32, new __VLS_32({
    ...{ style: {} },
    theme: "light",
}));
const __VLS_34 = __VLS_33({
    ...{ style: {} },
    theme: "light",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
const { default: __VLS_37 } = __VLS_35.slots;
if (!__VLS_ctx.reportData) {
    let __VLS_38;
    /** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
    vContainer;
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
        ...{ class: "px-15 py-10 text-center" },
    }));
    const __VLS_40 = __VLS_39({
        ...{ class: "px-15 py-10 text-center" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    /** @type {__VLS_StyleScopedClasses['px-15']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-10']} */ ;
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
    [reportData,];
    var __VLS_41;
}
else {
    let __VLS_49;
    /** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
    vContainer;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
        ...{ class: "px-15 py-10" },
    }));
    const __VLS_51 = __VLS_50({
        ...{ class: "px-15 py-10" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    /** @type {__VLS_StyleScopedClasses['px-15']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-10']} */ ;
    const { default: __VLS_54 } = __VLS_52.slots;
    let __VLS_55;
    /** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
    vRow;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
        justify: "center",
    }));
    const __VLS_57 = __VLS_56({
        justify: "center",
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    const { default: __VLS_60 } = __VLS_58.slots;
    let __VLS_61;
    /** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
    vCol;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
        cols: "12",
        md: "10",
        lg: "8",
    }));
    const __VLS_63 = __VLS_62({
        cols: "12",
        md: "10",
        lg: "8",
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    const { default: __VLS_66 } = __VLS_64.slots;
    let __VLS_67;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
        ...{ class: "pa-6 mb-6 rounded-xl border-card" },
        elevation: "0",
    }));
    const __VLS_69 = __VLS_68({
        ...{ class: "pa-6 mb-6 rounded-xl border-card" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_68));
    /** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    const { default: __VLS_72 } = __VLS_70.slots;
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
    const __VLS_73 = MediaGallery;
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent1(__VLS_73, new __VLS_73({
        mediaList: (__VLS_ctx.reportData.media),
    }));
    const __VLS_75 = __VLS_74({
        mediaList: (__VLS_ctx.reportData.media),
    }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    // @ts-ignore
    [reportData,];
    var __VLS_70;
    let __VLS_78;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent1(__VLS_78, new __VLS_78({
        ...{ class: "pa-6 mb-6 rounded-xl border-card" },
        elevation: "0",
    }));
    const __VLS_80 = __VLS_79({
        ...{ class: "pa-6 mb-6 rounded-xl border-card" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    /** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    const { default: __VLS_83 } = __VLS_81.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center mb-4" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    let __VLS_84;
    /** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
    vAvatar;
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent1(__VLS_84, new __VLS_84({
        color: "#11698E",
        size: "48",
        ...{ class: "mr-3" },
    }));
    const __VLS_86 = __VLS_85({
        color: "#11698E",
        size: "48",
        ...{ class: "mr-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_85));
    /** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
    const { default: __VLS_89 } = __VLS_87.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-white text-h6 font-weight-bold" },
    });
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    (__VLS_ctx.authorName ? __VLS_ctx.authorName.charAt(0).toUpperCase() : "U");
    // @ts-ignore
    [authorName, authorName,];
    var __VLS_87;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "font-weight-bold text-body-1" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    (__VLS_ctx.authorName);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-caption text-grey" },
    });
    /** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
    (__VLS_ctx.formatDate(__VLS_ctx.reportData.createdAt));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex justify-space-between align-center mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex gap-3 mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    let __VLS_90;
    /** @ts-ignore @type { | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip'] | typeof __VLS_components.vChip | typeof __VLS_components.VChip | typeof __VLS_components['v-chip']} */
    vChip;
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent1(__VLS_90, new __VLS_90({
        ...{ class: "category-chip px-4" },
        size: "large",
    }));
    const __VLS_92 = __VLS_91({
        ...{ class: "category-chip px-4" },
        size: "large",
    }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    /** @type {__VLS_StyleScopedClasses['category-chip']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    const { default: __VLS_95 } = __VLS_93.slots;
    (__VLS_ctx.reportData.category);
    // @ts-ignore
    [reportData, reportData, authorName, formatDate,];
    var __VLS_93;
    let __VLS_96;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent1(__VLS_96, new __VLS_96({
        ...{ 'onClick': {} },
        color: "#11698E",
        ...{ class: "text-white font-weight-bold text-none" },
        elevation: "0",
        height: "44",
        ...{ style: {} },
    }));
    const __VLS_98 = __VLS_97({
        ...{ 'onClick': {} },
        color: "#11698E",
        ...{ class: "text-white font-weight-bold text-none" },
        elevation: "0",
        height: "44",
        ...{ style: {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    let __VLS_101;
    const __VLS_102 = ({ click: {} },
        { onClick: (...[$event]) => {
                if (!!(!__VLS_ctx.reportData))
                    return;
                __VLS_ctx.goToBuatAksi(__VLS_ctx.reportData.id);
                // @ts-ignore
                [reportData, goToBuatAksi,];
            } });
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
    const { default: __VLS_103 } = __VLS_99.slots;
    let __VLS_104;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent1(__VLS_104, new __VLS_104({
        start: true,
    }));
    const __VLS_106 = __VLS_105({
        start: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    const { default: __VLS_109 } = __VLS_107.slots;
    // @ts-ignore
    [];
    var __VLS_107;
    // @ts-ignore
    [];
    var __VLS_99;
    var __VLS_100;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex justify-space-between align-center mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "font-weight-bold text-h4 mb-0" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
    (__VLS_ctx.reportData.title);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex flex-wrap ga-4 mb-6 text-grey-darken-3" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
    /** @type {__VLS_StyleScopedClasses['ga-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center text-body-1" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    let __VLS_110;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent1(__VLS_110, new __VLS_110({
        start: true,
        size: "small",
        color: "grey-darken-1",
        ...{ class: "mr-2" },
    }));
    const __VLS_112 = __VLS_111({
        start: true,
        size: "small",
        color: "grey-darken-1",
        ...{ class: "mr-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    /** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
    const { default: __VLS_115 } = __VLS_113.slots;
    // @ts-ignore
    [reportData,];
    var __VLS_113;
    (__VLS_ctx.reportData.location);
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center text-body-1" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    let __VLS_116;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent1(__VLS_116, new __VLS_116({
        start: true,
        size: "small",
        color: "grey-darken-1",
        ...{ class: "mr-2" },
    }));
    const __VLS_118 = __VLS_117({
        start: true,
        size: "small",
        color: "grey-darken-1",
        ...{ class: "mr-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    /** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
    const { default: __VLS_121 } = __VLS_119.slots;
    // @ts-ignore
    [reportData,];
    var __VLS_119;
    (__VLS_ctx.formatDate(__VLS_ctx.reportData.createdAt));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-body-1 text-black" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    (__VLS_ctx.reportData.description);
    // @ts-ignore
    [reportData, reportData, formatDate,];
    var __VLS_81;
    let __VLS_122;
    /** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
    vCard;
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent1(__VLS_122, new __VLS_122({
        ...{ class: "pa-6 rounded-xl border-card" },
        elevation: "0",
    }));
    const __VLS_124 = __VLS_123({
        ...{ class: "pa-6 rounded-xl border-card" },
        elevation: "0",
    }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    /** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['border-card']} */ ;
    const { default: __VLS_127 } = __VLS_125.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-center mb-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-center']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
    let __VLS_128;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_129 = __VLS_asFunctionalComponent1(__VLS_128, new __VLS_128({
        ...{ class: "mr-2" },
        color: "#19456B",
        size: "28",
    }));
    const __VLS_130 = __VLS_129({
        ...{ class: "mr-2" },
        color: "#19456B",
        size: "28",
    }, ...__VLS_functionalComponentArgsRest(__VLS_129));
    /** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
    const { default: __VLS_133 } = __VLS_131.slots;
    // @ts-ignore
    [];
    var __VLS_131;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "text-h5 font-weight-bold" },
        ...{ style: {} },
    });
    /** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    (__VLS_ctx.reportData.comments?.length || 0);
    for (const [comment] of __VLS_vFor((__VLS_ctx.reportData.comments))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            key: (comment.id),
            ...{ class: "pa-5 rounded-xl mb-4 d-flex" },
            ...{ style: {} },
        });
        /** @type {__VLS_StyleScopedClasses['pa-5']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
        let __VLS_134;
        /** @ts-ignore @type { | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar'] | typeof __VLS_components.vAvatar | typeof __VLS_components.VAvatar | typeof __VLS_components['v-avatar']} */
        vAvatar;
        // @ts-ignore
        const __VLS_135 = __VLS_asFunctionalComponent1(__VLS_134, new __VLS_134({
            size: "40",
            color: "#11698E",
            ...{ class: "mr-4 mt-1" },
        }));
        const __VLS_136 = __VLS_135({
            size: "40",
            color: "#11698E",
            ...{ class: "mr-4 mt-1" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_135));
        /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
        const { default: __VLS_139 } = __VLS_137.slots;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-white font-weight-bold" },
        });
        /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
        (comment.author
            ? comment.author.charAt(0).toUpperCase()
            : "U");
        // @ts-ignore
        [reportData, reportData,];
        var __VLS_137;
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
        (comment.author);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-caption text-grey-darken-1" },
        });
        /** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
        (comment.time);
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
            ...{ class: "text-grey-darken-2 mb-0" },
        });
        /** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
        /** @type {__VLS_StyleScopedClasses['mb-0']} */ ;
        (comment.text);
        // @ts-ignore
        [];
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex align-start gap-4 mt-6" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['align-start']} */ ;
    /** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
    let __VLS_140;
    /** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
    vTextField;
    // @ts-ignore
    const __VLS_141 = __VLS_asFunctionalComponent1(__VLS_140, new __VLS_140({
        ...{ 'onKeyup': {} },
        modelValue: (__VLS_ctx.newComment),
        placeholder: "Tulis komentar...",
        variant: "outlined",
        hideDetails: true,
        rounded: "lg",
        color: "#11698E",
        ...{ class: "comment-input" },
    }));
    const __VLS_142 = __VLS_141({
        ...{ 'onKeyup': {} },
        modelValue: (__VLS_ctx.newComment),
        placeholder: "Tulis komentar...",
        variant: "outlined",
        hideDetails: true,
        rounded: "lg",
        color: "#11698E",
        ...{ class: "comment-input" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_141));
    let __VLS_145;
    const __VLS_146 = ({ keyup: {} },
        { onKeyup: (__VLS_ctx.submitComment) });
    /** @type {__VLS_StyleScopedClasses['comment-input']} */ ;
    var __VLS_143;
    var __VLS_144;
    let __VLS_147;
    /** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
    vBtn;
    // @ts-ignore
    const __VLS_148 = __VLS_asFunctionalComponent1(__VLS_147, new __VLS_147({
        ...{ 'onClick': {} },
        color: "#11698E",
        height: "56",
        ...{ class: "px-8 text-none font-weight-bold rounded-lg text-white" },
        flat: true,
        disabled: (!__VLS_ctx.newComment.trim()),
    }));
    const __VLS_149 = __VLS_148({
        ...{ 'onClick': {} },
        color: "#11698E",
        height: "56",
        ...{ class: "px-8 text-none font-weight-bold rounded-lg text-white" },
        flat: true,
        disabled: (!__VLS_ctx.newComment.trim()),
    }, ...__VLS_functionalComponentArgsRest(__VLS_148));
    let __VLS_152;
    const __VLS_153 = ({ click: {} },
        { onClick: (__VLS_ctx.submitComment) });
    /** @type {__VLS_StyleScopedClasses['px-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-none']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    const { default: __VLS_154 } = __VLS_150.slots;
    let __VLS_155;
    /** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
    vIcon;
    // @ts-ignore
    const __VLS_156 = __VLS_asFunctionalComponent1(__VLS_155, new __VLS_155({
        start: true,
    }));
    const __VLS_157 = __VLS_156({
        start: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_156));
    const { default: __VLS_160 } = __VLS_158.slots;
    // @ts-ignore
    [newComment, newComment, submitComment, submitComment,];
    var __VLS_158;
    // @ts-ignore
    [];
    var __VLS_150;
    var __VLS_151;
    // @ts-ignore
    [];
    var __VLS_125;
    // @ts-ignore
    [];
    var __VLS_64;
    // @ts-ignore
    [];
    var __VLS_58;
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
