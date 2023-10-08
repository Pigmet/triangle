
shadow.cljs.devtools.client.env.module_loaded('main');

try { triangle.core.init(); } catch (e) { console.error("An error occurred when calling (triangle.core/init)"); throw(e); }