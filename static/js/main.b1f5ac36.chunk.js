(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{87:function(t,e,c){},88:function(t,e,c){"use strict";c.r(e);var i=c(2),a=c(0),r=c.n(a),n=c(10),s=c.n(n),o=c(27),d=c(15),l=c(62),u=c(11),j=c(116),m=c.p+"static/media/xiaomi-logo.72a8d0b6.png",p=function(t){return Object(i.jsx)("div",{className:" home-screen",children:Object(i.jsx)("div",{className:"set",children:Object(i.jsxs)("div",{className:"logo",children:[Object(i.jsx)("img",{src:m,alt:"xiaomi-logo"}),Object(i.jsx)("br",{}),Object(i.jsx)(j.a,{size:"large",variant:"contained",className:"shop-button",onClick:function(){t.history.push("/Catalog")},children:"Enter store"})]})})})},b=c(20),h=function(t){return Object(i.jsxs)("div",{className:"product-card",id:t.product.id,children:[Object(i.jsx)("img",{id:t.product.id,src:t.product.img,alt:t.product.title,onClick:function(){t.clickCard(t.product.id)}}),Object(i.jsx)("p",{className:"product-title",children:t.product.title}),Object(i.jsxs)("p",{className:"product-price",children:[t.product.price,"\u20ac"]}),Object(i.jsx)(j.a,{size:"medium",variant:"contained",className:"shop-button",onClick:function(){t.addCart(t.product.id)},children:"Add to cart"})]})},O=c(120),x=c(60),g=c.n(x),f=function(t){function e(){t.history.push("/")}return Object(a.useEffect)((function(){window.onscroll=function(){window.pageYOffset>e?t.classList.add("fixed"):t.classList.remove("fixed")};var t=document.getElementById("top-bar"),e=t.offsetTop}),[]),Object(i.jsxs)("div",{className:"top-bar",id:"top-bar",children:[Object(i.jsx)("div",{className:"left-side",children:Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)(O.a,{"aria-label":"Home",onClick:function(){return e()},children:Object(i.jsx)("img",{src:m,alt:"xiaomi-logo",onClick:function(){return e()}})})})}),Object(i.jsxs)("div",{className:"center-side",children:["Xiaomi Store (by ",Object(i.jsx)("a",{href:"https://github.com/Shengz94",children:"Sheng Zhu"}),")"]}),Object(i.jsx)("div",{className:"right-side",children:Object(i.jsx)("div",{className:"cart",children:Object(i.jsxs)("div",{children:[Object(i.jsx)(O.a,{size:"small","aria-label":"CheckOut",onClick:function(){t.history.push("/CheckOut")},children:Object(i.jsx)(g.a,{style:{color:"black"},fontSize:"small"})}),Object(i.jsx)("span",{children:t.numProducts>0?"("+t.numProducts+")":""})," "]})})})]})},v=function(t){return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)(f,{history:t.history,numProducts:t.numProducts}),Object(i.jsx)("div",{className:"store",children:Object(i.jsx)("div",{className:"catalog",children:Object(b.a)(t.products.values()).map((function(e){return Object(i.jsx)(h,{product:e,clickCard:function(){!function(e){t.setSelectedProduct(e),t.history.push("/ProductInfo")}(e)},addCart:function(e){t.addCart(e)}},e.id)}))})})]})},C=[{id:1,img:c.p+"static/media/Mi-10.ab121791.png",title:"Xiaomi Mi 10",category:"mobile",price:"799"},{id:2,img:c.p+"static/media/Mi-Note-10.8355352f.png",title:"Xiaomi Mi Note 10",category:"mobile",price:"549"},{id:3,img:c.p+"static/media/Redmi-9.03fe8a38.png",title:"Xiaomi Redmi 9",category:"mobile",price:"149"},{id:4,img:c.p+"static/media/Redmi-Note-9.4103cdc4.png",title:"Xiaomi Redmi Note 9",category:"mobile",price:"149"},{id:5,img:c.p+"static/media/POCO-M3.7ddb58f4.png",title:"Xiaomi POCO M3",category:"mobile",price:"149"},{id:6,img:c.p+"static/media/Mi-Watch-Lite.afda6370.png",title:"Xiaomi Mi Watch Lite",category:"smartDevice",price:"59"},{id:7,img:c.p+"static/media/Mi-Portable-Photo-Printer.8ec65044.png",title:"Xiaomi Mi Portable Photo Printer",category:"smartDevice",price:"75"},{id:8,img:c.p+"static/media/Mi-TV-4A-32.d8d5e51f.png",title:"Xiaomi Mi TV 4A 32",category:"tv",price:"179"},{id:9,img:c.p+"static/media/Mi-TV-4S-43.1aa11d37.png",title:"Xiaomi Mi TV 4S 43",category:"tv",price:"349"},{id:10,img:c.p+"static/media/Mi-Fidget-Cube.fef963ec.png",title:"Xiaomi Mi Fidget Cube",category:"etc",price:"1.99"},{id:11,img:c.p+"static/media/Mi-Body-Composition-Scale-2.1c332fc8.png",title:"Xiaomi Mi Body Composition Scale 2",category:"smartDevice",price:"29.99"},{id:12,img:c.p+"static/media/Mi-Smart-Band-5.720bbc00.png",title:"Xiaomi Mi Smart Band 5",category:"smartDevice",price:"39.99"}],N=c(43),y=c.n(N),P=function(t){function e(){t.history.push("/Catalog")}return t.product?Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)(f,{history:t.history,numProducts:t.numProducts}),Object(i.jsxs)("div",{className:"product-info-page",children:[Object(i.jsx)("div",{className:"back-button",children:Object(i.jsx)(O.a,{"aria-label":"Back",onClick:e,children:Object(i.jsx)(y.a,{})})}),Object(i.jsxs)("div",{className:"product-info",children:[Object(i.jsx)("div",{className:"left-content",children:Object(i.jsx)("div",{className:"main-image",children:Object(i.jsx)("img",{src:t.product.img,alt:t.product.title})})}),Object(i.jsxs)("div",{className:"right-content",children:[Object(i.jsx)("h3",{children:t.product.title}),Object(i.jsx)("p",{children:t.product.category}),Object(i.jsx)("h3",{children:t.product.price+"\u20ac"}),Object(i.jsx)(j.a,{variant:"contained",onClick:function(){t.addCart(t.product.id)},children:"Add to Cart"})]})]})]})]}):(e(),null)},k=function(t){return Object(i.jsxs)("div",{className:"product-card",children:[Object(i.jsx)("img",{id:t.product.id,src:t.product.img,alt:t.product.title}),Object(i.jsx)("p",{className:"product-title",children:t.product.title}),Object(i.jsxs)("p",{className:"product-price",children:[t.product.price,"\u20ac"]}),Object(i.jsxs)("p",{className:"product-quantity",children:["X ",t.quantity]}),Object(i.jsxs)("div",{className:"card-action",children:[Object(i.jsx)(j.a,{style:{maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"},size:"small",variant:"contained",className:"change-product",onClick:function(){t.changeProductFromCart(t.product.id,"add")},children:"+"}),Object(i.jsx)(j.a,{style:{maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"},size:"small",variant:"contained",className:"change-product",onClick:function(){t.changeProductFromCart(t.product.id,"subtract")},children:"-"}),Object(i.jsx)(j.a,{style:{maxWidth:"30px",maxHeight:"30px",minWidth:"30px",minHeight:"30px"},size:"small",variant:"contained",className:"remove-product",onClick:function(){t.removeProductFromCart(t.product.id)},children:"X"})]})]})},M=c(122),S=c(124);var F=function(t){var e=Object(a.useState)(P()),c=Object(d.a)(e,2),r=c[0],n=c[1],s=Object(a.useState)(F()),o=Object(d.a)(s,2),l=o[0],u=o[1],m=Object(a.useState)(0),p=Object(d.a)(m,2),h=p[0],x=p[1],g=Object(a.useState)(""),v=Object(d.a)(g,2),C=v[0],N=v[1];function P(){var e=t.cart,c=t.products,i=0;return c.forEach((function(t){e.has(t.id)&&(i+=parseFloat(t.price)*e.get(t.id))})),i}function F(){var t=0;return r>100&&r<150?t=1.99:r>75&&r<150?t=2.99:r>50&&r<150?t=3.99:r>0&&r<150&&(t=4.99),t}function X(){x(function(t,e){var c=0;return e>0&&("discount10"===t.toLowerCase()&&e>0?c=.1*e:"discount50"===t.toLowerCase()&&e>0&&(c=.5*e)),c.toFixed(2)}(C,r))}return Object(a.useEffect)((function(){X(),u(F())}),[r]),Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)(f,{history:t.history,numProducts:t.numProducts}),Object(i.jsxs)("div",{className:"checkout-page",children:[Object(i.jsx)("div",{className:"back-button",children:Object(i.jsx)(O.a,{"aria-label":"Back",onClick:function(){t.history.push("/Catalog")},children:Object(i.jsx)(y.a,{})})}),Object(i.jsx)("div",{className:"left-side",children:Object(i.jsx)("div",{className:"product-list",children:Object(b.a)(t.products.values()).filter((function(e){return t.cart.has(e.id)})).map((function(e){var c=t.cart.get(e.id);return Object(i.jsx)(k,{product:e,quantity:c,removeProductFromCart:function(e){return function(e){t.removeProductFromCart(e),n(P(t.cart,t.products))}(e)},changeProductFromCart:function(e,c){return function(e,c){t.changeProductFromCart(e,c),n(P(t.cart,t.products))}(e,c)}},e.id)}))})}),Object(i.jsx)("div",{className:"right-side sticky",children:Object(i.jsxs)("div",{className:"checkout-info",children:[Object(i.jsxs)("div",{className:"products-price",children:[Object(i.jsx)("label",{children:"Price:"}),Object(i.jsxs)("span",{children:[r,"\u20ac"]})]}),Object(i.jsxs)("div",{className:"shipping-price",children:[Object(i.jsx)("label",{children:"Shipping:"}),Object(i.jsxs)("span",{children:[l,"\u20ac"]})]}),Object(i.jsxs)("div",{className:"discount-price",children:[Object(i.jsx)("label",{children:"Discount:"}),Object(i.jsxs)("span",{children:[h,"\u20ac"]}),Object(i.jsx)("br",{}),Object(i.jsx)(S.a,{title:"Try 'discount10' or 'discount50'",children:Object(i.jsx)(M.a,{size:"small",label:"Coupon",variant:"outlined",value:C,onChange:function(t){return function(t){N(t.target.value)}(t)}})}),Object(i.jsx)(j.a,{size:"medium",variant:"contained",onClick:function(){return X()},children:"Apply"})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"total-price",children:[Object(i.jsx)("label",{children:"Total:"}),Object(i.jsxs)("span",{children:[(r+l-h).toFixed(2),"\u20ac"]})]}),Object(i.jsx)(S.a,{title:"Payment not implemented",children:Object(i.jsx)(j.a,{size:"small",variant:"contained",children:"Checkout"})})]})})]})]})};var X=function(t){var e=Object(a.useState)(function(){var t=new Map;return C.forEach((function(e){t.set(e.id,e)})),t}()),c=Object(d.a)(e,2),r=c[0],n=(c[1],Object(a.useState)(0)),s=Object(d.a)(n,2),j=s[0],m=s[1],b=Object(a.useState)(new Map),h=Object(d.a)(b,2),O=h[0],x=h[1],g=Object(a.useState)(),f=Object(d.a)(g,2),N=f[0],y=f[1];function k(t){var e=O;e.has(t)?e.set(t,e.get(t)+1):e.set(t,1),m(j+1),x(e)}return Object(i.jsx)(l.a,{basename:"/shopping-cart",children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/",component:p}),Object(i.jsx)(u.a,{path:"/Catalog",render:function(t){return Object(i.jsx)(v,Object(o.a)(Object(o.a)({},t),{},{cart:O,addCart:function(t){return k(t)},numProducts:j,products:r,setSelectedProduct:y}))}}),Object(i.jsx)(u.a,{exact:!0,path:"/ProductInfo",render:function(t){return Object(i.jsx)(P,Object(o.a)(Object(o.a)({},t),{},{addCart:function(t){return k(t)},numProducts:j,product:N}))}}),Object(i.jsx)(u.a,{exact:!0,path:"/CheckOut",render:function(t){return Object(i.jsx)(F,Object(o.a)(Object(o.a)({},t),{},{cart:O,removeProductFromCart:function(t){return function(t){var e=O,c=e.get(t);e.delete(t),x(e),m(j-c)}(t)},numProducts:j,products:r,changeProductFromCart:function(t,e){return function(t,e){var c=O;c.has(t)&&("subtract"===e?(c.get(t)>1?c.set(t,c.get(t)-1):c.delete(t),m(j-1)):"add"===e&&(c.set(t,c.get(t)+1),m(j+1)),console.log(O.get(t)))}(t,e)}}))}})]})})};c(87);s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(X,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.b1f5ac36.chunk.js.map