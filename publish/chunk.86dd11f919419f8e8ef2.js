(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{421:function(t,e,o){"use strict";o.r(e);var n=o(36),r=o(53);const a=n.$ecomConfig.get("currency")||"BRL",c=t=>{const e={currency:a,content_ids:[t.sku],content_name:t.name,value:Object(r.a)(t),content_type:"product"};return t.categories&&t.categories.length&&(e.content_category=t.category_tree||t.categories[0].name),e};var s=t=>{const e=window.storefront&&window.storefront.context;e&&"products"===e.resource&&t("ViewContent",c(e.body))},i=o(12),u=o(40),d=(t,e)=>{const o=window.storefrontApp&&window.storefrontApp.router;if(o){let n,r,c;const s=t=>{const{amount:e}=t||window.storefrontApp,o={value:e&&e.total||i.a.data&&i.a.data.subtotal||0,currency:a,contents:[],content_type:"product"};return i.a.data&&Array.isArray(i.a.data.items)&&i.a.data.items.forEach((t=>{let{sku:e,quantity:n}=t;o.contents.push({id:e,quantity:n})})),o},d=(e,o)=>{const a=s(),c={...a,checkout_step:e,checkout_option:o};e<=1||!n?(t("InitiateCheckout",a),t("Checkout",c,!0),n=!0):r||(t("CheckoutOption",c,!0),r=!0)},l=(o,n)=>{if(!c&&!0!==e.disablePurchase){if(window.localStorage.getItem("fbq.orderIdSent")!==o){let e,r;if(n)try{e=JSON.parse(n)}catch(t){e=null}r=e&&e.number?"".concat(e.number,":r").concat(parseInt(1e3*Math.random(),10)):o,t("Purchase",{...s(e),order_id:o,eventID:r}),u.a.requestApi("/orders/".concat(o,"/metafields.json"),"POST",{namespace:"fb",field:"pixel",value:JSON.stringify({eventID:r,userAgent:navigator.userAgent})}),window.localStorage.setItem("fbq.orderIdSent",o)}c=!0}};let f;const w=t=>{let{name:e,params:o}=t;switch(e){case"cart":d(1,"Review Cart");break;case"checkout":d(2,"Confirm Purchase");break;case"confirmation":clearTimeout(f),o.json?l(o.id,decodeURIComponent(o.json)):f=setTimeout((()=>{l(o.id)}),1500)}};o.currentRoute&&w(o.currentRoute),o.afterEach(w)}},l=t=>{i.a.on("addItem",(e=>{let{item:o}=e;t("AddToCart",c(o))}))};e.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("function"==typeof window.fbq){const e=function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t.debug&&console.log("fbq",e,o);const r=n?"trackCustom":"track";if(o.eventID){const t=o.eventID;delete o.eventID,window.fbq(r,e,o,{eventID:t})}else window.fbq(r,e,o)};s(e),d(e,t),l(e)}}}}]);