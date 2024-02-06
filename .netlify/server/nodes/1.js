

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ef4c8458.js","_app/immutable/chunks/index.afed6bb6.js","_app/immutable/chunks/stores.b0a5f8cc.js","_app/immutable/chunks/singletons.f4eecc42.js","_app/immutable/chunks/index.86a260b5.js"];
export const stylesheets = [];
export const fonts = [];
