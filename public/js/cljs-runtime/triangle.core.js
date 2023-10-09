goog.provide('triangle.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
triangle.core.main = (function triangle$core$main(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello world"], null);
});
if((typeof triangle !== 'undefined') && (typeof triangle.core !== 'undefined') && (typeof triangle.core.root !== 'undefined')){
} else {
triangle.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("root"));
}
triangle.core.render_main = (function triangle$core$render_main(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-name","component-name",-1318676056),"my-main",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),triangle.core.main], null));
});
triangle.core.init = (function triangle$core$init(){
return triangle.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.render_main], null)));
});
triangle.core.init();

//# sourceMappingURL=triangle.core.js.map
