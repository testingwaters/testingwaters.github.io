(function(){"use strict";var q=[0,0,0,0],r=/[-+]?[0-9]*\.?[0-9]+%/g,t=/[-+]?[0-9]*\.?[0-9]+px/g,w=function(e,a,g,d,c){var b,h;if(a.gradientMode){c=[[c,c,0],[c,d-c,0],[g-c,d-c,0],[g-c,c,0]];if("radial"==a.gradientMode){(b=a.i)||(b="center");h=e="center";var f=b.match(r);b=b.match(t);f&&1<f.length?(e=f[0],h=f[1]):b&&1<b.length&&(e=b[0],h=b[1]);e=u(e,c[0][0],c[3][0]);h=u(h,c[0][1],c[1][1]);f=a.shape;b=[.5*(c[0][0]+c[2][0]),.5*(c[0][0]+c[2][0])];var k=e<b[0]?c[2][0]:c[0][0];b=h<b[1]?c[1][1]:c[0][1];k=Math.abs(e-k);b=Math.abs(h-
b);var l=c[3][0]-c[0][0];c=c[1][1]-c[0][1];.001<Math.abs(l)&&(c/=l,k=Math.sqrt(k*k+b*b/(c*c)),b=c*k);c=k;f&&"farthest-corner"!=f&&(f=f.match(t))&&1<f.length&&(c=parseFloat(f[0]),b=parseFloat(f[1]));l=Math.max(c,b);f=document.createElement("canvas");f.width=g;f.height=d;k=f.getContext("2d");l=k.createRadialGradient(e,h,0,e,h,l);v(l,a.color);k.rect(0,0,g,d);b<c?(a=1,g=b/c):(g=1,a=c/b);k.save();k.transform(a,0,0,g,a*-e+e,g*-h+h);k.fillStyle=l;k.fill();k.restore();a=k.createPattern(f,"no-repeat")}else{g=
0;a.orientation&&(g=parseFloat(a.orientation)*Math.PI/180);isFinite(g)&&!isNaN(g)||(g=0);b=-1*g;g=[];h=[];d=[.5*(c[0][0]+c[2][0]),.5*(c[0][1]+c[2][1])];f=Math.tan(b);if(.001>Math.abs(Math.tan(.5*Math.PI-.001)-f))h=0<=Math.sin(b)?1:-1,c=.5*(c[2][1]-c[0][1]),g=[d[0],d[1]-h*c],h=[d[0],d[1]+h*c];else{b=0<=Math.cos(b)?1:-1;b=[b,b*f];for(var k=Infinity,l=-Infinity,p=0;4>p;p++){var m,n=[c[p][0]-d[0],c[p][1]-d[1]],n=f*n[1]+n[0],n=n/(1+f*f);m=[n,n*f];n=(0<b[0]*m[0]+b[1]*m[1]?1:-1)*Math.sqrt(m[0]*m[0]+m[1]*
m[1]);m=[m[0]+d[0],m[1]+d[1]];n<k&&(g=m,k=n);n>l&&(h=m,l=n)}}c=e.createLinearGradient(g[0],g[1],h[0],h[1]);v(c,a.color);a=c}return a}return"rgba("+Math.floor(255*a[0])+","+Math.floor(255*a[1])+","+Math.floor(255*a[2])+","+a[3]+")"},v=function(e,a){if(e)for(var g=a.length,d=0;d<g;d++){var c=a[d].position/100,b=a[d].value;if(void 0===b.a||null===b.a)b.a=1;e.addColorStop(c,"rgba("+b.r+","+b.g+","+b.b+","+b.a+")")}},u=function(e,a,g){return e?e=0<=e.indexOf("%")?a+parseInt(e,10)/100*(g-a):0<=e.indexOf("px")?
a+parseInt(e,10):a+.5*(g-a):0};document.registerElement&&document.registerElement("gwd-rectangle",{prototype:Object.create(HTMLCanvasElement.prototype,{attachedCallback:{value:function(){var e=this.getContext("2d");this.renderRectangle_(this.shapeData_,e,this.width,this.height)},enumerable:!0},attributeChangedCallback:{value:function(){},enumerable:!0},shapeData_:{get:function(){var e={};e.h=parseFloat(this.getAttribute("stroke-width"))||0;e.strokeColor=JSON.parse(this.getAttribute("stroke-color"))||q;e.fillColor=JSON.parse(this.getAttribute("fill-color"))||
q;e.e=parseFloat(this.getAttribute("tl-radius"))||0;e.f=parseFloat(this.getAttribute("tr-radius"))||0;e.c=parseFloat(this.getAttribute("bl-radius"))||0;e.d=parseFloat(this.getAttribute("br-radius"))||0;return e},enumerable:!0},renderRectangle_:{value:function(e,a,g,d){var c=e.h;a.beginPath();var b=Math.ceil(c)-.5;e.fillColor&&(a.fillStyle=w(a,e.fillColor,g,d,c),a.lineWidth=c,this.drawRectanglePath_(e,b,a,g,d),a.fill(),a.closePath());a.beginPath();b=Math.ceil(.5*c)-.5;e.strokeColor&&(a.strokeStyle=
w(a,e.strokeColor,g,d,0),a.lineWidth=c,this.drawRectanglePath_(e,b,a,g,d),a.stroke(),a.closePath())}},drawRectanglePath_:{value:function(e,a,g,d,c){var b=.5*d,h=.5*c,f=[a,a],k=e.e,l=e.f,p=e.c;e=e.d;b=b<h?b:h;k>b&&(k=b);p>b&&(p=b);e>b&&(e=b);l>b&&(l=b);b=d-a;h=c-a;0>=k&&0>=p&&0>=e&&0>=l?g.rect(f[0],f[1],d-2*a,c-2*a):(d=k-a,0>d&&(d=0),f[1]+=d,.001>Math.abs(d)&&(f[1]=a),g.moveTo(f[0],f[1]),f=[a,h],d=p-a,0>d&&(d=0),f[1]-=d,g.lineTo(f[0],f[1]),.001<d&&g.arcTo(a,h,a+d,h,p-a),f=[b,h],d=e-a,0>d&&(d=0),f[0]-=
d,g.lineTo(f[0],f[1]),.001<d&&g.arcTo(b,h,b,h-d,e-a),f=[b,a],d=l-a,0>d&&(d=0),f[1]+=d,g.lineTo(f[0],f[1]),.001<d&&g.arcTo(b,a,b-d,a,l-a),f=[a,a],d=k-a,0>d&&(d=0),f[0]+=d,g.lineTo(f[0],f[1]),.001<d?g.arcTo(a,a,a,a+d,k-a):g.lineTo(a,2*a))}}}),"extends":"canvas"});})()
