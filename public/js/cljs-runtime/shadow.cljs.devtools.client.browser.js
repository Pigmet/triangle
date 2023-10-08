goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___25776 = arguments.length;
var i__5770__auto___25777 = (0);
while(true){
if((i__5770__auto___25777 < len__5769__auto___25776)){
args__5775__auto__.push((arguments[i__5770__auto___25777]));

var G__25778 = (i__5770__auto___25777 + (1));
i__5770__auto___25777 = G__25778;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq25488){
var G__25489 = cljs.core.first(seq25488);
var seq25488__$1 = cljs.core.next(seq25488);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25489,seq25488__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__25490 = cljs.core.seq(sources);
var chunk__25491 = null;
var count__25492 = (0);
var i__25493 = (0);
while(true){
if((i__25493 < count__25492)){
var map__25506 = chunk__25491.cljs$core$IIndexed$_nth$arity$2(null,i__25493);
var map__25506__$1 = cljs.core.__destructure_map(map__25506);
var src = map__25506__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25506__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25507){var e_25779 = e25507;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_25779);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25779.message)].join('')));
}

var G__25780 = seq__25490;
var G__25781 = chunk__25491;
var G__25782 = count__25492;
var G__25783 = (i__25493 + (1));
seq__25490 = G__25780;
chunk__25491 = G__25781;
count__25492 = G__25782;
i__25493 = G__25783;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25490);
if(temp__5804__auto__){
var seq__25490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25490__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25490__$1);
var G__25784 = cljs.core.chunk_rest(seq__25490__$1);
var G__25785 = c__5568__auto__;
var G__25786 = cljs.core.count(c__5568__auto__);
var G__25787 = (0);
seq__25490 = G__25784;
chunk__25491 = G__25785;
count__25492 = G__25786;
i__25493 = G__25787;
continue;
} else {
var map__25508 = cljs.core.first(seq__25490__$1);
var map__25508__$1 = cljs.core.__destructure_map(map__25508);
var src = map__25508__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25508__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25508__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25508__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25508__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e25509){var e_25788 = e25509;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_25788);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25788.message)].join('')));
}

var G__25789 = cljs.core.next(seq__25490__$1);
var G__25790 = null;
var G__25791 = (0);
var G__25792 = (0);
seq__25490 = G__25789;
chunk__25491 = G__25790;
count__25492 = G__25791;
i__25493 = G__25792;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__25510 = cljs.core.seq(js_requires);
var chunk__25511 = null;
var count__25512 = (0);
var i__25513 = (0);
while(true){
if((i__25513 < count__25512)){
var js_ns = chunk__25511.cljs$core$IIndexed$_nth$arity$2(null,i__25513);
var require_str_25793 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_25793);


var G__25794 = seq__25510;
var G__25795 = chunk__25511;
var G__25796 = count__25512;
var G__25797 = (i__25513 + (1));
seq__25510 = G__25794;
chunk__25511 = G__25795;
count__25512 = G__25796;
i__25513 = G__25797;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25510);
if(temp__5804__auto__){
var seq__25510__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25510__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25510__$1);
var G__25798 = cljs.core.chunk_rest(seq__25510__$1);
var G__25799 = c__5568__auto__;
var G__25800 = cljs.core.count(c__5568__auto__);
var G__25801 = (0);
seq__25510 = G__25798;
chunk__25511 = G__25799;
count__25512 = G__25800;
i__25513 = G__25801;
continue;
} else {
var js_ns = cljs.core.first(seq__25510__$1);
var require_str_25802 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_25802);


var G__25803 = cljs.core.next(seq__25510__$1);
var G__25804 = null;
var G__25805 = (0);
var G__25806 = (0);
seq__25510 = G__25803;
chunk__25511 = G__25804;
count__25512 = G__25805;
i__25513 = G__25806;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__25517){
var map__25518 = p__25517;
var map__25518__$1 = cljs.core.__destructure_map(map__25518);
var msg = map__25518__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25518__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25518__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25519(s__25520){
return (new cljs.core.LazySeq(null,(function (){
var s__25520__$1 = s__25520;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25520__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__25525 = cljs.core.first(xs__6360__auto__);
var map__25525__$1 = cljs.core.__destructure_map(map__25525);
var src = map__25525__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25525__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25525__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__25520__$1,map__25525,map__25525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25518,map__25518__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25519_$_iter__25521(s__25522){
return (new cljs.core.LazySeq(null,((function (s__25520__$1,map__25525,map__25525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25518,map__25518__$1,msg,info,reload_info){
return (function (){
var s__25522__$1 = s__25522;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__25522__$1);
if(temp__5804__auto____$1){
var s__25522__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25522__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25522__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25524 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25523 = (0);
while(true){
if((i__25523 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__25523);
cljs.core.chunk_append(b__25524,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__25807 = (i__25523 + (1));
i__25523 = G__25807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25524),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25519_$_iter__25521(cljs.core.chunk_rest(s__25522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25524),null);
}
} else {
var warning = cljs.core.first(s__25522__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25519_$_iter__25521(cljs.core.rest(s__25522__$2)));
}
} else {
return null;
}
break;
}
});})(s__25520__$1,map__25525,map__25525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25518,map__25518__$1,msg,info,reload_info))
,null,null));
});})(s__25520__$1,map__25525,map__25525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__25518,map__25518__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__25519(cljs.core.rest(s__25520__$1)));
} else {
var G__25808 = cljs.core.rest(s__25520__$1);
s__25520__$1 = G__25808;
continue;
}
} else {
var G__25809 = cljs.core.rest(s__25520__$1);
s__25520__$1 = G__25809;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__25526_25810 = cljs.core.seq(warnings);
var chunk__25527_25811 = null;
var count__25528_25812 = (0);
var i__25529_25813 = (0);
while(true){
if((i__25529_25813 < count__25528_25812)){
var map__25532_25814 = chunk__25527_25811.cljs$core$IIndexed$_nth$arity$2(null,i__25529_25813);
var map__25532_25815__$1 = cljs.core.__destructure_map(map__25532_25814);
var w_25816 = map__25532_25815__$1;
var msg_25817__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25532_25815__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25532_25815__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25532_25815__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25532_25815__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25820)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25818),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25819),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25817__$1)].join(''));


var G__25821 = seq__25526_25810;
var G__25822 = chunk__25527_25811;
var G__25823 = count__25528_25812;
var G__25824 = (i__25529_25813 + (1));
seq__25526_25810 = G__25821;
chunk__25527_25811 = G__25822;
count__25528_25812 = G__25823;
i__25529_25813 = G__25824;
continue;
} else {
var temp__5804__auto___25825 = cljs.core.seq(seq__25526_25810);
if(temp__5804__auto___25825){
var seq__25526_25826__$1 = temp__5804__auto___25825;
if(cljs.core.chunked_seq_QMARK_(seq__25526_25826__$1)){
var c__5568__auto___25827 = cljs.core.chunk_first(seq__25526_25826__$1);
var G__25828 = cljs.core.chunk_rest(seq__25526_25826__$1);
var G__25829 = c__5568__auto___25827;
var G__25830 = cljs.core.count(c__5568__auto___25827);
var G__25831 = (0);
seq__25526_25810 = G__25828;
chunk__25527_25811 = G__25829;
count__25528_25812 = G__25830;
i__25529_25813 = G__25831;
continue;
} else {
var map__25533_25832 = cljs.core.first(seq__25526_25826__$1);
var map__25533_25833__$1 = cljs.core.__destructure_map(map__25533_25832);
var w_25834 = map__25533_25833__$1;
var msg_25835__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25533_25833__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25533_25833__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25533_25833__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25533_25833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25838)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25836),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25837),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25835__$1)].join(''));


var G__25839 = cljs.core.next(seq__25526_25826__$1);
var G__25840 = null;
var G__25841 = (0);
var G__25842 = (0);
seq__25526_25810 = G__25839;
chunk__25527_25811 = G__25840;
count__25528_25812 = G__25841;
i__25529_25813 = G__25842;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__25516_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__25516_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__25534){
var map__25535 = p__25534;
var map__25535__$1 = cljs.core.__destructure_map(map__25535);
var msg = map__25535__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25535__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25535__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__25536 = cljs.core.seq(updates);
var chunk__25538 = null;
var count__25539 = (0);
var i__25540 = (0);
while(true){
if((i__25540 < count__25539)){
var path = chunk__25538.cljs$core$IIndexed$_nth$arity$2(null,i__25540);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__25650_25843 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__25654_25844 = null;
var count__25655_25845 = (0);
var i__25656_25846 = (0);
while(true){
if((i__25656_25846 < count__25655_25845)){
var node_25847 = chunk__25654_25844.cljs$core$IIndexed$_nth$arity$2(null,i__25656_25846);
if(cljs.core.not(node_25847.shadow$old)){
var path_match_25848 = shadow.cljs.devtools.client.browser.match_paths(node_25847.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25848)){
var new_link_25849 = (function (){var G__25682 = node_25847.cloneNode(true);
G__25682.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25848),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25682;
})();
(node_25847.shadow$old = true);

(new_link_25849.onload = ((function (seq__25650_25843,chunk__25654_25844,count__25655_25845,i__25656_25846,seq__25536,chunk__25538,count__25539,i__25540,new_link_25849,path_match_25848,node_25847,path,map__25535,map__25535__$1,msg,updates,reload_info){
return (function (e){
var seq__25683_25850 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25685_25851 = null;
var count__25686_25852 = (0);
var i__25687_25853 = (0);
while(true){
if((i__25687_25853 < count__25686_25852)){
var map__25691_25854 = chunk__25685_25851.cljs$core$IIndexed$_nth$arity$2(null,i__25687_25853);
var map__25691_25855__$1 = cljs.core.__destructure_map(map__25691_25854);
var task_25856 = map__25691_25855__$1;
var fn_str_25857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691_25855__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25691_25855__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25859 = goog.getObjectByName(fn_str_25857,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25858)].join(''));

(fn_obj_25859.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25859.cljs$core$IFn$_invoke$arity$2(path,new_link_25849) : fn_obj_25859.call(null,path,new_link_25849));


var G__25860 = seq__25683_25850;
var G__25861 = chunk__25685_25851;
var G__25862 = count__25686_25852;
var G__25863 = (i__25687_25853 + (1));
seq__25683_25850 = G__25860;
chunk__25685_25851 = G__25861;
count__25686_25852 = G__25862;
i__25687_25853 = G__25863;
continue;
} else {
var temp__5804__auto___25864 = cljs.core.seq(seq__25683_25850);
if(temp__5804__auto___25864){
var seq__25683_25865__$1 = temp__5804__auto___25864;
if(cljs.core.chunked_seq_QMARK_(seq__25683_25865__$1)){
var c__5568__auto___25866 = cljs.core.chunk_first(seq__25683_25865__$1);
var G__25867 = cljs.core.chunk_rest(seq__25683_25865__$1);
var G__25868 = c__5568__auto___25866;
var G__25869 = cljs.core.count(c__5568__auto___25866);
var G__25870 = (0);
seq__25683_25850 = G__25867;
chunk__25685_25851 = G__25868;
count__25686_25852 = G__25869;
i__25687_25853 = G__25870;
continue;
} else {
var map__25692_25871 = cljs.core.first(seq__25683_25865__$1);
var map__25692_25872__$1 = cljs.core.__destructure_map(map__25692_25871);
var task_25873 = map__25692_25872__$1;
var fn_str_25874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25692_25872__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25692_25872__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25876 = goog.getObjectByName(fn_str_25874,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25875)].join(''));

(fn_obj_25876.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25876.cljs$core$IFn$_invoke$arity$2(path,new_link_25849) : fn_obj_25876.call(null,path,new_link_25849));


var G__25877 = cljs.core.next(seq__25683_25865__$1);
var G__25878 = null;
var G__25879 = (0);
var G__25880 = (0);
seq__25683_25850 = G__25877;
chunk__25685_25851 = G__25878;
count__25686_25852 = G__25879;
i__25687_25853 = G__25880;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25847);
});})(seq__25650_25843,chunk__25654_25844,count__25655_25845,i__25656_25846,seq__25536,chunk__25538,count__25539,i__25540,new_link_25849,path_match_25848,node_25847,path,map__25535,map__25535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25848], 0));

goog.dom.insertSiblingAfter(new_link_25849,node_25847);


var G__25881 = seq__25650_25843;
var G__25882 = chunk__25654_25844;
var G__25883 = count__25655_25845;
var G__25884 = (i__25656_25846 + (1));
seq__25650_25843 = G__25881;
chunk__25654_25844 = G__25882;
count__25655_25845 = G__25883;
i__25656_25846 = G__25884;
continue;
} else {
var G__25885 = seq__25650_25843;
var G__25886 = chunk__25654_25844;
var G__25887 = count__25655_25845;
var G__25888 = (i__25656_25846 + (1));
seq__25650_25843 = G__25885;
chunk__25654_25844 = G__25886;
count__25655_25845 = G__25887;
i__25656_25846 = G__25888;
continue;
}
} else {
var G__25889 = seq__25650_25843;
var G__25890 = chunk__25654_25844;
var G__25891 = count__25655_25845;
var G__25892 = (i__25656_25846 + (1));
seq__25650_25843 = G__25889;
chunk__25654_25844 = G__25890;
count__25655_25845 = G__25891;
i__25656_25846 = G__25892;
continue;
}
} else {
var temp__5804__auto___25893 = cljs.core.seq(seq__25650_25843);
if(temp__5804__auto___25893){
var seq__25650_25894__$1 = temp__5804__auto___25893;
if(cljs.core.chunked_seq_QMARK_(seq__25650_25894__$1)){
var c__5568__auto___25895 = cljs.core.chunk_first(seq__25650_25894__$1);
var G__25896 = cljs.core.chunk_rest(seq__25650_25894__$1);
var G__25897 = c__5568__auto___25895;
var G__25898 = cljs.core.count(c__5568__auto___25895);
var G__25899 = (0);
seq__25650_25843 = G__25896;
chunk__25654_25844 = G__25897;
count__25655_25845 = G__25898;
i__25656_25846 = G__25899;
continue;
} else {
var node_25900 = cljs.core.first(seq__25650_25894__$1);
if(cljs.core.not(node_25900.shadow$old)){
var path_match_25901 = shadow.cljs.devtools.client.browser.match_paths(node_25900.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25901)){
var new_link_25902 = (function (){var G__25693 = node_25900.cloneNode(true);
G__25693.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25901),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25693;
})();
(node_25900.shadow$old = true);

(new_link_25902.onload = ((function (seq__25650_25843,chunk__25654_25844,count__25655_25845,i__25656_25846,seq__25536,chunk__25538,count__25539,i__25540,new_link_25902,path_match_25901,node_25900,seq__25650_25894__$1,temp__5804__auto___25893,path,map__25535,map__25535__$1,msg,updates,reload_info){
return (function (e){
var seq__25694_25903 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25696_25904 = null;
var count__25697_25905 = (0);
var i__25698_25906 = (0);
while(true){
if((i__25698_25906 < count__25697_25905)){
var map__25702_25907 = chunk__25696_25904.cljs$core$IIndexed$_nth$arity$2(null,i__25698_25906);
var map__25702_25908__$1 = cljs.core.__destructure_map(map__25702_25907);
var task_25909 = map__25702_25908__$1;
var fn_str_25910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25702_25908__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25702_25908__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25912 = goog.getObjectByName(fn_str_25910,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25911)].join(''));

(fn_obj_25912.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25912.cljs$core$IFn$_invoke$arity$2(path,new_link_25902) : fn_obj_25912.call(null,path,new_link_25902));


var G__25913 = seq__25694_25903;
var G__25914 = chunk__25696_25904;
var G__25915 = count__25697_25905;
var G__25916 = (i__25698_25906 + (1));
seq__25694_25903 = G__25913;
chunk__25696_25904 = G__25914;
count__25697_25905 = G__25915;
i__25698_25906 = G__25916;
continue;
} else {
var temp__5804__auto___25917__$1 = cljs.core.seq(seq__25694_25903);
if(temp__5804__auto___25917__$1){
var seq__25694_25918__$1 = temp__5804__auto___25917__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25694_25918__$1)){
var c__5568__auto___25919 = cljs.core.chunk_first(seq__25694_25918__$1);
var G__25920 = cljs.core.chunk_rest(seq__25694_25918__$1);
var G__25921 = c__5568__auto___25919;
var G__25922 = cljs.core.count(c__5568__auto___25919);
var G__25923 = (0);
seq__25694_25903 = G__25920;
chunk__25696_25904 = G__25921;
count__25697_25905 = G__25922;
i__25698_25906 = G__25923;
continue;
} else {
var map__25703_25924 = cljs.core.first(seq__25694_25918__$1);
var map__25703_25925__$1 = cljs.core.__destructure_map(map__25703_25924);
var task_25926 = map__25703_25925__$1;
var fn_str_25927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25703_25925__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25703_25925__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25929 = goog.getObjectByName(fn_str_25927,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25928)].join(''));

(fn_obj_25929.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25929.cljs$core$IFn$_invoke$arity$2(path,new_link_25902) : fn_obj_25929.call(null,path,new_link_25902));


var G__25930 = cljs.core.next(seq__25694_25918__$1);
var G__25931 = null;
var G__25932 = (0);
var G__25933 = (0);
seq__25694_25903 = G__25930;
chunk__25696_25904 = G__25931;
count__25697_25905 = G__25932;
i__25698_25906 = G__25933;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25900);
});})(seq__25650_25843,chunk__25654_25844,count__25655_25845,i__25656_25846,seq__25536,chunk__25538,count__25539,i__25540,new_link_25902,path_match_25901,node_25900,seq__25650_25894__$1,temp__5804__auto___25893,path,map__25535,map__25535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25901], 0));

goog.dom.insertSiblingAfter(new_link_25902,node_25900);


var G__25934 = cljs.core.next(seq__25650_25894__$1);
var G__25935 = null;
var G__25936 = (0);
var G__25937 = (0);
seq__25650_25843 = G__25934;
chunk__25654_25844 = G__25935;
count__25655_25845 = G__25936;
i__25656_25846 = G__25937;
continue;
} else {
var G__25938 = cljs.core.next(seq__25650_25894__$1);
var G__25939 = null;
var G__25940 = (0);
var G__25941 = (0);
seq__25650_25843 = G__25938;
chunk__25654_25844 = G__25939;
count__25655_25845 = G__25940;
i__25656_25846 = G__25941;
continue;
}
} else {
var G__25942 = cljs.core.next(seq__25650_25894__$1);
var G__25943 = null;
var G__25944 = (0);
var G__25945 = (0);
seq__25650_25843 = G__25942;
chunk__25654_25844 = G__25943;
count__25655_25845 = G__25944;
i__25656_25846 = G__25945;
continue;
}
}
} else {
}
}
break;
}


var G__25946 = seq__25536;
var G__25947 = chunk__25538;
var G__25948 = count__25539;
var G__25949 = (i__25540 + (1));
seq__25536 = G__25946;
chunk__25538 = G__25947;
count__25539 = G__25948;
i__25540 = G__25949;
continue;
} else {
var G__25950 = seq__25536;
var G__25951 = chunk__25538;
var G__25952 = count__25539;
var G__25953 = (i__25540 + (1));
seq__25536 = G__25950;
chunk__25538 = G__25951;
count__25539 = G__25952;
i__25540 = G__25953;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25536);
if(temp__5804__auto__){
var seq__25536__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25536__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25536__$1);
var G__25954 = cljs.core.chunk_rest(seq__25536__$1);
var G__25955 = c__5568__auto__;
var G__25956 = cljs.core.count(c__5568__auto__);
var G__25957 = (0);
seq__25536 = G__25954;
chunk__25538 = G__25955;
count__25539 = G__25956;
i__25540 = G__25957;
continue;
} else {
var path = cljs.core.first(seq__25536__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__25704_25958 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__25708_25959 = null;
var count__25709_25960 = (0);
var i__25710_25961 = (0);
while(true){
if((i__25710_25961 < count__25709_25960)){
var node_25962 = chunk__25708_25959.cljs$core$IIndexed$_nth$arity$2(null,i__25710_25961);
if(cljs.core.not(node_25962.shadow$old)){
var path_match_25963 = shadow.cljs.devtools.client.browser.match_paths(node_25962.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25963)){
var new_link_25964 = (function (){var G__25736 = node_25962.cloneNode(true);
G__25736.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25963),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25736;
})();
(node_25962.shadow$old = true);

(new_link_25964.onload = ((function (seq__25704_25958,chunk__25708_25959,count__25709_25960,i__25710_25961,seq__25536,chunk__25538,count__25539,i__25540,new_link_25964,path_match_25963,node_25962,path,seq__25536__$1,temp__5804__auto__,map__25535,map__25535__$1,msg,updates,reload_info){
return (function (e){
var seq__25737_25965 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25739_25966 = null;
var count__25740_25967 = (0);
var i__25741_25968 = (0);
while(true){
if((i__25741_25968 < count__25740_25967)){
var map__25745_25969 = chunk__25739_25966.cljs$core$IIndexed$_nth$arity$2(null,i__25741_25968);
var map__25745_25970__$1 = cljs.core.__destructure_map(map__25745_25969);
var task_25971 = map__25745_25970__$1;
var fn_str_25972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25745_25970__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25745_25970__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25974 = goog.getObjectByName(fn_str_25972,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25973)].join(''));

(fn_obj_25974.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25974.cljs$core$IFn$_invoke$arity$2(path,new_link_25964) : fn_obj_25974.call(null,path,new_link_25964));


var G__25975 = seq__25737_25965;
var G__25976 = chunk__25739_25966;
var G__25977 = count__25740_25967;
var G__25978 = (i__25741_25968 + (1));
seq__25737_25965 = G__25975;
chunk__25739_25966 = G__25976;
count__25740_25967 = G__25977;
i__25741_25968 = G__25978;
continue;
} else {
var temp__5804__auto___25979__$1 = cljs.core.seq(seq__25737_25965);
if(temp__5804__auto___25979__$1){
var seq__25737_25980__$1 = temp__5804__auto___25979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25737_25980__$1)){
var c__5568__auto___25981 = cljs.core.chunk_first(seq__25737_25980__$1);
var G__25982 = cljs.core.chunk_rest(seq__25737_25980__$1);
var G__25983 = c__5568__auto___25981;
var G__25984 = cljs.core.count(c__5568__auto___25981);
var G__25985 = (0);
seq__25737_25965 = G__25982;
chunk__25739_25966 = G__25983;
count__25740_25967 = G__25984;
i__25741_25968 = G__25985;
continue;
} else {
var map__25746_25986 = cljs.core.first(seq__25737_25980__$1);
var map__25746_25987__$1 = cljs.core.__destructure_map(map__25746_25986);
var task_25988 = map__25746_25987__$1;
var fn_str_25989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25746_25987__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25746_25987__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25991 = goog.getObjectByName(fn_str_25989,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25990)].join(''));

(fn_obj_25991.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25991.cljs$core$IFn$_invoke$arity$2(path,new_link_25964) : fn_obj_25991.call(null,path,new_link_25964));


var G__25992 = cljs.core.next(seq__25737_25980__$1);
var G__25993 = null;
var G__25994 = (0);
var G__25995 = (0);
seq__25737_25965 = G__25992;
chunk__25739_25966 = G__25993;
count__25740_25967 = G__25994;
i__25741_25968 = G__25995;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25962);
});})(seq__25704_25958,chunk__25708_25959,count__25709_25960,i__25710_25961,seq__25536,chunk__25538,count__25539,i__25540,new_link_25964,path_match_25963,node_25962,path,seq__25536__$1,temp__5804__auto__,map__25535,map__25535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25963], 0));

goog.dom.insertSiblingAfter(new_link_25964,node_25962);


var G__25996 = seq__25704_25958;
var G__25997 = chunk__25708_25959;
var G__25998 = count__25709_25960;
var G__25999 = (i__25710_25961 + (1));
seq__25704_25958 = G__25996;
chunk__25708_25959 = G__25997;
count__25709_25960 = G__25998;
i__25710_25961 = G__25999;
continue;
} else {
var G__26000 = seq__25704_25958;
var G__26001 = chunk__25708_25959;
var G__26002 = count__25709_25960;
var G__26003 = (i__25710_25961 + (1));
seq__25704_25958 = G__26000;
chunk__25708_25959 = G__26001;
count__25709_25960 = G__26002;
i__25710_25961 = G__26003;
continue;
}
} else {
var G__26004 = seq__25704_25958;
var G__26005 = chunk__25708_25959;
var G__26006 = count__25709_25960;
var G__26007 = (i__25710_25961 + (1));
seq__25704_25958 = G__26004;
chunk__25708_25959 = G__26005;
count__25709_25960 = G__26006;
i__25710_25961 = G__26007;
continue;
}
} else {
var temp__5804__auto___26008__$1 = cljs.core.seq(seq__25704_25958);
if(temp__5804__auto___26008__$1){
var seq__25704_26009__$1 = temp__5804__auto___26008__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25704_26009__$1)){
var c__5568__auto___26010 = cljs.core.chunk_first(seq__25704_26009__$1);
var G__26011 = cljs.core.chunk_rest(seq__25704_26009__$1);
var G__26012 = c__5568__auto___26010;
var G__26013 = cljs.core.count(c__5568__auto___26010);
var G__26014 = (0);
seq__25704_25958 = G__26011;
chunk__25708_25959 = G__26012;
count__25709_25960 = G__26013;
i__25710_25961 = G__26014;
continue;
} else {
var node_26015 = cljs.core.first(seq__25704_26009__$1);
if(cljs.core.not(node_26015.shadow$old)){
var path_match_26016 = shadow.cljs.devtools.client.browser.match_paths(node_26015.getAttribute("href"),path);
if(cljs.core.truth_(path_match_26016)){
var new_link_26017 = (function (){var G__25747 = node_26015.cloneNode(true);
G__25747.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_26016),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__25747;
})();
(node_26015.shadow$old = true);

(new_link_26017.onload = ((function (seq__25704_25958,chunk__25708_25959,count__25709_25960,i__25710_25961,seq__25536,chunk__25538,count__25539,i__25540,new_link_26017,path_match_26016,node_26015,seq__25704_26009__$1,temp__5804__auto___26008__$1,path,seq__25536__$1,temp__5804__auto__,map__25535,map__25535__$1,msg,updates,reload_info){
return (function (e){
var seq__25748_26018 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25750_26019 = null;
var count__25751_26020 = (0);
var i__25752_26021 = (0);
while(true){
if((i__25752_26021 < count__25751_26020)){
var map__25756_26022 = chunk__25750_26019.cljs$core$IIndexed$_nth$arity$2(null,i__25752_26021);
var map__25756_26023__$1 = cljs.core.__destructure_map(map__25756_26022);
var task_26024 = map__25756_26023__$1;
var fn_str_26025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25756_26023__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25756_26023__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26027 = goog.getObjectByName(fn_str_26025,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26026)].join(''));

(fn_obj_26027.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26027.cljs$core$IFn$_invoke$arity$2(path,new_link_26017) : fn_obj_26027.call(null,path,new_link_26017));


var G__26028 = seq__25748_26018;
var G__26029 = chunk__25750_26019;
var G__26030 = count__25751_26020;
var G__26031 = (i__25752_26021 + (1));
seq__25748_26018 = G__26028;
chunk__25750_26019 = G__26029;
count__25751_26020 = G__26030;
i__25752_26021 = G__26031;
continue;
} else {
var temp__5804__auto___26032__$2 = cljs.core.seq(seq__25748_26018);
if(temp__5804__auto___26032__$2){
var seq__25748_26033__$1 = temp__5804__auto___26032__$2;
if(cljs.core.chunked_seq_QMARK_(seq__25748_26033__$1)){
var c__5568__auto___26034 = cljs.core.chunk_first(seq__25748_26033__$1);
var G__26035 = cljs.core.chunk_rest(seq__25748_26033__$1);
var G__26036 = c__5568__auto___26034;
var G__26037 = cljs.core.count(c__5568__auto___26034);
var G__26038 = (0);
seq__25748_26018 = G__26035;
chunk__25750_26019 = G__26036;
count__25751_26020 = G__26037;
i__25752_26021 = G__26038;
continue;
} else {
var map__25757_26039 = cljs.core.first(seq__25748_26033__$1);
var map__25757_26040__$1 = cljs.core.__destructure_map(map__25757_26039);
var task_26041 = map__25757_26040__$1;
var fn_str_26042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25757_26040__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_26043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25757_26040__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_26044 = goog.getObjectByName(fn_str_26042,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_26043)].join(''));

(fn_obj_26044.cljs$core$IFn$_invoke$arity$2 ? fn_obj_26044.cljs$core$IFn$_invoke$arity$2(path,new_link_26017) : fn_obj_26044.call(null,path,new_link_26017));


var G__26045 = cljs.core.next(seq__25748_26033__$1);
var G__26046 = null;
var G__26047 = (0);
var G__26048 = (0);
seq__25748_26018 = G__26045;
chunk__25750_26019 = G__26046;
count__25751_26020 = G__26047;
i__25752_26021 = G__26048;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_26015);
});})(seq__25704_25958,chunk__25708_25959,count__25709_25960,i__25710_25961,seq__25536,chunk__25538,count__25539,i__25540,new_link_26017,path_match_26016,node_26015,seq__25704_26009__$1,temp__5804__auto___26008__$1,path,seq__25536__$1,temp__5804__auto__,map__25535,map__25535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_26016], 0));

goog.dom.insertSiblingAfter(new_link_26017,node_26015);


var G__26049 = cljs.core.next(seq__25704_26009__$1);
var G__26050 = null;
var G__26051 = (0);
var G__26052 = (0);
seq__25704_25958 = G__26049;
chunk__25708_25959 = G__26050;
count__25709_25960 = G__26051;
i__25710_25961 = G__26052;
continue;
} else {
var G__26053 = cljs.core.next(seq__25704_26009__$1);
var G__26054 = null;
var G__26055 = (0);
var G__26056 = (0);
seq__25704_25958 = G__26053;
chunk__25708_25959 = G__26054;
count__25709_25960 = G__26055;
i__25710_25961 = G__26056;
continue;
}
} else {
var G__26057 = cljs.core.next(seq__25704_26009__$1);
var G__26058 = null;
var G__26059 = (0);
var G__26060 = (0);
seq__25704_25958 = G__26057;
chunk__25708_25959 = G__26058;
count__25709_25960 = G__26059;
i__25710_25961 = G__26060;
continue;
}
}
} else {
}
}
break;
}


var G__26061 = cljs.core.next(seq__25536__$1);
var G__26062 = null;
var G__26063 = (0);
var G__26064 = (0);
seq__25536 = G__26061;
chunk__25538 = G__26062;
count__25539 = G__26063;
i__25540 = G__26064;
continue;
} else {
var G__26065 = cljs.core.next(seq__25536__$1);
var G__26066 = null;
var G__26067 = (0);
var G__26068 = (0);
seq__25536 = G__26065;
chunk__25538 = G__26066;
count__25539 = G__26067;
i__25540 = G__26068;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__25758){
var map__25759 = p__25758;
var map__25759__$1 = cljs.core.__destructure_map(map__25759);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25759__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__25760,done,error){
var map__25761 = p__25760;
var map__25761__$1 = cljs.core.__destructure_map(map__25761);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25761__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__25762,done,error){
var map__25763 = p__25762;
var map__25763__$1 = cljs.core.__destructure_map(map__25763);
var msg = map__25763__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25763__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25763__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25763__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25764){
var map__25765 = p__25764;
var map__25765__$1 = cljs.core.__destructure_map(map__25765);
var src = map__25765__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25765__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__25766 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25766) : done.call(null,G__25766));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__25767){
var map__25768 = p__25767;
var map__25768__$1 = cljs.core.__destructure_map(map__25768);
var msg__$1 = map__25768__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25768__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e25769){var ex = e25769;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__25770){
var map__25771 = p__25770;
var map__25771__$1 = cljs.core.__destructure_map(map__25771);
var env = map__25771__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25771__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__25772){
var map__25773 = p__25772;
var map__25773__$1 = cljs.core.__destructure_map(map__25773);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25773__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25773__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__25774){
var map__25775 = p__25774;
var map__25775__$1 = cljs.core.__destructure_map(map__25775);
var svc = map__25775__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25775__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
