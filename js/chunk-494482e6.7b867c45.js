(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-494482e6"],{"2a46":function(e,t,l){},c293:function(e,t,l){"use strict";l.r(t);var a=l("7a23");const o=e=>(Object(a["pushScopeId"])("data-v-d966ecca"),e=e(),Object(a["popScopeId"])(),e),c={class:"main"},i={class:"trainBox"},d={id:"result"},n=o(()=>Object(a["createElementVNode"])("div",null,"正在训练中请稍后",-1));function s(e,t){const l=Object(a["resolveComponent"])("el-button"),o=Object(a["resolveComponent"])("el-input"),s=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("h2",null,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(l,{onClick:e.train},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("训练")]),_:1},8,["onClick"]),Object(a["createVNode"])(o,{type:"number",size:"5",modelValue:e.numx,"onUpdate:modelValue":t[0]||(t[0]=t=>e.numx=t),modelModifiers:{number:!0},placeholder:"请输入坐标X"},null,8,["modelValue"]),Object(a["createVNode"])(o,{type:"number",size:"5",modelValue:e.numy,"onUpdate:modelValue":t[1]||(t[1]=t=>e.numy=t),modelModifiers:{number:!0},placeholder:"请输入坐标y"},null,8,["modelValue"]),Object(a["createVNode"])(l,{onClick:t[2]||(t[2]=t=>e.predict())},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("预测")]),_:1})]),Object(a["createVNode"])(s,{width:400,showClose:!1,modelValue:e.visible,"onUpdate:modelValue":t[3]||(t[3]=t=>e.visible=t),modelModifiers:{lazy:!0}},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",d,"预测结果："+Object(a["toDisplayString"])(e.result),1),Object(a["createVNode"])(l,{type:"primary",onClick:e.close,id:"elbtn1"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("确认")]),_:1},8,["onClick"])]),_:1},8,["modelValue"]),Object(a["createVNode"])(s,{width:400,showClose:!1,modelValue:e.visible2,"onUpdate:modelValue":t[4]||(t[4]=t=>e.visible2=t),modelModifiers:{lazy:!0},"close-on-click-modal":!1},{default:Object(a["withCtx"])(()=>[n]),_:1},8,["modelValue"])])}var r=l("ce1a"),b=l("75f0");let u;const m=[{label:1,x:1,y:0},{label:1,x:2,y:0},{label:1,x:3,y:1},{label:1,x:0,y:2},{label:0,x:-1,y:0},{label:-1,x:100,y:-1}];b["render"].scatterplot({name:"逻辑回归训练数据"},{values:[m.filter(e=>1===e.label),m.filter(e=>0===e.label)]});const p=r["g"]();p.add(r["a"].dense({units:1,inputShape:[2],activation:"sigmoid"})),p.compile({loss:r["c"].logLoss,optimizer:r["q"].adam(.1)});var j={data(){return{title:"逻辑回归",visible:!1,visible2:!1,numx:0,numy:0,result:0}},methods:{async train(){this.visible2=!0;const e=r["k"](m.map(e=>[e.x,e.y])),t=r["k"](m.map(e=>e.label));await p.fit(e,t,{batchSize:40,epochs:20,callbacks:b["show"].fitCallbacks({name:"训练效果"},["loss"])}),this.visible2=!1,u=p},predict(){this.visible=!0;let e=u.predict(r["k"]([[1*this.numx,1*this.numy]])).dataSync()[0];this.result=e},close(){this.visible=!1}}},O=(l("eae4"),l("6b0d")),h=l.n(O);const V=h()(j,[["render",s],["__scopeId","data-v-d966ecca"]]);t["default"]=V},eae4:function(e,t,l){"use strict";l("2a46")}}]);
//# sourceMappingURL=chunk-494482e6.7b867c45.js.map