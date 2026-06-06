import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = ref({
    fullName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
});
const register = async () => {
    if (form.value.password !== form.value.confirmPassword) {
        alert('Konfirmasi password tidak cocok');
        return;
    }
    try {
        const body = {
            email: form.value.email,
            username: form.value.username,
            password: form.value.password,
            fullName: form.value.fullName,
        };
        const res = await fetch('/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(body),
        });
        if (res.ok) {
            const data = await res.json();
            const token = data.access_token || data.token;
            if (token) {
                localStorage.setItem("jwt_token", token);
                alert(data.message || 'Registrasi berhasil! Anda otomatis masuk.');
                router.push('/home');
            }
            else {
                alert('Registrasi berhasil! Silakan login.');
                router.push('/');
            }
        }
        else {
            const text = await res.text();
            let error = { message: 'Registrasi gagal' };
            try {
                error = JSON.parse(text);
            }
            catch {
                error.message = text || 'Registrasi gagal';
            }
            alert(error.message || 'Registrasi gagal');
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
    ...{ class: "register-wrapper" },
    fluid: true,
}));
const __VLS_9 = __VLS_8({
    ...{ class: "register-wrapper" },
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['register-wrapper']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type { | typeof __VLS_components.vLayout | typeof __VLS_components.VLayout | typeof __VLS_components['v-layout'] | typeof __VLS_components.vLayout | typeof __VLS_components.VLayout | typeof __VLS_components['v-layout']} */
vLayout;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    ...{ class: "fill-height fill-width align-center justify-center" },
    ...{ style: {} },
}));
const __VLS_15 = __VLS_14({
    ...{ class: "fill-height fill-width align-center justify-center" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {__VLS_StyleScopedClasses['fill-height']} */ ;
/** @type {__VLS_StyleScopedClasses['fill-width']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
const { default: __VLS_18 } = __VLS_16.slots;
let __VLS_19;
/** @ts-ignore @type { | typeof __VLS_components.vFlex | typeof __VLS_components.VFlex | typeof __VLS_components['v-flex'] | typeof __VLS_components.vFlex | typeof __VLS_components.VFlex | typeof __VLS_components['v-flex']} */
vFlex;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    xs12: true,
    sm8: true,
    md6: true,
}));
const __VLS_21 = __VLS_20({
    xs12: true,
    sm8: true,
    md6: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type { | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card'] | typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components['v-card']} */
vCard;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ class: "pa-4 custom-card" },
    elevation: "3",
    color: "#F8F1F1",
    theme: "light",
    rounded: "xl",
}));
const __VLS_27 = __VLS_26({
    ...{ class: "pa-4 custom-card" },
    elevation: "3",
    color: "#F8F1F1",
    theme: "light",
    rounded: "xl",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-card']} */ ;
const { default: __VLS_30 } = __VLS_28.slots;
let __VLS_31;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({}));
const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-center register-title" },
});
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['register-title']} */ ;
let __VLS_37;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({}));
const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
const { default: __VLS_42 } = __VLS_40.slots;
let __VLS_43;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    cols: "12",
}));
const __VLS_45 = __VLS_44({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const { default: __VLS_48 } = __VLS_46.slots;
let __VLS_49;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    modelValue: (__VLS_ctx.form.fullName),
    outlined: true,
    dense: true,
    label: "Nama Lengkap",
    type: "text",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}));
const __VLS_51 = __VLS_50({
    modelValue: (__VLS_ctx.form.fullName),
    outlined: true,
    dense: true,
    label: "Nama Lengkap",
    type: "text",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
let __VLS_54;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    modelValue: (__VLS_ctx.form.email),
    outlined: true,
    dense: true,
    label: "Email",
    type: "email",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}));
const __VLS_56 = __VLS_55({
    modelValue: (__VLS_ctx.form.email),
    outlined: true,
    dense: true,
    label: "Email",
    type: "email",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
let __VLS_59;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent1(__VLS_59, new __VLS_59({
    modelValue: (__VLS_ctx.form.username),
    outlined: true,
    dense: true,
    label: "Username",
    type: "text",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}));
const __VLS_61 = __VLS_60({
    modelValue: (__VLS_ctx.form.username),
    outlined: true,
    dense: true,
    label: "Username",
    type: "text",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
let __VLS_64;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent1(__VLS_64, new __VLS_64({
    modelValue: (__VLS_ctx.form.password),
    outlined: true,
    dense: true,
    label: "Password",
    type: "password",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}));
const __VLS_66 = __VLS_65({
    modelValue: (__VLS_ctx.form.password),
    outlined: true,
    dense: true,
    label: "Password",
    type: "password",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
let __VLS_69;
/** @ts-ignore @type { | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field'] | typeof __VLS_components.vTextField | typeof __VLS_components.VTextField | typeof __VLS_components['v-text-field']} */
vTextField;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.form.confirmPassword),
    outlined: true,
    dense: true,
    label: "Konfirmasi Password",
    type: "password",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}));
const __VLS_71 = __VLS_70({
    ...{ 'onKeyup': {} },
    modelValue: (__VLS_ctx.form.confirmPassword),
    outlined: true,
    dense: true,
    label: "Konfirmasi Password",
    type: "password",
    color: "#11698E",
    ...{ class: "custom-font-size" },
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
let __VLS_74;
const __VLS_75 = ({ keyup: {} },
    { onKeyup: (__VLS_ctx.register) });
/** @type {__VLS_StyleScopedClasses['custom-font-size']} */ ;
var __VLS_72;
var __VLS_73;
// @ts-ignore
[form, form, form, form, form, register,];
var __VLS_46;
let __VLS_76;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent1(__VLS_76, new __VLS_76({
    cols: "12",
}));
const __VLS_78 = __VLS_77({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
const { default: __VLS_81 } = __VLS_79.slots;
let __VLS_82;
/** @ts-ignore @type { | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row'] | typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components['v-row']} */
vRow;
// @ts-ignore
const __VLS_83 = __VLS_asFunctionalComponent1(__VLS_82, new __VLS_82({}));
const __VLS_84 = __VLS_83({}, ...__VLS_functionalComponentArgsRest(__VLS_83));
const { default: __VLS_87 } = __VLS_85.slots;
let __VLS_88;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_89 = __VLS_asFunctionalComponent1(__VLS_88, new __VLS_88({
    cols: "12",
    ...{ class: "pt-0" },
}));
const __VLS_90 = __VLS_89({
    cols: "12",
    ...{ class: "pt-0" },
}, ...__VLS_functionalComponentArgsRest(__VLS_89));
/** @type {__VLS_StyleScopedClasses['pt-0']} */ ;
const { default: __VLS_93 } = __VLS_91.slots;
let __VLS_94;
/** @ts-ignore @type { | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn'] | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components['v-btn']} */
vBtn;
// @ts-ignore
const __VLS_95 = __VLS_asFunctionalComponent1(__VLS_94, new __VLS_94({
    ...{ 'onClick': {} },
    ...{ class: "register-btn" },
    block: true,
}));
const __VLS_96 = __VLS_95({
    ...{ 'onClick': {} },
    ...{ class: "register-btn" },
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_95));
let __VLS_99;
const __VLS_100 = ({ click: {} },
    { onClick: (__VLS_ctx.register) });
/** @type {__VLS_StyleScopedClasses['register-btn']} */ ;
const { default: __VLS_101 } = __VLS_97.slots;
// @ts-ignore
[register,];
var __VLS_97;
var __VLS_98;
// @ts-ignore
[];
var __VLS_91;
let __VLS_102;
/** @ts-ignore @type { | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col'] | typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components['v-col']} */
vCol;
// @ts-ignore
const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
    ...{ class: "text-center footer-text" },
}));
const __VLS_104 = __VLS_103({
    ...{ class: "text-center footer-text" },
}, ...__VLS_functionalComponentArgsRest(__VLS_103));
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['footer-text']} */ ;
const { default: __VLS_107 } = __VLS_105.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
let __VLS_108;
/** @ts-ignore @type { | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link'] | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components['router-link']} */
routerLink;
// @ts-ignore
const __VLS_109 = __VLS_asFunctionalComponent1(__VLS_108, new __VLS_108({
    to: "/",
    ...{ class: "login-link" },
}));
const __VLS_110 = __VLS_109({
    to: "/",
    ...{ class: "login-link" },
}, ...__VLS_functionalComponentArgsRest(__VLS_109));
/** @type {__VLS_StyleScopedClasses['login-link']} */ ;
const { default: __VLS_113 } = __VLS_111.slots;
// @ts-ignore
[];
var __VLS_111;
// @ts-ignore
[];
var __VLS_105;
// @ts-ignore
[];
var __VLS_85;
// @ts-ignore
[];
var __VLS_79;
// @ts-ignore
[];
var __VLS_40;
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
