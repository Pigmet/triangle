goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24272){
var map__24273 = p__24272;
var map__24273__$1 = cljs.core.__destructure_map(map__24273);
var m = map__24273__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24273__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24273__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24274_24529 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24275_24530 = null;
var count__24276_24531 = (0);
var i__24277_24532 = (0);
while(true){
if((i__24277_24532 < count__24276_24531)){
var f_24535 = chunk__24275_24530.cljs$core$IIndexed$_nth$arity$2(null,i__24277_24532);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24535], 0));


var G__24538 = seq__24274_24529;
var G__24539 = chunk__24275_24530;
var G__24540 = count__24276_24531;
var G__24541 = (i__24277_24532 + (1));
seq__24274_24529 = G__24538;
chunk__24275_24530 = G__24539;
count__24276_24531 = G__24540;
i__24277_24532 = G__24541;
continue;
} else {
var temp__5804__auto___24542 = cljs.core.seq(seq__24274_24529);
if(temp__5804__auto___24542){
var seq__24274_24543__$1 = temp__5804__auto___24542;
if(cljs.core.chunked_seq_QMARK_(seq__24274_24543__$1)){
var c__5568__auto___24544 = cljs.core.chunk_first(seq__24274_24543__$1);
var G__24545 = cljs.core.chunk_rest(seq__24274_24543__$1);
var G__24546 = c__5568__auto___24544;
var G__24547 = cljs.core.count(c__5568__auto___24544);
var G__24548 = (0);
seq__24274_24529 = G__24545;
chunk__24275_24530 = G__24546;
count__24276_24531 = G__24547;
i__24277_24532 = G__24548;
continue;
} else {
var f_24549 = cljs.core.first(seq__24274_24543__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_24549], 0));


var G__24550 = cljs.core.next(seq__24274_24543__$1);
var G__24551 = null;
var G__24552 = (0);
var G__24553 = (0);
seq__24274_24529 = G__24550;
chunk__24275_24530 = G__24551;
count__24276_24531 = G__24552;
i__24277_24532 = G__24553;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24554 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_24554], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_24554)))?cljs.core.second(arglists_24554):arglists_24554)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24296_24555 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24297_24556 = null;
var count__24298_24557 = (0);
var i__24299_24558 = (0);
while(true){
if((i__24299_24558 < count__24298_24557)){
var vec__24310_24559 = chunk__24297_24556.cljs$core$IIndexed$_nth$arity$2(null,i__24299_24558);
var name_24560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24310_24559,(0),null);
var map__24313_24561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24310_24559,(1),null);
var map__24313_24562__$1 = cljs.core.__destructure_map(map__24313_24561);
var doc_24563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313_24562__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24313_24562__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24560], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24564], 0));

if(cljs.core.truth_(doc_24563)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24563], 0));
} else {
}


var G__24565 = seq__24296_24555;
var G__24566 = chunk__24297_24556;
var G__24567 = count__24298_24557;
var G__24568 = (i__24299_24558 + (1));
seq__24296_24555 = G__24565;
chunk__24297_24556 = G__24566;
count__24298_24557 = G__24567;
i__24299_24558 = G__24568;
continue;
} else {
var temp__5804__auto___24569 = cljs.core.seq(seq__24296_24555);
if(temp__5804__auto___24569){
var seq__24296_24570__$1 = temp__5804__auto___24569;
if(cljs.core.chunked_seq_QMARK_(seq__24296_24570__$1)){
var c__5568__auto___24571 = cljs.core.chunk_first(seq__24296_24570__$1);
var G__24572 = cljs.core.chunk_rest(seq__24296_24570__$1);
var G__24573 = c__5568__auto___24571;
var G__24574 = cljs.core.count(c__5568__auto___24571);
var G__24575 = (0);
seq__24296_24555 = G__24572;
chunk__24297_24556 = G__24573;
count__24298_24557 = G__24574;
i__24299_24558 = G__24575;
continue;
} else {
var vec__24319_24576 = cljs.core.first(seq__24296_24570__$1);
var name_24577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24319_24576,(0),null);
var map__24322_24578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24319_24576,(1),null);
var map__24322_24579__$1 = cljs.core.__destructure_map(map__24322_24578);
var doc_24580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24322_24579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24322_24579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_24577], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_24581], 0));

if(cljs.core.truth_(doc_24580)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_24580], 0));
} else {
}


var G__24582 = cljs.core.next(seq__24296_24570__$1);
var G__24583 = null;
var G__24584 = (0);
var G__24585 = (0);
seq__24296_24555 = G__24582;
chunk__24297_24556 = G__24583;
count__24298_24557 = G__24584;
i__24299_24558 = G__24585;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__24327 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24328 = null;
var count__24329 = (0);
var i__24330 = (0);
while(true){
if((i__24330 < count__24329)){
var role = chunk__24328.cljs$core$IIndexed$_nth$arity$2(null,i__24330);
var temp__5804__auto___24586__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24586__$1)){
var spec_24587 = temp__5804__auto___24586__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24587)], 0));
} else {
}


var G__24588 = seq__24327;
var G__24589 = chunk__24328;
var G__24590 = count__24329;
var G__24591 = (i__24330 + (1));
seq__24327 = G__24588;
chunk__24328 = G__24589;
count__24329 = G__24590;
i__24330 = G__24591;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__24327);
if(temp__5804__auto____$1){
var seq__24327__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24327__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24327__$1);
var G__24592 = cljs.core.chunk_rest(seq__24327__$1);
var G__24593 = c__5568__auto__;
var G__24594 = cljs.core.count(c__5568__auto__);
var G__24595 = (0);
seq__24327 = G__24592;
chunk__24328 = G__24593;
count__24329 = G__24594;
i__24330 = G__24595;
continue;
} else {
var role = cljs.core.first(seq__24327__$1);
var temp__5804__auto___24596__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___24596__$2)){
var spec_24597 = temp__5804__auto___24596__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_24597)], 0));
} else {
}


var G__24598 = cljs.core.next(seq__24327__$1);
var G__24599 = null;
var G__24600 = (0);
var G__24601 = (0);
seq__24327 = G__24598;
chunk__24328 = G__24599;
count__24329 = G__24600;
i__24330 = G__24601;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__24603 = cljs.core.ex_cause(t);
via = G__24602;
t = G__24603;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24342 = datafied_throwable;
var map__24342__$1 = cljs.core.__destructure_map(map__24342);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24342__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24342__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24343 = cljs.core.last(via);
var map__24343__$1 = cljs.core.__destructure_map(map__24343);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24343__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24343__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24343__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24344 = data;
var map__24344__$1 = cljs.core.__destructure_map(map__24344);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24344__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24344__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24344__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24345 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__24345__$1 = cljs.core.__destructure_map(map__24345);
var top_data = map__24345__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24345__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__24346 = phase;
var G__24346__$1 = (((G__24346 instanceof cljs.core.Keyword))?G__24346.fqn:null);
switch (G__24346__$1) {
case "read-source":
var map__24347 = data;
var map__24347__$1 = cljs.core.__destructure_map(map__24347);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24347__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24347__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24348 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__24348__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24348,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24348);
var G__24348__$2 = (cljs.core.truth_((function (){var fexpr__24349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24349.cljs$core$IFn$_invoke$arity$1 ? fexpr__24349.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24349.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24348__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24348__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24348__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24348__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24358 = top_data;
var G__24358__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24358,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24358);
var G__24358__$2 = (cljs.core.truth_((function (){var fexpr__24368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24368.cljs$core$IFn$_invoke$arity$1 ? fexpr__24368.cljs$core$IFn$_invoke$arity$1(source) : fexpr__24368.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__24358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24358__$1);
var G__24358__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24358__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24358__$2);
var G__24358__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24358__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24358__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24358__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24358__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24380 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24380,(3),null);
var G__24383 = top_data;
var G__24383__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24383);
var G__24383__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24383__$1);
var G__24383__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24383__$2);
var G__24383__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24383__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24383__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24383__$4;
}

break;
case "execution":
var vec__24403 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24403,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24403,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24403,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24403,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24341_SHARP_){
var or__5045__auto__ = (p1__24341_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__24406 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__24406.cljs$core$IFn$_invoke$arity$1 ? fexpr__24406.cljs$core$IFn$_invoke$arity$1(p1__24341_SHARP_) : fexpr__24406.call(null,p1__24341_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__24407 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24407__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24407,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24407);
var G__24407__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24407__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24407__$1);
var G__24407__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24407__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24407__$2);
var G__24407__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24407__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24407__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__24407__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24407__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24346__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24459){
var map__24464 = p__24459;
var map__24464__$1 = cljs.core.__destructure_map(map__24464);
var triage_data = map__24464__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24464__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24475 = phase;
var G__24475__$1 = (((G__24475 instanceof cljs.core.Keyword))?G__24475.fqn:null);
switch (G__24475__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__24477 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__24478 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24479 = loc;
var G__24480 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24481_24612 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24482_24613 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24483_24614 = true;
var _STAR_print_fn_STAR__temp_val__24484_24615 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24483_24614);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24484_24615);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24444_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24444_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24482_24613);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24481_24612);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24477,G__24478,G__24479,G__24480) : format.call(null,G__24477,G__24478,G__24479,G__24480));

break;
case "macroexpansion":
var G__24486 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__24487 = cause_type;
var G__24488 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24489 = loc;
var G__24490 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24486,G__24487,G__24488,G__24489,G__24490) : format.call(null,G__24486,G__24487,G__24488,G__24489,G__24490));

break;
case "compile-syntax-check":
var G__24492 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__24493 = cause_type;
var G__24494 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24495 = loc;
var G__24496 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24492,G__24493,G__24494,G__24495,G__24496) : format.call(null,G__24492,G__24493,G__24494,G__24495,G__24496));

break;
case "compilation":
var G__24497 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__24498 = cause_type;
var G__24499 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24500 = loc;
var G__24501 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24497,G__24498,G__24499,G__24500,G__24501) : format.call(null,G__24497,G__24498,G__24499,G__24500,G__24501));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__24507 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__24508 = symbol;
var G__24509 = loc;
var G__24510 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24511_24617 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24512_24618 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24513_24619 = true;
var _STAR_print_fn_STAR__temp_val__24514_24620 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24513_24619);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24514_24620);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24451_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__24451_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24512_24618);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24511_24617);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__24507,G__24508,G__24509,G__24510) : format.call(null,G__24507,G__24508,G__24509,G__24510));
} else {
var G__24516 = "Execution error%s at %s(%s).\n%s\n";
var G__24517 = cause_type;
var G__24518 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__24519 = loc;
var G__24520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__24516,G__24517,G__24518,G__24519,G__24520) : format.call(null,G__24516,G__24517,G__24518,G__24519,G__24520));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24475__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
