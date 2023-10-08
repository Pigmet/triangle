goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21546 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_21546(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21547 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_21547(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__20958 = coll;
var G__20959 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__20958,G__20959) : shadow.dom.lazy_native_coll_seq.call(null,G__20958,G__20959));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__20993 = arguments.length;
switch (G__20993) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__20999 = arguments.length;
switch (G__20999) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__21003 = arguments.length;
switch (G__21003) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__21027 = arguments.length;
switch (G__21027) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__21071 = arguments.length;
switch (G__21071) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__21079 = arguments.length;
switch (G__21079) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e21081){if((e21081 instanceof Object)){
var e = e21081;
return console.log("didnt support attachEvent",el,e);
} else {
throw e21081;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__21120 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__21121 = null;
var count__21122 = (0);
var i__21123 = (0);
while(true){
if((i__21123 < count__21122)){
var el = chunk__21121.cljs$core$IIndexed$_nth$arity$2(null,i__21123);
var handler_21554__$1 = ((function (seq__21120,chunk__21121,count__21122,i__21123,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21120,chunk__21121,count__21122,i__21123,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21554__$1);


var G__21555 = seq__21120;
var G__21556 = chunk__21121;
var G__21557 = count__21122;
var G__21558 = (i__21123 + (1));
seq__21120 = G__21555;
chunk__21121 = G__21556;
count__21122 = G__21557;
i__21123 = G__21558;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21120);
if(temp__5804__auto__){
var seq__21120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21120__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21120__$1);
var G__21559 = cljs.core.chunk_rest(seq__21120__$1);
var G__21560 = c__5568__auto__;
var G__21561 = cljs.core.count(c__5568__auto__);
var G__21562 = (0);
seq__21120 = G__21559;
chunk__21121 = G__21560;
count__21122 = G__21561;
i__21123 = G__21562;
continue;
} else {
var el = cljs.core.first(seq__21120__$1);
var handler_21563__$1 = ((function (seq__21120,chunk__21121,count__21122,i__21123,el,seq__21120__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__21120,chunk__21121,count__21122,i__21123,el,seq__21120__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21563__$1);


var G__21564 = cljs.core.next(seq__21120__$1);
var G__21565 = null;
var G__21566 = (0);
var G__21567 = (0);
seq__21120 = G__21564;
chunk__21121 = G__21565;
count__21122 = G__21566;
i__21123 = G__21567;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__21145 = arguments.length;
switch (G__21145) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__21189 = cljs.core.seq(events);
var chunk__21190 = null;
var count__21191 = (0);
var i__21192 = (0);
while(true){
if((i__21192 < count__21191)){
var vec__21199 = chunk__21190.cljs$core$IIndexed$_nth$arity$2(null,i__21192);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21199,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21569 = seq__21189;
var G__21570 = chunk__21190;
var G__21571 = count__21191;
var G__21572 = (i__21192 + (1));
seq__21189 = G__21569;
chunk__21190 = G__21570;
count__21191 = G__21571;
i__21192 = G__21572;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21189);
if(temp__5804__auto__){
var seq__21189__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21189__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21189__$1);
var G__21573 = cljs.core.chunk_rest(seq__21189__$1);
var G__21574 = c__5568__auto__;
var G__21575 = cljs.core.count(c__5568__auto__);
var G__21576 = (0);
seq__21189 = G__21573;
chunk__21190 = G__21574;
count__21191 = G__21575;
i__21192 = G__21576;
continue;
} else {
var vec__21202 = cljs.core.first(seq__21189__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21202,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21577 = cljs.core.next(seq__21189__$1);
var G__21578 = null;
var G__21579 = (0);
var G__21580 = (0);
seq__21189 = G__21577;
chunk__21190 = G__21578;
count__21191 = G__21579;
i__21192 = G__21580;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__21205 = cljs.core.seq(styles);
var chunk__21206 = null;
var count__21207 = (0);
var i__21208 = (0);
while(true){
if((i__21208 < count__21207)){
var vec__21215 = chunk__21206.cljs$core$IIndexed$_nth$arity$2(null,i__21208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21215,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21581 = seq__21205;
var G__21582 = chunk__21206;
var G__21583 = count__21207;
var G__21584 = (i__21208 + (1));
seq__21205 = G__21581;
chunk__21206 = G__21582;
count__21207 = G__21583;
i__21208 = G__21584;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21205);
if(temp__5804__auto__){
var seq__21205__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21205__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21205__$1);
var G__21585 = cljs.core.chunk_rest(seq__21205__$1);
var G__21586 = c__5568__auto__;
var G__21587 = cljs.core.count(c__5568__auto__);
var G__21588 = (0);
seq__21205 = G__21585;
chunk__21206 = G__21586;
count__21207 = G__21587;
i__21208 = G__21588;
continue;
} else {
var vec__21218 = cljs.core.first(seq__21205__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21218,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21589 = cljs.core.next(seq__21205__$1);
var G__21590 = null;
var G__21591 = (0);
var G__21592 = (0);
seq__21205 = G__21589;
chunk__21206 = G__21590;
count__21207 = G__21591;
i__21208 = G__21592;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__21221_21593 = key;
var G__21221_21594__$1 = (((G__21221_21593 instanceof cljs.core.Keyword))?G__21221_21593.fqn:null);
switch (G__21221_21594__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21596 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21596,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21596,"aria-");
}
})())){
el.setAttribute(ks_21596,value);
} else {
(el[ks_21596] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__21246){
var map__21247 = p__21246;
var map__21247__$1 = cljs.core.__destructure_map(map__21247);
var props = map__21247__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__21248 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21248,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__21254 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__21254,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__21254;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__21256 = arguments.length;
switch (G__21256) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__21257){
var vec__21258 = p__21257;
var seq__21259 = cljs.core.seq(vec__21258);
var first__21260 = cljs.core.first(seq__21259);
var seq__21259__$1 = cljs.core.next(seq__21259);
var nn = first__21260;
var first__21260__$1 = cljs.core.first(seq__21259__$1);
var seq__21259__$2 = cljs.core.next(seq__21259__$1);
var np = first__21260__$1;
var nc = seq__21259__$2;
var node = vec__21258;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21266 = nn;
var G__21267 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21266,G__21267) : create_fn.call(null,G__21266,G__21267));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21270 = nn;
var G__21271 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__21270,G__21271) : create_fn.call(null,G__21270,G__21271));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__21276 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21276,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21276,(1),null);
var seq__21280_21598 = cljs.core.seq(node_children);
var chunk__21281_21599 = null;
var count__21282_21600 = (0);
var i__21283_21601 = (0);
while(true){
if((i__21283_21601 < count__21282_21600)){
var child_struct_21602 = chunk__21281_21599.cljs$core$IIndexed$_nth$arity$2(null,i__21283_21601);
var children_21603 = shadow.dom.dom_node(child_struct_21602);
if(cljs.core.seq_QMARK_(children_21603)){
var seq__21296_21604 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21603));
var chunk__21298_21605 = null;
var count__21299_21606 = (0);
var i__21300_21607 = (0);
while(true){
if((i__21300_21607 < count__21299_21606)){
var child_21608 = chunk__21298_21605.cljs$core$IIndexed$_nth$arity$2(null,i__21300_21607);
if(cljs.core.truth_(child_21608)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21608);


var G__21609 = seq__21296_21604;
var G__21610 = chunk__21298_21605;
var G__21611 = count__21299_21606;
var G__21612 = (i__21300_21607 + (1));
seq__21296_21604 = G__21609;
chunk__21298_21605 = G__21610;
count__21299_21606 = G__21611;
i__21300_21607 = G__21612;
continue;
} else {
var G__21613 = seq__21296_21604;
var G__21614 = chunk__21298_21605;
var G__21615 = count__21299_21606;
var G__21616 = (i__21300_21607 + (1));
seq__21296_21604 = G__21613;
chunk__21298_21605 = G__21614;
count__21299_21606 = G__21615;
i__21300_21607 = G__21616;
continue;
}
} else {
var temp__5804__auto___21617 = cljs.core.seq(seq__21296_21604);
if(temp__5804__auto___21617){
var seq__21296_21618__$1 = temp__5804__auto___21617;
if(cljs.core.chunked_seq_QMARK_(seq__21296_21618__$1)){
var c__5568__auto___21619 = cljs.core.chunk_first(seq__21296_21618__$1);
var G__21620 = cljs.core.chunk_rest(seq__21296_21618__$1);
var G__21621 = c__5568__auto___21619;
var G__21622 = cljs.core.count(c__5568__auto___21619);
var G__21623 = (0);
seq__21296_21604 = G__21620;
chunk__21298_21605 = G__21621;
count__21299_21606 = G__21622;
i__21300_21607 = G__21623;
continue;
} else {
var child_21624 = cljs.core.first(seq__21296_21618__$1);
if(cljs.core.truth_(child_21624)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21624);


var G__21625 = cljs.core.next(seq__21296_21618__$1);
var G__21626 = null;
var G__21627 = (0);
var G__21628 = (0);
seq__21296_21604 = G__21625;
chunk__21298_21605 = G__21626;
count__21299_21606 = G__21627;
i__21300_21607 = G__21628;
continue;
} else {
var G__21629 = cljs.core.next(seq__21296_21618__$1);
var G__21630 = null;
var G__21631 = (0);
var G__21632 = (0);
seq__21296_21604 = G__21629;
chunk__21298_21605 = G__21630;
count__21299_21606 = G__21631;
i__21300_21607 = G__21632;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21603);
}


var G__21633 = seq__21280_21598;
var G__21634 = chunk__21281_21599;
var G__21635 = count__21282_21600;
var G__21636 = (i__21283_21601 + (1));
seq__21280_21598 = G__21633;
chunk__21281_21599 = G__21634;
count__21282_21600 = G__21635;
i__21283_21601 = G__21636;
continue;
} else {
var temp__5804__auto___21637 = cljs.core.seq(seq__21280_21598);
if(temp__5804__auto___21637){
var seq__21280_21638__$1 = temp__5804__auto___21637;
if(cljs.core.chunked_seq_QMARK_(seq__21280_21638__$1)){
var c__5568__auto___21639 = cljs.core.chunk_first(seq__21280_21638__$1);
var G__21640 = cljs.core.chunk_rest(seq__21280_21638__$1);
var G__21641 = c__5568__auto___21639;
var G__21642 = cljs.core.count(c__5568__auto___21639);
var G__21643 = (0);
seq__21280_21598 = G__21640;
chunk__21281_21599 = G__21641;
count__21282_21600 = G__21642;
i__21283_21601 = G__21643;
continue;
} else {
var child_struct_21644 = cljs.core.first(seq__21280_21638__$1);
var children_21645 = shadow.dom.dom_node(child_struct_21644);
if(cljs.core.seq_QMARK_(children_21645)){
var seq__21302_21646 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21645));
var chunk__21304_21647 = null;
var count__21305_21648 = (0);
var i__21306_21649 = (0);
while(true){
if((i__21306_21649 < count__21305_21648)){
var child_21650 = chunk__21304_21647.cljs$core$IIndexed$_nth$arity$2(null,i__21306_21649);
if(cljs.core.truth_(child_21650)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21650);


var G__21651 = seq__21302_21646;
var G__21652 = chunk__21304_21647;
var G__21653 = count__21305_21648;
var G__21654 = (i__21306_21649 + (1));
seq__21302_21646 = G__21651;
chunk__21304_21647 = G__21652;
count__21305_21648 = G__21653;
i__21306_21649 = G__21654;
continue;
} else {
var G__21655 = seq__21302_21646;
var G__21656 = chunk__21304_21647;
var G__21657 = count__21305_21648;
var G__21658 = (i__21306_21649 + (1));
seq__21302_21646 = G__21655;
chunk__21304_21647 = G__21656;
count__21305_21648 = G__21657;
i__21306_21649 = G__21658;
continue;
}
} else {
var temp__5804__auto___21659__$1 = cljs.core.seq(seq__21302_21646);
if(temp__5804__auto___21659__$1){
var seq__21302_21660__$1 = temp__5804__auto___21659__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21302_21660__$1)){
var c__5568__auto___21661 = cljs.core.chunk_first(seq__21302_21660__$1);
var G__21662 = cljs.core.chunk_rest(seq__21302_21660__$1);
var G__21663 = c__5568__auto___21661;
var G__21664 = cljs.core.count(c__5568__auto___21661);
var G__21665 = (0);
seq__21302_21646 = G__21662;
chunk__21304_21647 = G__21663;
count__21305_21648 = G__21664;
i__21306_21649 = G__21665;
continue;
} else {
var child_21666 = cljs.core.first(seq__21302_21660__$1);
if(cljs.core.truth_(child_21666)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21666);


var G__21667 = cljs.core.next(seq__21302_21660__$1);
var G__21668 = null;
var G__21669 = (0);
var G__21670 = (0);
seq__21302_21646 = G__21667;
chunk__21304_21647 = G__21668;
count__21305_21648 = G__21669;
i__21306_21649 = G__21670;
continue;
} else {
var G__21671 = cljs.core.next(seq__21302_21660__$1);
var G__21672 = null;
var G__21673 = (0);
var G__21674 = (0);
seq__21302_21646 = G__21671;
chunk__21304_21647 = G__21672;
count__21305_21648 = G__21673;
i__21306_21649 = G__21674;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21645);
}


var G__21675 = cljs.core.next(seq__21280_21638__$1);
var G__21676 = null;
var G__21677 = (0);
var G__21678 = (0);
seq__21280_21598 = G__21675;
chunk__21281_21599 = G__21676;
count__21282_21600 = G__21677;
i__21283_21601 = G__21678;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__21334 = cljs.core.seq(node);
var chunk__21335 = null;
var count__21336 = (0);
var i__21337 = (0);
while(true){
if((i__21337 < count__21336)){
var n = chunk__21335.cljs$core$IIndexed$_nth$arity$2(null,i__21337);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21679 = seq__21334;
var G__21680 = chunk__21335;
var G__21681 = count__21336;
var G__21682 = (i__21337 + (1));
seq__21334 = G__21679;
chunk__21335 = G__21680;
count__21336 = G__21681;
i__21337 = G__21682;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21334);
if(temp__5804__auto__){
var seq__21334__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21334__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21334__$1);
var G__21683 = cljs.core.chunk_rest(seq__21334__$1);
var G__21684 = c__5568__auto__;
var G__21685 = cljs.core.count(c__5568__auto__);
var G__21686 = (0);
seq__21334 = G__21683;
chunk__21335 = G__21684;
count__21336 = G__21685;
i__21337 = G__21686;
continue;
} else {
var n = cljs.core.first(seq__21334__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21687 = cljs.core.next(seq__21334__$1);
var G__21688 = null;
var G__21689 = (0);
var G__21690 = (0);
seq__21334 = G__21687;
chunk__21335 = G__21688;
count__21336 = G__21689;
i__21337 = G__21690;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__21351 = arguments.length;
switch (G__21351) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__21361 = arguments.length;
switch (G__21361) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__21371 = arguments.length;
switch (G__21371) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21694 = arguments.length;
var i__5770__auto___21695 = (0);
while(true){
if((i__5770__auto___21695 < len__5769__auto___21694)){
args__5775__auto__.push((arguments[i__5770__auto___21695]));

var G__21696 = (i__5770__auto___21695 + (1));
i__5770__auto___21695 = G__21696;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__21375_21697 = cljs.core.seq(nodes);
var chunk__21376_21698 = null;
var count__21377_21699 = (0);
var i__21378_21700 = (0);
while(true){
if((i__21378_21700 < count__21377_21699)){
var node_21701 = chunk__21376_21698.cljs$core$IIndexed$_nth$arity$2(null,i__21378_21700);
fragment.appendChild(shadow.dom._to_dom(node_21701));


var G__21702 = seq__21375_21697;
var G__21703 = chunk__21376_21698;
var G__21704 = count__21377_21699;
var G__21705 = (i__21378_21700 + (1));
seq__21375_21697 = G__21702;
chunk__21376_21698 = G__21703;
count__21377_21699 = G__21704;
i__21378_21700 = G__21705;
continue;
} else {
var temp__5804__auto___21706 = cljs.core.seq(seq__21375_21697);
if(temp__5804__auto___21706){
var seq__21375_21707__$1 = temp__5804__auto___21706;
if(cljs.core.chunked_seq_QMARK_(seq__21375_21707__$1)){
var c__5568__auto___21708 = cljs.core.chunk_first(seq__21375_21707__$1);
var G__21709 = cljs.core.chunk_rest(seq__21375_21707__$1);
var G__21710 = c__5568__auto___21708;
var G__21711 = cljs.core.count(c__5568__auto___21708);
var G__21712 = (0);
seq__21375_21697 = G__21709;
chunk__21376_21698 = G__21710;
count__21377_21699 = G__21711;
i__21378_21700 = G__21712;
continue;
} else {
var node_21713 = cljs.core.first(seq__21375_21707__$1);
fragment.appendChild(shadow.dom._to_dom(node_21713));


var G__21714 = cljs.core.next(seq__21375_21707__$1);
var G__21715 = null;
var G__21716 = (0);
var G__21717 = (0);
seq__21375_21697 = G__21714;
chunk__21376_21698 = G__21715;
count__21377_21699 = G__21716;
i__21378_21700 = G__21717;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq21372){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21372));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__21393_21718 = cljs.core.seq(scripts);
var chunk__21394_21719 = null;
var count__21396_21720 = (0);
var i__21397_21721 = (0);
while(true){
if((i__21397_21721 < count__21396_21720)){
var vec__21407_21722 = chunk__21394_21719.cljs$core$IIndexed$_nth$arity$2(null,i__21397_21721);
var script_tag_21723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21407_21722,(0),null);
var script_body_21724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21407_21722,(1),null);
eval(script_body_21724);


var G__21725 = seq__21393_21718;
var G__21726 = chunk__21394_21719;
var G__21727 = count__21396_21720;
var G__21728 = (i__21397_21721 + (1));
seq__21393_21718 = G__21725;
chunk__21394_21719 = G__21726;
count__21396_21720 = G__21727;
i__21397_21721 = G__21728;
continue;
} else {
var temp__5804__auto___21729 = cljs.core.seq(seq__21393_21718);
if(temp__5804__auto___21729){
var seq__21393_21730__$1 = temp__5804__auto___21729;
if(cljs.core.chunked_seq_QMARK_(seq__21393_21730__$1)){
var c__5568__auto___21731 = cljs.core.chunk_first(seq__21393_21730__$1);
var G__21732 = cljs.core.chunk_rest(seq__21393_21730__$1);
var G__21733 = c__5568__auto___21731;
var G__21734 = cljs.core.count(c__5568__auto___21731);
var G__21735 = (0);
seq__21393_21718 = G__21732;
chunk__21394_21719 = G__21733;
count__21396_21720 = G__21734;
i__21397_21721 = G__21735;
continue;
} else {
var vec__21410_21736 = cljs.core.first(seq__21393_21730__$1);
var script_tag_21737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21410_21736,(0),null);
var script_body_21738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21410_21736,(1),null);
eval(script_body_21738);


var G__21739 = cljs.core.next(seq__21393_21730__$1);
var G__21740 = null;
var G__21741 = (0);
var G__21742 = (0);
seq__21393_21718 = G__21739;
chunk__21394_21719 = G__21740;
count__21396_21720 = G__21741;
i__21397_21721 = G__21742;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__21413){
var vec__21414 = p__21413;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21414,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21414,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__21418 = arguments.length;
switch (G__21418) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__21422 = cljs.core.seq(style_keys);
var chunk__21423 = null;
var count__21424 = (0);
var i__21425 = (0);
while(true){
if((i__21425 < count__21424)){
var it = chunk__21423.cljs$core$IIndexed$_nth$arity$2(null,i__21425);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21744 = seq__21422;
var G__21745 = chunk__21423;
var G__21746 = count__21424;
var G__21747 = (i__21425 + (1));
seq__21422 = G__21744;
chunk__21423 = G__21745;
count__21424 = G__21746;
i__21425 = G__21747;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21422);
if(temp__5804__auto__){
var seq__21422__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21422__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21422__$1);
var G__21748 = cljs.core.chunk_rest(seq__21422__$1);
var G__21749 = c__5568__auto__;
var G__21750 = cljs.core.count(c__5568__auto__);
var G__21751 = (0);
seq__21422 = G__21748;
chunk__21423 = G__21749;
count__21424 = G__21750;
i__21425 = G__21751;
continue;
} else {
var it = cljs.core.first(seq__21422__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21752 = cljs.core.next(seq__21422__$1);
var G__21753 = null;
var G__21754 = (0);
var G__21755 = (0);
seq__21422 = G__21752;
chunk__21423 = G__21753;
count__21424 = G__21754;
i__21425 = G__21755;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21438,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21442 = k21438;
var G__21442__$1 = (((G__21442 instanceof cljs.core.Keyword))?G__21442.fqn:null);
switch (G__21442__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21438,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21443){
var vec__21444 = p__21443;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21444,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21444,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21437){
var self__ = this;
var G__21437__$1 = this;
return (new cljs.core.RecordIter((0),G__21437__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21439,other21440){
var self__ = this;
var this21439__$1 = this;
return (((!((other21440 == null)))) && ((((this21439__$1.constructor === other21440.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21439__$1.x,other21440.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21439__$1.y,other21440.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21439__$1.__extmap,other21440.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21438){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21447 = k21438;
var G__21447__$1 = (((G__21447 instanceof cljs.core.Keyword))?G__21447.fqn:null);
switch (G__21447__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21438);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21437){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21448 = cljs.core.keyword_identical_QMARK_;
var expr__21449 = k__5352__auto__;
if(cljs.core.truth_((pred__21448.cljs$core$IFn$_invoke$arity$2 ? pred__21448.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__21449) : pred__21448.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__21449)))){
return (new shadow.dom.Coordinate(G__21437,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21448.cljs$core$IFn$_invoke$arity$2 ? pred__21448.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__21449) : pred__21448.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__21449)))){
return (new shadow.dom.Coordinate(self__.x,G__21437,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21437),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21437){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__21437,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__21441){
var extmap__5385__auto__ = (function (){var G__21451 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21441,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__21441)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21451);
} else {
return G__21451;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__21441),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__21441),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k21453,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__21457 = k21453;
var G__21457__$1 = (((G__21457 instanceof cljs.core.Keyword))?G__21457.fqn:null);
switch (G__21457__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21453,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__21458){
var vec__21459 = p__21458;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21459,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21459,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21452){
var self__ = this;
var G__21452__$1 = this;
return (new cljs.core.RecordIter((0),G__21452__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21454,other21455){
var self__ = this;
var this21454__$1 = this;
return (((!((other21455 == null)))) && ((((this21454__$1.constructor === other21455.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21454__$1.w,other21455.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21454__$1.h,other21455.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21454__$1.__extmap,other21455.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k21453){
var self__ = this;
var this__5350__auto____$1 = this;
var G__21462 = k21453;
var G__21462__$1 = (((G__21462 instanceof cljs.core.Keyword))?G__21462.fqn:null);
switch (G__21462__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k21453);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__21452){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__21463 = cljs.core.keyword_identical_QMARK_;
var expr__21464 = k__5352__auto__;
if(cljs.core.truth_((pred__21463.cljs$core$IFn$_invoke$arity$2 ? pred__21463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__21464) : pred__21463.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__21464)))){
return (new shadow.dom.Size(G__21452,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__21463.cljs$core$IFn$_invoke$arity$2 ? pred__21463.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__21464) : pred__21463.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__21464)))){
return (new shadow.dom.Size(self__.w,G__21452,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__21452),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__21452){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__21452,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__21456){
var extmap__5385__auto__ = (function (){var G__21466 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21456,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__21456)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21466);
} else {
return G__21466;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__21456),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__21456),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21765 = (i + (1));
var G__21766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21765;
ret = G__21766;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21471){
var vec__21472 = p__21471;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21472,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21472,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__21476 = arguments.length;
switch (G__21476) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21769 = ps;
var G__21770 = (i + (1));
el__$1 = G__21769;
i = G__21770;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__21477 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21477,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21477,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21477,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__21480_21772 = cljs.core.seq(props);
var chunk__21481_21773 = null;
var count__21482_21774 = (0);
var i__21483_21775 = (0);
while(true){
if((i__21483_21775 < count__21482_21774)){
var vec__21490_21777 = chunk__21481_21773.cljs$core$IIndexed$_nth$arity$2(null,i__21483_21775);
var k_21778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21490_21777,(0),null);
var v_21779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21490_21777,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21778);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21778),v_21779);


var G__21780 = seq__21480_21772;
var G__21781 = chunk__21481_21773;
var G__21782 = count__21482_21774;
var G__21783 = (i__21483_21775 + (1));
seq__21480_21772 = G__21780;
chunk__21481_21773 = G__21781;
count__21482_21774 = G__21782;
i__21483_21775 = G__21783;
continue;
} else {
var temp__5804__auto___21784 = cljs.core.seq(seq__21480_21772);
if(temp__5804__auto___21784){
var seq__21480_21785__$1 = temp__5804__auto___21784;
if(cljs.core.chunked_seq_QMARK_(seq__21480_21785__$1)){
var c__5568__auto___21786 = cljs.core.chunk_first(seq__21480_21785__$1);
var G__21787 = cljs.core.chunk_rest(seq__21480_21785__$1);
var G__21788 = c__5568__auto___21786;
var G__21789 = cljs.core.count(c__5568__auto___21786);
var G__21790 = (0);
seq__21480_21772 = G__21787;
chunk__21481_21773 = G__21788;
count__21482_21774 = G__21789;
i__21483_21775 = G__21790;
continue;
} else {
var vec__21493_21791 = cljs.core.first(seq__21480_21785__$1);
var k_21792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21493_21791,(0),null);
var v_21793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21493_21791,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21792);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21792),v_21793);


var G__21794 = cljs.core.next(seq__21480_21785__$1);
var G__21795 = null;
var G__21796 = (0);
var G__21797 = (0);
seq__21480_21772 = G__21794;
chunk__21481_21773 = G__21795;
count__21482_21774 = G__21796;
i__21483_21775 = G__21797;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__21497 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21497,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21497,(1),null);
var seq__21500_21798 = cljs.core.seq(node_children);
var chunk__21502_21799 = null;
var count__21503_21800 = (0);
var i__21504_21801 = (0);
while(true){
if((i__21504_21801 < count__21503_21800)){
var child_struct_21803 = chunk__21502_21799.cljs$core$IIndexed$_nth$arity$2(null,i__21504_21801);
if((!((child_struct_21803 == null)))){
if(typeof child_struct_21803 === 'string'){
var text_21804 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21804),child_struct_21803].join(''));
} else {
var children_21805 = shadow.dom.svg_node(child_struct_21803);
if(cljs.core.seq_QMARK_(children_21805)){
var seq__21518_21806 = cljs.core.seq(children_21805);
var chunk__21520_21807 = null;
var count__21521_21808 = (0);
var i__21522_21809 = (0);
while(true){
if((i__21522_21809 < count__21521_21808)){
var child_21810 = chunk__21520_21807.cljs$core$IIndexed$_nth$arity$2(null,i__21522_21809);
if(cljs.core.truth_(child_21810)){
node.appendChild(child_21810);


var G__21811 = seq__21518_21806;
var G__21812 = chunk__21520_21807;
var G__21813 = count__21521_21808;
var G__21814 = (i__21522_21809 + (1));
seq__21518_21806 = G__21811;
chunk__21520_21807 = G__21812;
count__21521_21808 = G__21813;
i__21522_21809 = G__21814;
continue;
} else {
var G__21815 = seq__21518_21806;
var G__21816 = chunk__21520_21807;
var G__21817 = count__21521_21808;
var G__21818 = (i__21522_21809 + (1));
seq__21518_21806 = G__21815;
chunk__21520_21807 = G__21816;
count__21521_21808 = G__21817;
i__21522_21809 = G__21818;
continue;
}
} else {
var temp__5804__auto___21819 = cljs.core.seq(seq__21518_21806);
if(temp__5804__auto___21819){
var seq__21518_21820__$1 = temp__5804__auto___21819;
if(cljs.core.chunked_seq_QMARK_(seq__21518_21820__$1)){
var c__5568__auto___21821 = cljs.core.chunk_first(seq__21518_21820__$1);
var G__21822 = cljs.core.chunk_rest(seq__21518_21820__$1);
var G__21823 = c__5568__auto___21821;
var G__21824 = cljs.core.count(c__5568__auto___21821);
var G__21825 = (0);
seq__21518_21806 = G__21822;
chunk__21520_21807 = G__21823;
count__21521_21808 = G__21824;
i__21522_21809 = G__21825;
continue;
} else {
var child_21826 = cljs.core.first(seq__21518_21820__$1);
if(cljs.core.truth_(child_21826)){
node.appendChild(child_21826);


var G__21827 = cljs.core.next(seq__21518_21820__$1);
var G__21828 = null;
var G__21829 = (0);
var G__21830 = (0);
seq__21518_21806 = G__21827;
chunk__21520_21807 = G__21828;
count__21521_21808 = G__21829;
i__21522_21809 = G__21830;
continue;
} else {
var G__21831 = cljs.core.next(seq__21518_21820__$1);
var G__21832 = null;
var G__21833 = (0);
var G__21834 = (0);
seq__21518_21806 = G__21831;
chunk__21520_21807 = G__21832;
count__21521_21808 = G__21833;
i__21522_21809 = G__21834;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21805);
}
}


var G__21835 = seq__21500_21798;
var G__21836 = chunk__21502_21799;
var G__21837 = count__21503_21800;
var G__21838 = (i__21504_21801 + (1));
seq__21500_21798 = G__21835;
chunk__21502_21799 = G__21836;
count__21503_21800 = G__21837;
i__21504_21801 = G__21838;
continue;
} else {
var G__21839 = seq__21500_21798;
var G__21840 = chunk__21502_21799;
var G__21841 = count__21503_21800;
var G__21842 = (i__21504_21801 + (1));
seq__21500_21798 = G__21839;
chunk__21502_21799 = G__21840;
count__21503_21800 = G__21841;
i__21504_21801 = G__21842;
continue;
}
} else {
var temp__5804__auto___21843 = cljs.core.seq(seq__21500_21798);
if(temp__5804__auto___21843){
var seq__21500_21844__$1 = temp__5804__auto___21843;
if(cljs.core.chunked_seq_QMARK_(seq__21500_21844__$1)){
var c__5568__auto___21845 = cljs.core.chunk_first(seq__21500_21844__$1);
var G__21846 = cljs.core.chunk_rest(seq__21500_21844__$1);
var G__21847 = c__5568__auto___21845;
var G__21848 = cljs.core.count(c__5568__auto___21845);
var G__21849 = (0);
seq__21500_21798 = G__21846;
chunk__21502_21799 = G__21847;
count__21503_21800 = G__21848;
i__21504_21801 = G__21849;
continue;
} else {
var child_struct_21850 = cljs.core.first(seq__21500_21844__$1);
if((!((child_struct_21850 == null)))){
if(typeof child_struct_21850 === 'string'){
var text_21851 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21851),child_struct_21850].join(''));
} else {
var children_21852 = shadow.dom.svg_node(child_struct_21850);
if(cljs.core.seq_QMARK_(children_21852)){
var seq__21524_21853 = cljs.core.seq(children_21852);
var chunk__21526_21854 = null;
var count__21527_21855 = (0);
var i__21528_21856 = (0);
while(true){
if((i__21528_21856 < count__21527_21855)){
var child_21857 = chunk__21526_21854.cljs$core$IIndexed$_nth$arity$2(null,i__21528_21856);
if(cljs.core.truth_(child_21857)){
node.appendChild(child_21857);


var G__21858 = seq__21524_21853;
var G__21859 = chunk__21526_21854;
var G__21860 = count__21527_21855;
var G__21861 = (i__21528_21856 + (1));
seq__21524_21853 = G__21858;
chunk__21526_21854 = G__21859;
count__21527_21855 = G__21860;
i__21528_21856 = G__21861;
continue;
} else {
var G__21862 = seq__21524_21853;
var G__21863 = chunk__21526_21854;
var G__21864 = count__21527_21855;
var G__21865 = (i__21528_21856 + (1));
seq__21524_21853 = G__21862;
chunk__21526_21854 = G__21863;
count__21527_21855 = G__21864;
i__21528_21856 = G__21865;
continue;
}
} else {
var temp__5804__auto___21866__$1 = cljs.core.seq(seq__21524_21853);
if(temp__5804__auto___21866__$1){
var seq__21524_21867__$1 = temp__5804__auto___21866__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21524_21867__$1)){
var c__5568__auto___21868 = cljs.core.chunk_first(seq__21524_21867__$1);
var G__21869 = cljs.core.chunk_rest(seq__21524_21867__$1);
var G__21870 = c__5568__auto___21868;
var G__21871 = cljs.core.count(c__5568__auto___21868);
var G__21872 = (0);
seq__21524_21853 = G__21869;
chunk__21526_21854 = G__21870;
count__21527_21855 = G__21871;
i__21528_21856 = G__21872;
continue;
} else {
var child_21873 = cljs.core.first(seq__21524_21867__$1);
if(cljs.core.truth_(child_21873)){
node.appendChild(child_21873);


var G__21874 = cljs.core.next(seq__21524_21867__$1);
var G__21875 = null;
var G__21876 = (0);
var G__21877 = (0);
seq__21524_21853 = G__21874;
chunk__21526_21854 = G__21875;
count__21527_21855 = G__21876;
i__21528_21856 = G__21877;
continue;
} else {
var G__21878 = cljs.core.next(seq__21524_21867__$1);
var G__21879 = null;
var G__21880 = (0);
var G__21881 = (0);
seq__21524_21853 = G__21878;
chunk__21526_21854 = G__21879;
count__21527_21855 = G__21880;
i__21528_21856 = G__21881;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21852);
}
}


var G__21882 = cljs.core.next(seq__21500_21844__$1);
var G__21883 = null;
var G__21884 = (0);
var G__21885 = (0);
seq__21500_21798 = G__21882;
chunk__21502_21799 = G__21883;
count__21503_21800 = G__21884;
i__21504_21801 = G__21885;
continue;
} else {
var G__21886 = cljs.core.next(seq__21500_21844__$1);
var G__21887 = null;
var G__21888 = (0);
var G__21889 = (0);
seq__21500_21798 = G__21886;
chunk__21502_21799 = G__21887;
count__21503_21800 = G__21888;
i__21504_21801 = G__21889;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21890 = arguments.length;
var i__5770__auto___21891 = (0);
while(true){
if((i__5770__auto___21891 < len__5769__auto___21890)){
args__5775__auto__.push((arguments[i__5770__auto___21891]));

var G__21892 = (i__5770__auto___21891 + (1));
i__5770__auto___21891 = G__21892;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21530){
var G__21531 = cljs.core.first(seq21530);
var seq21530__$1 = cljs.core.next(seq21530);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21531,seq21530__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__21533 = arguments.length;
switch (G__21533) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__18698__auto___21894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_21538){
var state_val_21539 = (state_21538[(1)]);
if((state_val_21539 === (1))){
var state_21538__$1 = state_21538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21538__$1,(2),once_or_cleanup);
} else {
if((state_val_21539 === (2))){
var inst_21535 = (state_21538[(2)]);
var inst_21536 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21538__$1 = (function (){var statearr_21540 = state_21538;
(statearr_21540[(7)] = inst_21535);

return statearr_21540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21538__$1,inst_21536);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__18619__auto__ = null;
var shadow$dom$state_machine__18619__auto____0 = (function (){
var statearr_21541 = [null,null,null,null,null,null,null,null];
(statearr_21541[(0)] = shadow$dom$state_machine__18619__auto__);

(statearr_21541[(1)] = (1));

return statearr_21541;
});
var shadow$dom$state_machine__18619__auto____1 = (function (state_21538){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_21538);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e21542){var ex__18622__auto__ = e21542;
var statearr_21543_21895 = state_21538;
(statearr_21543_21895[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_21538[(4)]))){
var statearr_21544_21896 = state_21538;
(statearr_21544_21896[(1)] = cljs.core.first((state_21538[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21897 = state_21538;
state_21538 = G__21897;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
shadow$dom$state_machine__18619__auto__ = function(state_21538){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__18619__auto____0.call(this);
case 1:
return shadow$dom$state_machine__18619__auto____1.call(this,state_21538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__18619__auto____0;
shadow$dom$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__18619__auto____1;
return shadow$dom$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_21545 = f__18699__auto__();
(statearr_21545[(6)] = c__18698__auto___21894);

return statearr_21545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
