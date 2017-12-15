// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31487){
var map__31488 = p__31487;
var map__31488__$1 = ((((!((map__31488 == null)))?((((map__31488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31488):map__31488);
var m = map__31488__$1;
var n = cljs.core.get.call(null,map__31488__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31488__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31490_31512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31491_31513 = null;
var count__31492_31514 = (0);
var i__31493_31515 = (0);
while(true){
if((i__31493_31515 < count__31492_31514)){
var f_31516 = cljs.core._nth.call(null,chunk__31491_31513,i__31493_31515);
cljs.core.println.call(null,"  ",f_31516);

var G__31517 = seq__31490_31512;
var G__31518 = chunk__31491_31513;
var G__31519 = count__31492_31514;
var G__31520 = (i__31493_31515 + (1));
seq__31490_31512 = G__31517;
chunk__31491_31513 = G__31518;
count__31492_31514 = G__31519;
i__31493_31515 = G__31520;
continue;
} else {
var temp__4657__auto___31521 = cljs.core.seq.call(null,seq__31490_31512);
if(temp__4657__auto___31521){
var seq__31490_31522__$1 = temp__4657__auto___31521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31490_31522__$1)){
var c__29034__auto___31523 = cljs.core.chunk_first.call(null,seq__31490_31522__$1);
var G__31524 = cljs.core.chunk_rest.call(null,seq__31490_31522__$1);
var G__31525 = c__29034__auto___31523;
var G__31526 = cljs.core.count.call(null,c__29034__auto___31523);
var G__31527 = (0);
seq__31490_31512 = G__31524;
chunk__31491_31513 = G__31525;
count__31492_31514 = G__31526;
i__31493_31515 = G__31527;
continue;
} else {
var f_31528 = cljs.core.first.call(null,seq__31490_31522__$1);
cljs.core.println.call(null,"  ",f_31528);

var G__31529 = cljs.core.next.call(null,seq__31490_31522__$1);
var G__31530 = null;
var G__31531 = (0);
var G__31532 = (0);
seq__31490_31512 = G__31529;
chunk__31491_31513 = G__31530;
count__31492_31514 = G__31531;
i__31493_31515 = G__31532;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31533 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28195__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28195__auto__)){
return or__28195__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31533);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31533)))?cljs.core.second.call(null,arglists_31533):arglists_31533));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31494_31534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31495_31535 = null;
var count__31496_31536 = (0);
var i__31497_31537 = (0);
while(true){
if((i__31497_31537 < count__31496_31536)){
var vec__31498_31538 = cljs.core._nth.call(null,chunk__31495_31535,i__31497_31537);
var name_31539 = cljs.core.nth.call(null,vec__31498_31538,(0),null);
var map__31501_31540 = cljs.core.nth.call(null,vec__31498_31538,(1),null);
var map__31501_31541__$1 = ((((!((map__31501_31540 == null)))?((((map__31501_31540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31501_31540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31501_31540):map__31501_31540);
var doc_31542 = cljs.core.get.call(null,map__31501_31541__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31543 = cljs.core.get.call(null,map__31501_31541__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31539);

cljs.core.println.call(null," ",arglists_31543);

if(cljs.core.truth_(doc_31542)){
cljs.core.println.call(null," ",doc_31542);
} else {
}

var G__31544 = seq__31494_31534;
var G__31545 = chunk__31495_31535;
var G__31546 = count__31496_31536;
var G__31547 = (i__31497_31537 + (1));
seq__31494_31534 = G__31544;
chunk__31495_31535 = G__31545;
count__31496_31536 = G__31546;
i__31497_31537 = G__31547;
continue;
} else {
var temp__4657__auto___31548 = cljs.core.seq.call(null,seq__31494_31534);
if(temp__4657__auto___31548){
var seq__31494_31549__$1 = temp__4657__auto___31548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31494_31549__$1)){
var c__29034__auto___31550 = cljs.core.chunk_first.call(null,seq__31494_31549__$1);
var G__31551 = cljs.core.chunk_rest.call(null,seq__31494_31549__$1);
var G__31552 = c__29034__auto___31550;
var G__31553 = cljs.core.count.call(null,c__29034__auto___31550);
var G__31554 = (0);
seq__31494_31534 = G__31551;
chunk__31495_31535 = G__31552;
count__31496_31536 = G__31553;
i__31497_31537 = G__31554;
continue;
} else {
var vec__31503_31555 = cljs.core.first.call(null,seq__31494_31549__$1);
var name_31556 = cljs.core.nth.call(null,vec__31503_31555,(0),null);
var map__31506_31557 = cljs.core.nth.call(null,vec__31503_31555,(1),null);
var map__31506_31558__$1 = ((((!((map__31506_31557 == null)))?((((map__31506_31557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31506_31557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31506_31557):map__31506_31557);
var doc_31559 = cljs.core.get.call(null,map__31506_31558__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31560 = cljs.core.get.call(null,map__31506_31558__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31556);

cljs.core.println.call(null," ",arglists_31560);

if(cljs.core.truth_(doc_31559)){
cljs.core.println.call(null," ",doc_31559);
} else {
}

var G__31561 = cljs.core.next.call(null,seq__31494_31549__$1);
var G__31562 = null;
var G__31563 = (0);
var G__31564 = (0);
seq__31494_31534 = G__31561;
chunk__31495_31535 = G__31562;
count__31496_31536 = G__31563;
i__31497_31537 = G__31564;
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
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__31508 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31509 = null;
var count__31510 = (0);
var i__31511 = (0);
while(true){
if((i__31511 < count__31510)){
var role = cljs.core._nth.call(null,chunk__31509,i__31511);
var temp__4657__auto___31565__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31565__$1)){
var spec_31566 = temp__4657__auto___31565__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31566));
} else {
}

var G__31567 = seq__31508;
var G__31568 = chunk__31509;
var G__31569 = count__31510;
var G__31570 = (i__31511 + (1));
seq__31508 = G__31567;
chunk__31509 = G__31568;
count__31510 = G__31569;
i__31511 = G__31570;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__31508);
if(temp__4657__auto____$1){
var seq__31508__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31508__$1)){
var c__29034__auto__ = cljs.core.chunk_first.call(null,seq__31508__$1);
var G__31571 = cljs.core.chunk_rest.call(null,seq__31508__$1);
var G__31572 = c__29034__auto__;
var G__31573 = cljs.core.count.call(null,c__29034__auto__);
var G__31574 = (0);
seq__31508 = G__31571;
chunk__31509 = G__31572;
count__31510 = G__31573;
i__31511 = G__31574;
continue;
} else {
var role = cljs.core.first.call(null,seq__31508__$1);
var temp__4657__auto___31575__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___31575__$2)){
var spec_31576 = temp__4657__auto___31575__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31576));
} else {
}

var G__31577 = cljs.core.next.call(null,seq__31508__$1);
var G__31578 = null;
var G__31579 = (0);
var G__31580 = (0);
seq__31508 = G__31577;
chunk__31509 = G__31578;
count__31510 = G__31579;
i__31511 = G__31580;
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

//# sourceMappingURL=repl.js.map?rel=1513252590920
