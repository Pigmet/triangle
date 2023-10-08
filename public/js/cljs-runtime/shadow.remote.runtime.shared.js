goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__22225){
var map__22226 = p__22225;
var map__22226__$1 = cljs.core.__destructure_map(map__22226);
var runtime = map__22226__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22226__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_22369 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_22369)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__22227 = runtime;
var G__22228 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_22369);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__22227,G__22228) : shadow.remote.runtime.shared.process.call(null,G__22227,G__22228));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__22232,res){
var map__22233 = p__22232;
var map__22233__$1 = cljs.core.__destructure_map(map__22233);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22233__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22233__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__22234 = res;
var G__22234__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22234,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__22234);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__22234__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__22234__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__22237 = arguments.length;
switch (G__22237) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__22238,msg,handlers,timeout_after_ms){
var map__22239 = p__22238;
var map__22239__$1 = cljs.core.__destructure_map(map__22239);
var runtime = map__22239__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22239__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22371 = arguments.length;
var i__5770__auto___22372 = (0);
while(true){
if((i__5770__auto___22372 < len__5769__auto___22371)){
args__5775__auto__.push((arguments[i__5770__auto___22372]));

var G__22373 = (i__5770__auto___22372 + (1));
i__5770__auto___22372 = G__22373;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__22243,ev,args){
var map__22244 = p__22243;
var map__22244__$1 = cljs.core.__destructure_map(map__22244);
var runtime = map__22244__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__22245 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__22248 = null;
var count__22249 = (0);
var i__22250 = (0);
while(true){
if((i__22250 < count__22249)){
var ext = chunk__22248.cljs$core$IIndexed$_nth$arity$2(null,i__22250);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__22374 = seq__22245;
var G__22375 = chunk__22248;
var G__22376 = count__22249;
var G__22377 = (i__22250 + (1));
seq__22245 = G__22374;
chunk__22248 = G__22375;
count__22249 = G__22376;
i__22250 = G__22377;
continue;
} else {
var G__22378 = seq__22245;
var G__22379 = chunk__22248;
var G__22380 = count__22249;
var G__22381 = (i__22250 + (1));
seq__22245 = G__22378;
chunk__22248 = G__22379;
count__22249 = G__22380;
i__22250 = G__22381;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22245);
if(temp__5804__auto__){
var seq__22245__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22245__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22245__$1);
var G__22382 = cljs.core.chunk_rest(seq__22245__$1);
var G__22383 = c__5568__auto__;
var G__22384 = cljs.core.count(c__5568__auto__);
var G__22385 = (0);
seq__22245 = G__22382;
chunk__22248 = G__22383;
count__22249 = G__22384;
i__22250 = G__22385;
continue;
} else {
var ext = cljs.core.first(seq__22245__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__22386 = cljs.core.next(seq__22245__$1);
var G__22387 = null;
var G__22388 = (0);
var G__22389 = (0);
seq__22245 = G__22386;
chunk__22248 = G__22387;
count__22249 = G__22388;
i__22250 = G__22389;
continue;
} else {
var G__22390 = cljs.core.next(seq__22245__$1);
var G__22391 = null;
var G__22392 = (0);
var G__22393 = (0);
seq__22245 = G__22390;
chunk__22248 = G__22391;
count__22249 = G__22392;
i__22250 = G__22393;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq22240){
var G__22241 = cljs.core.first(seq22240);
var seq22240__$1 = cljs.core.next(seq22240);
var G__22242 = cljs.core.first(seq22240__$1);
var seq22240__$2 = cljs.core.next(seq22240__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22241,G__22242,seq22240__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__22257,p__22258){
var map__22259 = p__22257;
var map__22259__$1 = cljs.core.__destructure_map(map__22259);
var runtime = map__22259__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22259__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__22260 = p__22258;
var map__22260__$1 = cljs.core.__destructure_map(map__22260);
var msg = map__22260__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22260__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__22261 = cljs.core.deref(state_ref);
var map__22261__$1 = cljs.core.__destructure_map(map__22261);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22261__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22261__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__22263,msg){
var map__22265 = p__22263;
var map__22265__$1 = cljs.core.__destructure_map(map__22265);
var runtime = map__22265__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22265__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__22281,key,p__22282){
var map__22283 = p__22281;
var map__22283__$1 = cljs.core.__destructure_map(map__22283);
var state = map__22283__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22283__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__22284 = p__22282;
var map__22284__$1 = cljs.core.__destructure_map(map__22284);
var spec = map__22284__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22284__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__22289,key,spec){
var map__22290 = p__22289;
var map__22290__$1 = cljs.core.__destructure_map(map__22290);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__22291_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__22291_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__22292_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__22292_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__22293_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__22293_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__22294_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__22294_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__22295_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__22295_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__22296,key){
var map__22297 = p__22296;
var map__22297__$1 = cljs.core.__destructure_map(map__22297);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__22302,msg){
var map__22304 = p__22302;
var map__22304__$1 = cljs.core.__destructure_map(map__22304);
var runtime = map__22304__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22304__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__22324,p__22325){
var map__22326 = p__22324;
var map__22326__$1 = cljs.core.__destructure_map(map__22326);
var runtime = map__22326__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__22327 = p__22325;
var map__22327__$1 = cljs.core.__destructure_map(map__22327);
var msg = map__22327__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22327__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__22335 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__22337 = null;
var count__22338 = (0);
var i__22339 = (0);
while(true){
if((i__22339 < count__22338)){
var map__22344 = chunk__22337.cljs$core$IIndexed$_nth$arity$2(null,i__22339);
var map__22344__$1 = cljs.core.__destructure_map(map__22344);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__22501 = seq__22335;
var G__22502 = chunk__22337;
var G__22503 = count__22338;
var G__22504 = (i__22339 + (1));
seq__22335 = G__22501;
chunk__22337 = G__22502;
count__22338 = G__22503;
i__22339 = G__22504;
continue;
} else {
var G__22505 = seq__22335;
var G__22506 = chunk__22337;
var G__22507 = count__22338;
var G__22508 = (i__22339 + (1));
seq__22335 = G__22505;
chunk__22337 = G__22506;
count__22338 = G__22507;
i__22339 = G__22508;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22335);
if(temp__5804__auto__){
var seq__22335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22335__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22335__$1);
var G__22509 = cljs.core.chunk_rest(seq__22335__$1);
var G__22510 = c__5568__auto__;
var G__22511 = cljs.core.count(c__5568__auto__);
var G__22512 = (0);
seq__22335 = G__22509;
chunk__22337 = G__22510;
count__22338 = G__22511;
i__22339 = G__22512;
continue;
} else {
var map__22346 = cljs.core.first(seq__22335__$1);
var map__22346__$1 = cljs.core.__destructure_map(map__22346);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22346__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__22513 = cljs.core.next(seq__22335__$1);
var G__22514 = null;
var G__22515 = (0);
var G__22516 = (0);
seq__22335 = G__22513;
chunk__22337 = G__22514;
count__22338 = G__22515;
i__22339 = G__22516;
continue;
} else {
var G__22517 = cljs.core.next(seq__22335__$1);
var G__22518 = null;
var G__22519 = (0);
var G__22520 = (0);
seq__22335 = G__22517;
chunk__22337 = G__22518;
count__22338 = G__22519;
i__22339 = G__22520;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
