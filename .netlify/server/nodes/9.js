import * as server from '../entries/pages/(site)/courses/_code_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(site)/courses/_code_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(site)/courses/[code]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.c6064d27.js","_app/immutable/chunks/index.afed6bb6.js","_app/immutable/chunks/stores.7a6391f3.js","_app/immutable/chunks/singletons.75e3c4a9.js","_app/immutable/chunks/index.86a260b5.js","_app/immutable/chunks/stores.76ceaadf.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/dayjs.min.20b737a6.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/PageHeader.f42651a9.js"];
export const stylesheets = [];
export const fonts = [];
