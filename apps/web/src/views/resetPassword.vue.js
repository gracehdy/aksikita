import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
const form = ref({
    newPassword: '',
    confirmPassword: ''
});
const handleResetPassword = async () => {
    if (form.value.newPassword !== form.value.confirmPassword) {
        alert('Konfirmasi password tidak cocok!');
        return;
    }
    const token = route.query.token;
    if (!token) {
        alert('Token reset password tidak ditemukan. Silakan minta link reset baru.');
        return;
    }
    try {
        const res = await fetch('http://localhost:3000/auth/reset-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: token,
                newPassword: form.value.newPassword
            })
        });
        if (res.ok) {
            const data = await res.json();
            alert(data.message || 'Password berhasil diubah! Silakan login.');
            router.push('/');
        }
        else {
            const error = await res.json();
            alert(error.message || 'Gagal mengubah password');
        }
    }
    catch (err) {
        console.error(err);
        alert('Terjadi kesalahan jaringan');
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
    ...{ class: "text-center rp-title" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rp-title']} */ ;
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
    modelValue: (__VLS_ctx.form.newPassword),
    outlined: true,
    dense: true,
    label: "Password Baru",
    prependInnerIcon: "mdi-lock",
    type: "password",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}));
const __VLS_39 = __VLS_38({
    modelValue: (__VLS_ctx.form.newPassword),
    outlined: true,
    dense: true,
    label: "Password Baru",
    prependInnerIcon: "mdi-lock",
    type: "password",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
let __VLS_42;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.form.confirmPassword),
    outlined: true,
    dense: true,
    label: "Konfirmasi Password Baru",
    type: "password",
    prependInnerIcon: "mdi-lock-check",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}));
const __VLS_44 = __VLS_43({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.form.confirmPassword),
    outlined: true,
    dense: true,
    label: "Konfirmasi Password Baru",
    type: "password",
    prependInnerIcon: "mdi-lock-check",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
let __VLS_47;
const __VLS_48 = ({ keyup: {} },
    { onKeyup: (__VLS_ctx.handleResetPassword) });
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
var __VLS_45;
var __VLS_46;
// @ts-ignore
[form, form, handleResetPassword,];
var __VLS_34;
let __VLS_49;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    cols: "12",
}));
const __VLS_51 = __VLS_50({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
const { default: __VLS_54 } = __VLS_52.slots;
let __VLS_55;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({}));
const __VLS_57 = __VLS_56({}, ...__VLS_functionalComponentArgsRest(__VLS_56));
const { default: __VLS_60 } = __VLS_58.slots;
let __VLS_61;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent1(__VLS_61, new __VLS_61({
    cols: "12",
    ...{ class: "pt-0" },
}));
const __VLS_63 = __VLS_62({
    cols: "12",
    ...{ class: "pt-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
const { default: __VLS_66 } = __VLS_64.slots;
let __VLS_67;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_68 = __VLS_asFunctionalComponent1(__VLS_67, new __VLS_67({
    ...{ 'onClick': {} },
    ...{ class: "rp-btn" },
    block: true,
}));
const __VLS_69 = __VLS_68({
    ...{ 'onClick': {} },
    ...{ class: "rp-btn" },
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_68));
let __VLS_72;
const __VLS_73 = ({ click: {} },
    { onClick: (__VLS_ctx.handleResetPassword) });
/** @type {__VLS_StyleScopedClasses['rp-btn']} */ ;
const { default: __VLS_74 } = __VLS_70.slots;
// @ts-ignore
[handleResetPassword,];
var __VLS_70;
var __VLS_71;
// @ts-ignore
[];
var __VLS_64;
// @ts-ignore
[];
var __VLS_58;
// @ts-ignore
[];
var __VLS_52;
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
