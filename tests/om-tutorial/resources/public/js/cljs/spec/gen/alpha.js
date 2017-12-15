// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__28820__auto__,writer__28821__auto__,opt__28822__auto__){
return cljs.core._write.call(null,writer__28821__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30434 = arguments.length;
var i__29367__auto___30435 = (0);
while(true){
if((i__29367__auto___30435 < len__29366__auto___30434)){
args__29373__auto__.push((arguments[i__29367__auto___30435]));

var G__30436 = (i__29367__auto___30435 + (1));
i__29367__auto___30435 = G__30436;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq30433){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30433));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30438 = arguments.length;
var i__29367__auto___30439 = (0);
while(true){
if((i__29367__auto___30439 < len__29366__auto___30438)){
args__29373__auto__.push((arguments[i__29367__auto___30439]));

var G__30440 = (i__29367__auto___30439 + (1));
i__29367__auto___30439 = G__30440;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq30437){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30437));
});

var g_QMARK__30441 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_30442 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__30441){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__30441))
,null));
var mkg_30443 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__30441,g_30442){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__30441,g_30442))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__30441,g_30442,mkg_30443){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30441).call(null,x);
});})(g_QMARK__30441,g_30442,mkg_30443))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__30441,g_30442,mkg_30443){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_30443).call(null,gfn);
});})(g_QMARK__30441,g_30442,mkg_30443))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__30441,g_30442,mkg_30443){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_30442).call(null,generator);
});})(g_QMARK__30441,g_30442,mkg_30443))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30405__auto___30463 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__30405__auto___30463){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30464 = arguments.length;
var i__29367__auto___30465 = (0);
while(true){
if((i__29367__auto___30465 < len__29366__auto___30464)){
args__29373__auto__.push((arguments[i__29367__auto___30465]));

var G__30466 = (i__29367__auto___30465 + (1));
i__29367__auto___30465 = G__30466;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30463))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30463),args);
});})(g__30405__auto___30463))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__30405__auto___30463){
return (function (seq30444){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30444));
});})(g__30405__auto___30463))
;


var g__30405__auto___30467 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__30405__auto___30467){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30468 = arguments.length;
var i__29367__auto___30469 = (0);
while(true){
if((i__29367__auto___30469 < len__29366__auto___30468)){
args__29373__auto__.push((arguments[i__29367__auto___30469]));

var G__30470 = (i__29367__auto___30469 + (1));
i__29367__auto___30469 = G__30470;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30467))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30467),args);
});})(g__30405__auto___30467))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__30405__auto___30467){
return (function (seq30445){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30445));
});})(g__30405__auto___30467))
;


var g__30405__auto___30471 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__30405__auto___30471){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30472 = arguments.length;
var i__29367__auto___30473 = (0);
while(true){
if((i__29367__auto___30473 < len__29366__auto___30472)){
args__29373__auto__.push((arguments[i__29367__auto___30473]));

var G__30474 = (i__29367__auto___30473 + (1));
i__29367__auto___30473 = G__30474;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30471))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30471),args);
});})(g__30405__auto___30471))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__30405__auto___30471){
return (function (seq30446){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30446));
});})(g__30405__auto___30471))
;


var g__30405__auto___30475 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__30405__auto___30475){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30476 = arguments.length;
var i__29367__auto___30477 = (0);
while(true){
if((i__29367__auto___30477 < len__29366__auto___30476)){
args__29373__auto__.push((arguments[i__29367__auto___30477]));

var G__30478 = (i__29367__auto___30477 + (1));
i__29367__auto___30477 = G__30478;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30475))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30475),args);
});})(g__30405__auto___30475))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__30405__auto___30475){
return (function (seq30447){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30447));
});})(g__30405__auto___30475))
;


var g__30405__auto___30479 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__30405__auto___30479){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30480 = arguments.length;
var i__29367__auto___30481 = (0);
while(true){
if((i__29367__auto___30481 < len__29366__auto___30480)){
args__29373__auto__.push((arguments[i__29367__auto___30481]));

var G__30482 = (i__29367__auto___30481 + (1));
i__29367__auto___30481 = G__30482;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30479))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30479),args);
});})(g__30405__auto___30479))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__30405__auto___30479){
return (function (seq30448){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30448));
});})(g__30405__auto___30479))
;


var g__30405__auto___30483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__30405__auto___30483){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30484 = arguments.length;
var i__29367__auto___30485 = (0);
while(true){
if((i__29367__auto___30485 < len__29366__auto___30484)){
args__29373__auto__.push((arguments[i__29367__auto___30485]));

var G__30486 = (i__29367__auto___30485 + (1));
i__29367__auto___30485 = G__30486;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30483))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30483),args);
});})(g__30405__auto___30483))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__30405__auto___30483){
return (function (seq30449){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30449));
});})(g__30405__auto___30483))
;


var g__30405__auto___30487 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__30405__auto___30487){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30488 = arguments.length;
var i__29367__auto___30489 = (0);
while(true){
if((i__29367__auto___30489 < len__29366__auto___30488)){
args__29373__auto__.push((arguments[i__29367__auto___30489]));

var G__30490 = (i__29367__auto___30489 + (1));
i__29367__auto___30489 = G__30490;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30487))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30487),args);
});})(g__30405__auto___30487))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__30405__auto___30487){
return (function (seq30450){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30450));
});})(g__30405__auto___30487))
;


var g__30405__auto___30491 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__30405__auto___30491){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30492 = arguments.length;
var i__29367__auto___30493 = (0);
while(true){
if((i__29367__auto___30493 < len__29366__auto___30492)){
args__29373__auto__.push((arguments[i__29367__auto___30493]));

var G__30494 = (i__29367__auto___30493 + (1));
i__29367__auto___30493 = G__30494;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30491))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30491),args);
});})(g__30405__auto___30491))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__30405__auto___30491){
return (function (seq30451){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30451));
});})(g__30405__auto___30491))
;


var g__30405__auto___30495 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__30405__auto___30495){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30496 = arguments.length;
var i__29367__auto___30497 = (0);
while(true){
if((i__29367__auto___30497 < len__29366__auto___30496)){
args__29373__auto__.push((arguments[i__29367__auto___30497]));

var G__30498 = (i__29367__auto___30497 + (1));
i__29367__auto___30497 = G__30498;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30495))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30495),args);
});})(g__30405__auto___30495))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__30405__auto___30495){
return (function (seq30452){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30452));
});})(g__30405__auto___30495))
;


var g__30405__auto___30499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__30405__auto___30499){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30500 = arguments.length;
var i__29367__auto___30501 = (0);
while(true){
if((i__29367__auto___30501 < len__29366__auto___30500)){
args__29373__auto__.push((arguments[i__29367__auto___30501]));

var G__30502 = (i__29367__auto___30501 + (1));
i__29367__auto___30501 = G__30502;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30499))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30499){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30499),args);
});})(g__30405__auto___30499))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__30405__auto___30499){
return (function (seq30453){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30453));
});})(g__30405__auto___30499))
;


var g__30405__auto___30503 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__30405__auto___30503){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30504 = arguments.length;
var i__29367__auto___30505 = (0);
while(true){
if((i__29367__auto___30505 < len__29366__auto___30504)){
args__29373__auto__.push((arguments[i__29367__auto___30505]));

var G__30506 = (i__29367__auto___30505 + (1));
i__29367__auto___30505 = G__30506;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30503))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30503){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30503),args);
});})(g__30405__auto___30503))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__30405__auto___30503){
return (function (seq30454){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30454));
});})(g__30405__auto___30503))
;


var g__30405__auto___30507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__30405__auto___30507){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30508 = arguments.length;
var i__29367__auto___30509 = (0);
while(true){
if((i__29367__auto___30509 < len__29366__auto___30508)){
args__29373__auto__.push((arguments[i__29367__auto___30509]));

var G__30510 = (i__29367__auto___30509 + (1));
i__29367__auto___30509 = G__30510;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30507))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30507){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30507),args);
});})(g__30405__auto___30507))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__30405__auto___30507){
return (function (seq30455){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30455));
});})(g__30405__auto___30507))
;


var g__30405__auto___30511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__30405__auto___30511){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30512 = arguments.length;
var i__29367__auto___30513 = (0);
while(true){
if((i__29367__auto___30513 < len__29366__auto___30512)){
args__29373__auto__.push((arguments[i__29367__auto___30513]));

var G__30514 = (i__29367__auto___30513 + (1));
i__29367__auto___30513 = G__30514;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30511))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30511){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30511),args);
});})(g__30405__auto___30511))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__30405__auto___30511){
return (function (seq30456){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30456));
});})(g__30405__auto___30511))
;


var g__30405__auto___30515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__30405__auto___30515){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30516 = arguments.length;
var i__29367__auto___30517 = (0);
while(true){
if((i__29367__auto___30517 < len__29366__auto___30516)){
args__29373__auto__.push((arguments[i__29367__auto___30517]));

var G__30518 = (i__29367__auto___30517 + (1));
i__29367__auto___30517 = G__30518;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30515))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30515){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30515),args);
});})(g__30405__auto___30515))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__30405__auto___30515){
return (function (seq30457){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30457));
});})(g__30405__auto___30515))
;


var g__30405__auto___30519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__30405__auto___30519){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30520 = arguments.length;
var i__29367__auto___30521 = (0);
while(true){
if((i__29367__auto___30521 < len__29366__auto___30520)){
args__29373__auto__.push((arguments[i__29367__auto___30521]));

var G__30522 = (i__29367__auto___30521 + (1));
i__29367__auto___30521 = G__30522;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30519))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30519){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30519),args);
});})(g__30405__auto___30519))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__30405__auto___30519){
return (function (seq30458){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30458));
});})(g__30405__auto___30519))
;


var g__30405__auto___30523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__30405__auto___30523){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30524 = arguments.length;
var i__29367__auto___30525 = (0);
while(true){
if((i__29367__auto___30525 < len__29366__auto___30524)){
args__29373__auto__.push((arguments[i__29367__auto___30525]));

var G__30526 = (i__29367__auto___30525 + (1));
i__29367__auto___30525 = G__30526;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30523))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30523){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30523),args);
});})(g__30405__auto___30523))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__30405__auto___30523){
return (function (seq30459){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30459));
});})(g__30405__auto___30523))
;


var g__30405__auto___30527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__30405__auto___30527){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30528 = arguments.length;
var i__29367__auto___30529 = (0);
while(true){
if((i__29367__auto___30529 < len__29366__auto___30528)){
args__29373__auto__.push((arguments[i__29367__auto___30529]));

var G__30530 = (i__29367__auto___30529 + (1));
i__29367__auto___30529 = G__30530;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30527))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30527){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30527),args);
});})(g__30405__auto___30527))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30405__auto___30527){
return (function (seq30460){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30460));
});})(g__30405__auto___30527))
;


var g__30405__auto___30531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__30405__auto___30531){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30532 = arguments.length;
var i__29367__auto___30533 = (0);
while(true){
if((i__29367__auto___30533 < len__29366__auto___30532)){
args__29373__auto__.push((arguments[i__29367__auto___30533]));

var G__30534 = (i__29367__auto___30533 + (1));
i__29367__auto___30533 = G__30534;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30531))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30531){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30531),args);
});})(g__30405__auto___30531))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__30405__auto___30531){
return (function (seq30461){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30461));
});})(g__30405__auto___30531))
;


var g__30405__auto___30535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__30405__auto___30535){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30536 = arguments.length;
var i__29367__auto___30537 = (0);
while(true){
if((i__29367__auto___30537 < len__29366__auto___30536)){
args__29373__auto__.push((arguments[i__29367__auto___30537]));

var G__30538 = (i__29367__auto___30537 + (1));
i__29367__auto___30537 = G__30538;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30405__auto___30535))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30405__auto___30535){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30405__auto___30535),args);
});})(g__30405__auto___30535))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__30405__auto___30535){
return (function (seq30462){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30462));
});})(g__30405__auto___30535))
;

var g__30418__auto___30560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__30418__auto___30560){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30561 = arguments.length;
var i__29367__auto___30562 = (0);
while(true){
if((i__29367__auto___30562 < len__29366__auto___30561)){
args__29373__auto__.push((arguments[i__29367__auto___30562]));

var G__30563 = (i__29367__auto___30562 + (1));
i__29367__auto___30562 = G__30563;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30560))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30560){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30560);
});})(g__30418__auto___30560))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__30418__auto___30560){
return (function (seq30539){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30539));
});})(g__30418__auto___30560))
;


var g__30418__auto___30564 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__30418__auto___30564){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30565 = arguments.length;
var i__29367__auto___30566 = (0);
while(true){
if((i__29367__auto___30566 < len__29366__auto___30565)){
args__29373__auto__.push((arguments[i__29367__auto___30566]));

var G__30567 = (i__29367__auto___30566 + (1));
i__29367__auto___30566 = G__30567;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30564))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30564){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30564);
});})(g__30418__auto___30564))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__30418__auto___30564){
return (function (seq30540){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30540));
});})(g__30418__auto___30564))
;


var g__30418__auto___30568 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__30418__auto___30568){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30569 = arguments.length;
var i__29367__auto___30570 = (0);
while(true){
if((i__29367__auto___30570 < len__29366__auto___30569)){
args__29373__auto__.push((arguments[i__29367__auto___30570]));

var G__30571 = (i__29367__auto___30570 + (1));
i__29367__auto___30570 = G__30571;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30568))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30568){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30568);
});})(g__30418__auto___30568))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__30418__auto___30568){
return (function (seq30541){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30541));
});})(g__30418__auto___30568))
;


var g__30418__auto___30572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__30418__auto___30572){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30573 = arguments.length;
var i__29367__auto___30574 = (0);
while(true){
if((i__29367__auto___30574 < len__29366__auto___30573)){
args__29373__auto__.push((arguments[i__29367__auto___30574]));

var G__30575 = (i__29367__auto___30574 + (1));
i__29367__auto___30574 = G__30575;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30572))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30572){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30572);
});})(g__30418__auto___30572))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__30418__auto___30572){
return (function (seq30542){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30542));
});})(g__30418__auto___30572))
;


var g__30418__auto___30576 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__30418__auto___30576){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30577 = arguments.length;
var i__29367__auto___30578 = (0);
while(true){
if((i__29367__auto___30578 < len__29366__auto___30577)){
args__29373__auto__.push((arguments[i__29367__auto___30578]));

var G__30579 = (i__29367__auto___30578 + (1));
i__29367__auto___30578 = G__30579;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30576))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30576){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30576);
});})(g__30418__auto___30576))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__30418__auto___30576){
return (function (seq30543){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30543));
});})(g__30418__auto___30576))
;


var g__30418__auto___30580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__30418__auto___30580){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30581 = arguments.length;
var i__29367__auto___30582 = (0);
while(true){
if((i__29367__auto___30582 < len__29366__auto___30581)){
args__29373__auto__.push((arguments[i__29367__auto___30582]));

var G__30583 = (i__29367__auto___30582 + (1));
i__29367__auto___30582 = G__30583;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30580))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30580){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30580);
});})(g__30418__auto___30580))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__30418__auto___30580){
return (function (seq30544){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30544));
});})(g__30418__auto___30580))
;


var g__30418__auto___30584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__30418__auto___30584){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30585 = arguments.length;
var i__29367__auto___30586 = (0);
while(true){
if((i__29367__auto___30586 < len__29366__auto___30585)){
args__29373__auto__.push((arguments[i__29367__auto___30586]));

var G__30587 = (i__29367__auto___30586 + (1));
i__29367__auto___30586 = G__30587;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30584))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30584){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30584);
});})(g__30418__auto___30584))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__30418__auto___30584){
return (function (seq30545){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30545));
});})(g__30418__auto___30584))
;


var g__30418__auto___30588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__30418__auto___30588){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30589 = arguments.length;
var i__29367__auto___30590 = (0);
while(true){
if((i__29367__auto___30590 < len__29366__auto___30589)){
args__29373__auto__.push((arguments[i__29367__auto___30590]));

var G__30591 = (i__29367__auto___30590 + (1));
i__29367__auto___30590 = G__30591;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30588))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30588){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30588);
});})(g__30418__auto___30588))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__30418__auto___30588){
return (function (seq30546){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30546));
});})(g__30418__auto___30588))
;


var g__30418__auto___30592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__30418__auto___30592){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30593 = arguments.length;
var i__29367__auto___30594 = (0);
while(true){
if((i__29367__auto___30594 < len__29366__auto___30593)){
args__29373__auto__.push((arguments[i__29367__auto___30594]));

var G__30595 = (i__29367__auto___30594 + (1));
i__29367__auto___30594 = G__30595;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30592))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30592){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30592);
});})(g__30418__auto___30592))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__30418__auto___30592){
return (function (seq30547){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30547));
});})(g__30418__auto___30592))
;


var g__30418__auto___30596 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__30418__auto___30596){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30597 = arguments.length;
var i__29367__auto___30598 = (0);
while(true){
if((i__29367__auto___30598 < len__29366__auto___30597)){
args__29373__auto__.push((arguments[i__29367__auto___30598]));

var G__30599 = (i__29367__auto___30598 + (1));
i__29367__auto___30598 = G__30599;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30596))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30596){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30596);
});})(g__30418__auto___30596))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__30418__auto___30596){
return (function (seq30548){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30548));
});})(g__30418__auto___30596))
;


var g__30418__auto___30600 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__30418__auto___30600){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30601 = arguments.length;
var i__29367__auto___30602 = (0);
while(true){
if((i__29367__auto___30602 < len__29366__auto___30601)){
args__29373__auto__.push((arguments[i__29367__auto___30602]));

var G__30603 = (i__29367__auto___30602 + (1));
i__29367__auto___30602 = G__30603;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30600))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30600){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30600);
});})(g__30418__auto___30600))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__30418__auto___30600){
return (function (seq30549){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30549));
});})(g__30418__auto___30600))
;


var g__30418__auto___30604 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__30418__auto___30604){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30605 = arguments.length;
var i__29367__auto___30606 = (0);
while(true){
if((i__29367__auto___30606 < len__29366__auto___30605)){
args__29373__auto__.push((arguments[i__29367__auto___30606]));

var G__30607 = (i__29367__auto___30606 + (1));
i__29367__auto___30606 = G__30607;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30604))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30604){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30604);
});})(g__30418__auto___30604))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__30418__auto___30604){
return (function (seq30550){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30550));
});})(g__30418__auto___30604))
;


var g__30418__auto___30608 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__30418__auto___30608){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30609 = arguments.length;
var i__29367__auto___30610 = (0);
while(true){
if((i__29367__auto___30610 < len__29366__auto___30609)){
args__29373__auto__.push((arguments[i__29367__auto___30610]));

var G__30611 = (i__29367__auto___30610 + (1));
i__29367__auto___30610 = G__30611;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30608))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30608){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30608);
});})(g__30418__auto___30608))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__30418__auto___30608){
return (function (seq30551){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30551));
});})(g__30418__auto___30608))
;


var g__30418__auto___30612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__30418__auto___30612){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30613 = arguments.length;
var i__29367__auto___30614 = (0);
while(true){
if((i__29367__auto___30614 < len__29366__auto___30613)){
args__29373__auto__.push((arguments[i__29367__auto___30614]));

var G__30615 = (i__29367__auto___30614 + (1));
i__29367__auto___30614 = G__30615;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30612))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30612){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30612);
});})(g__30418__auto___30612))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__30418__auto___30612){
return (function (seq30552){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30552));
});})(g__30418__auto___30612))
;


var g__30418__auto___30616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__30418__auto___30616){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30617 = arguments.length;
var i__29367__auto___30618 = (0);
while(true){
if((i__29367__auto___30618 < len__29366__auto___30617)){
args__29373__auto__.push((arguments[i__29367__auto___30618]));

var G__30619 = (i__29367__auto___30618 + (1));
i__29367__auto___30618 = G__30619;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30616))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30616){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30616);
});})(g__30418__auto___30616))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__30418__auto___30616){
return (function (seq30553){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30553));
});})(g__30418__auto___30616))
;


var g__30418__auto___30620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__30418__auto___30620){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30621 = arguments.length;
var i__29367__auto___30622 = (0);
while(true){
if((i__29367__auto___30622 < len__29366__auto___30621)){
args__29373__auto__.push((arguments[i__29367__auto___30622]));

var G__30623 = (i__29367__auto___30622 + (1));
i__29367__auto___30622 = G__30623;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30620))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30620){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30620);
});})(g__30418__auto___30620))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__30418__auto___30620){
return (function (seq30554){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30554));
});})(g__30418__auto___30620))
;


var g__30418__auto___30624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__30418__auto___30624){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30625 = arguments.length;
var i__29367__auto___30626 = (0);
while(true){
if((i__29367__auto___30626 < len__29366__auto___30625)){
args__29373__auto__.push((arguments[i__29367__auto___30626]));

var G__30627 = (i__29367__auto___30626 + (1));
i__29367__auto___30626 = G__30627;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30624))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30624){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30624);
});})(g__30418__auto___30624))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__30418__auto___30624){
return (function (seq30555){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30555));
});})(g__30418__auto___30624))
;


var g__30418__auto___30628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__30418__auto___30628){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30629 = arguments.length;
var i__29367__auto___30630 = (0);
while(true){
if((i__29367__auto___30630 < len__29366__auto___30629)){
args__29373__auto__.push((arguments[i__29367__auto___30630]));

var G__30631 = (i__29367__auto___30630 + (1));
i__29367__auto___30630 = G__30631;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30628))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30628){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30628);
});})(g__30418__auto___30628))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__30418__auto___30628){
return (function (seq30556){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30556));
});})(g__30418__auto___30628))
;


var g__30418__auto___30632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__30418__auto___30632){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30633 = arguments.length;
var i__29367__auto___30634 = (0);
while(true){
if((i__29367__auto___30634 < len__29366__auto___30633)){
args__29373__auto__.push((arguments[i__29367__auto___30634]));

var G__30635 = (i__29367__auto___30634 + (1));
i__29367__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30632))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30632){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30632);
});})(g__30418__auto___30632))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__30418__auto___30632){
return (function (seq30557){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30557));
});})(g__30418__auto___30632))
;


var g__30418__auto___30636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__30418__auto___30636){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30637 = arguments.length;
var i__29367__auto___30638 = (0);
while(true){
if((i__29367__auto___30638 < len__29366__auto___30637)){
args__29373__auto__.push((arguments[i__29367__auto___30638]));

var G__30639 = (i__29367__auto___30638 + (1));
i__29367__auto___30638 = G__30639;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30636))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30636){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30636);
});})(g__30418__auto___30636))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__30418__auto___30636){
return (function (seq30558){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30558));
});})(g__30418__auto___30636))
;


var g__30418__auto___30640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__30418__auto___30640){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30641 = arguments.length;
var i__29367__auto___30642 = (0);
while(true){
if((i__29367__auto___30642 < len__29366__auto___30641)){
args__29373__auto__.push((arguments[i__29367__auto___30642]));

var G__30643 = (i__29367__auto___30642 + (1));
i__29367__auto___30642 = G__30643;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});})(g__30418__auto___30640))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30418__auto___30640){
return (function (args){
return cljs.core.deref.call(null,g__30418__auto___30640);
});})(g__30418__auto___30640))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__30418__auto___30640){
return (function (seq30559){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30559));
});})(g__30418__auto___30640))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29373__auto__ = [];
var len__29366__auto___30646 = arguments.length;
var i__29367__auto___30647 = (0);
while(true){
if((i__29367__auto___30647 < len__29366__auto___30646)){
args__29373__auto__.push((arguments[i__29367__auto___30647]));

var G__30648 = (i__29367__auto___30647 + (1));
i__29367__auto___30647 = G__30648;
continue;
} else {
}
break;
}

var argseq__29374__auto__ = ((((0) < args__29373__auto__.length))?(new cljs.core.IndexedSeq(args__29373__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29374__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__30644_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30644_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq30645){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30645));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__30649_SHARP_){
return (new Date(p1__30649_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1513252586218
