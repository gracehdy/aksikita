import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const email = ref('');
const isLoading = ref(false);
const handleForgotPassword = async () => {
    if (!email.value.trim()) {
        alert('Mohon masukkan email Anda terlebih dahulu!');
        return;
    }
    isLoading.value = true;
    try {
        const res = await fetch('http://localhost:3000/auth/forgot-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.value })
        });
        if (res.ok) {
            const data = await res.json();
            alert(data.message || 'Link reset password telah dikirim ke email Anda. Silakan periksa kotak masuk!');
            router.push('/');
        }
        else {
            const error = await res.json();
            alert(error.message || 'Gagal memproses permintaan reset password');
        }
    }
    catch (err) {
        console.error(err);
        alert('Terjadi kesalahan jaringan');
    }
    finally {
        isLoading.value = false;
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
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
let __VLS_7;
/** @ts-ignore @type { | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container'] | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components['v-container']} */
vContainer;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "fill-height fill-width d-flex align-center justify-center" },
}));
const __VLS_9 = __VLS_8({
    ...{ class: "fill-height fill-width d-flex align-center justify-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['fill-height']} */ ;
/** @type {__VLS_StyleScopedClasses['fill-width']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    justify: "center",
    align: "center",
}));
const __VLS_15 = __VLS_14({
    justify: "center",
    align: "center",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
let __VLS_19;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    cols: "12",
    sm: "10",
    md: "5",
}));
const __VLS_21 = __VLS_20({
    cols: "12",
    sm: "10",
    md: "5",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
vCard;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ class: "pa-4 custom-card" },
    elevation: "10",
    color: "#F8F1F1",
    theme: "light",
    rounded: "xl",
}));
const __VLS_27 = __VLS_26({
    ...{ class: "pa-4 custom-card" },
    elevation: "10",
    color: "#F8F1F1",
    theme: "light",
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-card']} */ ;
const { default: __VLS_30 } = __VLS_28.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-center fp-title" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['fp-title']} */ ;
let __VLS_31;
/** @ts-ignore @type { | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text'] | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components['v-card-text']} */
vCardText;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({}));
const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
let __VLS_37;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    ...{ 'onKeyup': {} },
    outlined: true,
    dense: true,
    label: "Email",
    prependInnerIcon: "mdi-email",
    type: "email",
    color: "#11698E",
    ...{ class: "custom-font-size" },
    disabled: (__VLS_ctx.isLoading),
}));
const __VLS_39 = __VLS_38({
    ...{ 'onKeyup': {} },
    outlined: true,
    dense: true,
    label: "Email",
    prependInnerIcon: "mdi-email",
    type: "email",
    color: "#11698E",
    ...{ class: "custom-font-size" },
    disabled: (__VLS_ctx.isLoading),
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_42;
const __VLS_43 = ({ keyup: {} },
    { onKeyup: (__VLS_ctx.handleForgotPassword) });
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
var __VLS_40;
var __VLS_41;
let __VLS_44;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent1(__VLS_44, new __VLS_44({
    cols: "12",
}));
const __VLS_46 = __VLS_45({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const { default: __VLS_49 } = __VLS_47.slots;
let __VLS_50;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({}));
const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
const { default: __VLS_55 } = __VLS_53.slots;
let __VLS_56;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
    cols: "12",
    ...{ class: "pt-0" },
}));
const __VLS_58 = __VLS_57({
    cols: "12",
    ...{ class: "pt-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
const { default: __VLS_61 } = __VLS_59.slots;
let __VLS_62;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
    ...{ 'onClick': {} },
    ...{ class: "fp-btn" },
    block: true,
    loading: (__VLS_ctx.isLoading),
    disabled: (__VLS_ctx.isLoading),
}));
const __VLS_64 = __VLS_63({
    ...{ 'onClick': {} },
    ...{ class: "fp-btn" },
    block: true,
    loading: (__VLS_ctx.isLoading),
    disabled: (__VLS_ctx.isLoading),
}, ...__VLS_functionalComponentArgsRest(__VLS_63));
let __VLS_67;
const __VLS_68 = ({ click: {} },
    { onClick: (__VLS_ctx.handleForgotPassword) });
/** @type {__VLS_StyleScopedClasses['fp-btn']} */ ;
const { default: __VLS_69 } = __VLS_65.slots;
// @ts-ignore
[isLoading, isLoading, isLoading, handleForgotPassword, handleForgotPassword,];
var __VLS_65;
var __VLS_66;
// @ts-ignore
[];
var __VLS_59;
let __VLS_70;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_71 = __VLS_asFunctionalComponent1(__VLS_70, new __VLS_70({
    ...{ class: "text-center footer-text" },
}));
const __VLS_72 = __VLS_71({
    ...{ class: "text-center footer-text" },
}, ...__VLS_functionalComponentArgsRest(__VLS_71));
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-text']} */ ;
const { default: __VLS_75 } = __VLS_73.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
let __VLS_76;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({
    to: "/",
    ...{ class: "login-link" },
}));
const __VLS_78 = __VLS_77({
    to: "/",
    ...{ class: "login-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
/** @type {__VLS_StyleScopedClasses['login-link']} */ ;
const { default: __VLS_81 } = __VLS_79.slots;
// @ts-ignore
[];
var __VLS_79;
// @ts-ignore
[];
var __VLS_73;
// @ts-ignore
[];
var __VLS_53;
// @ts-ignore
[];
var __VLS_47;
// @ts-ignore
[];
var __VLS_34;
// @ts-ignore
[];
var __VLS_28;
// @ts-ignore
[];
var __VLS_22;
// @ts-ignore
[];
var __VLS_16;
// @ts-ignore
[];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
