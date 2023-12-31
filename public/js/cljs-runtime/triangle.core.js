goog.provide('triangle.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_konva$lib$ReactKonva=shadow.js.require("module$node_modules$react_konva$lib$ReactKonva", {});
triangle.core.stage = reagent.core.adapt_react_class(module$node_modules$react_konva$lib$ReactKonva.Stage);
triangle.core.layer = reagent.core.adapt_react_class(module$node_modules$react_konva$lib$ReactKonva.Layer);
triangle.core.rect = reagent.core.adapt_react_class(module$node_modules$react_konva$lib$ReactKonva.Rect);
triangle.core.line = reagent.core.adapt_react_class(module$node_modules$react_konva$lib$ReactKonva.Line);
triangle.core.circle = reagent.core.adapt_react_class(module$node_modules$react_konva$lib$ReactKonva.Circle);
triangle.core.group = reagent.core.adapt_react_class(module$node_modules$react_konva$lib$ReactKonva.Group);
triangle.core.text = reagent.core.adapt_react_class(module$node_modules$react_konva$lib$ReactKonva.Text);
triangle.core.window_width = (function triangle$core$window_width(){
return window.innerWidth;
});
triangle.core.window_height = (function triangle$core$window_height(){
return window.innerHeight;
});
triangle.core.init_vertex = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16830_SHARP_){
return triangle.calc.add.cljs$core$IFn$_invoke$arity$2(p1__16830_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(-100)], null)], null));
triangle.core.state_vertex = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.zipmap(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),triangle.core.init_vertex));
triangle.core.point_size = (7);
triangle.core.center_color_table = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"circumcenter","circumcenter",1796381631),"orange",new cljs.core.Keyword(null,"incenter","incenter",-740824425),"blue",new cljs.core.Keyword(null,"orthocenter","orthocenter",660619495),"gray",new cljs.core.Keyword(null,"centroid","centroid",-39626797),"red"], null);
triangle.core.state_center = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.zipmap(cljs.core.keys(triangle.core.center_color_table),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false)));
triangle.core.get_xy = (function triangle$core$get_xy(e){
var t = e.target;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.x(),t.y()], null);
});
triangle.core.vertex = (function triangle$core$vertex(k){
var vec__16831 = (function (){var G__16834 = cljs.core.deref(triangle.core.state_vertex);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__16834) : k.call(null,G__16834));
})();
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16831,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.circle,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"radius","radius",-2073122258),triangle.core.point_size,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (e){
return e.target.fill("black");
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (e){
return e.target.fill(null);
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-move","on-drag-move",1003139710),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(triangle.core.state_vertex,cljs.core.assoc,k,triangle.core.get_xy(e));
})], null)], null);
});
triangle.core.triangle = (function triangle$core$triangle(){
var map__16835 = cljs.core.deref(triangle.core.state_vertex);
var map__16835__$1 = cljs.core.__destructure_map(map__16835);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16835__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16835__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16835__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.line,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.flatten(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null)),new cljs.core.Keyword(null,"closed","closed",-919675359),true,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.vertex,new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.vertex,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.vertex,new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null);
});
triangle.core.select_center = (function triangle$core$select_center(){
var style = (function (k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"text-decoration-thickness","text-decoration-thickness",1831416171),(3),new cljs.core.Keyword(null,"text-decoration-color","text-decoration-color",853200020),(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(triangle.core.center_color_table) : k.call(null,triangle.core.center_color_table))], null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Select"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__5523__auto__ = (function triangle$core$select_center_$_iter__16836(s__16837){
return (new cljs.core.LazySeq(null,(function (){
var s__16837__$1 = s__16837;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16837__$1);
if(temp__5804__auto__){
var s__16837__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16837__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16837__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16839 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16838 = (0);
while(true){
if((i__16838 < size__5522__auto__)){
var vec__16840 = cljs.core._nth(c__5521__auto__,i__16838);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840,(1),null);
cljs.core.chunk_append(b__16839,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style(k)], null),cljs.core.name(k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__16838,vec__16840,k,v,c__5521__auto__,size__5522__auto__,b__16839,s__16837__$2,temp__5804__auto__,style){
return (function (e){
var t = e.target.checked;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(triangle.core.state_center,cljs.core.assoc,k,t);
});})(i__16838,vec__16840,k,v,c__5521__auto__,size__5522__auto__,b__16839,s__16837__$2,temp__5804__auto__,style))
], null)], null)], null)], null));

var G__16878 = (i__16838 + (1));
i__16838 = G__16878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16839),triangle$core$select_center_$_iter__16836(cljs.core.chunk_rest(s__16837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16839),null);
}
} else {
var vec__16843 = cljs.core.first(s__16837__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16843,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style(k)], null),cljs.core.name(k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__16843,k,v,s__16837__$2,temp__5804__auto__,style){
return (function (e){
var t = e.target.checked;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(triangle.core.state_center,cljs.core.assoc,k,t);
});})(vec__16843,k,v,s__16837__$2,temp__5804__auto__,style))
], null)], null)], null)], null),triangle$core$select_center_$_iter__16836(cljs.core.rest(s__16837__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(triangle.core.center_color_table);
})())], null)], null)], null);
});
triangle.core.point = (function triangle$core$point(x,y,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.circle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"radius","radius",-2073122258),triangle.core.point_size], null)], null);
});
/**
 * Should we display this center? It also checks
 *   if the three points makes a triangle and returns false
 *   if they don't.
 */
triangle.core.show_QMARK_ = (function triangle$core$show_QMARK_(k){
var map__16846 = cljs.core.deref(triangle.core.state_vertex);
var map__16846__$1 = cljs.core.__destructure_map(map__16846);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16846__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16846__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16846__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var and__5043__auto__ = triangle.calc.triangle_QMARK_(a,b,c);
if(and__5043__auto__){
var G__16847 = cljs.core.deref(triangle.core.state_center);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__16847) : k.call(null,G__16847));
} else {
return and__5043__auto__;
}
});
triangle.core.circumcenter = (function triangle$core$circumcenter(){
if(cljs.core.truth_(triangle.core.show_QMARK_(new cljs.core.Keyword(null,"circumcenter","circumcenter",1796381631)))){
var map__16848 = cljs.core.deref(triangle.core.state_vertex);
var map__16848__$1 = cljs.core.__destructure_map(map__16848);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16848__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16848__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16848__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var map__16849 = triangle.calc.circumcenter_data(a,b,c);
var map__16849__$1 = cljs.core.__destructure_map(map__16849);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16849__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16849__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__16850 = p;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16850,(1),null);
var color = new cljs.core.Keyword(null,"circumcenter","circumcenter",1796381631).cljs$core$IFn$_invoke$arity$1(triangle.core.center_color_table);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.group,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.point,x,y,color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.circle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)], null)], null);
} else {
return null;
}
});
triangle.core.incenter = (function triangle$core$incenter(){
if(cljs.core.truth_(triangle.core.show_QMARK_(new cljs.core.Keyword(null,"incenter","incenter",-740824425)))){
var map__16853 = cljs.core.deref(triangle.core.state_vertex);
var map__16853__$1 = cljs.core.__destructure_map(map__16853);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16853__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16853__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16853__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var map__16854 = triangle.calc.incenter_data(a,b,c);
var map__16854__$1 = cljs.core.__destructure_map(map__16854);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16854__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16854__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__16855 = p;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16855,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16855,(1),null);
var color = new cljs.core.Keyword(null,"incenter","incenter",-740824425).cljs$core$IFn$_invoke$arity$1(triangle.core.center_color_table);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.group,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.point,x,y,color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.circle,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"stroke","stroke",1741823555),color], null)], null)], null);
} else {
return null;
}
});
triangle.core.centroid = (function triangle$core$centroid(){
if(cljs.core.truth_(triangle.core.show_QMARK_(new cljs.core.Keyword(null,"centroid","centroid",-39626797)))){
var map__16858 = cljs.core.deref(triangle.core.state_vertex);
var map__16858__$1 = cljs.core.__destructure_map(map__16858);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16858__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16858__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16858__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var vec__16859 = triangle.calc.mul.cljs$core$IFn$_invoke$arity$2(((1) / (3)),triangle.calc.add.cljs$core$IFn$_invoke$arity$variadic(a,b,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859,(1),null);
var color = new cljs.core.Keyword(null,"centroid","centroid",-39626797).cljs$core$IFn$_invoke$arity$1(triangle.core.center_color_table);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.point,x,y,color], null);
} else {
return null;
}
});
triangle.core.ray = (function triangle$core$ray(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16879 = arguments.length;
var i__5770__auto___16880 = (0);
while(true){
if((i__5770__auto___16880 < len__5769__auto___16879)){
args__5775__auto__.push((arguments[i__5770__auto___16880]));

var G__16881 = (i__5770__auto___16880 + (1));
i__5770__auto___16880 = G__16881;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return triangle.core.ray.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(triangle.core.ray.cljs$core$IFn$_invoke$arity$variadic = (function (start,dir,p__16865){
var map__16866 = p__16865;
var map__16866__$1 = cljs.core.__destructure_map(map__16866);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16866__$1,new cljs.core.Keyword(null,"color","color",1011675173),"black");
var half_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16866__$1,new cljs.core.Keyword(null,"half?","half?",885850345),false);
var r = (triangle.core.window_width() + triangle.core.window_height());
var v = triangle.calc.mul.cljs$core$IFn$_invoke$arity$2(r,dir);
var start1 = (cljs.core.truth_(half_QMARK_)?start:triangle.calc.sub.cljs$core$IFn$_invoke$arity$2(start,v));
var end = triangle.calc.add.cljs$core$IFn$_invoke$arity$2(start,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.line,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.flatten(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start1,end], null)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"dash","dash",23821356),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null)], null)], null);
}));

(triangle.core.ray.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(triangle.core.ray.cljs$lang$applyTo = (function (seq16862){
var G__16863 = cljs.core.first(seq16862);
var seq16862__$1 = cljs.core.next(seq16862);
var G__16864 = cljs.core.first(seq16862__$1);
var seq16862__$2 = cljs.core.next(seq16862__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16863,G__16864,seq16862__$2);
}));

triangle.core.orthocenter = (function triangle$core$orthocenter(){
if(cljs.core.truth_(triangle.core.show_QMARK_(new cljs.core.Keyword(null,"orthocenter","orthocenter",660619495)))){
var map__16867 = cljs.core.deref(triangle.core.state_vertex);
var map__16867__$1 = cljs.core.__destructure_map(map__16867);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16867__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16867__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16867__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var map__16868 = triangle.calc.orthocenter_data(a,b,c);
var map__16868__$1 = cljs.core.__destructure_map(map__16868);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16868__$1,new cljs.core.Keyword(null,"p","p",151049309));
var rays = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16868__$1,new cljs.core.Keyword(null,"rays","rays",982661575));
var vec__16869 = p;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(1),null);
var color = new cljs.core.Keyword(null,"orthocenter","orthocenter",660619495).cljs$core$IFn$_invoke$arity$1(triangle.core.center_color_table);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.group,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.point,x,y,color], null)], null),(function (){var iter__5523__auto__ = (function triangle$core$orthocenter_$_iter__16872(s__16873){
return (new cljs.core.LazySeq(null,(function (){
var s__16873__$1 = s__16873;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16873__$1);
if(temp__5804__auto__){
var s__16873__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16873__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__16873__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__16875 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__16874 = (0);
while(true){
if((i__16874 < size__5522__auto__)){
var map__16876 = cljs.core._nth(c__5521__auto__,i__16874);
var map__16876__$1 = cljs.core.__destructure_map(map__16876);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16876__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16876__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
cljs.core.chunk_append(b__16875,triangle.core.ray.cljs$core$IFn$_invoke$arity$variadic(start,dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),color], 0)));

var G__16882 = (i__16874 + (1));
i__16874 = G__16882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16875),triangle$core$orthocenter_$_iter__16872(cljs.core.chunk_rest(s__16873__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16875),null);
}
} else {
var map__16877 = cljs.core.first(s__16873__$2);
var map__16877__$1 = cljs.core.__destructure_map(map__16877);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16877__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16877__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
return cljs.core.cons(triangle.core.ray.cljs$core$IFn$_invoke$arity$variadic(start,dir,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),color], 0)),triangle$core$orthocenter_$_iter__16872(cljs.core.rest(s__16873__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(rays);
})());
} else {
return null;
}
});
triangle.core.canvas = (function triangle$core$canvas(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.stage,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),triangle.core.window_width(),new cljs.core.Keyword(null,"height","height",1025178622),triangle.core.window_height()], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.layer,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.circumcenter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.incenter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.centroid], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.orthocenter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.triangle], null)], null)], null);
});
triangle.core.main = (function triangle$core$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"The four triangle centers"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),triangle.core.window_width(),new cljs.core.Keyword(null,"height","height",1025178622),triangle.core.window_height(),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"row"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.select_center], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [triangle.core.canvas], null)], null)], null);
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
