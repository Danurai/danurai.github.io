// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38213 = arguments.length;
switch (G__38213) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38214 = (function (f,blockable,meta38215){
this.f = f;
this.blockable = blockable;
this.meta38215 = meta38215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async38214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38216,meta38215__$1){
var self__ = this;
var _38216__$1 = this;
return (new cljs.core.async.t_cljs$core$async38214(self__.f,self__.blockable,meta38215__$1));
});


cljs.core.async.t_cljs$core$async38214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38216){
var self__ = this;
var _38216__$1 = this;
return self__.meta38215;
});


cljs.core.async.t_cljs$core$async38214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async38214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});


cljs.core.async.t_cljs$core$async38214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38215","meta38215",-1105756035,null)], null);
});

cljs.core.async.t_cljs$core$async38214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38214";

cljs.core.async.t_cljs$core$async38214.cljs$lang$ctorPrWriter = (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async38214");
});

cljs.core.async.__GT_t_cljs$core$async38214 = (function cljs$core$async$__GT_t_cljs$core$async38214(f__$1,blockable__$1,meta38215){
return (new cljs.core.async.t_cljs$core$async38214(f__$1,blockable__$1,meta38215));
});

}

return (new cljs.core.async.t_cljs$core$async38214(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__38220 = arguments.length;
switch (G__38220) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38223 = arguments.length;
switch (G__38223) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__38226 = arguments.length;
switch (G__38226) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38228 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38228);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38228,ret){
return (function (){
return fn1.call(null,val_38228);
});})(val_38228,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38230 = arguments.length;
switch (G__38230) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29142__auto___38232 = n;
var x_38233 = (0);
while(true){
if((x_38233 < n__29142__auto___38232)){
(a[x_38233] = (0));

var G__38234 = (x_38233 + (1));
x_38233 = G__38234;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38235 = (i + (1));
i = G__38235;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38236 = (function (flag,meta38237){
this.flag = flag;
this.meta38237 = meta38237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async38236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38238,meta38237__$1){
var self__ = this;
var _38238__$1 = this;
return (new cljs.core.async.t_cljs$core$async38236(self__.flag,meta38237__$1));
});})(flag))
;


cljs.core.async.t_cljs$core$async38236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38238){
var self__ = this;
var _38238__$1 = this;
return self__.meta38237;
});})(flag))
;


cljs.core.async.t_cljs$core$async38236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;


cljs.core.async.t_cljs$core$async38236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;


cljs.core.async.t_cljs$core$async38236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38236.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38237","meta38237",-1612841201,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38236";

cljs.core.async.t_cljs$core$async38236.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async38236");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38236 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38236(flag__$1,meta38237){
return (new cljs.core.async.t_cljs$core$async38236(flag__$1,meta38237));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38236(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38239 = (function (flag,cb,meta38240){
this.flag = flag;
this.cb = cb;
this.meta38240 = meta38240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async38239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38241,meta38240__$1){
var self__ = this;
var _38241__$1 = this;
return (new cljs.core.async.t_cljs$core$async38239(self__.flag,self__.cb,meta38240__$1));
});


cljs.core.async.t_cljs$core$async38239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38241){
var self__ = this;
var _38241__$1 = this;
return self__.meta38240;
});


cljs.core.async.t_cljs$core$async38239.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38239.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});


cljs.core.async.t_cljs$core$async38239.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});


cljs.core.async.t_cljs$core$async38239.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38240","meta38240",-1269477064,null)], null);
});

cljs.core.async.t_cljs$core$async38239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38239";

cljs.core.async.t_cljs$core$async38239.cljs$lang$ctorPrWriter = (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async38239");
});

cljs.core.async.__GT_t_cljs$core$async38239 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38239(flag__$1,cb__$1,meta38240){
return (new cljs.core.async.t_cljs$core$async38239(flag__$1,cb__$1,meta38240));
});

}

return (new cljs.core.async.t_cljs$core$async38239(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38242_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38242_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38243_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38243_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28195__auto__ = wport;
if(cljs.core.truth_(or__28195__auto__)){
return or__28195__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38244 = (i + (1));
i = G__38244;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28195__auto__ = ret;
if(cljs.core.truth_(or__28195__auto__)){
return or__28195__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28183__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28183__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28183__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__29373__auto__ = [];
var len__29366__auto___38250 = arguments.length;
var i__29367__auto___38251 = (0);
while(true){
if((i__29367__auto___38251 < len__29366__auto___38250)){
args__29373__auto__.push((arguments[i__29367__auto___38251]));

var G__38252 = (i__29367__auto___38251 + (1));
i__29367__auto___38251 = G__38252;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((1) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29374__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38247){
var map__38248 = p__38247;
var map__38248__$1 = ((((!((map__38248 == null)))?((((map__38248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38248.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38248):map__38248);
var opts = map__38248__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38245){
var G__38246 = cljs.core.first.call(null,seq38245);
var seq38245__$1 = cljs.core.next.call(null,seq38245);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38246,seq38245__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__38254 = arguments.length;
switch (G__38254) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38167__auto___38300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___38300){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___38300){
return (function (state_38278){
var state_val_38279 = (state_38278[(1)]);
if((state_val_38279 === (7))){
var inst_38274 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
var statearr_38280_38301 = state_38278__$1;
(statearr_38280_38301[(2)] = inst_38274);

(statearr_38280_38301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (1))){
var state_38278__$1 = state_38278;
var statearr_38281_38302 = state_38278__$1;
(statearr_38281_38302[(2)] = null);

(statearr_38281_38302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (4))){
var inst_38257 = (state_38278[(7)]);
var inst_38257__$1 = (state_38278[(2)]);
var inst_38258 = (inst_38257__$1 == null);
var state_38278__$1 = (function (){var statearr_38282 = state_38278;
(statearr_38282[(7)] = inst_38257__$1);

return statearr_38282;
})();
if(cljs.core.truth_(inst_38258)){
var statearr_38283_38303 = state_38278__$1;
(statearr_38283_38303[(1)] = (5));

} else {
var statearr_38284_38304 = state_38278__$1;
(statearr_38284_38304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (13))){
var state_38278__$1 = state_38278;
var statearr_38285_38305 = state_38278__$1;
(statearr_38285_38305[(2)] = null);

(statearr_38285_38305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (6))){
var inst_38257 = (state_38278[(7)]);
var state_38278__$1 = state_38278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38278__$1,(11),to,inst_38257);
} else {
if((state_val_38279 === (3))){
var inst_38276 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38278__$1,inst_38276);
} else {
if((state_val_38279 === (12))){
var state_38278__$1 = state_38278;
var statearr_38286_38306 = state_38278__$1;
(statearr_38286_38306[(2)] = null);

(statearr_38286_38306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (2))){
var state_38278__$1 = state_38278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38278__$1,(4),from);
} else {
if((state_val_38279 === (11))){
var inst_38267 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
if(cljs.core.truth_(inst_38267)){
var statearr_38287_38307 = state_38278__$1;
(statearr_38287_38307[(1)] = (12));

} else {
var statearr_38288_38308 = state_38278__$1;
(statearr_38288_38308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (9))){
var state_38278__$1 = state_38278;
var statearr_38289_38309 = state_38278__$1;
(statearr_38289_38309[(2)] = null);

(statearr_38289_38309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (5))){
var state_38278__$1 = state_38278;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38290_38310 = state_38278__$1;
(statearr_38290_38310[(1)] = (8));

} else {
var statearr_38291_38311 = state_38278__$1;
(statearr_38291_38311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (14))){
var inst_38272 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
var statearr_38292_38312 = state_38278__$1;
(statearr_38292_38312[(2)] = inst_38272);

(statearr_38292_38312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (10))){
var inst_38264 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
var statearr_38293_38313 = state_38278__$1;
(statearr_38293_38313[(2)] = inst_38264);

(statearr_38293_38313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (8))){
var inst_38261 = cljs.core.async.close_BANG_.call(null,to);
var state_38278__$1 = state_38278;
var statearr_38294_38314 = state_38278__$1;
(statearr_38294_38314[(2)] = inst_38261);

(statearr_38294_38314[(1)] = (10));


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
});})(c__38167__auto___38300))
;
return ((function (switch__38079__auto__,c__38167__auto___38300){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_38295 = [null,null,null,null,null,null,null,null];
(statearr_38295[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_38295[(1)] = (1));

return statearr_38295;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_38278){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38296){if((e38296 instanceof Object)){
var ex__38083__auto__ = e38296;
var statearr_38297_38315 = state_38278;
(statearr_38297_38315[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38316 = state_38278;
state_38278 = G__38316;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_38278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_38278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___38300))
})();
var state__38169__auto__ = (function (){var statearr_38298 = f__38168__auto__.call(null);
(statearr_38298[(6)] = c__38167__auto___38300);

return statearr_38298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___38300))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__38317){
var vec__38318 = p__38317;
var v = cljs.core.nth.call(null,vec__38318,(0),null);
var p = cljs.core.nth.call(null,vec__38318,(1),null);
var job = vec__38318;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38167__auto___38489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___38489,res,vec__38318,v,p,job,jobs,results){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___38489,res,vec__38318,v,p,job,jobs,results){
return (function (state_38325){
var state_val_38326 = (state_38325[(1)]);
if((state_val_38326 === (1))){
var state_38325__$1 = state_38325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38325__$1,(2),res,v);
} else {
if((state_val_38326 === (2))){
var inst_38322 = (state_38325[(2)]);
var inst_38323 = cljs.core.async.close_BANG_.call(null,res);
var state_38325__$1 = (function (){var statearr_38327 = state_38325;
(statearr_38327[(7)] = inst_38322);

return statearr_38327;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38325__$1,inst_38323);
} else {
return null;
}
}
});})(c__38167__auto___38489,res,vec__38318,v,p,job,jobs,results))
;
return ((function (switch__38079__auto__,c__38167__auto___38489,res,vec__38318,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_38328 = [null,null,null,null,null,null,null,null];
(statearr_38328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_38328[(1)] = (1));

return statearr_38328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_38325){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38329){if((e38329 instanceof Object)){
var ex__38083__auto__ = e38329;
var statearr_38330_38490 = state_38325;
(statearr_38330_38490[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38491 = state_38325;
state_38325 = G__38491;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_38325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_38325);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___38489,res,vec__38318,v,p,job,jobs,results))
})();
var state__38169__auto__ = (function (){var statearr_38331 = f__38168__auto__.call(null);
(statearr_38331[(6)] = c__38167__auto___38489);

return statearr_38331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___38489,res,vec__38318,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38332){
var vec__38333 = p__38332;
var v = cljs.core.nth.call(null,vec__38333,(0),null);
var p = cljs.core.nth.call(null,vec__38333,(1),null);
var job = vec__38333;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29142__auto___38492 = n;
var __38493 = (0);
while(true){
if((__38493 < n__29142__auto___38492)){
var G__38336_38494 = type;
var G__38336_38495__$1 = (((G__38336_38494 instanceof cljs.core.Keyword))?G__38336_38494.fqn:null);
switch (G__38336_38495__$1) {
case "compute":
var c__38167__auto___38497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38493,c__38167__auto___38497,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (__38493,c__38167__auto___38497,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async){
return (function (state_38349){
var state_val_38350 = (state_38349[(1)]);
if((state_val_38350 === (1))){
var state_38349__$1 = state_38349;
var statearr_38351_38498 = state_38349__$1;
(statearr_38351_38498[(2)] = null);

(statearr_38351_38498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (2))){
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38349__$1,(4),jobs);
} else {
if((state_val_38350 === (3))){
var inst_38347 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38349__$1,inst_38347);
} else {
if((state_val_38350 === (4))){
var inst_38339 = (state_38349[(2)]);
var inst_38340 = process.call(null,inst_38339);
var state_38349__$1 = state_38349;
if(cljs.core.truth_(inst_38340)){
var statearr_38352_38499 = state_38349__$1;
(statearr_38352_38499[(1)] = (5));

} else {
var statearr_38353_38500 = state_38349__$1;
(statearr_38353_38500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (5))){
var state_38349__$1 = state_38349;
var statearr_38354_38501 = state_38349__$1;
(statearr_38354_38501[(2)] = null);

(statearr_38354_38501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (6))){
var state_38349__$1 = state_38349;
var statearr_38355_38502 = state_38349__$1;
(statearr_38355_38502[(2)] = null);

(statearr_38355_38502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38350 === (7))){
var inst_38345 = (state_38349[(2)]);
var state_38349__$1 = state_38349;
var statearr_38356_38503 = state_38349__$1;
(statearr_38356_38503[(2)] = inst_38345);

(statearr_38356_38503[(1)] = (3));


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
});})(__38493,c__38167__auto___38497,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async))
;
return ((function (__38493,switch__38079__auto__,c__38167__auto___38497,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_38357 = [null,null,null,null,null,null,null];
(statearr_38357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_38357[(1)] = (1));

return statearr_38357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_38349){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38358){if((e38358 instanceof Object)){
var ex__38083__auto__ = e38358;
var statearr_38359_38504 = state_38349;
(statearr_38359_38504[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38505 = state_38349;
state_38349 = G__38505;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_38349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_38349);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__38493,switch__38079__auto__,c__38167__auto___38497,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async))
})();
var state__38169__auto__ = (function (){var statearr_38360 = f__38168__auto__.call(null);
(statearr_38360[(6)] = c__38167__auto___38497);

return statearr_38360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(__38493,c__38167__auto___38497,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async))
);


break;
case "async":
var c__38167__auto___38506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38493,c__38167__auto___38506,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (__38493,c__38167__auto___38506,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async){
return (function (state_38373){
var state_val_38374 = (state_38373[(1)]);
if((state_val_38374 === (1))){
var state_38373__$1 = state_38373;
var statearr_38375_38507 = state_38373__$1;
(statearr_38375_38507[(2)] = null);

(statearr_38375_38507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38374 === (2))){
var state_38373__$1 = state_38373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38373__$1,(4),jobs);
} else {
if((state_val_38374 === (3))){
var inst_38371 = (state_38373[(2)]);
var state_38373__$1 = state_38373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38373__$1,inst_38371);
} else {
if((state_val_38374 === (4))){
var inst_38363 = (state_38373[(2)]);
var inst_38364 = async.call(null,inst_38363);
var state_38373__$1 = state_38373;
if(cljs.core.truth_(inst_38364)){
var statearr_38376_38508 = state_38373__$1;
(statearr_38376_38508[(1)] = (5));

} else {
var statearr_38377_38509 = state_38373__$1;
(statearr_38377_38509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38374 === (5))){
var state_38373__$1 = state_38373;
var statearr_38378_38510 = state_38373__$1;
(statearr_38378_38510[(2)] = null);

(statearr_38378_38510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38374 === (6))){
var state_38373__$1 = state_38373;
var statearr_38379_38511 = state_38373__$1;
(statearr_38379_38511[(2)] = null);

(statearr_38379_38511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38374 === (7))){
var inst_38369 = (state_38373[(2)]);
var state_38373__$1 = state_38373;
var statearr_38380_38512 = state_38373__$1;
(statearr_38380_38512[(2)] = inst_38369);

(statearr_38380_38512[(1)] = (3));


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
});})(__38493,c__38167__auto___38506,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async))
;
return ((function (__38493,switch__38079__auto__,c__38167__auto___38506,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_38381 = [null,null,null,null,null,null,null];
(statearr_38381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_38381[(1)] = (1));

return statearr_38381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_38373){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38382){if((e38382 instanceof Object)){
var ex__38083__auto__ = e38382;
var statearr_38383_38513 = state_38373;
(statearr_38383_38513[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38514 = state_38373;
state_38373 = G__38514;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_38373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_38373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(__38493,switch__38079__auto__,c__38167__auto___38506,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async))
})();
var state__38169__auto__ = (function (){var statearr_38384 = f__38168__auto__.call(null);
(statearr_38384[(6)] = c__38167__auto___38506);

return statearr_38384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(__38493,c__38167__auto___38506,G__38336_38494,G__38336_38495__$1,n__29142__auto___38492,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38336_38495__$1)].join('')));

}

var G__38515 = (__38493 + (1));
__38493 = G__38515;
continue;
} else {
}
break;
}

var c__38167__auto___38516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___38516,jobs,results,process,async){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___38516,jobs,results,process,async){
return (function (state_38406){
var state_val_38407 = (state_38406[(1)]);
if((state_val_38407 === (1))){
var state_38406__$1 = state_38406;
var statearr_38408_38517 = state_38406__$1;
(statearr_38408_38517[(2)] = null);

(statearr_38408_38517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38407 === (2))){
var state_38406__$1 = state_38406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38406__$1,(4),from);
} else {
if((state_val_38407 === (3))){
var inst_38404 = (state_38406[(2)]);
var state_38406__$1 = state_38406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38406__$1,inst_38404);
} else {
if((state_val_38407 === (4))){
var inst_38387 = (state_38406[(7)]);
var inst_38387__$1 = (state_38406[(2)]);
var inst_38388 = (inst_38387__$1 == null);
var state_38406__$1 = (function (){var statearr_38409 = state_38406;
(statearr_38409[(7)] = inst_38387__$1);

return statearr_38409;
})();
if(cljs.core.truth_(inst_38388)){
var statearr_38410_38518 = state_38406__$1;
(statearr_38410_38518[(1)] = (5));

} else {
var statearr_38411_38519 = state_38406__$1;
(statearr_38411_38519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38407 === (5))){
var inst_38390 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38406__$1 = state_38406;
var statearr_38412_38520 = state_38406__$1;
(statearr_38412_38520[(2)] = inst_38390);

(statearr_38412_38520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38407 === (6))){
var inst_38387 = (state_38406[(7)]);
var inst_38392 = (state_38406[(8)]);
var inst_38392__$1 = cljs.core.async.chan.call(null,(1));
var inst_38393 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38394 = [inst_38387,inst_38392__$1];
var inst_38395 = (new cljs.core.PersistentVector(null,2,(5),inst_38393,inst_38394,null));
var state_38406__$1 = (function (){var statearr_38413 = state_38406;
(statearr_38413[(8)] = inst_38392__$1);

return statearr_38413;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38406__$1,(8),jobs,inst_38395);
} else {
if((state_val_38407 === (7))){
var inst_38402 = (state_38406[(2)]);
var state_38406__$1 = state_38406;
var statearr_38414_38521 = state_38406__$1;
(statearr_38414_38521[(2)] = inst_38402);

(statearr_38414_38521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38407 === (8))){
var inst_38392 = (state_38406[(8)]);
var inst_38397 = (state_38406[(2)]);
var state_38406__$1 = (function (){var statearr_38415 = state_38406;
(statearr_38415[(9)] = inst_38397);

return statearr_38415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38406__$1,(9),results,inst_38392);
} else {
if((state_val_38407 === (9))){
var inst_38399 = (state_38406[(2)]);
var state_38406__$1 = (function (){var statearr_38416 = state_38406;
(statearr_38416[(10)] = inst_38399);

return statearr_38416;
})();
var statearr_38417_38522 = state_38406__$1;
(statearr_38417_38522[(2)] = null);

(statearr_38417_38522[(1)] = (2));


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
});})(c__38167__auto___38516,jobs,results,process,async))
;
return ((function (switch__38079__auto__,c__38167__auto___38516,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_38418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_38418[(1)] = (1));

return statearr_38418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_38406){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38419){if((e38419 instanceof Object)){
var ex__38083__auto__ = e38419;
var statearr_38420_38523 = state_38406;
(statearr_38420_38523[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38524 = state_38406;
state_38406 = G__38524;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_38406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_38406);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___38516,jobs,results,process,async))
})();
var state__38169__auto__ = (function (){var statearr_38421 = f__38168__auto__.call(null);
(statearr_38421[(6)] = c__38167__auto___38516);

return statearr_38421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___38516,jobs,results,process,async))
);


var c__38167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto__,jobs,results,process,async){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto__,jobs,results,process,async){
return (function (state_38459){
var state_val_38460 = (state_38459[(1)]);
if((state_val_38460 === (7))){
var inst_38455 = (state_38459[(2)]);
var state_38459__$1 = state_38459;
var statearr_38461_38525 = state_38459__$1;
(statearr_38461_38525[(2)] = inst_38455);

(statearr_38461_38525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (20))){
var state_38459__$1 = state_38459;
var statearr_38462_38526 = state_38459__$1;
(statearr_38462_38526[(2)] = null);

(statearr_38462_38526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (1))){
var state_38459__$1 = state_38459;
var statearr_38463_38527 = state_38459__$1;
(statearr_38463_38527[(2)] = null);

(statearr_38463_38527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (4))){
var inst_38424 = (state_38459[(7)]);
var inst_38424__$1 = (state_38459[(2)]);
var inst_38425 = (inst_38424__$1 == null);
var state_38459__$1 = (function (){var statearr_38464 = state_38459;
(statearr_38464[(7)] = inst_38424__$1);

return statearr_38464;
})();
if(cljs.core.truth_(inst_38425)){
var statearr_38465_38528 = state_38459__$1;
(statearr_38465_38528[(1)] = (5));

} else {
var statearr_38466_38529 = state_38459__$1;
(statearr_38466_38529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (15))){
var inst_38437 = (state_38459[(8)]);
var state_38459__$1 = state_38459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38459__$1,(18),to,inst_38437);
} else {
if((state_val_38460 === (21))){
var inst_38450 = (state_38459[(2)]);
var state_38459__$1 = state_38459;
var statearr_38467_38530 = state_38459__$1;
(statearr_38467_38530[(2)] = inst_38450);

(statearr_38467_38530[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (13))){
var inst_38452 = (state_38459[(2)]);
var state_38459__$1 = (function (){var statearr_38468 = state_38459;
(statearr_38468[(9)] = inst_38452);

return statearr_38468;
})();
var statearr_38469_38531 = state_38459__$1;
(statearr_38469_38531[(2)] = null);

(statearr_38469_38531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (6))){
var inst_38424 = (state_38459[(7)]);
var state_38459__$1 = state_38459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38459__$1,(11),inst_38424);
} else {
if((state_val_38460 === (17))){
var inst_38445 = (state_38459[(2)]);
var state_38459__$1 = state_38459;
if(cljs.core.truth_(inst_38445)){
var statearr_38470_38532 = state_38459__$1;
(statearr_38470_38532[(1)] = (19));

} else {
var statearr_38471_38533 = state_38459__$1;
(statearr_38471_38533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (3))){
var inst_38457 = (state_38459[(2)]);
var state_38459__$1 = state_38459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38459__$1,inst_38457);
} else {
if((state_val_38460 === (12))){
var inst_38434 = (state_38459[(10)]);
var state_38459__$1 = state_38459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38459__$1,(14),inst_38434);
} else {
if((state_val_38460 === (2))){
var state_38459__$1 = state_38459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38459__$1,(4),results);
} else {
if((state_val_38460 === (19))){
var state_38459__$1 = state_38459;
var statearr_38472_38534 = state_38459__$1;
(statearr_38472_38534[(2)] = null);

(statearr_38472_38534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (11))){
var inst_38434 = (state_38459[(2)]);
var state_38459__$1 = (function (){var statearr_38473 = state_38459;
(statearr_38473[(10)] = inst_38434);

return statearr_38473;
})();
var statearr_38474_38535 = state_38459__$1;
(statearr_38474_38535[(2)] = null);

(statearr_38474_38535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (9))){
var state_38459__$1 = state_38459;
var statearr_38475_38536 = state_38459__$1;
(statearr_38475_38536[(2)] = null);

(statearr_38475_38536[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (5))){
var state_38459__$1 = state_38459;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38476_38537 = state_38459__$1;
(statearr_38476_38537[(1)] = (8));

} else {
var statearr_38477_38538 = state_38459__$1;
(statearr_38477_38538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (14))){
var inst_38437 = (state_38459[(8)]);
var inst_38439 = (state_38459[(11)]);
var inst_38437__$1 = (state_38459[(2)]);
var inst_38438 = (inst_38437__$1 == null);
var inst_38439__$1 = cljs.core.not.call(null,inst_38438);
var state_38459__$1 = (function (){var statearr_38478 = state_38459;
(statearr_38478[(8)] = inst_38437__$1);

(statearr_38478[(11)] = inst_38439__$1);

return statearr_38478;
})();
if(inst_38439__$1){
var statearr_38479_38539 = state_38459__$1;
(statearr_38479_38539[(1)] = (15));

} else {
var statearr_38480_38540 = state_38459__$1;
(statearr_38480_38540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (16))){
var inst_38439 = (state_38459[(11)]);
var state_38459__$1 = state_38459;
var statearr_38481_38541 = state_38459__$1;
(statearr_38481_38541[(2)] = inst_38439);

(statearr_38481_38541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (10))){
var inst_38431 = (state_38459[(2)]);
var state_38459__$1 = state_38459;
var statearr_38482_38542 = state_38459__$1;
(statearr_38482_38542[(2)] = inst_38431);

(statearr_38482_38542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (18))){
var inst_38442 = (state_38459[(2)]);
var state_38459__$1 = state_38459;
var statearr_38483_38543 = state_38459__$1;
(statearr_38483_38543[(2)] = inst_38442);

(statearr_38483_38543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38460 === (8))){
var inst_38428 = cljs.core.async.close_BANG_.call(null,to);
var state_38459__$1 = state_38459;
var statearr_38484_38544 = state_38459__$1;
(statearr_38484_38544[(2)] = inst_38428);

(statearr_38484_38544[(1)] = (10));


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
});})(c__38167__auto__,jobs,results,process,async))
;
return ((function (switch__38079__auto__,c__38167__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_38485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38485[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__);

(statearr_38485[(1)] = (1));

return statearr_38485;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1 = (function (state_38459){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38486){if((e38486 instanceof Object)){
var ex__38083__auto__ = e38486;
var statearr_38487_38545 = state_38459;
(statearr_38487_38545[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38546 = state_38459;
state_38459 = G__38546;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__ = function(state_38459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1.call(this,state_38459);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto__,jobs,results,process,async))
})();
var state__38169__auto__ = (function (){var statearr_38488 = f__38168__auto__.call(null);
(statearr_38488[(6)] = c__38167__auto__);

return statearr_38488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto__,jobs,results,process,async))
);

return c__38167__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__38548 = arguments.length;
switch (G__38548) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__38551 = arguments.length;
switch (G__38551) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__38554 = arguments.length;
switch (G__38554) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38167__auto___38603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___38603,tc,fc){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___38603,tc,fc){
return (function (state_38580){
var state_val_38581 = (state_38580[(1)]);
if((state_val_38581 === (7))){
var inst_38576 = (state_38580[(2)]);
var state_38580__$1 = state_38580;
var statearr_38582_38604 = state_38580__$1;
(statearr_38582_38604[(2)] = inst_38576);

(statearr_38582_38604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (1))){
var state_38580__$1 = state_38580;
var statearr_38583_38605 = state_38580__$1;
(statearr_38583_38605[(2)] = null);

(statearr_38583_38605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (4))){
var inst_38557 = (state_38580[(7)]);
var inst_38557__$1 = (state_38580[(2)]);
var inst_38558 = (inst_38557__$1 == null);
var state_38580__$1 = (function (){var statearr_38584 = state_38580;
(statearr_38584[(7)] = inst_38557__$1);

return statearr_38584;
})();
if(cljs.core.truth_(inst_38558)){
var statearr_38585_38606 = state_38580__$1;
(statearr_38585_38606[(1)] = (5));

} else {
var statearr_38586_38607 = state_38580__$1;
(statearr_38586_38607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (13))){
var state_38580__$1 = state_38580;
var statearr_38587_38608 = state_38580__$1;
(statearr_38587_38608[(2)] = null);

(statearr_38587_38608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (6))){
var inst_38557 = (state_38580[(7)]);
var inst_38563 = p.call(null,inst_38557);
var state_38580__$1 = state_38580;
if(cljs.core.truth_(inst_38563)){
var statearr_38588_38609 = state_38580__$1;
(statearr_38588_38609[(1)] = (9));

} else {
var statearr_38589_38610 = state_38580__$1;
(statearr_38589_38610[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (3))){
var inst_38578 = (state_38580[(2)]);
var state_38580__$1 = state_38580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38580__$1,inst_38578);
} else {
if((state_val_38581 === (12))){
var state_38580__$1 = state_38580;
var statearr_38590_38611 = state_38580__$1;
(statearr_38590_38611[(2)] = null);

(statearr_38590_38611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (2))){
var state_38580__$1 = state_38580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38580__$1,(4),ch);
} else {
if((state_val_38581 === (11))){
var inst_38557 = (state_38580[(7)]);
var inst_38567 = (state_38580[(2)]);
var state_38580__$1 = state_38580;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38580__$1,(8),inst_38567,inst_38557);
} else {
if((state_val_38581 === (9))){
var state_38580__$1 = state_38580;
var statearr_38591_38612 = state_38580__$1;
(statearr_38591_38612[(2)] = tc);

(statearr_38591_38612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (5))){
var inst_38560 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38561 = cljs.core.async.close_BANG_.call(null,fc);
var state_38580__$1 = (function (){var statearr_38592 = state_38580;
(statearr_38592[(8)] = inst_38560);

return statearr_38592;
})();
var statearr_38593_38613 = state_38580__$1;
(statearr_38593_38613[(2)] = inst_38561);

(statearr_38593_38613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (14))){
var inst_38574 = (state_38580[(2)]);
var state_38580__$1 = state_38580;
var statearr_38594_38614 = state_38580__$1;
(statearr_38594_38614[(2)] = inst_38574);

(statearr_38594_38614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (10))){
var state_38580__$1 = state_38580;
var statearr_38595_38615 = state_38580__$1;
(statearr_38595_38615[(2)] = fc);

(statearr_38595_38615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38581 === (8))){
var inst_38569 = (state_38580[(2)]);
var state_38580__$1 = state_38580;
if(cljs.core.truth_(inst_38569)){
var statearr_38596_38616 = state_38580__$1;
(statearr_38596_38616[(1)] = (12));

} else {
var statearr_38597_38617 = state_38580__$1;
(statearr_38597_38617[(1)] = (13));

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
});})(c__38167__auto___38603,tc,fc))
;
return ((function (switch__38079__auto__,c__38167__auto___38603,tc,fc){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_38598 = [null,null,null,null,null,null,null,null,null];
(statearr_38598[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_38598[(1)] = (1));

return statearr_38598;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_38580){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38599){if((e38599 instanceof Object)){
var ex__38083__auto__ = e38599;
var statearr_38600_38618 = state_38580;
(statearr_38600_38618[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38619 = state_38580;
state_38580 = G__38619;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_38580){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_38580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___38603,tc,fc))
})();
var state__38169__auto__ = (function (){var statearr_38601 = f__38168__auto__.call(null);
(statearr_38601[(6)] = c__38167__auto___38603);

return statearr_38601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___38603,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto__){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto__){
return (function (state_38640){
var state_val_38641 = (state_38640[(1)]);
if((state_val_38641 === (7))){
var inst_38636 = (state_38640[(2)]);
var state_38640__$1 = state_38640;
var statearr_38642_38660 = state_38640__$1;
(statearr_38642_38660[(2)] = inst_38636);

(statearr_38642_38660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38641 === (1))){
var inst_38620 = init;
var state_38640__$1 = (function (){var statearr_38643 = state_38640;
(statearr_38643[(7)] = inst_38620);

return statearr_38643;
})();
var statearr_38644_38661 = state_38640__$1;
(statearr_38644_38661[(2)] = null);

(statearr_38644_38661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38641 === (4))){
var inst_38623 = (state_38640[(8)]);
var inst_38623__$1 = (state_38640[(2)]);
var inst_38624 = (inst_38623__$1 == null);
var state_38640__$1 = (function (){var statearr_38645 = state_38640;
(statearr_38645[(8)] = inst_38623__$1);

return statearr_38645;
})();
if(cljs.core.truth_(inst_38624)){
var statearr_38646_38662 = state_38640__$1;
(statearr_38646_38662[(1)] = (5));

} else {
var statearr_38647_38663 = state_38640__$1;
(statearr_38647_38663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38641 === (6))){
var inst_38623 = (state_38640[(8)]);
var inst_38627 = (state_38640[(9)]);
var inst_38620 = (state_38640[(7)]);
var inst_38627__$1 = f.call(null,inst_38620,inst_38623);
var inst_38628 = cljs.core.reduced_QMARK_.call(null,inst_38627__$1);
var state_38640__$1 = (function (){var statearr_38648 = state_38640;
(statearr_38648[(9)] = inst_38627__$1);

return statearr_38648;
})();
if(inst_38628){
var statearr_38649_38664 = state_38640__$1;
(statearr_38649_38664[(1)] = (8));

} else {
var statearr_38650_38665 = state_38640__$1;
(statearr_38650_38665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38641 === (3))){
var inst_38638 = (state_38640[(2)]);
var state_38640__$1 = state_38640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38640__$1,inst_38638);
} else {
if((state_val_38641 === (2))){
var state_38640__$1 = state_38640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38640__$1,(4),ch);
} else {
if((state_val_38641 === (9))){
var inst_38627 = (state_38640[(9)]);
var inst_38620 = inst_38627;
var state_38640__$1 = (function (){var statearr_38651 = state_38640;
(statearr_38651[(7)] = inst_38620);

return statearr_38651;
})();
var statearr_38652_38666 = state_38640__$1;
(statearr_38652_38666[(2)] = null);

(statearr_38652_38666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38641 === (5))){
var inst_38620 = (state_38640[(7)]);
var state_38640__$1 = state_38640;
var statearr_38653_38667 = state_38640__$1;
(statearr_38653_38667[(2)] = inst_38620);

(statearr_38653_38667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38641 === (10))){
var inst_38634 = (state_38640[(2)]);
var state_38640__$1 = state_38640;
var statearr_38654_38668 = state_38640__$1;
(statearr_38654_38668[(2)] = inst_38634);

(statearr_38654_38668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38641 === (8))){
var inst_38627 = (state_38640[(9)]);
var inst_38630 = cljs.core.deref.call(null,inst_38627);
var state_38640__$1 = state_38640;
var statearr_38655_38669 = state_38640__$1;
(statearr_38655_38669[(2)] = inst_38630);

(statearr_38655_38669[(1)] = (10));


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
});})(c__38167__auto__))
;
return ((function (switch__38079__auto__,c__38167__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38080__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38080__auto____0 = (function (){
var statearr_38656 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38656[(0)] = cljs$core$async$reduce_$_state_machine__38080__auto__);

(statearr_38656[(1)] = (1));

return statearr_38656;
});
var cljs$core$async$reduce_$_state_machine__38080__auto____1 = (function (state_38640){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38657){if((e38657 instanceof Object)){
var ex__38083__auto__ = e38657;
var statearr_38658_38670 = state_38640;
(statearr_38658_38670[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38671 = state_38640;
state_38640 = G__38671;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38080__auto__ = function(state_38640){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38080__auto____1.call(this,state_38640);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38080__auto____0;
cljs$core$async$reduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38080__auto____1;
return cljs$core$async$reduce_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto__))
})();
var state__38169__auto__ = (function (){var statearr_38659 = f__38168__auto__.call(null);
(statearr_38659[(6)] = c__38167__auto__);

return statearr_38659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto__))
);

return c__38167__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto__,f__$1){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto__,f__$1){
return (function (state_38677){
var state_val_38678 = (state_38677[(1)]);
if((state_val_38678 === (1))){
var inst_38672 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38677__$1 = state_38677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38677__$1,(2),inst_38672);
} else {
if((state_val_38678 === (2))){
var inst_38674 = (state_38677[(2)]);
var inst_38675 = f__$1.call(null,inst_38674);
var state_38677__$1 = state_38677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38677__$1,inst_38675);
} else {
return null;
}
}
});})(c__38167__auto__,f__$1))
;
return ((function (switch__38079__auto__,c__38167__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38080__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38080__auto____0 = (function (){
var statearr_38679 = [null,null,null,null,null,null,null];
(statearr_38679[(0)] = cljs$core$async$transduce_$_state_machine__38080__auto__);

(statearr_38679[(1)] = (1));

return statearr_38679;
});
var cljs$core$async$transduce_$_state_machine__38080__auto____1 = (function (state_38677){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38680){if((e38680 instanceof Object)){
var ex__38083__auto__ = e38680;
var statearr_38681_38683 = state_38677;
(statearr_38681_38683[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38684 = state_38677;
state_38677 = G__38684;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38080__auto__ = function(state_38677){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38080__auto____1.call(this,state_38677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38080__auto____0;
cljs$core$async$transduce_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38080__auto____1;
return cljs$core$async$transduce_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto__,f__$1))
})();
var state__38169__auto__ = (function (){var statearr_38682 = f__38168__auto__.call(null);
(statearr_38682[(6)] = c__38167__auto__);

return statearr_38682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto__,f__$1))
);

return c__38167__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38686 = arguments.length;
switch (G__38686) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto__){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto__){
return (function (state_38711){
var state_val_38712 = (state_38711[(1)]);
if((state_val_38712 === (7))){
var inst_38693 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38713_38734 = state_38711__$1;
(statearr_38713_38734[(2)] = inst_38693);

(statearr_38713_38734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (1))){
var inst_38687 = cljs.core.seq.call(null,coll);
var inst_38688 = inst_38687;
var state_38711__$1 = (function (){var statearr_38714 = state_38711;
(statearr_38714[(7)] = inst_38688);

return statearr_38714;
})();
var statearr_38715_38735 = state_38711__$1;
(statearr_38715_38735[(2)] = null);

(statearr_38715_38735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (4))){
var inst_38688 = (state_38711[(7)]);
var inst_38691 = cljs.core.first.call(null,inst_38688);
var state_38711__$1 = state_38711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38711__$1,(7),ch,inst_38691);
} else {
if((state_val_38712 === (13))){
var inst_38705 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38716_38736 = state_38711__$1;
(statearr_38716_38736[(2)] = inst_38705);

(statearr_38716_38736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (6))){
var inst_38696 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
if(cljs.core.truth_(inst_38696)){
var statearr_38717_38737 = state_38711__$1;
(statearr_38717_38737[(1)] = (8));

} else {
var statearr_38718_38738 = state_38711__$1;
(statearr_38718_38738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (3))){
var inst_38709 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38711__$1,inst_38709);
} else {
if((state_val_38712 === (12))){
var state_38711__$1 = state_38711;
var statearr_38719_38739 = state_38711__$1;
(statearr_38719_38739[(2)] = null);

(statearr_38719_38739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (2))){
var inst_38688 = (state_38711[(7)]);
var state_38711__$1 = state_38711;
if(cljs.core.truth_(inst_38688)){
var statearr_38720_38740 = state_38711__$1;
(statearr_38720_38740[(1)] = (4));

} else {
var statearr_38721_38741 = state_38711__$1;
(statearr_38721_38741[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (11))){
var inst_38702 = cljs.core.async.close_BANG_.call(null,ch);
var state_38711__$1 = state_38711;
var statearr_38722_38742 = state_38711__$1;
(statearr_38722_38742[(2)] = inst_38702);

(statearr_38722_38742[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (9))){
var state_38711__$1 = state_38711;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38723_38743 = state_38711__$1;
(statearr_38723_38743[(1)] = (11));

} else {
var statearr_38724_38744 = state_38711__$1;
(statearr_38724_38744[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (5))){
var inst_38688 = (state_38711[(7)]);
var state_38711__$1 = state_38711;
var statearr_38725_38745 = state_38711__$1;
(statearr_38725_38745[(2)] = inst_38688);

(statearr_38725_38745[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (10))){
var inst_38707 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38726_38746 = state_38711__$1;
(statearr_38726_38746[(2)] = inst_38707);

(statearr_38726_38746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (8))){
var inst_38688 = (state_38711[(7)]);
var inst_38698 = cljs.core.next.call(null,inst_38688);
var inst_38688__$1 = inst_38698;
var state_38711__$1 = (function (){var statearr_38727 = state_38711;
(statearr_38727[(7)] = inst_38688__$1);

return statearr_38727;
})();
var statearr_38728_38747 = state_38711__$1;
(statearr_38728_38747[(2)] = null);

(statearr_38728_38747[(1)] = (2));


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
});})(c__38167__auto__))
;
return ((function (switch__38079__auto__,c__38167__auto__){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_38729 = [null,null,null,null,null,null,null,null];
(statearr_38729[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_38729[(1)] = (1));

return statearr_38729;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_38711){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38730){if((e38730 instanceof Object)){
var ex__38083__auto__ = e38730;
var statearr_38731_38748 = state_38711;
(statearr_38731_38748[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38749 = state_38711;
state_38711 = G__38749;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_38711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_38711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto__))
})();
var state__38169__auto__ = (function (){var statearr_38732 = f__38168__auto__.call(null);
(statearr_38732[(6)] = c__38167__auto__);

return statearr_38732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto__))
);

return c__38167__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28878__auto__ = (((_ == null))?null:_);
var m__28879__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,_);
} else {
var m__28879__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28879__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m,ch);
} else {
var m__28879__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m);
} else {
var m__28879__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38750 = (function (ch,cs,meta38751){
this.ch = ch;
this.cs = cs;
this.meta38751 = meta38751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38752,meta38751__$1){
var self__ = this;
var _38752__$1 = this;
return (new cljs.core.async.t_cljs$core$async38750(self__.ch,self__.cs,meta38751__$1));
});})(cs))
;


cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38752){
var self__ = this;
var _38752__$1 = this;
return self__.meta38751;
});})(cs))
;


cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;


cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;


cljs.core.async.t_cljs$core$async38750.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38750.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38751","meta38751",-712086841,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38750";

cljs.core.async.t_cljs$core$async38750.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async38750");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38750 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38750(ch__$1,cs__$1,meta38751){
return (new cljs.core.async.t_cljs$core$async38750(ch__$1,cs__$1,meta38751));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38750(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38167__auto___38972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___38972,cs,m,dchan,dctr,done){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___38972,cs,m,dchan,dctr,done){
return (function (state_38887){
var state_val_38888 = (state_38887[(1)]);
if((state_val_38888 === (7))){
var inst_38883 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38889_38973 = state_38887__$1;
(statearr_38889_38973[(2)] = inst_38883);

(statearr_38889_38973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (20))){
var inst_38786 = (state_38887[(7)]);
var inst_38798 = cljs.core.first.call(null,inst_38786);
var inst_38799 = cljs.core.nth.call(null,inst_38798,(0),null);
var inst_38800 = cljs.core.nth.call(null,inst_38798,(1),null);
var state_38887__$1 = (function (){var statearr_38890 = state_38887;
(statearr_38890[(8)] = inst_38799);

return statearr_38890;
})();
if(cljs.core.truth_(inst_38800)){
var statearr_38891_38974 = state_38887__$1;
(statearr_38891_38974[(1)] = (22));

} else {
var statearr_38892_38975 = state_38887__$1;
(statearr_38892_38975[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (27))){
var inst_38755 = (state_38887[(9)]);
var inst_38835 = (state_38887[(10)]);
var inst_38830 = (state_38887[(11)]);
var inst_38828 = (state_38887[(12)]);
var inst_38835__$1 = cljs.core._nth.call(null,inst_38828,inst_38830);
var inst_38836 = cljs.core.async.put_BANG_.call(null,inst_38835__$1,inst_38755,done);
var state_38887__$1 = (function (){var statearr_38893 = state_38887;
(statearr_38893[(10)] = inst_38835__$1);

return statearr_38893;
})();
if(cljs.core.truth_(inst_38836)){
var statearr_38894_38976 = state_38887__$1;
(statearr_38894_38976[(1)] = (30));

} else {
var statearr_38895_38977 = state_38887__$1;
(statearr_38895_38977[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (1))){
var state_38887__$1 = state_38887;
var statearr_38896_38978 = state_38887__$1;
(statearr_38896_38978[(2)] = null);

(statearr_38896_38978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (24))){
var inst_38786 = (state_38887[(7)]);
var inst_38805 = (state_38887[(2)]);
var inst_38806 = cljs.core.next.call(null,inst_38786);
var inst_38764 = inst_38806;
var inst_38765 = null;
var inst_38766 = (0);
var inst_38767 = (0);
var state_38887__$1 = (function (){var statearr_38897 = state_38887;
(statearr_38897[(13)] = inst_38805);

(statearr_38897[(14)] = inst_38767);

(statearr_38897[(15)] = inst_38764);

(statearr_38897[(16)] = inst_38766);

(statearr_38897[(17)] = inst_38765);

return statearr_38897;
})();
var statearr_38898_38979 = state_38887__$1;
(statearr_38898_38979[(2)] = null);

(statearr_38898_38979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (39))){
var state_38887__$1 = state_38887;
var statearr_38902_38980 = state_38887__$1;
(statearr_38902_38980[(2)] = null);

(statearr_38902_38980[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (4))){
var inst_38755 = (state_38887[(9)]);
var inst_38755__$1 = (state_38887[(2)]);
var inst_38756 = (inst_38755__$1 == null);
var state_38887__$1 = (function (){var statearr_38903 = state_38887;
(statearr_38903[(9)] = inst_38755__$1);

return statearr_38903;
})();
if(cljs.core.truth_(inst_38756)){
var statearr_38904_38981 = state_38887__$1;
(statearr_38904_38981[(1)] = (5));

} else {
var statearr_38905_38982 = state_38887__$1;
(statearr_38905_38982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (15))){
var inst_38767 = (state_38887[(14)]);
var inst_38764 = (state_38887[(15)]);
var inst_38766 = (state_38887[(16)]);
var inst_38765 = (state_38887[(17)]);
var inst_38782 = (state_38887[(2)]);
var inst_38783 = (inst_38767 + (1));
var tmp38899 = inst_38764;
var tmp38900 = inst_38766;
var tmp38901 = inst_38765;
var inst_38764__$1 = tmp38899;
var inst_38765__$1 = tmp38901;
var inst_38766__$1 = tmp38900;
var inst_38767__$1 = inst_38783;
var state_38887__$1 = (function (){var statearr_38906 = state_38887;
(statearr_38906[(14)] = inst_38767__$1);

(statearr_38906[(15)] = inst_38764__$1);

(statearr_38906[(16)] = inst_38766__$1);

(statearr_38906[(18)] = inst_38782);

(statearr_38906[(17)] = inst_38765__$1);

return statearr_38906;
})();
var statearr_38907_38983 = state_38887__$1;
(statearr_38907_38983[(2)] = null);

(statearr_38907_38983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (21))){
var inst_38809 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38911_38984 = state_38887__$1;
(statearr_38911_38984[(2)] = inst_38809);

(statearr_38911_38984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (31))){
var inst_38835 = (state_38887[(10)]);
var inst_38839 = done.call(null,null);
var inst_38840 = cljs.core.async.untap_STAR_.call(null,m,inst_38835);
var state_38887__$1 = (function (){var statearr_38912 = state_38887;
(statearr_38912[(19)] = inst_38839);

return statearr_38912;
})();
var statearr_38913_38985 = state_38887__$1;
(statearr_38913_38985[(2)] = inst_38840);

(statearr_38913_38985[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (32))){
var inst_38827 = (state_38887[(20)]);
var inst_38829 = (state_38887[(21)]);
var inst_38830 = (state_38887[(11)]);
var inst_38828 = (state_38887[(12)]);
var inst_38842 = (state_38887[(2)]);
var inst_38843 = (inst_38830 + (1));
var tmp38908 = inst_38827;
var tmp38909 = inst_38829;
var tmp38910 = inst_38828;
var inst_38827__$1 = tmp38908;
var inst_38828__$1 = tmp38910;
var inst_38829__$1 = tmp38909;
var inst_38830__$1 = inst_38843;
var state_38887__$1 = (function (){var statearr_38914 = state_38887;
(statearr_38914[(20)] = inst_38827__$1);

(statearr_38914[(21)] = inst_38829__$1);

(statearr_38914[(22)] = inst_38842);

(statearr_38914[(11)] = inst_38830__$1);

(statearr_38914[(12)] = inst_38828__$1);

return statearr_38914;
})();
var statearr_38915_38986 = state_38887__$1;
(statearr_38915_38986[(2)] = null);

(statearr_38915_38986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (40))){
var inst_38855 = (state_38887[(23)]);
var inst_38859 = done.call(null,null);
var inst_38860 = cljs.core.async.untap_STAR_.call(null,m,inst_38855);
var state_38887__$1 = (function (){var statearr_38916 = state_38887;
(statearr_38916[(24)] = inst_38859);

return statearr_38916;
})();
var statearr_38917_38987 = state_38887__$1;
(statearr_38917_38987[(2)] = inst_38860);

(statearr_38917_38987[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (33))){
var inst_38846 = (state_38887[(25)]);
var inst_38848 = cljs.core.chunked_seq_QMARK_.call(null,inst_38846);
var state_38887__$1 = state_38887;
if(inst_38848){
var statearr_38918_38988 = state_38887__$1;
(statearr_38918_38988[(1)] = (36));

} else {
var statearr_38919_38989 = state_38887__$1;
(statearr_38919_38989[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (13))){
var inst_38776 = (state_38887[(26)]);
var inst_38779 = cljs.core.async.close_BANG_.call(null,inst_38776);
var state_38887__$1 = state_38887;
var statearr_38920_38990 = state_38887__$1;
(statearr_38920_38990[(2)] = inst_38779);

(statearr_38920_38990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (22))){
var inst_38799 = (state_38887[(8)]);
var inst_38802 = cljs.core.async.close_BANG_.call(null,inst_38799);
var state_38887__$1 = state_38887;
var statearr_38921_38991 = state_38887__$1;
(statearr_38921_38991[(2)] = inst_38802);

(statearr_38921_38991[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (36))){
var inst_38846 = (state_38887[(25)]);
var inst_38850 = cljs.core.chunk_first.call(null,inst_38846);
var inst_38851 = cljs.core.chunk_rest.call(null,inst_38846);
var inst_38852 = cljs.core.count.call(null,inst_38850);
var inst_38827 = inst_38851;
var inst_38828 = inst_38850;
var inst_38829 = inst_38852;
var inst_38830 = (0);
var state_38887__$1 = (function (){var statearr_38922 = state_38887;
(statearr_38922[(20)] = inst_38827);

(statearr_38922[(21)] = inst_38829);

(statearr_38922[(11)] = inst_38830);

(statearr_38922[(12)] = inst_38828);

return statearr_38922;
})();
var statearr_38923_38992 = state_38887__$1;
(statearr_38923_38992[(2)] = null);

(statearr_38923_38992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (41))){
var inst_38846 = (state_38887[(25)]);
var inst_38862 = (state_38887[(2)]);
var inst_38863 = cljs.core.next.call(null,inst_38846);
var inst_38827 = inst_38863;
var inst_38828 = null;
var inst_38829 = (0);
var inst_38830 = (0);
var state_38887__$1 = (function (){var statearr_38924 = state_38887;
(statearr_38924[(27)] = inst_38862);

(statearr_38924[(20)] = inst_38827);

(statearr_38924[(21)] = inst_38829);

(statearr_38924[(11)] = inst_38830);

(statearr_38924[(12)] = inst_38828);

return statearr_38924;
})();
var statearr_38925_38993 = state_38887__$1;
(statearr_38925_38993[(2)] = null);

(statearr_38925_38993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (43))){
var state_38887__$1 = state_38887;
var statearr_38926_38994 = state_38887__$1;
(statearr_38926_38994[(2)] = null);

(statearr_38926_38994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (29))){
var inst_38871 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38927_38995 = state_38887__$1;
(statearr_38927_38995[(2)] = inst_38871);

(statearr_38927_38995[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (44))){
var inst_38880 = (state_38887[(2)]);
var state_38887__$1 = (function (){var statearr_38928 = state_38887;
(statearr_38928[(28)] = inst_38880);

return statearr_38928;
})();
var statearr_38929_38996 = state_38887__$1;
(statearr_38929_38996[(2)] = null);

(statearr_38929_38996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (6))){
var inst_38819 = (state_38887[(29)]);
var inst_38818 = cljs.core.deref.call(null,cs);
var inst_38819__$1 = cljs.core.keys.call(null,inst_38818);
var inst_38820 = cljs.core.count.call(null,inst_38819__$1);
var inst_38821 = cljs.core.reset_BANG_.call(null,dctr,inst_38820);
var inst_38826 = cljs.core.seq.call(null,inst_38819__$1);
var inst_38827 = inst_38826;
var inst_38828 = null;
var inst_38829 = (0);
var inst_38830 = (0);
var state_38887__$1 = (function (){var statearr_38930 = state_38887;
(statearr_38930[(20)] = inst_38827);

(statearr_38930[(21)] = inst_38829);

(statearr_38930[(11)] = inst_38830);

(statearr_38930[(30)] = inst_38821);

(statearr_38930[(29)] = inst_38819__$1);

(statearr_38930[(12)] = inst_38828);

return statearr_38930;
})();
var statearr_38931_38997 = state_38887__$1;
(statearr_38931_38997[(2)] = null);

(statearr_38931_38997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (28))){
var inst_38827 = (state_38887[(20)]);
var inst_38846 = (state_38887[(25)]);
var inst_38846__$1 = cljs.core.seq.call(null,inst_38827);
var state_38887__$1 = (function (){var statearr_38932 = state_38887;
(statearr_38932[(25)] = inst_38846__$1);

return statearr_38932;
})();
if(inst_38846__$1){
var statearr_38933_38998 = state_38887__$1;
(statearr_38933_38998[(1)] = (33));

} else {
var statearr_38934_38999 = state_38887__$1;
(statearr_38934_38999[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (25))){
var inst_38829 = (state_38887[(21)]);
var inst_38830 = (state_38887[(11)]);
var inst_38832 = (inst_38830 < inst_38829);
var inst_38833 = inst_38832;
var state_38887__$1 = state_38887;
if(cljs.core.truth_(inst_38833)){
var statearr_38935_39000 = state_38887__$1;
(statearr_38935_39000[(1)] = (27));

} else {
var statearr_38936_39001 = state_38887__$1;
(statearr_38936_39001[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (34))){
var state_38887__$1 = state_38887;
var statearr_38937_39002 = state_38887__$1;
(statearr_38937_39002[(2)] = null);

(statearr_38937_39002[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (17))){
var state_38887__$1 = state_38887;
var statearr_38938_39003 = state_38887__$1;
(statearr_38938_39003[(2)] = null);

(statearr_38938_39003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (3))){
var inst_38885 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38887__$1,inst_38885);
} else {
if((state_val_38888 === (12))){
var inst_38814 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38939_39004 = state_38887__$1;
(statearr_38939_39004[(2)] = inst_38814);

(statearr_38939_39004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (2))){
var state_38887__$1 = state_38887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38887__$1,(4),ch);
} else {
if((state_val_38888 === (23))){
var state_38887__$1 = state_38887;
var statearr_38940_39005 = state_38887__$1;
(statearr_38940_39005[(2)] = null);

(statearr_38940_39005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (35))){
var inst_38869 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38941_39006 = state_38887__$1;
(statearr_38941_39006[(2)] = inst_38869);

(statearr_38941_39006[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (19))){
var inst_38786 = (state_38887[(7)]);
var inst_38790 = cljs.core.chunk_first.call(null,inst_38786);
var inst_38791 = cljs.core.chunk_rest.call(null,inst_38786);
var inst_38792 = cljs.core.count.call(null,inst_38790);
var inst_38764 = inst_38791;
var inst_38765 = inst_38790;
var inst_38766 = inst_38792;
var inst_38767 = (0);
var state_38887__$1 = (function (){var statearr_38942 = state_38887;
(statearr_38942[(14)] = inst_38767);

(statearr_38942[(15)] = inst_38764);

(statearr_38942[(16)] = inst_38766);

(statearr_38942[(17)] = inst_38765);

return statearr_38942;
})();
var statearr_38943_39007 = state_38887__$1;
(statearr_38943_39007[(2)] = null);

(statearr_38943_39007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (11))){
var inst_38786 = (state_38887[(7)]);
var inst_38764 = (state_38887[(15)]);
var inst_38786__$1 = cljs.core.seq.call(null,inst_38764);
var state_38887__$1 = (function (){var statearr_38944 = state_38887;
(statearr_38944[(7)] = inst_38786__$1);

return statearr_38944;
})();
if(inst_38786__$1){
var statearr_38945_39008 = state_38887__$1;
(statearr_38945_39008[(1)] = (16));

} else {
var statearr_38946_39009 = state_38887__$1;
(statearr_38946_39009[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (9))){
var inst_38816 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38947_39010 = state_38887__$1;
(statearr_38947_39010[(2)] = inst_38816);

(statearr_38947_39010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (5))){
var inst_38762 = cljs.core.deref.call(null,cs);
var inst_38763 = cljs.core.seq.call(null,inst_38762);
var inst_38764 = inst_38763;
var inst_38765 = null;
var inst_38766 = (0);
var inst_38767 = (0);
var state_38887__$1 = (function (){var statearr_38948 = state_38887;
(statearr_38948[(14)] = inst_38767);

(statearr_38948[(15)] = inst_38764);

(statearr_38948[(16)] = inst_38766);

(statearr_38948[(17)] = inst_38765);

return statearr_38948;
})();
var statearr_38949_39011 = state_38887__$1;
(statearr_38949_39011[(2)] = null);

(statearr_38949_39011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (14))){
var state_38887__$1 = state_38887;
var statearr_38950_39012 = state_38887__$1;
(statearr_38950_39012[(2)] = null);

(statearr_38950_39012[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (45))){
var inst_38877 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38951_39013 = state_38887__$1;
(statearr_38951_39013[(2)] = inst_38877);

(statearr_38951_39013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (26))){
var inst_38819 = (state_38887[(29)]);
var inst_38873 = (state_38887[(2)]);
var inst_38874 = cljs.core.seq.call(null,inst_38819);
var state_38887__$1 = (function (){var statearr_38952 = state_38887;
(statearr_38952[(31)] = inst_38873);

return statearr_38952;
})();
if(inst_38874){
var statearr_38953_39014 = state_38887__$1;
(statearr_38953_39014[(1)] = (42));

} else {
var statearr_38954_39015 = state_38887__$1;
(statearr_38954_39015[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (16))){
var inst_38786 = (state_38887[(7)]);
var inst_38788 = cljs.core.chunked_seq_QMARK_.call(null,inst_38786);
var state_38887__$1 = state_38887;
if(inst_38788){
var statearr_38955_39016 = state_38887__$1;
(statearr_38955_39016[(1)] = (19));

} else {
var statearr_38956_39017 = state_38887__$1;
(statearr_38956_39017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (38))){
var inst_38866 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38957_39018 = state_38887__$1;
(statearr_38957_39018[(2)] = inst_38866);

(statearr_38957_39018[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (30))){
var state_38887__$1 = state_38887;
var statearr_38958_39019 = state_38887__$1;
(statearr_38958_39019[(2)] = null);

(statearr_38958_39019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (10))){
var inst_38767 = (state_38887[(14)]);
var inst_38765 = (state_38887[(17)]);
var inst_38775 = cljs.core._nth.call(null,inst_38765,inst_38767);
var inst_38776 = cljs.core.nth.call(null,inst_38775,(0),null);
var inst_38777 = cljs.core.nth.call(null,inst_38775,(1),null);
var state_38887__$1 = (function (){var statearr_38959 = state_38887;
(statearr_38959[(26)] = inst_38776);

return statearr_38959;
})();
if(cljs.core.truth_(inst_38777)){
var statearr_38960_39020 = state_38887__$1;
(statearr_38960_39020[(1)] = (13));

} else {
var statearr_38961_39021 = state_38887__$1;
(statearr_38961_39021[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (18))){
var inst_38812 = (state_38887[(2)]);
var state_38887__$1 = state_38887;
var statearr_38962_39022 = state_38887__$1;
(statearr_38962_39022[(2)] = inst_38812);

(statearr_38962_39022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (42))){
var state_38887__$1 = state_38887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38887__$1,(45),dchan);
} else {
if((state_val_38888 === (37))){
var inst_38755 = (state_38887[(9)]);
var inst_38855 = (state_38887[(23)]);
var inst_38846 = (state_38887[(25)]);
var inst_38855__$1 = cljs.core.first.call(null,inst_38846);
var inst_38856 = cljs.core.async.put_BANG_.call(null,inst_38855__$1,inst_38755,done);
var state_38887__$1 = (function (){var statearr_38963 = state_38887;
(statearr_38963[(23)] = inst_38855__$1);

return statearr_38963;
})();
if(cljs.core.truth_(inst_38856)){
var statearr_38964_39023 = state_38887__$1;
(statearr_38964_39023[(1)] = (39));

} else {
var statearr_38965_39024 = state_38887__$1;
(statearr_38965_39024[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38888 === (8))){
var inst_38767 = (state_38887[(14)]);
var inst_38766 = (state_38887[(16)]);
var inst_38769 = (inst_38767 < inst_38766);
var inst_38770 = inst_38769;
var state_38887__$1 = state_38887;
if(cljs.core.truth_(inst_38770)){
var statearr_38966_39025 = state_38887__$1;
(statearr_38966_39025[(1)] = (10));

} else {
var statearr_38967_39026 = state_38887__$1;
(statearr_38967_39026[(1)] = (11));

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
});})(c__38167__auto___38972,cs,m,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38167__auto___38972,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38080__auto__ = null;
var cljs$core$async$mult_$_state_machine__38080__auto____0 = (function (){
var statearr_38968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38968[(0)] = cljs$core$async$mult_$_state_machine__38080__auto__);

(statearr_38968[(1)] = (1));

return statearr_38968;
});
var cljs$core$async$mult_$_state_machine__38080__auto____1 = (function (state_38887){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_38887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e38969){if((e38969 instanceof Object)){
var ex__38083__auto__ = e38969;
var statearr_38970_39027 = state_38887;
(statearr_38970_39027[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39028 = state_38887;
state_38887 = G__39028;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38080__auto__ = function(state_38887){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38080__auto____1.call(this,state_38887);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38080__auto____0;
cljs$core$async$mult_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38080__auto____1;
return cljs$core$async$mult_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___38972,cs,m,dchan,dctr,done))
})();
var state__38169__auto__ = (function (){var statearr_38971 = f__38168__auto__.call(null);
(statearr_38971[(6)] = c__38167__auto___38972);

return statearr_38971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___38972,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39030 = arguments.length;
switch (G__39030) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m,ch);
} else {
var m__28879__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m,ch);
} else {
var m__28879__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m);
} else {
var m__28879__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m,state_map);
} else {
var m__28879__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28878__auto__ = (((m == null))?null:m);
var m__28879__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,m,mode);
} else {
var m__28879__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29373__auto__ = [];
var len__29366__auto___39042 = arguments.length;
var i__29367__auto___39043 = (0);
while(true){
if((i__29367__auto___39043 < len__29366__auto___39042)){
args__29373__auto__.push((arguments[i__29367__auto___39043]));

var G__39044 = (i__29367__auto___39043 + (1));
i__29367__auto___39043 = G__39044;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((3) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29374__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39036){
var map__39037 = p__39036;
var map__39037__$1 = ((((!((map__39037 == null)))?((((map__39037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39037):map__39037);
var opts = map__39037__$1;
var statearr_39039_39045 = state;
(statearr_39039_39045[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39037,map__39037__$1,opts){
return (function (val){
var statearr_39040_39046 = state;
(statearr_39040_39046[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39037,map__39037__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39041_39047 = state;
(statearr_39041_39047[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39032){
var G__39033 = cljs.core.first.call(null,seq39032);
var seq39032__$1 = cljs.core.next.call(null,seq39032);
var G__39034 = cljs.core.first.call(null,seq39032__$1);
var seq39032__$2 = cljs.core.next.call(null,seq39032__$1);
var G__39035 = cljs.core.first.call(null,seq39032__$2);
var seq39032__$3 = cljs.core.next.call(null,seq39032__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39033,G__39034,G__39035,seq39032__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39048 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39048 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39049){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39049 = meta39049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39050,meta39049__$1){
var self__ = this;
var _39050__$1 = this;
return (new cljs.core.async.t_cljs$core$async39048(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39049__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39050){
var self__ = this;
var _39050__$1 = this;
return self__.meta39049;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;


cljs.core.async.t_cljs$core$async39048.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39048.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39049","meta39049",-123268082,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39048.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39048";

cljs.core.async.t_cljs$core$async39048.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async39048");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39048 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39048(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39049){
return (new cljs.core.async.t_cljs$core$async39048(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39049));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39048(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38167__auto___39212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39152){
var state_val_39153 = (state_39152[(1)]);
if((state_val_39153 === (7))){
var inst_39067 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
var statearr_39154_39213 = state_39152__$1;
(statearr_39154_39213[(2)] = inst_39067);

(statearr_39154_39213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (20))){
var inst_39079 = (state_39152[(7)]);
var state_39152__$1 = state_39152;
var statearr_39155_39214 = state_39152__$1;
(statearr_39155_39214[(2)] = inst_39079);

(statearr_39155_39214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (27))){
var state_39152__$1 = state_39152;
var statearr_39156_39215 = state_39152__$1;
(statearr_39156_39215[(2)] = null);

(statearr_39156_39215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (1))){
var inst_39054 = (state_39152[(8)]);
var inst_39054__$1 = calc_state.call(null);
var inst_39056 = (inst_39054__$1 == null);
var inst_39057 = cljs.core.not.call(null,inst_39056);
var state_39152__$1 = (function (){var statearr_39157 = state_39152;
(statearr_39157[(8)] = inst_39054__$1);

return statearr_39157;
})();
if(inst_39057){
var statearr_39158_39216 = state_39152__$1;
(statearr_39158_39216[(1)] = (2));

} else {
var statearr_39159_39217 = state_39152__$1;
(statearr_39159_39217[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (24))){
var inst_39112 = (state_39152[(9)]);
var inst_39126 = (state_39152[(10)]);
var inst_39103 = (state_39152[(11)]);
var inst_39126__$1 = inst_39103.call(null,inst_39112);
var state_39152__$1 = (function (){var statearr_39160 = state_39152;
(statearr_39160[(10)] = inst_39126__$1);

return statearr_39160;
})();
if(cljs.core.truth_(inst_39126__$1)){
var statearr_39161_39218 = state_39152__$1;
(statearr_39161_39218[(1)] = (29));

} else {
var statearr_39162_39219 = state_39152__$1;
(statearr_39162_39219[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (4))){
var inst_39070 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
if(cljs.core.truth_(inst_39070)){
var statearr_39163_39220 = state_39152__$1;
(statearr_39163_39220[(1)] = (8));

} else {
var statearr_39164_39221 = state_39152__$1;
(statearr_39164_39221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (15))){
var inst_39097 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
if(cljs.core.truth_(inst_39097)){
var statearr_39165_39222 = state_39152__$1;
(statearr_39165_39222[(1)] = (19));

} else {
var statearr_39166_39223 = state_39152__$1;
(statearr_39166_39223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (21))){
var inst_39102 = (state_39152[(12)]);
var inst_39102__$1 = (state_39152[(2)]);
var inst_39103 = cljs.core.get.call(null,inst_39102__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39104 = cljs.core.get.call(null,inst_39102__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39105 = cljs.core.get.call(null,inst_39102__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39152__$1 = (function (){var statearr_39167 = state_39152;
(statearr_39167[(13)] = inst_39104);

(statearr_39167[(12)] = inst_39102__$1);

(statearr_39167[(11)] = inst_39103);

return statearr_39167;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39152__$1,(22),inst_39105);
} else {
if((state_val_39153 === (31))){
var inst_39134 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
if(cljs.core.truth_(inst_39134)){
var statearr_39168_39224 = state_39152__$1;
(statearr_39168_39224[(1)] = (32));

} else {
var statearr_39169_39225 = state_39152__$1;
(statearr_39169_39225[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (32))){
var inst_39111 = (state_39152[(14)]);
var state_39152__$1 = state_39152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39152__$1,(35),out,inst_39111);
} else {
if((state_val_39153 === (33))){
var inst_39102 = (state_39152[(12)]);
var inst_39079 = inst_39102;
var state_39152__$1 = (function (){var statearr_39170 = state_39152;
(statearr_39170[(7)] = inst_39079);

return statearr_39170;
})();
var statearr_39171_39226 = state_39152__$1;
(statearr_39171_39226[(2)] = null);

(statearr_39171_39226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (13))){
var inst_39079 = (state_39152[(7)]);
var inst_39086 = inst_39079.cljs$lang$protocol_mask$partition0$;
var inst_39087 = (inst_39086 & (64));
var inst_39088 = inst_39079.cljs$core$ISeq$;
var inst_39089 = (cljs.core.PROTOCOL_SENTINEL === inst_39088);
var inst_39090 = (inst_39087) || (inst_39089);
var state_39152__$1 = state_39152;
if(cljs.core.truth_(inst_39090)){
var statearr_39172_39227 = state_39152__$1;
(statearr_39172_39227[(1)] = (16));

} else {
var statearr_39173_39228 = state_39152__$1;
(statearr_39173_39228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (22))){
var inst_39112 = (state_39152[(9)]);
var inst_39111 = (state_39152[(14)]);
var inst_39110 = (state_39152[(2)]);
var inst_39111__$1 = cljs.core.nth.call(null,inst_39110,(0),null);
var inst_39112__$1 = cljs.core.nth.call(null,inst_39110,(1),null);
var inst_39113 = (inst_39111__$1 == null);
var inst_39114 = cljs.core._EQ_.call(null,inst_39112__$1,change);
var inst_39115 = (inst_39113) || (inst_39114);
var state_39152__$1 = (function (){var statearr_39174 = state_39152;
(statearr_39174[(9)] = inst_39112__$1);

(statearr_39174[(14)] = inst_39111__$1);

return statearr_39174;
})();
if(cljs.core.truth_(inst_39115)){
var statearr_39175_39229 = state_39152__$1;
(statearr_39175_39229[(1)] = (23));

} else {
var statearr_39176_39230 = state_39152__$1;
(statearr_39176_39230[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (36))){
var inst_39102 = (state_39152[(12)]);
var inst_39079 = inst_39102;
var state_39152__$1 = (function (){var statearr_39177 = state_39152;
(statearr_39177[(7)] = inst_39079);

return statearr_39177;
})();
var statearr_39178_39231 = state_39152__$1;
(statearr_39178_39231[(2)] = null);

(statearr_39178_39231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (29))){
var inst_39126 = (state_39152[(10)]);
var state_39152__$1 = state_39152;
var statearr_39179_39232 = state_39152__$1;
(statearr_39179_39232[(2)] = inst_39126);

(statearr_39179_39232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (6))){
var state_39152__$1 = state_39152;
var statearr_39180_39233 = state_39152__$1;
(statearr_39180_39233[(2)] = false);

(statearr_39180_39233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (28))){
var inst_39122 = (state_39152[(2)]);
var inst_39123 = calc_state.call(null);
var inst_39079 = inst_39123;
var state_39152__$1 = (function (){var statearr_39181 = state_39152;
(statearr_39181[(7)] = inst_39079);

(statearr_39181[(15)] = inst_39122);

return statearr_39181;
})();
var statearr_39182_39234 = state_39152__$1;
(statearr_39182_39234[(2)] = null);

(statearr_39182_39234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (25))){
var inst_39148 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
var statearr_39183_39235 = state_39152__$1;
(statearr_39183_39235[(2)] = inst_39148);

(statearr_39183_39235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (34))){
var inst_39146 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
var statearr_39184_39236 = state_39152__$1;
(statearr_39184_39236[(2)] = inst_39146);

(statearr_39184_39236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (17))){
var state_39152__$1 = state_39152;
var statearr_39185_39237 = state_39152__$1;
(statearr_39185_39237[(2)] = false);

(statearr_39185_39237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (3))){
var state_39152__$1 = state_39152;
var statearr_39186_39238 = state_39152__$1;
(statearr_39186_39238[(2)] = false);

(statearr_39186_39238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (12))){
var inst_39150 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39152__$1,inst_39150);
} else {
if((state_val_39153 === (2))){
var inst_39054 = (state_39152[(8)]);
var inst_39059 = inst_39054.cljs$lang$protocol_mask$partition0$;
var inst_39060 = (inst_39059 & (64));
var inst_39061 = inst_39054.cljs$core$ISeq$;
var inst_39062 = (cljs.core.PROTOCOL_SENTINEL === inst_39061);
var inst_39063 = (inst_39060) || (inst_39062);
var state_39152__$1 = state_39152;
if(cljs.core.truth_(inst_39063)){
var statearr_39187_39239 = state_39152__$1;
(statearr_39187_39239[(1)] = (5));

} else {
var statearr_39188_39240 = state_39152__$1;
(statearr_39188_39240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (23))){
var inst_39111 = (state_39152[(14)]);
var inst_39117 = (inst_39111 == null);
var state_39152__$1 = state_39152;
if(cljs.core.truth_(inst_39117)){
var statearr_39189_39241 = state_39152__$1;
(statearr_39189_39241[(1)] = (26));

} else {
var statearr_39190_39242 = state_39152__$1;
(statearr_39190_39242[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (35))){
var inst_39137 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
if(cljs.core.truth_(inst_39137)){
var statearr_39191_39243 = state_39152__$1;
(statearr_39191_39243[(1)] = (36));

} else {
var statearr_39192_39244 = state_39152__$1;
(statearr_39192_39244[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (19))){
var inst_39079 = (state_39152[(7)]);
var inst_39099 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39079);
var state_39152__$1 = state_39152;
var statearr_39193_39245 = state_39152__$1;
(statearr_39193_39245[(2)] = inst_39099);

(statearr_39193_39245[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (11))){
var inst_39079 = (state_39152[(7)]);
var inst_39083 = (inst_39079 == null);
var inst_39084 = cljs.core.not.call(null,inst_39083);
var state_39152__$1 = state_39152;
if(inst_39084){
var statearr_39194_39246 = state_39152__$1;
(statearr_39194_39246[(1)] = (13));

} else {
var statearr_39195_39247 = state_39152__$1;
(statearr_39195_39247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (9))){
var inst_39054 = (state_39152[(8)]);
var state_39152__$1 = state_39152;
var statearr_39196_39248 = state_39152__$1;
(statearr_39196_39248[(2)] = inst_39054);

(statearr_39196_39248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (5))){
var state_39152__$1 = state_39152;
var statearr_39197_39249 = state_39152__$1;
(statearr_39197_39249[(2)] = true);

(statearr_39197_39249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (14))){
var state_39152__$1 = state_39152;
var statearr_39198_39250 = state_39152__$1;
(statearr_39198_39250[(2)] = false);

(statearr_39198_39250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (26))){
var inst_39112 = (state_39152[(9)]);
var inst_39119 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39112);
var state_39152__$1 = state_39152;
var statearr_39199_39251 = state_39152__$1;
(statearr_39199_39251[(2)] = inst_39119);

(statearr_39199_39251[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (16))){
var state_39152__$1 = state_39152;
var statearr_39200_39252 = state_39152__$1;
(statearr_39200_39252[(2)] = true);

(statearr_39200_39252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (38))){
var inst_39142 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
var statearr_39201_39253 = state_39152__$1;
(statearr_39201_39253[(2)] = inst_39142);

(statearr_39201_39253[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (30))){
var inst_39104 = (state_39152[(13)]);
var inst_39112 = (state_39152[(9)]);
var inst_39103 = (state_39152[(11)]);
var inst_39129 = cljs.core.empty_QMARK_.call(null,inst_39103);
var inst_39130 = inst_39104.call(null,inst_39112);
var inst_39131 = cljs.core.not.call(null,inst_39130);
var inst_39132 = (inst_39129) && (inst_39131);
var state_39152__$1 = state_39152;
var statearr_39202_39254 = state_39152__$1;
(statearr_39202_39254[(2)] = inst_39132);

(statearr_39202_39254[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (10))){
var inst_39054 = (state_39152[(8)]);
var inst_39075 = (state_39152[(2)]);
var inst_39076 = cljs.core.get.call(null,inst_39075,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39077 = cljs.core.get.call(null,inst_39075,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39078 = cljs.core.get.call(null,inst_39075,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39079 = inst_39054;
var state_39152__$1 = (function (){var statearr_39203 = state_39152;
(statearr_39203[(7)] = inst_39079);

(statearr_39203[(16)] = inst_39078);

(statearr_39203[(17)] = inst_39076);

(statearr_39203[(18)] = inst_39077);

return statearr_39203;
})();
var statearr_39204_39255 = state_39152__$1;
(statearr_39204_39255[(2)] = null);

(statearr_39204_39255[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (18))){
var inst_39094 = (state_39152[(2)]);
var state_39152__$1 = state_39152;
var statearr_39205_39256 = state_39152__$1;
(statearr_39205_39256[(2)] = inst_39094);

(statearr_39205_39256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (37))){
var state_39152__$1 = state_39152;
var statearr_39206_39257 = state_39152__$1;
(statearr_39206_39257[(2)] = null);

(statearr_39206_39257[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39153 === (8))){
var inst_39054 = (state_39152[(8)]);
var inst_39072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39054);
var state_39152__$1 = state_39152;
var statearr_39207_39258 = state_39152__$1;
(statearr_39207_39258[(2)] = inst_39072);

(statearr_39207_39258[(1)] = (10));


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
});})(c__38167__auto___39212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38079__auto__,c__38167__auto___39212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38080__auto__ = null;
var cljs$core$async$mix_$_state_machine__38080__auto____0 = (function (){
var statearr_39208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39208[(0)] = cljs$core$async$mix_$_state_machine__38080__auto__);

(statearr_39208[(1)] = (1));

return statearr_39208;
});
var cljs$core$async$mix_$_state_machine__38080__auto____1 = (function (state_39152){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39209){if((e39209 instanceof Object)){
var ex__38083__auto__ = e39209;
var statearr_39210_39259 = state_39152;
(statearr_39210_39259[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39260 = state_39152;
state_39152 = G__39260;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38080__auto__ = function(state_39152){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38080__auto____1.call(this,state_39152);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38080__auto____0;
cljs$core$async$mix_$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38080__auto____1;
return cljs$core$async$mix_$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38169__auto__ = (function (){var statearr_39211 = f__38168__auto__.call(null);
(statearr_39211[(6)] = c__38167__auto___39212);

return statearr_39211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39212,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28878__auto__ = (((p == null))?null:p);
var m__28879__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28879__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28878__auto__ = (((p == null))?null:p);
var m__28879__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,p,v,ch);
} else {
var m__28879__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39262 = arguments.length;
switch (G__39262) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28878__auto__ = (((p == null))?null:p);
var m__28879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,p);
} else {
var m__28879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28878__auto__ = (((p == null))?null:p);
var m__28879__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28878__auto__)]);
if(!((m__28879__auto__ == null))){
return m__28879__auto__.call(null,p,v);
} else {
var m__28879__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28879__auto____$1 == null))){
return m__28879__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__39266 = arguments.length;
switch (G__39266) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28195__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28195__auto__)){
return or__28195__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28195__auto__,mults){
return (function (p1__39264_SHARP_){
if(cljs.core.truth_(p1__39264_SHARP_.call(null,topic))){
return p1__39264_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39264_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28195__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39267 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39268){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39268 = meta39268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39269,meta39268__$1){
var self__ = this;
var _39269__$1 = this;
return (new cljs.core.async.t_cljs$core$async39267(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39268__$1));
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39269){
var self__ = this;
var _39269__$1 = this;
return self__.meta39268;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;


cljs.core.async.t_cljs$core$async39267.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39267.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39268","meta39268",1736728731,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39267";

cljs.core.async.t_cljs$core$async39267.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async39267");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39267 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39268){
return (new cljs.core.async.t_cljs$core$async39267(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39268));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39267(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38167__auto___39387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39387,mults,ensure_mult,p){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39387,mults,ensure_mult,p){
return (function (state_39341){
var state_val_39342 = (state_39341[(1)]);
if((state_val_39342 === (7))){
var inst_39337 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
var statearr_39343_39388 = state_39341__$1;
(statearr_39343_39388[(2)] = inst_39337);

(statearr_39343_39388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (20))){
var state_39341__$1 = state_39341;
var statearr_39344_39389 = state_39341__$1;
(statearr_39344_39389[(2)] = null);

(statearr_39344_39389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (1))){
var state_39341__$1 = state_39341;
var statearr_39345_39390 = state_39341__$1;
(statearr_39345_39390[(2)] = null);

(statearr_39345_39390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (24))){
var inst_39320 = (state_39341[(7)]);
var inst_39329 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39320);
var state_39341__$1 = state_39341;
var statearr_39346_39391 = state_39341__$1;
(statearr_39346_39391[(2)] = inst_39329);

(statearr_39346_39391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (4))){
var inst_39272 = (state_39341[(8)]);
var inst_39272__$1 = (state_39341[(2)]);
var inst_39273 = (inst_39272__$1 == null);
var state_39341__$1 = (function (){var statearr_39347 = state_39341;
(statearr_39347[(8)] = inst_39272__$1);

return statearr_39347;
})();
if(cljs.core.truth_(inst_39273)){
var statearr_39348_39392 = state_39341__$1;
(statearr_39348_39392[(1)] = (5));

} else {
var statearr_39349_39393 = state_39341__$1;
(statearr_39349_39393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (15))){
var inst_39314 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
var statearr_39350_39394 = state_39341__$1;
(statearr_39350_39394[(2)] = inst_39314);

(statearr_39350_39394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (21))){
var inst_39334 = (state_39341[(2)]);
var state_39341__$1 = (function (){var statearr_39351 = state_39341;
(statearr_39351[(9)] = inst_39334);

return statearr_39351;
})();
var statearr_39352_39395 = state_39341__$1;
(statearr_39352_39395[(2)] = null);

(statearr_39352_39395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (13))){
var inst_39296 = (state_39341[(10)]);
var inst_39298 = cljs.core.chunked_seq_QMARK_.call(null,inst_39296);
var state_39341__$1 = state_39341;
if(inst_39298){
var statearr_39353_39396 = state_39341__$1;
(statearr_39353_39396[(1)] = (16));

} else {
var statearr_39354_39397 = state_39341__$1;
(statearr_39354_39397[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (22))){
var inst_39326 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
if(cljs.core.truth_(inst_39326)){
var statearr_39355_39398 = state_39341__$1;
(statearr_39355_39398[(1)] = (23));

} else {
var statearr_39356_39399 = state_39341__$1;
(statearr_39356_39399[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (6))){
var inst_39320 = (state_39341[(7)]);
var inst_39322 = (state_39341[(11)]);
var inst_39272 = (state_39341[(8)]);
var inst_39320__$1 = topic_fn.call(null,inst_39272);
var inst_39321 = cljs.core.deref.call(null,mults);
var inst_39322__$1 = cljs.core.get.call(null,inst_39321,inst_39320__$1);
var state_39341__$1 = (function (){var statearr_39357 = state_39341;
(statearr_39357[(7)] = inst_39320__$1);

(statearr_39357[(11)] = inst_39322__$1);

return statearr_39357;
})();
if(cljs.core.truth_(inst_39322__$1)){
var statearr_39358_39400 = state_39341__$1;
(statearr_39358_39400[(1)] = (19));

} else {
var statearr_39359_39401 = state_39341__$1;
(statearr_39359_39401[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (25))){
var inst_39331 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
var statearr_39360_39402 = state_39341__$1;
(statearr_39360_39402[(2)] = inst_39331);

(statearr_39360_39402[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (17))){
var inst_39296 = (state_39341[(10)]);
var inst_39305 = cljs.core.first.call(null,inst_39296);
var inst_39306 = cljs.core.async.muxch_STAR_.call(null,inst_39305);
var inst_39307 = cljs.core.async.close_BANG_.call(null,inst_39306);
var inst_39308 = cljs.core.next.call(null,inst_39296);
var inst_39282 = inst_39308;
var inst_39283 = null;
var inst_39284 = (0);
var inst_39285 = (0);
var state_39341__$1 = (function (){var statearr_39361 = state_39341;
(statearr_39361[(12)] = inst_39285);

(statearr_39361[(13)] = inst_39283);

(statearr_39361[(14)] = inst_39282);

(statearr_39361[(15)] = inst_39307);

(statearr_39361[(16)] = inst_39284);

return statearr_39361;
})();
var statearr_39362_39403 = state_39341__$1;
(statearr_39362_39403[(2)] = null);

(statearr_39362_39403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (3))){
var inst_39339 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39341__$1,inst_39339);
} else {
if((state_val_39342 === (12))){
var inst_39316 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
var statearr_39363_39404 = state_39341__$1;
(statearr_39363_39404[(2)] = inst_39316);

(statearr_39363_39404[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (2))){
var state_39341__$1 = state_39341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39341__$1,(4),ch);
} else {
if((state_val_39342 === (23))){
var state_39341__$1 = state_39341;
var statearr_39364_39405 = state_39341__$1;
(statearr_39364_39405[(2)] = null);

(statearr_39364_39405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (19))){
var inst_39322 = (state_39341[(11)]);
var inst_39272 = (state_39341[(8)]);
var inst_39324 = cljs.core.async.muxch_STAR_.call(null,inst_39322);
var state_39341__$1 = state_39341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39341__$1,(22),inst_39324,inst_39272);
} else {
if((state_val_39342 === (11))){
var inst_39296 = (state_39341[(10)]);
var inst_39282 = (state_39341[(14)]);
var inst_39296__$1 = cljs.core.seq.call(null,inst_39282);
var state_39341__$1 = (function (){var statearr_39365 = state_39341;
(statearr_39365[(10)] = inst_39296__$1);

return statearr_39365;
})();
if(inst_39296__$1){
var statearr_39366_39406 = state_39341__$1;
(statearr_39366_39406[(1)] = (13));

} else {
var statearr_39367_39407 = state_39341__$1;
(statearr_39367_39407[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (9))){
var inst_39318 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
var statearr_39368_39408 = state_39341__$1;
(statearr_39368_39408[(2)] = inst_39318);

(statearr_39368_39408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (5))){
var inst_39279 = cljs.core.deref.call(null,mults);
var inst_39280 = cljs.core.vals.call(null,inst_39279);
var inst_39281 = cljs.core.seq.call(null,inst_39280);
var inst_39282 = inst_39281;
var inst_39283 = null;
var inst_39284 = (0);
var inst_39285 = (0);
var state_39341__$1 = (function (){var statearr_39369 = state_39341;
(statearr_39369[(12)] = inst_39285);

(statearr_39369[(13)] = inst_39283);

(statearr_39369[(14)] = inst_39282);

(statearr_39369[(16)] = inst_39284);

return statearr_39369;
})();
var statearr_39370_39409 = state_39341__$1;
(statearr_39370_39409[(2)] = null);

(statearr_39370_39409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (14))){
var state_39341__$1 = state_39341;
var statearr_39374_39410 = state_39341__$1;
(statearr_39374_39410[(2)] = null);

(statearr_39374_39410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (16))){
var inst_39296 = (state_39341[(10)]);
var inst_39300 = cljs.core.chunk_first.call(null,inst_39296);
var inst_39301 = cljs.core.chunk_rest.call(null,inst_39296);
var inst_39302 = cljs.core.count.call(null,inst_39300);
var inst_39282 = inst_39301;
var inst_39283 = inst_39300;
var inst_39284 = inst_39302;
var inst_39285 = (0);
var state_39341__$1 = (function (){var statearr_39375 = state_39341;
(statearr_39375[(12)] = inst_39285);

(statearr_39375[(13)] = inst_39283);

(statearr_39375[(14)] = inst_39282);

(statearr_39375[(16)] = inst_39284);

return statearr_39375;
})();
var statearr_39376_39411 = state_39341__$1;
(statearr_39376_39411[(2)] = null);

(statearr_39376_39411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (10))){
var inst_39285 = (state_39341[(12)]);
var inst_39283 = (state_39341[(13)]);
var inst_39282 = (state_39341[(14)]);
var inst_39284 = (state_39341[(16)]);
var inst_39290 = cljs.core._nth.call(null,inst_39283,inst_39285);
var inst_39291 = cljs.core.async.muxch_STAR_.call(null,inst_39290);
var inst_39292 = cljs.core.async.close_BANG_.call(null,inst_39291);
var inst_39293 = (inst_39285 + (1));
var tmp39371 = inst_39283;
var tmp39372 = inst_39282;
var tmp39373 = inst_39284;
var inst_39282__$1 = tmp39372;
var inst_39283__$1 = tmp39371;
var inst_39284__$1 = tmp39373;
var inst_39285__$1 = inst_39293;
var state_39341__$1 = (function (){var statearr_39377 = state_39341;
(statearr_39377[(12)] = inst_39285__$1);

(statearr_39377[(13)] = inst_39283__$1);

(statearr_39377[(14)] = inst_39282__$1);

(statearr_39377[(17)] = inst_39292);

(statearr_39377[(16)] = inst_39284__$1);

return statearr_39377;
})();
var statearr_39378_39412 = state_39341__$1;
(statearr_39378_39412[(2)] = null);

(statearr_39378_39412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (18))){
var inst_39311 = (state_39341[(2)]);
var state_39341__$1 = state_39341;
var statearr_39379_39413 = state_39341__$1;
(statearr_39379_39413[(2)] = inst_39311);

(statearr_39379_39413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39342 === (8))){
var inst_39285 = (state_39341[(12)]);
var inst_39284 = (state_39341[(16)]);
var inst_39287 = (inst_39285 < inst_39284);
var inst_39288 = inst_39287;
var state_39341__$1 = state_39341;
if(cljs.core.truth_(inst_39288)){
var statearr_39380_39414 = state_39341__$1;
(statearr_39380_39414[(1)] = (10));

} else {
var statearr_39381_39415 = state_39341__$1;
(statearr_39381_39415[(1)] = (11));

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
});})(c__38167__auto___39387,mults,ensure_mult,p))
;
return ((function (switch__38079__auto__,c__38167__auto___39387,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_39382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39382[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_39382[(1)] = (1));

return statearr_39382;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_39341){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39383){if((e39383 instanceof Object)){
var ex__38083__auto__ = e39383;
var statearr_39384_39416 = state_39341;
(statearr_39384_39416[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39417 = state_39341;
state_39341 = G__39417;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_39341){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_39341);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39387,mults,ensure_mult,p))
})();
var state__38169__auto__ = (function (){var statearr_39385 = f__38168__auto__.call(null);
(statearr_39385[(6)] = c__38167__auto___39387);

return statearr_39385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39387,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__39419 = arguments.length;
switch (G__39419) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__39422 = arguments.length;
switch (G__39422) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__39425 = arguments.length;
switch (G__39425) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38167__auto___39492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39464){
var state_val_39465 = (state_39464[(1)]);
if((state_val_39465 === (7))){
var state_39464__$1 = state_39464;
var statearr_39466_39493 = state_39464__$1;
(statearr_39466_39493[(2)] = null);

(statearr_39466_39493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (1))){
var state_39464__$1 = state_39464;
var statearr_39467_39494 = state_39464__$1;
(statearr_39467_39494[(2)] = null);

(statearr_39467_39494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (4))){
var inst_39428 = (state_39464[(7)]);
var inst_39430 = (inst_39428 < cnt);
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39430)){
var statearr_39468_39495 = state_39464__$1;
(statearr_39468_39495[(1)] = (6));

} else {
var statearr_39469_39496 = state_39464__$1;
(statearr_39469_39496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (15))){
var inst_39460 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39470_39497 = state_39464__$1;
(statearr_39470_39497[(2)] = inst_39460);

(statearr_39470_39497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (13))){
var inst_39453 = cljs.core.async.close_BANG_.call(null,out);
var state_39464__$1 = state_39464;
var statearr_39471_39498 = state_39464__$1;
(statearr_39471_39498[(2)] = inst_39453);

(statearr_39471_39498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (6))){
var state_39464__$1 = state_39464;
var statearr_39472_39499 = state_39464__$1;
(statearr_39472_39499[(2)] = null);

(statearr_39472_39499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (3))){
var inst_39462 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39464__$1,inst_39462);
} else {
if((state_val_39465 === (12))){
var inst_39450 = (state_39464[(8)]);
var inst_39450__$1 = (state_39464[(2)]);
var inst_39451 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39450__$1);
var state_39464__$1 = (function (){var statearr_39473 = state_39464;
(statearr_39473[(8)] = inst_39450__$1);

return statearr_39473;
})();
if(cljs.core.truth_(inst_39451)){
var statearr_39474_39500 = state_39464__$1;
(statearr_39474_39500[(1)] = (13));

} else {
var statearr_39475_39501 = state_39464__$1;
(statearr_39475_39501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (2))){
var inst_39427 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39428 = (0);
var state_39464__$1 = (function (){var statearr_39476 = state_39464;
(statearr_39476[(7)] = inst_39428);

(statearr_39476[(9)] = inst_39427);

return statearr_39476;
})();
var statearr_39477_39502 = state_39464__$1;
(statearr_39477_39502[(2)] = null);

(statearr_39477_39502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (11))){
var inst_39428 = (state_39464[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39464,(10),Object,null,(9));
var inst_39437 = chs__$1.call(null,inst_39428);
var inst_39438 = done.call(null,inst_39428);
var inst_39439 = cljs.core.async.take_BANG_.call(null,inst_39437,inst_39438);
var state_39464__$1 = state_39464;
var statearr_39478_39503 = state_39464__$1;
(statearr_39478_39503[(2)] = inst_39439);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (9))){
var inst_39428 = (state_39464[(7)]);
var inst_39441 = (state_39464[(2)]);
var inst_39442 = (inst_39428 + (1));
var inst_39428__$1 = inst_39442;
var state_39464__$1 = (function (){var statearr_39479 = state_39464;
(statearr_39479[(10)] = inst_39441);

(statearr_39479[(7)] = inst_39428__$1);

return statearr_39479;
})();
var statearr_39480_39504 = state_39464__$1;
(statearr_39480_39504[(2)] = null);

(statearr_39480_39504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (5))){
var inst_39448 = (state_39464[(2)]);
var state_39464__$1 = (function (){var statearr_39481 = state_39464;
(statearr_39481[(11)] = inst_39448);

return statearr_39481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39464__$1,(12),dchan);
} else {
if((state_val_39465 === (14))){
var inst_39450 = (state_39464[(8)]);
var inst_39455 = cljs.core.apply.call(null,f,inst_39450);
var state_39464__$1 = state_39464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39464__$1,(16),out,inst_39455);
} else {
if((state_val_39465 === (16))){
var inst_39457 = (state_39464[(2)]);
var state_39464__$1 = (function (){var statearr_39482 = state_39464;
(statearr_39482[(12)] = inst_39457);

return statearr_39482;
})();
var statearr_39483_39505 = state_39464__$1;
(statearr_39483_39505[(2)] = null);

(statearr_39483_39505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (10))){
var inst_39432 = (state_39464[(2)]);
var inst_39433 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39464__$1 = (function (){var statearr_39484 = state_39464;
(statearr_39484[(13)] = inst_39432);

return statearr_39484;
})();
var statearr_39485_39506 = state_39464__$1;
(statearr_39485_39506[(2)] = inst_39433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39464__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (8))){
var inst_39446 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39486_39507 = state_39464__$1;
(statearr_39486_39507[(2)] = inst_39446);

(statearr_39486_39507[(1)] = (5));


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
});})(c__38167__auto___39492,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38079__auto__,c__38167__auto___39492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_39487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39487[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_39487[(1)] = (1));

return statearr_39487;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_39464){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39488){if((e39488 instanceof Object)){
var ex__38083__auto__ = e39488;
var statearr_39489_39508 = state_39464;
(statearr_39489_39508[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39509 = state_39464;
state_39464 = G__39509;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_39464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_39464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39492,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38169__auto__ = (function (){var statearr_39490 = f__38168__auto__.call(null);
(statearr_39490[(6)] = c__38167__auto___39492);

return statearr_39490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39492,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__39512 = arguments.length;
switch (G__39512) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38167__auto___39566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39566,out){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39566,out){
return (function (state_39544){
var state_val_39545 = (state_39544[(1)]);
if((state_val_39545 === (7))){
var inst_39523 = (state_39544[(7)]);
var inst_39524 = (state_39544[(8)]);
var inst_39523__$1 = (state_39544[(2)]);
var inst_39524__$1 = cljs.core.nth.call(null,inst_39523__$1,(0),null);
var inst_39525 = cljs.core.nth.call(null,inst_39523__$1,(1),null);
var inst_39526 = (inst_39524__$1 == null);
var state_39544__$1 = (function (){var statearr_39546 = state_39544;
(statearr_39546[(7)] = inst_39523__$1);

(statearr_39546[(8)] = inst_39524__$1);

(statearr_39546[(9)] = inst_39525);

return statearr_39546;
})();
if(cljs.core.truth_(inst_39526)){
var statearr_39547_39567 = state_39544__$1;
(statearr_39547_39567[(1)] = (8));

} else {
var statearr_39548_39568 = state_39544__$1;
(statearr_39548_39568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39545 === (1))){
var inst_39513 = cljs.core.vec.call(null,chs);
var inst_39514 = inst_39513;
var state_39544__$1 = (function (){var statearr_39549 = state_39544;
(statearr_39549[(10)] = inst_39514);

return statearr_39549;
})();
var statearr_39550_39569 = state_39544__$1;
(statearr_39550_39569[(2)] = null);

(statearr_39550_39569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39545 === (4))){
var inst_39514 = (state_39544[(10)]);
var state_39544__$1 = state_39544;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39544__$1,(7),inst_39514);
} else {
if((state_val_39545 === (6))){
var inst_39540 = (state_39544[(2)]);
var state_39544__$1 = state_39544;
var statearr_39551_39570 = state_39544__$1;
(statearr_39551_39570[(2)] = inst_39540);

(statearr_39551_39570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39545 === (3))){
var inst_39542 = (state_39544[(2)]);
var state_39544__$1 = state_39544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39544__$1,inst_39542);
} else {
if((state_val_39545 === (2))){
var inst_39514 = (state_39544[(10)]);
var inst_39516 = cljs.core.count.call(null,inst_39514);
var inst_39517 = (inst_39516 > (0));
var state_39544__$1 = state_39544;
if(cljs.core.truth_(inst_39517)){
var statearr_39553_39571 = state_39544__$1;
(statearr_39553_39571[(1)] = (4));

} else {
var statearr_39554_39572 = state_39544__$1;
(statearr_39554_39572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39545 === (11))){
var inst_39514 = (state_39544[(10)]);
var inst_39533 = (state_39544[(2)]);
var tmp39552 = inst_39514;
var inst_39514__$1 = tmp39552;
var state_39544__$1 = (function (){var statearr_39555 = state_39544;
(statearr_39555[(10)] = inst_39514__$1);

(statearr_39555[(11)] = inst_39533);

return statearr_39555;
})();
var statearr_39556_39573 = state_39544__$1;
(statearr_39556_39573[(2)] = null);

(statearr_39556_39573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39545 === (9))){
var inst_39524 = (state_39544[(8)]);
var state_39544__$1 = state_39544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39544__$1,(11),out,inst_39524);
} else {
if((state_val_39545 === (5))){
var inst_39538 = cljs.core.async.close_BANG_.call(null,out);
var state_39544__$1 = state_39544;
var statearr_39557_39574 = state_39544__$1;
(statearr_39557_39574[(2)] = inst_39538);

(statearr_39557_39574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39545 === (10))){
var inst_39536 = (state_39544[(2)]);
var state_39544__$1 = state_39544;
var statearr_39558_39575 = state_39544__$1;
(statearr_39558_39575[(2)] = inst_39536);

(statearr_39558_39575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39545 === (8))){
var inst_39514 = (state_39544[(10)]);
var inst_39523 = (state_39544[(7)]);
var inst_39524 = (state_39544[(8)]);
var inst_39525 = (state_39544[(9)]);
var inst_39528 = (function (){var cs = inst_39514;
var vec__39519 = inst_39523;
var v = inst_39524;
var c = inst_39525;
return ((function (cs,vec__39519,v,c,inst_39514,inst_39523,inst_39524,inst_39525,state_val_39545,c__38167__auto___39566,out){
return (function (p1__39510_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39510_SHARP_);
});
;})(cs,vec__39519,v,c,inst_39514,inst_39523,inst_39524,inst_39525,state_val_39545,c__38167__auto___39566,out))
})();
var inst_39529 = cljs.core.filterv.call(null,inst_39528,inst_39514);
var inst_39514__$1 = inst_39529;
var state_39544__$1 = (function (){var statearr_39559 = state_39544;
(statearr_39559[(10)] = inst_39514__$1);

return statearr_39559;
})();
var statearr_39560_39576 = state_39544__$1;
(statearr_39560_39576[(2)] = null);

(statearr_39560_39576[(1)] = (2));


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
});})(c__38167__auto___39566,out))
;
return ((function (switch__38079__auto__,c__38167__auto___39566,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_39561 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39561[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_39561[(1)] = (1));

return statearr_39561;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_39544){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39562){if((e39562 instanceof Object)){
var ex__38083__auto__ = e39562;
var statearr_39563_39577 = state_39544;
(statearr_39563_39577[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39578 = state_39544;
state_39544 = G__39578;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_39544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_39544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39566,out))
})();
var state__38169__auto__ = (function (){var statearr_39564 = f__38168__auto__.call(null);
(statearr_39564[(6)] = c__38167__auto___39566);

return statearr_39564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39566,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__39580 = arguments.length;
switch (G__39580) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38167__auto___39625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39625,out){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39625,out){
return (function (state_39604){
var state_val_39605 = (state_39604[(1)]);
if((state_val_39605 === (7))){
var inst_39586 = (state_39604[(7)]);
var inst_39586__$1 = (state_39604[(2)]);
var inst_39587 = (inst_39586__$1 == null);
var inst_39588 = cljs.core.not.call(null,inst_39587);
var state_39604__$1 = (function (){var statearr_39606 = state_39604;
(statearr_39606[(7)] = inst_39586__$1);

return statearr_39606;
})();
if(inst_39588){
var statearr_39607_39626 = state_39604__$1;
(statearr_39607_39626[(1)] = (8));

} else {
var statearr_39608_39627 = state_39604__$1;
(statearr_39608_39627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (1))){
var inst_39581 = (0);
var state_39604__$1 = (function (){var statearr_39609 = state_39604;
(statearr_39609[(8)] = inst_39581);

return statearr_39609;
})();
var statearr_39610_39628 = state_39604__$1;
(statearr_39610_39628[(2)] = null);

(statearr_39610_39628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (4))){
var state_39604__$1 = state_39604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39604__$1,(7),ch);
} else {
if((state_val_39605 === (6))){
var inst_39599 = (state_39604[(2)]);
var state_39604__$1 = state_39604;
var statearr_39611_39629 = state_39604__$1;
(statearr_39611_39629[(2)] = inst_39599);

(statearr_39611_39629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (3))){
var inst_39601 = (state_39604[(2)]);
var inst_39602 = cljs.core.async.close_BANG_.call(null,out);
var state_39604__$1 = (function (){var statearr_39612 = state_39604;
(statearr_39612[(9)] = inst_39601);

return statearr_39612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39604__$1,inst_39602);
} else {
if((state_val_39605 === (2))){
var inst_39581 = (state_39604[(8)]);
var inst_39583 = (inst_39581 < n);
var state_39604__$1 = state_39604;
if(cljs.core.truth_(inst_39583)){
var statearr_39613_39630 = state_39604__$1;
(statearr_39613_39630[(1)] = (4));

} else {
var statearr_39614_39631 = state_39604__$1;
(statearr_39614_39631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (11))){
var inst_39581 = (state_39604[(8)]);
var inst_39591 = (state_39604[(2)]);
var inst_39592 = (inst_39581 + (1));
var inst_39581__$1 = inst_39592;
var state_39604__$1 = (function (){var statearr_39615 = state_39604;
(statearr_39615[(10)] = inst_39591);

(statearr_39615[(8)] = inst_39581__$1);

return statearr_39615;
})();
var statearr_39616_39632 = state_39604__$1;
(statearr_39616_39632[(2)] = null);

(statearr_39616_39632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (9))){
var state_39604__$1 = state_39604;
var statearr_39617_39633 = state_39604__$1;
(statearr_39617_39633[(2)] = null);

(statearr_39617_39633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (5))){
var state_39604__$1 = state_39604;
var statearr_39618_39634 = state_39604__$1;
(statearr_39618_39634[(2)] = null);

(statearr_39618_39634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (10))){
var inst_39596 = (state_39604[(2)]);
var state_39604__$1 = state_39604;
var statearr_39619_39635 = state_39604__$1;
(statearr_39619_39635[(2)] = inst_39596);

(statearr_39619_39635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39605 === (8))){
var inst_39586 = (state_39604[(7)]);
var state_39604__$1 = state_39604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39604__$1,(11),out,inst_39586);
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
});})(c__38167__auto___39625,out))
;
return ((function (switch__38079__auto__,c__38167__auto___39625,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_39620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39620[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_39620[(1)] = (1));

return statearr_39620;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_39604){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39621){if((e39621 instanceof Object)){
var ex__38083__auto__ = e39621;
var statearr_39622_39636 = state_39604;
(statearr_39622_39636[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39637 = state_39604;
state_39604 = G__39637;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_39604){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_39604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39625,out))
})();
var state__38169__auto__ = (function (){var statearr_39623 = f__38168__auto__.call(null);
(statearr_39623[(6)] = c__38167__auto___39625);

return statearr_39623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39625,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39639 = (function (f,ch,meta39640){
this.f = f;
this.ch = ch;
this.meta39640 = meta39640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39641,meta39640__$1){
var self__ = this;
var _39641__$1 = this;
return (new cljs.core.async.t_cljs$core$async39639(self__.f,self__.ch,meta39640__$1));
});


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39641){
var self__ = this;
var _39641__$1 = this;
return self__.meta39640;
});


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39642 = (function (f,ch,meta39640,_,fn1,meta39643){
this.f = f;
this.ch = ch;
this.meta39640 = meta39640;
this._ = _;
this.fn1 = fn1;
this.meta39643 = meta39643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39644,meta39643__$1){
var self__ = this;
var _39644__$1 = this;
return (new cljs.core.async.t_cljs$core$async39642(self__.f,self__.ch,self__.meta39640,self__._,self__.fn1,meta39643__$1));
});})(___$1))
;


cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39644){
var self__ = this;
var _39644__$1 = this;
return self__.meta39643;
});})(___$1))
;


cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;


cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;


cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39638_SHARP_){
return f1.call(null,(((p1__39638_SHARP_ == null))?null:self__.f.call(null,p1__39638_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39642.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39640","meta39640",1545597833,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39639","cljs.core.async/t_cljs$core$async39639",1321807357,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39643","meta39643",-1322021435,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39642";

cljs.core.async.t_cljs$core$async39642.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async39642");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39642 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39642(f__$1,ch__$1,meta39640__$1,___$2,fn1__$1,meta39643){
return (new cljs.core.async.t_cljs$core$async39642(f__$1,ch__$1,meta39640__$1,___$2,fn1__$1,meta39643));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39642(self__.f,self__.ch,self__.meta39640,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28183__auto__ = ret;
if(cljs.core.truth_(and__28183__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28183__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39640","meta39640",1545597833,null)], null);
});

cljs.core.async.t_cljs$core$async39639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39639";

cljs.core.async.t_cljs$core$async39639.cljs$lang$ctorPrWriter = (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async39639");
});

cljs.core.async.__GT_t_cljs$core$async39639 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39639(f__$1,ch__$1,meta39640){
return (new cljs.core.async.t_cljs$core$async39639(f__$1,ch__$1,meta39640));
});

}

return (new cljs.core.async.t_cljs$core$async39639(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39645 = (function (f,ch,meta39646){
this.f = f;
this.ch = ch;
this.meta39646 = meta39646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39647,meta39646__$1){
var self__ = this;
var _39647__$1 = this;
return (new cljs.core.async.t_cljs$core$async39645(self__.f,self__.ch,meta39646__$1));
});


cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39647){
var self__ = this;
var _39647__$1 = this;
return self__.meta39646;
});


cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39646","meta39646",-810698807,null)], null);
});

cljs.core.async.t_cljs$core$async39645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39645";

cljs.core.async.t_cljs$core$async39645.cljs$lang$ctorPrWriter = (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async39645");
});

cljs.core.async.__GT_t_cljs$core$async39645 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39645(f__$1,ch__$1,meta39646){
return (new cljs.core.async.t_cljs$core$async39645(f__$1,ch__$1,meta39646));
});

}

return (new cljs.core.async.t_cljs$core$async39645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39648 = (function (p,ch,meta39649){
this.p = p;
this.ch = ch;
this.meta39649 = meta39649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});

cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39650,meta39649__$1){
var self__ = this;
var _39650__$1 = this;
return (new cljs.core.async.t_cljs$core$async39648(self__.p,self__.ch,meta39649__$1));
});


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39650){
var self__ = this;
var _39650__$1 = this;
return self__.meta39649;
});


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;


cljs.core.async.t_cljs$core$async39648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39649","meta39649",-994272978,null)], null);
});

cljs.core.async.t_cljs$core$async39648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39648";

cljs.core.async.t_cljs$core$async39648.cljs$lang$ctorPrWriter = (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.core.async/t_cljs$core$async39648");
});

cljs.core.async.__GT_t_cljs$core$async39648 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39648(p__$1,ch__$1,meta39649){
return (new cljs.core.async.t_cljs$core$async39648(p__$1,ch__$1,meta39649));
});

}

return (new cljs.core.async.t_cljs$core$async39648(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39652 = arguments.length;
switch (G__39652) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38167__auto___39692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39692,out){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39692,out){
return (function (state_39673){
var state_val_39674 = (state_39673[(1)]);
if((state_val_39674 === (7))){
var inst_39669 = (state_39673[(2)]);
var state_39673__$1 = state_39673;
var statearr_39675_39693 = state_39673__$1;
(statearr_39675_39693[(2)] = inst_39669);

(statearr_39675_39693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (1))){
var state_39673__$1 = state_39673;
var statearr_39676_39694 = state_39673__$1;
(statearr_39676_39694[(2)] = null);

(statearr_39676_39694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (4))){
var inst_39655 = (state_39673[(7)]);
var inst_39655__$1 = (state_39673[(2)]);
var inst_39656 = (inst_39655__$1 == null);
var state_39673__$1 = (function (){var statearr_39677 = state_39673;
(statearr_39677[(7)] = inst_39655__$1);

return statearr_39677;
})();
if(cljs.core.truth_(inst_39656)){
var statearr_39678_39695 = state_39673__$1;
(statearr_39678_39695[(1)] = (5));

} else {
var statearr_39679_39696 = state_39673__$1;
(statearr_39679_39696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (6))){
var inst_39655 = (state_39673[(7)]);
var inst_39660 = p.call(null,inst_39655);
var state_39673__$1 = state_39673;
if(cljs.core.truth_(inst_39660)){
var statearr_39680_39697 = state_39673__$1;
(statearr_39680_39697[(1)] = (8));

} else {
var statearr_39681_39698 = state_39673__$1;
(statearr_39681_39698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (3))){
var inst_39671 = (state_39673[(2)]);
var state_39673__$1 = state_39673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39673__$1,inst_39671);
} else {
if((state_val_39674 === (2))){
var state_39673__$1 = state_39673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39673__$1,(4),ch);
} else {
if((state_val_39674 === (11))){
var inst_39663 = (state_39673[(2)]);
var state_39673__$1 = state_39673;
var statearr_39682_39699 = state_39673__$1;
(statearr_39682_39699[(2)] = inst_39663);

(statearr_39682_39699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (9))){
var state_39673__$1 = state_39673;
var statearr_39683_39700 = state_39673__$1;
(statearr_39683_39700[(2)] = null);

(statearr_39683_39700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (5))){
var inst_39658 = cljs.core.async.close_BANG_.call(null,out);
var state_39673__$1 = state_39673;
var statearr_39684_39701 = state_39673__$1;
(statearr_39684_39701[(2)] = inst_39658);

(statearr_39684_39701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (10))){
var inst_39666 = (state_39673[(2)]);
var state_39673__$1 = (function (){var statearr_39685 = state_39673;
(statearr_39685[(8)] = inst_39666);

return statearr_39685;
})();
var statearr_39686_39702 = state_39673__$1;
(statearr_39686_39702[(2)] = null);

(statearr_39686_39702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (8))){
var inst_39655 = (state_39673[(7)]);
var state_39673__$1 = state_39673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39673__$1,(11),out,inst_39655);
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
});})(c__38167__auto___39692,out))
;
return ((function (switch__38079__auto__,c__38167__auto___39692,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_39687 = [null,null,null,null,null,null,null,null,null];
(statearr_39687[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_39687[(1)] = (1));

return statearr_39687;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_39673){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39688){if((e39688 instanceof Object)){
var ex__38083__auto__ = e39688;
var statearr_39689_39703 = state_39673;
(statearr_39689_39703[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39704 = state_39673;
state_39673 = G__39704;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_39673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_39673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39692,out))
})();
var state__38169__auto__ = (function (){var statearr_39690 = f__38168__auto__.call(null);
(statearr_39690[(6)] = c__38167__auto___39692);

return statearr_39690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39692,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39706 = arguments.length;
switch (G__39706) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38167__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto__){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto__){
return (function (state_39769){
var state_val_39770 = (state_39769[(1)]);
if((state_val_39770 === (7))){
var inst_39765 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39771_39809 = state_39769__$1;
(statearr_39771_39809[(2)] = inst_39765);

(statearr_39771_39809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (20))){
var inst_39735 = (state_39769[(7)]);
var inst_39746 = (state_39769[(2)]);
var inst_39747 = cljs.core.next.call(null,inst_39735);
var inst_39721 = inst_39747;
var inst_39722 = null;
var inst_39723 = (0);
var inst_39724 = (0);
var state_39769__$1 = (function (){var statearr_39772 = state_39769;
(statearr_39772[(8)] = inst_39722);

(statearr_39772[(9)] = inst_39721);

(statearr_39772[(10)] = inst_39724);

(statearr_39772[(11)] = inst_39746);

(statearr_39772[(12)] = inst_39723);

return statearr_39772;
})();
var statearr_39773_39810 = state_39769__$1;
(statearr_39773_39810[(2)] = null);

(statearr_39773_39810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (1))){
var state_39769__$1 = state_39769;
var statearr_39774_39811 = state_39769__$1;
(statearr_39774_39811[(2)] = null);

(statearr_39774_39811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (4))){
var inst_39710 = (state_39769[(13)]);
var inst_39710__$1 = (state_39769[(2)]);
var inst_39711 = (inst_39710__$1 == null);
var state_39769__$1 = (function (){var statearr_39775 = state_39769;
(statearr_39775[(13)] = inst_39710__$1);

return statearr_39775;
})();
if(cljs.core.truth_(inst_39711)){
var statearr_39776_39812 = state_39769__$1;
(statearr_39776_39812[(1)] = (5));

} else {
var statearr_39777_39813 = state_39769__$1;
(statearr_39777_39813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (15))){
var state_39769__$1 = state_39769;
var statearr_39781_39814 = state_39769__$1;
(statearr_39781_39814[(2)] = null);

(statearr_39781_39814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (21))){
var state_39769__$1 = state_39769;
var statearr_39782_39815 = state_39769__$1;
(statearr_39782_39815[(2)] = null);

(statearr_39782_39815[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (13))){
var inst_39722 = (state_39769[(8)]);
var inst_39721 = (state_39769[(9)]);
var inst_39724 = (state_39769[(10)]);
var inst_39723 = (state_39769[(12)]);
var inst_39731 = (state_39769[(2)]);
var inst_39732 = (inst_39724 + (1));
var tmp39778 = inst_39722;
var tmp39779 = inst_39721;
var tmp39780 = inst_39723;
var inst_39721__$1 = tmp39779;
var inst_39722__$1 = tmp39778;
var inst_39723__$1 = tmp39780;
var inst_39724__$1 = inst_39732;
var state_39769__$1 = (function (){var statearr_39783 = state_39769;
(statearr_39783[(8)] = inst_39722__$1);

(statearr_39783[(14)] = inst_39731);

(statearr_39783[(9)] = inst_39721__$1);

(statearr_39783[(10)] = inst_39724__$1);

(statearr_39783[(12)] = inst_39723__$1);

return statearr_39783;
})();
var statearr_39784_39816 = state_39769__$1;
(statearr_39784_39816[(2)] = null);

(statearr_39784_39816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (22))){
var state_39769__$1 = state_39769;
var statearr_39785_39817 = state_39769__$1;
(statearr_39785_39817[(2)] = null);

(statearr_39785_39817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (6))){
var inst_39710 = (state_39769[(13)]);
var inst_39719 = f.call(null,inst_39710);
var inst_39720 = cljs.core.seq.call(null,inst_39719);
var inst_39721 = inst_39720;
var inst_39722 = null;
var inst_39723 = (0);
var inst_39724 = (0);
var state_39769__$1 = (function (){var statearr_39786 = state_39769;
(statearr_39786[(8)] = inst_39722);

(statearr_39786[(9)] = inst_39721);

(statearr_39786[(10)] = inst_39724);

(statearr_39786[(12)] = inst_39723);

return statearr_39786;
})();
var statearr_39787_39818 = state_39769__$1;
(statearr_39787_39818[(2)] = null);

(statearr_39787_39818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (17))){
var inst_39735 = (state_39769[(7)]);
var inst_39739 = cljs.core.chunk_first.call(null,inst_39735);
var inst_39740 = cljs.core.chunk_rest.call(null,inst_39735);
var inst_39741 = cljs.core.count.call(null,inst_39739);
var inst_39721 = inst_39740;
var inst_39722 = inst_39739;
var inst_39723 = inst_39741;
var inst_39724 = (0);
var state_39769__$1 = (function (){var statearr_39788 = state_39769;
(statearr_39788[(8)] = inst_39722);

(statearr_39788[(9)] = inst_39721);

(statearr_39788[(10)] = inst_39724);

(statearr_39788[(12)] = inst_39723);

return statearr_39788;
})();
var statearr_39789_39819 = state_39769__$1;
(statearr_39789_39819[(2)] = null);

(statearr_39789_39819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (3))){
var inst_39767 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39769__$1,inst_39767);
} else {
if((state_val_39770 === (12))){
var inst_39755 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39790_39820 = state_39769__$1;
(statearr_39790_39820[(2)] = inst_39755);

(statearr_39790_39820[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (2))){
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39769__$1,(4),in$);
} else {
if((state_val_39770 === (23))){
var inst_39763 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39791_39821 = state_39769__$1;
(statearr_39791_39821[(2)] = inst_39763);

(statearr_39791_39821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (19))){
var inst_39750 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39792_39822 = state_39769__$1;
(statearr_39792_39822[(2)] = inst_39750);

(statearr_39792_39822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (11))){
var inst_39735 = (state_39769[(7)]);
var inst_39721 = (state_39769[(9)]);
var inst_39735__$1 = cljs.core.seq.call(null,inst_39721);
var state_39769__$1 = (function (){var statearr_39793 = state_39769;
(statearr_39793[(7)] = inst_39735__$1);

return statearr_39793;
})();
if(inst_39735__$1){
var statearr_39794_39823 = state_39769__$1;
(statearr_39794_39823[(1)] = (14));

} else {
var statearr_39795_39824 = state_39769__$1;
(statearr_39795_39824[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (9))){
var inst_39757 = (state_39769[(2)]);
var inst_39758 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39769__$1 = (function (){var statearr_39796 = state_39769;
(statearr_39796[(15)] = inst_39757);

return statearr_39796;
})();
if(cljs.core.truth_(inst_39758)){
var statearr_39797_39825 = state_39769__$1;
(statearr_39797_39825[(1)] = (21));

} else {
var statearr_39798_39826 = state_39769__$1;
(statearr_39798_39826[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (5))){
var inst_39713 = cljs.core.async.close_BANG_.call(null,out);
var state_39769__$1 = state_39769;
var statearr_39799_39827 = state_39769__$1;
(statearr_39799_39827[(2)] = inst_39713);

(statearr_39799_39827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (14))){
var inst_39735 = (state_39769[(7)]);
var inst_39737 = cljs.core.chunked_seq_QMARK_.call(null,inst_39735);
var state_39769__$1 = state_39769;
if(inst_39737){
var statearr_39800_39828 = state_39769__$1;
(statearr_39800_39828[(1)] = (17));

} else {
var statearr_39801_39829 = state_39769__$1;
(statearr_39801_39829[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (16))){
var inst_39753 = (state_39769[(2)]);
var state_39769__$1 = state_39769;
var statearr_39802_39830 = state_39769__$1;
(statearr_39802_39830[(2)] = inst_39753);

(statearr_39802_39830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39770 === (10))){
var inst_39722 = (state_39769[(8)]);
var inst_39724 = (state_39769[(10)]);
var inst_39729 = cljs.core._nth.call(null,inst_39722,inst_39724);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39769__$1,(13),out,inst_39729);
} else {
if((state_val_39770 === (18))){
var inst_39735 = (state_39769[(7)]);
var inst_39744 = cljs.core.first.call(null,inst_39735);
var state_39769__$1 = state_39769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39769__$1,(20),out,inst_39744);
} else {
if((state_val_39770 === (8))){
var inst_39724 = (state_39769[(10)]);
var inst_39723 = (state_39769[(12)]);
var inst_39726 = (inst_39724 < inst_39723);
var inst_39727 = inst_39726;
var state_39769__$1 = state_39769;
if(cljs.core.truth_(inst_39727)){
var statearr_39803_39831 = state_39769__$1;
(statearr_39803_39831[(1)] = (10));

} else {
var statearr_39804_39832 = state_39769__$1;
(statearr_39804_39832[(1)] = (11));

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
});})(c__38167__auto__))
;
return ((function (switch__38079__auto__,c__38167__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0 = (function (){
var statearr_39805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39805[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__);

(statearr_39805[(1)] = (1));

return statearr_39805;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1 = (function (state_39769){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39806){if((e39806 instanceof Object)){
var ex__38083__auto__ = e39806;
var statearr_39807_39833 = state_39769;
(statearr_39807_39833[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39834 = state_39769;
state_39769 = G__39834;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__ = function(state_39769){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1.call(this,state_39769);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38080__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto__))
})();
var state__38169__auto__ = (function (){var statearr_39808 = f__38168__auto__.call(null);
(statearr_39808[(6)] = c__38167__auto__);

return statearr_39808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto__))
);

return c__38167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39836 = arguments.length;
switch (G__39836) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39839 = arguments.length;
switch (G__39839) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39842 = arguments.length;
switch (G__39842) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38167__auto___39889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39889,out){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39889,out){
return (function (state_39866){
var state_val_39867 = (state_39866[(1)]);
if((state_val_39867 === (7))){
var inst_39861 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39868_39890 = state_39866__$1;
(statearr_39868_39890[(2)] = inst_39861);

(statearr_39868_39890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (1))){
var inst_39843 = null;
var state_39866__$1 = (function (){var statearr_39869 = state_39866;
(statearr_39869[(7)] = inst_39843);

return statearr_39869;
})();
var statearr_39870_39891 = state_39866__$1;
(statearr_39870_39891[(2)] = null);

(statearr_39870_39891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (4))){
var inst_39846 = (state_39866[(8)]);
var inst_39846__$1 = (state_39866[(2)]);
var inst_39847 = (inst_39846__$1 == null);
var inst_39848 = cljs.core.not.call(null,inst_39847);
var state_39866__$1 = (function (){var statearr_39871 = state_39866;
(statearr_39871[(8)] = inst_39846__$1);

return statearr_39871;
})();
if(inst_39848){
var statearr_39872_39892 = state_39866__$1;
(statearr_39872_39892[(1)] = (5));

} else {
var statearr_39873_39893 = state_39866__$1;
(statearr_39873_39893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (6))){
var state_39866__$1 = state_39866;
var statearr_39874_39894 = state_39866__$1;
(statearr_39874_39894[(2)] = null);

(statearr_39874_39894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (3))){
var inst_39863 = (state_39866[(2)]);
var inst_39864 = cljs.core.async.close_BANG_.call(null,out);
var state_39866__$1 = (function (){var statearr_39875 = state_39866;
(statearr_39875[(9)] = inst_39863);

return statearr_39875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39866__$1,inst_39864);
} else {
if((state_val_39867 === (2))){
var state_39866__$1 = state_39866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39866__$1,(4),ch);
} else {
if((state_val_39867 === (11))){
var inst_39846 = (state_39866[(8)]);
var inst_39855 = (state_39866[(2)]);
var inst_39843 = inst_39846;
var state_39866__$1 = (function (){var statearr_39876 = state_39866;
(statearr_39876[(10)] = inst_39855);

(statearr_39876[(7)] = inst_39843);

return statearr_39876;
})();
var statearr_39877_39895 = state_39866__$1;
(statearr_39877_39895[(2)] = null);

(statearr_39877_39895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (9))){
var inst_39846 = (state_39866[(8)]);
var state_39866__$1 = state_39866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39866__$1,(11),out,inst_39846);
} else {
if((state_val_39867 === (5))){
var inst_39846 = (state_39866[(8)]);
var inst_39843 = (state_39866[(7)]);
var inst_39850 = cljs.core._EQ_.call(null,inst_39846,inst_39843);
var state_39866__$1 = state_39866;
if(inst_39850){
var statearr_39879_39896 = state_39866__$1;
(statearr_39879_39896[(1)] = (8));

} else {
var statearr_39880_39897 = state_39866__$1;
(statearr_39880_39897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (10))){
var inst_39858 = (state_39866[(2)]);
var state_39866__$1 = state_39866;
var statearr_39881_39898 = state_39866__$1;
(statearr_39881_39898[(2)] = inst_39858);

(statearr_39881_39898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39867 === (8))){
var inst_39843 = (state_39866[(7)]);
var tmp39878 = inst_39843;
var inst_39843__$1 = tmp39878;
var state_39866__$1 = (function (){var statearr_39882 = state_39866;
(statearr_39882[(7)] = inst_39843__$1);

return statearr_39882;
})();
var statearr_39883_39899 = state_39866__$1;
(statearr_39883_39899[(2)] = null);

(statearr_39883_39899[(1)] = (2));


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
});})(c__38167__auto___39889,out))
;
return ((function (switch__38079__auto__,c__38167__auto___39889,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_39884 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39884[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_39884[(1)] = (1));

return statearr_39884;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_39866){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39885){if((e39885 instanceof Object)){
var ex__38083__auto__ = e39885;
var statearr_39886_39900 = state_39866;
(statearr_39886_39900[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39901 = state_39866;
state_39866 = G__39901;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_39866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_39866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39889,out))
})();
var state__38169__auto__ = (function (){var statearr_39887 = f__38168__auto__.call(null);
(statearr_39887[(6)] = c__38167__auto___39889);

return statearr_39887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39889,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39903 = arguments.length;
switch (G__39903) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38167__auto___39969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___39969,out){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___39969,out){
return (function (state_39941){
var state_val_39942 = (state_39941[(1)]);
if((state_val_39942 === (7))){
var inst_39937 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
var statearr_39943_39970 = state_39941__$1;
(statearr_39943_39970[(2)] = inst_39937);

(statearr_39943_39970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (1))){
var inst_39904 = (new Array(n));
var inst_39905 = inst_39904;
var inst_39906 = (0);
var state_39941__$1 = (function (){var statearr_39944 = state_39941;
(statearr_39944[(7)] = inst_39905);

(statearr_39944[(8)] = inst_39906);

return statearr_39944;
})();
var statearr_39945_39971 = state_39941__$1;
(statearr_39945_39971[(2)] = null);

(statearr_39945_39971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (4))){
var inst_39909 = (state_39941[(9)]);
var inst_39909__$1 = (state_39941[(2)]);
var inst_39910 = (inst_39909__$1 == null);
var inst_39911 = cljs.core.not.call(null,inst_39910);
var state_39941__$1 = (function (){var statearr_39946 = state_39941;
(statearr_39946[(9)] = inst_39909__$1);

return statearr_39946;
})();
if(inst_39911){
var statearr_39947_39972 = state_39941__$1;
(statearr_39947_39972[(1)] = (5));

} else {
var statearr_39948_39973 = state_39941__$1;
(statearr_39948_39973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (15))){
var inst_39931 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
var statearr_39949_39974 = state_39941__$1;
(statearr_39949_39974[(2)] = inst_39931);

(statearr_39949_39974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (13))){
var state_39941__$1 = state_39941;
var statearr_39950_39975 = state_39941__$1;
(statearr_39950_39975[(2)] = null);

(statearr_39950_39975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (6))){
var inst_39906 = (state_39941[(8)]);
var inst_39927 = (inst_39906 > (0));
var state_39941__$1 = state_39941;
if(cljs.core.truth_(inst_39927)){
var statearr_39951_39976 = state_39941__$1;
(statearr_39951_39976[(1)] = (12));

} else {
var statearr_39952_39977 = state_39941__$1;
(statearr_39952_39977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (3))){
var inst_39939 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39941__$1,inst_39939);
} else {
if((state_val_39942 === (12))){
var inst_39905 = (state_39941[(7)]);
var inst_39929 = cljs.core.vec.call(null,inst_39905);
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39941__$1,(15),out,inst_39929);
} else {
if((state_val_39942 === (2))){
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39941__$1,(4),ch);
} else {
if((state_val_39942 === (11))){
var inst_39921 = (state_39941[(2)]);
var inst_39922 = (new Array(n));
var inst_39905 = inst_39922;
var inst_39906 = (0);
var state_39941__$1 = (function (){var statearr_39953 = state_39941;
(statearr_39953[(7)] = inst_39905);

(statearr_39953[(8)] = inst_39906);

(statearr_39953[(10)] = inst_39921);

return statearr_39953;
})();
var statearr_39954_39978 = state_39941__$1;
(statearr_39954_39978[(2)] = null);

(statearr_39954_39978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (9))){
var inst_39905 = (state_39941[(7)]);
var inst_39919 = cljs.core.vec.call(null,inst_39905);
var state_39941__$1 = state_39941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39941__$1,(11),out,inst_39919);
} else {
if((state_val_39942 === (5))){
var inst_39909 = (state_39941[(9)]);
var inst_39905 = (state_39941[(7)]);
var inst_39906 = (state_39941[(8)]);
var inst_39914 = (state_39941[(11)]);
var inst_39913 = (inst_39905[inst_39906] = inst_39909);
var inst_39914__$1 = (inst_39906 + (1));
var inst_39915 = (inst_39914__$1 < n);
var state_39941__$1 = (function (){var statearr_39955 = state_39941;
(statearr_39955[(12)] = inst_39913);

(statearr_39955[(11)] = inst_39914__$1);

return statearr_39955;
})();
if(cljs.core.truth_(inst_39915)){
var statearr_39956_39979 = state_39941__$1;
(statearr_39956_39979[(1)] = (8));

} else {
var statearr_39957_39980 = state_39941__$1;
(statearr_39957_39980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (14))){
var inst_39934 = (state_39941[(2)]);
var inst_39935 = cljs.core.async.close_BANG_.call(null,out);
var state_39941__$1 = (function (){var statearr_39959 = state_39941;
(statearr_39959[(13)] = inst_39934);

return statearr_39959;
})();
var statearr_39960_39981 = state_39941__$1;
(statearr_39960_39981[(2)] = inst_39935);

(statearr_39960_39981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (10))){
var inst_39925 = (state_39941[(2)]);
var state_39941__$1 = state_39941;
var statearr_39961_39982 = state_39941__$1;
(statearr_39961_39982[(2)] = inst_39925);

(statearr_39961_39982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39942 === (8))){
var inst_39905 = (state_39941[(7)]);
var inst_39914 = (state_39941[(11)]);
var tmp39958 = inst_39905;
var inst_39905__$1 = tmp39958;
var inst_39906 = inst_39914;
var state_39941__$1 = (function (){var statearr_39962 = state_39941;
(statearr_39962[(7)] = inst_39905__$1);

(statearr_39962[(8)] = inst_39906);

return statearr_39962;
})();
var statearr_39963_39983 = state_39941__$1;
(statearr_39963_39983[(2)] = null);

(statearr_39963_39983[(1)] = (2));


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
});})(c__38167__auto___39969,out))
;
return ((function (switch__38079__auto__,c__38167__auto___39969,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_39964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39964[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_39964[(1)] = (1));

return statearr_39964;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_39941){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_39941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e39965){if((e39965 instanceof Object)){
var ex__38083__auto__ = e39965;
var statearr_39966_39984 = state_39941;
(statearr_39966_39984[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39985 = state_39941;
state_39941 = G__39985;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_39941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_39941);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___39969,out))
})();
var state__38169__auto__ = (function (){var statearr_39967 = f__38168__auto__.call(null);
(statearr_39967[(6)] = c__38167__auto___39969);

return statearr_39967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___39969,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39987 = arguments.length;
switch (G__39987) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38167__auto___40057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38167__auto___40057,out){
return (function (){
var f__38168__auto__ = (function (){var switch__38079__auto__ = ((function (c__38167__auto___40057,out){
return (function (state_40029){
var state_val_40030 = (state_40029[(1)]);
if((state_val_40030 === (7))){
var inst_40025 = (state_40029[(2)]);
var state_40029__$1 = state_40029;
var statearr_40031_40058 = state_40029__$1;
(statearr_40031_40058[(2)] = inst_40025);

(statearr_40031_40058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (1))){
var inst_39988 = [];
var inst_39989 = inst_39988;
var inst_39990 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40029__$1 = (function (){var statearr_40032 = state_40029;
(statearr_40032[(7)] = inst_39989);

(statearr_40032[(8)] = inst_39990);

return statearr_40032;
})();
var statearr_40033_40059 = state_40029__$1;
(statearr_40033_40059[(2)] = null);

(statearr_40033_40059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (4))){
var inst_39993 = (state_40029[(9)]);
var inst_39993__$1 = (state_40029[(2)]);
var inst_39994 = (inst_39993__$1 == null);
var inst_39995 = cljs.core.not.call(null,inst_39994);
var state_40029__$1 = (function (){var statearr_40034 = state_40029;
(statearr_40034[(9)] = inst_39993__$1);

return statearr_40034;
})();
if(inst_39995){
var statearr_40035_40060 = state_40029__$1;
(statearr_40035_40060[(1)] = (5));

} else {
var statearr_40036_40061 = state_40029__$1;
(statearr_40036_40061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (15))){
var inst_40019 = (state_40029[(2)]);
var state_40029__$1 = state_40029;
var statearr_40037_40062 = state_40029__$1;
(statearr_40037_40062[(2)] = inst_40019);

(statearr_40037_40062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (13))){
var state_40029__$1 = state_40029;
var statearr_40038_40063 = state_40029__$1;
(statearr_40038_40063[(2)] = null);

(statearr_40038_40063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (6))){
var inst_39989 = (state_40029[(7)]);
var inst_40014 = inst_39989.length;
var inst_40015 = (inst_40014 > (0));
var state_40029__$1 = state_40029;
if(cljs.core.truth_(inst_40015)){
var statearr_40039_40064 = state_40029__$1;
(statearr_40039_40064[(1)] = (12));

} else {
var statearr_40040_40065 = state_40029__$1;
(statearr_40040_40065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (3))){
var inst_40027 = (state_40029[(2)]);
var state_40029__$1 = state_40029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40029__$1,inst_40027);
} else {
if((state_val_40030 === (12))){
var inst_39989 = (state_40029[(7)]);
var inst_40017 = cljs.core.vec.call(null,inst_39989);
var state_40029__$1 = state_40029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40029__$1,(15),out,inst_40017);
} else {
if((state_val_40030 === (2))){
var state_40029__$1 = state_40029;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40029__$1,(4),ch);
} else {
if((state_val_40030 === (11))){
var inst_39997 = (state_40029[(10)]);
var inst_39993 = (state_40029[(9)]);
var inst_40007 = (state_40029[(2)]);
var inst_40008 = [];
var inst_40009 = inst_40008.push(inst_39993);
var inst_39989 = inst_40008;
var inst_39990 = inst_39997;
var state_40029__$1 = (function (){var statearr_40041 = state_40029;
(statearr_40041[(7)] = inst_39989);

(statearr_40041[(11)] = inst_40009);

(statearr_40041[(12)] = inst_40007);

(statearr_40041[(8)] = inst_39990);

return statearr_40041;
})();
var statearr_40042_40066 = state_40029__$1;
(statearr_40042_40066[(2)] = null);

(statearr_40042_40066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (9))){
var inst_39989 = (state_40029[(7)]);
var inst_40005 = cljs.core.vec.call(null,inst_39989);
var state_40029__$1 = state_40029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40029__$1,(11),out,inst_40005);
} else {
if((state_val_40030 === (5))){
var inst_39997 = (state_40029[(10)]);
var inst_39990 = (state_40029[(8)]);
var inst_39993 = (state_40029[(9)]);
var inst_39997__$1 = f.call(null,inst_39993);
var inst_39998 = cljs.core._EQ_.call(null,inst_39997__$1,inst_39990);
var inst_39999 = cljs.core.keyword_identical_QMARK_.call(null,inst_39990,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40000 = (inst_39998) || (inst_39999);
var state_40029__$1 = (function (){var statearr_40043 = state_40029;
(statearr_40043[(10)] = inst_39997__$1);

return statearr_40043;
})();
if(cljs.core.truth_(inst_40000)){
var statearr_40044_40067 = state_40029__$1;
(statearr_40044_40067[(1)] = (8));

} else {
var statearr_40045_40068 = state_40029__$1;
(statearr_40045_40068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (14))){
var inst_40022 = (state_40029[(2)]);
var inst_40023 = cljs.core.async.close_BANG_.call(null,out);
var state_40029__$1 = (function (){var statearr_40047 = state_40029;
(statearr_40047[(13)] = inst_40022);

return statearr_40047;
})();
var statearr_40048_40069 = state_40029__$1;
(statearr_40048_40069[(2)] = inst_40023);

(statearr_40048_40069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (10))){
var inst_40012 = (state_40029[(2)]);
var state_40029__$1 = state_40029;
var statearr_40049_40070 = state_40029__$1;
(statearr_40049_40070[(2)] = inst_40012);

(statearr_40049_40070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40030 === (8))){
var inst_39989 = (state_40029[(7)]);
var inst_39997 = (state_40029[(10)]);
var inst_39993 = (state_40029[(9)]);
var inst_40002 = inst_39989.push(inst_39993);
var tmp40046 = inst_39989;
var inst_39989__$1 = tmp40046;
var inst_39990 = inst_39997;
var state_40029__$1 = (function (){var statearr_40050 = state_40029;
(statearr_40050[(7)] = inst_39989__$1);

(statearr_40050[(14)] = inst_40002);

(statearr_40050[(8)] = inst_39990);

return statearr_40050;
})();
var statearr_40051_40071 = state_40029__$1;
(statearr_40051_40071[(2)] = null);

(statearr_40051_40071[(1)] = (2));


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
});})(c__38167__auto___40057,out))
;
return ((function (switch__38079__auto__,c__38167__auto___40057,out){
return (function() {
var cljs$core$async$state_machine__38080__auto__ = null;
var cljs$core$async$state_machine__38080__auto____0 = (function (){
var statearr_40052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40052[(0)] = cljs$core$async$state_machine__38080__auto__);

(statearr_40052[(1)] = (1));

return statearr_40052;
});
var cljs$core$async$state_machine__38080__auto____1 = (function (state_40029){
while(true){
var ret_value__38081__auto__ = (function (){try{while(true){
var result__38082__auto__ = switch__38079__auto__.call(null,state_40029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38082__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38082__auto__;
}
break;
}
}catch (e40053){if((e40053 instanceof Object)){
var ex__38083__auto__ = e40053;
var statearr_40054_40072 = state_40029;
(statearr_40054_40072[(5)] = ex__38083__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38081__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40073 = state_40029;
state_40029 = G__40073;
continue;
} else {
return ret_value__38081__auto__;
}
break;
}
});
cljs$core$async$state_machine__38080__auto__ = function(state_40029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38080__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38080__auto____1.call(this,state_40029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38080__auto____0;
cljs$core$async$state_machine__38080__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38080__auto____1;
return cljs$core$async$state_machine__38080__auto__;
})()
;})(switch__38079__auto__,c__38167__auto___40057,out))
})();
var state__38169__auto__ = (function (){var statearr_40055 = f__38168__auto__.call(null);
(statearr_40055[(6)] = c__38167__auto___40057);

return statearr_40055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38169__auto__);
});})(c__38167__auto___40057,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513252664340
