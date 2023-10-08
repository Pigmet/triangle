goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18803 = (function (f,blockable,meta18804){
this.f = f;
this.blockable = blockable;
this.meta18804 = meta18804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18805,meta18804__$1){
var self__ = this;
var _18805__$1 = this;
return (new cljs.core.async.t_cljs$core$async18803(self__.f,self__.blockable,meta18804__$1));
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18805){
var self__ = this;
var _18805__$1 = this;
return self__.meta18804;
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18804","meta18804",1887067215,null)], null);
}));

(cljs.core.async.t_cljs$core$async18803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18803");

(cljs.core.async.t_cljs$core$async18803.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18803.
 */
cljs.core.async.__GT_t_cljs$core$async18803 = (function cljs$core$async$__GT_t_cljs$core$async18803(f,blockable,meta18804){
return (new cljs.core.async.t_cljs$core$async18803(f,blockable,meta18804));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18800 = arguments.length;
switch (G__18800) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18803(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18827 = arguments.length;
switch (G__18827) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18846 = arguments.length;
switch (G__18846) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18852 = arguments.length;
switch (G__18852) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20840 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20840) : fn1.call(null,val_20840));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20840) : fn1.call(null,val_20840));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18860 = arguments.length;
switch (G__18860) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___20846 = n;
var x_20847 = (0);
while(true){
if((x_20847 < n__5636__auto___20846)){
(a[x_20847] = x_20847);

var G__20848 = (x_20847 + (1));
x_20847 = G__20848;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18869 = (function (flag,meta18870){
this.flag = flag;
this.meta18870 = meta18870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18871,meta18870__$1){
var self__ = this;
var _18871__$1 = this;
return (new cljs.core.async.t_cljs$core$async18869(self__.flag,meta18870__$1));
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18871){
var self__ = this;
var _18871__$1 = this;
return self__.meta18870;
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18870","meta18870",-1882133341,null)], null);
}));

(cljs.core.async.t_cljs$core$async18869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18869");

(cljs.core.async.t_cljs$core$async18869.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18869.
 */
cljs.core.async.__GT_t_cljs$core$async18869 = (function cljs$core$async$__GT_t_cljs$core$async18869(flag,meta18870){
return (new cljs.core.async.t_cljs$core$async18869(flag,meta18870));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18869(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18885 = (function (flag,cb,meta18886){
this.flag = flag;
this.cb = cb;
this.meta18886 = meta18886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18887,meta18886__$1){
var self__ = this;
var _18887__$1 = this;
return (new cljs.core.async.t_cljs$core$async18885(self__.flag,self__.cb,meta18886__$1));
}));

(cljs.core.async.t_cljs$core$async18885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18887){
var self__ = this;
var _18887__$1 = this;
return self__.meta18886;
}));

(cljs.core.async.t_cljs$core$async18885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18886","meta18886",1619022610,null)], null);
}));

(cljs.core.async.t_cljs$core$async18885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18885");

(cljs.core.async.t_cljs$core$async18885.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18885.
 */
cljs.core.async.__GT_t_cljs$core$async18885 = (function cljs$core$async$__GT_t_cljs$core$async18885(flag,cb,meta18886){
return (new cljs.core.async.t_cljs$core$async18885(flag,cb,meta18886));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18885(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18894_SHARP_){
var G__18896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18894_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18896) : fret.call(null,G__18896));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18895_SHARP_){
var G__18897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18895_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18897) : fret.call(null,G__18897));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20849 = (i + (1));
i = G__20849;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20850 = arguments.length;
var i__5770__auto___20851 = (0);
while(true){
if((i__5770__auto___20851 < len__5769__auto___20850)){
args__5775__auto__.push((arguments[i__5770__auto___20851]));

var G__20852 = (i__5770__auto___20851 + (1));
i__5770__auto___20851 = G__20852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18905){
var map__18907 = p__18905;
var map__18907__$1 = cljs.core.__destructure_map(map__18907);
var opts = map__18907__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18902){
var G__18903 = cljs.core.first(seq18902);
var seq18902__$1 = cljs.core.next(seq18902);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18903,seq18902__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18912 = arguments.length;
switch (G__18912) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18698__auto___20854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_18952){
var state_val_18953 = (state_18952[(1)]);
if((state_val_18953 === (7))){
var inst_18944 = (state_18952[(2)]);
var state_18952__$1 = state_18952;
var statearr_18966_20855 = state_18952__$1;
(statearr_18966_20855[(2)] = inst_18944);

(statearr_18966_20855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (1))){
var state_18952__$1 = state_18952;
var statearr_18967_20856 = state_18952__$1;
(statearr_18967_20856[(2)] = null);

(statearr_18967_20856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (4))){
var inst_18919 = (state_18952[(7)]);
var inst_18919__$1 = (state_18952[(2)]);
var inst_18928 = (inst_18919__$1 == null);
var state_18952__$1 = (function (){var statearr_18968 = state_18952;
(statearr_18968[(7)] = inst_18919__$1);

return statearr_18968;
})();
if(cljs.core.truth_(inst_18928)){
var statearr_18969_20857 = state_18952__$1;
(statearr_18969_20857[(1)] = (5));

} else {
var statearr_18970_20858 = state_18952__$1;
(statearr_18970_20858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (13))){
var state_18952__$1 = state_18952;
var statearr_18971_20859 = state_18952__$1;
(statearr_18971_20859[(2)] = null);

(statearr_18971_20859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (6))){
var inst_18919 = (state_18952[(7)]);
var state_18952__$1 = state_18952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18952__$1,(11),to,inst_18919);
} else {
if((state_val_18953 === (3))){
var inst_18946 = (state_18952[(2)]);
var state_18952__$1 = state_18952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18952__$1,inst_18946);
} else {
if((state_val_18953 === (12))){
var state_18952__$1 = state_18952;
var statearr_18972_20860 = state_18952__$1;
(statearr_18972_20860[(2)] = null);

(statearr_18972_20860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (2))){
var state_18952__$1 = state_18952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18952__$1,(4),from);
} else {
if((state_val_18953 === (11))){
var inst_18937 = (state_18952[(2)]);
var state_18952__$1 = state_18952;
if(cljs.core.truth_(inst_18937)){
var statearr_18973_20861 = state_18952__$1;
(statearr_18973_20861[(1)] = (12));

} else {
var statearr_18974_20862 = state_18952__$1;
(statearr_18974_20862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (9))){
var state_18952__$1 = state_18952;
var statearr_18977_20863 = state_18952__$1;
(statearr_18977_20863[(2)] = null);

(statearr_18977_20863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (5))){
var state_18952__$1 = state_18952;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18979_20864 = state_18952__$1;
(statearr_18979_20864[(1)] = (8));

} else {
var statearr_18980_20865 = state_18952__$1;
(statearr_18980_20865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (14))){
var inst_18942 = (state_18952[(2)]);
var state_18952__$1 = state_18952;
var statearr_18981_20866 = state_18952__$1;
(statearr_18981_20866[(2)] = inst_18942);

(statearr_18981_20866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (10))){
var inst_18934 = (state_18952[(2)]);
var state_18952__$1 = state_18952;
var statearr_18982_20867 = state_18952__$1;
(statearr_18982_20867[(2)] = inst_18934);

(statearr_18982_20867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18953 === (8))){
var inst_18931 = cljs.core.async.close_BANG_(to);
var state_18952__$1 = state_18952;
var statearr_18983_20868 = state_18952__$1;
(statearr_18983_20868[(2)] = inst_18931);

(statearr_18983_20868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_18986 = [null,null,null,null,null,null,null,null];
(statearr_18986[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_18986[(1)] = (1));

return statearr_18986;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_18952){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_18952);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e18989){var ex__18622__auto__ = e18989;
var statearr_18991_20869 = state_18952;
(statearr_18991_20869[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_18952[(4)]))){
var statearr_18992_20870 = state_18952;
(statearr_18992_20870[(1)] = cljs.core.first((state_18952[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20871 = state_18952;
state_18952 = G__20871;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_18952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_18952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19002 = f__18699__auto__();
(statearr_19002[(6)] = c__18698__auto___20854);

return statearr_19002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__19003){
var vec__19004 = p__19003;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004,(1),null);
var job = vec__19004;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18698__auto___20872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19014){
var state_val_19015 = (state_19014[(1)]);
if((state_val_19015 === (1))){
var state_19014__$1 = state_19014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19014__$1,(2),res,v);
} else {
if((state_val_19015 === (2))){
var inst_19011 = (state_19014[(2)]);
var inst_19012 = cljs.core.async.close_BANG_(res);
var state_19014__$1 = (function (){var statearr_19016 = state_19014;
(statearr_19016[(7)] = inst_19011);

return statearr_19016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19014__$1,inst_19012);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0 = (function (){
var statearr_19017 = [null,null,null,null,null,null,null,null];
(statearr_19017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__);

(statearr_19017[(1)] = (1));

return statearr_19017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1 = (function (state_19014){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19014);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19018){var ex__18622__auto__ = e19018;
var statearr_19019_20873 = state_19014;
(statearr_19019_20873[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19014[(4)]))){
var statearr_19020_20874 = state_19014;
(statearr_19020_20874[(1)] = cljs.core.first((state_19014[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20875 = state_19014;
state_19014 = G__20875;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = function(state_19014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1.call(this,state_19014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19021 = f__18699__auto__();
(statearr_19021[(6)] = c__18698__auto___20872);

return statearr_19021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__19022){
var vec__19024 = p__19022;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(1),null);
var job = vec__19024;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___20876 = n;
var __20877 = (0);
while(true){
if((__20877 < n__5636__auto___20876)){
var G__19027_20878 = type;
var G__19027_20879__$1 = (((G__19027_20878 instanceof cljs.core.Keyword))?G__19027_20878.fqn:null);
switch (G__19027_20879__$1) {
case "compute":
var c__18698__auto___20881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20877,c__18698__auto___20881,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async){
return (function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = ((function (__20877,c__18698__auto___20881,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async){
return (function (state_19043){
var state_val_19044 = (state_19043[(1)]);
if((state_val_19044 === (1))){
var state_19043__$1 = state_19043;
var statearr_19045_20882 = state_19043__$1;
(statearr_19045_20882[(2)] = null);

(statearr_19045_20882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (2))){
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19043__$1,(4),jobs);
} else {
if((state_val_19044 === (3))){
var inst_19040 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19043__$1,inst_19040);
} else {
if((state_val_19044 === (4))){
var inst_19031 = (state_19043[(2)]);
var inst_19032 = process__$1(inst_19031);
var state_19043__$1 = state_19043;
if(cljs.core.truth_(inst_19032)){
var statearr_19079_20883 = state_19043__$1;
(statearr_19079_20883[(1)] = (5));

} else {
var statearr_19080_20884 = state_19043__$1;
(statearr_19080_20884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (5))){
var state_19043__$1 = state_19043;
var statearr_19081_20885 = state_19043__$1;
(statearr_19081_20885[(2)] = null);

(statearr_19081_20885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (6))){
var state_19043__$1 = state_19043;
var statearr_19082_20886 = state_19043__$1;
(statearr_19082_20886[(2)] = null);

(statearr_19082_20886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19044 === (7))){
var inst_19038 = (state_19043[(2)]);
var state_19043__$1 = state_19043;
var statearr_19083_20887 = state_19043__$1;
(statearr_19083_20887[(2)] = inst_19038);

(statearr_19083_20887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20877,c__18698__auto___20881,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async))
;
return ((function (__20877,switch__18618__auto__,c__18698__auto___20881,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0 = (function (){
var statearr_19084 = [null,null,null,null,null,null,null];
(statearr_19084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__);

(statearr_19084[(1)] = (1));

return statearr_19084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1 = (function (state_19043){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19043);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19085){var ex__18622__auto__ = e19085;
var statearr_19086_20888 = state_19043;
(statearr_19086_20888[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19043[(4)]))){
var statearr_19087_20889 = state_19043;
(statearr_19087_20889[(1)] = cljs.core.first((state_19043[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20890 = state_19043;
state_19043 = G__20890;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = function(state_19043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1.call(this,state_19043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__;
})()
;})(__20877,switch__18618__auto__,c__18698__auto___20881,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async))
})();
var state__18700__auto__ = (function (){var statearr_19103 = f__18699__auto__();
(statearr_19103[(6)] = c__18698__auto___20881);

return statearr_19103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
});})(__20877,c__18698__auto___20881,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async))
);


break;
case "async":
var c__18698__auto___20891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20877,c__18698__auto___20891,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async){
return (function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = ((function (__20877,c__18698__auto___20891,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async){
return (function (state_19116){
var state_val_19117 = (state_19116[(1)]);
if((state_val_19117 === (1))){
var state_19116__$1 = state_19116;
var statearr_19119_20892 = state_19116__$1;
(statearr_19119_20892[(2)] = null);

(statearr_19119_20892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (2))){
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19116__$1,(4),jobs);
} else {
if((state_val_19117 === (3))){
var inst_19114 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19116__$1,inst_19114);
} else {
if((state_val_19117 === (4))){
var inst_19106 = (state_19116[(2)]);
var inst_19107 = async(inst_19106);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19107)){
var statearr_19120_20893 = state_19116__$1;
(statearr_19120_20893[(1)] = (5));

} else {
var statearr_19121_20894 = state_19116__$1;
(statearr_19121_20894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (5))){
var state_19116__$1 = state_19116;
var statearr_19122_20895 = state_19116__$1;
(statearr_19122_20895[(2)] = null);

(statearr_19122_20895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (6))){
var state_19116__$1 = state_19116;
var statearr_19123_20896 = state_19116__$1;
(statearr_19123_20896[(2)] = null);

(statearr_19123_20896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (7))){
var inst_19112 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19124_20897 = state_19116__$1;
(statearr_19124_20897[(2)] = inst_19112);

(statearr_19124_20897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20877,c__18698__auto___20891,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async))
;
return ((function (__20877,switch__18618__auto__,c__18698__auto___20891,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0 = (function (){
var statearr_19125 = [null,null,null,null,null,null,null];
(statearr_19125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__);

(statearr_19125[(1)] = (1));

return statearr_19125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1 = (function (state_19116){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19116);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19126){var ex__18622__auto__ = e19126;
var statearr_19127_20898 = state_19116;
(statearr_19127_20898[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19116[(4)]))){
var statearr_19128_20899 = state_19116;
(statearr_19128_20899[(1)] = cljs.core.first((state_19116[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20900 = state_19116;
state_19116 = G__20900;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = function(state_19116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1.call(this,state_19116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__;
})()
;})(__20877,switch__18618__auto__,c__18698__auto___20891,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async))
})();
var state__18700__auto__ = (function (){var statearr_19129 = f__18699__auto__();
(statearr_19129[(6)] = c__18698__auto___20891);

return statearr_19129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
});})(__20877,c__18698__auto___20891,G__19027_20878,G__19027_20879__$1,n__5636__auto___20876,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19027_20879__$1)].join('')));

}

var G__20901 = (__20877 + (1));
__20877 = G__20901;
continue;
} else {
}
break;
}

var c__18698__auto___20902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19151){
var state_val_19152 = (state_19151[(1)]);
if((state_val_19152 === (7))){
var inst_19147 = (state_19151[(2)]);
var state_19151__$1 = state_19151;
var statearr_19153_20903 = state_19151__$1;
(statearr_19153_20903[(2)] = inst_19147);

(statearr_19153_20903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19152 === (1))){
var state_19151__$1 = state_19151;
var statearr_19154_20904 = state_19151__$1;
(statearr_19154_20904[(2)] = null);

(statearr_19154_20904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19152 === (4))){
var inst_19132 = (state_19151[(7)]);
var inst_19132__$1 = (state_19151[(2)]);
var inst_19133 = (inst_19132__$1 == null);
var state_19151__$1 = (function (){var statearr_19155 = state_19151;
(statearr_19155[(7)] = inst_19132__$1);

return statearr_19155;
})();
if(cljs.core.truth_(inst_19133)){
var statearr_19156_20905 = state_19151__$1;
(statearr_19156_20905[(1)] = (5));

} else {
var statearr_19157_20906 = state_19151__$1;
(statearr_19157_20906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19152 === (6))){
var inst_19137 = (state_19151[(8)]);
var inst_19132 = (state_19151[(7)]);
var inst_19137__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_19138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19139 = [inst_19132,inst_19137__$1];
var inst_19140 = (new cljs.core.PersistentVector(null,2,(5),inst_19138,inst_19139,null));
var state_19151__$1 = (function (){var statearr_19166 = state_19151;
(statearr_19166[(8)] = inst_19137__$1);

return statearr_19166;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19151__$1,(8),jobs,inst_19140);
} else {
if((state_val_19152 === (3))){
var inst_19149 = (state_19151[(2)]);
var state_19151__$1 = state_19151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19151__$1,inst_19149);
} else {
if((state_val_19152 === (2))){
var state_19151__$1 = state_19151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19151__$1,(4),from);
} else {
if((state_val_19152 === (9))){
var inst_19144 = (state_19151[(2)]);
var state_19151__$1 = (function (){var statearr_19171 = state_19151;
(statearr_19171[(9)] = inst_19144);

return statearr_19171;
})();
var statearr_19172_20907 = state_19151__$1;
(statearr_19172_20907[(2)] = null);

(statearr_19172_20907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19152 === (5))){
var inst_19135 = cljs.core.async.close_BANG_(jobs);
var state_19151__$1 = state_19151;
var statearr_19173_20908 = state_19151__$1;
(statearr_19173_20908[(2)] = inst_19135);

(statearr_19173_20908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19152 === (8))){
var inst_19137 = (state_19151[(8)]);
var inst_19142 = (state_19151[(2)]);
var state_19151__$1 = (function (){var statearr_19174 = state_19151;
(statearr_19174[(10)] = inst_19142);

return statearr_19174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19151__$1,(9),results,inst_19137);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0 = (function (){
var statearr_19177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__);

(statearr_19177[(1)] = (1));

return statearr_19177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1 = (function (state_19151){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19151);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19178){var ex__18622__auto__ = e19178;
var statearr_19179_20909 = state_19151;
(statearr_19179_20909[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19151[(4)]))){
var statearr_19180_20910 = state_19151;
(statearr_19180_20910[(1)] = cljs.core.first((state_19151[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20911 = state_19151;
state_19151 = G__20911;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = function(state_19151){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1.call(this,state_19151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19181 = f__18699__auto__();
(statearr_19181[(6)] = c__18698__auto___20902);

return statearr_19181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


var c__18698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19271){
var state_val_19272 = (state_19271[(1)]);
if((state_val_19272 === (7))){
var inst_19267 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19273_20912 = state_19271__$1;
(statearr_19273_20912[(2)] = inst_19267);

(statearr_19273_20912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (20))){
var state_19271__$1 = state_19271;
var statearr_19274_20913 = state_19271__$1;
(statearr_19274_20913[(2)] = null);

(statearr_19274_20913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (1))){
var state_19271__$1 = state_19271;
var statearr_19278_20914 = state_19271__$1;
(statearr_19278_20914[(2)] = null);

(statearr_19278_20914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (4))){
var inst_19236 = (state_19271[(7)]);
var inst_19236__$1 = (state_19271[(2)]);
var inst_19237 = (inst_19236__$1 == null);
var state_19271__$1 = (function (){var statearr_19282 = state_19271;
(statearr_19282[(7)] = inst_19236__$1);

return statearr_19282;
})();
if(cljs.core.truth_(inst_19237)){
var statearr_19283_20915 = state_19271__$1;
(statearr_19283_20915[(1)] = (5));

} else {
var statearr_19284_20916 = state_19271__$1;
(statearr_19284_20916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (15))){
var inst_19249 = (state_19271[(8)]);
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19271__$1,(18),to,inst_19249);
} else {
if((state_val_19272 === (21))){
var inst_19262 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19285_20917 = state_19271__$1;
(statearr_19285_20917[(2)] = inst_19262);

(statearr_19285_20917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (13))){
var inst_19264 = (state_19271[(2)]);
var state_19271__$1 = (function (){var statearr_19288 = state_19271;
(statearr_19288[(9)] = inst_19264);

return statearr_19288;
})();
var statearr_19289_20918 = state_19271__$1;
(statearr_19289_20918[(2)] = null);

(statearr_19289_20918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (6))){
var inst_19236 = (state_19271[(7)]);
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19271__$1,(11),inst_19236);
} else {
if((state_val_19272 === (17))){
var inst_19257 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
if(cljs.core.truth_(inst_19257)){
var statearr_19290_20919 = state_19271__$1;
(statearr_19290_20919[(1)] = (19));

} else {
var statearr_19291_20920 = state_19271__$1;
(statearr_19291_20920[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (3))){
var inst_19269 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19271__$1,inst_19269);
} else {
if((state_val_19272 === (12))){
var inst_19246 = (state_19271[(10)]);
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19271__$1,(14),inst_19246);
} else {
if((state_val_19272 === (2))){
var state_19271__$1 = state_19271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19271__$1,(4),results);
} else {
if((state_val_19272 === (19))){
var state_19271__$1 = state_19271;
var statearr_19296_20921 = state_19271__$1;
(statearr_19296_20921[(2)] = null);

(statearr_19296_20921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (11))){
var inst_19246 = (state_19271[(2)]);
var state_19271__$1 = (function (){var statearr_19297 = state_19271;
(statearr_19297[(10)] = inst_19246);

return statearr_19297;
})();
var statearr_19302_20922 = state_19271__$1;
(statearr_19302_20922[(2)] = null);

(statearr_19302_20922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (9))){
var state_19271__$1 = state_19271;
var statearr_19307_20923 = state_19271__$1;
(statearr_19307_20923[(2)] = null);

(statearr_19307_20923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (5))){
var state_19271__$1 = state_19271;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19308_20924 = state_19271__$1;
(statearr_19308_20924[(1)] = (8));

} else {
var statearr_19309_20925 = state_19271__$1;
(statearr_19309_20925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (14))){
var inst_19249 = (state_19271[(8)]);
var inst_19251 = (state_19271[(11)]);
var inst_19249__$1 = (state_19271[(2)]);
var inst_19250 = (inst_19249__$1 == null);
var inst_19251__$1 = cljs.core.not(inst_19250);
var state_19271__$1 = (function (){var statearr_19310 = state_19271;
(statearr_19310[(8)] = inst_19249__$1);

(statearr_19310[(11)] = inst_19251__$1);

return statearr_19310;
})();
if(inst_19251__$1){
var statearr_19311_20926 = state_19271__$1;
(statearr_19311_20926[(1)] = (15));

} else {
var statearr_19312_20927 = state_19271__$1;
(statearr_19312_20927[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (16))){
var inst_19251 = (state_19271[(11)]);
var state_19271__$1 = state_19271;
var statearr_19313_20928 = state_19271__$1;
(statearr_19313_20928[(2)] = inst_19251);

(statearr_19313_20928[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (10))){
var inst_19243 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19314_20929 = state_19271__$1;
(statearr_19314_20929[(2)] = inst_19243);

(statearr_19314_20929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (18))){
var inst_19254 = (state_19271[(2)]);
var state_19271__$1 = state_19271;
var statearr_19315_20930 = state_19271__$1;
(statearr_19315_20930[(2)] = inst_19254);

(statearr_19315_20930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19272 === (8))){
var inst_19240 = cljs.core.async.close_BANG_(to);
var state_19271__$1 = state_19271;
var statearr_19317_20931 = state_19271__$1;
(statearr_19317_20931[(2)] = inst_19240);

(statearr_19317_20931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0 = (function (){
var statearr_19318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__);

(statearr_19318[(1)] = (1));

return statearr_19318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1 = (function (state_19271){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19271);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19319){var ex__18622__auto__ = e19319;
var statearr_19320_20932 = state_19271;
(statearr_19320_20932[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19271[(4)]))){
var statearr_19321_20933 = state_19271;
(statearr_19321_20933[(1)] = cljs.core.first((state_19271[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20934 = state_19271;
state_19271 = G__20934;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__ = function(state_19271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1.call(this,state_19271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18619__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19328 = f__18699__auto__();
(statearr_19328[(6)] = c__18698__auto__);

return statearr_19328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));

return c__18698__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__19334 = arguments.length;
switch (G__19334) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__19372 = arguments.length;
switch (G__19372) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__19385 = arguments.length;
switch (G__19385) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18698__auto___20938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19415){
var state_val_19416 = (state_19415[(1)]);
if((state_val_19416 === (7))){
var inst_19411 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19417_20939 = state_19415__$1;
(statearr_19417_20939[(2)] = inst_19411);

(statearr_19417_20939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (1))){
var state_19415__$1 = state_19415;
var statearr_19418_20940 = state_19415__$1;
(statearr_19418_20940[(2)] = null);

(statearr_19418_20940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (4))){
var inst_19392 = (state_19415[(7)]);
var inst_19392__$1 = (state_19415[(2)]);
var inst_19393 = (inst_19392__$1 == null);
var state_19415__$1 = (function (){var statearr_19419 = state_19415;
(statearr_19419[(7)] = inst_19392__$1);

return statearr_19419;
})();
if(cljs.core.truth_(inst_19393)){
var statearr_19420_20941 = state_19415__$1;
(statearr_19420_20941[(1)] = (5));

} else {
var statearr_19421_20942 = state_19415__$1;
(statearr_19421_20942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (13))){
var state_19415__$1 = state_19415;
var statearr_19422_20943 = state_19415__$1;
(statearr_19422_20943[(2)] = null);

(statearr_19422_20943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (6))){
var inst_19392 = (state_19415[(7)]);
var inst_19398 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19392) : p.call(null,inst_19392));
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19398)){
var statearr_19424_20944 = state_19415__$1;
(statearr_19424_20944[(1)] = (9));

} else {
var statearr_19426_20945 = state_19415__$1;
(statearr_19426_20945[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (3))){
var inst_19413 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19415__$1,inst_19413);
} else {
if((state_val_19416 === (12))){
var state_19415__$1 = state_19415;
var statearr_19427_20946 = state_19415__$1;
(statearr_19427_20946[(2)] = null);

(statearr_19427_20946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (2))){
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19415__$1,(4),ch);
} else {
if((state_val_19416 === (11))){
var inst_19392 = (state_19415[(7)]);
var inst_19402 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19415__$1,(8),inst_19402,inst_19392);
} else {
if((state_val_19416 === (9))){
var state_19415__$1 = state_19415;
var statearr_19429_20947 = state_19415__$1;
(statearr_19429_20947[(2)] = tc);

(statearr_19429_20947[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (5))){
var inst_19395 = cljs.core.async.close_BANG_(tc);
var inst_19396 = cljs.core.async.close_BANG_(fc);
var state_19415__$1 = (function (){var statearr_19431 = state_19415;
(statearr_19431[(8)] = inst_19395);

return statearr_19431;
})();
var statearr_19432_20948 = state_19415__$1;
(statearr_19432_20948[(2)] = inst_19396);

(statearr_19432_20948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (14))){
var inst_19409 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
var statearr_19439_20949 = state_19415__$1;
(statearr_19439_20949[(2)] = inst_19409);

(statearr_19439_20949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (10))){
var state_19415__$1 = state_19415;
var statearr_19440_20950 = state_19415__$1;
(statearr_19440_20950[(2)] = fc);

(statearr_19440_20950[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19416 === (8))){
var inst_19404 = (state_19415[(2)]);
var state_19415__$1 = state_19415;
if(cljs.core.truth_(inst_19404)){
var statearr_19441_20951 = state_19415__$1;
(statearr_19441_20951[(1)] = (12));

} else {
var statearr_19442_20952 = state_19415__$1;
(statearr_19442_20952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_19443 = [null,null,null,null,null,null,null,null,null];
(statearr_19443[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_19443[(1)] = (1));

return statearr_19443;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_19415){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19415);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19444){var ex__18622__auto__ = e19444;
var statearr_19445_20953 = state_19415;
(statearr_19445_20953[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19415[(4)]))){
var statearr_19446_20954 = state_19415;
(statearr_19446_20954[(1)] = cljs.core.first((state_19415[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20955 = state_19415;
state_19415 = G__20955;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_19415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_19415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19449 = f__18699__auto__();
(statearr_19449[(6)] = c__18698__auto___20938);

return statearr_19449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19473){
var state_val_19474 = (state_19473[(1)]);
if((state_val_19474 === (7))){
var inst_19469 = (state_19473[(2)]);
var state_19473__$1 = state_19473;
var statearr_19477_20956 = state_19473__$1;
(statearr_19477_20956[(2)] = inst_19469);

(statearr_19477_20956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19474 === (1))){
var inst_19452 = init;
var inst_19453 = inst_19452;
var state_19473__$1 = (function (){var statearr_19478 = state_19473;
(statearr_19478[(7)] = inst_19453);

return statearr_19478;
})();
var statearr_19479_20957 = state_19473__$1;
(statearr_19479_20957[(2)] = null);

(statearr_19479_20957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19474 === (4))){
var inst_19456 = (state_19473[(8)]);
var inst_19456__$1 = (state_19473[(2)]);
var inst_19457 = (inst_19456__$1 == null);
var state_19473__$1 = (function (){var statearr_19481 = state_19473;
(statearr_19481[(8)] = inst_19456__$1);

return statearr_19481;
})();
if(cljs.core.truth_(inst_19457)){
var statearr_19482_20960 = state_19473__$1;
(statearr_19482_20960[(1)] = (5));

} else {
var statearr_19483_20961 = state_19473__$1;
(statearr_19483_20961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19474 === (6))){
var inst_19453 = (state_19473[(7)]);
var inst_19456 = (state_19473[(8)]);
var inst_19460 = (state_19473[(9)]);
var inst_19460__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19453,inst_19456) : f.call(null,inst_19453,inst_19456));
var inst_19461 = cljs.core.reduced_QMARK_(inst_19460__$1);
var state_19473__$1 = (function (){var statearr_19484 = state_19473;
(statearr_19484[(9)] = inst_19460__$1);

return statearr_19484;
})();
if(inst_19461){
var statearr_19485_20962 = state_19473__$1;
(statearr_19485_20962[(1)] = (8));

} else {
var statearr_19486_20963 = state_19473__$1;
(statearr_19486_20963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19474 === (3))){
var inst_19471 = (state_19473[(2)]);
var state_19473__$1 = state_19473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19473__$1,inst_19471);
} else {
if((state_val_19474 === (2))){
var state_19473__$1 = state_19473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19473__$1,(4),ch);
} else {
if((state_val_19474 === (9))){
var inst_19460 = (state_19473[(9)]);
var inst_19453 = inst_19460;
var state_19473__$1 = (function (){var statearr_19489 = state_19473;
(statearr_19489[(7)] = inst_19453);

return statearr_19489;
})();
var statearr_19490_20964 = state_19473__$1;
(statearr_19490_20964[(2)] = null);

(statearr_19490_20964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19474 === (5))){
var inst_19453 = (state_19473[(7)]);
var state_19473__$1 = state_19473;
var statearr_19491_20965 = state_19473__$1;
(statearr_19491_20965[(2)] = inst_19453);

(statearr_19491_20965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19474 === (10))){
var inst_19467 = (state_19473[(2)]);
var state_19473__$1 = state_19473;
var statearr_19493_20966 = state_19473__$1;
(statearr_19493_20966[(2)] = inst_19467);

(statearr_19493_20966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19474 === (8))){
var inst_19460 = (state_19473[(9)]);
var inst_19463 = cljs.core.deref(inst_19460);
var state_19473__$1 = state_19473;
var statearr_19495_20967 = state_19473__$1;
(statearr_19495_20967[(2)] = inst_19463);

(statearr_19495_20967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__18619__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18619__auto____0 = (function (){
var statearr_19496 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19496[(0)] = cljs$core$async$reduce_$_state_machine__18619__auto__);

(statearr_19496[(1)] = (1));

return statearr_19496;
});
var cljs$core$async$reduce_$_state_machine__18619__auto____1 = (function (state_19473){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19473);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19497){var ex__18622__auto__ = e19497;
var statearr_19498_20968 = state_19473;
(statearr_19498_20968[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19473[(4)]))){
var statearr_19499_20969 = state_19473;
(statearr_19499_20969[(1)] = cljs.core.first((state_19473[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20970 = state_19473;
state_19473 = G__20970;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18619__auto__ = function(state_19473){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18619__auto____1.call(this,state_19473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18619__auto____0;
cljs$core$async$reduce_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18619__auto____1;
return cljs$core$async$reduce_$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19501 = f__18699__auto__();
(statearr_19501[(6)] = c__18698__auto__);

return statearr_19501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));

return c__18698__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19511){
var state_val_19512 = (state_19511[(1)]);
if((state_val_19512 === (1))){
var inst_19505 = cljs.core.async.reduce(f__$1,init,ch);
var state_19511__$1 = state_19511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19511__$1,(2),inst_19505);
} else {
if((state_val_19512 === (2))){
var inst_19507 = (state_19511[(2)]);
var inst_19509 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19507) : f__$1.call(null,inst_19507));
var state_19511__$1 = state_19511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19511__$1,inst_19509);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__18619__auto__ = null;
var cljs$core$async$transduce_$_state_machine__18619__auto____0 = (function (){
var statearr_19520 = [null,null,null,null,null,null,null];
(statearr_19520[(0)] = cljs$core$async$transduce_$_state_machine__18619__auto__);

(statearr_19520[(1)] = (1));

return statearr_19520;
});
var cljs$core$async$transduce_$_state_machine__18619__auto____1 = (function (state_19511){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19511);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19521){var ex__18622__auto__ = e19521;
var statearr_19522_20971 = state_19511;
(statearr_19522_20971[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19511[(4)]))){
var statearr_19523_20972 = state_19511;
(statearr_19523_20972[(1)] = cljs.core.first((state_19511[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20973 = state_19511;
state_19511 = G__20973;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__18619__auto__ = function(state_19511){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__18619__auto____1.call(this,state_19511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__18619__auto____0;
cljs$core$async$transduce_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__18619__auto____1;
return cljs$core$async$transduce_$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19529 = f__18699__auto__();
(statearr_19529[(6)] = c__18698__auto__);

return statearr_19529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));

return c__18698__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__19533 = arguments.length;
switch (G__19533) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19566){
var state_val_19569 = (state_19566[(1)]);
if((state_val_19569 === (7))){
var inst_19547 = (state_19566[(2)]);
var state_19566__$1 = state_19566;
var statearr_19572_20975 = state_19566__$1;
(statearr_19572_20975[(2)] = inst_19547);

(statearr_19572_20975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (1))){
var inst_19539 = cljs.core.seq(coll);
var inst_19540 = inst_19539;
var state_19566__$1 = (function (){var statearr_19576 = state_19566;
(statearr_19576[(7)] = inst_19540);

return statearr_19576;
})();
var statearr_19577_20976 = state_19566__$1;
(statearr_19577_20976[(2)] = null);

(statearr_19577_20976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (4))){
var inst_19540 = (state_19566[(7)]);
var inst_19545 = cljs.core.first(inst_19540);
var state_19566__$1 = state_19566;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19566__$1,(7),ch,inst_19545);
} else {
if((state_val_19569 === (13))){
var inst_19560 = (state_19566[(2)]);
var state_19566__$1 = state_19566;
var statearr_19578_20977 = state_19566__$1;
(statearr_19578_20977[(2)] = inst_19560);

(statearr_19578_20977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (6))){
var inst_19550 = (state_19566[(2)]);
var state_19566__$1 = state_19566;
if(cljs.core.truth_(inst_19550)){
var statearr_19579_20978 = state_19566__$1;
(statearr_19579_20978[(1)] = (8));

} else {
var statearr_19580_20979 = state_19566__$1;
(statearr_19580_20979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (3))){
var inst_19564 = (state_19566[(2)]);
var state_19566__$1 = state_19566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19566__$1,inst_19564);
} else {
if((state_val_19569 === (12))){
var state_19566__$1 = state_19566;
var statearr_19581_20980 = state_19566__$1;
(statearr_19581_20980[(2)] = null);

(statearr_19581_20980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (2))){
var inst_19540 = (state_19566[(7)]);
var state_19566__$1 = state_19566;
if(cljs.core.truth_(inst_19540)){
var statearr_19582_20982 = state_19566__$1;
(statearr_19582_20982[(1)] = (4));

} else {
var statearr_19583_20983 = state_19566__$1;
(statearr_19583_20983[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (11))){
var inst_19557 = cljs.core.async.close_BANG_(ch);
var state_19566__$1 = state_19566;
var statearr_19584_20984 = state_19566__$1;
(statearr_19584_20984[(2)] = inst_19557);

(statearr_19584_20984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (9))){
var state_19566__$1 = state_19566;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19588_20985 = state_19566__$1;
(statearr_19588_20985[(1)] = (11));

} else {
var statearr_19591_20986 = state_19566__$1;
(statearr_19591_20986[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (5))){
var inst_19540 = (state_19566[(7)]);
var state_19566__$1 = state_19566;
var statearr_19597_20987 = state_19566__$1;
(statearr_19597_20987[(2)] = inst_19540);

(statearr_19597_20987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (10))){
var inst_19562 = (state_19566[(2)]);
var state_19566__$1 = state_19566;
var statearr_19598_20988 = state_19566__$1;
(statearr_19598_20988[(2)] = inst_19562);

(statearr_19598_20988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (8))){
var inst_19540 = (state_19566[(7)]);
var inst_19553 = cljs.core.next(inst_19540);
var inst_19540__$1 = inst_19553;
var state_19566__$1 = (function (){var statearr_19602 = state_19566;
(statearr_19602[(7)] = inst_19540__$1);

return statearr_19602;
})();
var statearr_19603_20989 = state_19566__$1;
(statearr_19603_20989[(2)] = null);

(statearr_19603_20989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_19612 = [null,null,null,null,null,null,null,null];
(statearr_19612[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_19612[(1)] = (1));

return statearr_19612;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_19566){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19566);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19617){var ex__18622__auto__ = e19617;
var statearr_19618_20991 = state_19566;
(statearr_19618_20991[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19566[(4)]))){
var statearr_19619_20992 = state_19566;
(statearr_19619_20992[(1)] = cljs.core.first((state_19566[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20994 = state_19566;
state_19566 = G__20994;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_19566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_19566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19620 = f__18699__auto__();
(statearr_19620[(6)] = c__18698__auto__);

return statearr_19620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));

return c__18698__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19625 = arguments.length;
switch (G__19625) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20996 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20996(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20998 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20998(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21000 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_21000(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21001 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_21001(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19672 = (function (ch,cs,meta19673){
this.ch = ch;
this.cs = cs;
this.meta19673 = meta19673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19674,meta19673__$1){
var self__ = this;
var _19674__$1 = this;
return (new cljs.core.async.t_cljs$core$async19672(self__.ch,self__.cs,meta19673__$1));
}));

(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19674){
var self__ = this;
var _19674__$1 = this;
return self__.meta19673;
}));

(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19672.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19673","meta19673",423913881,null)], null);
}));

(cljs.core.async.t_cljs$core$async19672.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19672");

(cljs.core.async.t_cljs$core$async19672.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19672");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19672.
 */
cljs.core.async.__GT_t_cljs$core$async19672 = (function cljs$core$async$__GT_t_cljs$core$async19672(ch,cs,meta19673){
return (new cljs.core.async.t_cljs$core$async19672(ch,cs,meta19673));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async19672(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18698__auto___21004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_19807){
var state_val_19808 = (state_19807[(1)]);
if((state_val_19808 === (7))){
var inst_19803 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19809_21005 = state_19807__$1;
(statearr_19809_21005[(2)] = inst_19803);

(statearr_19809_21005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (20))){
var inst_19708 = (state_19807[(7)]);
var inst_19720 = cljs.core.first(inst_19708);
var inst_19721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19720,(0),null);
var inst_19722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19720,(1),null);
var state_19807__$1 = (function (){var statearr_19810 = state_19807;
(statearr_19810[(8)] = inst_19721);

return statearr_19810;
})();
if(cljs.core.truth_(inst_19722)){
var statearr_19811_21006 = state_19807__$1;
(statearr_19811_21006[(1)] = (22));

} else {
var statearr_19812_21007 = state_19807__$1;
(statearr_19812_21007[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (27))){
var inst_19757 = (state_19807[(9)]);
var inst_19752 = (state_19807[(10)]);
var inst_19750 = (state_19807[(11)]);
var inst_19677 = (state_19807[(12)]);
var inst_19757__$1 = cljs.core._nth(inst_19750,inst_19752);
var inst_19758 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19757__$1,inst_19677,done);
var state_19807__$1 = (function (){var statearr_19813 = state_19807;
(statearr_19813[(9)] = inst_19757__$1);

return statearr_19813;
})();
if(cljs.core.truth_(inst_19758)){
var statearr_19814_21008 = state_19807__$1;
(statearr_19814_21008[(1)] = (30));

} else {
var statearr_19815_21009 = state_19807__$1;
(statearr_19815_21009[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (1))){
var state_19807__$1 = state_19807;
var statearr_19816_21010 = state_19807__$1;
(statearr_19816_21010[(2)] = null);

(statearr_19816_21010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (24))){
var inst_19708 = (state_19807[(7)]);
var inst_19727 = (state_19807[(2)]);
var inst_19728 = cljs.core.next(inst_19708);
var inst_19686 = inst_19728;
var inst_19687 = null;
var inst_19688 = (0);
var inst_19689 = (0);
var state_19807__$1 = (function (){var statearr_19817 = state_19807;
(statearr_19817[(13)] = inst_19727);

(statearr_19817[(14)] = inst_19688);

(statearr_19817[(15)] = inst_19689);

(statearr_19817[(16)] = inst_19686);

(statearr_19817[(17)] = inst_19687);

return statearr_19817;
})();
var statearr_19818_21011 = state_19807__$1;
(statearr_19818_21011[(2)] = null);

(statearr_19818_21011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (39))){
var state_19807__$1 = state_19807;
var statearr_19822_21012 = state_19807__$1;
(statearr_19822_21012[(2)] = null);

(statearr_19822_21012[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (4))){
var inst_19677 = (state_19807[(12)]);
var inst_19677__$1 = (state_19807[(2)]);
var inst_19678 = (inst_19677__$1 == null);
var state_19807__$1 = (function (){var statearr_19823 = state_19807;
(statearr_19823[(12)] = inst_19677__$1);

return statearr_19823;
})();
if(cljs.core.truth_(inst_19678)){
var statearr_19824_21013 = state_19807__$1;
(statearr_19824_21013[(1)] = (5));

} else {
var statearr_19825_21014 = state_19807__$1;
(statearr_19825_21014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (15))){
var inst_19688 = (state_19807[(14)]);
var inst_19689 = (state_19807[(15)]);
var inst_19686 = (state_19807[(16)]);
var inst_19687 = (state_19807[(17)]);
var inst_19704 = (state_19807[(2)]);
var inst_19705 = (inst_19689 + (1));
var tmp19819 = inst_19688;
var tmp19820 = inst_19686;
var tmp19821 = inst_19687;
var inst_19686__$1 = tmp19820;
var inst_19687__$1 = tmp19821;
var inst_19688__$1 = tmp19819;
var inst_19689__$1 = inst_19705;
var state_19807__$1 = (function (){var statearr_19826 = state_19807;
(statearr_19826[(14)] = inst_19688__$1);

(statearr_19826[(15)] = inst_19689__$1);

(statearr_19826[(18)] = inst_19704);

(statearr_19826[(16)] = inst_19686__$1);

(statearr_19826[(17)] = inst_19687__$1);

return statearr_19826;
})();
var statearr_19827_21015 = state_19807__$1;
(statearr_19827_21015[(2)] = null);

(statearr_19827_21015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (21))){
var inst_19731 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19831_21016 = state_19807__$1;
(statearr_19831_21016[(2)] = inst_19731);

(statearr_19831_21016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (31))){
var inst_19757 = (state_19807[(9)]);
var inst_19761 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19757);
var state_19807__$1 = state_19807;
var statearr_19832_21017 = state_19807__$1;
(statearr_19832_21017[(2)] = inst_19761);

(statearr_19832_21017[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (32))){
var inst_19749 = (state_19807[(19)]);
var inst_19752 = (state_19807[(10)]);
var inst_19750 = (state_19807[(11)]);
var inst_19751 = (state_19807[(20)]);
var inst_19763 = (state_19807[(2)]);
var inst_19764 = (inst_19752 + (1));
var tmp19828 = inst_19749;
var tmp19829 = inst_19750;
var tmp19830 = inst_19751;
var inst_19749__$1 = tmp19828;
var inst_19750__$1 = tmp19829;
var inst_19751__$1 = tmp19830;
var inst_19752__$1 = inst_19764;
var state_19807__$1 = (function (){var statearr_19833 = state_19807;
(statearr_19833[(19)] = inst_19749__$1);

(statearr_19833[(10)] = inst_19752__$1);

(statearr_19833[(11)] = inst_19750__$1);

(statearr_19833[(20)] = inst_19751__$1);

(statearr_19833[(21)] = inst_19763);

return statearr_19833;
})();
var statearr_19834_21018 = state_19807__$1;
(statearr_19834_21018[(2)] = null);

(statearr_19834_21018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (40))){
var inst_19776 = (state_19807[(22)]);
var inst_19780 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19776);
var state_19807__$1 = state_19807;
var statearr_19838_21019 = state_19807__$1;
(statearr_19838_21019[(2)] = inst_19780);

(statearr_19838_21019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (33))){
var inst_19767 = (state_19807[(23)]);
var inst_19769 = cljs.core.chunked_seq_QMARK_(inst_19767);
var state_19807__$1 = state_19807;
if(inst_19769){
var statearr_19839_21020 = state_19807__$1;
(statearr_19839_21020[(1)] = (36));

} else {
var statearr_19840_21021 = state_19807__$1;
(statearr_19840_21021[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (13))){
var inst_19698 = (state_19807[(24)]);
var inst_19701 = cljs.core.async.close_BANG_(inst_19698);
var state_19807__$1 = state_19807;
var statearr_19842_21022 = state_19807__$1;
(statearr_19842_21022[(2)] = inst_19701);

(statearr_19842_21022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (22))){
var inst_19721 = (state_19807[(8)]);
var inst_19724 = cljs.core.async.close_BANG_(inst_19721);
var state_19807__$1 = state_19807;
var statearr_19843_21023 = state_19807__$1;
(statearr_19843_21023[(2)] = inst_19724);

(statearr_19843_21023[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (36))){
var inst_19767 = (state_19807[(23)]);
var inst_19771 = cljs.core.chunk_first(inst_19767);
var inst_19772 = cljs.core.chunk_rest(inst_19767);
var inst_19773 = cljs.core.count(inst_19771);
var inst_19749 = inst_19772;
var inst_19750 = inst_19771;
var inst_19751 = inst_19773;
var inst_19752 = (0);
var state_19807__$1 = (function (){var statearr_19844 = state_19807;
(statearr_19844[(19)] = inst_19749);

(statearr_19844[(10)] = inst_19752);

(statearr_19844[(11)] = inst_19750);

(statearr_19844[(20)] = inst_19751);

return statearr_19844;
})();
var statearr_19845_21024 = state_19807__$1;
(statearr_19845_21024[(2)] = null);

(statearr_19845_21024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (41))){
var inst_19767 = (state_19807[(23)]);
var inst_19782 = (state_19807[(2)]);
var inst_19783 = cljs.core.next(inst_19767);
var inst_19749 = inst_19783;
var inst_19750 = null;
var inst_19751 = (0);
var inst_19752 = (0);
var state_19807__$1 = (function (){var statearr_19846 = state_19807;
(statearr_19846[(19)] = inst_19749);

(statearr_19846[(10)] = inst_19752);

(statearr_19846[(11)] = inst_19750);

(statearr_19846[(25)] = inst_19782);

(statearr_19846[(20)] = inst_19751);

return statearr_19846;
})();
var statearr_19847_21026 = state_19807__$1;
(statearr_19847_21026[(2)] = null);

(statearr_19847_21026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (43))){
var state_19807__$1 = state_19807;
var statearr_19849_21028 = state_19807__$1;
(statearr_19849_21028[(2)] = null);

(statearr_19849_21028[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (29))){
var inst_19791 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19851_21029 = state_19807__$1;
(statearr_19851_21029[(2)] = inst_19791);

(statearr_19851_21029[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (44))){
var inst_19800 = (state_19807[(2)]);
var state_19807__$1 = (function (){var statearr_19852 = state_19807;
(statearr_19852[(26)] = inst_19800);

return statearr_19852;
})();
var statearr_19853_21030 = state_19807__$1;
(statearr_19853_21030[(2)] = null);

(statearr_19853_21030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (6))){
var inst_19741 = (state_19807[(27)]);
var inst_19740 = cljs.core.deref(cs);
var inst_19741__$1 = cljs.core.keys(inst_19740);
var inst_19742 = cljs.core.count(inst_19741__$1);
var inst_19743 = cljs.core.reset_BANG_(dctr,inst_19742);
var inst_19748 = cljs.core.seq(inst_19741__$1);
var inst_19749 = inst_19748;
var inst_19750 = null;
var inst_19751 = (0);
var inst_19752 = (0);
var state_19807__$1 = (function (){var statearr_19855 = state_19807;
(statearr_19855[(19)] = inst_19749);

(statearr_19855[(27)] = inst_19741__$1);

(statearr_19855[(10)] = inst_19752);

(statearr_19855[(11)] = inst_19750);

(statearr_19855[(28)] = inst_19743);

(statearr_19855[(20)] = inst_19751);

return statearr_19855;
})();
var statearr_19856_21031 = state_19807__$1;
(statearr_19856_21031[(2)] = null);

(statearr_19856_21031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (28))){
var inst_19749 = (state_19807[(19)]);
var inst_19767 = (state_19807[(23)]);
var inst_19767__$1 = cljs.core.seq(inst_19749);
var state_19807__$1 = (function (){var statearr_19857 = state_19807;
(statearr_19857[(23)] = inst_19767__$1);

return statearr_19857;
})();
if(inst_19767__$1){
var statearr_19858_21032 = state_19807__$1;
(statearr_19858_21032[(1)] = (33));

} else {
var statearr_19859_21033 = state_19807__$1;
(statearr_19859_21033[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (25))){
var inst_19752 = (state_19807[(10)]);
var inst_19751 = (state_19807[(20)]);
var inst_19754 = (inst_19752 < inst_19751);
var inst_19755 = inst_19754;
var state_19807__$1 = state_19807;
if(cljs.core.truth_(inst_19755)){
var statearr_19861_21034 = state_19807__$1;
(statearr_19861_21034[(1)] = (27));

} else {
var statearr_19862_21035 = state_19807__$1;
(statearr_19862_21035[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (34))){
var state_19807__$1 = state_19807;
var statearr_19864_21036 = state_19807__$1;
(statearr_19864_21036[(2)] = null);

(statearr_19864_21036[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (17))){
var state_19807__$1 = state_19807;
var statearr_19865_21037 = state_19807__$1;
(statearr_19865_21037[(2)] = null);

(statearr_19865_21037[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (3))){
var inst_19805 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19807__$1,inst_19805);
} else {
if((state_val_19808 === (12))){
var inst_19736 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19868_21038 = state_19807__$1;
(statearr_19868_21038[(2)] = inst_19736);

(statearr_19868_21038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (2))){
var state_19807__$1 = state_19807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19807__$1,(4),ch);
} else {
if((state_val_19808 === (23))){
var state_19807__$1 = state_19807;
var statearr_19869_21039 = state_19807__$1;
(statearr_19869_21039[(2)] = null);

(statearr_19869_21039[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (35))){
var inst_19789 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19871_21040 = state_19807__$1;
(statearr_19871_21040[(2)] = inst_19789);

(statearr_19871_21040[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (19))){
var inst_19708 = (state_19807[(7)]);
var inst_19712 = cljs.core.chunk_first(inst_19708);
var inst_19713 = cljs.core.chunk_rest(inst_19708);
var inst_19714 = cljs.core.count(inst_19712);
var inst_19686 = inst_19713;
var inst_19687 = inst_19712;
var inst_19688 = inst_19714;
var inst_19689 = (0);
var state_19807__$1 = (function (){var statearr_19874 = state_19807;
(statearr_19874[(14)] = inst_19688);

(statearr_19874[(15)] = inst_19689);

(statearr_19874[(16)] = inst_19686);

(statearr_19874[(17)] = inst_19687);

return statearr_19874;
})();
var statearr_19876_21041 = state_19807__$1;
(statearr_19876_21041[(2)] = null);

(statearr_19876_21041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (11))){
var inst_19686 = (state_19807[(16)]);
var inst_19708 = (state_19807[(7)]);
var inst_19708__$1 = cljs.core.seq(inst_19686);
var state_19807__$1 = (function (){var statearr_19877 = state_19807;
(statearr_19877[(7)] = inst_19708__$1);

return statearr_19877;
})();
if(inst_19708__$1){
var statearr_19878_21042 = state_19807__$1;
(statearr_19878_21042[(1)] = (16));

} else {
var statearr_19879_21043 = state_19807__$1;
(statearr_19879_21043[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (9))){
var inst_19738 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19880_21044 = state_19807__$1;
(statearr_19880_21044[(2)] = inst_19738);

(statearr_19880_21044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (5))){
var inst_19684 = cljs.core.deref(cs);
var inst_19685 = cljs.core.seq(inst_19684);
var inst_19686 = inst_19685;
var inst_19687 = null;
var inst_19688 = (0);
var inst_19689 = (0);
var state_19807__$1 = (function (){var statearr_19881 = state_19807;
(statearr_19881[(14)] = inst_19688);

(statearr_19881[(15)] = inst_19689);

(statearr_19881[(16)] = inst_19686);

(statearr_19881[(17)] = inst_19687);

return statearr_19881;
})();
var statearr_19882_21045 = state_19807__$1;
(statearr_19882_21045[(2)] = null);

(statearr_19882_21045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (14))){
var state_19807__$1 = state_19807;
var statearr_19885_21046 = state_19807__$1;
(statearr_19885_21046[(2)] = null);

(statearr_19885_21046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (45))){
var inst_19797 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19888_21047 = state_19807__$1;
(statearr_19888_21047[(2)] = inst_19797);

(statearr_19888_21047[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (26))){
var inst_19741 = (state_19807[(27)]);
var inst_19793 = (state_19807[(2)]);
var inst_19794 = cljs.core.seq(inst_19741);
var state_19807__$1 = (function (){var statearr_19890 = state_19807;
(statearr_19890[(29)] = inst_19793);

return statearr_19890;
})();
if(inst_19794){
var statearr_19891_21048 = state_19807__$1;
(statearr_19891_21048[(1)] = (42));

} else {
var statearr_19892_21049 = state_19807__$1;
(statearr_19892_21049[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (16))){
var inst_19708 = (state_19807[(7)]);
var inst_19710 = cljs.core.chunked_seq_QMARK_(inst_19708);
var state_19807__$1 = state_19807;
if(inst_19710){
var statearr_19894_21050 = state_19807__$1;
(statearr_19894_21050[(1)] = (19));

} else {
var statearr_19895_21051 = state_19807__$1;
(statearr_19895_21051[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (38))){
var inst_19786 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19896_21052 = state_19807__$1;
(statearr_19896_21052[(2)] = inst_19786);

(statearr_19896_21052[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (30))){
var state_19807__$1 = state_19807;
var statearr_19897_21053 = state_19807__$1;
(statearr_19897_21053[(2)] = null);

(statearr_19897_21053[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (10))){
var inst_19689 = (state_19807[(15)]);
var inst_19687 = (state_19807[(17)]);
var inst_19697 = cljs.core._nth(inst_19687,inst_19689);
var inst_19698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19697,(0),null);
var inst_19699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19697,(1),null);
var state_19807__$1 = (function (){var statearr_19898 = state_19807;
(statearr_19898[(24)] = inst_19698);

return statearr_19898;
})();
if(cljs.core.truth_(inst_19699)){
var statearr_19899_21054 = state_19807__$1;
(statearr_19899_21054[(1)] = (13));

} else {
var statearr_19900_21055 = state_19807__$1;
(statearr_19900_21055[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (18))){
var inst_19734 = (state_19807[(2)]);
var state_19807__$1 = state_19807;
var statearr_19901_21056 = state_19807__$1;
(statearr_19901_21056[(2)] = inst_19734);

(statearr_19901_21056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (42))){
var state_19807__$1 = state_19807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19807__$1,(45),dchan);
} else {
if((state_val_19808 === (37))){
var inst_19776 = (state_19807[(22)]);
var inst_19767 = (state_19807[(23)]);
var inst_19677 = (state_19807[(12)]);
var inst_19776__$1 = cljs.core.first(inst_19767);
var inst_19777 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19776__$1,inst_19677,done);
var state_19807__$1 = (function (){var statearr_19902 = state_19807;
(statearr_19902[(22)] = inst_19776__$1);

return statearr_19902;
})();
if(cljs.core.truth_(inst_19777)){
var statearr_19903_21057 = state_19807__$1;
(statearr_19903_21057[(1)] = (39));

} else {
var statearr_19904_21058 = state_19807__$1;
(statearr_19904_21058[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19808 === (8))){
var inst_19688 = (state_19807[(14)]);
var inst_19689 = (state_19807[(15)]);
var inst_19691 = (inst_19689 < inst_19688);
var inst_19692 = inst_19691;
var state_19807__$1 = state_19807;
if(cljs.core.truth_(inst_19692)){
var statearr_19905_21059 = state_19807__$1;
(statearr_19905_21059[(1)] = (10));

} else {
var statearr_19907_21060 = state_19807__$1;
(statearr_19907_21060[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__18619__auto__ = null;
var cljs$core$async$mult_$_state_machine__18619__auto____0 = (function (){
var statearr_19909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19909[(0)] = cljs$core$async$mult_$_state_machine__18619__auto__);

(statearr_19909[(1)] = (1));

return statearr_19909;
});
var cljs$core$async$mult_$_state_machine__18619__auto____1 = (function (state_19807){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_19807);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e19910){var ex__18622__auto__ = e19910;
var statearr_19911_21061 = state_19807;
(statearr_19911_21061[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_19807[(4)]))){
var statearr_19912_21062 = state_19807;
(statearr_19912_21062[(1)] = cljs.core.first((state_19807[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21063 = state_19807;
state_19807 = G__21063;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18619__auto__ = function(state_19807){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18619__auto____1.call(this,state_19807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18619__auto____0;
cljs$core$async$mult_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18619__auto____1;
return cljs$core$async$mult_$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_19915 = f__18699__auto__();
(statearr_19915[(6)] = c__18698__auto___21004);

return statearr_19915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19918 = arguments.length;
switch (G__19918) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21065 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21065(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21066 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21066(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21067 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21067(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21068 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21068(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21069 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21069(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21072 = arguments.length;
var i__5770__auto___21073 = (0);
while(true){
if((i__5770__auto___21073 < len__5769__auto___21072)){
args__5775__auto__.push((arguments[i__5770__auto___21073]));

var G__21074 = (i__5770__auto___21073 + (1));
i__5770__auto___21073 = G__21074;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19993){
var map__19994 = p__19993;
var map__19994__$1 = cljs.core.__destructure_map(map__19994);
var opts = map__19994__$1;
var statearr_19995_21075 = state;
(statearr_19995_21075[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19997_21076 = state;
(statearr_19997_21076[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19998_21077 = state;
(statearr_19998_21077[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19989){
var G__19990 = cljs.core.first(seq19989);
var seq19989__$1 = cljs.core.next(seq19989);
var G__19991 = cljs.core.first(seq19989__$1);
var seq19989__$2 = cljs.core.next(seq19989__$1);
var G__19992 = cljs.core.first(seq19989__$2);
var seq19989__$3 = cljs.core.next(seq19989__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19990,G__19991,G__19992,seq19989__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20003 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20004){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20004 = meta20004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20005,meta20004__$1){
var self__ = this;
var _20005__$1 = this;
return (new cljs.core.async.t_cljs$core$async20003(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20004__$1));
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20005){
var self__ = this;
var _20005__$1 = this;
return self__.meta20004;
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20003.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async20003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20004","meta20004",994255054,null)], null);
}));

(cljs.core.async.t_cljs$core$async20003.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20003");

(cljs.core.async.t_cljs$core$async20003.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20003");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20003.
 */
cljs.core.async.__GT_t_cljs$core$async20003 = (function cljs$core$async$__GT_t_cljs$core$async20003(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20004){
return (new cljs.core.async.t_cljs$core$async20003(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20004));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async20003(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18698__auto___21080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20081){
var state_val_20082 = (state_20081[(1)]);
if((state_val_20082 === (7))){
var inst_20041 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
if(cljs.core.truth_(inst_20041)){
var statearr_20083_21082 = state_20081__$1;
(statearr_20083_21082[(1)] = (8));

} else {
var statearr_20084_21083 = state_20081__$1;
(statearr_20084_21083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (20))){
var inst_20034 = (state_20081[(7)]);
var state_20081__$1 = state_20081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20081__$1,(23),out,inst_20034);
} else {
if((state_val_20082 === (1))){
var inst_20017 = calc_state();
var inst_20018 = cljs.core.__destructure_map(inst_20017);
var inst_20019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20018,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20018,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20018,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20022 = inst_20017;
var state_20081__$1 = (function (){var statearr_20085 = state_20081;
(statearr_20085[(8)] = inst_20021);

(statearr_20085[(9)] = inst_20022);

(statearr_20085[(10)] = inst_20019);

(statearr_20085[(11)] = inst_20020);

return statearr_20085;
})();
var statearr_20086_21084 = state_20081__$1;
(statearr_20086_21084[(2)] = null);

(statearr_20086_21084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (24))){
var inst_20025 = (state_20081[(12)]);
var inst_20022 = inst_20025;
var state_20081__$1 = (function (){var statearr_20087 = state_20081;
(statearr_20087[(9)] = inst_20022);

return statearr_20087;
})();
var statearr_20088_21085 = state_20081__$1;
(statearr_20088_21085[(2)] = null);

(statearr_20088_21085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (4))){
var inst_20036 = (state_20081[(13)]);
var inst_20034 = (state_20081[(7)]);
var inst_20033 = (state_20081[(2)]);
var inst_20034__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20033,(0),null);
var inst_20035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20033,(1),null);
var inst_20036__$1 = (inst_20034__$1 == null);
var state_20081__$1 = (function (){var statearr_20089 = state_20081;
(statearr_20089[(13)] = inst_20036__$1);

(statearr_20089[(14)] = inst_20035);

(statearr_20089[(7)] = inst_20034__$1);

return statearr_20089;
})();
if(cljs.core.truth_(inst_20036__$1)){
var statearr_20090_21086 = state_20081__$1;
(statearr_20090_21086[(1)] = (5));

} else {
var statearr_20091_21087 = state_20081__$1;
(statearr_20091_21087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (15))){
var inst_20055 = (state_20081[(15)]);
var inst_20026 = (state_20081[(16)]);
var inst_20055__$1 = cljs.core.empty_QMARK_(inst_20026);
var state_20081__$1 = (function (){var statearr_20092 = state_20081;
(statearr_20092[(15)] = inst_20055__$1);

return statearr_20092;
})();
if(inst_20055__$1){
var statearr_20093_21088 = state_20081__$1;
(statearr_20093_21088[(1)] = (17));

} else {
var statearr_20094_21089 = state_20081__$1;
(statearr_20094_21089[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (21))){
var inst_20025 = (state_20081[(12)]);
var inst_20022 = inst_20025;
var state_20081__$1 = (function (){var statearr_20095 = state_20081;
(statearr_20095[(9)] = inst_20022);

return statearr_20095;
})();
var statearr_20096_21090 = state_20081__$1;
(statearr_20096_21090[(2)] = null);

(statearr_20096_21090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (13))){
var inst_20048 = (state_20081[(2)]);
var inst_20049 = calc_state();
var inst_20022 = inst_20049;
var state_20081__$1 = (function (){var statearr_20097 = state_20081;
(statearr_20097[(17)] = inst_20048);

(statearr_20097[(9)] = inst_20022);

return statearr_20097;
})();
var statearr_20098_21091 = state_20081__$1;
(statearr_20098_21091[(2)] = null);

(statearr_20098_21091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (22))){
var inst_20075 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
var statearr_20099_21092 = state_20081__$1;
(statearr_20099_21092[(2)] = inst_20075);

(statearr_20099_21092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (6))){
var inst_20035 = (state_20081[(14)]);
var inst_20039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20035,change);
var state_20081__$1 = state_20081;
var statearr_20100_21093 = state_20081__$1;
(statearr_20100_21093[(2)] = inst_20039);

(statearr_20100_21093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (25))){
var state_20081__$1 = state_20081;
var statearr_20101_21094 = state_20081__$1;
(statearr_20101_21094[(2)] = null);

(statearr_20101_21094[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (17))){
var inst_20035 = (state_20081[(14)]);
var inst_20027 = (state_20081[(18)]);
var inst_20057 = (inst_20027.cljs$core$IFn$_invoke$arity$1 ? inst_20027.cljs$core$IFn$_invoke$arity$1(inst_20035) : inst_20027.call(null,inst_20035));
var inst_20058 = cljs.core.not(inst_20057);
var state_20081__$1 = state_20081;
var statearr_20102_21095 = state_20081__$1;
(statearr_20102_21095[(2)] = inst_20058);

(statearr_20102_21095[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (3))){
var inst_20079 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20081__$1,inst_20079);
} else {
if((state_val_20082 === (12))){
var state_20081__$1 = state_20081;
var statearr_20103_21096 = state_20081__$1;
(statearr_20103_21096[(2)] = null);

(statearr_20103_21096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (2))){
var inst_20025 = (state_20081[(12)]);
var inst_20022 = (state_20081[(9)]);
var inst_20025__$1 = cljs.core.__destructure_map(inst_20022);
var inst_20026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20025__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20025__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20025__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20081__$1 = (function (){var statearr_20104 = state_20081;
(statearr_20104[(12)] = inst_20025__$1);

(statearr_20104[(16)] = inst_20026);

(statearr_20104[(18)] = inst_20027);

return statearr_20104;
})();
return cljs.core.async.ioc_alts_BANG_(state_20081__$1,(4),inst_20028);
} else {
if((state_val_20082 === (23))){
var inst_20066 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
if(cljs.core.truth_(inst_20066)){
var statearr_20105_21097 = state_20081__$1;
(statearr_20105_21097[(1)] = (24));

} else {
var statearr_20106_21098 = state_20081__$1;
(statearr_20106_21098[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (19))){
var inst_20061 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
var statearr_20107_21099 = state_20081__$1;
(statearr_20107_21099[(2)] = inst_20061);

(statearr_20107_21099[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (11))){
var inst_20035 = (state_20081[(14)]);
var inst_20045 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_20035);
var state_20081__$1 = state_20081;
var statearr_20108_21100 = state_20081__$1;
(statearr_20108_21100[(2)] = inst_20045);

(statearr_20108_21100[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (9))){
var inst_20035 = (state_20081[(14)]);
var inst_20052 = (state_20081[(19)]);
var inst_20026 = (state_20081[(16)]);
var inst_20052__$1 = (inst_20026.cljs$core$IFn$_invoke$arity$1 ? inst_20026.cljs$core$IFn$_invoke$arity$1(inst_20035) : inst_20026.call(null,inst_20035));
var state_20081__$1 = (function (){var statearr_20109 = state_20081;
(statearr_20109[(19)] = inst_20052__$1);

return statearr_20109;
})();
if(cljs.core.truth_(inst_20052__$1)){
var statearr_20110_21101 = state_20081__$1;
(statearr_20110_21101[(1)] = (14));

} else {
var statearr_20111_21102 = state_20081__$1;
(statearr_20111_21102[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (5))){
var inst_20036 = (state_20081[(13)]);
var state_20081__$1 = state_20081;
var statearr_20112_21103 = state_20081__$1;
(statearr_20112_21103[(2)] = inst_20036);

(statearr_20112_21103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (14))){
var inst_20052 = (state_20081[(19)]);
var state_20081__$1 = state_20081;
var statearr_20113_21104 = state_20081__$1;
(statearr_20113_21104[(2)] = inst_20052);

(statearr_20113_21104[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (26))){
var inst_20071 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
var statearr_20114_21105 = state_20081__$1;
(statearr_20114_21105[(2)] = inst_20071);

(statearr_20114_21105[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (16))){
var inst_20063 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
if(cljs.core.truth_(inst_20063)){
var statearr_20115_21106 = state_20081__$1;
(statearr_20115_21106[(1)] = (20));

} else {
var statearr_20116_21107 = state_20081__$1;
(statearr_20116_21107[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (10))){
var inst_20077 = (state_20081[(2)]);
var state_20081__$1 = state_20081;
var statearr_20117_21108 = state_20081__$1;
(statearr_20117_21108[(2)] = inst_20077);

(statearr_20117_21108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (18))){
var inst_20055 = (state_20081[(15)]);
var state_20081__$1 = state_20081;
var statearr_20118_21109 = state_20081__$1;
(statearr_20118_21109[(2)] = inst_20055);

(statearr_20118_21109[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20082 === (8))){
var inst_20034 = (state_20081[(7)]);
var inst_20043 = (inst_20034 == null);
var state_20081__$1 = state_20081;
if(cljs.core.truth_(inst_20043)){
var statearr_20119_21110 = state_20081__$1;
(statearr_20119_21110[(1)] = (11));

} else {
var statearr_20120_21111 = state_20081__$1;
(statearr_20120_21111[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__18619__auto__ = null;
var cljs$core$async$mix_$_state_machine__18619__auto____0 = (function (){
var statearr_20121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20121[(0)] = cljs$core$async$mix_$_state_machine__18619__auto__);

(statearr_20121[(1)] = (1));

return statearr_20121;
});
var cljs$core$async$mix_$_state_machine__18619__auto____1 = (function (state_20081){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20081);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20122){var ex__18622__auto__ = e20122;
var statearr_20123_21112 = state_20081;
(statearr_20123_21112[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20081[(4)]))){
var statearr_20124_21113 = state_20081;
(statearr_20124_21113[(1)] = cljs.core.first((state_20081[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21114 = state_20081;
state_20081 = G__21114;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18619__auto__ = function(state_20081){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18619__auto____1.call(this,state_20081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18619__auto____0;
cljs$core$async$mix_$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18619__auto____1;
return cljs$core$async$mix_$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20125 = f__18699__auto__();
(statearr_20125[(6)] = c__18698__auto___21080);

return statearr_20125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_21115 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_21115(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_21116 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_21116(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_21117 = (function() {
var G__21118 = null;
var G__21118__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__21118__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__21118 = function(p,v){
switch(arguments.length){
case 1:
return G__21118__1.call(this,p);
case 2:
return G__21118__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21118.cljs$core$IFn$_invoke$arity$1 = G__21118__1;
G__21118.cljs$core$IFn$_invoke$arity$2 = G__21118__2;
return G__21118;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20128 = arguments.length;
switch (G__20128) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21117(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_21117(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20141 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20142){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20142 = meta20142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20143,meta20142__$1){
var self__ = this;
var _20143__$1 = this;
return (new cljs.core.async.t_cljs$core$async20141(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20142__$1));
}));

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20143){
var self__ = this;
var _20143__$1 = this;
return self__.meta20142;
}));

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20142","meta20142",-1739804857,null)], null);
}));

(cljs.core.async.t_cljs$core$async20141.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20141");

(cljs.core.async.t_cljs$core$async20141.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20141");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20141.
 */
cljs.core.async.__GT_t_cljs$core$async20141 = (function cljs$core$async$__GT_t_cljs$core$async20141(ch,topic_fn,buf_fn,mults,ensure_mult,meta20142){
return (new cljs.core.async.t_cljs$core$async20141(ch,topic_fn,buf_fn,mults,ensure_mult,meta20142));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__20132 = arguments.length;
switch (G__20132) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__20130_SHARP_){
if(cljs.core.truth_((p1__20130_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20130_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20130_SHARP_.call(null,topic)))){
return p1__20130_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20130_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async20141(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18698__auto___21125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20232){
var state_val_20233 = (state_20232[(1)]);
if((state_val_20233 === (7))){
var inst_20228 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20234_21126 = state_20232__$1;
(statearr_20234_21126[(2)] = inst_20228);

(statearr_20234_21126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (20))){
var state_20232__$1 = state_20232;
var statearr_20236_21127 = state_20232__$1;
(statearr_20236_21127[(2)] = null);

(statearr_20236_21127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (1))){
var state_20232__$1 = state_20232;
var statearr_20237_21128 = state_20232__$1;
(statearr_20237_21128[(2)] = null);

(statearr_20237_21128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (24))){
var inst_20211 = (state_20232[(7)]);
var inst_20220 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20211);
var state_20232__$1 = state_20232;
var statearr_20238_21129 = state_20232__$1;
(statearr_20238_21129[(2)] = inst_20220);

(statearr_20238_21129[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (4))){
var inst_20163 = (state_20232[(8)]);
var inst_20163__$1 = (state_20232[(2)]);
var inst_20164 = (inst_20163__$1 == null);
var state_20232__$1 = (function (){var statearr_20239 = state_20232;
(statearr_20239[(8)] = inst_20163__$1);

return statearr_20239;
})();
if(cljs.core.truth_(inst_20164)){
var statearr_20240_21130 = state_20232__$1;
(statearr_20240_21130[(1)] = (5));

} else {
var statearr_20241_21131 = state_20232__$1;
(statearr_20241_21131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (15))){
var inst_20205 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20243_21132 = state_20232__$1;
(statearr_20243_21132[(2)] = inst_20205);

(statearr_20243_21132[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (21))){
var inst_20225 = (state_20232[(2)]);
var state_20232__$1 = (function (){var statearr_20244 = state_20232;
(statearr_20244[(9)] = inst_20225);

return statearr_20244;
})();
var statearr_20245_21133 = state_20232__$1;
(statearr_20245_21133[(2)] = null);

(statearr_20245_21133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (13))){
var inst_20187 = (state_20232[(10)]);
var inst_20189 = cljs.core.chunked_seq_QMARK_(inst_20187);
var state_20232__$1 = state_20232;
if(inst_20189){
var statearr_20246_21134 = state_20232__$1;
(statearr_20246_21134[(1)] = (16));

} else {
var statearr_20247_21135 = state_20232__$1;
(statearr_20247_21135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (22))){
var inst_20217 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
if(cljs.core.truth_(inst_20217)){
var statearr_20248_21136 = state_20232__$1;
(statearr_20248_21136[(1)] = (23));

} else {
var statearr_20249_21137 = state_20232__$1;
(statearr_20249_21137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (6))){
var inst_20211 = (state_20232[(7)]);
var inst_20213 = (state_20232[(11)]);
var inst_20163 = (state_20232[(8)]);
var inst_20211__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20163) : topic_fn.call(null,inst_20163));
var inst_20212 = cljs.core.deref(mults);
var inst_20213__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20212,inst_20211__$1);
var state_20232__$1 = (function (){var statearr_20250 = state_20232;
(statearr_20250[(7)] = inst_20211__$1);

(statearr_20250[(11)] = inst_20213__$1);

return statearr_20250;
})();
if(cljs.core.truth_(inst_20213__$1)){
var statearr_20251_21138 = state_20232__$1;
(statearr_20251_21138[(1)] = (19));

} else {
var statearr_20252_21139 = state_20232__$1;
(statearr_20252_21139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (25))){
var inst_20222 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20253_21140 = state_20232__$1;
(statearr_20253_21140[(2)] = inst_20222);

(statearr_20253_21140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (17))){
var inst_20187 = (state_20232[(10)]);
var inst_20196 = cljs.core.first(inst_20187);
var inst_20197 = cljs.core.async.muxch_STAR_(inst_20196);
var inst_20198 = cljs.core.async.close_BANG_(inst_20197);
var inst_20199 = cljs.core.next(inst_20187);
var inst_20173 = inst_20199;
var inst_20174 = null;
var inst_20175 = (0);
var inst_20176 = (0);
var state_20232__$1 = (function (){var statearr_20254 = state_20232;
(statearr_20254[(12)] = inst_20198);

(statearr_20254[(13)] = inst_20175);

(statearr_20254[(14)] = inst_20173);

(statearr_20254[(15)] = inst_20176);

(statearr_20254[(16)] = inst_20174);

return statearr_20254;
})();
var statearr_20255_21141 = state_20232__$1;
(statearr_20255_21141[(2)] = null);

(statearr_20255_21141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (3))){
var inst_20230 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20232__$1,inst_20230);
} else {
if((state_val_20233 === (12))){
var inst_20207 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20256_21143 = state_20232__$1;
(statearr_20256_21143[(2)] = inst_20207);

(statearr_20256_21143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (2))){
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20232__$1,(4),ch);
} else {
if((state_val_20233 === (23))){
var state_20232__$1 = state_20232;
var statearr_20257_21144 = state_20232__$1;
(statearr_20257_21144[(2)] = null);

(statearr_20257_21144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (19))){
var inst_20213 = (state_20232[(11)]);
var inst_20163 = (state_20232[(8)]);
var inst_20215 = cljs.core.async.muxch_STAR_(inst_20213);
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20232__$1,(22),inst_20215,inst_20163);
} else {
if((state_val_20233 === (11))){
var inst_20173 = (state_20232[(14)]);
var inst_20187 = (state_20232[(10)]);
var inst_20187__$1 = cljs.core.seq(inst_20173);
var state_20232__$1 = (function (){var statearr_20258 = state_20232;
(statearr_20258[(10)] = inst_20187__$1);

return statearr_20258;
})();
if(inst_20187__$1){
var statearr_20259_21146 = state_20232__$1;
(statearr_20259_21146[(1)] = (13));

} else {
var statearr_20260_21147 = state_20232__$1;
(statearr_20260_21147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (9))){
var inst_20209 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20261_21148 = state_20232__$1;
(statearr_20261_21148[(2)] = inst_20209);

(statearr_20261_21148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (5))){
var inst_20170 = cljs.core.deref(mults);
var inst_20171 = cljs.core.vals(inst_20170);
var inst_20172 = cljs.core.seq(inst_20171);
var inst_20173 = inst_20172;
var inst_20174 = null;
var inst_20175 = (0);
var inst_20176 = (0);
var state_20232__$1 = (function (){var statearr_20262 = state_20232;
(statearr_20262[(13)] = inst_20175);

(statearr_20262[(14)] = inst_20173);

(statearr_20262[(15)] = inst_20176);

(statearr_20262[(16)] = inst_20174);

return statearr_20262;
})();
var statearr_20263_21149 = state_20232__$1;
(statearr_20263_21149[(2)] = null);

(statearr_20263_21149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (14))){
var state_20232__$1 = state_20232;
var statearr_20267_21150 = state_20232__$1;
(statearr_20267_21150[(2)] = null);

(statearr_20267_21150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (16))){
var inst_20187 = (state_20232[(10)]);
var inst_20191 = cljs.core.chunk_first(inst_20187);
var inst_20192 = cljs.core.chunk_rest(inst_20187);
var inst_20193 = cljs.core.count(inst_20191);
var inst_20173 = inst_20192;
var inst_20174 = inst_20191;
var inst_20175 = inst_20193;
var inst_20176 = (0);
var state_20232__$1 = (function (){var statearr_20268 = state_20232;
(statearr_20268[(13)] = inst_20175);

(statearr_20268[(14)] = inst_20173);

(statearr_20268[(15)] = inst_20176);

(statearr_20268[(16)] = inst_20174);

return statearr_20268;
})();
var statearr_20269_21151 = state_20232__$1;
(statearr_20269_21151[(2)] = null);

(statearr_20269_21151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (10))){
var inst_20175 = (state_20232[(13)]);
var inst_20173 = (state_20232[(14)]);
var inst_20176 = (state_20232[(15)]);
var inst_20174 = (state_20232[(16)]);
var inst_20181 = cljs.core._nth(inst_20174,inst_20176);
var inst_20182 = cljs.core.async.muxch_STAR_(inst_20181);
var inst_20183 = cljs.core.async.close_BANG_(inst_20182);
var inst_20184 = (inst_20176 + (1));
var tmp20264 = inst_20175;
var tmp20265 = inst_20173;
var tmp20266 = inst_20174;
var inst_20173__$1 = tmp20265;
var inst_20174__$1 = tmp20266;
var inst_20175__$1 = tmp20264;
var inst_20176__$1 = inst_20184;
var state_20232__$1 = (function (){var statearr_20270 = state_20232;
(statearr_20270[(17)] = inst_20183);

(statearr_20270[(13)] = inst_20175__$1);

(statearr_20270[(14)] = inst_20173__$1);

(statearr_20270[(15)] = inst_20176__$1);

(statearr_20270[(16)] = inst_20174__$1);

return statearr_20270;
})();
var statearr_20271_21152 = state_20232__$1;
(statearr_20271_21152[(2)] = null);

(statearr_20271_21152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (18))){
var inst_20202 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20272_21153 = state_20232__$1;
(statearr_20272_21153[(2)] = inst_20202);

(statearr_20272_21153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (8))){
var inst_20175 = (state_20232[(13)]);
var inst_20176 = (state_20232[(15)]);
var inst_20178 = (inst_20176 < inst_20175);
var inst_20179 = inst_20178;
var state_20232__$1 = state_20232;
if(cljs.core.truth_(inst_20179)){
var statearr_20273_21154 = state_20232__$1;
(statearr_20273_21154[(1)] = (10));

} else {
var statearr_20274_21155 = state_20232__$1;
(statearr_20274_21155[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20275[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20275[(1)] = (1));

return statearr_20275;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20232){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20232);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20276){var ex__18622__auto__ = e20276;
var statearr_20277_21156 = state_20232;
(statearr_20277_21156[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20232[(4)]))){
var statearr_20278_21157 = state_20232;
(statearr_20278_21157[(1)] = cljs.core.first((state_20232[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21158 = state_20232;
state_20232 = G__21158;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20279 = f__18699__auto__();
(statearr_20279[(6)] = c__18698__auto___21125);

return statearr_20279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__20281 = arguments.length;
switch (G__20281) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20283 = arguments.length;
switch (G__20283) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__20285 = arguments.length;
switch (G__20285) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18698__auto___21162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20328){
var state_val_20329 = (state_20328[(1)]);
if((state_val_20329 === (7))){
var state_20328__$1 = state_20328;
var statearr_20330_21163 = state_20328__$1;
(statearr_20330_21163[(2)] = null);

(statearr_20330_21163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (1))){
var state_20328__$1 = state_20328;
var statearr_20331_21164 = state_20328__$1;
(statearr_20331_21164[(2)] = null);

(statearr_20331_21164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (4))){
var inst_20288 = (state_20328[(7)]);
var inst_20289 = (state_20328[(8)]);
var inst_20291 = (inst_20289 < inst_20288);
var state_20328__$1 = state_20328;
if(cljs.core.truth_(inst_20291)){
var statearr_20332_21165 = state_20328__$1;
(statearr_20332_21165[(1)] = (6));

} else {
var statearr_20333_21166 = state_20328__$1;
(statearr_20333_21166[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (15))){
var inst_20314 = (state_20328[(9)]);
var inst_20319 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20314);
var state_20328__$1 = state_20328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20328__$1,(17),out,inst_20319);
} else {
if((state_val_20329 === (13))){
var inst_20314 = (state_20328[(9)]);
var inst_20314__$1 = (state_20328[(2)]);
var inst_20315 = cljs.core.some(cljs.core.nil_QMARK_,inst_20314__$1);
var state_20328__$1 = (function (){var statearr_20334 = state_20328;
(statearr_20334[(9)] = inst_20314__$1);

return statearr_20334;
})();
if(cljs.core.truth_(inst_20315)){
var statearr_20335_21167 = state_20328__$1;
(statearr_20335_21167[(1)] = (14));

} else {
var statearr_20336_21168 = state_20328__$1;
(statearr_20336_21168[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (6))){
var state_20328__$1 = state_20328;
var statearr_20337_21169 = state_20328__$1;
(statearr_20337_21169[(2)] = null);

(statearr_20337_21169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (17))){
var inst_20321 = (state_20328[(2)]);
var state_20328__$1 = (function (){var statearr_20339 = state_20328;
(statearr_20339[(10)] = inst_20321);

return statearr_20339;
})();
var statearr_20340_21170 = state_20328__$1;
(statearr_20340_21170[(2)] = null);

(statearr_20340_21170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (3))){
var inst_20326 = (state_20328[(2)]);
var state_20328__$1 = state_20328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20328__$1,inst_20326);
} else {
if((state_val_20329 === (12))){
var _ = (function (){var statearr_20341 = state_20328;
(statearr_20341[(4)] = cljs.core.rest((state_20328[(4)])));

return statearr_20341;
})();
var state_20328__$1 = state_20328;
var ex20338 = (state_20328__$1[(2)]);
var statearr_20342_21171 = state_20328__$1;
(statearr_20342_21171[(5)] = ex20338);


if((ex20338 instanceof Object)){
var statearr_20343_21172 = state_20328__$1;
(statearr_20343_21172[(1)] = (11));

(statearr_20343_21172[(5)] = null);

} else {
throw ex20338;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (2))){
var inst_20287 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20288 = cnt;
var inst_20289 = (0);
var state_20328__$1 = (function (){var statearr_20344 = state_20328;
(statearr_20344[(11)] = inst_20287);

(statearr_20344[(7)] = inst_20288);

(statearr_20344[(8)] = inst_20289);

return statearr_20344;
})();
var statearr_20345_21173 = state_20328__$1;
(statearr_20345_21173[(2)] = null);

(statearr_20345_21173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (11))){
var inst_20293 = (state_20328[(2)]);
var inst_20294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20328__$1 = (function (){var statearr_20346 = state_20328;
(statearr_20346[(12)] = inst_20293);

return statearr_20346;
})();
var statearr_20347_21174 = state_20328__$1;
(statearr_20347_21174[(2)] = inst_20294);

(statearr_20347_21174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (9))){
var inst_20289 = (state_20328[(8)]);
var _ = (function (){var statearr_20348 = state_20328;
(statearr_20348[(4)] = cljs.core.cons((12),(state_20328[(4)])));

return statearr_20348;
})();
var inst_20300 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20289) : chs__$1.call(null,inst_20289));
var inst_20301 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20289) : done.call(null,inst_20289));
var inst_20302 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20300,inst_20301);
var ___$1 = (function (){var statearr_20349 = state_20328;
(statearr_20349[(4)] = cljs.core.rest((state_20328[(4)])));

return statearr_20349;
})();
var state_20328__$1 = state_20328;
var statearr_20350_21175 = state_20328__$1;
(statearr_20350_21175[(2)] = inst_20302);

(statearr_20350_21175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (5))){
var inst_20312 = (state_20328[(2)]);
var state_20328__$1 = (function (){var statearr_20351 = state_20328;
(statearr_20351[(13)] = inst_20312);

return statearr_20351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20328__$1,(13),dchan);
} else {
if((state_val_20329 === (14))){
var inst_20317 = cljs.core.async.close_BANG_(out);
var state_20328__$1 = state_20328;
var statearr_20352_21176 = state_20328__$1;
(statearr_20352_21176[(2)] = inst_20317);

(statearr_20352_21176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (16))){
var inst_20324 = (state_20328[(2)]);
var state_20328__$1 = state_20328;
var statearr_20353_21177 = state_20328__$1;
(statearr_20353_21177[(2)] = inst_20324);

(statearr_20353_21177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (10))){
var inst_20289 = (state_20328[(8)]);
var inst_20305 = (state_20328[(2)]);
var inst_20306 = (inst_20289 + (1));
var inst_20289__$1 = inst_20306;
var state_20328__$1 = (function (){var statearr_20354 = state_20328;
(statearr_20354[(14)] = inst_20305);

(statearr_20354[(8)] = inst_20289__$1);

return statearr_20354;
})();
var statearr_20355_21178 = state_20328__$1;
(statearr_20355_21178[(2)] = null);

(statearr_20355_21178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20329 === (8))){
var inst_20310 = (state_20328[(2)]);
var state_20328__$1 = state_20328;
var statearr_20356_21179 = state_20328__$1;
(statearr_20356_21179[(2)] = inst_20310);

(statearr_20356_21179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20357[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20357[(1)] = (1));

return statearr_20357;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20328){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20328);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20358){var ex__18622__auto__ = e20358;
var statearr_20359_21180 = state_20328;
(statearr_20359_21180[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20328[(4)]))){
var statearr_20360_21181 = state_20328;
(statearr_20360_21181[(1)] = cljs.core.first((state_20328[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21182 = state_20328;
state_20328 = G__21182;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20361 = f__18699__auto__();
(statearr_20361[(6)] = c__18698__auto___21162);

return statearr_20361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20364 = arguments.length;
switch (G__20364) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18698__auto___21184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20396){
var state_val_20397 = (state_20396[(1)]);
if((state_val_20397 === (7))){
var inst_20376 = (state_20396[(7)]);
var inst_20375 = (state_20396[(8)]);
var inst_20375__$1 = (state_20396[(2)]);
var inst_20376__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20375__$1,(0),null);
var inst_20377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20375__$1,(1),null);
var inst_20378 = (inst_20376__$1 == null);
var state_20396__$1 = (function (){var statearr_20398 = state_20396;
(statearr_20398[(9)] = inst_20377);

(statearr_20398[(7)] = inst_20376__$1);

(statearr_20398[(8)] = inst_20375__$1);

return statearr_20398;
})();
if(cljs.core.truth_(inst_20378)){
var statearr_20399_21185 = state_20396__$1;
(statearr_20399_21185[(1)] = (8));

} else {
var statearr_20400_21186 = state_20396__$1;
(statearr_20400_21186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (1))){
var inst_20365 = cljs.core.vec(chs);
var inst_20366 = inst_20365;
var state_20396__$1 = (function (){var statearr_20401 = state_20396;
(statearr_20401[(10)] = inst_20366);

return statearr_20401;
})();
var statearr_20402_21187 = state_20396__$1;
(statearr_20402_21187[(2)] = null);

(statearr_20402_21187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (4))){
var inst_20366 = (state_20396[(10)]);
var state_20396__$1 = state_20396;
return cljs.core.async.ioc_alts_BANG_(state_20396__$1,(7),inst_20366);
} else {
if((state_val_20397 === (6))){
var inst_20392 = (state_20396[(2)]);
var state_20396__$1 = state_20396;
var statearr_20403_21188 = state_20396__$1;
(statearr_20403_21188[(2)] = inst_20392);

(statearr_20403_21188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (3))){
var inst_20394 = (state_20396[(2)]);
var state_20396__$1 = state_20396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20396__$1,inst_20394);
} else {
if((state_val_20397 === (2))){
var inst_20366 = (state_20396[(10)]);
var inst_20368 = cljs.core.count(inst_20366);
var inst_20369 = (inst_20368 > (0));
var state_20396__$1 = state_20396;
if(cljs.core.truth_(inst_20369)){
var statearr_20405_21222 = state_20396__$1;
(statearr_20405_21222[(1)] = (4));

} else {
var statearr_20406_21223 = state_20396__$1;
(statearr_20406_21223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (11))){
var inst_20366 = (state_20396[(10)]);
var inst_20385 = (state_20396[(2)]);
var tmp20404 = inst_20366;
var inst_20366__$1 = tmp20404;
var state_20396__$1 = (function (){var statearr_20407 = state_20396;
(statearr_20407[(11)] = inst_20385);

(statearr_20407[(10)] = inst_20366__$1);

return statearr_20407;
})();
var statearr_20408_21224 = state_20396__$1;
(statearr_20408_21224[(2)] = null);

(statearr_20408_21224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (9))){
var inst_20376 = (state_20396[(7)]);
var state_20396__$1 = state_20396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20396__$1,(11),out,inst_20376);
} else {
if((state_val_20397 === (5))){
var inst_20390 = cljs.core.async.close_BANG_(out);
var state_20396__$1 = state_20396;
var statearr_20409_21225 = state_20396__$1;
(statearr_20409_21225[(2)] = inst_20390);

(statearr_20409_21225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (10))){
var inst_20388 = (state_20396[(2)]);
var state_20396__$1 = state_20396;
var statearr_20410_21226 = state_20396__$1;
(statearr_20410_21226[(2)] = inst_20388);

(statearr_20410_21226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20397 === (8))){
var inst_20377 = (state_20396[(9)]);
var inst_20366 = (state_20396[(10)]);
var inst_20376 = (state_20396[(7)]);
var inst_20375 = (state_20396[(8)]);
var inst_20380 = (function (){var cs = inst_20366;
var vec__20371 = inst_20375;
var v = inst_20376;
var c = inst_20377;
return (function (p1__20362_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20362_SHARP_);
});
})();
var inst_20381 = cljs.core.filterv(inst_20380,inst_20366);
var inst_20366__$1 = inst_20381;
var state_20396__$1 = (function (){var statearr_20411 = state_20396;
(statearr_20411[(10)] = inst_20366__$1);

return statearr_20411;
})();
var statearr_20412_21227 = state_20396__$1;
(statearr_20412_21227[(2)] = null);

(statearr_20412_21227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20413[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20413[(1)] = (1));

return statearr_20413;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20396){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20396);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20414){var ex__18622__auto__ = e20414;
var statearr_20415_21228 = state_20396;
(statearr_20415_21228[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20396[(4)]))){
var statearr_20416_21229 = state_20396;
(statearr_20416_21229[(1)] = cljs.core.first((state_20396[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21230 = state_20396;
state_20396 = G__21230;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20417 = f__18699__auto__();
(statearr_20417[(6)] = c__18698__auto___21184);

return statearr_20417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20419 = arguments.length;
switch (G__20419) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18698__auto___21232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20443){
var state_val_20444 = (state_20443[(1)]);
if((state_val_20444 === (7))){
var inst_20425 = (state_20443[(7)]);
var inst_20425__$1 = (state_20443[(2)]);
var inst_20426 = (inst_20425__$1 == null);
var inst_20427 = cljs.core.not(inst_20426);
var state_20443__$1 = (function (){var statearr_20445 = state_20443;
(statearr_20445[(7)] = inst_20425__$1);

return statearr_20445;
})();
if(inst_20427){
var statearr_20446_21233 = state_20443__$1;
(statearr_20446_21233[(1)] = (8));

} else {
var statearr_20447_21234 = state_20443__$1;
(statearr_20447_21234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (1))){
var inst_20420 = (0);
var state_20443__$1 = (function (){var statearr_20448 = state_20443;
(statearr_20448[(8)] = inst_20420);

return statearr_20448;
})();
var statearr_20449_21235 = state_20443__$1;
(statearr_20449_21235[(2)] = null);

(statearr_20449_21235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (4))){
var state_20443__$1 = state_20443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20443__$1,(7),ch);
} else {
if((state_val_20444 === (6))){
var inst_20438 = (state_20443[(2)]);
var state_20443__$1 = state_20443;
var statearr_20450_21236 = state_20443__$1;
(statearr_20450_21236[(2)] = inst_20438);

(statearr_20450_21236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (3))){
var inst_20440 = (state_20443[(2)]);
var inst_20441 = cljs.core.async.close_BANG_(out);
var state_20443__$1 = (function (){var statearr_20451 = state_20443;
(statearr_20451[(9)] = inst_20440);

return statearr_20451;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20443__$1,inst_20441);
} else {
if((state_val_20444 === (2))){
var inst_20420 = (state_20443[(8)]);
var inst_20422 = (inst_20420 < n);
var state_20443__$1 = state_20443;
if(cljs.core.truth_(inst_20422)){
var statearr_20452_21237 = state_20443__$1;
(statearr_20452_21237[(1)] = (4));

} else {
var statearr_20453_21238 = state_20443__$1;
(statearr_20453_21238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (11))){
var inst_20420 = (state_20443[(8)]);
var inst_20430 = (state_20443[(2)]);
var inst_20431 = (inst_20420 + (1));
var inst_20420__$1 = inst_20431;
var state_20443__$1 = (function (){var statearr_20454 = state_20443;
(statearr_20454[(8)] = inst_20420__$1);

(statearr_20454[(10)] = inst_20430);

return statearr_20454;
})();
var statearr_20455_21239 = state_20443__$1;
(statearr_20455_21239[(2)] = null);

(statearr_20455_21239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (9))){
var state_20443__$1 = state_20443;
var statearr_20456_21240 = state_20443__$1;
(statearr_20456_21240[(2)] = null);

(statearr_20456_21240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (5))){
var state_20443__$1 = state_20443;
var statearr_20457_21241 = state_20443__$1;
(statearr_20457_21241[(2)] = null);

(statearr_20457_21241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (10))){
var inst_20435 = (state_20443[(2)]);
var state_20443__$1 = state_20443;
var statearr_20458_21242 = state_20443__$1;
(statearr_20458_21242[(2)] = inst_20435);

(statearr_20458_21242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20444 === (8))){
var inst_20425 = (state_20443[(7)]);
var state_20443__$1 = state_20443;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20443__$1,(11),out,inst_20425);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20459 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20459[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20459[(1)] = (1));

return statearr_20459;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20443){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20443);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20460){var ex__18622__auto__ = e20460;
var statearr_20461_21243 = state_20443;
(statearr_20461_21243[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20443[(4)]))){
var statearr_20462_21244 = state_20443;
(statearr_20462_21244[(1)] = cljs.core.first((state_20443[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21245 = state_20443;
state_20443 = G__21245;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20443){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20463 = f__18699__auto__();
(statearr_20463[(6)] = c__18698__auto___21232);

return statearr_20463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20468 = (function (f,ch,meta20466,_,fn1,meta20469){
this.f = f;
this.ch = ch;
this.meta20466 = meta20466;
this._ = _;
this.fn1 = fn1;
this.meta20469 = meta20469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20470,meta20469__$1){
var self__ = this;
var _20470__$1 = this;
return (new cljs.core.async.t_cljs$core$async20468(self__.f,self__.ch,self__.meta20466,self__._,self__.fn1,meta20469__$1));
}));

(cljs.core.async.t_cljs$core$async20468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20470){
var self__ = this;
var _20470__$1 = this;
return self__.meta20469;
}));

(cljs.core.async.t_cljs$core$async20468.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20464_SHARP_){
var G__20471 = (((p1__20464_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20464_SHARP_) : self__.f.call(null,p1__20464_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20471) : f1.call(null,G__20471));
});
}));

(cljs.core.async.t_cljs$core$async20468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20466","meta20466",1773169358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20465","cljs.core.async/t_cljs$core$async20465",-1578954783,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20469","meta20469",638221966,null)], null);
}));

(cljs.core.async.t_cljs$core$async20468.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20468");

(cljs.core.async.t_cljs$core$async20468.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20468");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20468.
 */
cljs.core.async.__GT_t_cljs$core$async20468 = (function cljs$core$async$__GT_t_cljs$core$async20468(f,ch,meta20466,_,fn1,meta20469){
return (new cljs.core.async.t_cljs$core$async20468(f,ch,meta20466,_,fn1,meta20469));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20465 = (function (f,ch,meta20466){
this.f = f;
this.ch = ch;
this.meta20466 = meta20466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20467,meta20466__$1){
var self__ = this;
var _20467__$1 = this;
return (new cljs.core.async.t_cljs$core$async20465(self__.f,self__.ch,meta20466__$1));
}));

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20467){
var self__ = this;
var _20467__$1 = this;
return self__.meta20466;
}));

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20468(self__.f,self__.ch,self__.meta20466,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20472 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20472) : self__.f.call(null,G__20472));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20466","meta20466",1773169358,null)], null);
}));

(cljs.core.async.t_cljs$core$async20465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20465");

(cljs.core.async.t_cljs$core$async20465.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20465.
 */
cljs.core.async.__GT_t_cljs$core$async20465 = (function cljs$core$async$__GT_t_cljs$core$async20465(f,ch,meta20466){
return (new cljs.core.async.t_cljs$core$async20465(f,ch,meta20466));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20465(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20473 = (function (f,ch,meta20474){
this.f = f;
this.ch = ch;
this.meta20474 = meta20474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20475,meta20474__$1){
var self__ = this;
var _20475__$1 = this;
return (new cljs.core.async.t_cljs$core$async20473(self__.f,self__.ch,meta20474__$1));
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20475){
var self__ = this;
var _20475__$1 = this;
return self__.meta20474;
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20474","meta20474",2082269440,null)], null);
}));

(cljs.core.async.t_cljs$core$async20473.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20473");

(cljs.core.async.t_cljs$core$async20473.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20473");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20473.
 */
cljs.core.async.__GT_t_cljs$core$async20473 = (function cljs$core$async$__GT_t_cljs$core$async20473(f,ch,meta20474){
return (new cljs.core.async.t_cljs$core$async20473(f,ch,meta20474));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20473(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20476 = (function (p,ch,meta20477){
this.p = p;
this.ch = ch;
this.meta20477 = meta20477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20478,meta20477__$1){
var self__ = this;
var _20478__$1 = this;
return (new cljs.core.async.t_cljs$core$async20476(self__.p,self__.ch,meta20477__$1));
}));

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20478){
var self__ = this;
var _20478__$1 = this;
return self__.meta20477;
}));

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20476.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20477","meta20477",334941965,null)], null);
}));

(cljs.core.async.t_cljs$core$async20476.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20476");

(cljs.core.async.t_cljs$core$async20476.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20476");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20476.
 */
cljs.core.async.__GT_t_cljs$core$async20476 = (function cljs$core$async$__GT_t_cljs$core$async20476(p,ch,meta20477){
return (new cljs.core.async.t_cljs$core$async20476(p,ch,meta20477));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20476(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20480 = arguments.length;
switch (G__20480) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18698__auto___21252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20501){
var state_val_20502 = (state_20501[(1)]);
if((state_val_20502 === (7))){
var inst_20497 = (state_20501[(2)]);
var state_20501__$1 = state_20501;
var statearr_20503_21253 = state_20501__$1;
(statearr_20503_21253[(2)] = inst_20497);

(statearr_20503_21253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (1))){
var state_20501__$1 = state_20501;
var statearr_20504_21261 = state_20501__$1;
(statearr_20504_21261[(2)] = null);

(statearr_20504_21261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (4))){
var inst_20483 = (state_20501[(7)]);
var inst_20483__$1 = (state_20501[(2)]);
var inst_20484 = (inst_20483__$1 == null);
var state_20501__$1 = (function (){var statearr_20505 = state_20501;
(statearr_20505[(7)] = inst_20483__$1);

return statearr_20505;
})();
if(cljs.core.truth_(inst_20484)){
var statearr_20506_21262 = state_20501__$1;
(statearr_20506_21262[(1)] = (5));

} else {
var statearr_20507_21263 = state_20501__$1;
(statearr_20507_21263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (6))){
var inst_20483 = (state_20501[(7)]);
var inst_20488 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20483) : p.call(null,inst_20483));
var state_20501__$1 = state_20501;
if(cljs.core.truth_(inst_20488)){
var statearr_20508_21264 = state_20501__$1;
(statearr_20508_21264[(1)] = (8));

} else {
var statearr_20509_21265 = state_20501__$1;
(statearr_20509_21265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (3))){
var inst_20499 = (state_20501[(2)]);
var state_20501__$1 = state_20501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20501__$1,inst_20499);
} else {
if((state_val_20502 === (2))){
var state_20501__$1 = state_20501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20501__$1,(4),ch);
} else {
if((state_val_20502 === (11))){
var inst_20491 = (state_20501[(2)]);
var state_20501__$1 = state_20501;
var statearr_20510_21268 = state_20501__$1;
(statearr_20510_21268[(2)] = inst_20491);

(statearr_20510_21268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (9))){
var state_20501__$1 = state_20501;
var statearr_20511_21269 = state_20501__$1;
(statearr_20511_21269[(2)] = null);

(statearr_20511_21269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (5))){
var inst_20486 = cljs.core.async.close_BANG_(out);
var state_20501__$1 = state_20501;
var statearr_20512_21272 = state_20501__$1;
(statearr_20512_21272[(2)] = inst_20486);

(statearr_20512_21272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (10))){
var inst_20494 = (state_20501[(2)]);
var state_20501__$1 = (function (){var statearr_20513 = state_20501;
(statearr_20513[(8)] = inst_20494);

return statearr_20513;
})();
var statearr_20514_21273 = state_20501__$1;
(statearr_20514_21273[(2)] = null);

(statearr_20514_21273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20502 === (8))){
var inst_20483 = (state_20501[(7)]);
var state_20501__$1 = state_20501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20501__$1,(11),out,inst_20483);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20515 = [null,null,null,null,null,null,null,null,null];
(statearr_20515[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20515[(1)] = (1));

return statearr_20515;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20501){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20501);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20516){var ex__18622__auto__ = e20516;
var statearr_20517_21274 = state_20501;
(statearr_20517_21274[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20501[(4)]))){
var statearr_20518_21275 = state_20501;
(statearr_20518_21275[(1)] = cljs.core.first((state_20501[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21279 = state_20501;
state_20501 = G__21279;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20519 = f__18699__auto__();
(statearr_20519[(6)] = c__18698__auto___21252);

return statearr_20519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20521 = arguments.length;
switch (G__20521) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18698__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20583){
var state_val_20584 = (state_20583[(1)]);
if((state_val_20584 === (7))){
var inst_20579 = (state_20583[(2)]);
var state_20583__$1 = state_20583;
var statearr_20585_21309 = state_20583__$1;
(statearr_20585_21309[(2)] = inst_20579);

(statearr_20585_21309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (20))){
var inst_20549 = (state_20583[(7)]);
var inst_20560 = (state_20583[(2)]);
var inst_20561 = cljs.core.next(inst_20549);
var inst_20535 = inst_20561;
var inst_20536 = null;
var inst_20537 = (0);
var inst_20538 = (0);
var state_20583__$1 = (function (){var statearr_20586 = state_20583;
(statearr_20586[(8)] = inst_20536);

(statearr_20586[(9)] = inst_20560);

(statearr_20586[(10)] = inst_20537);

(statearr_20586[(11)] = inst_20538);

(statearr_20586[(12)] = inst_20535);

return statearr_20586;
})();
var statearr_20587_21310 = state_20583__$1;
(statearr_20587_21310[(2)] = null);

(statearr_20587_21310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (1))){
var state_20583__$1 = state_20583;
var statearr_20588_21311 = state_20583__$1;
(statearr_20588_21311[(2)] = null);

(statearr_20588_21311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (4))){
var inst_20524 = (state_20583[(13)]);
var inst_20524__$1 = (state_20583[(2)]);
var inst_20525 = (inst_20524__$1 == null);
var state_20583__$1 = (function (){var statearr_20589 = state_20583;
(statearr_20589[(13)] = inst_20524__$1);

return statearr_20589;
})();
if(cljs.core.truth_(inst_20525)){
var statearr_20590_21312 = state_20583__$1;
(statearr_20590_21312[(1)] = (5));

} else {
var statearr_20591_21313 = state_20583__$1;
(statearr_20591_21313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (15))){
var state_20583__$1 = state_20583;
var statearr_20595_21314 = state_20583__$1;
(statearr_20595_21314[(2)] = null);

(statearr_20595_21314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (21))){
var state_20583__$1 = state_20583;
var statearr_20596_21315 = state_20583__$1;
(statearr_20596_21315[(2)] = null);

(statearr_20596_21315[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (13))){
var inst_20536 = (state_20583[(8)]);
var inst_20537 = (state_20583[(10)]);
var inst_20538 = (state_20583[(11)]);
var inst_20535 = (state_20583[(12)]);
var inst_20545 = (state_20583[(2)]);
var inst_20546 = (inst_20538 + (1));
var tmp20592 = inst_20536;
var tmp20593 = inst_20537;
var tmp20594 = inst_20535;
var inst_20535__$1 = tmp20594;
var inst_20536__$1 = tmp20592;
var inst_20537__$1 = tmp20593;
var inst_20538__$1 = inst_20546;
var state_20583__$1 = (function (){var statearr_20597 = state_20583;
(statearr_20597[(8)] = inst_20536__$1);

(statearr_20597[(14)] = inst_20545);

(statearr_20597[(10)] = inst_20537__$1);

(statearr_20597[(11)] = inst_20538__$1);

(statearr_20597[(12)] = inst_20535__$1);

return statearr_20597;
})();
var statearr_20598_21316 = state_20583__$1;
(statearr_20598_21316[(2)] = null);

(statearr_20598_21316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (22))){
var state_20583__$1 = state_20583;
var statearr_20599_21317 = state_20583__$1;
(statearr_20599_21317[(2)] = null);

(statearr_20599_21317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (6))){
var inst_20524 = (state_20583[(13)]);
var inst_20533 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20524) : f.call(null,inst_20524));
var inst_20534 = cljs.core.seq(inst_20533);
var inst_20535 = inst_20534;
var inst_20536 = null;
var inst_20537 = (0);
var inst_20538 = (0);
var state_20583__$1 = (function (){var statearr_20600 = state_20583;
(statearr_20600[(8)] = inst_20536);

(statearr_20600[(10)] = inst_20537);

(statearr_20600[(11)] = inst_20538);

(statearr_20600[(12)] = inst_20535);

return statearr_20600;
})();
var statearr_20601_21318 = state_20583__$1;
(statearr_20601_21318[(2)] = null);

(statearr_20601_21318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (17))){
var inst_20549 = (state_20583[(7)]);
var inst_20553 = cljs.core.chunk_first(inst_20549);
var inst_20554 = cljs.core.chunk_rest(inst_20549);
var inst_20555 = cljs.core.count(inst_20553);
var inst_20535 = inst_20554;
var inst_20536 = inst_20553;
var inst_20537 = inst_20555;
var inst_20538 = (0);
var state_20583__$1 = (function (){var statearr_20602 = state_20583;
(statearr_20602[(8)] = inst_20536);

(statearr_20602[(10)] = inst_20537);

(statearr_20602[(11)] = inst_20538);

(statearr_20602[(12)] = inst_20535);

return statearr_20602;
})();
var statearr_20603_21319 = state_20583__$1;
(statearr_20603_21319[(2)] = null);

(statearr_20603_21319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (3))){
var inst_20581 = (state_20583[(2)]);
var state_20583__$1 = state_20583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20583__$1,inst_20581);
} else {
if((state_val_20584 === (12))){
var inst_20569 = (state_20583[(2)]);
var state_20583__$1 = state_20583;
var statearr_20604_21320 = state_20583__$1;
(statearr_20604_21320[(2)] = inst_20569);

(statearr_20604_21320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (2))){
var state_20583__$1 = state_20583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20583__$1,(4),in$);
} else {
if((state_val_20584 === (23))){
var inst_20577 = (state_20583[(2)]);
var state_20583__$1 = state_20583;
var statearr_20605_21321 = state_20583__$1;
(statearr_20605_21321[(2)] = inst_20577);

(statearr_20605_21321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (19))){
var inst_20564 = (state_20583[(2)]);
var state_20583__$1 = state_20583;
var statearr_20606_21322 = state_20583__$1;
(statearr_20606_21322[(2)] = inst_20564);

(statearr_20606_21322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (11))){
var inst_20535 = (state_20583[(12)]);
var inst_20549 = (state_20583[(7)]);
var inst_20549__$1 = cljs.core.seq(inst_20535);
var state_20583__$1 = (function (){var statearr_20607 = state_20583;
(statearr_20607[(7)] = inst_20549__$1);

return statearr_20607;
})();
if(inst_20549__$1){
var statearr_20608_21323 = state_20583__$1;
(statearr_20608_21323[(1)] = (14));

} else {
var statearr_20609_21324 = state_20583__$1;
(statearr_20609_21324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (9))){
var inst_20571 = (state_20583[(2)]);
var inst_20572 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20583__$1 = (function (){var statearr_20610 = state_20583;
(statearr_20610[(15)] = inst_20571);

return statearr_20610;
})();
if(cljs.core.truth_(inst_20572)){
var statearr_20611_21325 = state_20583__$1;
(statearr_20611_21325[(1)] = (21));

} else {
var statearr_20612_21326 = state_20583__$1;
(statearr_20612_21326[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (5))){
var inst_20527 = cljs.core.async.close_BANG_(out);
var state_20583__$1 = state_20583;
var statearr_20613_21327 = state_20583__$1;
(statearr_20613_21327[(2)] = inst_20527);

(statearr_20613_21327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (14))){
var inst_20549 = (state_20583[(7)]);
var inst_20551 = cljs.core.chunked_seq_QMARK_(inst_20549);
var state_20583__$1 = state_20583;
if(inst_20551){
var statearr_20614_21328 = state_20583__$1;
(statearr_20614_21328[(1)] = (17));

} else {
var statearr_20615_21329 = state_20583__$1;
(statearr_20615_21329[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (16))){
var inst_20567 = (state_20583[(2)]);
var state_20583__$1 = state_20583;
var statearr_20616_21330 = state_20583__$1;
(statearr_20616_21330[(2)] = inst_20567);

(statearr_20616_21330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20584 === (10))){
var inst_20536 = (state_20583[(8)]);
var inst_20538 = (state_20583[(11)]);
var inst_20543 = cljs.core._nth(inst_20536,inst_20538);
var state_20583__$1 = state_20583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20583__$1,(13),out,inst_20543);
} else {
if((state_val_20584 === (18))){
var inst_20549 = (state_20583[(7)]);
var inst_20558 = cljs.core.first(inst_20549);
var state_20583__$1 = state_20583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20583__$1,(20),out,inst_20558);
} else {
if((state_val_20584 === (8))){
var inst_20537 = (state_20583[(10)]);
var inst_20538 = (state_20583[(11)]);
var inst_20540 = (inst_20538 < inst_20537);
var inst_20541 = inst_20540;
var state_20583__$1 = state_20583;
if(cljs.core.truth_(inst_20541)){
var statearr_20617_21332 = state_20583__$1;
(statearr_20617_21332[(1)] = (10));

} else {
var statearr_20618_21333 = state_20583__$1;
(statearr_20618_21333[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18619__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18619__auto____0 = (function (){
var statearr_20619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20619[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18619__auto__);

(statearr_20619[(1)] = (1));

return statearr_20619;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18619__auto____1 = (function (state_20583){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20583);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20620){var ex__18622__auto__ = e20620;
var statearr_20621_21338 = state_20583;
(statearr_20621_21338[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20583[(4)]))){
var statearr_20622_21339 = state_20583;
(statearr_20622_21339[(1)] = cljs.core.first((state_20583[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21340 = state_20583;
state_20583 = G__21340;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18619__auto__ = function(state_20583){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18619__auto____1.call(this,state_20583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18619__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18619__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20623 = f__18699__auto__();
(statearr_20623[(6)] = c__18698__auto__);

return statearr_20623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));

return c__18698__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__20625 = arguments.length;
switch (G__20625) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__20627 = arguments.length;
switch (G__20627) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__20629 = arguments.length;
switch (G__20629) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18698__auto___21344 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20653){
var state_val_20654 = (state_20653[(1)]);
if((state_val_20654 === (7))){
var inst_20648 = (state_20653[(2)]);
var state_20653__$1 = state_20653;
var statearr_20655_21345 = state_20653__$1;
(statearr_20655_21345[(2)] = inst_20648);

(statearr_20655_21345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20654 === (1))){
var inst_20630 = null;
var state_20653__$1 = (function (){var statearr_20656 = state_20653;
(statearr_20656[(7)] = inst_20630);

return statearr_20656;
})();
var statearr_20657_21346 = state_20653__$1;
(statearr_20657_21346[(2)] = null);

(statearr_20657_21346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20654 === (4))){
var inst_20633 = (state_20653[(8)]);
var inst_20633__$1 = (state_20653[(2)]);
var inst_20634 = (inst_20633__$1 == null);
var inst_20635 = cljs.core.not(inst_20634);
var state_20653__$1 = (function (){var statearr_20658 = state_20653;
(statearr_20658[(8)] = inst_20633__$1);

return statearr_20658;
})();
if(inst_20635){
var statearr_20659_21347 = state_20653__$1;
(statearr_20659_21347[(1)] = (5));

} else {
var statearr_20660_21348 = state_20653__$1;
(statearr_20660_21348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20654 === (6))){
var state_20653__$1 = state_20653;
var statearr_20661_21349 = state_20653__$1;
(statearr_20661_21349[(2)] = null);

(statearr_20661_21349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20654 === (3))){
var inst_20650 = (state_20653[(2)]);
var inst_20651 = cljs.core.async.close_BANG_(out);
var state_20653__$1 = (function (){var statearr_20662 = state_20653;
(statearr_20662[(9)] = inst_20650);

return statearr_20662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20653__$1,inst_20651);
} else {
if((state_val_20654 === (2))){
var state_20653__$1 = state_20653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20653__$1,(4),ch);
} else {
if((state_val_20654 === (11))){
var inst_20633 = (state_20653[(8)]);
var inst_20642 = (state_20653[(2)]);
var inst_20630 = inst_20633;
var state_20653__$1 = (function (){var statearr_20663 = state_20653;
(statearr_20663[(10)] = inst_20642);

(statearr_20663[(7)] = inst_20630);

return statearr_20663;
})();
var statearr_20664_21352 = state_20653__$1;
(statearr_20664_21352[(2)] = null);

(statearr_20664_21352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20654 === (9))){
var inst_20633 = (state_20653[(8)]);
var state_20653__$1 = state_20653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20653__$1,(11),out,inst_20633);
} else {
if((state_val_20654 === (5))){
var inst_20633 = (state_20653[(8)]);
var inst_20630 = (state_20653[(7)]);
var inst_20637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20633,inst_20630);
var state_20653__$1 = state_20653;
if(inst_20637){
var statearr_20666_21353 = state_20653__$1;
(statearr_20666_21353[(1)] = (8));

} else {
var statearr_20667_21354 = state_20653__$1;
(statearr_20667_21354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20654 === (10))){
var inst_20645 = (state_20653[(2)]);
var state_20653__$1 = state_20653;
var statearr_20668_21355 = state_20653__$1;
(statearr_20668_21355[(2)] = inst_20645);

(statearr_20668_21355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20654 === (8))){
var inst_20630 = (state_20653[(7)]);
var tmp20665 = inst_20630;
var inst_20630__$1 = tmp20665;
var state_20653__$1 = (function (){var statearr_20669 = state_20653;
(statearr_20669[(7)] = inst_20630__$1);

return statearr_20669;
})();
var statearr_20670_21356 = state_20653__$1;
(statearr_20670_21356[(2)] = null);

(statearr_20670_21356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20671[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20671[(1)] = (1));

return statearr_20671;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20653){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20653);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20672){var ex__18622__auto__ = e20672;
var statearr_20673_21357 = state_20653;
(statearr_20673_21357[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20653[(4)]))){
var statearr_20674_21358 = state_20653;
(statearr_20674_21358[(1)] = cljs.core.first((state_20653[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21360 = state_20653;
state_20653 = G__21360;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20675 = f__18699__auto__();
(statearr_20675[(6)] = c__18698__auto___21344);

return statearr_20675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20677 = arguments.length;
switch (G__20677) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18698__auto___21363 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20715){
var state_val_20716 = (state_20715[(1)]);
if((state_val_20716 === (7))){
var inst_20711 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
var statearr_20717_21364 = state_20715__$1;
(statearr_20717_21364[(2)] = inst_20711);

(statearr_20717_21364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (1))){
var inst_20678 = (new Array(n));
var inst_20679 = inst_20678;
var inst_20680 = (0);
var state_20715__$1 = (function (){var statearr_20718 = state_20715;
(statearr_20718[(7)] = inst_20680);

(statearr_20718[(8)] = inst_20679);

return statearr_20718;
})();
var statearr_20719_21365 = state_20715__$1;
(statearr_20719_21365[(2)] = null);

(statearr_20719_21365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (4))){
var inst_20683 = (state_20715[(9)]);
var inst_20683__$1 = (state_20715[(2)]);
var inst_20684 = (inst_20683__$1 == null);
var inst_20685 = cljs.core.not(inst_20684);
var state_20715__$1 = (function (){var statearr_20720 = state_20715;
(statearr_20720[(9)] = inst_20683__$1);

return statearr_20720;
})();
if(inst_20685){
var statearr_20721_21366 = state_20715__$1;
(statearr_20721_21366[(1)] = (5));

} else {
var statearr_20722_21367 = state_20715__$1;
(statearr_20722_21367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (15))){
var inst_20705 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
var statearr_20723_21368 = state_20715__$1;
(statearr_20723_21368[(2)] = inst_20705);

(statearr_20723_21368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (13))){
var state_20715__$1 = state_20715;
var statearr_20724_21369 = state_20715__$1;
(statearr_20724_21369[(2)] = null);

(statearr_20724_21369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (6))){
var inst_20680 = (state_20715[(7)]);
var inst_20701 = (inst_20680 > (0));
var state_20715__$1 = state_20715;
if(cljs.core.truth_(inst_20701)){
var statearr_20725_21373 = state_20715__$1;
(statearr_20725_21373[(1)] = (12));

} else {
var statearr_20726_21374 = state_20715__$1;
(statearr_20726_21374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (3))){
var inst_20713 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20715__$1,inst_20713);
} else {
if((state_val_20716 === (12))){
var inst_20679 = (state_20715[(8)]);
var inst_20703 = cljs.core.vec(inst_20679);
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20715__$1,(15),out,inst_20703);
} else {
if((state_val_20716 === (2))){
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20715__$1,(4),ch);
} else {
if((state_val_20716 === (11))){
var inst_20695 = (state_20715[(2)]);
var inst_20696 = (new Array(n));
var inst_20679 = inst_20696;
var inst_20680 = (0);
var state_20715__$1 = (function (){var statearr_20727 = state_20715;
(statearr_20727[(7)] = inst_20680);

(statearr_20727[(8)] = inst_20679);

(statearr_20727[(10)] = inst_20695);

return statearr_20727;
})();
var statearr_20728_21379 = state_20715__$1;
(statearr_20728_21379[(2)] = null);

(statearr_20728_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (9))){
var inst_20679 = (state_20715[(8)]);
var inst_20693 = cljs.core.vec(inst_20679);
var state_20715__$1 = state_20715;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20715__$1,(11),out,inst_20693);
} else {
if((state_val_20716 === (5))){
var inst_20688 = (state_20715[(11)]);
var inst_20680 = (state_20715[(7)]);
var inst_20679 = (state_20715[(8)]);
var inst_20683 = (state_20715[(9)]);
var inst_20687 = (inst_20679[inst_20680] = inst_20683);
var inst_20688__$1 = (inst_20680 + (1));
var inst_20689 = (inst_20688__$1 < n);
var state_20715__$1 = (function (){var statearr_20729 = state_20715;
(statearr_20729[(11)] = inst_20688__$1);

(statearr_20729[(12)] = inst_20687);

return statearr_20729;
})();
if(cljs.core.truth_(inst_20689)){
var statearr_20730_21380 = state_20715__$1;
(statearr_20730_21380[(1)] = (8));

} else {
var statearr_20731_21381 = state_20715__$1;
(statearr_20731_21381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (14))){
var inst_20708 = (state_20715[(2)]);
var inst_20709 = cljs.core.async.close_BANG_(out);
var state_20715__$1 = (function (){var statearr_20733 = state_20715;
(statearr_20733[(13)] = inst_20708);

return statearr_20733;
})();
var statearr_20734_21382 = state_20715__$1;
(statearr_20734_21382[(2)] = inst_20709);

(statearr_20734_21382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (10))){
var inst_20699 = (state_20715[(2)]);
var state_20715__$1 = state_20715;
var statearr_20735_21383 = state_20715__$1;
(statearr_20735_21383[(2)] = inst_20699);

(statearr_20735_21383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20716 === (8))){
var inst_20688 = (state_20715[(11)]);
var inst_20679 = (state_20715[(8)]);
var tmp20732 = inst_20679;
var inst_20679__$1 = tmp20732;
var inst_20680 = inst_20688;
var state_20715__$1 = (function (){var statearr_20736 = state_20715;
(statearr_20736[(7)] = inst_20680);

(statearr_20736[(8)] = inst_20679__$1);

return statearr_20736;
})();
var statearr_20737_21384 = state_20715__$1;
(statearr_20737_21384[(2)] = null);

(statearr_20737_21384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20738[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20738[(1)] = (1));

return statearr_20738;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20715){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20715);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20739){var ex__18622__auto__ = e20739;
var statearr_20740_21385 = state_20715;
(statearr_20740_21385[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20715[(4)]))){
var statearr_20741_21386 = state_20715;
(statearr_20741_21386[(1)] = cljs.core.first((state_20715[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21387 = state_20715;
state_20715 = G__21387;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20715){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20742 = f__18699__auto__();
(statearr_20742[(6)] = c__18698__auto___21363);

return statearr_20742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20744 = arguments.length;
switch (G__20744) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18698__auto___21389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18699__auto__ = (function (){var switch__18618__auto__ = (function (state_20789){
var state_val_20790 = (state_20789[(1)]);
if((state_val_20790 === (7))){
var inst_20785 = (state_20789[(2)]);
var state_20789__$1 = state_20789;
var statearr_20791_21390 = state_20789__$1;
(statearr_20791_21390[(2)] = inst_20785);

(statearr_20791_21390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (1))){
var inst_20745 = [];
var inst_20746 = inst_20745;
var inst_20747 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20789__$1 = (function (){var statearr_20792 = state_20789;
(statearr_20792[(7)] = inst_20747);

(statearr_20792[(8)] = inst_20746);

return statearr_20792;
})();
var statearr_20793_21391 = state_20789__$1;
(statearr_20793_21391[(2)] = null);

(statearr_20793_21391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (4))){
var inst_20750 = (state_20789[(9)]);
var inst_20750__$1 = (state_20789[(2)]);
var inst_20751 = (inst_20750__$1 == null);
var inst_20752 = cljs.core.not(inst_20751);
var state_20789__$1 = (function (){var statearr_20794 = state_20789;
(statearr_20794[(9)] = inst_20750__$1);

return statearr_20794;
})();
if(inst_20752){
var statearr_20795_21392 = state_20789__$1;
(statearr_20795_21392[(1)] = (5));

} else {
var statearr_20796_21395 = state_20789__$1;
(statearr_20796_21395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (15))){
var inst_20746 = (state_20789[(8)]);
var inst_20777 = cljs.core.vec(inst_20746);
var state_20789__$1 = state_20789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20789__$1,(18),out,inst_20777);
} else {
if((state_val_20790 === (13))){
var inst_20772 = (state_20789[(2)]);
var state_20789__$1 = state_20789;
var statearr_20797_21398 = state_20789__$1;
(statearr_20797_21398[(2)] = inst_20772);

(statearr_20797_21398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (6))){
var inst_20746 = (state_20789[(8)]);
var inst_20774 = inst_20746.length;
var inst_20775 = (inst_20774 > (0));
var state_20789__$1 = state_20789;
if(cljs.core.truth_(inst_20775)){
var statearr_20798_21402 = state_20789__$1;
(statearr_20798_21402[(1)] = (15));

} else {
var statearr_20799_21403 = state_20789__$1;
(statearr_20799_21403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (17))){
var inst_20782 = (state_20789[(2)]);
var inst_20783 = cljs.core.async.close_BANG_(out);
var state_20789__$1 = (function (){var statearr_20800 = state_20789;
(statearr_20800[(10)] = inst_20782);

return statearr_20800;
})();
var statearr_20801_21419 = state_20789__$1;
(statearr_20801_21419[(2)] = inst_20783);

(statearr_20801_21419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (3))){
var inst_20787 = (state_20789[(2)]);
var state_20789__$1 = state_20789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20789__$1,inst_20787);
} else {
if((state_val_20790 === (12))){
var inst_20746 = (state_20789[(8)]);
var inst_20765 = cljs.core.vec(inst_20746);
var state_20789__$1 = state_20789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20789__$1,(14),out,inst_20765);
} else {
if((state_val_20790 === (2))){
var state_20789__$1 = state_20789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20789__$1,(4),ch);
} else {
if((state_val_20790 === (11))){
var inst_20754 = (state_20789[(11)]);
var inst_20746 = (state_20789[(8)]);
var inst_20750 = (state_20789[(9)]);
var inst_20762 = inst_20746.push(inst_20750);
var tmp20802 = inst_20746;
var inst_20746__$1 = tmp20802;
var inst_20747 = inst_20754;
var state_20789__$1 = (function (){var statearr_20803 = state_20789;
(statearr_20803[(12)] = inst_20762);

(statearr_20803[(7)] = inst_20747);

(statearr_20803[(8)] = inst_20746__$1);

return statearr_20803;
})();
var statearr_20804_21420 = state_20789__$1;
(statearr_20804_21420[(2)] = null);

(statearr_20804_21420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (9))){
var inst_20747 = (state_20789[(7)]);
var inst_20758 = cljs.core.keyword_identical_QMARK_(inst_20747,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20789__$1 = state_20789;
var statearr_20805_21421 = state_20789__$1;
(statearr_20805_21421[(2)] = inst_20758);

(statearr_20805_21421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (5))){
var inst_20747 = (state_20789[(7)]);
var inst_20754 = (state_20789[(11)]);
var inst_20755 = (state_20789[(13)]);
var inst_20750 = (state_20789[(9)]);
var inst_20754__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20750) : f.call(null,inst_20750));
var inst_20755__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20754__$1,inst_20747);
var state_20789__$1 = (function (){var statearr_20806 = state_20789;
(statearr_20806[(11)] = inst_20754__$1);

(statearr_20806[(13)] = inst_20755__$1);

return statearr_20806;
})();
if(inst_20755__$1){
var statearr_20807_21426 = state_20789__$1;
(statearr_20807_21426[(1)] = (8));

} else {
var statearr_20808_21427 = state_20789__$1;
(statearr_20808_21427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (14))){
var inst_20754 = (state_20789[(11)]);
var inst_20750 = (state_20789[(9)]);
var inst_20767 = (state_20789[(2)]);
var inst_20768 = [];
var inst_20769 = inst_20768.push(inst_20750);
var inst_20746 = inst_20768;
var inst_20747 = inst_20754;
var state_20789__$1 = (function (){var statearr_20809 = state_20789;
(statearr_20809[(7)] = inst_20747);

(statearr_20809[(14)] = inst_20767);

(statearr_20809[(8)] = inst_20746);

(statearr_20809[(15)] = inst_20769);

return statearr_20809;
})();
var statearr_20810_21428 = state_20789__$1;
(statearr_20810_21428[(2)] = null);

(statearr_20810_21428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (16))){
var state_20789__$1 = state_20789;
var statearr_20811_21429 = state_20789__$1;
(statearr_20811_21429[(2)] = null);

(statearr_20811_21429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (10))){
var inst_20760 = (state_20789[(2)]);
var state_20789__$1 = state_20789;
if(cljs.core.truth_(inst_20760)){
var statearr_20812_21430 = state_20789__$1;
(statearr_20812_21430[(1)] = (11));

} else {
var statearr_20813_21431 = state_20789__$1;
(statearr_20813_21431[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (18))){
var inst_20779 = (state_20789[(2)]);
var state_20789__$1 = state_20789;
var statearr_20814_21432 = state_20789__$1;
(statearr_20814_21432[(2)] = inst_20779);

(statearr_20814_21432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20790 === (8))){
var inst_20755 = (state_20789[(13)]);
var state_20789__$1 = state_20789;
var statearr_20815_21433 = state_20789__$1;
(statearr_20815_21433[(2)] = inst_20755);

(statearr_20815_21433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__18619__auto__ = null;
var cljs$core$async$state_machine__18619__auto____0 = (function (){
var statearr_20816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20816[(0)] = cljs$core$async$state_machine__18619__auto__);

(statearr_20816[(1)] = (1));

return statearr_20816;
});
var cljs$core$async$state_machine__18619__auto____1 = (function (state_20789){
while(true){
var ret_value__18620__auto__ = (function (){try{while(true){
var result__18621__auto__ = switch__18618__auto__(state_20789);
if(cljs.core.keyword_identical_QMARK_(result__18621__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18621__auto__;
}
break;
}
}catch (e20817){var ex__18622__auto__ = e20817;
var statearr_20818_21434 = state_20789;
(statearr_20818_21434[(2)] = ex__18622__auto__);


if(cljs.core.seq((state_20789[(4)]))){
var statearr_20819_21435 = state_20789;
(statearr_20819_21435[(1)] = cljs.core.first((state_20789[(4)])));

} else {
throw ex__18622__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__18620__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21436 = state_20789;
state_20789 = G__21436;
continue;
} else {
return ret_value__18620__auto__;
}
break;
}
});
cljs$core$async$state_machine__18619__auto__ = function(state_20789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18619__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18619__auto____1.call(this,state_20789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18619__auto____0;
cljs$core$async$state_machine__18619__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18619__auto____1;
return cljs$core$async$state_machine__18619__auto__;
})()
})();
var state__18700__auto__ = (function (){var statearr_20820 = f__18699__auto__();
(statearr_20820[(6)] = c__18698__auto___21389);

return statearr_20820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18700__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
