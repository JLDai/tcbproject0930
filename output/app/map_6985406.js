define(["url","app/shops.js","jquery"],function(n,e,o){return{init:function(n,e){function a(n){return console.log("aaa"),o(".ifshopname").text(n.shop_name),o(".ifshopmain").text("主营："+n.main),o(".ifshopad").text("地址："+n.addr),o(".ifshophref").attr("href",n.shop_addr),o(".infocnt").html()}var i=new AMap.Map("map",{center:e[0],zoom:10});i.plugin(["AMap.ToolBar"],function(){i.addControl(new AMap.ToolBar)});for(var t=new AMap.Icon({image:"./images/map.png",size:new AMap.Size(24,38)}),p=[],r=[],f=0;5>f;f++)!function(o){p[o]=new AMap.Marker({icon:t,position:e[o],offset:new AMap.Pixel(-12,-12),map:i}),r[o]=new AMap.InfoWindow({content:a(n[o]),offset:new AMap.Pixel(0,-28)});AMap.event.addListener(p[o],"click",function(){r[o].open(i,p[o].getPosition())})}(f)}}});