import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
const router = useRouter();
const isFormValid = ref(false);
const isRelawan = ref(false);
const fileName = ref('');
const fileObj = ref(null);
const form = ref({
    title: '',
    category: '',
    location: '',
    description: ''
});
const volunteerForm = ref({
    date: '',
    requiredPeople: '',
    meetingPoint: '',
    additionalInfo: ''
});
const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        fileName.value = file.name;
        fileObj.value = file;
    }
};
const submitReport = async () => {
    if (!form.value.title || !form.value.category || !form.value.location || !form.value.description) {
        alert("Mohon lengkapi semua kolom wajib (Judul, Kategori, Lokasi, Deskripsi)!");
        return;
    }
    const token = localStorage.getItem('jwt_token');
    if (!token) {
        alert("Anda harus login terlebih dahulu untuk membuat laporan.");
        router.push('/');
        return;
    }
    try {
        const payloadData = {
            category: (!form.value.category || form.value.category === '') ? 'Lainnya' : form.value.category,
            description: form.value.description,
            location: form.value.location,
            title: form.value.title,
        };
        const res = await fetch('/api/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payloadData)
        });
        if (res.ok) {
            const data = await res.json();
            if (data.id !== '') {
                alert("Laporan berhasil dikirim!");
                router.push({
                    name: 'detailLaporan',
                    params: { id: data.id }
                });
            }
        }
        else if (res.status === 401) {
            alert("Sesi login Anda tidak valid. Silakan login ulang.");
            router.push('/');
        }
        else {
            const error = await res.json();
            alert(error.message || "Gagal mengirim laporan");
        }
    }
    catch (err) {
        console.error(err);
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
/** @type {__VLS_StyleScopedClasses['upload-area']} */ ;
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
let __VLS_38;
/** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
vContainer;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    ...{ class: "report-wrapper" },
    fluid: true,
}));
const __VLS_40 = __VLS_39({
    ...{ class: "report-wrapper" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
/** @type {__VLS_StyleScopedClasses['report-wrapper']} */ ;
const { default: __VLS_43 } = __VLS_41.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "d-flex align-center justify-center mb-8" },
});
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "page-title text-h4 font-weight-bold" },
    ...{ style: {} },
});
/** @type {__VLS_StyleScopedClasses['page-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
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
    md: "8",
    lg: "6",
}));
const __VLS_52 = __VLS_51({
    cols: "12",
    md: "8",
    lg: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_51));
const { default: __VLS_55 } = __VLS_53.slots;
let __VLS_56;
/** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
vCard;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
    ...{ class: "pa-8 custom-card border-card" },
    elevation: "0",
}));
const __VLS_58 = __VLS_57({
    ...{ class: "pa-8 custom-card border-card" },
    elevation: "0",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
/** @type {__VLS_StyleScopedClasses['pa-8']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-card']} */ ;
/** @type {__VLS_StyleScopedClasses['border-card']} */ ;
const { default: __VLS_61 } = __VLS_59.slots;
let __VLS_62;
/** @ts-ignore @type { | typeof __VLS_components.vForm | typeof __VLS_components.VForm | typeof __VLS_components['v-form'] | typeof __VLS_components.vForm | typeof __VLS_components.VForm | typeof __VLS_components['v-form']} */
vForm;
// @ts-ignore
const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
    modelValue: (__VLS_ctx.isFormValid),
}));
const __VLS_64 = __VLS_63({
    modelValue: (__VLS_ctx.isFormValid),
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
const { default: __VLS_67 } = __VLS_65.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "input-label" },
});
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
let __VLS_68;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
    modelValue: (__VLS_ctx.form.title),
    variant: "outlined",
    placeholder: "Contoh: Sampah menumpuk di taman kota",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}));
const __VLS_70 = __VLS_69({
    modelValue: (__VLS_ctx.form.title),
    variant: "outlined",
    placeholder: "Contoh: Sampah menumpuk di taman kota",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group mt-2" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "input-label" },
});
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
let __VLS_73;
/** @ts-ignore @type { | typeof __VLS_components.vSelect | typeof __VLS_components.VSelect | typeof __VLS_components['v-select'] | typeof __VLS_components.vSelect | typeof __VLS_components.VSelect | typeof __VLS_components['v-select']} */
vSelect;
// @ts-ignore
const __VLS_74 = __VLS_asFunctionalComponent1(__VLS_73, new __VLS_73({
    modelValue: (__VLS_ctx.form.category),
    variant: "outlined",
    items: (['Lingkungan', 'Sosial', 'Infrastruktur', 'Keamanan']),
    placeholder: "Pilih Kategori",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}));
const __VLS_75 = __VLS_74({
    modelValue: (__VLS_ctx.form.category),
    variant: "outlined",
    items: (['Lingkungan', 'Sosial', 'Infrastruktur', 'Keamanan']),
    placeholder: "Pilih Kategori",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_74));
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group mt-2" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "input-label" },
});
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
let __VLS_78;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_79 = __VLS_asFunctionalComponent1(__VLS_78, new __VLS_78({
    modelValue: (__VLS_ctx.form.location),
    variant: "outlined",
    placeholder: "Contoh: Taman Menteng, Jakarta Pusat",
    prependInnerIcon: "mdi-map-marker",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}));
const __VLS_80 = __VLS_79({
    modelValue: (__VLS_ctx.form.location),
    variant: "outlined",
    placeholder: "Contoh: Taman Menteng, Jakarta Pusat",
    prependInnerIcon: "mdi-map-marker",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_79));
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group mt-2" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "input-label" },
});
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
let __VLS_83;
/** @ts-ignore @type { | typeof __VLS_components.vTextarea | typeof __VLS_components.VTextarea | typeof __VLS_components['v-textarea'] | typeof __VLS_components.vTextarea | typeof __VLS_components.VTextarea | typeof __VLS_components['v-textarea']} */
vTextarea;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    modelValue: (__VLS_ctx.form.description),
    variant: "outlined",
    placeholder: "Jelaskan masalah yang Anda temukan secara detail...",
    rows: "4",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}));
const __VLS_85 = __VLS_84({
    modelValue: (__VLS_ctx.form.description),
    variant: "outlined",
    placeholder: "Jelaskan masalah yang Anda temukan secara detail...",
    rows: "4",
    color: "#11698E",
    ...{ class: "mt-2 custom-input" },
    rounded: "lg",
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-input']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "input-group mt-2" },
});
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: "input-label" },
});
/** @type {__VLS_StyleScopedClasses['input-label']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "upload-area mt-2 d-flex flex-column align-center justify-center" },
});
/** @type {__VLS_StyleScopedClasses['upload-area']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
let __VLS_88;
/** @ts-ignore @type { | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon'] | typeof __VLS_components.vIcon | typeof __VLS_components.VIcon | typeof __VLS_components['v-icon']} */
vIcon;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent1(__VLS_88, new __VLS_88({
    size: "40",
    color: "#11698E",
}));
const __VLS_90 = __VLS_89({
    size: "40",
    color: "#11698E",
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
const { default: __VLS_93 } = __VLS_91.slots;
// @ts-ignore
[isFormValid, form, form, form, form,];
var __VLS_91;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "upload-text mt-2" },
});
/** @type {__VLS_StyleScopedClasses['upload-text']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
(__VLS_ctx.fileName || 'Klik untuk upload foto');
if (!__VLS_ctx.fileName) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "upload-subtext" },
    });
    /** @type {__VLS_StyleScopedClasses['upload-subtext']} */ ;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onChange: (__VLS_ctx.handleFileUpload) },
    type: "file",
    ...{ class: "file-input" },
    accept: "image/*",
});
/** @type {__VLS_StyleScopedClasses['file-input']} */ ;
let __VLS_94;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_95 = __VLS_asFunctionalComponent1(__VLS_94, new __VLS_94({
    ...{ class: "mt-8" },
}));
const __VLS_96 = __VLS_95({
    ...{ class: "mt-8" },
}, ...__VLS_functionalComponentArgsRest(__VLS_95));
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
const { default: __VLS_99 } = __VLS_97.slots;
let __VLS_100;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_101 = __VLS_asFunctionalComponent1(__VLS_100, new __VLS_100({
    cols: "6",
}));
const __VLS_102 = __VLS_101({
    cols: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_101));
const { default: __VLS_105 } = __VLS_103.slots;
let __VLS_106;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_107 = __VLS_asFunctionalComponent1(__VLS_106, new __VLS_106({
    ...{ 'onClick': {} },
    block: true,
    variant: "outlined",
    color: "#19456B",
    size: "large",
    ...{ class: "text-none font-weight-bold rounded-lg" },
}));
const __VLS_108 = __VLS_107({
    ...{ 'onClick': {} },
    block: true,
    variant: "outlined",
    color: "#19456B",
    size: "large",
    ...{ class: "text-none font-weight-bold rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_107));
let __VLS_111;
const __VLS_112 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.$router.back();
            // @ts-ignore
            [$router, fileName, fileName, handleFileUpload,];
        } });
/** @type {__VLS_StyleScopedClasses['text-none']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
const { default: __VLS_113 } = __VLS_109.slots;
// @ts-ignore
[];
var __VLS_109;
var __VLS_110;
// @ts-ignore
[];
var __VLS_103;
let __VLS_114;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_115 = __VLS_asFunctionalComponent1(__VLS_114, new __VLS_114({
    cols: "6",
}));
const __VLS_116 = __VLS_115({
    cols: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_115));
const { default: __VLS_119 } = __VLS_117.slots;
let __VLS_120;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_121 = __VLS_asFunctionalComponent1(__VLS_120, new __VLS_120({
    ...{ 'onClick': {} },
    block: true,
    color: "#16C79A",
    size: "large",
    ...{ class: "text-none font-weight-bold text-white rounded-lg" },
    elevation: "0",
}));
const __VLS_122 = __VLS_121({
    ...{ 'onClick': {} },
    block: true,
    color: "#16C79A",
    size: "large",
    ...{ class: "text-none font-weight-bold text-white rounded-lg" },
    elevation: "0",
}, ...__VLS_functionalComponentArgsRest(__VLS_121));
let __VLS_125;
const __VLS_126 = ({ click: {} },
    { onClick: (__VLS_ctx.submitReport) });
/** @type {__VLS_StyleScopedClasses['text-none']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
const { default: __VLS_127 } = __VLS_123.slots;
// @ts-ignore
[submitReport,];
var __VLS_123;
var __VLS_124;
// @ts-ignore
[];
var __VLS_117;
// @ts-ignore
[];
var __VLS_97;
// @ts-ignore
[];
var __VLS_65;
// @ts-ignore
[];
var __VLS_59;
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
