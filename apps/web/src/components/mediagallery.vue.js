const __VLS_props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
if (__VLS_ctx.mediaList && __VLS_ctx.mediaList.length > 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "d-flex flex-wrap ga-2" },
    });
    /** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
    /** @type {__VLS_StyleScopedClasses['ga-2']} */ ;
    for (const [item] of __VLS_vFor((__VLS_ctx.mediaList))) {
        let __VLS_0;
        /** @ts-ignore @type { | typeof __VLS_components.vImg | typeof __VLS_components.VImg | typeof __VLS_components['v-img'] | typeof __VLS_components.vImg | typeof __VLS_components.VImg | typeof __VLS_components['v-img']} */
        vImg;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            key: (item.id),
            src: (`http://localhost:3000/uploads/${item.file}`),
            width: "150",
            height: "150",
            cover: true,
            ...{ class: "rounded-lg" },
        }));
        const __VLS_2 = __VLS_1({
            key: (item.id),
            src: (`http://localhost:3000/uploads/${item.file}`),
            width: "150",
            height: "150",
            cover: true,
            ...{ class: "rounded-lg" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        /** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
        // @ts-ignore
        [mediaList, mediaList, mediaList,];
    }
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
