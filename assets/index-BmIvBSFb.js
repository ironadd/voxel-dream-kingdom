var Cl=Object.defineProperty;var Ll=(i,t,e)=>t in i?Cl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var tt=(i,t,e)=>Ll(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zo="170",Ei={ROTATE:0,DOLLY:1,PAN:2},Si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pl=0,_a=1,Dl=2,Fc=1,Bc=2,vn=3,Un=0,Ne=1,qe=2,Mn=0,Ai=1,rs=2,va=3,xa=4,Il=5,Xn=100,Ol=101,Nl=102,Ul=103,Fl=104,Bl=200,zl=201,kl=202,Gl=203,qr=204,Zr=205,Wl=206,Hl=207,Vl=208,Yl=209,Xl=210,Kl=211,ql=212,Zl=213,jl=214,jr=0,$r=1,Jr=2,Ci=3,Qr=4,to=5,eo=6,no=7,zc=0,$l=1,Jl=2,Nn=0,kc=1,Gc=2,Wc=3,ko=4,Ql=5,Hc=6,Vc=7,Yc=300,Li=301,Pi=302,io=303,so=304,or=306,ro=1e3,qn=1001,oo=1002,Ue=1003,th=1004,ps=1005,cn=1006,hr=1007,Zn=1008,En=1009,Xc=1010,Kc=1011,os=1012,Go=1013,jn=1014,ln=1015,Sn=1016,Wo=1017,Ho=1018,Di=1020,qc=35902,Zc=1021,jc=1022,nn=1023,$c=1024,Jc=1025,Ti=1026,Ii=1027,Vo=1028,Yo=1029,Qc=1030,Xo=1031,Ko=1033,Xs=33776,Ks=33777,qs=33778,Zs=33779,ao=35840,co=35841,lo=35842,ho=35843,uo=36196,fo=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,xo=37812,Mo=37813,So=37814,yo=37815,Eo=37816,Ao=37817,To=37818,bo=37819,wo=37820,Ro=37821,js=36492,Co=36494,Lo=36495,tl=36283,Po=36284,Do=36285,Io=36286,eh=3200,nh=3201,el=0,ih=1,On="",We="srgb",Bi="srgb-linear",ar="linear",re="srgb",si=7680,Ma=519,sh=512,rh=513,oh=514,nl=515,ah=516,ch=517,lh=518,hh=519,Sa=35044,ya=35048,Ea="300 es",xn=2e3,Qs=2001;class Qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Aa=1234567;const bi=Math.PI/180,as=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function we(i,t,e){return Math.max(t,Math.min(e,i))}function qo(i,t){return(i%t+t)%t}function uh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fh(i,t,e){return i!==t?(e-i)/(t-i):0}function ns(i,t,e){return(1-e)*i+e*t}function dh(i,t,e,n){return ns(i,t,1-Math.exp(-e*n))}function ph(i,t=1){return t-Math.abs(qo(i,t*2)-t)}function mh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _h(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vh(i,t){return i+Math.random()*(t-i)}function xh(i){return i*(.5-Math.random())}function Mh(i){i!==void 0&&(Aa=i);let t=Aa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sh(i){return i*bi}function yh(i){return i*as}function Eh(i){return(i&i-1)===0&&i!==0}function Ah(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Th(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),f=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),p=o((t-n)/2),c=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*p,a*f);break;case"YZY":i.set(l*p,a*u,l*h,a*f);break;case"ZXZ":i.set(l*h,l*p,a*u,a*f);break;case"XZX":i.set(a*u,l*m,l*c,a*f);break;case"YXY":i.set(l*c,a*u,l*m,a*f);break;case"ZYZ":i.set(l*m,l*c,a*u,a*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const be={DEG2RAD:bi,RAD2DEG:as,generateUUID:zi,clamp:we,euclideanModulo:qo,mapLinear:uh,inverseLerp:fh,lerp:ns,damp:dh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:vh,randFloatSpread:xh,seededRandom:Mh,degToRad:Sh,radToDeg:yh,isPowerOfTwo:Eh,ceilPowerOfTwo:Ah,floorPowerOfTwo:Th,setQuaternionFromProperEuler:bh,normalize:Ie,denormalize:Mi};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,l,f){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,f)}set(t,e,n,s,r,o,a,l,f){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],f=n[1],u=n[4],h=n[7],p=n[2],c=n[5],m=n[8],_=s[0],g=s[3],d=s[6],v=s[1],M=s[4],x=s[7],T=s[2],b=s[5],R=s[8];return r[0]=o*_+a*v+l*T,r[3]=o*g+a*M+l*b,r[6]=o*d+a*x+l*R,r[1]=f*_+u*v+h*T,r[4]=f*g+u*M+h*b,r[7]=f*d+u*x+h*R,r[2]=p*_+c*v+m*T,r[5]=p*g+c*M+m*b,r[8]=p*d+c*x+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],f=t[7],u=t[8];return e*o*u-e*a*f-n*r*u+n*a*l+s*r*f-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],f=t[7],u=t[8],h=u*o-a*f,p=a*l-u*r,c=f*r-o*l,m=e*h+n*p+s*c;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*f-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=c*_,t[7]=(n*l-f*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),f=Math.sin(r);return this.set(n*l,n*f,-n*(l*o+f*a)+o+t,-s*f,s*l,-s*(-f*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Wt;function il(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wh(){const i=tr("canvas");return i.style.display="block",i}const Ta={};function ts(i){i in Ta||(Ta[i]=!0,console.warn(i))}function Rh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ch(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===On?ar:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ba=[.64,.33,.3,.6,.15,.06],wa=[.2126,.7152,.0722],Ra=[.3127,.329],Ca=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),La=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Bi]:{primaries:ba,whitePoint:Ra,transfer:ar,toXYZ:Ca,fromXYZ:La,luminanceCoefficients:wa,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:ba,whitePoint:Ra,transfer:re,toXYZ:Ca,fromXYZ:La,luminanceCoefficients:wa,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});let ri;class Ph{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=tr("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yn(e[n]/255)*255):e[n]=yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dh=0;class sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fr(s[o].image)):r.push(fr(s[o]))}else r=fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class De extends Qn{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=qn,s=qn,r=cn,o=Zn,a=nn,l=En,f=De.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=zi(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Yc;De.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,s=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,f=l[0],u=l[4],h=l[8],p=l[1],c=l[5],m=l[9],_=l[2],g=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(f+c+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(f+1)/2,x=(c+1)/2,T=(d+1)/2,b=(u+p)/4,R=(h+_)/4,L=(m+g)/4;return M>x&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=R/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=L/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=L/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(p-u)*(p-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-_)/v,this.z=(p-u)/v,this.w=Math.acos((f+c+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oh extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rl extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nh extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],f=n[s+1],u=n[s+2],h=n[s+3];const p=r[o+0],c=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=f,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=c,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==p||f!==c||u!==m){let g=1-a;const d=l*p+f*c+u*m+h*_,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const T=Math.sqrt(M),b=Math.atan2(T,d*v);g=Math.sin(g*b)/T,a=Math.sin(a*b)/T}const x=a*v;if(l=l*g+p*x,f=f*g+c*x,u=u*g+m*x,h=h*g+_*x,g===1-a){const T=1/Math.sqrt(l*l+f*f+u*u+h*h);l*=T,f*=T,u*=T,h*=T}}t[e]=l,t[e+1]=f,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],f=n[s+2],u=n[s+3],h=r[o],p=r[o+1],c=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*c-f*p,t[e+1]=l*m+u*p+f*h-a*c,t[e+2]=f*m+u*c+a*p-l*h,t[e+3]=u*m-a*h-l*p-f*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,f=a(n/2),u=a(s/2),h=a(r/2),p=l(n/2),c=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=p*u*h+f*c*m,this._y=f*c*h-p*u*m,this._z=f*u*m+p*c*h,this._w=f*u*h-p*c*m;break;case"YXZ":this._x=p*u*h+f*c*m,this._y=f*c*h-p*u*m,this._z=f*u*m-p*c*h,this._w=f*u*h+p*c*m;break;case"ZXY":this._x=p*u*h-f*c*m,this._y=f*c*h+p*u*m,this._z=f*u*m+p*c*h,this._w=f*u*h-p*c*m;break;case"ZYX":this._x=p*u*h-f*c*m,this._y=f*c*h+p*u*m,this._z=f*u*m-p*c*h,this._w=f*u*h+p*c*m;break;case"YZX":this._x=p*u*h+f*c*m,this._y=f*c*h+p*u*m,this._z=f*u*m-p*c*h,this._w=f*u*h-p*c*m;break;case"XZY":this._x=p*u*h-f*c*m,this._y=f*c*h-p*u*m,this._z=f*u*m+p*c*h,this._w=f*u*h+p*c*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],f=e[2],u=e[6],h=e[10],p=n+a+h;if(p>0){const c=.5/Math.sqrt(p+1);this._w=.25/c,this._x=(u-l)*c,this._y=(r-f)*c,this._z=(o-s)*c}else if(n>a&&n>h){const c=2*Math.sqrt(1+n-a-h);this._w=(u-l)/c,this._x=.25*c,this._y=(s+o)/c,this._z=(r+f)/c}else if(a>h){const c=2*Math.sqrt(1+a-n-h);this._w=(r-f)/c,this._x=(s+o)/c,this._y=.25*c,this._z=(l+u)/c}else{const c=2*Math.sqrt(1+h-n-a);this._w=(o-s)/c,this._x=(r+f)/c,this._y=(l+u)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(we(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,f=e._z,u=e._w;return this._x=n*u+o*a+s*f-r*l,this._y=s*u+o*l+r*a-n*f,this._z=r*u+o*f+n*l-s*a,this._w=o*u-n*a-s*l-r*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const c=1-e;return this._w=c*o+e*this._w,this._x=c*n+e*this._x,this._y=c*s+e*this._y,this._z=c*r+e*this._z,this.normalize(),this}const f=Math.sqrt(l),u=Math.atan2(f,a),h=Math.sin((1-e)*u)/f,p=Math.sin(e*u)/f;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,f=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*f+o*h-a*u,this.y=n+l*u+a*f-r*h,this.z=s+l*h+r*u-o*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(we(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dr=new C,Pa=new $n;class ti{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),gs.subVectors(this.max,Vi),oi.subVectors(t.a,Vi),ai.subVectors(t.b,Vi),ci.subVectors(t.c,Vi),wn.subVectors(ai,oi),Rn.subVectors(ci,ai),Bn.subVectors(oi,ci);let e=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-Bn.z,Bn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,Bn.z,0,-Bn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-Bn.y,Bn.x,0];return!pr(e,oi,ai,ci,gs)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,oi,ai,ci,gs))?!1:(_s.crossVectors(wn,Rn),e=[_s.x,_s.y,_s.z],pr(e,oi,ai,ci,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new C,new C,new C,new C,new C,new C,new C,new C],Je=new C,ms=new ti,oi=new C,ai=new C,ci=new C,wn=new C,Rn=new C,Bn=new C,Vi=new C,gs=new C,_s=new C,zn=new C;function pr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zn.fromArray(i,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),l=t.dot(zn),f=e.dot(zn),u=n.dot(zn);if(Math.max(-Math.max(l,f,u),Math.min(l,f,u))>a)return!1}return!0}const Uh=new ti,Yi=new C,mr=new C;class ei{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Uh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Yi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(mr)),this.expandByPoint(Yi.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new C,gr=new C,vs=new C,Cn=new C,_r=new C,xs=new C,vr=new C;class us{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gr.copy(t).add(e).multiplyScalar(.5),vs.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(gr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vs),a=Cn.dot(this.direction),l=-Cn.dot(vs),f=Cn.lengthSq(),u=Math.abs(1-o*o);let h,p,c,m;if(u>0)if(h=o*l-a,p=o*a-l,m=r*u,h>=0)if(p>=-m)if(p<=m){const _=1/u;h*=_,p*=_,c=h*(h+o*p+2*a)+p*(o*h+p+2*l)+f}else p=r,h=Math.max(0,-(o*p+a)),c=-h*h+p*(p+2*l)+f;else p=-r,h=Math.max(0,-(o*p+a)),c=-h*h+p*(p+2*l)+f;else p<=-m?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-l),r),c=-h*h+p*(p+2*l)+f):p<=m?(h=0,p=Math.min(Math.max(-r,-l),r),c=p*(p+2*l)+f):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-l),r),c=-h*h+p*(p+2*l)+f);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),c=-h*h+p*(p+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(gr).addScaledVector(vs,p),c}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const f=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return f>=0?(n=(t.min.x-p.x)*f,s=(t.max.x-p.x)*f):(n=(t.max.x-p.x)*f,s=(t.min.x-p.x)*f),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,r){_r.subVectors(e,t),xs.subVectors(n,t),vr.crossVectors(_r,xs);let o=this.direction.dot(vr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);const l=a*this.direction.dot(xs.crossVectors(Cn,xs));if(l<0)return null;const f=a*this.direction.dot(_r.cross(Cn));if(f<0||l+f>o)return null;const u=-a*Cn.dot(vr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,a,l,f,u,h,p,c,m,_,g){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,f,u,h,p,c,m,_,g)}set(t,e,n,s,r,o,a,l,f,u,h,p,c,m,_,g){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=f,d[6]=u,d[10]=h,d[14]=p,d[3]=c,d[7]=m,d[11]=_,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/li.setFromMatrixColumn(t,0).length(),r=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),f=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=o*u,c=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=f,e[1]=c+m*f,e[5]=p-_*f,e[9]=-a*l,e[2]=_-p*f,e[6]=m+c*f,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,c=l*h,m=f*u,_=f*h;e[0]=p+_*a,e[4]=m*a-c,e[8]=o*f,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=c*a-m,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,c=l*h,m=f*u,_=f*h;e[0]=p-_*a,e[4]=-o*h,e[8]=m+c*a,e[1]=c+m*a,e[5]=o*u,e[9]=_-p*a,e[2]=-o*f,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,c=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*f-c,e[8]=p*f+_,e[1]=l*h,e[5]=_*f+p,e[9]=c*f-m,e[2]=-f,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,c=o*f,m=a*l,_=a*f;e[0]=l*u,e[4]=_-p*h,e[8]=m*h+c,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-f*u,e[6]=c*h+m,e[10]=p-_*h}else if(t.order==="XZY"){const p=o*l,c=o*f,m=a*l,_=a*f;e[0]=l*u,e[4]=-h,e[8]=f*u,e[1]=p*h+_,e[5]=o*u,e[9]=c*h-m,e[2]=m*h-c,e[6]=a*u,e[10]=_*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fh,t,Bh)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Ln.crossVectors(n,ke),Ln.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Ln.crossVectors(n,ke)),Ln.normalize(),Ms.crossVectors(ke,Ln),s[0]=Ln.x,s[4]=Ms.x,s[8]=ke.x,s[1]=Ln.y,s[5]=Ms.y,s[9]=ke.y,s[2]=Ln.z,s[6]=Ms.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],f=n[12],u=n[1],h=n[5],p=n[9],c=n[13],m=n[2],_=n[6],g=n[10],d=n[14],v=n[3],M=n[7],x=n[11],T=n[15],b=s[0],R=s[4],L=s[8],E=s[12],y=s[1],D=s[5],B=s[9],k=s[13],J=s[2],et=s[6],K=s[10],Q=s[14],H=s[3],at=s[7],ft=s[11],yt=s[15];return r[0]=o*b+a*y+l*J+f*H,r[4]=o*R+a*D+l*et+f*at,r[8]=o*L+a*B+l*K+f*ft,r[12]=o*E+a*k+l*Q+f*yt,r[1]=u*b+h*y+p*J+c*H,r[5]=u*R+h*D+p*et+c*at,r[9]=u*L+h*B+p*K+c*ft,r[13]=u*E+h*k+p*Q+c*yt,r[2]=m*b+_*y+g*J+d*H,r[6]=m*R+_*D+g*et+d*at,r[10]=m*L+_*B+g*K+d*ft,r[14]=m*E+_*k+g*Q+d*yt,r[3]=v*b+M*y+x*J+T*H,r[7]=v*R+M*D+x*et+T*at,r[11]=v*L+M*B+x*K+T*ft,r[15]=v*E+M*k+x*Q+T*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],f=t[13],u=t[2],h=t[6],p=t[10],c=t[14],m=t[3],_=t[7],g=t[11],d=t[15];return m*(+r*l*h-s*f*h-r*a*p+n*f*p+s*a*c-n*l*c)+_*(+e*l*c-e*f*p+r*o*p-s*o*c+s*f*u-r*l*u)+g*(+e*f*h-e*a*c-r*o*h+n*o*c+r*a*u-n*f*u)+d*(-s*a*u-e*l*h+e*a*p+s*o*h-n*o*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],f=t[7],u=t[8],h=t[9],p=t[10],c=t[11],m=t[12],_=t[13],g=t[14],d=t[15],v=h*g*f-_*p*f+_*l*c-a*g*c-h*l*d+a*p*d,M=m*p*f-u*g*f-m*l*c+o*g*c+u*l*d-o*p*d,x=u*_*f-m*h*f+m*a*c-o*_*c-u*a*d+o*h*d,T=m*h*l-u*_*l-m*a*p+o*_*p+u*a*g-o*h*g,b=e*v+n*M+s*x+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=v*R,t[1]=(_*p*r-h*g*r-_*s*c+n*g*c+h*s*d-n*p*d)*R,t[2]=(a*g*r-_*l*r+_*s*f-n*g*f-a*s*d+n*l*d)*R,t[3]=(h*l*r-a*p*r-h*s*f+n*p*f+a*s*c-n*l*c)*R,t[4]=M*R,t[5]=(u*g*r-m*p*r+m*s*c-e*g*c-u*s*d+e*p*d)*R,t[6]=(m*l*r-o*g*r-m*s*f+e*g*f+o*s*d-e*l*d)*R,t[7]=(o*p*r-u*l*r+u*s*f-e*p*f-o*s*c+e*l*c)*R,t[8]=x*R,t[9]=(m*h*r-u*_*r-m*n*c+e*_*c+u*n*d-e*h*d)*R,t[10]=(o*_*r-m*a*r+m*n*f-e*_*f-o*n*d+e*a*d)*R,t[11]=(u*a*r-o*h*r-u*n*f+e*h*f+o*n*c-e*a*c)*R,t[12]=T*R,t[13]=(u*_*s-m*h*s+m*n*p-e*_*p-u*n*g+e*h*g)*R,t[14]=(m*a*s-o*_*s-m*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*p+e*a*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,f=r*o,u=r*a;return this.set(f*o+n,f*a-s*l,f*l+s*a,0,f*a+s*l,u*a+n,u*l-s*o,0,f*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,f=r+r,u=o+o,h=a+a,p=r*f,c=r*u,m=r*h,_=o*u,g=o*h,d=a*h,v=l*f,M=l*u,x=l*h,T=n.x,b=n.y,R=n.z;return s[0]=(1-(_+d))*T,s[1]=(c+x)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(c-x)*b,s[5]=(1-(p+d))*b,s[6]=(g+v)*b,s[7]=0,s[8]=(m+M)*R,s[9]=(g-v)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const o=li.set(s[4],s[5],s[6]).length(),a=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const f=1/r,u=1/o,h=1/a;return Qe.elements[0]*=f,Qe.elements[1]*=f,Qe.elements[2]*=f,Qe.elements[4]*=u,Qe.elements[5]*=u,Qe.elements[6]*=u,Qe.elements[8]*=h,Qe.elements[9]*=h,Qe.elements[10]*=h,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xn){const l=this.elements,f=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),p=(n+s)/(n-s);let c,m;if(a===xn)c=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Qs)c=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=c,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn){const l=this.elements,f=1/(e-t),u=1/(n-s),h=1/(o-r),p=(e+t)*f,c=(n+s)*u;let m,_;if(a===xn)m=(o+r)*h,_=-2*h;else if(a===Qs)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*f,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-c,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new C,Qe=new ie,Fh=new C(0,0,0),Bh=new C(1,1,1),Ln=new C,Ms=new C,ke=new C,Da=new ie,Ia=new $n;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],f=s[5],u=s[9],h=s[2],p=s[6],c=s[10];switch(e){case"XYZ":this._y=Math.asin(we(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-we(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,c),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,c),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,c),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(we(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,c));break;case"XZY":this._z=Math.asin(-we(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zh=0;const Oa=new C,hi=new $n,mn=new ie,Ss=new C,Xi=new C,kh=new C,Gh=new $n,Na=new C(1,0,0),Ua=new C(0,1,0),Fa=new C(0,0,1),Ba={type:"added"},Wh={type:"removed"},ui={type:"childadded",child:null},xr={type:"childremoved",child:null};class _e extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new C,e=new hn,n=new $n,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Wt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Na,t)}rotateY(t){return this.rotateOnAxis(Ua,t)}rotateZ(t){return this.rotateOnAxis(Fa,t)}translateOnAxis(t,e){return Oa.copy(t).applyQuaternion(this.quaternion),this.position.add(Oa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Na,t)}translateY(t){return this.translateOnAxis(Ua,t)}translateZ(t){return this.translateOnAxis(Fa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ss.copy(t):Ss.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Xi,Ss,this.up):mn.lookAt(Ss,Xi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(mn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ba),ui.child=t,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wh),xr.child=t,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ba),ui.child=t,this.dispatchEvent(ui),ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Gh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let f=0,u=l.length;f<u;f++){const h=l[f];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,f=this.material.length;l<f;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),f=o(t.textures),u=o(t.images),h=o(t.shapes),p=o(t.skeletons),c=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),c.length>0&&(n.animations=c),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const f in a){const u=a[f];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new C(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new C,gn=new C,Mr=new C,_n=new C,fi=new C,di=new C,za=new C,Sr=new C,yr=new C,Er=new C,Ar=new le,Tr=new le,br=new le;class Ze{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),gn.subVectors(n,e),Mr.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(gn),l=tn.dot(Mr),f=gn.dot(gn),u=gn.dot(Mr),h=o*f-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,c=(f*l-a*u)*p,m=(o*u-a*l)*p;return r.set(1-c-m,m,c)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ar.setScalar(0),Tr.setScalar(0),br.setScalar(0),Ar.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),br.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ar,r.x),o.addScaledVector(Tr,r.y),o.addScaledVector(br,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),gn.subVectors(t,e),tn.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),tn.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;fi.subVectors(s,n),di.subVectors(r,n),Sr.subVectors(t,n);const l=fi.dot(Sr),f=di.dot(Sr);if(l<=0&&f<=0)return e.copy(n);yr.subVectors(t,s);const u=fi.dot(yr),h=di.dot(yr);if(u>=0&&h<=u)return e.copy(s);const p=l*h-u*f;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(fi,o);Er.subVectors(t,r);const c=fi.dot(Er),m=di.dot(Er);if(m>=0&&c<=m)return e.copy(r);const _=c*f-l*m;if(_<=0&&f>=0&&m<=0)return a=f/(f-m),e.copy(n).addScaledVector(di,a);const g=u*m-c*h;if(g<=0&&h-u>=0&&c-m>=0)return za.subVectors(r,s),a=(h-u)/(h-u+(c-m)),e.copy(s).addScaledVector(za,a);const d=1/(g+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(fi,o).addScaledVector(di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=qo(t,1),e=we(e,0,1),n=we(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wr(o,r,t+1/3),this.g=wr(o,r,t),this.b=wr(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=ol[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}copyLinearToSRGB(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return jt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(we(Pe.r*255,0,255))*65536+Math.round(we(Pe.g*255,0,255))*256+Math.round(we(Pe.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,f;const u=(a+o)/2;if(a===o)l=0,f=0;else{const h=o-a;switch(f=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=f,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=We){jt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(ys);const n=ns(Pn.h,ys.h,e),s=ns(Pn.s,ys.s,e),r=ns(Pn.l,ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new ot;ot.NAMES=ol;let Hh=0;class ni extends Qn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=zi(),this.name="",this.blending=Ai,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qr,this.blendDst=Zr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ci,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Zr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ci&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qt extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new C,Es=new lt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sa,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Es.fromBufferAttribute(this,e),Es.applyMatrix3(t),this.setXY(e,Es.x,Es.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sa&&(t.usage=this.usage),t}}class al extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cl extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vh=0;const Xe=new ie,Rr=new _e,pi=new C,Ge=new ti,Ki=new ti,Ae=new C;class ye extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(il(t)?cl:al)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ge.min,Ki.min),Ge.expandByPoint(Ae),Ae.addVectors(Ge.max,Ki.max),Ge.expandByPoint(Ae)):(Ge.expandByPoint(Ki.min),Ge.expandByPoint(Ki.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let f=0,u=a.count;f<u;f++)Ae.fromBufferAttribute(a,f),l&&(pi.fromBufferAttribute(t,f),Ae.add(pi)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new C,l[L]=new C;const f=new C,u=new C,h=new C,p=new lt,c=new lt,m=new lt,_=new C,g=new C;function d(L,E,y){f.fromBufferAttribute(n,L),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,y),p.fromBufferAttribute(r,L),c.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),u.sub(f),h.sub(f),c.sub(p),m.sub(p);const D=1/(c.x*m.y-m.x*c.y);isFinite(D)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-c.y).multiplyScalar(D),g.copy(h).multiplyScalar(c.x).addScaledVector(u,-m.x).multiplyScalar(D),a[L].add(_),a[E].add(_),a[y].add(_),l[L].add(g),l[E].add(g),l[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,E=v.length;L<E;++L){const y=v[L],D=y.start,B=y.count;for(let k=D,J=D+B;k<J;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new C,x=new C,T=new C,b=new C;function R(L){T.fromBufferAttribute(s,L),b.copy(T);const E=a[L];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),x.crossVectors(b,E);const D=x.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,D)}for(let L=0,E=v.length;L<E;++L){const y=v[L],D=y.start,B=y.count;for(let k=D,J=D+B;k<J;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,c=n.count;p<c;p++)n.setXYZ(p,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,f=new C,u=new C,h=new C;if(t)for(let p=0,c=t.count;p<c;p+=3){const m=t.getX(p+0),_=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),f.fromBufferAttribute(n,g),a.add(u),l.add(u),f.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,f.x,f.y,f.z)}else for(let p=0,c=e.count;p<c;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const f=a.array,u=a.itemSize,h=a.normalized,p=new f.constructor(l.length*u);let c=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?c=l[_]*a.data.stride+a.offset:c=l[_]*u;for(let d=0;d<u;d++)p[m++]=f[c++]}return new Ve(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ye,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],f=t(l,n);e.setAttribute(a,f)}const r=this.morphAttributes;for(const a in r){const l=[],f=r[a];for(let u=0,h=f.length;u<h;u++){const p=f[u],c=t(p,n);l.push(c)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const f=o[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const f in l)l[f]!==void 0&&(t[f]=l[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const f=n[l];t.data.attributes[l]=f.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const f=this.morphAttributes[l],u=[];for(let h=0,p=f.length;h<p;h++){const c=f[h];u.push(c.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const f in s){const u=s[f];this.setAttribute(f,u.clone(e))}const r=t.morphAttributes;for(const f in r){const u=[],h=r[f];for(let p=0,c=h.length;p<c;p++)u.push(h[p].clone(e));this.morphAttributes[f]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let f=0,u=o.length;f<u;f++){const h=o[f];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new ie,kn=new us,As=new ei,Ga=new C,Ts=new C,bs=new C,ws=new C,Cr=new C,Rs=new C,Wa=new C,Cs=new C;class W extends _e{constructor(t=new ye,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Rs.set(0,0,0);for(let l=0,f=r.length;l<f;l++){const u=a[l],h=r[l];u!==0&&(Cr.fromBufferAttribute(h,t),o?Rs.addScaledVector(Cr,u):Rs.addScaledVector(Cr.sub(e),u))}e.add(Rs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),kn.copy(t.ray).recast(t.near),!(As.containsPoint(kn.origin)===!1&&(kn.intersectSphere(As,Ga)===null||kn.origin.distanceToSquared(Ga)>(t.far-t.near)**2))&&(ka.copy(r).invert(),kn.copy(t.ray).applyMatrix4(ka),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,f=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,c=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=p.length;m<_;m++){const g=p[m],d=o[g.materialIndex],v=Math.max(g.start,c.start),M=Math.min(a.count,Math.min(g.start+g.count,c.start+c.count));for(let x=v,T=M;x<T;x+=3){const b=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);s=Ls(this,d,t,n,f,u,h,b,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,c.start),_=Math.min(a.count,c.start+c.count);for(let g=m,d=_;g<d;g+=3){const v=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=Ls(this,o,t,n,f,u,h,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=p.length;m<_;m++){const g=p[m],d=o[g.materialIndex],v=Math.max(g.start,c.start),M=Math.min(l.count,Math.min(g.start+g.count,c.start+c.count));for(let x=v,T=M;x<T;x+=3){const b=x,R=x+1,L=x+2;s=Ls(this,d,t,n,f,u,h,b,R,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,c.start),_=Math.min(l.count,c.start+c.count);for(let g=m,d=_;g<d;g+=3){const v=g,M=g+1,x=g+2;s=Ls(this,o,t,n,f,u,h,v,M,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Yh(i,t,e,n,s,r,o,a){let l;if(t.side===Ne?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Un,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Cs);return f<e.near||f>e.far?null:{distance:f,point:Cs.clone(),object:i}}function Ls(i,t,e,n,s,r,o,a,l,f){i.getVertexPosition(a,Ts),i.getVertexPosition(l,bs),i.getVertexPosition(f,ws);const u=Yh(i,t,e,n,Ts,bs,ws,Wa);if(u){const h=new C;Ze.getBarycoord(Wa,Ts,bs,ws,h),s&&(u.uv=Ze.getInterpolatedAttribute(s,a,l,f,h,new lt)),r&&(u.uv1=Ze.getInterpolatedAttribute(r,a,l,f,h,new lt)),o&&(u.normal=Ze.getInterpolatedAttribute(o,a,l,f,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c:f,normal:new C,materialIndex:0};Ze.getNormal(Ts,bs,ws,p.normal),u.face=p,u.barycoord=h}return u}class Z extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],f=[],u=[],h=[];let p=0,c=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function m(_,g,d,v,M,x,T,b,R,L,E){const y=x/R,D=T/L,B=x/2,k=T/2,J=b/2,et=R+1,K=L+1;let Q=0,H=0;const at=new C;for(let ft=0;ft<K;ft++){const yt=ft*D-k;for(let Ot=0;Ot<et;Ot++){const Xt=Ot*y-B;at[_]=Xt*v,at[g]=yt*M,at[d]=J,f.push(at.x,at.y,at.z),at[_]=0,at[g]=0,at[d]=b>0?1:-1,u.push(at.x,at.y,at.z),h.push(Ot/R),h.push(1-ft/L),Q+=1}}for(let ft=0;ft<L;ft++)for(let yt=0;yt<R;yt++){const Ot=p+yt+et*ft,Xt=p+yt+et*(ft+1),$=p+(yt+1)+et*(ft+1),it=p+(yt+1)+et*ft;l.push(Ot,Xt,it),l.push(Xt,$,it),H+=6}a.addGroup(c,H,E),c+=H,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Z(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Oi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=Oi(i[e]);for(const s in n)t[s]=n[s]}return t}function Xh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const cs={clone:Oi,merge:Oe};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Re extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Xh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hl extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new C,Ha=new lt,Va=new lt;class He extends hl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Ha,Va),e.subVectors(Va,Ha)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,f=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/f,s*=o.width/l,n*=o.height/f}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Zh extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(mi,gi,t,e);s.layers=this.layers,this.add(s);const r=new He(mi,gi,t,e);r.layers=this.layers,this.add(r);const o=new He(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new He(mi,gi,t,e);a.layers=this.layers,this.add(a);const l=new He(mi,gi,t,e);l.layers=this.layers,this.add(l);const f=new He(mi,gi,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const f of e)this.remove(f);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,f,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,f),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,p,c),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ul extends De{constructor(t,e,n,s,r,o,a,l,f,u){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,s,r,o,a,l,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jh extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ul(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Z(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Mn});r.uniforms.tEquirect.value=e;const o=new W(s,r),a=e.minFilter;return e.minFilter===Zn&&(e.minFilter=cn),new Zh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Lr=new C,$h=new C,Jh=new Wt;class In{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Lr.subVectors(n,e).cross($h.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jh.getNormalMatrix(t),s=this.coplanarPoint(Lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new ei,Ps=new C;class jo{constructor(t=new In,e=new In,n=new In,s=new In,r=new In,o=new In){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],f=s[4],u=s[5],h=s[6],p=s[7],c=s[8],m=s[9],_=s[10],g=s[11],d=s[12],v=s[13],M=s[14],x=s[15];if(n[0].setComponents(l-r,p-f,g-c,x-d).normalize(),n[1].setComponents(l+r,p+f,g+c,x+d).normalize(),n[2].setComponents(l+o,p+u,g+m,x+v).normalize(),n[3].setComponents(l-o,p-u,g-m,x-v).normalize(),n[4].setComponents(l-a,p-h,g-_,x-M).normalize(),e===xn)n[5].setComponents(l+a,p+h,g+_,x+M).normalize();else if(e===Qs)n[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ps.x=s.normal.x>0?t.max.x:t.min.x,Ps.y=s.normal.y>0?t.max.y:t.min.y,Ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qh(i){const t=new WeakMap;function e(a,l){const f=a.array,u=a.usage,h=f.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,f,u),a.onUploadCallback();let c;if(f instanceof Float32Array)c=i.FLOAT;else if(f instanceof Uint16Array)a.isFloat16BufferAttribute?c=i.HALF_FLOAT:c=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)c=i.SHORT;else if(f instanceof Uint32Array)c=i.UNSIGNED_INT;else if(f instanceof Int32Array)c=i.INT;else if(f instanceof Int8Array)c=i.BYTE;else if(f instanceof Uint8Array)c=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)c=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:c,bytesPerElement:f.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,f){const u=l.array,h=l.updateRanges;if(i.bindBuffer(f,a),h.length===0)i.bufferSubData(f,0,u);else{h.sort((c,m)=>c.start-m.start);let p=0;for(let c=1;c<h.length;c++){const m=h[p],_=h[c];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++p,h[p]=_)}h.length=p+1;for(let c=0,m=h.length;c<m;c++){const _=h[c];i.bufferSubData(f,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const f=t.get(a);if(f===void 0)t.set(a,e(a,l));else if(f.version<a.version){if(f.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,a,l),f.version=a.version}}return{get:s,remove:r,update:o}}class Jn extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),f=a+1,u=l+1,h=t/a,p=e/l,c=[],m=[],_=[],g=[];for(let d=0;d<u;d++){const v=d*p-o;for(let M=0;M<f;M++){const x=M*h-r;m.push(x,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const M=v+f*d,x=v+f*(d+1),T=v+1+f*(d+1),b=v+1+f*d;c.push(M,x,b),c.push(x,T,b)}this.setIndex(c),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.widthSegments,t.heightSegments)}}var tu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,su=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$u=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ju=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ff=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,df=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ef=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ed=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Td=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:tu,alphahash_pars_fragment:eu,alphamap_fragment:nu,alphamap_pars_fragment:iu,alphatest_fragment:su,alphatest_pars_fragment:ru,aomap_fragment:ou,aomap_pars_fragment:au,batching_pars_vertex:cu,batching_vertex:lu,begin_vertex:hu,beginnormal_vertex:uu,bsdfs:fu,iridescence_fragment:du,bumpmap_pars_fragment:pu,clipping_planes_fragment:mu,clipping_planes_pars_fragment:gu,clipping_planes_pars_vertex:_u,clipping_planes_vertex:vu,color_fragment:xu,color_pars_fragment:Mu,color_pars_vertex:Su,color_vertex:yu,common:Eu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Tu,displacementmap_pars_vertex:bu,displacementmap_vertex:wu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Cu,colorspace_fragment:Lu,colorspace_pars_fragment:Pu,envmap_fragment:Du,envmap_common_pars_fragment:Iu,envmap_pars_fragment:Ou,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:Xu,envmap_vertex:Uu,fog_vertex:Fu,fog_pars_vertex:Bu,fog_fragment:zu,fog_pars_fragment:ku,gradientmap_pars_fragment:Gu,lightmap_pars_fragment:Wu,lights_lambert_fragment:Hu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Yu,lights_toon_fragment:Ku,lights_toon_pars_fragment:qu,lights_phong_fragment:Zu,lights_phong_pars_fragment:ju,lights_physical_fragment:$u,lights_physical_pars_fragment:Ju,lights_fragment_begin:Qu,lights_fragment_maps:tf,lights_fragment_end:ef,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:of,map_fragment:af,map_pars_fragment:cf,map_particle_fragment:lf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:ff,morphinstance_vertex:df,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:_f,normal_fragment_begin:vf,normal_fragment_maps:xf,normal_pars_fragment:Mf,normal_pars_vertex:Sf,normal_vertex:yf,normalmap_pars_fragment:Ef,clearcoat_normal_fragment_begin:Af,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:wf,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Lf,project_vertex:Pf,dithering_fragment:Df,dithering_pars_fragment:If,roughnessmap_fragment:Of,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Uf,shadowmap_pars_vertex:Ff,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Gf,skinning_vertex:Wf,skinnormal_vertex:Hf,specularmap_fragment:Vf,specularmap_pars_fragment:Yf,tonemapping_fragment:Xf,tonemapping_pars_fragment:Kf,transmission_fragment:qf,transmission_pars_fragment:Zf,uv_pars_fragment:jf,uv_pars_vertex:$f,uv_vertex:Jf,worldpos_vertex:Qf,background_vert:td,background_frag:ed,backgroundCube_vert:nd,backgroundCube_frag:id,cube_vert:sd,cube_frag:rd,depth_vert:od,depth_frag:ad,distanceRGBA_vert:cd,distanceRGBA_frag:ld,equirect_vert:hd,equirect_frag:ud,linedashed_vert:fd,linedashed_frag:dd,meshbasic_vert:pd,meshbasic_frag:md,meshlambert_vert:gd,meshlambert_frag:_d,meshmatcap_vert:vd,meshmatcap_frag:xd,meshnormal_vert:Md,meshnormal_frag:Sd,meshphong_vert:yd,meshphong_frag:Ed,meshphysical_vert:Ad,meshphysical_frag:Td,meshtoon_vert:bd,meshtoon_frag:wd,points_vert:Rd,points_frag:Cd,shadow_vert:Ld,shadow_frag:Pd,sprite_vert:Dd,sprite_frag:Id},ut={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},an={basic:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ot(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ot(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([ut.common,ut.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([ut.lights,ut.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};an.physical={uniforms:Oe([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ds={r:0,b:0,g:0},Wn=new hn,Od=new ie;function Nd(i,t,e,n,s,r,o){const a=new ot(0);let l=r===!0?0:1,f,u,h=null,p=0,c=null;function m(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const x=m(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,M){const x=m(M);x&&(x.isCubeTexture||x.mapping===or)?(u===void 0&&(u=new W(new Z(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:Oi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Wn.copy(M.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Od.makeRotationFromEuler(Wn)),u.material.toneMapped=jt.getTransfer(x.colorSpace)!==re,(h!==x||p!==x.version||c!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,c=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(f===void 0&&(f=new W(new Jn(2,2),new Re({name:"BackgroundMaterial",uniforms:Oi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=x,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.toneMapped=jt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),f.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||c!==i.toneMapping)&&(f.material.needsUpdate=!0,h=x,p=x.version,c=i.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null))}function d(v,M){v.getRGB(Ds,ll(i)),n.buffers.color.setClear(Ds.r,Ds.g,Ds.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:g}}function Ud(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(y,D,B,k,J){let et=!1;const K=h(k,B,D);r!==K&&(r=K,f(r.object)),et=c(y,k,B,J),et&&m(y,k,B,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,x(y,D,B,k),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function f(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,D,B){const k=B.wireframe===!0;let J=n[y.id];J===void 0&&(J={},n[y.id]=J);let et=J[D.id];et===void 0&&(et={},J[D.id]=et);let K=et[k];return K===void 0&&(K=p(l()),et[k]=K),K}function p(y){const D=[],B=[],k=[];for(let J=0;J<e;J++)D[J]=0,B[J]=0,k[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:k,object:y,attributes:{},index:null}}function c(y,D,B,k){const J=r.attributes,et=D.attributes;let K=0;const Q=B.getAttributes();for(const H in Q)if(Q[H].location>=0){const ft=J[H];let yt=et[H];if(yt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),ft===void 0||ft.attribute!==yt||yt&&ft.data!==yt.data)return!0;K++}return r.attributesNum!==K||r.index!==k}function m(y,D,B,k){const J={},et=D.attributes;let K=0;const Q=B.getAttributes();for(const H in Q)if(Q[H].location>=0){let ft=et[H];ft===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const yt={};yt.attribute=ft,ft&&ft.data&&(yt.data=ft.data),J[H]=yt,K++}r.attributes=J,r.attributesNum=K,r.index=k}function _(){const y=r.newAttributes;for(let D=0,B=y.length;D<B;D++)y[D]=0}function g(y){d(y,0)}function d(y,D){const B=r.newAttributes,k=r.enabledAttributes,J=r.attributeDivisors;B[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),J[y]!==D&&(i.vertexAttribDivisor(y,D),J[y]=D)}function v(){const y=r.newAttributes,D=r.enabledAttributes;for(let B=0,k=D.length;B<k;B++)D[B]!==y[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function M(y,D,B,k,J,et,K){K===!0?i.vertexAttribIPointer(y,D,B,J,et):i.vertexAttribPointer(y,D,B,k,J,et)}function x(y,D,B,k){_();const J=k.attributes,et=B.getAttributes(),K=D.defaultAttributeValues;for(const Q in et){const H=et[Q];if(H.location>=0){let at=J[Q];if(at===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const ft=at.normalized,yt=at.itemSize,Ot=t.get(at);if(Ot===void 0)continue;const Xt=Ot.buffer,$=Ot.type,it=Ot.bytesPerElement,_t=$===i.INT||$===i.UNSIGNED_INT||at.gpuType===Go;if(at.isInterleavedBufferAttribute){const st=at.data,Ct=st.stride,It=at.offset;if(st.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)d(H.location+Bt,st.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)g(H.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Bt=0;Bt<H.locationSize;Bt++)M(H.location+Bt,yt/H.locationSize,$,ft,Ct*it,(It+yt/H.locationSize*Bt)*it,_t)}else{if(at.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)d(H.location+st,at.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let st=0;st<H.locationSize;st++)g(H.location+st);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let st=0;st<H.locationSize;st++)M(H.location+st,yt/H.locationSize,$,ft,yt*it,yt/H.locationSize*st*it,_t)}}else if(K!==void 0){const ft=K[Q];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(H.location,ft);break;case 3:i.vertexAttrib3fv(H.location,ft);break;case 4:i.vertexAttrib4fv(H.location,ft);break;default:i.vertexAttrib1fv(H.location,ft)}}}}v()}function T(){L();for(const y in n){const D=n[y];for(const B in D){const k=D[B];for(const J in k)u(k[J].object),delete k[J];delete D[B]}delete n[y]}}function b(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const B in D){const k=D[B];for(const J in k)u(k[J].object),delete k[J];delete D[B]}delete n[y.id]}function R(y){for(const D in n){const B=n[D];if(B[y.id]===void 0)continue;const k=B[y.id];for(const J in k)u(k[J].object),delete k[J];delete B[y.id]}}function L(){E(),o=!0,r!==s&&(r=s,f(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function Fd(i,t,e){let n;function s(f){n=f}function r(f,u){i.drawArrays(n,f,u),e.update(u,n,1)}function o(f,u,h){h!==0&&(i.drawArraysInstanced(n,f,u,h),e.update(u,n,h))}function a(f,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,u,0,h);let c=0;for(let m=0;m<h;m++)c+=u[m];e.update(c,n,1)}function l(f,u,h,p){if(h===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let m=0;m<f.length;m++)o(f[m],u[m],p[m]);else{c.multiDrawArraysInstancedWEBGL(n,f,0,u,0,p,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*p[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==En&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ln&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const u=l(f);u!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",u,"instead."),f=u);const h=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:f,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:c,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:b}}function zd(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new In,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const c=h.length!==0||p||n!==0||s;return s=p,n=h.length,c},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,c){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,d=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):f();else{const v=r?0:n,M=v*4;let x=d.clippingState||null;l.value=x,x=u(m,p,M,c);for(let T=0;T!==M;++T)x[T]=e[T];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function f(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,c,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const d=c+_*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,x=c;M!==_;++M,x+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function kd(i){let t=new WeakMap;function e(o,a){return a===io?o.mapping=Li:a===so&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===io||a===so)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const f=new jh(l.height);return f.fromEquirectangularTexture(i,o),t.set(o,f),o.addEventListener("dispose",s),e(f.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class $o extends hl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,o=r+f*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const yi=4,Ya=[.125,.215,.35,.446,.526,.582],Kn=20,Pr=new $o,Xa=new ot;let Dr=null,Ir=0,Or=0,Nr=!1;const Yn=(1+Math.sqrt(5))/2,_i=1/Yn,Ka=[new C(-Yn,_i,0),new C(Yn,_i,0),new C(-_i,0,Yn),new C(_i,0,Yn),new C(0,Yn,-_i),new C(0,Yn,_i),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dr,Ir,Or),this._renderer.xr.enabled=Nr,t.scissorTest=!1,Is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Or=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Sn,format:nn,colorSpace:Bi,depthBuffer:!1},s=Za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Za(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(r)),this._blurMaterial=Wd(r,t,e)}return s}_compileMaterial(t){const e=new W(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Xa),u.toneMapping=Nn,u.autoClear=!1;const c=new Qt({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),m=new W(new Z,c);let _=!1;const g=t.background;g?g.isColor&&(c.color.copy(g),t.background=null,_=!0):(c.color.copy(Xa),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(f[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,f[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,f[d]));const M=this._cubeSize;Is(s,v*M,d>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(m,a),u.render(t,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Li||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new W(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ka[(s-r-1)%Ka.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new W(this._lodPlanes[s],f),p=f.uniforms,c=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*c):2*Math.PI/(2*Kn-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Kn;g>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kn}`);const d=[];let v=0;for(let R=0;R<Kn;++R){const L=R/_,E=Math.exp(-L*L/2);d.push(E),R===0?v+=E:R<g&&(v+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/v;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=m,p.mipInt.value=M-n;const x=this._sizeLods[s],T=3*x*(s>M-yi?s-M+yi:0),b=4*(this._cubeSize-x);Is(e,T,b,3*x,2*x),l.setRenderTarget(e),l.render(h,Pr)}}function Gd(i){const t=[],e=[],n=[];let s=i;const r=i-yi+1+Ya.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-yi?l=Ya[o-i+yi-1]:o===0&&(l=0),n.push(l);const f=1/(a-2),u=-f,h=1+f,p=[u,u,h,u,h,h,u,u,h,h,u,h],c=6,m=6,_=3,g=2,d=1,v=new Float32Array(_*m*c),M=new Float32Array(g*m*c),x=new Float32Array(d*m*c);for(let b=0;b<c;b++){const R=b%3*2/3-1,L=b>2?0:-1,E=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];v.set(E,_*m*b),M.set(p,g*m*b);const y=[b,b,b,b,b,b];x.set(y,d*m*b)}const T=new ye;T.setAttribute("position",new Ve(v,_)),T.setAttribute("uv",new Ve(M,g)),T.setAttribute("faceIndex",new Ve(x,d)),t.push(T),s>yi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Za(i,t,e){const n=new sn(i,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Is(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wd(i,t,e){const n=new Float32Array(Kn),s=new C(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ja(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function $a(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,f=l===io||l===so,u=l===Li||l===Pi;if(f||u){let h=t.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new qa(i)),h=f?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const c=a.image;return f&&c&&c.height>0||u&&c&&s(c)?(e===null&&(e=new qa(i)),h=f?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const f=6;for(let u=0;u<f;u++)a[u]!==void 0&&l++;return l===f}function r(a){const l=a.target;l.removeEventListener("dispose",r);const f=t.get(l);f!==void 0&&(t.delete(l),f.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Vd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yd(i,t,e,n){const s={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);for(const m in p.morphAttributes){const _=p.morphAttributes[m];for(let g=0,d=_.length;g<d;g++)t.remove(_[g])}p.removeEventListener("dispose",o),delete s[p.id];const c=r.get(p);c&&(t.remove(c),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER);const c=h.morphAttributes;for(const m in c){const _=c[m];for(let g=0,d=_.length;g<d;g++)t.update(_[g],i.ARRAY_BUFFER)}}function f(h){const p=[],c=h.index,m=h.attributes.position;let _=0;if(c!==null){const v=c.array;_=c.version;for(let M=0,x=v.length;M<x;M+=3){const T=v[M+0],b=v[M+1],R=v[M+2];p.push(T,b,b,R,R,T)}}else if(m!==void 0){const v=m.array;_=m.version;for(let M=0,x=v.length/3-1;M<x;M+=3){const T=M+0,b=M+1,R=M+2;p.push(T,b,b,R,R,T)}}else return;const g=new(il(p)?cl:al)(p,1);g.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,g)}function u(h){const p=r.get(h);if(p){const c=h.index;c!==null&&p.version<c.version&&f(h)}else f(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Xd(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,c){i.drawElements(n,c,r,p*o),e.update(c,n,1)}function f(p,c,m){m!==0&&(i.drawElementsInstanced(n,c,r,p*o,m),e.update(c,n,m))}function u(p,c,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,p,0,m);let g=0;for(let d=0;d<m;d++)g+=c[d];e.update(g,n,1)}function h(p,c,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<p.length;d++)f(p[d]/o,c[d],_[d]);else{g.multiDrawElementsInstancedWEBGL(n,c,0,r,p,0,_,0,m);let d=0;for(let v=0;v<m;v++)d+=c[v]*_[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=f,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Kd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function qd(i,t,e){const n=new WeakMap,s=new le;function r(o,a,l){const f=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let y=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var c=y;p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let T=a.attributes.position.count*x,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*b*4*h),L=new rl(R,T,b,h);L.type=ln,L.needsUpdate=!0;const E=x*4;for(let D=0;D<h;D++){const B=d[D],k=v[D],J=M[D],et=T*b*4*D;for(let K=0;K<B.count;K++){const Q=K*E;m===!0&&(s.fromBufferAttribute(B,K),R[et+Q+0]=s.x,R[et+Q+1]=s.y,R[et+Q+2]=s.z,R[et+Q+3]=0),_===!0&&(s.fromBufferAttribute(k,K),R[et+Q+4]=s.x,R[et+Q+5]=s.y,R[et+Q+6]=s.z,R[et+Q+7]=0),g===!0&&(s.fromBufferAttribute(J,K),R[et+Q+8]=s.x,R[et+Q+9]=s.y,R[et+Q+10]=s.z,R[et+Q+11]=J.itemSize===4?s.w:1)}}p={count:h,texture:L,size:new lt(T,b)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<f.length;g++)m+=f[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",f)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Zd(i,t,e,n){let s=new WeakMap;function r(l){const f=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==f&&(t.update(h),s.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==f&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==f&&(p.update(),s.set(p,f))}return h}function o(){s=new WeakMap}function a(l){const f=l.target;f.removeEventListener("dispose",a),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:r,dispose:o}}class dl extends De{constructor(t,e,n,s,r,o,a,l,f,u=Ti){if(u!==Ti&&u!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ti&&(n=jn),n===void 0&&u===Ii&&(n=Di),super(null,s,r,o,a,l,u,n,f),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pl=new De,Ja=new dl(1,1),ml=new rl,gl=new Nh,_l=new ul,Qa=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qa[s];if(r===void 0&&(r=new Float32Array(s),Qa[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cr(i,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),Se(e,n)}}function ep(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),Se(e,n)}}function np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;ec.set(n),i.uniformMatrix4fv(this.addr,!1,ec),Se(e,n)}}function ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function up(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ja.compareFunction=nl,r=Ja):r=pl,e.setTexture2D(t||r,s)}function fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gl,s)}function dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_l,s)}function pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ml,s)}function mp(i){switch(i){case 5126:return jd;case 35664:return $d;case 35665:return Jd;case 35666:return Qd;case 35674:return tp;case 35675:return ep;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return sp;case 35668:case 35672:return rp;case 35669:case 35673:return op;case 5125:return ap;case 36294:return cp;case 36295:return lp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return pp}}function gp(i,t){i.uniform1fv(this.addr,t)}function _p(i,t){const e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function vp(i,t){const e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function xp(i,t){const e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Mp(i,t){const e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sp(i,t){const e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yp(i,t){const e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ep(i,t){i.uniform1iv(this.addr,t)}function Ap(i,t){i.uniform2iv(this.addr,t)}function Tp(i,t){i.uniform3iv(this.addr,t)}function bp(i,t){i.uniform4iv(this.addr,t)}function wp(i,t){i.uniform1uiv(this.addr,t)}function Rp(i,t){i.uniform2uiv(this.addr,t)}function Cp(i,t){i.uniform3uiv(this.addr,t)}function Lp(i,t){i.uniform4uiv(this.addr,t)}function Pp(i,t,e){const n=this.cache,s=t.length,r=cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||pl,r[o])}function Dp(i,t,e){const n=this.cache,s=t.length,r=cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gl,r[o])}function Ip(i,t,e){const n=this.cache,s=t.length,r=cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_l,r[o])}function Op(i,t,e){const n=this.cache,s=t.length,r=cr(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ml,r[o])}function Np(i){switch(i){case 5126:return gp;case 35664:return _p;case 35665:return vp;case 35666:return xp;case 35674:return Mp;case 35675:return Sp;case 35676:return yp;case 5124:case 35670:return Ep;case 35667:case 35671:return Ap;case 35668:case 35672:return Tp;case 35669:case 35673:return bp;case 5125:return wp;case 36294:return Rp;case 36295:return Cp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Pp;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Op}}class Up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mp(e.type)}}class Fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Np(e.type)}}class Bp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function sc(i,t){i.seq.push(t),i.map[t.id]=t}function zp(i,t,e){const n=i.name,s=n.length;for(Ur.lastIndex=0;;){const r=Ur.exec(n),o=Ur.lastIndex;let a=r[1];const l=r[2]==="]",f=r[3];if(l&&(a=a|0),f===void 0||f==="["&&o+2===s){sc(e,f===void 0?new Up(a,i,t):new Fp(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Bp(a),sc(e,h)),e=h}}}class $s{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);zp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kp=37297;let Gp=0;function Wp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const oc=new Wt;function Hp(i){jt._getMatrix(oc,jt.workingColorSpace,i);const t=`mat3( ${oc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case ar:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ac(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wp(i.getShaderSource(t),o)}else return s}function Vp(i,t){const e=Hp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yp(i,t){let e;switch(t){case kc:e="Linear";break;case Gc:e="Reinhard";break;case Wc:e="Cineon";break;case ko:e="ACESFilmic";break;case Hc:e="AgX";break;case Vc:e="Neutral";break;case Ql:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Os=new C;function Xp(){jt.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),t=Os.y.toFixed(4),e=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function qp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function es(i){return i!==""}function cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(jp,Jp)}const $p=new Map;function Jp(i,t){let e=Vt[t];if(e===void 0){const n=$p.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oo(e)}const Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(Qp,tm)}function tm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function em(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function nm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Li:case Pi:t="ENVMAP_TYPE_CUBE";break;case or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function im(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function sm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zc:t="ENVMAP_BLENDING_MULTIPLY";break;case $l:t="ENVMAP_BLENDING_MIX";break;case Jl:t="ENVMAP_BLENDING_ADD";break}return t}function rm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function om(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=em(e),f=nm(e),u=im(e),h=sm(e),p=rm(e),c=Kp(e),m=qp(r),_=s.createProgram();let g,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(es).join(`
`),d.length>0&&(d+=`
`)):(g=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),d=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Yp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Vp("linearToOutputTexel",e.outputColorSpace),Xp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(es).join(`
`)),o=Oo(o),o=cc(o,e),o=lc(o,e),a=Oo(a),a=cc(a,e),a=lc(a,e),o=hc(o),a=hc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[c,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+g+o,x=v+d+a,T=rc(s,s.VERTEX_SHADER,M),b=rc(s,s.FRAGMENT_SHADER,x);s.attachShader(_,T),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(T).trim(),J=s.getShaderInfoLog(b).trim();let et=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,b);else{const Q=ac(s,T,"vertex"),H=ac(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Q+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||J==="")&&(K=!1);K&&(D.diagnostics={runnable:et,programLog:B,vertexShader:{log:k,prefix:g},fragmentShader:{log:J,prefix:d}})}s.deleteShader(T),s.deleteShader(b),L=new $s(s,_),E=Zp(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,kp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=b,this}let am=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new lm(t),e.set(t,n)),n}}class lm{constructor(t){this.id=am++,this.code=t,this.usedTimes=0}}function hm(i,t,e,n,s,r,o){const a=new Zo,l=new cm,f=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let c=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return f.add(E),E===0?"uv":`uv${E}`}function g(E,y,D,B,k){const J=B.fog,et=k.geometry,K=E.isMeshStandardMaterial?B.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||K),H=Q&&Q.mapping===or?Q.image.height:null,at=m[E.type];E.precision!==null&&(c=s.getMaxPrecision(E.precision),c!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",c,"instead."));const ft=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,yt=ft!==void 0?ft.length:0;let Ot=0;et.morphAttributes.position!==void 0&&(Ot=1),et.morphAttributes.normal!==void 0&&(Ot=2),et.morphAttributes.color!==void 0&&(Ot=3);let Xt,$,it,_t;if(at){const se=an[at];Xt=se.vertexShader,$=se.fragmentShader}else Xt=E.vertexShader,$=E.fragmentShader,l.update(E),it=l.getVertexShaderID(E),_t=l.getFragmentShaderID(E);const st=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),It=k.isInstancedMesh===!0,Bt=k.isBatchedMesh===!0,oe=!!E.map,Kt=!!E.matcap,te=!!Q,U=!!E.aoMap,Ee=!!E.lightMap,zt=!!E.bumpMap,Yt=!!E.normalMap,Lt=!!E.displacementMap,ae=!!E.emissiveMap,Pt=!!E.metalnessMap,P=!!E.roughnessMap,A=E.anisotropy>0,I=E.clearcoat>0,z=E.dispersion>0,X=E.iridescence>0,q=E.sheen>0,xt=E.transmission>0,ht=A&&!!E.anisotropyMap,vt=I&&!!E.clearcoatMap,qt=I&&!!E.clearcoatNormalMap,rt=I&&!!E.clearcoatRoughnessMap,Mt=X&&!!E.iridescenceMap,Dt=X&&!!E.iridescenceThicknessMap,Nt=q&&!!E.sheenColorMap,St=q&&!!E.sheenRoughnessMap,Zt=!!E.specularMap,Ht=!!E.specularColorMap,ue=!!E.specularIntensityMap,O=xt&&!!E.transmissionMap,dt=xt&&!!E.thicknessMap,j=!!E.gradientMap,nt=!!E.alphaMap,gt=E.alphaTest>0,pt=!!E.alphaHash,kt=!!E.extensions;let ge=Nn;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ce={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:Xt,fragmentShader:$,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:c,batching:Bt,batchingColor:Bt&&k._colorsTexture!==null,instancing:It,instancingColor:It&&k.instanceColor!==null,instancingMorph:It&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Bi,alphaToCoverage:!!E.alphaToCoverage,map:oe,matcap:Kt,envMap:te,envMapMode:te&&Q.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Ee,bumpMap:zt,normalMap:Yt,displacementMap:p&&Lt,emissiveMap:ae,normalMapObjectSpace:Yt&&E.normalMapType===ih,normalMapTangentSpace:Yt&&E.normalMapType===el,metalnessMap:Pt,roughnessMap:P,anisotropy:A,anisotropyMap:ht,clearcoat:I,clearcoatMap:vt,clearcoatNormalMap:qt,clearcoatRoughnessMap:rt,dispersion:z,iridescence:X,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:q,sheenColorMap:Nt,sheenRoughnessMap:St,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:ue,transmission:xt,transmissionMap:O,thicknessMap:dt,gradientMap:j,opaque:E.transparent===!1&&E.blending===Ai&&E.alphaToCoverage===!1,alphaMap:nt,alphaTest:gt,alphaHash:pt,combine:E.combine,mapUv:oe&&_(E.map.channel),aoMapUv:U&&_(E.aoMap.channel),lightMapUv:Ee&&_(E.lightMap.channel),bumpMapUv:zt&&_(E.bumpMap.channel),normalMapUv:Yt&&_(E.normalMap.channel),displacementMapUv:Lt&&_(E.displacementMap.channel),emissiveMapUv:ae&&_(E.emissiveMap.channel),metalnessMapUv:Pt&&_(E.metalnessMap.channel),roughnessMapUv:P&&_(E.roughnessMap.channel),anisotropyMapUv:ht&&_(E.anisotropyMap.channel),clearcoatMapUv:vt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(E.sheenRoughnessMap.channel),specularMapUv:Zt&&_(E.specularMap.channel),specularColorMapUv:Ht&&_(E.specularColorMap.channel),specularIntensityMapUv:ue&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:dt&&_(E.thicknessMap.channel),alphaMapUv:nt&&_(E.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Yt||A),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!et.attributes.uv&&(oe||nt),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:k.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:oe&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:ae&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===qe,flipSided:E.side===Ne,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ce.vertexUv1s=f.has(1),Ce.vertexUv2s=f.has(2),Ce.vertexUv3s=f.has(3),f.clear(),Ce}function d(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(v(y,E),M(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function v(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const y=m[E.type];let D;if(y){const B=an[y];D=cs.clone(B.uniforms)}else D=E.uniforms;return D}function T(E,y){let D;for(let B=0,k=u.length;B<k;B++){const J=u[B];if(J.cacheKey===y){D=J,++D.usedTimes;break}}return D===void 0&&(D=new om(i,y,E,r),u.push(D)),D}function b(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:x,acquireProgram:T,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:L}}function um(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,p,c,m,_,g){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:c,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=c,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=_,d.group=g),t++,d}function a(h,p,c,m,_,g){const d=o(h,p,c,m,_,g);c.transmission>0?n.push(d):c.transparent===!0?s.push(d):e.push(d)}function l(h,p,c,m,_,g){const d=o(h,p,c,m,_,g);c.transmission>0?n.unshift(d):c.transparent===!0?s.unshift(d):e.unshift(d)}function f(h,p){e.length>1&&e.sort(h||fm),n.length>1&&n.sort(p||fc),s.length>1&&s.sort(p||fc)}function u(){for(let h=t,p=i.length;h<p;h++){const c=i[h];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:f}}function dm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new dc,i.set(n,[o])):s>=r.length?(o=new dc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new ot};break;case"SpotLight":e={position:new C,direction:new C,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gm=0;function _m(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vm(i){const t=new pm,e=mm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new C);const s=new C,r=new ie,o=new ie;function a(f){let u=0,h=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let c=0,m=0,_=0,g=0,d=0,v=0,M=0,x=0,T=0,b=0,R=0;f.sort(_m);for(let E=0,y=f.length;E<y;E++){const D=f[E],B=D.color,k=D.intensity,J=D.distance,et=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*k,h+=B.g*k,p+=B.b*k;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],k);R++}else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,H=e.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[c]=H,n.directionalShadowMap[c]=et,n.directionalShadowMatrix[c]=D.shadow.matrix,v++}n.directional[c]=K,c++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(B).multiplyScalar(k),K.distance=J,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[_]=K;const Q=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,Q.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[_]=Q.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=et,x++}_++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(B).multiplyScalar(k),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=K,g++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const Q=D.shadow,H=e.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=D.shadow.matrix,M++}n.point[m]=K,m++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(k),K.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[d]=K,d++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==c||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==d||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==x||L.numSpotMaps!==T||L.numLightProbes!==R)&&(n.directional.length=c,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-b,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,L.directionalLength=c,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=d,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=x,L.numSpotMaps=T,L.numLightProbes=R,n.version=gm++)}function l(f,u){let h=0,p=0,c=0,m=0,_=0;const g=u.matrixWorldInverse;for(let d=0,v=f.length;d<v;d++){const M=f[d];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(M.isSpotLight){const x=n.spot[c];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),c++}else if(M.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),p++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function pc(i){const t=new vm(i),e=[],n=[];function s(u){f.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function xm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new pc(i),t.set(s,[a])):r>=o.length?(a=new pc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Mm extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sm extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ym=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Am(i,t,e){let n=new jo;const s=new lt,r=new lt,o=new le,a=new Mm({depthPacking:nh}),l=new Sm,f={},u=e.maxTextureSize,h={[Un]:Ne,[Ne]:Un,[qe]:qe},p=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:ym,fragmentShader:Em}),c=p.clone();c.defines.HORIZONTAL_PASS=1;const m=new ye;m.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new W(m,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let d=this.type;this.render=function(b,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Mn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=d!==vn&&this.type===vn,J=d===vn&&this.type!==vn;for(let et=0,K=b.length;et<K;et++){const Q=b[et],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const at=H.getFrameExtents();if(s.multiply(at),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,H.mapSize.y=r.y)),H.map===null||k===!0||J===!0){const yt=this.type!==vn?{minFilter:Ue,magFilter:Ue}:{};H.map!==null&&H.map.dispose(),H.map=new sn(s.x,s.y,yt),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ft=H.getViewportCount();for(let yt=0;yt<ft;yt++){const Ot=H.getViewport(yt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),B.viewport(o),H.updateMatrices(Q,yt),n=H.getFrustum(),x(R,L,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===vn&&v(H,L),H.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(E,y,D)};function v(b,R){const L=t.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,c.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,c.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new sn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,L,p,_,null),c.uniforms.shadow_pass.value=b.mapPass.texture,c.uniforms.resolution.value=b.mapSize,c.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,L,c,_,null)}function M(b,R,L,E){let y=null;const D=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)y=D;else if(y=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=y.uuid,k=R.uuid;let J=f[B];J===void 0&&(J={},f[B]=J);let et=J[k];et===void 0&&(et=y.clone(),J[k]=et,R.addEventListener("dispose",T)),y=et}if(y.visible=R.visible,y.wireframe=R.wireframe,E===vn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=L}return y}function x(b,R,L,E,y){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===vn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const k=t.update(b),J=b.material;if(Array.isArray(J)){const et=k.groups;for(let K=0,Q=et.length;K<Q;K++){const H=et[K],at=J[H.materialIndex];if(at&&at.visible){const ft=M(b,at,E,y);b.onBeforeShadow(i,b,R,L,k,ft,H),i.renderBufferDirect(L,null,k,ft,b,H),b.onAfterShadow(i,b,R,L,k,ft,H)}}}else if(J.visible){const et=M(b,J,E,y);b.onBeforeShadow(i,b,R,L,k,et,null),i.renderBufferDirect(L,null,k,et,b,null),b.onAfterShadow(i,b,R,L,k,et,null)}}const B=b.children;for(let k=0,J=B.length;k<J;k++)x(B[k],R,L,E,y)}function T(b){b.target.removeEventListener("dispose",T);for(const L in f){const E=f[L],y=b.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Tm={[jr]:$r,[Jr]:eo,[Qr]:no,[Ci]:to,[$r]:jr,[eo]:Jr,[no]:Qr,[to]:Ci};function bm(i,t){function e(){let O=!1;const dt=new le;let j=null;const nt=new le(0,0,0,0);return{setMask:function(gt){j!==gt&&!O&&(i.colorMask(gt,gt,gt,gt),j=gt)},setLocked:function(gt){O=gt},setClear:function(gt,pt,kt,ge,Ce){Ce===!0&&(gt*=ge,pt*=ge,kt*=ge),dt.set(gt,pt,kt,ge),nt.equals(dt)===!1&&(i.clearColor(gt,pt,kt,ge),nt.copy(dt))},reset:function(){O=!1,j=null,nt.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,j=null,nt=null,gt=null;return{setReversed:function(pt){if(dt!==pt){const kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const ge=gt;gt=null,this.setClear(ge)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?st(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(pt){j!==pt&&!O&&(i.depthMask(pt),j=pt)},setFunc:function(pt){if(dt&&(pt=Tm[pt]),nt!==pt){switch(pt){case jr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case Ci:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=pt}},setLocked:function(pt){O=pt},setClear:function(pt){gt!==pt&&(dt&&(pt=1-pt),i.clearDepth(pt),gt=pt)},reset:function(){O=!1,j=null,nt=null,gt=null,dt=!1}}}function s(){let O=!1,dt=null,j=null,nt=null,gt=null,pt=null,kt=null,ge=null,Ce=null;return{setTest:function(se){O||(se?st(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(se){dt!==se&&!O&&(i.stencilMask(se),dt=se)},setFunc:function(se,je,un){(j!==se||nt!==je||gt!==un)&&(i.stencilFunc(se,je,un),j=se,nt=je,gt=un)},setOp:function(se,je,un){(pt!==se||kt!==je||ge!==un)&&(i.stencilOp(se,je,un),pt=se,kt=je,ge=un)},setLocked:function(se){O=se},setClear:function(se){Ce!==se&&(i.clearStencil(se),Ce=se)},reset:function(){O=!1,dt=null,j=null,nt=null,gt=null,pt=null,kt=null,ge=null,Ce=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,f=new WeakMap;let u={},h={},p=new WeakMap,c=[],m=null,_=!1,g=null,d=null,v=null,M=null,x=null,T=null,b=null,R=new ot(0,0,0),L=0,E=!1,y=null,D=null,B=null,k=null,J=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=Q>=2);let at=null,ft={};const yt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Xt=new le().fromArray(yt),$=new le().fromArray(Ot);function it(O,dt,j,nt){const gt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(O,pt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<j;kt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(dt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return pt}const _t={};_t[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Ci),zt(!1),Yt(_a),st(i.CULL_FACE),U(Mn);function st(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Ct(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function It(O,dt){return h[O]!==dt?(i.bindFramebuffer(O,dt),h[O]=dt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=dt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Bt(O,dt){let j=c,nt=!1;if(O){j=p.get(dt),j===void 0&&(j=[],p.set(dt,j));const gt=O.textures;if(j.length!==gt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,kt=gt.length;pt<kt;pt++)j[pt]=i.COLOR_ATTACHMENT0+pt;j.length=gt.length,nt=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,nt=!0);nt&&i.drawBuffers(j)}function oe(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const Kt={[Xn]:i.FUNC_ADD,[Ol]:i.FUNC_SUBTRACT,[Nl]:i.FUNC_REVERSE_SUBTRACT};Kt[Ul]=i.MIN,Kt[Fl]=i.MAX;const te={[Bl]:i.ZERO,[zl]:i.ONE,[kl]:i.SRC_COLOR,[qr]:i.SRC_ALPHA,[Xl]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[Wl]:i.DST_ALPHA,[Gl]:i.ONE_MINUS_SRC_COLOR,[Zr]:i.ONE_MINUS_SRC_ALPHA,[Yl]:i.ONE_MINUS_DST_COLOR,[Hl]:i.ONE_MINUS_DST_ALPHA,[Kl]:i.CONSTANT_COLOR,[ql]:i.ONE_MINUS_CONSTANT_COLOR,[Zl]:i.CONSTANT_ALPHA,[jl]:i.ONE_MINUS_CONSTANT_ALPHA};function U(O,dt,j,nt,gt,pt,kt,ge,Ce,se){if(O===Mn){_===!0&&(Ct(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),O!==Il){if(O!==g||se!==E){if((d!==Xn||x!==Xn)&&(i.blendEquation(i.FUNC_ADD),d=Xn,x=Xn),se)switch(O){case Ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,M=null,T=null,b=null,R.set(0,0,0),L=0,g=O,E=se}return}gt=gt||dt,pt=pt||j,kt=kt||nt,(dt!==d||gt!==x)&&(i.blendEquationSeparate(Kt[dt],Kt[gt]),d=dt,x=gt),(j!==v||nt!==M||pt!==T||kt!==b)&&(i.blendFuncSeparate(te[j],te[nt],te[pt],te[kt]),v=j,M=nt,T=pt,b=kt),(ge.equals(R)===!1||Ce!==L)&&(i.blendColor(ge.r,ge.g,ge.b,Ce),R.copy(ge),L=Ce),g=O,E=!1}function Ee(O,dt){O.side===qe?Ct(i.CULL_FACE):st(i.CULL_FACE);let j=O.side===Ne;dt&&(j=!j),zt(j),O.blending===Ai&&O.transparent===!1?U(Mn):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const nt=O.stencilWrite;a.setTest(nt),nt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(O){y!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),y=O)}function Yt(O){O!==Pl?(st(i.CULL_FACE),O!==D&&(O===_a?i.cullFace(i.BACK):O===Dl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),D=O}function Lt(O){O!==B&&(K&&i.lineWidth(O),B=O)}function ae(O,dt,j){O?(st(i.POLYGON_OFFSET_FILL),(k!==dt||J!==j)&&(i.polygonOffset(dt,j),k=dt,J=j)):Ct(i.POLYGON_OFFSET_FILL)}function Pt(O){O?st(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function P(O){O===void 0&&(O=i.TEXTURE0+et-1),at!==O&&(i.activeTexture(O),at=O)}function A(O,dt,j){j===void 0&&(at===null?j=i.TEXTURE0+et-1:j=at);let nt=ft[j];nt===void 0&&(nt={type:void 0,texture:void 0},ft[j]=nt),(nt.type!==O||nt.texture!==dt)&&(at!==j&&(i.activeTexture(j),at=j),i.bindTexture(O,dt||_t[O]),nt.type=O,nt.texture=dt)}function I(){const O=ft[at];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(O){Xt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Xt.copy(O))}function St(O){$.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),$.copy(O))}function Zt(O,dt){let j=f.get(dt);j===void 0&&(j=new WeakMap,f.set(dt,j));let nt=j.get(O);nt===void 0&&(nt=i.getUniformBlockIndex(dt,O.name),j.set(O,nt))}function Ht(O,dt){const nt=f.get(dt).get(O);l.get(dt)!==nt&&(i.uniformBlockBinding(dt,nt,O.__bindingPointIndex),l.set(dt,nt))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,ft={},h={},p=new WeakMap,c=[],m=null,_=!1,g=null,d=null,v=null,M=null,x=null,T=null,b=null,R=new ot(0,0,0),L=0,E=!1,y=null,D=null,B=null,k=null,J=null,Xt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Ct,bindFramebuffer:It,drawBuffers:Bt,useProgram:oe,setBlending:U,setMaterial:Ee,setFlipSided:zt,setCullFace:Yt,setLineWidth:Lt,setPolygonOffset:ae,setScissorTest:Pt,activeTexture:P,bindTexture:A,unbindTexture:I,compressedTexImage2D:z,compressedTexImage3D:X,texImage2D:Mt,texImage3D:Dt,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:qt,texStorage3D:rt,texSubImage2D:q,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:vt,scissor:Nt,viewport:St,reset:ue}}function mc(i,t,e,n){const s=wm(n);switch(e){case Zc:return i*t;case $c:return i*t;case Jc:return i*t*2;case Vo:return i*t/s.components*s.byteLength;case Yo:return i*t/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case Xo:return i*t*2/s.components*s.byteLength;case jc:return i*t*3/s.components*s.byteLength;case nn:return i*t*4/s.components*s.byteLength;case Ko:return i*t*4/s.components*s.byteLength;case Xs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qs:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:case ho:return Math.max(i,16)*Math.max(t,8)/4;case ao:case lo:return Math.max(i,8)*Math.max(t,8)/2;case uo:case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case js:case Co:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Do:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wm(i){switch(i){case En:case Xc:return{byteLength:1,components:1};case os:case Kc:case Sn:return{byteLength:2,components:1};case Wo:case Ho:return{byteLength:2,components:4};case jn:case Go:case ln:return{byteLength:4,components:1};case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Rm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new lt,u=new WeakMap;let h;const p=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,A){return c?new OffscreenCanvas(P,A):tr("canvas")}function _(P,A,I){let z=1;const X=Pt(P);if((X.width>I||X.height>I)&&(z=I/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(z*X.width),xt=Math.floor(z*X.height);h===void 0&&(h=m(q,xt));const ht=A?m(q,xt):h;return ht.width=q,ht.height=xt,ht.getContext("2d").drawImage(P,0,0,q,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+q+"x"+xt+")."),ht}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),P;return P}function g(P){return P.generateMipmaps}function d(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,A,I,z,X=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=A;if(A===i.RED&&(I===i.FLOAT&&(q=i.R32F),I===i.HALF_FLOAT&&(q=i.R16F),I===i.UNSIGNED_BYTE&&(q=i.R8)),A===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.R8UI),I===i.UNSIGNED_SHORT&&(q=i.R16UI),I===i.UNSIGNED_INT&&(q=i.R32UI),I===i.BYTE&&(q=i.R8I),I===i.SHORT&&(q=i.R16I),I===i.INT&&(q=i.R32I)),A===i.RG&&(I===i.FLOAT&&(q=i.RG32F),I===i.HALF_FLOAT&&(q=i.RG16F),I===i.UNSIGNED_BYTE&&(q=i.RG8)),A===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RG8UI),I===i.UNSIGNED_SHORT&&(q=i.RG16UI),I===i.UNSIGNED_INT&&(q=i.RG32UI),I===i.BYTE&&(q=i.RG8I),I===i.SHORT&&(q=i.RG16I),I===i.INT&&(q=i.RG32I)),A===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGB8UI),I===i.UNSIGNED_SHORT&&(q=i.RGB16UI),I===i.UNSIGNED_INT&&(q=i.RGB32UI),I===i.BYTE&&(q=i.RGB8I),I===i.SHORT&&(q=i.RGB16I),I===i.INT&&(q=i.RGB32I)),A===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),I===i.UNSIGNED_INT&&(q=i.RGBA32UI),I===i.BYTE&&(q=i.RGBA8I),I===i.SHORT&&(q=i.RGBA16I),I===i.INT&&(q=i.RGBA32I)),A===i.RGB&&I===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),A===i.RGBA){const xt=X?ar:jt.getTransfer(z);I===i.FLOAT&&(q=i.RGBA32F),I===i.HALF_FLOAT&&(q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(q=xt===re?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(P,A){let I;return P?A===null||A===jn||A===Di?I=i.DEPTH24_STENCIL8:A===ln?I=i.DEPTH32F_STENCIL8:A===os&&(I=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===jn||A===Di?I=i.DEPTH_COMPONENT24:A===ln?I=i.DEPTH_COMPONENT32F:A===os&&(I=i.DEPTH_COMPONENT16),I}function T(P,A){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ue&&P.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function b(P){const A=P.target;A.removeEventListener("dispose",b),L(A),A.isVideoTexture&&u.delete(A)}function R(P){const A=P.target;A.removeEventListener("dispose",R),y(A)}function L(P){const A=n.get(P);if(A.__webglInit===void 0)return;const I=P.source,z=p.get(I);if(z){const X=z[A.__cacheKey];X.usedTimes--,X.usedTimes===0&&E(P),Object.keys(z).length===0&&p.delete(I)}n.remove(P)}function E(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const I=P.source,z=p.get(I);delete z[A.__cacheKey],o.memory.textures--}function y(P){const A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(A.__webglFramebuffer[z]))for(let X=0;X<A.__webglFramebuffer[z].length;X++)i.deleteFramebuffer(A.__webglFramebuffer[z][X]);else i.deleteFramebuffer(A.__webglFramebuffer[z]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[z])}else{if(Array.isArray(A.__webglFramebuffer))for(let z=0;z<A.__webglFramebuffer.length;z++)i.deleteFramebuffer(A.__webglFramebuffer[z]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let z=0;z<A.__webglColorRenderbuffer.length;z++)A.__webglColorRenderbuffer[z]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[z]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const I=P.textures;for(let z=0,X=I.length;z<X;z++){const q=n.get(I[z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(I[z])}n.remove(P)}let D=0;function B(){D=0}function k(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function J(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function et(P,A){const I=n.get(P);if(P.isVideoTexture&&Lt(P),P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){const z=P.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(I,P,A);return}}e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+A)}function K(P,A){const I=n.get(P);if(P.version>0&&I.__version!==P.version){$(I,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+A)}function Q(P,A){const I=n.get(P);if(P.version>0&&I.__version!==P.version){$(I,P,A);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+A)}function H(P,A){const I=n.get(P);if(P.version>0&&I.__version!==P.version){it(I,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+A)}const at={[ro]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},ft={[Ue]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[ps]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[hr]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},yt={[sh]:i.NEVER,[hh]:i.ALWAYS,[rh]:i.LESS,[nl]:i.LEQUAL,[oh]:i.EQUAL,[lh]:i.GEQUAL,[ah]:i.GREATER,[ch]:i.NOTEQUAL};function Ot(P,A){if(A.type===ln&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===cn||A.magFilter===hr||A.magFilter===ps||A.magFilter===Zn||A.minFilter===cn||A.minFilter===hr||A.minFilter===ps||A.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,at[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,at[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,at[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ft[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ft[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,yt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ue||A.minFilter!==ps&&A.minFilter!==Zn||A.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Xt(P,A){let I=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",b));const z=A.source;let X=p.get(z);X===void 0&&(X={},p.set(z,X));const q=J(A);if(q!==P.__cacheKey){X[q]===void 0&&(X[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),X[q].usedTimes++;const xt=X[P.__cacheKey];xt!==void 0&&(X[P.__cacheKey].usedTimes--,xt.usedTimes===0&&E(A)),P.__cacheKey=q,P.__webglTexture=X[q].texture}return I}function $(P,A,I){let z=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(z=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(z=i.TEXTURE_3D);const X=Xt(P,A),q=A.source;e.bindTexture(z,P.__webglTexture,i.TEXTURE0+I);const xt=n.get(q);if(q.version!==xt.__version||X===!0){e.activeTexture(i.TEXTURE0+I);const ht=jt.getPrimaries(jt.workingColorSpace),vt=A.colorSpace===On?null:jt.getPrimaries(A.colorSpace),qt=A.colorSpace===On||ht===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let rt=_(A.image,!1,s.maxTextureSize);rt=ae(A,rt);const Mt=r.convert(A.format,A.colorSpace),Dt=r.convert(A.type);let Nt=M(A.internalFormat,Mt,Dt,A.colorSpace,A.isVideoTexture);Ot(z,A);let St;const Zt=A.mipmaps,Ht=A.isVideoTexture!==!0,ue=xt.__version===void 0||X===!0,O=q.dataReady,dt=T(A,rt);if(A.isDepthTexture)Nt=x(A.format===Ii,A.type),ue&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Nt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,Mt,Dt,null));else if(A.isDataTexture)if(Zt.length>0){Ht&&ue&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,Zt[0].width,Zt[0].height);for(let j=0,nt=Zt.length;j<nt;j++)St=Zt[j],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Mt,Dt,St.data):e.texImage2D(i.TEXTURE_2D,j,Nt,St.width,St.height,0,Mt,Dt,St.data);A.generateMipmaps=!1}else Ht?(ue&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,rt.width,rt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,Mt,Dt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,rt.width,rt.height,0,Mt,Dt,rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ht&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Nt,Zt[0].width,Zt[0].height,rt.depth);for(let j=0,nt=Zt.length;j<nt;j++)if(St=Zt[j],A.format!==nn)if(Mt!==null)if(Ht){if(O)if(A.layerUpdates.size>0){const gt=mc(St.width,St.height,A.format,A.type);for(const pt of A.layerUpdates){const kt=St.data.subarray(pt*gt/St.data.BYTES_PER_ELEMENT,(pt+1)*gt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,pt,St.width,St.height,1,Mt,kt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,rt.depth,Mt,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Nt,St.width,St.height,rt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,rt.depth,Mt,Dt,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Nt,St.width,St.height,rt.depth,0,Mt,Dt,St.data)}else{Ht&&ue&&e.texStorage2D(i.TEXTURE_2D,dt,Nt,Zt[0].width,Zt[0].height);for(let j=0,nt=Zt.length;j<nt;j++)St=Zt[j],A.format!==nn?Mt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Nt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,St.width,St.height,Mt,Dt,St.data):e.texImage2D(i.TEXTURE_2D,j,Nt,St.width,St.height,0,Mt,Dt,St.data)}else if(A.isDataArrayTexture)if(Ht){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Nt,rt.width,rt.height,rt.depth),O)if(A.layerUpdates.size>0){const j=mc(rt.width,rt.height,A.format,A.type);for(const nt of A.layerUpdates){const gt=rt.data.subarray(nt*j/rt.data.BYTES_PER_ELEMENT,(nt+1)*j/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,rt.width,rt.height,1,Mt,Dt,gt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Dt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,rt.width,rt.height,rt.depth,0,Mt,Dt,rt.data);else if(A.isData3DTexture)Ht?(ue&&e.texStorage3D(i.TEXTURE_3D,dt,Nt,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,Mt,Dt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,rt.width,rt.height,rt.depth,0,Mt,Dt,rt.data);else if(A.isFramebufferTexture){if(ue)if(Ht)e.texStorage2D(i.TEXTURE_2D,dt,Nt,rt.width,rt.height);else{let j=rt.width,nt=rt.height;for(let gt=0;gt<dt;gt++)e.texImage2D(i.TEXTURE_2D,gt,Nt,j,nt,0,Mt,Dt,null),j>>=1,nt>>=1}}else if(Zt.length>0){if(Ht&&ue){const j=Pt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,dt,Nt,j.width,j.height)}for(let j=0,nt=Zt.length;j<nt;j++)St=Zt[j],Ht?O&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,Mt,Dt,St):e.texImage2D(i.TEXTURE_2D,j,Nt,Mt,Dt,St);A.generateMipmaps=!1}else if(Ht){if(ue){const j=Pt(rt);e.texStorage2D(i.TEXTURE_2D,dt,Nt,j.width,j.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Dt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Mt,Dt,rt);g(A)&&d(z),xt.__version=q.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function it(P,A,I){if(A.image.length!==6)return;const z=Xt(P,A),X=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+I);const q=n.get(X);if(X.version!==q.__version||z===!0){e.activeTexture(i.TEXTURE0+I);const xt=jt.getPrimaries(jt.workingColorSpace),ht=A.colorSpace===On?null:jt.getPrimaries(A.colorSpace),vt=A.colorSpace===On||xt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const qt=A.isCompressedTexture||A.image[0].isCompressedTexture,rt=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let nt=0;nt<6;nt++)!qt&&!rt?Mt[nt]=_(A.image[nt],!0,s.maxCubemapSize):Mt[nt]=rt?A.image[nt].image:A.image[nt],Mt[nt]=ae(A,Mt[nt]);const Dt=Mt[0],Nt=r.convert(A.format,A.colorSpace),St=r.convert(A.type),Zt=M(A.internalFormat,Nt,St,A.colorSpace),Ht=A.isVideoTexture!==!0,ue=q.__version===void 0||z===!0,O=X.dataReady;let dt=T(A,Dt);Ot(i.TEXTURE_CUBE_MAP,A);let j;if(qt){Ht&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Zt,Dt.width,Dt.height);for(let nt=0;nt<6;nt++){j=Mt[nt].mipmaps;for(let gt=0;gt<j.length;gt++){const pt=j[gt];A.format!==nn?Nt!==null?Ht?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,pt.width,pt.height,Nt,pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,Zt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,pt.width,pt.height,Nt,St,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,Zt,pt.width,pt.height,0,Nt,St,pt.data)}}}else{if(j=A.mipmaps,Ht&&ue){j.length>0&&dt++;const nt=Pt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Zt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(rt){Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Mt[nt].width,Mt[nt].height,Nt,St,Mt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,Mt[nt].width,Mt[nt].height,0,Nt,St,Mt[nt].data);for(let gt=0;gt<j.length;gt++){const kt=j[gt].image[nt].image;Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,kt.width,kt.height,Nt,St,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,Zt,kt.width,kt.height,0,Nt,St,kt.data)}}else{Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,St,Mt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,Nt,St,Mt[nt]);for(let gt=0;gt<j.length;gt++){const pt=j[gt];Ht?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,Nt,St,pt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,Zt,Nt,St,pt.image[nt])}}}g(A)&&d(i.TEXTURE_CUBE_MAP),q.__version=X.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function _t(P,A,I,z,X,q){const xt=r.convert(I.format,I.colorSpace),ht=r.convert(I.type),vt=M(I.internalFormat,xt,ht,I.colorSpace),qt=n.get(A),rt=n.get(I);if(rt.__renderTarget=A,!qt.__hasExternalTextures){const Mt=Math.max(1,A.width>>q),Dt=Math.max(1,A.height>>q);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,q,vt,Mt,Dt,A.depth,0,xt,ht,null):e.texImage2D(X,q,vt,Mt,Dt,0,xt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Yt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,X,rt.__webglTexture,0,zt(A)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,z,X,rt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(P,A,I){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){const z=A.depthTexture,X=z&&z.isDepthTexture?z.type:null,q=x(A.stencilBuffer,X),xt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=zt(A);Yt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,q,A.width,A.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,q,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,q,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,P)}else{const z=A.textures;for(let X=0;X<z.length;X++){const q=z[X],xt=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),vt=M(q.internalFormat,xt,ht,q.colorSpace),qt=zt(A);I&&Yt(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,vt,A.width,A.height):Yt(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,vt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,vt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=n.get(A.depthTexture);z.__renderTarget=A,(!z.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),et(A.depthTexture,0);const X=z.__webglTexture,q=zt(A);if(A.depthTexture.format===Ti)Yt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(A.depthTexture.format===Ii)Yt(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function It(P){const A=n.get(P),I=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const z=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),z){const X=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),A.__depthDisposeCallback=X}A.__boundDepthTexture=z}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,P)}else if(I){A.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[z]),A.__webglDepthbuffer[z]===void 0)A.__webglDepthbuffer[z]=i.createRenderbuffer(),st(A.__webglDepthbuffer[z],P,!1);else{const X=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=A.__webglDepthbuffer[z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),st(A.__webglDepthbuffer,P,!1);else{const z=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,z,i.RENDERBUFFER,X)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(P,A,I){const z=n.get(P);A!==void 0&&_t(z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&It(P)}function oe(P){const A=P.texture,I=n.get(P),z=n.get(A);P.addEventListener("dispose",R);const X=P.textures,q=P.isWebGLCubeRenderTarget===!0,xt=X.length>1;if(xt||(z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture()),z.__version=A.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(A.mipmaps&&A.mipmaps.length>0){I.__webglFramebuffer[ht]=[];for(let vt=0;vt<A.mipmaps.length;vt++)I.__webglFramebuffer[ht][vt]=i.createFramebuffer()}else I.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){I.__webglFramebuffer=[];for(let ht=0;ht<A.mipmaps.length;ht++)I.__webglFramebuffer[ht]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ht=0,vt=X.length;ht<vt;ht++){const qt=n.get(X[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Yt(P)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ht=0;ht<X.length;ht++){const vt=X[ht];I.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[ht]);const qt=r.convert(vt.format,vt.colorSpace),rt=r.convert(vt.type),Mt=M(vt.internalFormat,qt,rt,vt.colorSpace,P.isXRRenderTarget===!0),Dt=zt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,Mt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,I.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),st(I.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,A);for(let ht=0;ht<6;ht++)if(A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)_t(I.__webglFramebuffer[ht][vt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt);else _t(I.__webglFramebuffer[ht],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(A)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ht=0,vt=X.length;ht<vt;ht++){const qt=X[ht],rt=n.get(qt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Ot(i.TEXTURE_2D,qt),_t(I.__webglFramebuffer,P,qt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(qt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ht=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,z.__webglTexture),Ot(ht,A),A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)_t(I.__webglFramebuffer[vt],P,A,i.COLOR_ATTACHMENT0,ht,vt);else _t(I.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,ht,0);g(A)&&d(ht),e.unbindTexture()}P.depthBuffer&&It(P)}function Kt(P){const A=P.textures;for(let I=0,z=A.length;I<z;I++){const X=A[I];if(g(X)){const q=v(P),xt=n.get(X).__webglTexture;e.bindTexture(q,xt),d(q),e.unbindTexture()}}}const te=[],U=[];function Ee(P){if(P.samples>0){if(Yt(P)===!1){const A=P.textures,I=P.width,z=P.height;let X=i.COLOR_BUFFER_BIT;const q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(P),ht=A.length>1;if(ht)for(let vt=0;vt<A.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<A.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const qt=n.get(A[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,I,z,0,0,I,z,X,i.NEAREST),l===!0&&(te.length=0,U.length=0,te.push(i.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(te.push(q),U.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let vt=0;vt<A.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const qt=n.get(A[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function zt(P){return Math.min(s.maxSamples,P.samples)}function Yt(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(P){const A=o.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function ae(P,A){const I=P.colorSpace,z=P.format,X=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||I!==Bi&&I!==On&&(jt.getTransfer(I)===re?(z!==nn||X!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),A}function Pt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=et,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Yt}function Cm(i,t){function e(n,s=On){let r;const o=jt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===os)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===jc)return i.RGB;if(n===nn)return i.RGBA;if(n===$c)return i.LUMINANCE;if(n===Jc)return i.LUMINANCE_ALPHA;if(n===Ti)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===Xs||n===Ks||n===qs||n===Zs)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===co||n===lo||n===ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===uo||n===fo)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===_o||n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo||n===Ao||n===To||n===bo||n===wo||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===Co||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===js)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===Po||n===Do||n===Io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Lm extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pm={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),d=this._getHandJoint(f,_);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=f.joints["index-finger-tip"],h=f.joints["thumb-tip"],p=u.position.distanceTo(h.position),c=.02,m=.005;f.inputState.pinching&&p>c+m?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&p<=c-m&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Re({vertexShader:Dm,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new W(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nm extends Qn{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,f=null,u=null,h=null,p=null,c=null,m=null;const _=new Om,g=e.getContextAttributes();let d=null,v=null;const M=[],x=[],T=new lt;let b=null;const R=new He;R.viewport=new le;const L=new He;L.viewport=new le;const E=[R,L],y=new Lm;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=M[$];return it===void 0&&(it=new Fr,M[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=M[$];return it===void 0&&(it=new Fr,M[$]=it),it.getGripSpace()},this.getHand=function($){let it=M[$];return it===void 0&&(it=new Fr,M[$]=it),it.getHandSpace()};function k($){const it=x.indexOf($.inputSource);if(it===-1)return;const _t=M[it];_t!==void 0&&(_t.update($.inputSource,$.frame,f||o),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function J(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",et);for(let $=0;$<M.length;$++){const it=x[$];it!==null&&(x[$]=null,M[$].disconnect(it))}D=null,B=null,_.reset(),t.setRenderTarget(d),c=null,p=null,h=null,s=null,v=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function($){f=$},this.getBaseLayer=function(){return p!==null?p:c},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",J),s.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};c=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),v=new sn(c.framebufferWidth,c.framebufferHeight,{format:nn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,_t=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Ii:Ti,_t=g.stencil?Di:jn);const Ct={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};h=new XRWebGLBinding(s,e),p=h.createProjectionLayer(Ct),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new sn(p.textureWidth,p.textureHeight,{format:nn,type:En,depthTexture:new dl(p.textureWidth,p.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),f=null,o=await s.requestReferenceSpace(a),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function et($){for(let it=0;it<$.removed.length;it++){const _t=$.removed[it],st=x.indexOf(_t);st>=0&&(x[st]=null,M[st].disconnect(_t))}for(let it=0;it<$.added.length;it++){const _t=$.added[it];let st=x.indexOf(_t);if(st===-1){for(let It=0;It<M.length;It++)if(It>=x.length){x.push(_t),st=It;break}else if(x[It]===null){x[It]=_t,st=It;break}if(st===-1)break}const Ct=M[st];Ct&&Ct.connect(_t)}}const K=new C,Q=new C;function H($,it,_t){K.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(_t.matrixWorld);const st=K.distanceTo(Q),Ct=it.projectionMatrix.elements,It=_t.projectionMatrix.elements,Bt=Ct[14]/(Ct[10]-1),oe=Ct[14]/(Ct[10]+1),Kt=(Ct[9]+1)/Ct[5],te=(Ct[9]-1)/Ct[5],U=(Ct[8]-1)/Ct[0],Ee=(It[8]+1)/It[0],zt=Bt*U,Yt=Bt*Ee,Lt=st/(-U+Ee),ae=Lt*-U;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ae),$.translateZ(Lt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ct[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Pt=Bt+Lt,P=oe+Lt,A=zt-ae,I=Yt+(st-ae),z=Kt*oe/P*Pt,X=te*oe/P*Pt;$.projectionMatrix.makePerspective(A,I,z,X,Pt,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function at($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let it=$.near,_t=$.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),y.near=L.near=R.near=it,y.far=L.far=R.far=_t,(D!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,B=y.far),R.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,y.layers.mask=R.layers.mask|L.layers.mask;const st=$.parent,Ct=y.cameras;at(y,st);for(let It=0;It<Ct.length;It++)at(Ct[It],st);Ct.length===2?H(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),ft($,y,st)};function ft($,it,_t){_t===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=as*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&c===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let yt=null;function Ot($,it){if(u=it.getViewerPose(f||o),m=it,u!==null){const _t=u.views;c!==null&&(t.setRenderTargetFramebuffer(v,c.framebuffer),t.setRenderTarget(v));let st=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let It=0;It<_t.length;It++){const Bt=_t[It];let oe=null;if(c!==null)oe=c.getViewport(Bt);else{const te=h.getViewSubImage(p,Bt);oe=te.viewport,It===0&&(t.setRenderTargetTextures(v,te.colorTexture,p.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(v))}let Kt=E[It];Kt===void 0&&(Kt=new He,Kt.layers.enable(It),Kt.viewport=new le,E[It]=Kt),Kt.matrix.fromArray(Bt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Bt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(oe.x,oe.y,oe.width,oe.height),It===0&&(y.matrix.copy(Kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(Kt)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const It=h.getDepthInformation(_t[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let _t=0;_t<M.length;_t++){const st=x[_t],Ct=M[_t];st!==null&&Ct!==void 0&&Ct.update(st,it,f||o)}yt&&yt($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}const Xt=new fl;Xt.setAnimationLoop(Ot),this.setAnimationLoop=function($){yt=$},this.dispose=function(){}}}const Hn=new hn,Um=new ie;function Fm(i,t){function e(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,ll(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,v,M,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),h(g,d)):d.isMeshPhongMaterial?(r(g,d),u(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&c(g,d,x)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),_(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,M):d.isSpriteMaterial?f(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,e(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Ne&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,e(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Ne&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,e(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,e(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=t.get(d),M=v.envMap,x=v.envMapRotation;M&&(g.envMap.value=M,Hn.copy(x),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),g.envMapRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Hn)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=M*.5,d.map&&(g.map.value=d.map,e(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,e(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,e(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function c(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ne&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function _(g,d){const v=t.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const x=M.program;n.uniformBlockBinding(v,x)}function f(v,M){let x=s[v.id];x===void 0&&(m(v),x=u(v),s[v.id]=x,v.addEventListener("dispose",g));const T=M.program;n.updateUBOMapping(v,T);const b=t.render.frame;r[v.id]!==b&&(p(v),r[v.id]=b)}function u(v){const M=h();v.__bindingPointIndex=M;const x=i.createBuffer(),T=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const M=s[v.id],x=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,R=x.length;b<R;b++){const L=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,y=L.length;E<y;E++){const D=L[E];if(c(D,b,E,T)===!0){const B=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let et=0;et<k.length;et++){const K=k[et],Q=_(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,B+J,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function c(v,M,x,T){const b=v.value,R=M+"_"+x;if(T[R]===void 0)return typeof b=="number"||typeof b=="boolean"?T[R]=b:T[R]=b.clone(),!0;{const L=T[R];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return T[R]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function m(v){const M=v.uniforms;let x=0;const T=16;for(let R=0,L=M.length;R<L;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,D=E.length;y<D;y++){const B=E[y],k=Array.isArray(B.value)?B.value:[B.value];for(let J=0,et=k.length;J<et;J++){const K=k[J],Q=_(K),H=x%T,at=H%Q.boundary,ft=H+at;x+=at,ft!==0&&T-ft<Q.storage&&(x+=T-ft),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Q.storage}}}const b=x%T;return b>0&&(x+=T-b),v.__size=x,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:f,dispose:d}}class zm{constructor(t={}){const{canvas:e=wh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let c;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");c=n.getContextAttributes().alpha}else c=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=Nn,this.toneMappingExposure=1;const x=this;let T=!1,b=0,R=0,L=null,E=-1,y=null;const D=new le,B=new le;let k=null;const J=new ot(0);let et=0,K=e.width,Q=e.height,H=1,at=null,ft=null;const yt=new le(0,0,K,Q),Ot=new le(0,0,K,Q);let Xt=!1;const $=new jo;let it=!1,_t=!1;const st=new ie,Ct=new ie,It=new C,Bt=new le,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function te(){return L===null?H:1}let U=n;function Ee(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${zo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),U===null){const N="webgl2";if(U=Ee(N,w),U===null)throw Ee(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let zt,Yt,Lt,ae,Pt,P,A,I,z,X,q,xt,ht,vt,qt,rt,Mt,Dt,Nt,St,Zt,Ht,ue,O;function dt(){zt=new Vd(U),zt.init(),Ht=new Cm(U,zt),Yt=new Bd(U,zt,t,Ht),Lt=new bm(U,zt),Yt.reverseDepthBuffer&&p&&Lt.buffers.depth.setReversed(!0),ae=new Kd(U),Pt=new um,P=new Rm(U,zt,Lt,Pt,Yt,Ht,ae),A=new kd(x),I=new Hd(x),z=new Qh(U),ue=new Ud(U,z),X=new Yd(U,z,ae,ue),q=new Zd(U,X,z,ae),Nt=new qd(U,Yt,P),rt=new zd(Pt),xt=new hm(x,A,I,zt,Yt,ue,rt),ht=new Fm(x,Pt),vt=new dm,qt=new xm(zt),Dt=new Nd(x,A,I,Lt,q,c,l),Mt=new Am(x,q,Yt),O=new Bm(U,ae,Yt,Lt),St=new Fd(U,zt,ae),Zt=new Xd(U,zt,ae),ae.programs=xt.programs,x.capabilities=Yt,x.extensions=zt,x.properties=Pt,x.renderLists=vt,x.shadowMap=Mt,x.state=Lt,x.info=ae}dt();const j=new Nm(x,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(K,Q,!1))},this.getSize=function(w){return w.set(K,Q)},this.setSize=function(w,N,V=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,Q=N,e.width=Math.floor(w*H),e.height=Math.floor(N*H),V===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(K*H,Q*H).floor()},this.setDrawingBufferSize=function(w,N,V){K=w,Q=N,H=V,e.width=Math.floor(w*V),e.height=Math.floor(N*V),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(yt)},this.setViewport=function(w,N,V,Y){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,N,V,Y),Lt.viewport(D.copy(yt).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Ot)},this.setScissor=function(w,N,V,Y){w.isVector4?Ot.set(w.x,w.y,w.z,w.w):Ot.set(w,N,V,Y),Lt.scissor(B.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){Lt.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){at=w},this.setTransparentSort=function(w){ft=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(w=!0,N=!0,V=!0){let Y=0;if(w){let F=!1;if(L!==null){const ct=L.texture.format;F=ct===Ko||ct===Xo||ct===Yo}if(F){const ct=L.texture.type,mt=ct===En||ct===jn||ct===os||ct===Di||ct===Wo||ct===Ho,Et=Dt.getClearColor(),At=Dt.getClearAlpha(),Ft=Et.r,Gt=Et.g,Tt=Et.b;mt?(m[0]=Ft,m[1]=Gt,m[2]=Tt,m[3]=At,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Ft,_[1]=Gt,_[2]=Tt,_[3]=At,U.clearBufferiv(U.COLOR,0,_))}else Y|=U.COLOR_BUFFER_BIT}N&&(Y|=U.DEPTH_BUFFER_BIT),V&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),qt.dispose(),Pt.dispose(),A.dispose(),I.dispose(),q.dispose(),ue.dispose(),O.dispose(),xt.dispose(),j.dispose(),j.removeEventListener("sessionstart",la),j.removeEventListener("sessionend",ha),Fn.stop()};function nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const w=ae.autoReset,N=Mt.enabled,V=Mt.autoUpdate,Y=Mt.needsUpdate,F=Mt.type;dt(),ae.autoReset=w,Mt.enabled=N,Mt.autoUpdate=V,Mt.needsUpdate=Y,Mt.type=F}function pt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function kt(w){const N=w.target;N.removeEventListener("dispose",kt),ge(N)}function ge(w){Ce(w),Pt.remove(w)}function Ce(w){const N=Pt.get(w).programs;N!==void 0&&(N.forEach(function(V){xt.releaseProgram(V)}),w.isShaderMaterial&&xt.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,V,Y,F,ct){N===null&&(N=oe);const mt=F.isMesh&&F.matrixWorld.determinant()<0,Et=bl(w,N,V,Y,F);Lt.setMaterial(Y,mt);let At=V.index,Ft=1;if(Y.wireframe===!0){if(At=X.getWireframeAttribute(V),At===void 0)return;Ft=2}const Gt=V.drawRange,Tt=V.attributes.position;let Jt=Gt.start*Ft,fe=(Gt.start+Gt.count)*Ft;ct!==null&&(Jt=Math.max(Jt,ct.start*Ft),fe=Math.min(fe,(ct.start+ct.count)*Ft)),At!==null?(Jt=Math.max(Jt,0),fe=Math.min(fe,At.count)):Tt!=null&&(Jt=Math.max(Jt,0),fe=Math.min(fe,Tt.count));const pe=fe-Jt;if(pe<0||pe===1/0)return;ue.setup(F,Y,Et,V,At);let Fe,ee=St;if(At!==null&&(Fe=z.get(At),ee=Zt,ee.setIndex(Fe)),F.isMesh)Y.wireframe===!0?(Lt.setLineWidth(Y.wireframeLinewidth*te()),ee.setMode(U.LINES)):ee.setMode(U.TRIANGLES);else if(F.isLine){let Rt=Y.linewidth;Rt===void 0&&(Rt=1),Lt.setLineWidth(Rt*te()),F.isLineSegments?ee.setMode(U.LINES):F.isLineLoop?ee.setMode(U.LINE_LOOP):ee.setMode(U.LINE_STRIP)}else F.isPoints?ee.setMode(U.POINTS):F.isSprite&&ee.setMode(U.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ee.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ee.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Rt=F._multiDrawStarts,fn=F._multiDrawCounts,ne=F._multiDrawCount,$e=At?z.get(At).bytesPerElement:1,ii=Pt.get(Y).currentProgram.getUniforms();for(let ze=0;ze<ne;ze++)ii.setValue(U,"_gl_DrawID",ze),ee.render(Rt[ze]/$e,fn[ze])}else if(F.isInstancedMesh)ee.renderInstances(Jt,pe,F.count);else if(V.isInstancedBufferGeometry){const Rt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fn=Math.min(V.instanceCount,Rt);ee.renderInstances(Jt,pe,fn)}else ee.render(Jt,pe)};function se(w,N,V){w.transparent===!0&&w.side===qe&&w.forceSinglePass===!1?(w.side=Ne,w.needsUpdate=!0,ds(w,N,V),w.side=Un,w.needsUpdate=!0,ds(w,N,V),w.side=qe):ds(w,N,V)}this.compile=function(w,N,V=null){V===null&&(V=w),d=qt.get(V),d.init(N),M.push(d),V.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const Y=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ct=F.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const Et=ct[mt];se(Et,V,F),Y.add(Et)}else se(ct,V,F),Y.add(ct)}),M.pop(),d=null,Y},this.compileAsync=function(w,N,V=null){const Y=this.compile(w,N,V);return new Promise(F=>{function ct(){if(Y.forEach(function(mt){Pt.get(mt).currentProgram.isReady()&&Y.delete(mt)}),Y.size===0){F(w);return}setTimeout(ct,10)}zt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let je=null;function un(w){je&&je(w)}function la(){Fn.stop()}function ha(){Fn.start()}const Fn=new fl;Fn.setAnimationLoop(un),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(w){je=w,j.setAnimationLoop(w),w===null?Fn.stop():Fn.start()},j.addEventListener("sessionstart",la),j.addEventListener("sessionend",ha),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,L),d=qt.get(w,M.length),d.init(N),M.push(d),Ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Ct),_t=this.localClippingEnabled,it=rt.init(this.clippingPlanes,_t),g=vt.get(w,v.length),g.init(),v.push(g),j.enabled===!0&&j.isPresenting===!0){const ct=x.xr.getDepthSensingMesh();ct!==null&&lr(ct,N,-1/0,x.sortObjects)}lr(w,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(at,ft),Kt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Kt&&Dt.addToRenderList(g,w),this.info.render.frame++,it===!0&&rt.beginShadows();const V=d.state.shadowsArray;Mt.render(V,w,N),it===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,F=g.transmissive;if(d.setupLights(),N.isArrayCamera){const ct=N.cameras;if(F.length>0)for(let mt=0,Et=ct.length;mt<Et;mt++){const At=ct[mt];fa(Y,F,w,At)}Kt&&Dt.render(w);for(let mt=0,Et=ct.length;mt<Et;mt++){const At=ct[mt];ua(g,w,At,At.viewport)}}else F.length>0&&fa(Y,F,w,N),Kt&&Dt.render(w),ua(g,w,N);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(x,w,N),ue.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],it===!0&&rt.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function lr(w,N,V,Y){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){Y&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const mt=q.update(w),Et=w.material;Et.visible&&g.push(w,mt,Et,V,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const mt=q.update(w),Et=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Bt.copy(mt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(Et)){const At=mt.groups;for(let Ft=0,Gt=At.length;Ft<Gt;Ft++){const Tt=At[Ft],Jt=Et[Tt.materialIndex];Jt&&Jt.visible&&g.push(w,mt,Jt,V,Bt.z,Tt)}}else Et.visible&&g.push(w,mt,Et,V,Bt.z,null)}}const ct=w.children;for(let mt=0,Et=ct.length;mt<Et;mt++)lr(ct[mt],N,V,Y)}function ua(w,N,V,Y){const F=w.opaque,ct=w.transmissive,mt=w.transparent;d.setupLightsView(V),it===!0&&rt.setGlobalState(x.clippingPlanes,V),Y&&Lt.viewport(D.copy(Y)),F.length>0&&fs(F,N,V),ct.length>0&&fs(ct,N,V),mt.length>0&&fs(mt,N,V),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function fa(w,N,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new sn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Sn:En,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const ct=d.state.transmissionRenderTarget[Y.id],mt=Y.viewport||D;ct.setSize(mt.z,mt.w);const Et=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(J),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),Kt&&Dt.render(V);const At=x.toneMapping;x.toneMapping=Nn;const Ft=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),it===!0&&rt.setGlobalState(x.clippingPlanes,Y),fs(w,V,Y),P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Tt=0,Jt=N.length;Tt<Jt;Tt++){const fe=N[Tt],pe=fe.object,Fe=fe.geometry,ee=fe.material,Rt=fe.group;if(ee.side===qe&&pe.layers.test(Y.layers)){const fn=ee.side;ee.side=Ne,ee.needsUpdate=!0,da(pe,V,Y,Fe,ee,Rt),ee.side=fn,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(P.updateMultisampleRenderTarget(ct),P.updateRenderTargetMipmap(ct))}x.setRenderTarget(Et),x.setClearColor(J,et),Ft!==void 0&&(Y.viewport=Ft),x.toneMapping=At}function fs(w,N,V){const Y=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ct=w.length;F<ct;F++){const mt=w[F],Et=mt.object,At=mt.geometry,Ft=Y===null?mt.material:Y,Gt=mt.group;Et.layers.test(V.layers)&&da(Et,N,V,At,Ft,Gt)}}function da(w,N,V,Y,F,ct){w.onBeforeRender(x,N,V,Y,F,ct),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,N,V,Y,w,ct),F.transparent===!0&&F.side===qe&&F.forceSinglePass===!1?(F.side=Ne,F.needsUpdate=!0,x.renderBufferDirect(V,N,Y,F,w,ct),F.side=Un,F.needsUpdate=!0,x.renderBufferDirect(V,N,Y,F,w,ct),F.side=qe):x.renderBufferDirect(V,N,Y,F,w,ct),w.onAfterRender(x,N,V,Y,F,ct)}function ds(w,N,V){N.isScene!==!0&&(N=oe);const Y=Pt.get(w),F=d.state.lights,ct=d.state.shadowsArray,mt=F.state.version,Et=xt.getParameters(w,F.state,ct,N,V),At=xt.getProgramCacheKey(Et);let Ft=Y.programs;Y.environment=w.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(w.isMeshStandardMaterial?I:A).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",kt),Ft=new Map,Y.programs=Ft);let Gt=Ft.get(At);if(Gt!==void 0){if(Y.currentProgram===Gt&&Y.lightsStateVersion===mt)return ma(w,Et),Gt}else Et.uniforms=xt.getUniforms(w),w.onBeforeCompile(Et,x),Gt=xt.acquireProgram(Et,At),Ft.set(At,Gt),Y.uniforms=Et.uniforms;const Tt=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),ma(w,Et),Y.needsLights=Rl(w),Y.lightsStateVersion=mt,Y.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=Gt,Y.uniformsList=null,Gt}function pa(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=$s.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function ma(w,N){const V=Pt.get(w);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function bl(w,N,V,Y,F){N.isScene!==!0&&(N=oe),P.resetTextureUnits();const ct=N.fog,mt=Y.isMeshStandardMaterial?N.environment:null,Et=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Bi,At=(Y.isMeshStandardMaterial?I:A).get(Y.envMap||mt),Ft=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Tt=!!V.morphAttributes.position,Jt=!!V.morphAttributes.normal,fe=!!V.morphAttributes.color;let pe=Nn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(pe=x.toneMapping);const Fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ee=Fe!==void 0?Fe.length:0,Rt=Pt.get(Y),fn=d.state.lights;if(it===!0&&(_t===!0||w!==y)){const Ye=w===y&&Y.id===E;rt.setState(Y,w,Ye)}let ne=!1;Y.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==fn.state.version||Rt.outputColorSpace!==Et||F.isBatchedMesh&&Rt.batching===!1||!F.isBatchedMesh&&Rt.batching===!0||F.isBatchedMesh&&Rt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Rt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Rt.instancing===!1||!F.isInstancedMesh&&Rt.instancing===!0||F.isSkinnedMesh&&Rt.skinning===!1||!F.isSkinnedMesh&&Rt.skinning===!0||F.isInstancedMesh&&Rt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Rt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Rt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Rt.instancingMorph===!1&&F.morphTexture!==null||Rt.envMap!==At||Y.fog===!0&&Rt.fog!==ct||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==rt.numPlanes||Rt.numIntersection!==rt.numIntersection)||Rt.vertexAlphas!==Ft||Rt.vertexTangents!==Gt||Rt.morphTargets!==Tt||Rt.morphNormals!==Jt||Rt.morphColors!==fe||Rt.toneMapping!==pe||Rt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Rt.__version=Y.version);let $e=Rt.currentProgram;ne===!0&&($e=ds(Y,N,F));let ii=!1,ze=!1,Wi=!1;const me=$e.getUniforms(),rn=Rt.uniforms;if(Lt.useProgram($e.program)&&(ii=!0,ze=!0,Wi=!0),Y.id!==E&&(E=Y.id,ze=!0),ii||y!==w){Lt.buffers.depth.getReversed()?(st.copy(w.projectionMatrix),Ch(st),Lh(st),me.setValue(U,"projectionMatrix",st)):me.setValue(U,"projectionMatrix",w.projectionMatrix),me.setValue(U,"viewMatrix",w.matrixWorldInverse);const Tn=me.map.cameraPosition;Tn!==void 0&&Tn.setValue(U,It.setFromMatrixPosition(w.matrixWorld)),Yt.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&me.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,ze=!0,Wi=!0)}if(F.isSkinnedMesh){me.setOptional(U,F,"bindMatrix"),me.setOptional(U,F,"bindMatrixInverse");const Ye=F.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),me.setValue(U,"boneTexture",Ye.boneTexture,P))}F.isBatchedMesh&&(me.setOptional(U,F,"batchingTexture"),me.setValue(U,"batchingTexture",F._matricesTexture,P),me.setOptional(U,F,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",F._indirectTexture,P),me.setOptional(U,F,"batchingColorTexture"),F._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",F._colorsTexture,P));const Hi=V.morphAttributes;if((Hi.position!==void 0||Hi.normal!==void 0||Hi.color!==void 0)&&Nt.update(F,V,$e),(ze||Rt.receiveShadow!==F.receiveShadow)&&(Rt.receiveShadow=F.receiveShadow,me.setValue(U,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(rn.envMap.value=At,rn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(rn.envMapIntensity.value=N.environmentIntensity),ze&&(me.setValue(U,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&wl(rn,Wi),ct&&Y.fog===!0&&ht.refreshFogUniforms(rn,ct),ht.refreshMaterialUniforms(rn,Y,H,Q,d.state.transmissionRenderTarget[w.id]),$s.upload(U,pa(Rt),rn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($s.upload(U,pa(Rt),rn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&me.setValue(U,"center",F.center),me.setValue(U,"modelViewMatrix",F.modelViewMatrix),me.setValue(U,"normalMatrix",F.normalMatrix),me.setValue(U,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ye=Y.uniformsGroups;for(let Tn=0,bn=Ye.length;Tn<bn;Tn++){const ga=Ye[Tn];O.update(ga,$e),O.bind(ga,$e)}}return $e}function wl(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function Rl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,N,V){Pt.get(w.texture).__webglTexture=N,Pt.get(w.depthTexture).__webglTexture=V;const Y=Pt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const V=Pt.get(w);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,V=0){L=w,b=N,R=V;let Y=!0,F=null,ct=!1,mt=!1;if(w){const At=Pt.get(w);if(At.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(At.__hasExternalTextures)P.rebindTextures(w,Pt.get(w.texture).__webglTexture,Pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(At.__boundDepthTexture!==Tt){if(Tt!==null&&Pt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Ft=w.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(mt=!0);const Gt=Pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[N])?F=Gt[N][V]:F=Gt[N],ct=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?F=Pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[V]:F=Gt,D.copy(w.viewport),B.copy(w.scissor),k=w.scissorTest}else D.copy(yt).multiplyScalar(H).floor(),B.copy(Ot).multiplyScalar(H).floor(),k=Xt;if(Lt.bindFramebuffer(U.FRAMEBUFFER,F)&&Y&&Lt.drawBuffers(w,F),Lt.viewport(D),Lt.scissor(B),Lt.setScissorTest(k),ct){const At=Pt.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,At.__webglTexture,V)}else if(mt){const At=Pt.get(w.texture),Ft=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,At.__webglTexture,V||0,Ft)}E=-1},this.readRenderTargetPixels=function(w,N,V,Y,F,ct,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){Lt.bindFramebuffer(U.FRAMEBUFFER,Et);try{const At=w.texture,Ft=At.format,Gt=At.type;if(!Yt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-Y&&V>=0&&V<=w.height-F&&U.readPixels(N,V,Y,F,Ht.convert(Ft),Ht.convert(Gt),ct)}finally{const At=L!==null?Pt.get(L).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,N,V,Y,F,ct,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){const At=w.texture,Ft=At.format,Gt=At.type;if(!Yt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-Y&&V>=0&&V<=w.height-F){Lt.bindFramebuffer(U.FRAMEBUFFER,Et);const Tt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.bufferData(U.PIXEL_PACK_BUFFER,ct.byteLength,U.STREAM_READ),U.readPixels(N,V,Y,F,Ht.convert(Ft),Ht.convert(Gt),0);const Jt=L!==null?Pt.get(L).__webglFramebuffer:null;Lt.bindFramebuffer(U.FRAMEBUFFER,Jt);const fe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rh(U,fe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Tt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ct),U.deleteBuffer(Tt),U.deleteSync(fe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,V=0){w.isTexture!==!0&&(ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-V),F=Math.floor(w.image.width*Y),ct=Math.floor(w.image.height*Y),mt=N!==null?N.x:0,Et=N!==null?N.y:0;P.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,mt,Et,F,ct),Lt.unbindTexture()},this.copyTextureToTexture=function(w,N,V=null,Y=null,F=0){w.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,V=null);let ct,mt,Et,At,Ft,Gt,Tt,Jt,fe;const pe=w.isCompressedTexture?w.mipmaps[F]:w.image;V!==null?(ct=V.max.x-V.min.x,mt=V.max.y-V.min.y,Et=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,Ft=V.min.y,Gt=V.isBox3?V.min.z:0):(ct=pe.width,mt=pe.height,Et=pe.depth||1,At=0,Ft=0,Gt=0),Y!==null?(Tt=Y.x,Jt=Y.y,fe=Y.z):(Tt=0,Jt=0,fe=0);const Fe=Ht.convert(N.format),ee=Ht.convert(N.type);let Rt;N.isData3DTexture?(P.setTexture3D(N,0),Rt=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(P.setTexture2DArray(N,0),Rt=U.TEXTURE_2D_ARRAY):(P.setTexture2D(N,0),Rt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const fn=U.getParameter(U.UNPACK_ROW_LENGTH),ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$e=U.getParameter(U.UNPACK_SKIP_PIXELS),ii=U.getParameter(U.UNPACK_SKIP_ROWS),ze=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,At),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gt);const Wi=w.isDataArrayTexture||w.isData3DTexture,me=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const rn=Pt.get(w),Hi=Pt.get(N),Ye=Pt.get(rn.__renderTarget),Tn=Pt.get(Hi.__renderTarget);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let bn=0;bn<Et;bn++)Wi&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(w).__webglTexture,F,Gt+bn),w.isDepthTexture?(me&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(N).__webglTexture,F,fe+bn),U.blitFramebuffer(At,Ft,ct,mt,Tt,Jt,ct,mt,U.DEPTH_BUFFER_BIT,U.NEAREST)):me?U.copyTexSubImage3D(Rt,F,Tt,Jt,fe+bn,At,Ft,ct,mt):U.copyTexSubImage2D(Rt,F,Tt,Jt,fe+bn,At,Ft,ct,mt);Lt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else me?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Rt,F,Tt,Jt,fe,ct,mt,Et,Fe,ee,pe.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,F,Tt,Jt,fe,ct,mt,Et,Fe,pe.data):U.texSubImage3D(Rt,F,Tt,Jt,fe,ct,mt,Et,Fe,ee,pe):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,F,Tt,Jt,ct,mt,Fe,ee,pe.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,F,Tt,Jt,pe.width,pe.height,Fe,pe.data):U.texSubImage2D(U.TEXTURE_2D,F,Tt,Jt,ct,mt,Fe,ee,pe);U.pixelStorei(U.UNPACK_ROW_LENGTH,fn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$e),U.pixelStorei(U.UNPACK_SKIP_ROWS,ii),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ze),F===0&&N.generateMipmaps&&U.generateMipmap(Rt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,V=null,Y=null,F=0){return w.isTexture!==!0&&(ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,V,Y,F)},this.initRenderTarget=function(w){Pt.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Lt.unbindTexture()},this.resetState=function(){b=0,R=0,L=null,Lt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ot(t),this.density=e}clone(){return new Qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class km extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Gm extends De{constructor(t=null,e=1,n=1,s,r,o,a,l,f=Ue,u=Ue,h,p){super(null,o,a,l,f,u,s,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gc extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vi=new ie,_c=new ie,Ns=[],vc=new ti,Wm=new ie,qi=new W,Zi=new ei;class er extends W{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),vc.copy(t.boundingBox).applyMatrix4(vi),this.boundingBox.union(vc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vi),Zi.copy(t.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Zi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zi.copy(this.boundingSphere),Zi.applyMatrix4(n),t.ray.intersectsSphere(Zi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vi),_c.multiplyMatrices(n,vi),qi.matrixWorld=_c,qi.raycast(t,Ns);for(let o=0,a=Ns.length;o<a;o++){const l=Ns[o];l.instanceId=r,l.object=this,e.push(l)}Ns.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gm(new Float32Array(s*this.count),s,this.count,Vo,ln));const r=this.morphTexture.source.data.data;let o=0;for(let f=0;f<n.length;f++)o+=n[f];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class vl extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nr=new C,ir=new C,xc=new ie,ji=new us,Us=new ei,Br=new C,Mc=new C;class Hm extends _e{constructor(t=new ye,e=new vl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)nr.fromBufferAttribute(e,s-1),ir.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=nr.distanceTo(ir);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;xc.copy(s).invert(),ji.copy(t.ray).applyMatrix4(xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,f=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const c=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=c,g=m-1;_<g;_+=f){const d=u.getX(_),v=u.getX(_+1),M=Fs(this,t,ji,l,d,v);M&&e.push(M)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(c),d=Fs(this,t,ji,l,_,g);d&&e.push(d)}}else{const c=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let _=c,g=m-1;_<g;_+=f){const d=Fs(this,t,ji,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Fs(this,t,ji,l,m-1,c);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fs(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(nr.fromBufferAttribute(o,s),ir.fromBufferAttribute(o,r),e.distanceSqToSegment(nr,ir,Br,Mc)>n)return;Br.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Br);if(!(l<t.near||l>t.far))return{distance:l,point:Mc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Sc=new C,yc=new C;class Vm extends Hm{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Sc.fromBufferAttribute(e,s),yc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sc.distanceTo(yc);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xl extends ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ec=new ie,No=new us,Bs=new ei,zs=new C;class Ym extends _e{constructor(t=new ye,e=new xl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(s),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;Ec.copy(s).invert(),No.copy(t.ray).applyMatrix4(Ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,f=n.index,h=n.attributes.position;if(f!==null){const p=Math.max(0,o.start),c=Math.min(f.count,o.start+o.count);for(let m=p,_=c;m<_;m++){const g=f.getX(m);zs.fromBufferAttribute(h,g),Ac(zs,g,l,s,t,e,this)}}else{const p=Math.max(0,o.start),c=Math.min(h.count,o.start+o.count);for(let m=p,_=c;m<_;m++)zs.fromBufferAttribute(h,m),Ac(zs,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ac(i,t,e,n,s,r,o){const a=No.distanceSqToPoint(i);if(a<e){const l=new C;No.closestPointToPoint(i,l),l.applyMatrix4(n);const f=s.ray.origin.distanceTo(l);if(f<s.near||f>s.far)return;r.push({distance:f,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Xm extends De{constructor(t,e,n,s,r,o,a,l,f){super(t,e,n,s,r,o,a,l,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class An{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,f;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),f=n[s]-o,f<0)a=s+1;else if(f>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],p=n[s+1]-u,c=(o-u)/p;return(s+c)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new lt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,s=[],r=[],o=[],a=new C,l=new ie;for(let c=0;c<=t;c++){const m=c/t;s[c]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let f=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=f&&(f=u,n.set(1,0,0)),h<=f&&(f=h,n.set(0,1,0)),p<=f&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let c=1;c<=t;c++){if(r[c]=r[c-1].clone(),o[c]=o[c-1].clone(),a.crossVectors(s[c-1],s[c]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(we(s[c-1].dot(s[c]),-1,1));r[c].applyMatrix4(l.makeRotationAxis(a,m))}o[c].crossVectors(s[c],r[c])}if(e===!0){let c=Math.acos(we(r[0].dot(r[t]),-1,1));c/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(c=-c);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],c*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ml extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),f=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,c=f-this.aY;l=p*u-c*h+this.aX,f=p*h+c*u+this.aY}return n.set(l,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Km extends Ml{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ta(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,f){s(o,a,f*(a-r),f*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,f,u,h){let p=(o-r)/f-(a-r)/(f+u)+(a-o)/u,c=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,c*=u,s(o,a,p,c)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ks=new C,zr=new ta,kr=new ta,Gr=new ta;class sr extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let f,u;this.closed||a>0?f=s[(a-1)%r]:(ks.subVectors(s[0],s[1]).add(s[0]),f=ks);const h=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ks.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ks),this.curveType==="centripetal"||this.curveType==="chordal"){const c=this.curveType==="chordal"?.5:.25;let m=Math.pow(f.distanceToSquared(h),c),_=Math.pow(h.distanceToSquared(p),c),g=Math.pow(p.distanceToSquared(u),c);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),zr.initNonuniformCatmullRom(f.x,h.x,p.x,u.x,m,_,g),kr.initNonuniformCatmullRom(f.y,h.y,p.y,u.y,m,_,g),Gr.initNonuniformCatmullRom(f.z,h.z,p.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(zr.initCatmullRom(f.x,h.x,p.x,u.x,this.tension),kr.initCatmullRom(f.y,h.y,p.y,u.y,this.tension),Gr.initCatmullRom(f.z,h.z,p.z,u.z,this.tension));return n.set(zr.calc(l),kr.calc(l),Gr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Tc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function qm(i,t){const e=1-i;return e*e*t}function Zm(i,t){return 2*(1-i)*i*t}function jm(i,t){return i*i*t}function is(i,t,e,n){return qm(i,t)+Zm(i,e)+jm(i,n)}function $m(i,t){const e=1-i;return e*e*e*t}function Jm(i,t){const e=1-i;return 3*e*e*i*t}function Qm(i,t){return 3*(1-i)*i*i*t}function tg(i,t){return i*i*i*t}function ss(i,t,e,n,s){return $m(i,t)+Jm(i,e)+Qm(i,n)+tg(i,s)}class eg extends An{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ss(t,s.x,r.x,o.x,a.x),ss(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ng extends An{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ss(t,s.x,r.x,o.x,a.x),ss(t,s.y,r.y,o.y,a.y),ss(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ig extends An{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sg extends An{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rg extends An{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(is(t,s.x,r.x,o.x),is(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sl extends An{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(is(t,s.x,r.x,o.x),is(t,s.y,r.y,o.y),is(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class og extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],f=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Tc(a,l.x,f.x,u.x,h.x),Tc(a,l.y,f.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var ag=Object.freeze({__proto__:null,ArcCurve:Km,CatmullRomCurve3:sr,CubicBezierCurve:eg,CubicBezierCurve3:ng,EllipseCurve:Ml,LineCurve:ig,LineCurve3:sg,QuadraticBezierCurve:rg,QuadraticBezierCurve3:Sl,SplineCurve:og});class ea extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const f=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],p=[],c=[];let m=0;const _=[],g=n/2;let d=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(c,2));function v(){const x=new C,T=new C;let b=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const E=[],y=L/r,D=y*(e-t)+t;for(let B=0;B<=s;B++){const k=B/s,J=k*l+a,et=Math.sin(J),K=Math.cos(J);T.x=D*et,T.y=-y*n+g,T.z=D*K,h.push(T.x,T.y,T.z),x.set(et,R,K).normalize(),p.push(x.x,x.y,x.z),c.push(k,1-y),E.push(m++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const y=_[E][L],D=_[E+1][L],B=_[E+1][L+1],k=_[E][L+1];(t>0||E!==0)&&(u.push(y,D,k),b+=3),(e>0||E!==r-1)&&(u.push(D,B,k),b+=3)}f.addGroup(d,b,0),d+=b}function M(x){const T=m,b=new lt,R=new C;let L=0;const E=x===!0?t:e,y=x===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,g*y,0),p.push(0,y,0),c.push(.5,.5),m++;const D=m;for(let B=0;B<=s;B++){const J=B/s*l+a,et=Math.cos(J),K=Math.sin(J);R.x=E*K,R.y=g*y,R.z=E*et,h.push(R.x,R.y,R.z),p.push(0,y,0),b.x=et*.5+.5,b.y=K*.5*y+.5,c.push(b.x,b.y),m++}for(let B=0;B<s;B++){const k=T+B,J=D+B;x===!0?u.push(J,J+1,k):u.push(J+1,J,k),L+=3}f.addGroup(d,L,x===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends ea{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new na(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ia extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),f(n),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new C,x=new C,T=new C;for(let b=0;b<e.length;b+=3)c(e[b+0],M),c(e[b+1],x),c(e[b+2],T),l(M,x,T,v)}function l(v,M,x,T){const b=T+1,R=[];for(let L=0;L<=b;L++){R[L]=[];const E=v.clone().lerp(x,L/b),y=M.clone().lerp(x,L/b),D=b-L;for(let B=0;B<=D;B++)B===0&&L===b?R[L][B]=E:R[L][B]=E.clone().lerp(y,B/D)}for(let L=0;L<b;L++)for(let E=0;E<2*(b-L)-1;E++){const y=Math.floor(E/2);E%2===0?(p(R[L][y+1]),p(R[L+1][y]),p(R[L][y])):(p(R[L][y+1]),p(R[L+1][y+1]),p(R[L+1][y]))}}function f(v){const M=new C;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(v),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function u(){const v=new C;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const x=g(v)/2/Math.PI+.5,T=d(v)/Math.PI+.5;o.push(x,1-T)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){const M=o[v+0],x=o[v+2],T=o[v+4],b=Math.max(M,x,T),R=Math.min(M,x,T);b>.9&&R<.1&&(M<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function p(v){r.push(v.x,v.y,v.z)}function c(v,M){const x=v*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function m(){const v=new C,M=new C,x=new C,T=new C,b=new lt,R=new lt,L=new lt;for(let E=0,y=0;E<r.length;E+=9,y+=6){v.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),b.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),T.copy(v).add(M).add(x).divideScalar(3);const D=g(T);_(b,y+0,v,D),_(R,y+2,M,D),_(L,y+4,x,D)}}function _(v,M,x,T){T<0&&v.x===1&&(o[M]=v.x-1),x.x===0&&x.z===0&&(o[M]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.vertices,t.indices,t.radius,t.details)}}const Gs=new C,Ws=new C,Wr=new C,Hs=new Ze;class cg extends ye{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(bi*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,f=[0,0,0],u=["a","b","c"],h=new Array(3),p={},c=[];for(let m=0;m<l;m+=3){o?(f[0]=o.getX(m),f[1]=o.getX(m+1),f[2]=o.getX(m+2)):(f[0]=m,f[1]=m+1,f[2]=m+2);const{a:_,b:g,c:d}=Hs;if(_.fromBufferAttribute(a,f[0]),g.fromBufferAttribute(a,f[1]),d.fromBufferAttribute(a,f[2]),Hs.getNormal(Wr),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const M=(v+1)%3,x=h[v],T=h[M],b=Hs[u[v]],R=Hs[u[M]],L=`${x}_${T}`,E=`${T}_${x}`;E in p&&p[E]?(Wr.dot(p[E].normal)<=r&&(c.push(b.x,b.y,b.z),c.push(R.x,R.y,R.z)),p[E]=null):L in p||(p[L]={index0:f[v],index1:f[M],normal:Wr.clone()})}}for(const m in p)if(p[m]){const{index0:_,index1:g}=p[m];Gs.fromBufferAttribute(a,_),Ws.fromBufferAttribute(a,g),c.push(Gs.x,Gs.y,Gs.z),c.push(Ws.x,Ws.y,Ws.z)}this.setAttribute("position",new $t(c,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ni extends ia{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ni(t.radius,t.detail)}}class rr extends ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],f=[],u=[];let h=t;const p=(e-t)/s,c=new C,m=new lt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const d=r+g/n*o;c.x=h*Math.cos(d),c.y=h*Math.sin(d),l.push(c.x,c.y,c.z),f.push(0,0,1),m.x=(c.x/e+1)/2,m.y=(c.y/e+1)/2,u.push(m.x,m.y)}h+=p}for(let _=0;_<s;_++){const g=_*(n+1);for(let d=0;d<n;d++){const v=d+g,M=v,x=v+n+1,T=v+n+2,b=v+1;a.push(M,x,b),a.push(x,T,b)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class sa extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let f=0;const u=[],h=new C,p=new C,c=[],m=[],_=[],g=[];for(let d=0;d<=n;d++){const v=[],M=d/n;let x=0;d===0&&o===0?x=.5/e:d===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){const b=T/e;h.x=-t*Math.cos(s+b*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+b*r)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),g.push(b+x,1-M),v.push(f++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const M=u[d][v+1],x=u[d][v],T=u[d+1][v],b=u[d+1][v+1];(d!==0||o>0)&&c.push(M,x,b),(d!==n-1||l<Math.PI)&&c.push(x,T,b)}this.setIndex(c),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ls extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],f=[],u=new C,h=new C,p=new C;for(let c=0;c<=n;c++)for(let m=0;m<=s;m++){const _=m/s*r,g=c/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(_),h.y=(t+e*Math.cos(g))*Math.sin(_),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),f.push(m/s),f.push(c/n)}for(let c=1;c<=n;c++)for(let m=1;m<=s;m++){const _=(s+1)*c+m-1,g=(s+1)*(c-1)+m-1,d=(s+1)*(c-1)+m,v=(s+1)*c+m;o.push(_,g,v),o.push(g,d,v)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ra extends ye{constructor(t=new Sl(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,f=new lt;let u=new C;const h=[],p=[],c=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(c,2));function _(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),v(),d()}function g(M){u=t.getPointAt(M/e,u);const x=o.normals[M],T=o.binormals[M];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,L=Math.sin(R),E=-Math.cos(R);l.x=E*x.x+L*T.x,l.y=E*x.y+L*T.y,l.z=E*x.z+L*T.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const T=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),R=(s+1)*M+x,L=(s+1)*(M-1)+x;m.push(T,b,L),m.push(b,R,L)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)f.x=M/e,f.y=x/s,c.push(f.x,f.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ra(new ag[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class lg extends Re{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class wt extends ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class oa extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class hg extends oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Hr=new ie,bc=new C,wc=new C;class yl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),Hr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rc=new ie,$i=new C,Vr=new C;class ug extends yl{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$i.setFromMatrixPosition(t.matrixWorld),n.position.copy($i),Vr.copy(n.position),Vr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Vr),n.updateMatrixWorld(),s.makeTranslation(-$i.x,-$i.y,-$i.z),Rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc)}}class fg extends oa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dg extends yl{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pg extends oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class El{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Cc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Cc(){return performance.now()}const Lc=new ie;class mg{constructor(t,e,n=0,s=1/0){this.ray=new us(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(t,e=!0,n=[]){return Uo(t,this,n,e),n.sort(Pc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Uo(t[s],this,n,e);return n.sort(Pc),n}}function Pc(i,t){return i.distance-t.distance}function Uo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Uo(r[o],t,e,!0)}}class Dc{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(we(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gg extends Qn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zo);const Ic={type:"change"},aa={type:"start"},Al={type:"end"},Vs=new us,Oc=new In,_g=Math.cos(70*be.DEG2RAD),xe=new C,Be=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yr=1e-6;class vg extends gg{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:Si.ROTATE,TWO:Si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new $n,this._lastTargetPosition=new C,this._quat=new $n().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dc,this._sphericalDelta=new Dc,this._scale=1,this._panOffset=new C,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new C,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Mg.bind(this),this._onPointerDown=xg.bind(this),this._onPointerUp=Sg.bind(this),this._onContextMenu=Rg.bind(this),this._onMouseWheel=Ag.bind(this),this._onKeyDown=Tg.bind(this),this._onTouchStart=bg.bind(this),this._onTouchMove=wg.bind(this),this._onMouseDown=yg.bind(this),this._onMouseMove=Eg.bind(this),this._interceptControlDown=Cg.bind(this),this._interceptControlUp=Lg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ic),this.update(),this.state=ce.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Be:n>Math.PI&&(n-=Be),s<-Math.PI?s+=Be:s>Math.PI&&(s-=Be),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const f=new C(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vs.origin.copy(this.object.position),Vs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vs.direction))<_g?this.object.lookAt(this.target):(Oc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vs.intersectPlane(Oc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Yr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yr||this._lastTargetPosition.distanceToSquared(this.target)>Yr?(this.dispatchEvent(Ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Be/60*this.autoRotateSpeed*t:Be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Be*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Be*this._rotateDelta.x/e.clientHeight),this._rotateUp(Be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Mg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Sg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Al),this.state=ce.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function yg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case Ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case Ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(aa)}function Eg(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Ag(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(aa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Al))}function Tg(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function bg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(aa)}function wg(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function Rg(i){this.enabled!==!1&&i.preventDefault()}function Cg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Lg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Tl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Pg=new $o(-1,1,1,-1,0,1);class Dg extends ye{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const Ig=new Dg;class ca{constructor(t){this._mesh=new W(Ig,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Pg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Og extends Gi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Re?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cs.clone(t.uniforms),this.material=new Re({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ca(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nc extends Gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ng extends Gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ug{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Og(Tl),this.copyPass.material.blending=Mn,this.clock=new El}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(o instanceof Nc?n=!0:o instanceof Ng&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Fg extends Gi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Bg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ui extends Gi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const p=new sn(r,o,{type:Sn});p.texture.name="UnrealBloomPass.h"+h,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const c=new sn(r,o,{type:Sn});c.texture.name="UnrealBloomPass.v"+h,c.texture.generateMipmaps=!1,this.renderTargetsVertical.push(c),r=Math.round(r/2),o=Math.round(o/2)}const a=Bg;this.highPassUniforms=cs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Re({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Tl;this.copyUniforms=cs.clone(u.uniforms),this.blendMaterial=new Re({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:rs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new Qt,this.fsQuad=new ca(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ui.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ui.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Re({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Re({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ui.BlurDirectionX=new lt(1,0);Ui.BlurDirectionY=new lt(0,1);const zg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class kg extends Gi{constructor(){super();const t=zg;this.uniforms=cs.clone(t.uniforms),this.material=new lg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ca(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ko?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Vc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}var S=(i=>(i[i.AIR=0]="AIR",i[i.GRASS_DREAM=1]="GRASS_DREAM",i[i.GRASS_SAKURA=2]="GRASS_SAKURA",i[i.DIRT_WARM=3]="DIRT_WARM",i[i.CLIFF_STONE=4]="CLIFF_STONE",i[i.DEEP_ROCK=5]="DEEP_ROCK",i[i.SNOW_PURE=6]="SNOW_PURE",i[i.SAND_PEARL=7]="SAND_PEARL",i[i.COBBLE_PATH=8]="COBBLE_PATH",i[i.PLAZA_MARBLE=9]="PLAZA_MARBLE",i[i.CASTLE_WALL=10]="CASTLE_WALL",i[i.CASTLE_BASE=11]="CASTLE_BASE",i[i.CASTLE_PILLAR=12]="CASTLE_PILLAR",i[i.ROOF_ROYAL_BLUE=13]="ROOF_ROYAL_BLUE",i[i.ROOF_SAKURA_PINK=14]="ROOF_SAKURA_PINK",i[i.ROOF_LAVENDER=15]="ROOF_LAVENDER",i[i.GOLD_CROWN=16]="GOLD_CROWN",i[i.COTTAGE_PLASTER=17]="COTTAGE_PLASTER",i[i.TIMBER_OAK=18]="TIMBER_OAK",i[i.PLANKS_WARM=19]="PLANKS_WARM",i[i.ROOF_CORAL=20]="ROOF_CORAL",i[i.ROOF_MINT=21]="ROOF_MINT",i[i.ROOF_HONEY=22]="ROOF_HONEY",i[i.BRICK_CHIMNEY=23]="BRICK_CHIMNEY",i[i.WHITE_SAIL=24]="WHITE_SAIL",i[i.TRUNK_DARK=25]="TRUNK_DARK",i[i.TRUNK_SPIRIT=26]="TRUNK_SPIRIT",i[i.LEAVES_SAKURA=27]="LEAVES_SAKURA",i[i.LEAVES_SAKURA_LIGHT=28]="LEAVES_SAKURA_LIGHT",i[i.LEAVES_EMERALD=29]="LEAVES_EMERALD",i[i.LEAVES_GOLDEN=30]="LEAVES_GOLDEN",i[i.MUSHROOM_RED=31]="MUSHROOM_RED",i[i.WARM_WINDOW=32]="WARM_WINDOW",i[i.ROSE_STAINED_GLASS=33]="ROSE_STAINED_GLASS",i[i.LANTERN_GLOW=34]="LANTERN_GLOW",i[i.CRYSTAL_CYAN=35]="CRYSTAL_CYAN",i[i.CRYSTAL_AMETHYST=36]="CRYSTAL_AMETHYST",i[i.GLOW_SHROOM_BLUE=37]="GLOW_SHROOM_BLUE",i[i.STAR_CORE=38]="STAR_CORE",i[i.WATER=39]="WATER",i[i.WATERFALL_FOAM=40]="WATERFALL_FOAM",i[i.RAINBOW_RED=41]="RAINBOW_RED",i[i.RAINBOW_ORANGE=42]="RAINBOW_ORANGE",i[i.RAINBOW_YELLOW=43]="RAINBOW_YELLOW",i[i.RAINBOW_GREEN=44]="RAINBOW_GREEN",i[i.RAINBOW_CYAN=45]="RAINBOW_CYAN",i[i.RAINBOW_BLUE=46]="RAINBOW_BLUE",i[i.RAINBOW_VIOLET=47]="RAINBOW_VIOLET",i[i.FROST_BRICK=48]="FROST_BRICK",i[i.DARK_ABYSS_ICE=49]="DARK_ABYSS_ICE",i[i.FROST_PILLAR=50]="FROST_PILLAR",i[i.FROST_RUNE_GLOW=51]="FROST_RUNE_GLOW",i[i.GLACIER_ICE=52]="GLACIER_ICE",i))(S||{});const bt={GRASS_TOP:0,GRASS_SIDE:1,DIRT:2,SAKURA_GRASS_TOP:3,SAKURA_GRASS_SIDE:4,CLIFF_STONE:5,DEEP_ROCK:6,SNOW:7,SAND:8,COBBLE:9,PLAZA_MARBLE:10,CASTLE_WALL:11,CASTLE_BASE:12,CASTLE_PILLAR_SIDE:13,CASTLE_PILLAR_TOP:14,ROOF_BLUE:15,ROOF_PINK:16,ROOF_LAVENDER:17,GOLD:18,PLASTER:19,TIMBER_SIDE:20,TIMBER_TOP:21,PLANKS:22,ROOF_CORAL:23,ROOF_MINT:24,ROOF_HONEY:25,BRICK:26,WHITE_CLOTH:27,TRUNK_DARK_SIDE:28,TRUNK_SPIRIT_SIDE:29,LEAVES_SAKURA:30,LEAVES_SAKURA_LIGHT:31,LEAVES_EMERALD:32,LEAVES_GOLDEN:33,MUSHROOM_RED:34,WARM_WINDOW:35,ROSE_GLASS:36,LANTERN:37,CRYSTAL_CYAN:38,CRYSTAL_AMETHYST:39,GLOW_SHROOM_BLUE:40,STAR_CORE:41,WATER:42,WATERFALL:43,RAINBOW_R:44,RAINBOW_O:45,RAINBOW_Y:46,RAINBOW_G:47,RAINBOW_C:48,RAINBOW_B:49,RAINBOW_V:50,FROST_BRICK:51,DARK_ABYSS_ICE:52,FROST_PILLAR_SIDE:53,FROST_PILLAR_TOP:54,FROST_RUNE_GLOW:55,GLACIER_ICE:56},G=bt,Js={1:{id:1,name:"翠茵花草块",layer:"opaque",tiles:[G.GRASS_TOP,G.GRASS_SIDE,G.DIRT],occludes:!0,swatch:"#72d687"},2:{id:2,name:"落樱草地块",layer:"opaque",tiles:[G.SAKURA_GRASS_TOP,G.SAKURA_GRASS_SIDE,G.DIRT],occludes:!0,swatch:"#f4a6c8"},3:{id:3,name:"暖棕泥土",layer:"opaque",tiles:[G.DIRT,G.DIRT,G.DIRT],occludes:!0,swatch:"#8f6347"},4:{id:4,name:"浮岛云岩",layer:"opaque",tiles:[G.CLIFF_STONE,G.CLIFF_STONE,G.CLIFF_STONE],occludes:!0,swatch:"#787390"},5:{id:5,name:"星渊玄武岩",layer:"opaque",tiles:[G.DEEP_ROCK,G.DEEP_ROCK,G.DEEP_ROCK],occludes:!0,swatch:"#524b6b"},6:{id:6,name:"云巅白雪",layer:"opaque",tiles:[G.SNOW,G.SNOW,G.SNOW],occludes:!0,swatch:"#f2f7ff"},7:{id:7,name:"珍珠河沙",layer:"opaque",tiles:[G.SAND,G.SAND,G.SAND],occludes:!0,swatch:"#f5e6c8"},8:{id:8,name:"鹅卵石步道",layer:"opaque",tiles:[G.COBBLE,G.COBBLE,G.COBBLE],occludes:!0,swatch:"#b8b2c4"},9:{id:9,name:"星纹大理石",layer:"opaque",tiles:[G.PLAZA_MARBLE,G.CASTLE_WALL,G.CASTLE_WALL],occludes:!0,swatch:"#efeaf6"},10:{id:10,name:"皇家白玉砖",layer:"opaque",tiles:[G.CASTLE_WALL,G.CASTLE_WALL,G.CASTLE_WALL],occludes:!0,swatch:"#f7f2ea"},11:{id:11,name:"月影城垣砖",layer:"opaque",tiles:[G.CASTLE_BASE,G.CASTLE_BASE,G.CASTLE_BASE],occludes:!0,swatch:"#d0cae0"},12:{id:12,name:"雕花罗马柱",layer:"opaque",tiles:[G.CASTLE_PILLAR_TOP,G.CASTLE_PILLAR_SIDE,G.CASTLE_PILLAR_TOP],occludes:!0,swatch:"#fcf9f2"},13:{id:13,name:"琉璃蓝塔瓦",layer:"opaque",tiles:[G.ROOF_BLUE,G.ROOF_BLUE,G.ROOF_BLUE],occludes:!0,swatch:"#4f8ae8"},14:{id:14,name:"樱霞粉塔瓦",layer:"opaque",tiles:[G.ROOF_PINK,G.ROOF_PINK,G.ROOF_PINK],occludes:!0,swatch:"#ee7fb8"},15:{id:15,name:"星云紫塔瓦",layer:"opaque",tiles:[G.ROOF_LAVENDER,G.ROOF_LAVENDER,G.ROOF_LAVENDER],occludes:!0,swatch:"#9b7ede"},16:{id:16,name:"璀璨皇冠金",layer:"opaque",tiles:[G.GOLD,G.GOLD,G.GOLD],occludes:!0,swatch:"#ffd166"},17:{id:17,name:"奶油灰泥墙",layer:"opaque",tiles:[G.PLASTER,G.PLASTER,G.PLASTER],occludes:!0,swatch:"#faf3e3"},18:{id:18,name:"橡木梁柱",layer:"opaque",tiles:[G.TIMBER_TOP,G.TIMBER_SIDE,G.TIMBER_TOP],occludes:!0,swatch:"#784f35"},19:{id:19,name:"暖松木板",layer:"opaque",tiles:[G.PLANKS,G.PLANKS,G.PLANKS],occludes:!0,swatch:"#ba8759"},20:{id:20,name:"珊瑚红屋瓦",layer:"opaque",tiles:[G.ROOF_CORAL,G.ROOF_CORAL,G.ROOF_CORAL],occludes:!0,swatch:"#f07c7a"},21:{id:21,name:"薄荷青屋瓦",layer:"opaque",tiles:[G.ROOF_MINT,G.ROOF_MINT,G.ROOF_MINT],occludes:!0,swatch:"#58c4b8"},22:{id:22,name:"蜜桃金屋瓦",layer:"opaque",tiles:[G.ROOF_HONEY,G.ROOF_HONEY,G.ROOF_HONEY],occludes:!0,swatch:"#f4b95a"},23:{id:23,name:"暖陶红砖",layer:"opaque",tiles:[G.BRICK,G.BRICK,G.BRICK],occludes:!0,swatch:"#c4685b"},24:{id:24,name:"云绒白布",layer:"opaque",tiles:[G.WHITE_CLOTH,G.WHITE_CLOTH,G.WHITE_CLOTH],occludes:!0,swatch:"#ffffff"},25:{id:25,name:"胡桃木树干",layer:"opaque",tiles:[G.TIMBER_TOP,G.TRUNK_DARK_SIDE,G.TIMBER_TOP],occludes:!0,swatch:"#63422d"},26:{id:26,name:"神木樱树干",layer:"opaque",tiles:[G.TIMBER_TOP,G.TRUNK_SPIRIT_SIDE,G.TIMBER_TOP],occludes:!0,swatch:"#8c6b70"},27:{id:27,name:"绯樱花叶",layer:"opaque",tiles:[G.LEAVES_SAKURA,G.LEAVES_SAKURA,G.LEAVES_SAKURA],occludes:!0,swatch:"#ff94b8"},28:{id:28,name:"雪樱花簇",layer:"opaque",tiles:[G.LEAVES_SAKURA_LIGHT,G.LEAVES_SAKURA_LIGHT,G.LEAVES_SAKURA_LIGHT],occludes:!0,swatch:"#ffd1e4"},29:{id:29,name:"翠森树叶",layer:"opaque",tiles:[G.LEAVES_EMERALD,G.LEAVES_EMERALD,G.LEAVES_EMERALD],occludes:!0,swatch:"#55b873"},30:{id:30,name:"金秋银杏叶",layer:"opaque",tiles:[G.LEAVES_GOLDEN,G.LEAVES_GOLDEN,G.LEAVES_GOLDEN],occludes:!0,swatch:"#f7c954"},31:{id:31,name:"波点红蘑菇",layer:"opaque",tiles:[G.MUSHROOM_RED,G.MUSHROOM_RED,G.PLASTER],occludes:!0,swatch:"#ef5b6c"},32:{id:32,name:"暖光格栅窗",layer:"night_window",tiles:[G.WARM_WINDOW,G.WARM_WINDOW,G.WARM_WINDOW],occludes:!0,swatch:"#ffbe5c"},33:{id:33,name:"玫瑰彩绘窗",layer:"night_window",tiles:[G.ROSE_GLASS,G.ROSE_GLASS,G.ROSE_GLASS],occludes:!0,swatch:"#ff7ac6"},34:{id:34,name:"星辉暖灯笼",layer:"emissive",tiles:[G.LANTERN,G.LANTERN,G.LANTERN],occludes:!0,swatch:"#ffe382"},35:{id:35,name:"浮空蓝水晶",layer:"emissive",tiles:[G.CRYSTAL_CYAN,G.CRYSTAL_CYAN,G.CRYSTAL_CYAN],occludes:!0,swatch:"#5ce6f0"},36:{id:36,name:"幻梦紫水晶",layer:"emissive",tiles:[G.CRYSTAL_AMETHYST,G.CRYSTAL_AMETHYST,G.CRYSTAL_AMETHYST],occludes:!0,swatch:"#c87eff"},37:{id:37,name:"荧光仙灵菌",layer:"emissive",tiles:[G.GLOW_SHROOM_BLUE,G.GLOW_SHROOM_BLUE,G.GLOW_SHROOM_BLUE],occludes:!0,swatch:"#6ae2ff"},38:{id:38,name:"星冠辉光核",layer:"emissive",tiles:[G.STAR_CORE,G.STAR_CORE,G.STAR_CORE],occludes:!0,swatch:"#fff3a8"},39:{id:39,name:"镜湖碧水",layer:"transparent",tiles:[G.WATER,G.WATER,G.WATER],occludes:!1,swatch:"#4cc3f7"},40:{id:40,name:"飞瀑白沫",layer:"transparent",tiles:[G.WATERFALL,G.WATERFALL,G.WATERFALL],occludes:!1,swatch:"#aee8ff"},41:{id:41,name:"虹桥绯光块",layer:"transparent",tiles:[G.RAINBOW_R,G.RAINBOW_R,G.RAINBOW_R],occludes:!1,swatch:"#ff7597"},42:{id:42,name:"虹桥琥珀块",layer:"transparent",tiles:[G.RAINBOW_O,G.RAINBOW_O,G.RAINBOW_O],occludes:!1,swatch:"#ffaa6b"},43:{id:43,name:"虹桥星金块",layer:"transparent",tiles:[G.RAINBOW_Y,G.RAINBOW_Y,G.RAINBOW_Y],occludes:!1,swatch:"#ffe373"},44:{id:44,name:"虹桥翡翠块",layer:"transparent",tiles:[G.RAINBOW_G,G.RAINBOW_G,G.RAINBOW_G],occludes:!1,swatch:"#72eb98"},45:{id:45,name:"虹桥天青块",layer:"transparent",tiles:[G.RAINBOW_C,G.RAINBOW_C,G.RAINBOW_C],occludes:!1,swatch:"#6ce8f5"},46:{id:46,name:"虹桥星蓝块",layer:"transparent",tiles:[G.RAINBOW_B,G.RAINBOW_B,G.RAINBOW_B],occludes:!1,swatch:"#79a6ff"},47:{id:47,name:"虹桥幻紫块",layer:"transparent",tiles:[G.RAINBOW_V,G.RAINBOW_V,G.RAINBOW_V],occludes:!1,swatch:"#c48aff"},48:{id:48,name:"凛冬寒冰砖",layer:"opaque",tiles:[G.FROST_BRICK,G.FROST_BRICK,G.FROST_BRICK],occludes:!0,swatch:"#cbeeff"},49:{id:49,name:"寒渊星曜石",layer:"opaque",tiles:[G.DARK_ABYSS_ICE,G.DARK_ABYSS_ICE,G.DARK_ABYSS_ICE],occludes:!0,swatch:"#2c4278"},50:{id:50,name:"极地冰棱柱",layer:"opaque",tiles:[G.FROST_PILLAR_TOP,G.FROST_PILLAR_SIDE,G.FROST_PILLAR_TOP],occludes:!0,swatch:"#e3f7ff"},51:{id:51,name:"极寒星髓核",layer:"emissive",tiles:[G.FROST_RUNE_GLOW,G.FROST_RUNE_GLOW,G.FROST_RUNE_GLOW],occludes:!0,swatch:"#7af5ff"},52:{id:52,name:"极光琉璃冰",layer:"transparent",tiles:[G.GLACIER_ICE,G.GLACIER_ICE,G.GLACIER_ICE],occludes:!1,swatch:"#73d7ff"}},Ys=[10,14,13,16,27,34,36],hs=8,Gg=8,he=16,Te=4,Fi=he+Te*2,Fo=hs*Fi,Bo=Gg*Fi;function Wg(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function Hg(i){const t=parseInt(i.replace("#",""),16);return[t>>16&255,t>>8&255,t&255]}function en(i,t){const[e,n,s]=Hg(i),r=o=>Math.max(0,Math.min(255,Math.round(o)));return`rgb(${r(e*t)}, ${r(n*t)}, ${r(s*t)})`}function Vg(i){const t=i%hs,e=Math.floor(i/hs),n=t*Fi+Te,s=n+he,r=e*Fi+Te,o=r+he,a=n/Fo,l=s/Fo,f=1-r/Bo,u=1-o/Bo;return[a,u,l,f]}function Yg(){const i=document.createElement("canvas");i.width=Fo,i.height=Bo;const t=i.getContext("2d");t.imageSmoothingEnabled=!1;const e=document.createElement("canvas");e.width=he,e.height=he;const n=e.getContext("2d");n.imageSmoothingEnabled=!1;const s=(c,m)=>{const _=Wg(1e3+c*97);n.clearRect(0,0,he,he),m(n,_);const g=c%hs,d=Math.floor(c/hs),v=g*Fi+Te,M=d*Fi+Te;t.drawImage(e,v,M);for(let x=1;x<=Te;x++)t.drawImage(e,0,0,he,1,v,M-x,he,1),t.drawImage(e,0,he-1,he,1,v,M+he+x-1,he,1),t.drawImage(e,0,0,1,he,v-x,M,1,he),t.drawImage(e,he-1,0,1,he,v+he+x-1,M,1,he);t.drawImage(e,0,0,1,1,v-Te,M-Te,Te,Te),t.drawImage(e,he-1,0,1,1,v+he,M-Te,Te,Te),t.drawImage(e,0,he-1,1,1,v-Te,M+he,Te,Te),t.drawImage(e,he-1,he-1,1,1,v+he,M+he,Te,Te)},r=(c,m,_,g,d=1,v=1)=>{c.fillStyle=g,c.fillRect(m,_,d,v)},o=(c,m,_,g=.07)=>{for(let d=0;d<16;d++)for(let v=0;v<16;v++){const M=1+(m()*2-1)*g;r(c,v,d,en(_,M))}},a=(c,m,_,g,d=4)=>{o(c,m,_,.045);const v=Math.floor(16/d);for(let M=0;M<d;M++){const x=M*v;r(c,0,x+v-1,g,16,1),r(c,0,x,en(_,1.05),16,1);const T=M%2*4;for(let b=T;b<16;b+=8)r(c,b%16,x,g,1,v)}},l=(c,m,_)=>{o(c,m,_,.05);const g=en(_,.82),d=en(_,1.14);for(let v=0;v<4;v++){const M=v*4,x=v%2*4;r(c,0,M+3,g,16,1),r(c,0,M,d,16,1);for(let T=x;T<16;T+=8)r(c,T%16,M,g,1,3),r(c,(T+3)%16,M+1,d,2,1)}},f=(c,m,_,g)=>{for(let d=0;d<16;d++)for(let v=0;v<16;v++){const M=m();M<.22?r(c,v,d,en(_,.84)):M<.55?r(c,v,d,_):r(c,v,d,en(_,1.12))}if(g)for(let d=0;d<10;d++){const v=Math.floor(m()*15),M=Math.floor(m()*15);r(c,v,M,g,2,1),r(c,v,M+1,en(g,1.08),1,1)}};s(bt.GRASS_TOP,(c,m)=>{o(c,m,"#6fd685",.075);for(let _=0;_<12;_++)r(c,Math.floor(m()*16),Math.floor(m()*16),"#8be898");r(c,3,4,"#fff8e7"),r(c,11,10,"#ffb8d9")}),s(bt.GRASS_SIDE,(c,m)=>{o(c,m,"#8f6347",.08);for(let _=0;_<16;_++){const g=3+Math.floor(m()*3);for(let d=0;d<g;d++)r(c,_,d,en("#6fd685",1+(m()-.5)*.1));r(c,_,g,"#52a866")}}),s(bt.DIRT,(c,m)=>{o(c,m,"#8f6347",.09);for(let _=0;_<8;_++)r(c,Math.floor(m()*15),Math.floor(m()*15),"#754e36",2,1)}),s(bt.SAKURA_GRASS_TOP,(c,m)=>{o(c,m,"#7cd992",.06);for(let _=0;_<28;_++){const g=Math.floor(m()*15),d=Math.floor(m()*15);r(c,g,d,m()>.4?"#ff9ec4":"#ffd4e6",m()>.5?2:1,1)}}),s(bt.SAKURA_GRASS_SIDE,(c,m)=>{o(c,m,"#8f6347",.08);for(let _=0;_<16;_++){const g=3+Math.floor(m()*3);for(let d=0;d<g;d++)r(c,_,d,d===0&&m()>.45?"#ffa6c9":"#7cd992");r(c,_,g,"#5ab070")}}),s(bt.CLIFF_STONE,(c,m)=>{o(c,m,"#7d7796",.08);for(let _=3;_<16;_+=5)r(c,Math.floor(m()*6),_,"#67617f",8,1)}),s(bt.DEEP_ROCK,(c,m)=>{o(c,m,"#534c6e",.09);for(let _=0;_<6;_++)r(c,Math.floor(m()*14),Math.floor(m()*14),"#3f3957",2,2)}),s(bt.SNOW,(c,m)=>{o(c,m,"#f4f8ff",.03);for(let _=0;_<10;_++)r(c,Math.floor(m()*16),Math.floor(m()*16),"#dcebff")}),s(bt.SAND,(c,m)=>{o(c,m,"#f6e7c8",.05)}),s(bt.COBBLE,(c,m)=>{o(c,m,"#aba4ba",.05);const _=[[1,1,6,5,"#d8d2e3"],[8,1,7,6,"#cfc8dc"],[1,7,5,7,"#cbc4d8"],[7,8,8,6,"#ded8e8"]];for(const[g,d,v,M,x]of _)r(c,g,d,x,v,M),r(c,g,d,en(x,1.06),v,1),r(c,g,d+M-1,en(x,.88),v,1)}),s(bt.PLAZA_MARBLE,(c,m)=>{o(c,m,"#f5f0fa",.025),r(c,0,0,"#dcd4ea",16,1),r(c,0,0,"#dcd4ea",1,16),r(c,7,3,"#e8d7b0",2,10),r(c,3,7,"#e8d7b0",10,2),r(c,6,6,"#ffd984",4,4)}),s(bt.CASTLE_WALL,(c,m)=>{a(c,m,"#f8f4ec","#dfd9e8",4)}),s(bt.CASTLE_BASE,(c,m)=>{a(c,m,"#cfc9e0","#ada6c4",4)}),s(bt.CASTLE_PILLAR_SIDE,(c,m)=>{o(c,m,"#faf6ef",.02);for(let _=2;_<16;_+=4)r(c,_,0,"#e3dde9",1,16),r(c,_+1,0,"#ffffff",1,16)}),s(bt.CASTLE_PILLAR_TOP,(c,m)=>{o(c,m,"#faf6ef",.02),r(c,1,1,"#e3dde9",14,14),r(c,3,3,"#faf6ef",10,10)}),s(bt.ROOF_BLUE,(c,m)=>l(c,m,"#4c88e8")),s(bt.ROOF_PINK,(c,m)=>l(c,m,"#ee7fb8")),s(bt.ROOF_LAVENDER,(c,m)=>l(c,m,"#9b7ede")),s(bt.GOLD,(c,m)=>{o(c,m,"#ffd25a",.05),r(c,0,0,"#fff0a6",16,2),r(c,0,0,"#fff0a6",2,16),r(c,0,14,"#d99b26",16,2),r(c,14,0,"#d99b26",2,16),r(c,5,5,"#fff6c4",6,6)}),s(bt.PLASTER,(c,m)=>{o(c,m,"#fbf4e4",.035)}),s(bt.TIMBER_SIDE,(c,m)=>{o(c,m,"#784e34",.06);for(let _=0;_<16;_+=4)r(c,_,0,"#5e3b26",1,16)}),s(bt.TIMBER_TOP,(c,m)=>{o(c,m,"#9c6e49",.04),r(c,0,0,"#6b442b",16,2),r(c,0,14,"#6b442b",16,2),r(c,0,0,"#6b442b",2,16),r(c,14,0,"#6b442b",2,16),r(c,5,5,"#7d5336",6,6)}),s(bt.PLANKS,(c,m)=>{o(c,m,"#c28d5e",.05);for(let _=3;_<16;_+=4)r(c,0,_,"#9c6b40",16,1)}),s(bt.ROOF_CORAL,(c,m)=>l(c,m,"#f07c7a")),s(bt.ROOF_MINT,(c,m)=>l(c,m,"#58c4b8")),s(bt.ROOF_HONEY,(c,m)=>l(c,m,"#f4b95a")),s(bt.BRICK,(c,m)=>a(c,m,"#c96c5f","#ead8ce",4)),s(bt.WHITE_CLOTH,(c,m)=>{o(c,m,"#ffffff",.025),r(c,0,7,"#e8eef7",16,1),r(c,7,0,"#e8eef7",1,16)}),s(bt.TRUNK_DARK_SIDE,(c,m)=>{o(c,m,"#66442e",.07);for(let _=1;_<16;_+=3)r(c,_,0,"#4f3321",1,16)}),s(bt.TRUNK_SPIRIT_SIDE,(c,m)=>{o(c,m,"#8a686e",.06);for(let _=2;_<16;_+=4)r(c,_,0,"#6e4f55",1,16)}),s(bt.LEAVES_SAKURA,(c,m)=>f(c,m,"#ff8fb6","#ffdbe9")),s(bt.LEAVES_SAKURA_LIGHT,(c,m)=>f(c,m,"#ffc8df","#fff5fa")),s(bt.LEAVES_EMERALD,(c,m)=>f(c,m,"#54ba73","#9cf0a8")),s(bt.LEAVES_GOLDEN,(c,m)=>f(c,m,"#f7c852","#fff099")),s(bt.MUSHROOM_RED,(c,m)=>{o(c,m,"#ef5366",.04),r(c,2,2,"#fff9f2",4,4),r(c,10,3,"#fff9f2",3,3),r(c,5,10,"#fff9f2",4,4),r(c,12,11,"#fff9f2",2,2)}),s(bt.WARM_WINDOW,c=>{for(let m=0;m<16;m++)for(let _=0;_<16;_++){const g=Math.hypot(_-7.5,m-7.5);r(c,_,m,g<5?"#fff6bd":"#ffbe55")}r(c,0,0,"#6e4832",16,2),r(c,0,14,"#6e4832",16,2),r(c,0,0,"#6e4832",2,16),r(c,14,0,"#6e4832",2,16),r(c,7,0,"#6e4832",2,16),r(c,0,7,"#6e4832",16,2)}),s(bt.ROSE_GLASS,c=>{r(c,0,0,"#4f3a66",16,16),r(c,2,2,"#6ed8ff",12,12),r(c,4,2,"#ff7ac6",8,12),r(c,2,4,"#ff7ac6",12,8),r(c,5,5,"#ffe680",6,6),r(c,7,2,"#4f3a66",2,12),r(c,2,7,"#4f3a66",12,2),r(c,6,6,"#ffffff",4,4)}),s(bt.LANTERN,c=>{r(c,0,0,"#ffca58",16,16),r(c,2,2,"#ffe885",12,12),r(c,4,4,"#fffbe0",8,8),r(c,0,0,"#5c4338",16,2),r(c,0,14,"#5c4338",16,2)});const u=(c,m,_,g)=>{o(c,m,_,.08),r(c,3,3,g,10,10),r(c,5,5,"#ffffff",5,5)};s(bt.CRYSTAL_CYAN,(c,m)=>u(c,m,"#39cfe0","#9ef8ff")),s(bt.CRYSTAL_AMETHYST,(c,m)=>u(c,m,"#b666ff","#eccaff")),s(bt.GLOW_SHROOM_BLUE,(c,m)=>u(c,m,"#49c6ff","#bbf2ff")),s(bt.STAR_CORE,(c,m)=>u(c,m,"#ffe169","#ffffff")),s(bt.WATER,(c,m)=>{o(c,m,"#44b8f0",.04),r(c,2,4,"#8ce0ff",5,1),r(c,9,11,"#8ce0ff",5,1)}),s(bt.WATERFALL,(c,m)=>{o(c,m,"#9be4ff",.05);for(let _=2;_<15;_+=4)r(c,_,0,"#eefbff",2,16)});const h=[[bt.RAINBOW_R,"#ff7597"],[bt.RAINBOW_O,"#ffad66"],[bt.RAINBOW_Y,"#ffe675"],[bt.RAINBOW_G,"#75eb9c"],[bt.RAINBOW_C,"#6ee8f7"],[bt.RAINBOW_B,"#7da8ff"],[bt.RAINBOW_V,"#c78cff"]];for(const[c,m]of h)s(c,(_,g)=>{o(_,g,m,.03),r(_,0,0,en(m,1.18),16,2),r(_,4,4,"#ffffff",3,3)});s(bt.FROST_BRICK,(c,m)=>{a(c,m,"#d8f3ff","#8ecae6",4);for(let _=0;_<12;_++)r(c,_+2,_*3%15,"#ffffff",2,1)}),s(bt.DARK_ABYSS_ICE,(c,m)=>{a(c,m,"#283d70","#19274d",4),r(c,0,0,"#5ec8f8",16,1),r(c,6,6,"#6be2ff",4,4)}),s(bt.FROST_PILLAR_SIDE,(c,m)=>{o(c,m,"#dcf5ff",.03);for(let _=2;_<16;_+=4)r(c,_,0,"#8ecae6",1,16),r(c,_+1,0,"#ffffff",1,16)}),s(bt.FROST_PILLAR_TOP,(c,m)=>{o(c,m,"#dcf5ff",.02),r(c,1,1,"#7cc6eb",14,14),r(c,4,4,"#ffffff",8,8)}),s(bt.FROST_RUNE_GLOW,c=>{r(c,0,0,"#2bb8e6",16,16),r(c,2,2,"#6ef2ff",12,12),r(c,4,4,"#c7fcff",8,8),r(c,6,1,"#ffffff",4,14),r(c,1,6,"#ffffff",14,4)}),s(bt.GLACIER_ICE,(c,m)=>{o(c,m,"#62cdfa",.05);for(let _=0;_<14;_++)r(c,_,14-_,"#dffaff",2,2);r(c,0,0,"#b8f2ff",16,1),r(c,0,0,"#b8f2ff",1,16)});const p=new Xm(i);return p.magFilter=Ue,p.minFilter=Ue,p.generateMipmaps=!1,p.colorSpace=We,p.needsUpdate=!0,p}const de=16,Xg=[{dir:[0,1,0],slot:0,dirLight:1,verts:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]],aoOffsets:(i,t,e)=>{const n=i===0?-1:1,s=e===0?-1:1;return[[n,1,0],[0,1,s],[n,1,s]]}},{dir:[0,-1,0],slot:2,dirLight:.74,verts:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]],aoOffsets:(i,t,e)=>{const n=i===0?-1:1,s=e===0?-1:1;return[[n,-1,0],[0,-1,s],[n,-1,s]]}},{dir:[0,0,1],slot:1,dirLight:.95,verts:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]],aoOffsets:(i,t,e)=>{const n=i===0?-1:1,s=t===0?-1:1;return[[n,0,1],[0,s,1],[n,s,1]]}},{dir:[0,0,-1],slot:1,dirLight:.9,verts:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]],aoOffsets:(i,t,e)=>{const n=i===0?-1:1,s=t===0?-1:1;return[[n,0,-1],[0,s,-1],[n,s,-1]]}},{dir:[1,0,0],slot:1,dirLight:.92,verts:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]],aoOffsets:(i,t,e)=>{const n=t===0?-1:1,s=e===0?-1:1;return[[1,n,0],[1,0,s],[1,n,s]]}},{dir:[-1,0,0],slot:1,dirLight:.87,verts:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]],aoOffsets:(i,t,e)=>{const n=t===0?-1:1,s=e===0?-1:1;return[[-1,n,0],[-1,0,s],[-1,n,s]]}}],Kg=[[.54,.52,.7],[.7,.69,.82],[.85,.85,.92],[1,1,1]];class qg{constructor(t){tt(this,"chunks",new Map);tt(this,"chunkMeshes",new Map);tt(this,"dirtyChunks",new Set);tt(this,"group",new Ut);tt(this,"blockCount",0);tt(this,"materials");this.materials={opaque:new wt({map:t,vertexColors:!0,roughness:.86,metalness:.04}),night_window:new wt({map:t,emissiveMap:t,emissive:new ot("#ffbe6b"),emissiveIntensity:.55,vertexColors:!0,roughness:.35,metalness:.1}),emissive:new wt({map:t,emissiveMap:t,emissive:new ot("#ffffff"),emissiveIntensity:1.35,vertexColors:!1,roughness:.25,metalness:.05}),transparent:new wt({map:t,emissiveMap:t,emissive:new ot("#88dcff"),emissiveIntensity:.22,vertexColors:!0,transparent:!0,opacity:.78,roughness:.18,metalness:.12,depthWrite:!1})}}chunkKey(t,e,n){return`${t},${e},${n}`}toChunkCoords(t,e,n){const s=Math.floor(t/de),r=Math.floor(e/de),o=Math.floor(n/de),a=t-s*de,l=e-r*de,f=n-o*de;return{cx:s,cy:r,cz:o,lx:a,ly:l,lz:f}}localIndex(t,e,n){return(e*de+n)*de+t}get(t,e,n){const s=Math.floor(t/de),r=Math.floor(e/de),o=Math.floor(n/de),a=this.chunks.get(this.chunkKey(s,r,o));if(!a)return S.AIR;const l=t-s*de,f=e-r*de,u=n-o*de;return a[this.localIndex(l,f,u)]}set(t,e,n,s){const r=Math.floor(t),o=Math.floor(e),a=Math.floor(n),{cx:l,cy:f,cz:u,lx:h,ly:p,lz:c}=this.toChunkCoords(r,o,a),m=this.chunkKey(l,f,u);let _=this.chunks.get(m);if(!_){if(s===S.AIR)return;_=new Uint8Array(de*de*de),this.chunks.set(m,_)}const g=this.localIndex(h,p,c),d=_[g];d!==s&&(d===S.AIR&&s!==S.AIR?this.blockCount++:d!==S.AIR&&s===S.AIR&&this.blockCount--,_[g]=s,this.markDirtyWithNeighbors(l,f,u,h,p,c))}setIfAir(t,e,n,s){this.get(t,e,n)===S.AIR&&this.set(t,e,n,s)}fillBox(t,e,n,s,r,o,a){const l=Math.min(t,s),f=Math.max(t,s),u=Math.min(e,r),h=Math.max(e,r),p=Math.min(n,o),c=Math.max(n,o);for(let m=u;m<=h;m++)for(let _=p;_<=c;_++)for(let g=l;g<=f;g++)this.set(g,m,_,a)}getSurfaceY(t,e,n=85,s=-25){const r=Math.floor(t),o=Math.floor(e);for(let a=n;a>=s;a--){const l=this.get(r,a,o);if(l!==S.AIR&&l!==S.WATER&&l!==S.WATERFALL_FOAM)return a}return s}markDirtyWithNeighbors(t,e,n,s,r,o){this.dirtyChunks.add(this.chunkKey(t,e,n));const a=s===0?[-1,0]:s===de-1?[0,1]:[0],l=r===0?[-1,0]:r===de-1?[0,1]:[0],f=o===0?[-1,0]:o===de-1?[0,1]:[0];for(const u of a)for(const h of l)for(const p of f)if(u!==0||h!==0||p!==0){const c=this.chunkKey(t+u,e+h,n+p);this.chunks.has(c)&&this.dirtyChunks.add(c)}}isOccluding(t,e,n){var r;const s=this.get(t,e,n);return s===S.AIR?!1:((r=Js[s])==null?void 0:r.occludes)??!1}vertexAO(t,e,n){return t&&e?0:3-((t?1:0)+(e?1:0)+(n?1:0))}rebuildDirtyChunks(){for(const t of this.dirtyChunks)this.rebuildSingleChunk(t);this.dirtyChunks.clear()}rebuildSingleChunk(t){const e=this.chunkMeshes.get(t);if(e){for(const p of["opaque","night_window","emissive","transparent"]){const c=e[p];c&&(this.group.remove(c),c.geometry.dispose())}this.chunkMeshes.delete(t)}const n=this.chunks.get(t);if(!n)return;const[s,r,o]=t.split(",").map(Number),a=s*de,l=r*de,f=o*de,u={opaque:{positions:[],normals:[],uvs:[],colors:[],indices:[]},night_window:{positions:[],normals:[],uvs:[],colors:[],indices:[]},emissive:{positions:[],normals:[],uvs:[],colors:[],indices:[]},transparent:{positions:[],normals:[],uvs:[],colors:[],indices:[]}};for(let p=0;p<de;p++)for(let c=0;c<de;c++)for(let m=0;m<de;m++){const _=n[this.localIndex(m,p,c)];if(_===S.AIR)continue;const g=Js[_];if(!g)continue;const d=a+m,v=l+p,M=f+c,x=u[g.layer];for(const T of Xg){const b=d+T.dir[0],R=v+T.dir[1],L=M+T.dir[2],E=this.get(b,R,L);if(E!==S.AIR){const H=Js[E];if(g.layer==="transparent"){if(E===_||H!=null&&H.occludes)continue}else if(H!=null&&H.occludes)continue}const y=g.tiles[T.slot],[D,B,k,J]=Vg(y),et=[[D,B],[k,B],[k,J],[D,J]],K=x.positions.length/3,Q=[3,3,3,3];for(let H=0;H<4;H++){const[at,ft,yt]=T.verts[H];if(x.positions.push(d+at,v+ft,M+yt),x.normals.push(T.dir[0],T.dir[1],T.dir[2]),x.uvs.push(et[H][0],et[H][1]),g.layer==="emissive")x.colors.push(1,1,1);else{const[Ot,Xt,$]=T.aoOffsets(at,ft,yt),it=this.isOccluding(d+Ot[0],v+Ot[1],M+Ot[2]),_t=this.isOccluding(d+Xt[0],v+Xt[1],M+Xt[2]),st=this.isOccluding(d+$[0],v+$[1],M+$[2]),Ct=this.vertexAO(it,_t,st);Q[H]=Ct;const[It,Bt,oe]=Kg[Ct];x.colors.push(It*T.dirLight,Bt*T.dirLight,oe*T.dirLight)}}Q[0]+Q[2]<Q[1]+Q[3]?x.indices.push(K+1,K+2,K+3,K+1,K+3,K+0):x.indices.push(K+0,K+1,K+2,K+0,K+2,K+3)}}const h={};for(const p of["opaque","night_window","emissive","transparent"]){const c=u[p];if(c.indices.length===0)continue;const m=new ye;m.setAttribute("position",new $t(c.positions,3)),m.setAttribute("normal",new $t(c.normals,3)),m.setAttribute("uv",new $t(c.uvs,2)),p!=="emissive"&&m.setAttribute("color",new $t(c.colors,3)),m.setIndex(c.indices),m.computeBoundingSphere();const _=new W(m,this.materials[p]);p==="opaque"||p==="night_window"?(_.castShadow=!0,_.receiveShadow=!0):p==="transparent"&&(_.receiveShadow=!0,_.renderOrder=2),this.group.add(_),h[p]=_}Object.keys(h).length>0&&this.chunkMeshes.set(t,h)}raycast(t,e,n=180,s=!0){const r=e.clone().normalize();let o=Math.floor(t.x),a=Math.floor(t.y),l=Math.floor(t.z);const f=r.x>0?1:r.x<0?-1:0,u=r.y>0?1:r.y<0?-1:0,h=r.z>0?1:r.z<0?-1:0,p=f!==0?Math.abs(1/r.x):1/0,c=u!==0?Math.abs(1/r.y):1/0,m=h!==0?Math.abs(1/r.z):1/0;let _=f>0?(o+1-t.x)*p:f<0?(t.x-o)*p:1/0,g=u>0?(a+1-t.y)*c:u<0?(t.y-a)*c:1/0,d=h>0?(l+1-t.z)*m:h<0?(t.z-l)*m:1/0,v=0,M=0,x=0,T=0;for(;T<=n;){const b=this.get(o,a,l);if(b!==S.AIR&&(!s||b!==S.WATER&&b!==S.WATERFALL_FOAM))return{x:o,y:a,z:l,nx:v,ny:M,nz:x,blockId:b,distance:T};_<g?_<d?(o+=f,T=_,_+=p,v=-f,M=0,x=0):(l+=h,T=d,d+=m,v=0,M=0,x=-h):g<d?(a+=u,T=g,g+=c,v=0,M=-u,x=0):(l+=h,T=d,d+=m,v=0,M=0,x=-h)}return null}}function Ke(i,t,e,n,s,r,o,a,l,f="#ff7eb9"){const u=s*s,h=Math.max(0,(s-1.25)*(s-1.25));for(let T=0;T<r;T++){const b=e+T;for(let R=-Math.ceil(s);R<=Math.ceil(s);R++)for(let L=-Math.ceil(s);L<=Math.ceil(s);L++){const E=L*L+R*R;if(E<=u+.35){if(!(E>=h)&&T>0&&T<r-1){i.set(t+L,b,n+R,S.AIR);continue}let D=S.CASTLE_WALL;T<3?D=S.CASTLE_BASE:(T===r-1||T===Math.floor(r*.55))&&(D=S.GOLD_CROWN),i.set(t+L,b,n+R,D)}}}const p=Math.max(4,Math.floor(r*.35)),c=Math.max(p+2,r-4),m=[[0,1],[0,-1],[1,0],[-1,0]],_=Math.round(s);for(const[T,b]of m)for(let R=p;R<=c;R++)(R-p)%5<3&&i.set(t+T*_,e+R,n+b*_,S.WARM_WINDOW);const g=e+r,d=s+1,v=d*d;for(let T=-Math.ceil(d);T<=Math.ceil(d);T++)for(let b=-Math.ceil(d);b<=Math.ceil(d);b++){const R=b*b+T*T;R<=v+.25&&(i.set(t+b,g,n+T,S.CASTLE_BASE),R>=(d-1.1)*(d-1.1)&&(Math.abs(b)+Math.abs(T))%2===0&&i.set(t+b,g+1,n+T,S.CASTLE_WALL))}const M=g+1;for(let T=0;T<a;T++){const b=T/a,R=(s+1.2)*Math.pow(1-b,1.18),L=Math.ceil(R),E=R*R;for(let y=-L;y<=L;y++)for(let D=-L;D<=L;D++)if(D*D+y*y<=E+.2){const B=T===0&&D*D+y*y>=(R-1)*(R-1)?S.GOLD_CROWN:o;i.set(t+D,M+T,n+y,B)}}const x=M+a;i.set(t,x,n,S.GOLD_CROWN),i.set(t,x+1,n,S.GOLD_CROWN),i.set(t,x+2,n,S.STAR_CORE),l.push({x:t,y:x+2.2,z:n,color:f,scale:s>=5?1.35:.95})}function Zg(i,t){for(let o=-54;o<=-18;o++)for(let a=-24;a<=24;a++)if(!(Math.abs(a)+Math.abs(o+36)>36))for(let l=17;l<=22;l++){const f=a===-24||a===24||o===-54||o===-18||Math.abs(a)+Math.abs(o+36)>=35;i.set(a,l,o,l===22?f?S.CASTLE_BASE:S.PLAZA_MARBLE:S.CASTLE_BASE)}const s=8;for(let o=-18;o<=18;o++)if(!(Math.abs(o)<=3)){for(let a=1;a<=s;a++){const l=a<=2?S.CASTLE_BASE:S.CASTLE_WALL;i.set(o,22+a,-20,l),i.set(o,22+a,-21,l)}i.set(o,22+s,-21,S.PLAZA_MARBLE),Math.abs(o)%2===0&&i.set(o,22+s+1,-20,S.CASTLE_WALL),Math.abs(o)%6===0&&i.set(o,27,-20,S.WARM_WINDOW)}for(let o=-49;o<=-21;o++)for(const a of[-19,19]){for(let l=1;l<=s;l++){const f=l<=2?S.CASTLE_BASE:S.CASTLE_WALL;i.set(a,22+l,o,f)}Math.abs(o)%2===0&&i.set(a,22+s+1,o,S.CASTLE_WALL),Math.abs(o)%6===0&&i.set(a,27,o,S.WARM_WINDOW)}for(let o=1;o<=13;o++)for(let a=-22;a<=-19;a++)for(let l=-5;l<=5;l++){const f=6-Math.floor(l*l/3.5);if(Math.abs(l)<=2&&o<=f){i.set(l,22+o,a,S.AIR);continue}let u=o<=2?S.CASTLE_BASE:S.CASTLE_WALL;(o===9||o===13)&&(u=S.GOLD_CROWN),i.set(l,22+o,a,u)}for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++)i.set(a,33+o,-19,S.ROSE_STAINED_GLASS);for(let o=-4;o<=4;o+=2)i.set(o,36,-19,S.CASTLE_WALL);i.set(0,37,-19,S.GOLD_CROWN),i.set(0,38,-19,S.STAR_CORE),Ke(i,-7,22,-20,3.2,15,S.ROOF_ROYAL_BLUE,10,t,"#ff85c0"),Ke(i,7,22,-20,3.2,15,S.ROOF_ROYAL_BLUE,10,t,"#ff85c0"),Ke(i,-19,22,-21,3.6,13,S.ROOF_SAKURA_PINK,9,t,"#69c0ff"),Ke(i,19,22,-21,3.6,13,S.ROOF_SAKURA_PINK,9,t,"#69c0ff"),Ke(i,-19,22,-49,3.8,16,S.ROOF_LAVENDER,10,t,"#ffd666"),Ke(i,19,22,-49,3.8,16,S.ROOF_LAVENDER,10,t,"#ffd666");const r=19;for(let o=1;o<=r;o++)for(let a=-46;a<=-28;a++)for(let l=-12;l<=12;l++){if(!(l===-12||l===12||a===-46||a===-28||o===r))continue;let u=S.CASTLE_WALL;o<=3?u=S.CASTLE_BASE:(Math.abs(l)===12&&Math.abs(a+37)%4===0||(a===-28||a===-46)&&Math.abs(l)%4===0)&&(u=S.CASTLE_PILLAR),(o===11||o===r)&&(u=S.GOLD_CROWN),i.set(l,22+o,a,u)}i.fillBox(-3,23,-28,3,28,-28,S.AIR),i.fillBox(-6,32,-27,6,32,-25,S.PLAZA_MARBLE);for(let o=-6;o<=6;o++)i.set(o,33,-25,o%2===0?S.GOLD_CROWN:S.CASTLE_WALL);for(let o=-3;o<=3;o++)for(let a=-3;a<=3;a++){const l=Math.hypot(a,o);l<=3.2&&i.set(a,37+o,-28,l>=2.5?S.GOLD_CROWN:S.ROSE_STAINED_GLASS)}for(let o=-43;o<=-31;o+=4)for(const a of[-12,12]){for(let f=5;f<=9;f++)i.set(a,22+f,o,S.WARM_WINDOW);for(let f=13;f<=17;f++)i.set(a,22+f,o,S.WARM_WINDOW);const l=a<0?-1:1;i.fillBox(a+l*3,23,o,a+l*3,33,o,S.CASTLE_PILLAR),i.set(a+l*3,34,o,S.GOLD_CROWN),i.set(a+l*2,32,o,S.CASTLE_WALL),i.set(a+l*1,33,o,S.CASTLE_WALL)}for(let o=0;o<=9;o++){const a=13-o;if(a<0)break;for(let l=-47;l<=-27;l++)for(let f=-a;f<=a;f++){if(!(Math.abs(f)>=a-1||l===-47||l===-27))continue;let h=S.ROOF_ROYAL_BLUE;l===-47||l===-27?h=Math.abs(f)===a?S.GOLD_CROWN:S.CASTLE_WALL:a===1&&(h=S.GOLD_CROWN),i.set(f,22+r+1+o,l,h)}}Ke(i,0,36,-39,4.6,22,S.ROOF_ROYAL_BLUE,16,t,"#ff7eb9"),Ke(i,-11,22,-28,4,24,S.ROOF_SAKURA_PINK,13,t,"#ffd666"),Ke(i,11,22,-28,4,24,S.ROOF_SAKURA_PINK,13,t,"#ffd666"),Ke(i,-12,22,-46,4.3,29,S.ROOF_LAVENDER,14,t,"#73d13d"),Ke(i,12,22,-46,4.1,26,S.ROOF_ROYAL_BLUE,13,t,"#69c0ff"),Ke(i,22,22,-36,3.5,20,S.ROOF_SAKURA_PINK,11,t,"#ff85c0");for(let o=13;o<=19;o++){const a=37+(o===16?1:0);i.fillBox(o,a,-37,o,a,-35,S.CASTLE_BASE),i.set(o,a+1,-37,S.GOLD_CROWN),i.set(o,a+1,-35,S.GOLD_CROWN)}for(let o=-18;o<=-13;o++)for(let a=-3;a<=3;a++)Math.abs(a)===3?(i.set(a,22,o,S.TIMBER_OAK),o%2===0&&(i.set(a,23,o,S.TIMBER_OAK),i.set(a,24,o,S.LANTERN_GLOW))):i.set(a,22,o,S.PLANKS_WARM);for(let o=0;o<=10;o++){const a=22-o,l=-12+o,f=4+Math.floor(o*.35);i.fillBox(-f,12,l,f,a,l,S.CASTLE_BASE),i.fillBox(-f+1,a,l,f-1,a,l,S.PLAZA_MARBLE),i.set(-f,a+1,l,S.CASTLE_WALL),i.set(f,a+1,l,S.CASTLE_WALL),o%3===0&&(i.set(-f,a+2,l,S.GOLD_CROWN),i.set(-f,a+3,l,S.LANTERN_GLOW),i.set(f,a+2,l,S.GOLD_CROWN),i.set(f,a+3,l,S.LANTERN_GLOW))}}function jg(i,t,e){const{cx:n,cz:s,w:r,d:o,h:a,roofBlock:l,ridgeAlongX:f,doorDir:u}=t,h=i.getSurfaceY(n,s,25,8);i.fillBox(n-r,h-2,s-o,n+r,h,s+o,S.CASTLE_BASE);for(let T=1;T<=a;T++)for(let b=s-o;b<=s+o;b++)for(let R=n-r;R<=n+r;R++){const L=R===n-r||R===n+r,E=b===s-o||b===s+o;if(!L&&!E){i.set(R,h+T,b,S.AIR);continue}const y=L&&E,D=T===a||T===1||a>=6&&T===4;i.set(R,h+T,b,y||D?S.TIMBER_OAK:S.COTTAGE_PLASTER)}const p={N:[n,s-o,0,-1],S:[n,s+o,0,1],E:[n+r,s,1,0],W:[n-r,s,-1,0]},[c,m,_,g]=p[u];i.set(c,h+1,m,S.PLANKS_WARM),i.set(c,h+2,m,S.PLANKS_WARM),i.set(c+_,h,m+g,S.COBBLE_PATH),i.set(c+_+(g!==0?1:0),h+3,m+g+(_!==0?1:0),S.LANTERN_GLOW);const d=Math.min(a-1,3);if(u!=="N"&&(i.set(n,h+d,s-o,S.WARM_WINDOW),i.set(n,h+d-1,s-o-1,S.LEAVES_SAKURA)),u!=="S"&&(i.set(n,h+d,s+o,S.WARM_WINDOW),i.set(n,h+d-1,s+o+1,S.LEAVES_SAKURA)),u!=="E"&&i.set(n+r,h+d,s,S.WARM_WINDOW),u!=="W"&&i.set(n-r,h+d,s,S.WARM_WINDOW),f){const T=o+1;for(let b=0;b<=T;b++){const R=T-b;for(let L=n-r-1;L<=n+r+1;L++)for(let E=s-R;E<=s+R;E++){const y=L===n-r||L===n+r;if(Math.abs(E-s)===R||L===n-r-1||L===n+r+1){const B=R===0||L===n-r-1||L===n+r+1?S.TIMBER_OAK:l;i.set(L,h+a+1+b,E,B)}else y&&i.set(L,h+a+1+b,E,E===s&&b===1?S.WARM_WINDOW:S.COTTAGE_PLASTER)}}}else{const T=r+1;for(let b=0;b<=T;b++){const R=T-b;for(let L=s-o-1;L<=s+o+1;L++)for(let E=n-R;E<=n+R;E++){const y=L===s-o||L===s+o;if(Math.abs(E-n)===R||L===s-o-1||L===s+o+1){const B=R===0||L===s-o-1||L===s+o+1?S.TIMBER_OAK:l;i.set(E,h+a+1+b,L,B)}else y&&i.set(E,h+a+1+b,L,E===n&&b===1?S.WARM_WINDOW:S.COTTAGE_PLASTER)}}}const v=n+r-1,M=s-o+1,x=h+a+(f?o:r)+3;for(let T=h+a;T<=x;T++)i.set(v,T,M,S.BRICK_CHIMNEY);e.push([v+.5,x+1.2,M+.5])}function Ri(i,t,e,n,s=1){const r=i.getSurfaceY(t,e,40,5);if(r<=6)return;const o=i.get(t,r,e);if(o!==S.GRASS_DREAM&&o!==S.GRASS_SAKURA&&o!==S.SNOW_PURE)return;const a=n==="sakura"||n==="sakura_light"?S.TRUNK_SPIRIT:S.TRUNK_DARK,l=n==="sakura"?S.LEAVES_SAKURA:n==="sakura_light"?S.LEAVES_SAKURA_LIGHT:n==="golden"?S.LEAVES_GOLDEN:S.LEAVES_EMERALD,f=Math.round((4+Math.abs(t*7+e*13)%3)*s);for(let c=1;c<=f;c++)i.set(t,r+c,e,a);const u=r+f+1,h=Math.max(2.3,3.1*s),p=[[0,0,0,h],[-1.6*s,-.5,1.1*s,h*.78],[1.7*s,-.4,-1*s,h*.78],[.5*s,1.3*s,.5*s,h*.72]];for(const[c,m,_,g]of p){const d=Math.ceil(g);for(let v=-d;v<=d;v++)for(let M=-d;M<=d;M++)for(let x=-d;x<=d;x++)if(Math.hypot(x,v*1.25,M)<=g){const b=Math.round(t+c+x),R=Math.round(u+m+v),L=Math.round(e+_+M),E=n==="sakura"&&(b+R+L)%5===0?S.LEAVES_SAKURA_LIGHT:l;i.setIfAir(b,R,L,E)}}}function $g(i,t,e){const n=i.getSurfaceY(t,e,30,8);for(let o=0;o<Math.PI*2;o+=Math.PI/3)for(let a=1;a<=5;a++){const l=Math.round(t+Math.cos(o)*a),f=Math.round(e+Math.sin(o)*a),u=n+Math.max(0,3-Math.floor(a*.7));i.fillBox(l,n,f,l,u,f,S.TRUNK_SPIRIT)}for(let o=0;o<=13;o++){const a=Math.round(Math.sin(o*.22)*1.4),l=o<4?2.4:o<9?1.9:1.4,f=Math.ceil(l);for(let u=-f;u<=f;u++)for(let h=-f;h<=f;h++)h*h+u*u<=l*l&&i.set(t+a+h,n+o,e+u,S.TRUNK_SPIRIT)}const s=[[0,15,0,7.2],[-5,13,3,5.4],[5,13,-3,5.4],[-4,14,-4,5],[4,14,4,5.2],[0,18,1,5]];for(const[o,a,l,f]of s){const u=Math.ceil(f);for(let m=-u;m<=u;m++)for(let _=-u;_<=u;_++)for(let g=-u;g<=u;g++)if(Math.hypot(g,m*1.45,_)<=f){const v=t+o+g,M=n+a+m,x=e+l+_,T=Math.abs(v*3+M+x*5)%4===0?S.LEAVES_SAKURA_LIGHT:S.LEAVES_SAKURA;i.setIfAir(v,M,x,T)}const h=t+o,p=e+l,c=n+a-Math.floor(f*.65);i.set(h,c+1,p,S.TIMBER_OAK),i.set(h,c,p,S.LANTERN_GLOW)}const r=[[t-6,e+5,!0],[t+6,e+4,!1],[t-4,e-7,!1],[t+5,e-5,!0]];for(const[o,a,l]of r){const f=i.getSurfaceY(o,a,25,8);l?(i.set(o,f+1,a,S.COTTAGE_PLASTER),i.set(o,f+2,a,S.COTTAGE_PLASTER),i.fillBox(o-1,f+3,a-1,o+1,f+3,a+1,S.MUSHROOM_RED),i.set(o,f+4,a,S.MUSHROOM_RED)):i.set(o,f+1,a,S.GLOW_SHROOM_BLUE)}}function on(i,t,e){const n=i.getSurfaceY(t,e,30,8);i.set(t,n+1,e,S.CASTLE_BASE),i.set(t,n+2,e,S.TIMBER_OAK),i.set(t,n+3,e,S.TIMBER_OAK),i.set(t,n+4,e,S.LANTERN_GLOW),i.set(t,n+5,e,S.GOLD_CROWN)}function Jg(i){const t=[];for(let u=-9;u<=9;u++)for(let h=-9;h<=9;h++){const p=Math.hypot(h,u);p<=9.2&&i.set(0+h,12,15+u,p>=8.1?S.COBBLE_PATH:S.PLAZA_MARBLE)}for(let u=-4;u<=4;u++)for(let h=-4;h<=4;h++){const p=Math.hypot(h,u);p<=4.3&&(p>=3.2?i.set(0+h,13,15+u,S.CASTLE_WALL):i.set(0+h,13,15+u,S.WATER))}i.fillBox(0,13,15,0,17,15,S.CASTLE_PILLAR),i.fillBox(-1,15,14,1,15,16,S.CASTLE_WALL),i.set(0,18,15,S.STAR_CORE),on(i,-7,9),on(i,7,9),on(i,-7,21),on(i,7,21);const r=[{cx:-16,cz:6,w:4,d:3,h:5,roofBlock:S.ROOF_CORAL,ridgeAlongX:!1,doorDir:"E"},{cx:-17,cz:20,w:4,d:4,h:6,roofBlock:S.ROOF_MINT,ridgeAlongX:!0,doorDir:"E"},{cx:-8,cz:31,w:4,d:3,h:5,roofBlock:S.ROOF_SAKURA_PINK,ridgeAlongX:!0,doorDir:"N"},{cx:15,cz:5,w:4,d:3,h:6,roofBlock:S.ROOF_HONEY,ridgeAlongX:!1,doorDir:"W"},{cx:9,cz:29,w:3,d:4,h:5,roofBlock:S.ROOF_LAVENDER,ridgeAlongX:!1,doorDir:"N"},{cx:-24,cz:32,w:3,d:3,h:5,roofBlock:S.ROOF_ROYAL_BLUE,ridgeAlongX:!0,doorDir:"E"}];for(const u of r)jg(i,u,t);for(let u=14;u<=26;u++){const h=(u-20)/6,c=12+Math.round((1-h*h)*3.2);for(let m=16;m<=20;m++)m===16||m===20?(i.set(u,c,m,S.CASTLE_BASE),i.set(u,c+1,m,S.CASTLE_WALL),(u===14||u===20||u===26)&&i.set(u,c+2,m,u===20?S.LANTERN_GLOW:S.GOLD_CROWN)):i.set(u,c,m,S.COBBLE_PATH)}const o=36,a=18,l=i.getSurfaceY(o,a,30,10);for(let u=0;u<=14;u++){const h=u<5?4.2:u<10?3.6:3.1,p=Math.ceil(h);for(let c=-p;c<=p;c++)for(let m=-p;m<=p;m++){const _=m*m+c*c;if(_<=h*h){if(!(_>=(h-1.2)*(h-1.2))&&u>0&&u<14)continue;let d=S.COTTAGE_PLASTER;u<3?d=S.CASTLE_BASE:(u===6||u===14)&&(d=S.TIMBER_OAK),i.set(o+m,l+u,a+c,d)}}}for(let u=-5;u<=5;u++)for(let h=-5;h<=5;h++){const p=Math.hypot(h,u);p>=3.8&&p<=5.1&&i.set(o+h,l+6,a+u,S.PLANKS_WARM)}for(let u=0;u<=6;u++){const h=3.8*(1-u/6.5),p=Math.ceil(h);for(let c=-p;c<=p;c++)for(let m=-p;m<=p;m++)m*m+c*c<=h*h+.2&&i.set(o+m,l+15+u,a+c,S.ROOF_HONEY)}i.set(o,l+22,a,S.GOLD_CROWN),i.set(o-3,l+12,a,S.TIMBER_OAK),i.set(o-4,l+12,a,S.GOLD_CROWN);for(let u=-11;u<=11;u+=2)for(let h=-9;h<=11;h+=2){const p=Math.hypot(h,u);if(p>6.5&&p<12.5){const c=o+h,m=a+u,_=i.getSurfaceY(c,m,26,10);i.get(c,_,m)===S.GRASS_DREAM&&(c+m)%3===0&&i.set(c,_+1,m,c*m%2===0?S.LEAVES_GOLDEN:S.LEAVES_SAKURA)}}$g(i,-38,12);const f=[[-28,-2,"sakura",1.15],[-46,-2,"sakura_light",1.05],[-48,22,"sakura",1.1],[-32,26,"sakura_light",1],[-25,12,"sakura",.95],[-42,-16,"emerald",1.2],[-32,-26,"sakura",1.1],[30,-14,"sakura",1.1],[42,-4,"golden",1.05],[44,30,"emerald",1.1],[26,36,"sakura_light",1],[-32,38,"sakura",1.05],[16,41,"golden",.95],[28,-42,"emerald",1.2],[36,-30,"sakura",1.1]];for(const[u,h,p,c]of f)Ri(i,u,h,p,c);return on(i,-5,1),on(i,5,1),on(i,-12,15),on(i,12,17),on(i,28,18),on(i,-26,15),{chimneys:t,fountainTop:[0+.5,12+6.4,15+.5],windmillHub:[o-4.3,l+12.5,a+.5]}}function Xr(i,t,e,n,s,r,o,a){const l=Math.ceil(s+2);for(let u=-l;u<=l;u++)for(let h=-l;h<=l;h++){const p=Math.atan2(u,h),c=1+.12*Math.sin(p*3+t)+.08*Math.cos(p*5-n),m=s*c,_=Math.hypot(h,u);if(_>m)continue;const g=_/m,d=Math.abs(Math.sin(h*.55+n)*Math.cos(u*.55-t))*4.5,v=Math.max(2,Math.round(r*Math.pow(1-g*g,1.35)+(g<.7?d:0))),M=g<.55?Math.round((1-g)*1.4):0,x=e+M;for(let T=x-v;T<=x;T++){let b=S.DEEP_ROCK;T===x?b=o:T>=x-2?b=S.DIRT_WARM:T>=x-Math.floor(v*.55)&&(b=S.CLIFF_STONE),i.set(t+h,T,n+u,b)}if(g>.84&&Math.abs(h*7+u*11)%7===0){const T=3+Math.abs(h+u)%5;for(let b=1;b<=T;b++)i.setIfAir(t+h,x-b,n+u,S.LEAVES_EMERALD)}}const f=e-r-1;for(let u=-3;u<=3;u++){const h=2-Math.floor(Math.abs(u)*.6);for(let p=-h;p<=h;p++)for(let c=-h;c<=h;c++)Math.abs(c)+Math.abs(p)<=h&&i.set(t+c,f+u,n+p,a)}}function Vn(i,t,e,n,s,r,o,a,l,f){for(let u=0;u<=a;u++){const h=u/a,p=Math.round(t+s*u),c=Math.round(e+r*u),m=Math.round(n+o*u),_=Math.max(0,Math.round(l*(1-h*.85)));for(let g=-_;g<=_;g++)for(let d=-_;d<=_;d++)for(let v=-_;v<=_;v++)Math.abs(v)+Math.abs(d)+Math.abs(g)<=_+.5&&i.set(p+v,c+d,m+g,f)}}function Qg(i,t){for(let x=-7;x<=6;x++){const T=Math.max(0,Math.round(5.2*(1-Math.abs(x)/7.5)));for(let b=-T;b<=T;b++)for(let R=-T;R<=T;R++)Math.abs(R)+Math.abs(b)<=T+1&&i.set(0+R,-20+x,-8+b,S.CRYSTAL_CYAN)}Vn(i,-6,-15,-6,-.7,-.8,.3,8,1.6,S.CRYSTAL_CYAN),Vn(i,6,-15,-10,.7,-.8,-.3,8,1.6,S.CRYSTAL_CYAN),Vn(i,0,-16,2,.2,-.85,.7,7,1.5,S.CRYSTAL_AMETHYST),Vn(i,-3,-16,-18,-.4,-.85,-.6,7,1.5,S.CRYSTAL_AMETHYST);const r=64,o=25,a=-12;Xr(i,r,o,a,13.5,16,S.GRASS_SAKURA,S.CRYSTAL_AMETHYST);const l=o+1;for(let x=-6;x<=6;x++)for(let T=-6;T<=6;T++){const b=Math.hypot(T,x);b<=6.2&&i.set(r+T,l,a+x,b>=5.1?S.GOLD_CROWN:S.PLAZA_MARBLE)}for(let x=0;x<6;x++){const T=x*Math.PI/3,b=r+Math.round(Math.cos(T)*5),R=a+Math.round(Math.sin(T)*5);i.fillBox(b,l+1,R,b,l+6,R,S.CASTLE_PILLAR),i.set(b,l+7,R,S.GOLD_CROWN),i.set(b,l+8,R,S.LANTERN_GLOW)}Vn(i,r+5,l,a-6,.35,.95,-.25,9,2,S.CRYSTAL_AMETHYST),Vn(i,r+8,l,a-3,.5,.85,.1,6,1.4,S.CRYSTAL_CYAN),Vn(i,r-4,l,a-8,-.3,.9,-.3,7,1.5,S.CRYSTAL_AMETHYST);const f=[S.RAINBOW_RED,S.RAINBOW_ORANGE,S.RAINBOW_YELLOW,S.RAINBOW_GREEN,S.RAINBOW_CYAN,S.RAINBOW_BLUE,S.RAINBOW_VIOLET],u=33,h=52,p=i.getSurfaceY(u,-12,30,10);i.fillBox(u-1,p,-16,u+1,p+1,-8,S.PLAZA_MARBLE),i.fillBox(u,p+2,-16,u,p+6,-16,S.CASTLE_PILLAR),i.fillBox(u,p+2,-8,u,p+6,-8,S.CASTLE_PILLAR),i.set(u,p+7,-16,S.STAR_CORE),i.set(u,p+7,-8,S.STAR_CORE);for(let x=u;x<=h;x++){const T=(x-u)/(h-u),b=p+1+T*(o+1-(p+1)),R=Math.sin(T*Math.PI)*7.5,L=Math.round(b+R);for(let E=0;E<7;E++){const y=-15+E;i.set(x,L,y,f[E]),i.setIfAir(x,L-1,y,f[E])}}const c=-60,m=21,_=30;Xr(i,c,m,_,10.5,14,S.GRASS_DREAM,S.CRYSTAL_CYAN),Ri(i,c-5,_-3,"sakura",1);const g=m+1;for(let x=0;x<=17;x++){const T=3.2-x/17*1,b=Math.ceil(T),R=Math.floor(x/4)%2===0?S.CASTLE_WALL:S.ROOF_CORAL;for(let L=-b;L<=b;L++)for(let E=-b;E<=b;E++)E*E+L*L<=T*T+.15&&i.set(c+E,g+x,_+L,x===0?S.CASTLE_BASE:R)}i.fillBox(c-3,g+18,_-3,c+3,g+18,_+3,S.GOLD_CROWN),i.fillBox(c-1,g+19,_-1,c+1,g+21,_+1,S.STAR_CORE);for(let x=0;x<=4;x++){const T=3-x*.7,b=Math.ceil(T);for(let R=-b;R<=b;R++)for(let L=-b;L<=b;L++)L*L+R*R<=T*T+.2&&i.set(c+L,g+22+x,_+R,S.ROOF_ROYAL_BLUE)}i.set(c,g+27,_,S.GOLD_CROWN);const d=-56,v=33,M=-34;Xr(i,d,v,M,9.2,12,S.GRASS_SAKURA,S.CRYSTAL_AMETHYST),Ri(i,d-1,M,"sakura",1.35),Ri(i,d+4,M-3,"sakura_light",.95),i.fillBox(d+2,v,M+2,d+5,v,M+5,S.WATER);for(let x=v;x>=v-22;x--)i.set(d+6,x,M+4,x%3===0?S.WATERFALL_FOAM:S.WATER),i.set(d+6,x,M+5,S.WATER);return t.push([d+6.5,v-22,M+4.5]),{observatoryCenter:[r+.5,l+9.5,a+.5],lighthouseTop:[c+.5,g+20.5,_+.5],waterfallEmitters:t}}function Uc(i,t,e,n,s,r,o,a,l,f=!1){for(let u=0;u<=a;u++){const h=u/a,p=Math.round(t+s*u),c=Math.round(e+r*u),m=Math.round(n+o*u),_=Math.max(0,l*(1-h*.92)),g=Math.ceil(_);for(let d=-g;d<=g;d++)for(let v=-g;v<=g;v++)for(let M=-g;M<=g;M++){const x=Math.abs(M)+Math.abs(v)+Math.abs(d);if(x<=_+.45){const T=f&&x===0&&u%2===0;i.set(p+M,c+v,m+d,T?S.FROST_RUNE_GLOW:S.GLACIER_ICE)}}}}function Ji(i,t,e,n,s,r,o){const a=Math.ceil(s);for(let f=0;f<r;f++){const u=e+f;for(let h=-a;h<=a;h++)for(let p=-a;p<=a;p++){const c=Math.max(Math.abs(p),Math.abs(h))+.42*Math.min(Math.abs(p),Math.abs(h));if(c>s+.25)continue;const m=c>=s-.95;if(!m&&f>0&&f<r-1){i.set(t+p,u,n+h,S.AIR);continue}let _=S.FROST_BRICK;f<3||f===r-1||Math.abs(p)===Math.abs(h)&&m?_=S.DARK_ABYSS_ICE:(p===0||h===0)&&f>=4&&f<=r-4&&f%3!==0&&(_=S.FROST_RUNE_GLOW),i.set(t+p,u,n+h,_)}}const l=e+r;for(const[f,u]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){const h=Math.round(f!==0&&u!==0?s*.85:s+1),p=t+f*h,c=n+u*h;i.set(p,l,c,S.DARK_ABYSS_ICE),i.set(p,l+1,c,S.GLACIER_ICE),i.set(p,l+2,c,S.GLACIER_ICE),(f===0||u===0)&&i.set(p,l+3,c,S.FROST_RUNE_GLOW)}for(let f=0;f<=o;f++){const u=f/o,h=(s+.6)*Math.pow(1-u,1.35),p=Math.ceil(h);for(let c=-p;c<=p;c++)for(let m=-p;m<=p;m++)if(Math.abs(m)+Math.abs(c)<=h*1.35+.2){const _=m===0&&c===0;i.set(t+m,l+f,n+c,_&&f%2===0?S.FROST_RUNE_GLOW:S.GLACIER_ICE)}}i.set(t,l+o+1,n,S.FROST_RUNE_GLOW),i.set(t,l+o+2,n,S.STAR_CORE)}function t0(i){for(let u=-23;u<=23;u++)for(let h=-23;h<=23;h++){const p=Math.atan2(u,h),m=21.5*(1+.14*Math.cos(p*4)),_=Math.hypot(h,u);if(_>m)continue;const g=_/m,d=Math.abs(Math.sin(h*.65)*Math.cos(u*.65))*8.5+(h%4===0&&u%4===0?3:0),v=Math.max(2,Math.round(16*Math.pow(1-g*g,1.45)+(g<.82?d:0)));for(let M=82-v;M<=82;M++){let x=S.FROST_BRICK;M===82?x=g>.88?S.DARK_ABYSS_ICE:S.FROST_BRICK:M===81&&g>.85?x=S.FROST_RUNE_GLOW:M<82-Math.floor(v*.55)?x=S.GLACIER_ICE:x=S.DARK_ABYSS_ICE,i.set(0+h,M,-82+u,x)}}Uc(i,0,66,-82,0,-1,0,11,3,!0);const r=[[-16,80,-80,-1,.55,.15,16],[-18,78,-86,-1.05,.32,-.1,13],[-15,77,-91,-.9,.12,-.25,10],[16,80,-80,1,.55,.15,16],[18,78,-86,1.05,.32,-.1,13],[15,77,-91,.9,.12,-.25,10]];for(const[u,h,p,c,m,_,g]of r)Uc(i,u,h,p,c,m,_,g,2.1,!0);const o=18;for(let u=1;u<=o;u++)for(let h=-92;h<=-72;h++)for(let p=-13;p<=13;p++){const c=p===-13||p===13,m=h===-92||h===-72;if(!c&&!m&&!(u===o))continue;let g=S.FROST_BRICK;u<=3||u===o||c&&m?g=S.DARK_ABYSS_ICE:(Math.abs(p-0)%4===0&&m||Math.abs(h- -82)%4===0&&c)&&(g=S.FROST_PILLAR),i.set(p,82+u,h,g)}for(let u=0;u<=9;u++){const h=13-u*1.3;if(h<0)break;const p=Math.round(h);for(let c=-93;c<=-71;c++)for(let m=0-p;m<=0+p;m++)(Math.abs(m-0)>=p-1||p<=1)&&i.set(m,82+o+1+u,c,p<=1&&c%2===0?S.FROST_RUNE_GLOW:S.GLACIER_ICE)}Ji(i,0,82+o,-84,4.8,17,16),Ji(i,-13,82,-72,3.8,22,14),Ji(i,13,82,-72,3.8,22,14),Ji(i,-14,82,-92,4.2,27,16),Ji(i,14,82,-92,4.2,27,16);const a=139,l=6;for(let u=0;u<360;u+=15){const h=u*Math.PI/180,p=0+Math.round(Math.cos(h)*l),c=-84+Math.round(Math.sin(h)*l);i.set(p,a,c,S.DARK_ABYSS_ICE),i.set(p,a+1,c,S.GLACIER_ICE),u%45===0&&(i.set(p,a+2,c,S.GLACIER_ICE),i.set(p,a+3,c,S.FROST_RUNE_GLOW),i.set(p,a+4,c,S.STAR_CORE))}i.fillBox(-9,83,-90,9,98,-73,S.AIR);for(let u=1;u<=10;u++){const h=Math.max(0,4-Math.floor(u*.4));for(let p=-h;p<=h;p++)i.set(0+p,82+u,-72,S.AIR),i.set(0+p,82+u,-71,S.AIR)}i.fillBox(-5,83,-71,-5,91,-71,S.FROST_PILLAR),i.fillBox(5,83,-71,5,91,-71,S.FROST_PILLAR);for(let u=0;u<=6;u++){const h=5-Math.floor(u*.8);h>=0&&(i.set(0-h,92+u,-71,S.GLACIER_ICE),i.set(0+h,92+u,-71,S.GLACIER_ICE))}i.set(0,98,-71,S.FROST_RUNE_GLOW);for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++){const p=Math.abs(h)+Math.abs(u);p<=2&&i.set(0+h,96+u,-72,p===2?S.DARK_ABYSS_ICE:S.FROST_RUNE_GLOW)}for(let u=-89;u<=-72;u++)for(let h=-2;h<=2;h++)i.set(0+h,82,u,Math.abs(h)===2?S.DARK_ABYSS_ICE:S.PLAZA_MARBLE);for(const u of[-86,-81,-76])for(const h of[-6,6])i.fillBox(h,83,u,h,96,u,S.FROST_PILLAR),i.set(h,89,u,S.FROST_RUNE_GLOW);i.fillBox(-4,83,-90,4,83,-87,S.DARK_ABYSS_ICE),i.fillBox(-3,84,-90,3,84,-88,S.FROST_BRICK),i.set(-1,85,-89,S.DARK_ABYSS_ICE),i.set(1,85,-89,S.DARK_ABYSS_ICE),i.set(0,85,-89,S.PLAZA_MARBLE),i.fillBox(-1,85,-90,1,89,-90,S.GLACIER_ICE),i.set(0,87,-90,S.FROST_RUNE_GLOW),i.set(0,90,-90,S.STAR_CORE);for(let u=-70;u<=-61;u++)for(let h=-8;h<=8;h++){const p=Math.abs(h-0)===8||u===-61;i.set(h,82,u,p?S.DARK_ABYSS_ICE:S.FROST_BRICK),p&&Math.abs(h)>2&&(h+u)%3===0&&(i.set(h,83,u,S.FROST_PILLAR),i.set(h,84,u,S.FROST_RUNE_GLOW))}for(let u=0;u<7;u++){const h=Math.round(Math.sin(u*.45)*7),p=80-u*2,c=-58+u*4;i.fillBox(h-2,p,c-1,h+2,p,c+1,S.FROST_BRICK),i.set(h,p-1,c,S.FROST_RUNE_GLOW),i.set(h-2,p+1,c,S.GLACIER_ICE),i.set(h+2,p+1,c,S.GLACIER_ICE)}const f=[[-34,90,-68],[34,90,-68],[-36,98,-90],[36,98,-90]];for(const[u,h,p]of f)for(let c=-5;c<=5;c++){const m=Math.max(0,2-Math.floor(Math.abs(c)*.45));for(let _=-m;_<=m;_++)for(let g=-m;g<=m;g++)Math.abs(g)+Math.abs(_)<=m&&i.set(u+g,h+c,p+_,Math.abs(c)<=1?S.FROST_RUNE_GLOW:S.GLACIER_ICE)}return{palaceCenter:[0+.5,94,-82+.5],crownCenter:[0+.5,a+2,-82-1.5],thronePos:[0+.5,82+3.05,-82-6.5]}}function e0(i){const o=Math.ceil(16);for(let c=-o;c<=o;c++)for(let m=-o;m<=o;m++){const _=Math.atan2(c,m),g=14*(1+.08*Math.cos(_*4+1.2)),d=Math.hypot(m,c);if(d>g)continue;const v=d/g,M=Math.max(2,Math.round(16*Math.pow(1-v*v,1.35)));for(let x=38-M;x<=38;x++){let T=S.DEEP_ROCK;x===38?T=v>.86?S.GOLD_CROWN:S.GRASS_DREAM:x>=36?T=S.DIRT_WARM:x>=38-Math.floor(M*.55)&&(T=S.CLIFF_STONE),i.set(78+m,x,22+c,T)}}for(let c=-4;c<=2;c++){const m=Math.max(0,2-Math.floor(Math.abs(c)*.6));for(let _=-m;_<=m;_++)for(let g=-m;g<=m;g++)Math.abs(g)+Math.abs(_)<=m&&i.set(78+g,22+c,22+_,S.STAR_CORE)}Ri(i,87,15,"golden",1.05),Ri(i,87,29,"golden",1);for(let c=18;c<=26;c++)for(let m=67;m<=72;m++)i.get(m,38,c)!==S.AIR&&i.set(m,38,c,S.PLAZA_MARBLE);const a=39;i.fillBox(73,a,17,83,a+1,27,S.CASTLE_BASE);for(let c=2;c<=15;c++)for(let m=-4;m<=4;m++)for(let _=-4;_<=4;_++){const g=Math.abs(_)===4,d=Math.abs(m)===4;if(!g&&!d){i.set(78+_,a+c,22+m,S.AIR);continue}if(c>=6&&c<=13&&(g&&Math.abs(m)<=2||d&&Math.abs(_)<=2)&&!(g&&d)){i.set(78+_,a+c,22+m,S.AIR);continue}let v=S.CASTLE_WALL;g&&d&&(v=S.TIMBER_OAK),(c===5||c===14||c===15)&&(v=S.GOLD_CROWN),i.set(78+_,a+c,22+m,v)}for(let c=16;c<=24;c++)for(let m=-5;m<=5;m++)for(let _=-5;_<=5;_++){const g=Math.abs(_)===5,d=Math.abs(m)===5;if(!g&&!d&&c<24)continue;let v=S.CASTLE_WALL;(g&&d||c===16||c===24)&&(v=S.GOLD_CROWN);const M=Math.hypot(g?m:_,c-20);M<=3.2&&!(g&&d)&&(v=M>=2.4?S.GOLD_CROWN:S.PLAZA_MARBLE),i.set(78+_,a+c,22+m,v)}for(let c=0;c<=10;c++){const m=Math.max(0,Math.round(5.2*(1-c/10.5)));for(let _=-m;_<=m;_++)for(let g=-m;g<=m;g++){const d=Math.abs(g)===m&&Math.abs(_)===m;i.set(78+g,a+25+c,22+_,d?S.GOLD_CROWN:S.ROOF_ROYAL_BLUE)}}i.fillBox(78,a+36,22,78,a+38,22,S.GOLD_CROWN),i.set(78,a+39,22,S.STAR_CORE);const l=-18,f=40,u=12;for(let c=36;c<=46;c++)for(let m=-25;m<=12;m++)i.get(m,10,c)!==S.AIR&&i.fillBox(m,10,c,m,u,c,S.PLAZA_MARBLE);for(let c=1;c<=14;c++){const m=Math.round((14-c)*.45);for(const _ of[f-2,f+2])i.set(l-m,u+c,_,c===14?S.GOLD_CROWN:S.CASTLE_PILLAR),i.set(l+m,u+c,_,c===14?S.GOLD_CROWN:S.CASTLE_PILLAR)}const h=-3,p=40;for(let c=-4;c<=4;c++)for(let m=-4;m<=4;m++){const _=Math.hypot(m,c);_<=4.2&&i.set(h+m,u+1,p+c,_>=3.3?S.GOLD_CROWN:S.PLAZA_MARBLE)}for(const c of[5,12])for(const m of[45,49])i.fillBox(c,u,m,c,17,m,S.CASTLE_PILLAR);i.fillBox(5,17,45,12,17,49,S.PLANKS_WARM),i.set(5,18,45,S.LANTERN_GLOW),i.set(12,18,45,S.LANTERN_GLOW);for(let c=0;c<5;c++)i.fillBox(7,u+1,40+c,10,u+1+c,40+c,S.PLANKS_WARM);return{clockTowerCenter:[78,a,22],clockPendulumPivot:[78,a+14,22],ferrisHub:[l,u+15,f],carouselCenter:[h,u+2,p]}}function n0(i,t){return Math.sin(i*.085)*Math.cos(t*.085)*.5+Math.sin(i*.19+t*.15)*.3+Math.cos(i*.33-t*.27)*.2}function xi(i,t,e,n,s,r=1.6){const o=Math.ceil(Math.hypot(n-t,s-e)*1.5);for(let a=0;a<=o;a++){const l=a/o,f=t+(n-t)*l,u=e+(s-e)*l,h=Math.ceil(r);for(let p=-h;p<=h;p++)for(let c=-h;c<=h;c++)if(c*c+p*p<=r*r){const m=Math.round(f+c),_=Math.round(u+p),g=i.getSurfaceY(m,_,30,8),d=i.get(m,g,_);(d===S.GRASS_DREAM||d===S.GRASS_SAKURA||d===S.SAND_PEARL)&&i.set(m,g,_,S.COBBLE_PATH)}}}function i0(i){const t=[];for(let h=-62;h<=54;h++)for(let p=-56;p<=54;p++){const c=Math.atan2(h+4,p),_=56*(1+.1*Math.sin(c*3+.6)+.07*Math.cos(c*5-.4)+(h<-20?.08:0)),g=Math.hypot(p,(h+4)*.94);if(g>_)continue;const d=g/_;let v=12+n0(p,h)*1.2;if(h<-10){const D=Math.min(1,(-10-h)/10),B=D*D*(3-2*D)*9;v+=B}const M=Math.hypot(p+28,h+46);if(M<19){const D=1-M/19;v+=Math.pow(D,1.55)*21}const x=Math.hypot(p-36,h-18);if(x<17){const D=1-x/17;v+=D*D*4.2}const T=Math.hypot(p+38,h-12);if(T<18){const D=1-T/18;v+=D*2.2}Math.hypot(p,h-15)<12&&(v=12);const b=Math.round(v),R=Math.abs(Math.sin(p*.28+1.3)*Math.cos(h*.28-.7))*7.5,L=Math.max(3,Math.round(27*Math.pow(1-d*d,1.28)+(d<.8?R:0))),E=12-L;let y=S.GRASS_DREAM;b>=33?y=S.SNOW_PURE:b>=29?y=(p+h)%2===0?S.SNOW_PURE:S.CLIFF_STONE:p<-20&&h>-12&&h<34&&(y=S.GRASS_SAKURA);for(let D=E;D<=b;D++){let B=S.DEEP_ROCK;D===b?B=y:D>=b-2&&b<30?B=S.DIRT_WARM:D>=E+Math.floor(L*.42)&&(B=S.CLIFF_STONE),i.set(p,D,h,B)}if(d>.88&&Math.abs(p*13+h*7)%9===0){const D=3+Math.abs(p+h)%6;for(let B=1;B<=D;B++)i.setIfAir(p,b-B,h,S.LEAVES_EMERALD)}}for(let h=-17;h<=-13;h++)for(let p=-21;p<=22;p++)Math.abs(p)<=3||(i.fillBox(p,18,h,p,18,h,S.SAND_PEARL),i.fillBox(p,19,h,p,20,h,S.WATER),i.fillBox(p,21,h,p,24,h,S.AIR));for(let h=-17;h<=-14;h++)for(let p=-3;p<=3;p++)i.set(p,18,h,S.SAND_PEARL),i.set(p,19,h,S.WATER),i.set(p,20,h,S.WATER);for(let h=36;h>=21;h--){const p=-34+Math.floor((36-h)*.45);for(let c=-24;c<=-22;c++)i.set(c,h,p,h%2===0?S.WATERFALL_FOAM:S.WATER),i.set(c,h+1,p+1,S.AIR)}for(let h=-27;h<=-16;h++)for(let p=-24;p<=-21;p++)i.set(p,19,h,S.SAND_PEARL),i.set(p,20,h,S.WATER),i.fillBox(p,21,h,p,26,h,S.AIR);t.push([-23,21,-26]);for(let h=-13;h<=-5;h++){const p=Math.max(11,20-(h+13));for(let c=19;c<=22;c++)i.set(c,p-1,h,S.CLIFF_STONE),i.set(c,p,h,h%2===0?S.WATERFALL_FOAM:S.WATER),i.fillBox(c,p+1,h,c,p+5,h,S.AIR)}t.push([20.5,12,-5]);let n=48,s=18;for(let h=-5;h<=53;h++){const p=Math.round(20+Math.sin(h*.11)*2.2);if(h>38&&i.get(p,10,h)===S.AIR){n=h-1,s=p;break}for(let c=-2;c<=2;c++){const m=p+c;Math.abs(c)===2?i.get(m,11,h)!==S.AIR&&i.set(m,11,h,S.SAND_PEARL):(i.set(m,9,h,S.SAND_PEARL),i.set(m,10,h,S.WATER),i.set(m,11,h,S.WATER),i.fillBox(m,12,h,m,16,h,S.AIR))}}for(let h=11;h>=-17;h--)for(let p=-1;p<=1;p++){const c=(h+Math.abs(p))%3===0?S.WATERFALL_FOAM:S.WATER;i.set(s+p,h,n+1,c)}t.push([s+.5,11.2,n+1.2]),t.push([s+.5,-16.5,n+1.2]),xi(i,0,-2,0,8,2.2),xi(i,8,17,15,18,1.8),xi(i,25,18,32,18,1.8),xi(i,28,16,33,-12,1.5),xi(i,-8,15,-33,12,1.8),xi(i,0,23,-4,36,1.6);const r=[];Zg(i,r);const o=Jg(i),a=Qg(i,t),l=t0(i),f=e0(i),u={panorama:{label:"云端全景",position:new C(64,46,86),target:new C(0,38,-24)},frost:{label:"凌霄冰宫",position:new C(34,108,-32),target:new C(0,98,-82)},clockwork:{label:"齿轮钟塔",position:new C(50,56,48),target:new C(78,54,22)},amusement:{label:"星梦乐园",position:new C(-12,24,68),target:new C(-12,22,40)},celestial:{label:"冰火苍穹",position:new C(18,22,36),target:new C(8,78,-58)},castle:{label:"星冠圣城",position:new C(24,44,10),target:new C(0,38,-36)},plaza:{label:"星泉小镇",position:new C(-22,26,42),target:new C(0,15,14)},windmill:{label:"花海风车",position:new C(14,28,42),target:new C(34,22,18)},rainbow:{label:"彩虹星岛",position:new C(44,38,26),target:new C(54,28,-12)},sakura:{label:"樱花神木",position:new C(-18,26,34),target:new C(-38,22,12)}};return{flags:r,town:o,islands:a,frost:l,wonders:f,landmarks:u}}const Qi={dawn:{topColor:new ot("#3b4294"),midColor:new ot("#a673d8"),horizonColor:new ot("#ffc2d6"),bottomColor:new ot("#5a4bc2"),fogColor:new ot("#eab8d5"),fogDensity:.002,sunColor:new ot("#ffd6b8"),sunIntensity:2.4,sunPos:new C(82,62,48),hemiSky:new ot("#ffd9ec"),hemiGround:new ot("#7a68a6"),hemiIntensity:1.08,windowGlow:.65,nightLightIntensity:.85,starOpacity:.42,auroraOpacity:.68,ringOpacity:.78,bloomStrength:.38},day:{topColor:new ot("#2574e6"),midColor:new ot("#66beff"),horizonColor:new ot("#d6f2ff"),bottomColor:new ot("#8ecae6"),fogColor:new ot("#c8ecff"),fogDensity:.0016,sunColor:new ot("#fff7e0"),sunIntensity:2.8,sunPos:new C(68,98,54),hemiSky:new ot("#e3f6ff"),hemiGround:new ot("#7aa29e"),hemiIntensity:1.18,windowGlow:.25,nightLightIntensity:.25,starOpacity:.08,auroraOpacity:.26,ringOpacity:.52,bloomStrength:.25},sunset:{topColor:new ot("#241c54"),midColor:new ot("#9647db"),horizonColor:new ot("#ff9770"),bottomColor:new ot("#422463"),fogColor:new ot("#e08b8b"),fogDensity:.0022,sunColor:new ot("#ff9e5e"),sunIntensity:2.3,sunPos:new C(-92,42,44),hemiSky:new ot("#ffb599"),hemiGround:new ot("#5a3e75"),hemiIntensity:.95,windowGlow:1.18,nightLightIntensity:1.45,starOpacity:.62,auroraOpacity:.76,ringOpacity:.85,bloomStrength:.44},night:{topColor:new ot("#070920"),midColor:new ot("#191d52"),horizonColor:new ot("#372b6b"),bottomColor:new ot("#0a0c26"),fogColor:new ot("#221c47"),fogDensity:.0023,sunColor:new ot("#9bbcff"),sunIntensity:1.05,sunPos:new C(-60,86,-42),hemiSky:new ot("#6f85de"),hemiGround:new ot("#28224a"),hemiIntensity:.72,windowGlow:1.78,nightLightIntensity:2.5,starOpacity:1,auroraOpacity:.96,ringOpacity:.98,bloomStrength:.56}},Kr=["dawn","day","sunset","night"];class s0{constructor(t,e){tt(this,"currentPreset","dawn");tt(this,"autoCycle",!1);tt(this,"cycleTimer",0);tt(this,"skyUniforms");tt(this,"auroraUniforms");tt(this,"sunLight");tt(this,"hemiLight");tt(this,"fog");tt(this,"starsMat");tt(this,"starsPoints");tt(this,"celestialBody");tt(this,"nightPointLights",[]);tt(this,"celestialRingGroup",new Ut);tt(this,"ringCrystalMat");tt(this,"companionPlanet",new Ut);tt(this,"meteors",[]);tt(this,"curWindowGlow",Qi.dawn.windowGlow);tt(this,"curNightLight",Qi.dawn.nightLightIntensity);tt(this,"curBloomStrength",Qi.dawn.bloomStrength);this.scene=t,this.world=e;const n=Qi.dawn;this.fog=new Qo(n.fogColor.getHex(),n.fogDensity),this.scene.fog=this.fog,this.skyUniforms={uTopColor:{value:n.topColor.clone()},uMidColor:{value:n.midColor.clone()},uHorizonColor:{value:n.horizonColor.clone()},uBottomColor:{value:n.bottomColor.clone()}};const s=new sa(560,36,24),r=new Re({uniforms:this.skyUniforms,side:Ne,depthWrite:!1,vertexShader:`
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 uTopColor;
        uniform vec3 uMidColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uBottomColor;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos).y;
          vec3 col;
          if (h >= 0.0) {
            float t1 = smoothstep(0.0, 0.28, h);
            float t2 = smoothstep(0.22, 0.88, h);
            col = mix(uHorizonColor, uMidColor, t1);
            col = mix(col, uTopColor, t2);
          } else {
            col = mix(uHorizonColor, uBottomColor, smoothstep(0.0, -0.45, h));
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `}),o=new W(s,r);this.scene.add(o);const a=820,l=new Float32Array(a*3),f=new Float32Array(a*3),u=[new ot("#ffffff"),new ot("#ffe4b5"),new ot("#ffc6ff"),new ot("#80f0ff")];for(let g=0;g<a;g++){const d=Math.random()*Math.PI*2,v=Math.acos(.05+Math.random()*.95),M=420+Math.random()*60;l[g*3]=M*Math.sin(v)*Math.cos(d),l[g*3+1]=M*Math.cos(v),l[g*3+2]=M*Math.sin(v)*Math.sin(d);const x=u[g%u.length];f[g*3]=x.r,f[g*3+1]=x.g,f[g*3+2]=x.b}const h=new ye;h.setAttribute("position",new Ve(l,3)),h.setAttribute("color",new Ve(f,3)),this.starsMat=new xl({size:3.6,vertexColors:!0,transparent:!0,opacity:n.starOpacity,fog:!1,depthWrite:!1}),this.starsPoints=new Ym(h,this.starsMat),this.scene.add(this.starsPoints),this.auroraUniforms={uTime:{value:0},uOpacity:{value:n.auroraOpacity}},this.buildPixelAuroraCurtains(),this.ringCrystalMat=new Qt({color:"#ffffff",transparent:!0,opacity:n.ringOpacity,fog:!1}),this.buildCelestialCrystalRing(),this.buildCompanionVoxelPlanet(),this.buildShootingMeteors();const p=new Z(20,20,20),c=new Qt({color:"#fff4cc",fog:!1});this.celestialBody=new W(p,c),this.celestialBody.position.copy(n.sunPos).multiplyScalar(3.4),this.scene.add(this.celestialBody),this.sunLight=new pg(n.sunColor,n.sunIntensity),this.sunLight.position.copy(n.sunPos),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048);const m=115;this.sunLight.shadow.camera.left=-m,this.sunLight.shadow.camera.right=m,this.sunLight.shadow.camera.top=m+30,this.sunLight.shadow.camera.bottom=-m,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=340,this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.025,this.scene.add(this.sunLight),this.hemiLight=new hg(n.hemiSky,n.hemiGround,n.hemiIntensity),this.scene.add(this.hemiLight);const _=[[0,19,15,"#ffbe6b",42],[0,32,-24,"#ffa8d8",48],[-38,24,12,"#ff8cc6",38],[64,33,-12,"#c77dff",42],[0,-16,-8,"#4ce8f5",45],[0,96,-78,"#66f2ff",72]];for(const[g,d,v,M,x]of _){const T=new fg(M,n.nightLightIntensity,x,1.35);T.position.set(g,d,v),this.scene.add(T),this.nightPointLights.push(T)}}buildPixelAuroraCurtains(){const t=new Re({uniforms:this.auroraUniforms,transparent:!0,depthWrite:!1,side:qe,blending:rs,vertexShader:`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          // 蜿蜒飘舞的极光丝带波动
          float wave = sin(uv.x * 9.0 + uTime * 0.55) * 14.0
                     + cos(uv.x * 17.0 - uTime * 0.8) * 6.0;
          pos.z += wave;
          pos.y += sin(uv.x * 6.0 + uTime * 0.4) * 5.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          // 像素艺术量化网格：将极光切分为清晰的像素光柱！
          vec2 pUv = floor(vUv * vec2(110.0, 22.0)) / vec2(110.0, 22.0);

          float streak = 0.55 + 0.45 * sin(pUv.x * 68.0 + uTime * 1.1)
                              * cos(pUv.x * 31.0 - uTime * 0.7);
          // 上下边缘柔和消隐，底部稍亮如极光帘幕下沿
          float vMask = smoothstep(0.02, 0.24, pUv.y) * smoothstep(0.98, 0.32, pUv.y);
          // 左右两端渐隐融入夜空
          float hMask = smoothstep(0.0, 0.14, pUv.x) * smoothstep(1.0, 0.86, pUv.x);

          vec3 cyanIce = vec3(0.32, 0.96, 1.0);
          vec3 emerald = vec3(0.38, 1.0, 0.76);
          vec3 violet  = vec3(0.72, 0.48, 1.0);
          vec3 sakura  = vec3(1.0, 0.52, 0.82);

          vec3 col = mix(cyanIce, emerald, smoothstep(0.1, 0.4, pUv.y));
          col = mix(col, violet, smoothstep(0.38, 0.72, pUv.y));
          col = mix(col, sakura, smoothstep(0.7, 0.95, pUv.y));

          float alpha = streak * vMask * hMask * uOpacity * 0.72;
          if (alpha < 0.02) discard;
          gl_FragColor = vec4(col, alpha);
        }
      `}),e=new W(new Jn(360,68,90,12),t);e.position.set(0,142,-165),e.rotation.x=.18,this.scene.add(e);const n=new W(new Jn(310,54,76,10),t);n.position.set(36,168,-205),n.rotation.y=-.22,n.rotation.x=.24,this.scene.add(n)}buildCelestialCrystalRing(){const e=new Z(2.6,2.6,2.6),n=new er(e,this.ringCrystalMat,440),s=new _e,r=[new ot("#80f5ff"),new ot("#ffd97d"),new ot("#d8a8ff"),new ot("#ffffff"),new ot("#ff9ed2")];for(let f=0;f<440;f++){const u=f/440*Math.PI*2+Math.random()*.04,h=f%3===0?318+Math.random()*14:286+Math.random()*20,p=(Math.random()-.5)*7.5;s.position.set(Math.cos(u)*h,p,Math.sin(u)*h),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);const c=.45+Math.random()*1.15;s.scale.setScalar(c),s.updateMatrix(),n.setMatrixAt(f,s.matrix),n.setColorAt(f,r[f%r.length])}n.instanceColor.needsUpdate=!0,this.celestialRingGroup.add(n);const o=new Qt({color:"#9beeff",transparent:!0,opacity:.24,side:qe,fog:!1,depthWrite:!1}),a=new W(new rr(288,291,64),o);a.rotation.x=Math.PI/2;const l=new W(new rr(320,322.5,64),o);l.rotation.x=Math.PI/2,this.celestialRingGroup.add(a,l),this.celestialRingGroup.position.set(0,36,-30),this.celestialRingGroup.rotation.z=.46,this.celestialRingGroup.rotation.x=.28,this.scene.add(this.celestialRingGroup)}buildCompanionVoxelPlanet(){const t=new Qt({color:"#a8dcff",transparent:!0,opacity:.85,fog:!1}),e=new Qt({color:"#6f7ee6",transparent:!0,opacity:.82,fog:!1}),n=new Qt({color:"#ffe3a3",transparent:!0,opacity:.72,fog:!1});[[14,4,-12],[22,5,-7.5],[26,6,-2],[26,6,4],[22,5,9.5],[14,4,14]].forEach(([o,a,l],f)=>{const u=new W(new Z(o,a,o),f<2?e:t);u.position.y=l,this.companionPlanet.add(u)});const r=new Ut;for(let o=0;o<28;o++){const a=o/28*Math.PI*2,l=new W(new Z(3.4,1.2,3.4),n);l.position.set(Math.cos(a)*38,0,Math.sin(a)*38),l.rotation.y=-a,r.add(l)}r.rotation.z=.38,r.rotation.x=.25,this.companionPlanet.add(r),this.companionPlanet.position.set(-165,178,-240),this.scene.add(this.companionPlanet)}buildShootingMeteors(){const t=new Qt({color:"#ffffff",fog:!1}),e=["#7af5ff","#ff85d0","#ffe066","#b888ff","#72ffbe"];for(let n=0;n<25;n++){const s=new Qt({color:e[n%e.length],transparent:!0,opacity:.78,fog:!1}),r=new Ut,o=new W(new Z(2,2,2),t);r.add(o);for(let a=1;a<=5;a++){const l=1.6*(1-a/6.5),f=new W(new Z(l,l,l*2.5),s);f.position.z=-a*3.4,r.add(f)}r.visible=!1,this.scene.add(r),this.meteors.push({group:r,vel:new C,age:0,maxAge:1.8,cooldown:n<3?1.5+n*3.2:1/0,active:!1})}}summonMeteorShower(){this.auroraUniforms.uOpacity.value=1.15;const t=Math.random()>.5?1:-1;this.meteors.forEach((e,n)=>{e.active=!0,e.age=-Math.random()*.65,e.maxAge=1.7+Math.random()*.9,e.group.position.set(-210+Math.random()*420,135+Math.random()*85,-210+Math.random()*210),e.vel.set(t*(75+Math.random()*40),-32-Math.random()*16,24+Math.random()*24),e.group.lookAt(e.group.position.clone().add(e.vel)),e.group.visible=n>=0})}setPreset(t){this.currentPreset=t}update(t,e){if(this.autoCycle&&(this.cycleTimer+=t,this.cycleTimer>=16)){this.cycleTimer=0;const r=(Kr.indexOf(this.currentPreset)+1)%Kr.length;this.currentPreset=Kr[r],window.dispatchEvent(new CustomEvent("kingdom-preset-changed",{detail:this.currentPreset}))}const n=Qi[this.currentPreset],s=Math.min(1,t*2.2);this.skyUniforms.uTopColor.value.lerp(n.topColor,s),this.skyUniforms.uMidColor.value.lerp(n.midColor,s),this.skyUniforms.uHorizonColor.value.lerp(n.horizonColor,s),this.skyUniforms.uBottomColor.value.lerp(n.bottomColor,s),this.fog.color.lerp(n.fogColor,s),this.fog.density=be.lerp(this.fog.density,n.fogDensity,s),this.sunLight.color.lerp(n.sunColor,s),this.sunLight.intensity=be.lerp(this.sunLight.intensity,n.sunIntensity,s),this.sunLight.position.lerp(n.sunPos,s),this.celestialBody.position.copy(this.sunLight.position).multiplyScalar(3.4),this.celestialBody.rotation.y=e*.18,this.celestialBody.rotation.x=e*.11,this.celestialBody.material.color.copy(this.sunLight.color),this.hemiLight.color.lerp(n.hemiSky,s),this.hemiLight.groundColor.lerp(n.hemiGround,s),this.hemiLight.intensity=be.lerp(this.hemiLight.intensity,n.hemiIntensity,s),this.starsMat.opacity=be.lerp(this.starsMat.opacity,n.starOpacity,s),this.starsPoints.rotation.y=e*.008,this.auroraUniforms.uTime.value=e,this.auroraUniforms.uOpacity.value=be.lerp(this.auroraUniforms.uOpacity.value,n.auroraOpacity,s),this.ringCrystalMat.opacity=be.lerp(this.ringCrystalMat.opacity,n.ringOpacity,s),this.celestialRingGroup.rotation.y=e*.025,this.companionPlanet.rotation.y=e*.05;for(let r=0;r<this.meteors.length;r++){const o=this.meteors[r];if(o.active){if(o.age+=t,o.age<0){o.group.visible=!1;continue}o.group.visible=!0,o.group.position.addScaledVector(o.vel,t);const a=Math.sin(o.age/o.maxAge*Math.PI);o.group.scale.setScalar(Math.max(.05,a)),o.age>=o.maxAge&&(o.active=!1,o.group.visible=!1,o.cooldown=r<3?2.6+Math.random()*4.5:1/0)}else if(o.cooldown-=t,o.cooldown<=0){o.active=!0,o.age=0,o.maxAge=1.6+Math.random()*.8;const a=-180+Math.random()*360,l=145+Math.random()*65,f=-190+Math.random()*140;o.group.position.set(a,l,f),o.vel.set((Math.random()>.5?1:-1)*(68+Math.random()*35),-26-Math.random()*14,20+Math.random()*25),o.group.lookAt(o.group.position.clone().add(o.vel)),o.group.visible=!0}}this.curWindowGlow=be.lerp(this.curWindowGlow,n.windowGlow,s),this.world.materials.night_window.emissiveIntensity=this.curWindowGlow,this.curNightLight=be.lerp(this.curNightLight,n.nightLightIntensity,s);for(let r=0;r<this.nightPointLights.length;r++){const o=r===4||r===5?Math.max(1.35,this.curNightLight):this.curNightLight;this.nightPointLights[r].intensity=o}this.curBloomStrength=be.lerp(this.curBloomStrength,n.bloomStrength,s)}}class r0{constructor(t,e){tt(this,"group",new Ut);tt(this,"windmillBlades",new Ut);tt(this,"astrolabeRing1");tt(this,"astrolabeRing2");tt(this,"astrolabeCore");tt(this,"flags",[]);tt(this,"clouds",[]);tt(this,"balloons",[]);tt(this,"airship");tt(this,"airshipPropeller");tt(this,"petalMesh");tt(this,"petalData",[]);tt(this,"splashMesh");tt(this,"splashData",[]);tt(this,"smokePuffs",[]);tt(this,"lanterns",[]);tt(this,"fireworks",[]);tt(this,"villagers",[]);tt(this,"dragonSegments",[]);tt(this,"dragonLeftWing");tt(this,"dragonRightWing");tt(this,"skyGalleon");tt(this,"galleonOars",[]);tt(this,"sharedBox",new Z(1,1,1));tt(this,"dummy",new _e);this.world=t,this.meta=e,this.buildWindmillRotor(),this.buildObservatoryAstrolabe(),this.buildCastleFlags(),this.buildVoxelCloudSea(),this.buildHotAirBalloonsAndAirship(),this.buildCelestialFrostDragon(),this.buildGrandSkyGalleon(),this.buildSakuraAndFireflyParticles(),this.buildWaterSplashes(),this.buildSmokeSystem(),this.buildCuteVillagers()}buildWindmillRotor(){const[t,e,n]=this.meta.town.windmillHub;this.windmillBlades.position.set(t,e,n);const s=new wt({color:"#784e34",roughness:.85}),r=new wt({color:"#fffdf9",roughness:.7}),o=new wt({color:"#ffd166",roughness:.4}),a=new W(new Z(1.1,1.4,1.4),o);this.windmillBlades.add(a);for(let l=0;l<4;l++){const f=new Ut;f.rotation.x=l*Math.PI/2;const u=new W(new Z(.45,9.5,.45),s);u.position.set(-.2,4.8,0),u.castShadow=!0,f.add(u);const h=new W(new Z(.22,7.6,2.1),r);h.position.set(-.35,5.4,1.15),h.castShadow=!0,f.add(h),this.windmillBlades.add(f)}this.group.add(this.windmillBlades)}buildObservatoryAstrolabe(){const[t,e,n]=this.meta.islands.observatoryCenter,s=new Ut;s.position.set(t,e,n);const r=new wt({color:"#ffe28a",emissive:"#ffbe42",emissiveIntensity:.8,roughness:.25,metalness:.6}),o=new wt({color:"#e0aaff",emissive:"#c77dff",emissiveIntensity:1.5,roughness:.15});this.astrolabeRing1=new W(new ls(3.4,.22,6,8),r),this.astrolabeRing2=new W(new ls(2.4,.18,6,8),r),this.astrolabeCore=new W(new Ni(1.15,0),o),s.add(this.astrolabeRing1,this.astrolabeRing2,this.astrolabeCore),this.group.add(s)}buildCastleFlags(){const t=new wt({color:"#ffd166",roughness:.4});for(let e=0;e<this.meta.flags.length;e++){const n=this.meta.flags[e],s=new Ut;s.position.set(n.x+.5,n.y,n.z+.5),s.scale.setScalar(n.scale);const r=new W(new Z(.18,2.8,.18),t);r.position.y=1.4,s.add(r);const o=new Ut;o.position.set(0,2.3,0);const a=new wt({color:n.color,emissive:n.color,emissiveIntensity:.22,roughness:.6}),l=new W(new Z(1.2,.85,.14),a);l.position.set(.65,0,0);const f=new W(new Z(1,.65,.14),a);f.position.set(1.7,-.05,0);const u=new W(new Z(.7,.42,.14),a);u.position.set(2.5,-.1,0),o.add(l,f,u),s.add(o),this.group.add(s),this.flags.push({pivot:o,phase:e*1.1})}}buildVoxelCloudSea(){const t=new wt({color:"#ffffff",emissive:"#f3e8ff",emissiveIntensity:.18,roughness:.95,transparent:!0,opacity:.9});for(let e=0;e<36;e++){const n=new Ut,s=-130+e*23%260;let r,o;e<16?(r=-95+e*13%185,o=-26-e%4*4.5):e<26?(r=-126-e%5*14,o=68+e%5*11):(r=76+e%4*14,o=12+e%4*8);const a=8+e%4*3.5,l=5+e%3*2.2,f=new W(new Z(a,2.4,l),t),u=new W(new Z(a*.62,2,l*.68),t);u.position.set((e%2===0?1:-1)*1.1,1.6,0);const h=new W(new Z(a*.45,1.6,l*.5),t);h.position.set(-a*.35,-.2,l*.25),n.add(f,u,h),n.position.set(s,o,r),this.group.add(n),this.clouds.push({group:n,speed:1.2+e%4*.45,baseY:o,phase:e*.7})}}buildHotAirBalloonsAndAirship(){const t=[["#ff85c0","#fff0f6",112,48,.065],["#69c0ff","#fffbe6",124,38,-.055],["#b37feb","#ffd666",105,62,.075]],e=new wt({color:"#8c5a3c",roughness:.85}),n=new Qt({color:"#ffbe55"});t.forEach(([h,p,c,m,_],g)=>{const d=new Ut,v=new wt({color:h,roughness:.65}),M=new wt({color:p,roughness:.65}),x=[[2.6,1.2,0,v],[4.2,1.6,1.4,M],[5,2,3.2,v],[4.4,1.6,5,M],[2.8,1,6.3,v]];for(const[R,L,E,y]of x){const D=new W(new Z(R,L,R),y);D.position.y=E,D.castShadow=!0,d.add(D)}const T=new W(new Z(.7,.8,.7),n);T.position.y=-1.1;const b=new W(new Z(1.8,1.3,1.8),e);b.position.y=-2.6,d.add(T,b),this.group.add(d),this.balloons.push({group:d,orbitR:c,orbitY:m,speed:_,angle:g*2.1})}),this.airship=new Ut;const s=new wt({color:"#fff8eb",roughness:.6}),r=new wt({color:"#4d88e5",roughness:.5}),o=new wt({color:"#ffd166",roughness:.35}),a=new W(new Z(3.8,3.4,9.2),s);a.position.y=3.2;const l=new W(new Z(4,.8,9.4),r);l.position.y=3.2;const f=new W(new Z(2,1.6,5.2),e);f.position.y=0;const u=new W(new Z(.3,2.2,2.6),r);u.position.set(0,5.4,-3.2),this.airshipPropeller=new W(new Z(2.8,.35,.25),o),this.airshipPropeller.position.set(0,.2,-2.8),this.airship.add(a,l,f,u,this.airshipPropeller),this.group.add(this.airship)}buildSakuraAndFireflyParticles(){const e=new Z(.32,.12,.32),n=new Qt({color:"#ffffff",transparent:!0,opacity:.92});this.petalMesh=new er(e,n,220),this.petalMesh.instanceMatrix.setUsage(ya);const s=new ot("#ffa6cc"),r=new ot("#ffe0ef"),o=new ot("#ffe875");for(let a=0;a<220;a++){const l=a<140,f=l?-48+Math.random()*96:-55+Math.random()*115,u=13+Math.random()*45,h=-52+Math.random()*100;this.petalData.push({x:f,y:u,z:h,vy:l?-1.4-Math.random()*1.1:.35+Math.random()*.4,sway:Math.random()*Math.PI*2,rot:Math.random()*Math.PI}),this.petalMesh.setColorAt(a,l?a%2===0?s:r:o)}this.petalMesh.instanceColor.needsUpdate=!0,this.group.add(this.petalMesh)}buildWaterSplashes(){const t=this.meta.islands.waterfallEmitters,e=this.meta.town.fountainTop,n=t.length*18+28,s=new Z(.48,.48,.48),r=new Qt({color:"#e6f9ff",transparent:!0,opacity:.82});this.splashMesh=new er(s,r,n),this.splashMesh.instanceMatrix.setUsage(ya);for(const[a,l,f]of t)for(let u=0;u<18;u++){const h=new C(a,l,f);this.splashData.push({origin:h,pos:h.clone(),vel:new C((Math.random()-.5)*3.2,1.8+Math.random()*3,(Math.random()-.5)*3.2),age:Math.random()*1.2,life:.9+Math.random()*.6,isFountain:!1})}const o=new C(e[0],e[1],e[2]);for(let a=0;a<28;a++){const l=a/28*Math.PI*2;this.splashData.push({origin:o,pos:o.clone(),vel:new C(Math.cos(l)*2.2,4.6,Math.sin(l)*2.2),age:Math.random()*1.1,life:1.1,isFountain:!0})}this.group.add(this.splashMesh)}buildSmokeSystem(){const t=new Qt({color:"#fff9fc",transparent:!0,opacity:.65});for(const[e,n,s]of this.meta.town.chimneys)for(let r=0;r<4;r++){const o=new W(this.sharedBox,t),a=new C(e,n,s);o.position.copy(a),this.group.add(o),this.smokePuffs.push({mesh:o,origin:a,age:r*.9,life:3.6,driftX:.5+Math.random()*.3,driftZ:-.2+Math.random()*.4})}}buildCuteVillagers(){[[0,15,6.2,"#ff85c0","#ffe58f","👑 星泉小公主 · 艾莉亚",["欢迎来到星冠云国！抬头看北边九霄上的凌霄冰霜神殿，入夜后极光超美哦！","去南岸可以实地坐上霓虹摩天轮和旋转木马，还能在月台搭乘云海银河小火车呢！","漫步时按 [F] 键挥动星辉魔杖能发射魔法星弹，按 [V] 键还能切换第一/第三人称哟～"]],[0,15,7,"#4d88e5","#ffd166","🛡️ 皇家卫兵队长 · 雷欧",["向您致敬，旅者！顺着北面的汉白玉宫灯大阶梯拾级而上，便是星冠皇家圣城！","广场东侧设有发光的「星界传送阵」，走过去按 [E] 就能瞬间飞抵九霄凌霄冰宫！","双击空格键可以开启仙灵御风飞行，整座天空群岛任您遨游！"]],[-12,14,4,"#73d13d","#ffadd2","🌸 花语小精灵 · 露露",["西边森林里的千年绯樱神木藏着花仙子的祝福，快去树下按 [E] 唤起漫天樱吹雪吧！","你听见天空巨鲸的歌声了吗？西南云海里还有一闪一闪的荧光水母群呢～"]],[28,18,3.8,"#b37feb","#bae7ff","🔮 星象见习法师 · 梅林",["看见东南天际那座黄金星晷钟塔了吗？三枚大齿轮可是按真实齿数比精确咬合转动的！","跨过彩虹星桥就能抵达紫晶星象台，在那里召唤流星雨会引起奥术大法阵共鸣哦！"]],[-33,12,4.2,"#69e0ff","#ffffff","💧 樱花果冻史莱姆",["噗噜噗噜～✨（开心地蹦了两下，往你身上撒了一把幸运星尘！）","咕叽咕叽～🌸（指了指头顶飘落的粉色樱花瓣，露出治愈的微笑！）"]]].forEach(([e,n,s,r,o,a,l],f)=>{const u=new Ut,h=new wt({color:r,roughness:.7}),p=new wt({color:"#ffe0c8",roughness:.7}),c=new wt({color:o,roughness:.5}),m=new W(new Z(.65,.75,.5),h);m.position.y=.4;const _=new W(new Z(.62,.62,.62),p);_.position.y=1.08;const g=new W(new Z(.74,.32,.74),c);g.position.y=1.5,m.castShadow=!0,_.castShadow=!0,u.add(m,_,g),this.group.add(u),this.villagers.push({group:u,name:a,dialogues:l,talkCursor:0,centerX:e,centerZ:n,radius:s,angle:f*1.4,speed:(f%2===0?1:-1)*(.42+f*.05),hopOffset:f*.9,greetTimer:0,greetTarget:new C})})}interactWithVillager(t,e){const n=this.villagers[t];n.greetTimer=4.5,n.greetTarget.copy(e);const s=n.dialogues[n.talkCursor%n.dialogues.length];n.talkCursor++;const r=n.group.position.clone();return r.y+=2.2,this.spawnMiniSparkles(r,"#ffe382",14),{name:n.name,line:s}}spawnMiniSparkles(t,e,n=24){const s=new Qt({color:e}),r=new Qt({color:"#ffffff"});for(let o=0;o<n;o++){const a=new W(this.sharedBox,o%2===0?s:r);a.scale.setScalar(.32),a.position.copy(t).add(new C((Math.random()-.5)*3,(Math.random()-.5)*2,(Math.random()-.5)*3));const l=new C((Math.random()-.5)*6.5,2.5+Math.random()*5.5,(Math.random()-.5)*6.5);this.group.add(a),this.fireworks.push({mesh:a,vel:l,age:0,maxAge:1.2+Math.random()*.5})}}launchFirework(t){const e=t??new C((Math.random()-.5)*44,46+Math.random()*18,-28+Math.random()*44),n=["#ff7eb9","#ffd166","#69e0ff","#b784f7","#72efdd","#ff9770"],s=n[Math.floor(Math.random()*n.length)],r=n[Math.floor(Math.random()*n.length)],o=new Qt({color:s}),a=new Qt({color:r}),l=46;for(let f=0;f<l;f++){const u=new W(this.sharedBox,f%2===0?o:a);u.scale.setScalar(.55),u.position.copy(e);const h=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1),c=8+Math.random()*9,m=new C(c*Math.sin(p)*Math.cos(h),c*Math.cos(p),c*Math.sin(p)*Math.sin(h));this.group.add(u),this.fireworks.push({mesh:u,vel:m,age:0,maxAge:1.5+Math.random()*.6})}}releaseSkyLanterns(t=3){const e=new wt({color:"#ffb76b",emissive:"#ff9e44",emissiveIntensity:1.6,roughness:.4}),n=new Qt({color:"#fff8cc"});for(let s=0;s<t;s++){const r=new Ut,o=new W(new Z(.95,1.25,.95),e),a=new W(new Z(.45,.45,.45),n);a.position.y=-.45,r.add(o,a),r.position.set((Math.random()-.5)*28,14+Math.random()*4,6+Math.random()*20),this.group.add(r),this.lanterns.push({group:r,velY:2.3+Math.random()*1.1,swayPhase:Math.random()*Math.PI*2,age:0})}}update(t,e){this.windmillBlades.rotation.x=e*.65,this.astrolabeRing1.rotation.x=e*.7,this.astrolabeRing1.rotation.y=e*.5,this.astrolabeRing2.rotation.y=-e*.9,this.astrolabeRing2.rotation.z=e*.6,this.astrolabeCore.rotation.y=e*1.3,this.astrolabeCore.position.y=Math.sin(e*2.2)*.35;for(const d of this.flags)d.pivot.rotation.y=Math.sin(e*3.4+d.phase)*.22;for(const d of this.clouds)d.group.position.x+=d.speed*t,d.group.position.x>135&&(d.group.position.x=-135),d.group.position.y=d.baseY+Math.sin(e*.6+d.phase)*.9;for(const d of this.balloons)d.angle+=d.speed*t,d.group.position.set(Math.cos(d.angle)*d.orbitR,d.orbitY+Math.sin(e*.9+d.angle)*2.2,Math.sin(d.angle)*d.orbitR+8),d.group.rotation.y=-d.angle;const n=e*.095,s=114,r=88,o=Math.cos(n)*s,a=Math.sin(n)*r+4;this.airship.position.set(o,52+Math.sin(e*1.2)*1.4,a),this.airship.rotation.y=-n,this.airshipPropeller.rotation.z=e*16;for(let d=0;d<this.petalData.length;d++){const v=this.petalData[d];v.y+=v.vy*t,v.x+=Math.sin(e*1.5+v.sway)*.9*t,v.z+=Math.cos(e*1.2+v.sway)*.7*t,v.vy<0&&v.y<8&&(v.y=56),v.vy>0&&v.y>46&&(v.y=13),this.dummy.position.set(v.x,v.y,v.z),this.dummy.rotation.set(e+v.rot,e*.8+v.sway,v.rot);const M=v.vy>0?.65+.45*Math.sin(e*4+v.sway):1;this.dummy.scale.setScalar(M),this.dummy.updateMatrix(),this.petalMesh.setMatrixAt(d,this.dummy.matrix)}this.petalMesh.instanceMatrix.needsUpdate=!0;for(let d=0;d<this.splashData.length;d++){const v=this.splashData[d];if(v.age+=t,v.age>=v.life)if(v.age=0,v.pos.copy(v.origin),v.isFountain){const x=d/28*Math.PI*2+e*.4;v.vel.set(Math.cos(x)*2.3,4.8,Math.sin(x)*2.3)}else v.vel.set((Math.random()-.5)*3.4,1.6+Math.random()*3.2,(Math.random()-.5)*3.4);else v.vel.y-=9.5*t,v.pos.addScaledVector(v.vel,t);const M=Math.max(.05,1-v.age/v.life);this.dummy.position.copy(v.pos),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(M),this.dummy.updateMatrix(),this.splashMesh.setMatrixAt(d,this.dummy.matrix)}this.splashMesh.instanceMatrix.needsUpdate=!0;for(const d of this.smokePuffs){d.age+=t,d.age>=d.life&&(d.age=0);const v=d.age/d.life;d.mesh.position.set(d.origin.x+d.driftX*d.age+Math.sin(e*2+d.origin.x)*.25,d.origin.y+d.age*1.55,d.origin.z+d.driftZ*d.age);const M=.35+v*.75;d.mesh.scale.setScalar(M*(1-v*.65))}for(const d of this.villagers)if(d.greetTimer>0){d.greetTimer-=t;const v=d.centerX+Math.cos(d.angle)*d.radius,M=d.centerZ+Math.sin(d.angle)*d.radius,x=this.world.getSurfaceY(v,M,28,10)+1,T=Math.abs(Math.sin(e*12))*.45;d.group.position.set(v,x+T,M),d.group.lookAt(d.greetTarget.x,x+T,d.greetTarget.z)}else{d.angle+=d.speed*t;const v=d.centerX+Math.cos(d.angle)*d.radius,M=d.centerZ+Math.sin(d.angle)*d.radius,x=this.world.getSurfaceY(v,M,28,10)+1,T=Math.abs(Math.sin(e*6.5+d.hopOffset))*.28;d.group.position.set(v,x+T,M),d.group.rotation.set(0,-d.angle+(d.speed>0?0:Math.PI),0)}for(let d=this.lanterns.length-1;d>=0;d--){const v=this.lanterns[d];v.age+=t,v.group.position.y+=v.velY*t,v.group.position.x+=Math.sin(e*1.2+v.swayPhase)*.7*t,v.group.rotation.y+=.6*t,(v.age>24||v.group.position.y>98)&&(this.group.remove(v.group),this.lanterns.splice(d,1))}for(let d=this.fireworks.length-1;d>=0;d--){const v=this.fireworks[d];if(v.age+=t,v.age>=v.maxAge){this.group.remove(v.mesh),this.fireworks.splice(d,1);continue}v.vel.y-=9.8*t,v.vel.multiplyScalar(.985),v.mesh.position.addScaledVector(v.vel,t);const M=1-v.age/v.maxAge;v.mesh.scale.setScalar(.6*M)}for(let d=0;d<this.dragonSegments.length;d++){const v=this.dragonSegments[d],M=e*.42-d*.11,x=this.sampleDragonPath(M),T=this.sampleDragonPath(M+.06);v.position.copy(x),v.lookAt(T)}const l=Math.sin(e*3.8)*.52;this.dragonLeftWing.rotation.z=l,this.dragonRightWing.rotation.z=-l;const f=-e*.075+.8,u=104,h=78,p=Math.cos(f)*u,c=Math.sin(f)*h+12,m=64+Math.sin(e*.9)*1.8,_=Math.cos(f-.02)*u,g=Math.sin(f-.02)*h+12;this.skyGalleon.position.set(p,m,c),this.skyGalleon.lookAt(_,m,g);for(const d of this.galleonOars)d.pivot.rotation.z=d.side*(Math.sin(e*3.2+d.phase)*.35-.12)}sampleDragonPath(t){const e=Math.sin(t)*48,n=-82+Math.cos(t)*42,s=106+Math.sin(t*2)*8.5;return new C(e,s,n)}getDragonCameraPose(t){const e=t*.42-.16,n=this.sampleDragonPath(e),s=this.sampleDragonPath(e+.35);return n.y+=4.2,{position:n,lookAt:s}}buildCelestialFrostDragon(){const t=new wt({color:"#bfefff",emissive:"#3ac8ff",emissiveIntensity:.38,roughness:.35}),e=new wt({color:"#f2fcff",roughness:.5}),n=new wt({color:"#ffe082",emissive:"#ffbe42",emissiveIntensity:.55,roughness:.3}),s=new Qt({color:"#7af7ff"}),r=new wt({color:"#6ce5ff",emissive:"#4cd8ff",emissiveIntensity:.72,transparent:!0,opacity:.82,roughness:.25}),o=16;for(let a=0;a<o;a++){const l=new Ut;if(a===0){const f=new W(new Z(2.3,2,2.6),t),u=new W(new Z(1.6,1.2,2.2),t);u.position.set(0,-.2,2.1);const h=new W(new Z(1.4,.5,1.8),e);h.position.set(0,-.85,1.8);const p=new W(new Z(.42,.42,.55),s);p.position.set(1.05,.3,.9);const c=p.clone();c.position.x=-1.05;const m=new W(new Z(.45,.45,3.2),n);m.position.set(.85,1.35,-1.2),m.rotation.x=.48,m.rotation.y=.22;const _=m.clone();_.position.x=-.85,_.rotation.y=-.22,l.add(f,u,h,p,c,m,_)}else{const f=1-a/o*.68,u=2*f,h=1.8*f,p=new W(new Z(u,h,2.3),t),c=new W(new Z(u*.8,.45*f,2.1),e);c.position.y=-h*.5;const m=new W(new Z(.35,1.25*f+.35,1.2),a%2===0?s:n);if(m.position.y=h*.65,l.add(p,c,m),a===2){const _=g=>{const d=new Ut;d.position.set(g*1,.4,0);const v=new W(new Z(5.5,.45,.55),n);v.position.set(g*2.75,.5,.4),v.rotation.z=g*.15;const M=new W(new Z(5.2,.38,.45),t);M.position.set(g*7.6,.8,-.3),M.rotation.y=-g*.22;const x=new W(new Z(5,.18,3.6),r);x.position.set(g*2.8,.35,-1.3);const T=new W(new Z(4.8,.18,2.8),r);return T.position.set(g*7.4,.65,-1.5),d.add(v,M,x,T),d};this.dragonLeftWing=_(1),this.dragonRightWing=_(-1),l.add(this.dragonLeftWing,this.dragonRightWing)}if(a===o-1){const _=new W(new Z(1.8,.3,2.8),s);_.position.z=-1.6,l.add(_)}}this.group.add(l),this.dragonSegments.push(l)}}buildGrandSkyGalleon(){this.skyGalleon=new Ut;const t=new wt({color:"#7a4e32",roughness:.8}),e=new wt({color:"#c49060",roughness:.75}),n=new wt({color:"#3b73d9",roughness:.5}),s=new wt({color:"#ffd166",emissive:"#ffae2b",emissiveIntensity:.35,roughness:.3}),r=new wt({color:"#fffcf5",emissive:"#ffe8d6",emissiveIntensity:.18,roughness:.65}),o=new Qt({color:"#69f0ff"}),a=new W(new Z(3.2,1.4,12.5),t);a.position.y=-1.2;const l=new W(new Z(4.8,1.8,15),t);l.position.y=.2;const f=new W(new Z(5,.65,15.2),n);f.position.y=.6;const u=new W(new Z(4.6,.4,14.6),e);u.position.y=1.2;const h=new W(new Z(4.4,2.4,4.2),t);h.position.set(0,2.4,-5.4);const p=new W(new Z(4.6,.45,4.4),s);p.position.set(0,3.7,-5.4);const c=new W(new Z(.9,1.2,.9),o);c.position.set(0,3.2,-7.8);const m=new W(new Z(.5,.5,5.2),s);m.position.set(0,1.9,9.2),m.rotation.x=-.28;const _=new W(new Z(2,.9,6.5),o);_.position.y=-2,this.skyGalleon.add(a,l,f,u,h,p,c,m,_);const g=[[4.2,8.5,5.6],[-.2,10.5,7],[-4.8,7.8,4.8]];for(const[d,v,M]of g){const x=new W(new Z(.45,v,.45),t);x.position.set(0,1.2+v*.5,d);const T=new W(new Z(M,v*.58,.45),r);T.position.set(0,2.2+v*.45,d+.45);const b=new W(new Z(1.6,.55,.18),s);b.position.set(.8,1.4+v,d),this.skyGalleon.add(x,T,b)}for(const d of[-1,1])for(let v=0;v<3;v++){const M=new Ut;M.position.set(d*2.5,.5,-2.5+v*3);const x=new W(new Z(3.6,.22,1.1),o);x.position.x=d*1.8,M.add(x),this.skyGalleon.add(M),this.galleonOars.push({pivot:M,side:d,phase:v*.9})}this.group.add(this.skyGalleon)}}class o0{constructor(t){tt(this,"group",new Ut);tt(this,"whaleSegments",[]);tt(this,"whaleLeftFin");tt(this,"whaleRightFin");tt(this,"whaleTailFluke");tt(this,"jellyfishes",[]);tt(this,"phoenixRoot",new Ut);tt(this,"phoenixLeftWing");tt(this,"phoenixRightWing");tt(this,"phoenixTails",[]);tt(this,"gearLarge");tt(this,"gearMedium");tt(this,"gearSmall");tt(this,"clockMinuteHand");tt(this,"clockHourHand");tt(this,"clockPendulum");tt(this,"ferrisWheel",new Ut);tt(this,"ferrisGondolas",[]);tt(this,"carouselCanopy",new Ut);tt(this,"carouselHorses",[]);tt(this,"railCurve");tt(this,"trainCars",[]);tt(this,"trainProgress",0);tt(this,"trainSteam",[]);tt(this,"steamSpawnTimer",0);tt(this,"frostCircleInner");tt(this,"frostCircleOuter");tt(this,"astralCircle");tt(this,"magicSurge",0);tt(this,"sharedBox",new Z(1,1,1));this.hooks=t,this.buildNebulaSkyWhale(),this.buildGlowingJellyfishSwarm(),this.buildBlazingPhoenix(),this.buildClockworkMechanisms(),this.buildFerrisWheelAndCarousel(),this.buildGalacticSkyTrain(),this.buildArcaneMagicCircles()}triggerArcaneResonance(){this.magicSurge=1}getTrainCameraPose(){const t=(this.trainProgress+.006)%1,e=(t+.035)%1,n=this.railCurve.getPointAt(t),s=this.railCurve.getPointAt(e);return n.y+=3.8,s.y+=2.6,{position:n,lookAt:s}}getFerrisCabinWorldPos(){const t=new C;return this.ferrisGondolas[0].getWorldPosition(t),t.y-=1.15,t}getCarouselHorseWorldPos(){const t=new C;return this.carouselHorses[0].group.getWorldPosition(t),t.y+=1.25,t}buildNebulaSkyWhale(){const t=new wt({color:"#5a67f2",emissive:"#3b48c8",emissiveIntensity:.45,roughness:.4,transparent:!0,opacity:.94}),e=new wt({color:"#e6f4ff",emissive:"#9be7ff",emissiveIntensity:.28,roughness:.5}),n=new Qt({color:"#80ffea"}),s=[[4.2,3.2,2.8],[5.4,4.2,2.8],[6,4.6,3],[5.8,4.4,2.8],[5.2,4,2.6],[4.5,3.5,2.5],[3.8,3,2.4],[3.1,2.4,2.3],[2.5,1.9,2.2],[1.9,1.5,2.1],[1.4,1.2,2]];for(let r=0;r<s.length;r++){const[o,a,l]=s[r],f=new Ut,u=new W(new Z(o,a*.68,l),t);u.position.y=a*.16;const h=new W(new Z(o*.88,a*.36,l*.95),e);if(h.position.y=-a*.34,f.add(u,h),r%2===1&&r<=7){const p=new W(new Z(.65,.75,.65),n);p.position.set((r%3-1)*.9,a*.55,0),f.add(p)}if(r===0)for(const p of[-1,1]){const c=new W(new Z(.45,.45,.65),n);c.position.set(p*2.15,.1,-.3),f.add(c)}if(r===2){const p=c=>{const m=new Ut;m.position.set(c*2.9,-.6,0);const _=new W(new Z(5.2,.42,2.6),t);_.position.set(c*2.5,-.3,-.4);const g=new W(new Z(4.2,.32,1.8),n);return g.position.set(c*6.4,-.6,-1.1),m.add(_,g),m};this.whaleLeftFin=p(1),this.whaleRightFin=p(-1),f.add(this.whaleLeftFin,this.whaleRightFin)}if(r===s.length-1){this.whaleTailFluke=new Ut,this.whaleTailFluke.position.set(0,0,-1.2);const p=new W(new Z(7.6,.38,2.6),t);p.position.z=-1.2;const c=new W(new Z(9.4,.28,1.4),n);c.position.z=-2.2,this.whaleTailFluke.add(p,c),f.add(this.whaleTailFluke)}this.group.add(f),this.whaleSegments.push(f)}}sampleWhalePath(t){const e=-72+Math.cos(t)*34,n=-6+Math.sin(t)*56,s=52+Math.sin(t*2)*7.5;return new C(e,s,n)}buildGlowingJellyfishSwarm(){const t=["#ff85e4","#6ef7ff","#c788ff","#7bf1a8"];for(let e=0;e<14;e++){const n=t[e%t.length],s=new wt({color:n,emissive:n,emissiveIntensity:1.15,transparent:!0,opacity:.78,roughness:.2}),r=new Ut,o=new W(new Z(1.7,1.1,1.7),s),a=new W(new Z(1.1,.5,1.1),s);a.position.y=.7,o.add(a);const l=new Ut;for(const[p,c]of[[-.45,-.45],[.45,-.45],[-.45,.45],[.45,.45]]){const m=new W(new Z(.18,2.1,.18),s);m.position.set(p,-1.3,c),l.add(m)}r.add(o,l);const f=e/14*Math.PI*2+.25,u=106+e%4*14,h=new C(Math.cos(f)*u,32+e%5*9,Math.sin(f)*u);r.position.copy(h),this.group.add(r),this.jellyfishes.push({group:r,bell:o,tentacles:l,basePos:h,phase:e*.85,speed:1.8+e%3*.4})}}buildBlazingPhoenix(){const t=new wt({color:"#ff4d6d",emissive:"#ff2a55",emissiveIntensity:.9,roughness:.3}),e=new wt({color:"#ff9e00",emissive:"#ff7b00",emissiveIntensity:1.2,roughness:.25}),n=new Qt({color:"#ffee75"}),s=new W(new Z(1.8,1.5,3.6),t),r=new W(new Z(1.3,1.3,1.6),e);r.position.set(0,.9,2.1);const o=new W(new Z(.55,.5,1.1),n);o.position.set(0,.75,3.2);const a=new W(new Z(.3,1.4,1.8),n);a.position.set(0,1.8,1.6),a.rotation.x=-.35;const l=f=>{const u=new Ut;u.position.set(f*.9,.4,.4);const h=new W(new Z(4.4,.28,2.8),t);h.position.set(f*2.2,.2,-.2);const p=new W(new Z(4.2,.24,2.2),e);p.position.set(f*5.8,.45,-.7);const c=new W(new Z(3.2,.2,1.4),n);return c.position.set(f*8.6,.7,-1.3),u.add(h,p,c),u};this.phoenixLeftWing=l(1),this.phoenixRightWing=l(-1),this.phoenixRoot.add(s,r,o,a,this.phoenixLeftWing,this.phoenixRightWing);for(let f=-1;f<=1;f++){const u=new W(new Z(.45,.25,6.8),f===0?n:e);u.position.set(f*.75,.1,-5),this.phoenixRoot.add(u),this.phoenixTails.push(u)}this.group.add(this.phoenixRoot)}buildClockworkMechanisms(){const t=new wt({color:"#ffd166",emissive:"#ffaa2b",emissiveIntensity:.38,roughness:.28,metalness:.55}),e=new wt({color:"#d9822b",emissive:"#9c4f1a",emissiveIntensity:.25,roughness:.38,metalness:.5}),n=new Qt({color:"#1d223b"}),s=(Q,H,at)=>{const ft=new Ut,yt=new W(new Z(Q*.52,Q*.52,.65),at),Ot=new W(new Z(.52,Q*1.88,.42),at),Xt=new W(new Z(Q*1.88,.52,.42),at);ft.add(yt,Ot,Xt);for(let $=0;$<H;$++){const it=$/H*Math.PI*2,_t=new W(new Z(Q*2*Math.PI/H*.66,.68,.48),at);_t.position.set(Math.cos(it)*Q,Math.sin(it)*Q,0),_t.rotation.z=it+Math.PI/2;const st=new W(new Z(.68,.78,.54),at);st.position.set(Math.cos(it)*(Q+.52),Math.sin(it)*(Q+.52),0),st.rotation.z=it+Math.PI/2,ft.add(_t,st)}return ft},[r,o,a]=this.hooks.clockTowerCenter,l=a+6.55,f=3.4,u=2.3,h=1.75,p=r-1.4,c=o+11.2,m=.62,_=f+u+.52,g=p+Math.cos(m)*_,d=c+Math.sin(m)*_,v=2.18,M=u+h+.48,x=g+Math.cos(v)*M,T=d+Math.sin(v)*M;this.gearLarge=s(f,12,t),this.gearLarge.position.set(p,c,l),this.gearMedium=s(u,8,e),this.gearMedium.position.set(g,d,l),this.gearMedium.rotation.z=Math.PI/8,this.gearSmall=s(h,6,t),this.gearSmall.position.set(x,T,l);for(const[Q,H]of[[p,c],[g,d],[x,T]]){const at=new W(new Z(.65,.65,2.2),e);at.position.set(Q,H,l-.9),this.group.add(at)}const b=r-5,R=o+20.5,L=a+.5,E=new W(new Z(.32,.65,.65),t);E.position.set(b-.12,R,L),this.group.add(E),this.clockMinuteHand=new Ut,this.clockMinuteHand.position.set(b-.24,R,L);const y=new W(new Z(.16,2.35,.24),n);y.position.y=1.05,this.clockMinuteHand.add(y),this.clockHourHand=new Ut,this.clockHourHand.position.set(b-.34,R,L);const D=new W(new Z(.16,1.55,.32),e);D.position.y=.68,this.clockHourHand.add(D);const[B,k,J]=this.hooks.clockPendulumPivot;this.clockPendulum=new Ut,this.clockPendulum.position.set(B+.5,k,J+.5);const et=new W(new Z(.32,6.5,.32),t);et.position.y=-3.2;const K=new W(new Z(1.8,1.8,.7),t);K.position.y=-6.6,this.clockPendulum.add(et,K),this.group.add(this.gearLarge,this.gearMedium,this.gearSmall,this.clockMinuteHand,this.clockHourHand,this.clockPendulum)}buildFerrisWheelAndCarousel(){const[t,e,n]=this.hooks.ferrisHub;this.ferrisWheel.position.set(t+.5,e+.5,n+.5);const s=new wt({color:"#fff6fa",emissive:"#ff9ed8",emissiveIntensity:.45,roughness:.35}),r=new wt({color:"#ffe382",emissive:"#ffbe42",emissiveIntensity:.9,roughness:.25}),o=10.2,a=["#ff7597","#ffb366","#ffe675","#72eb98","#6ce8f5","#79a6ff","#c48aff","#ff94d2"];this.ferrisWheel.add(new W(new Z(2,2,3.2),r));for(let _=0;_<8;_++){const g=_/8*Math.PI*2;for(const R of[-.9,.9]){const L=new W(new Z(.28,o,.28),s);L.position.set(Math.cos(g)*o/2,Math.sin(g)*o/2,R),L.rotation.z=g-Math.PI/2,this.ferrisWheel.add(L);const E=new W(new Z(.35,8,.35),r),y=g+Math.PI/8;E.position.set(Math.cos(y)*o*.92,Math.sin(y)*o*.92,R),E.rotation.z=y,this.ferrisWheel.add(E)}const d=new Ut;d.position.set(Math.cos(g)*o,Math.sin(g)*o,0);const v=new wt({color:a[_],emissive:a[_],emissiveIntensity:.85,roughness:.3}),M=new Qt({color:"#fffbe6"}),x=new W(new Z(.2,1.1,.2),r);x.position.y=-.55;const T=new W(new Z(1.7,1.6,1.5),v);T.position.y=-1.65;const b=new W(new Z(1.8,.65,.95),M);b.position.y=-1.45,d.add(x,T,b),this.ferrisWheel.add(d),this.ferrisGondolas.push(d)}this.group.add(this.ferrisWheel);const[l,f,u]=this.hooks.carouselCenter;this.carouselCanopy.position.set(l+.5,f,u+.5);const h=new W(new Z(1.1,4.8,1.1),r);h.position.y=2.4;const p=new W(new na(4.4,2.4,8),new wt({color:"#ff85c0",emissive:"#ff5ca8",emissiveIntensity:.42,roughness:.5}));p.position.y=5.6;const c=new W(new Z(6.2,.45,6.2),r);c.position.y=4.5,this.carouselCanopy.add(h,p,c);const m=["#ffffff","#ffd6e7","#bae7ff","#efdbff"];for(let _=0;_<4;_++){const g=_*Math.PI/2,d=new W(new Z(.16,4.4,.16),r);d.position.set(Math.cos(g)*2.6,2.2,Math.sin(g)*2.6),this.carouselCanopy.add(d);const v=new Ut,M=new wt({color:m[_],roughness:.5}),x=new W(new Z(.65,.6,1.25),M),T=new W(new Z(.5,.75,.55),M);T.position.set(0,.48,.5),v.add(x,T),v.position.set(Math.cos(g)*2.6,1.4,Math.sin(g)*2.6),v.rotation.y=-g+Math.PI,this.carouselCanopy.add(v),this.carouselHorses.push({group:v,baseY:1.4,phase:_*1.5})}this.group.add(this.carouselCanopy)}buildGalacticSkyTrain(){this.railCurve=new sr([new C(8.5,18.2,51.2),new C(-28,20,56),new C(-74,26,12),new C(-72,38,-48),new C(0,44,-60),new C(84,34,-24),new C(56,26,22),new C(38,20,50)],!0,"catmullrom",.5);const t=new Qt({color:"#ffe38f",transparent:!0,opacity:.58}),e=new ra(this.railCurve,220,.22,5,!0),n=new W(e,t);this.group.add(n);const s=150,r=new er(new Z(2.1,.16,.42),new Qt({color:"#ffd166",transparent:!0,opacity:.5}),s),o=new _e;for(let h=0;h<s;h++){const p=h/s,c=this.railCurve.getPointAt(p),m=this.railCurve.getPointAt((p+.005)%1);o.position.copy(c),o.position.y-=.12,o.lookAt(m),o.updateMatrix(),r.setMatrixAt(h,o.matrix)}this.group.add(r);const a=new wt({color:"#243b55",roughness:.45}),l=new wt({color:"#ffd166",emissive:"#ffae2b",emissiveIntensity:.4,roughness:.3}),f=["#e65c7b","#4378db","#9b6ee6"],u=new Qt({color:"#ffea99"});for(let h=0;h<4;h++){const p=new Ut;if(h===0){const c=new W(new Z(2.2,.7,4.8),l);c.position.y=.55;const m=new W(new Z(1.7,1.6,3),a);m.position.set(0,1.55,.7);const _=new W(new Z(2.1,2.2,1.7),a);_.position.set(0,1.9,-1.4);const g=new W(new Z(2.18,.85,.9),u);g.position.set(0,2.2,-1.4);const d=new W(new Z(.65,1.25,.65),l);d.position.set(0,2.75,1.5);const v=new W(new Z(.75,.75,.4),u);v.position.set(0,1.65,2.3),p.add(c,m,_,g,d,v)}else{const c=new wt({color:f[h-1],roughness:.5}),m=new W(new Z(2.1,2,4.2),c);m.position.y=1.35;const _=new W(new Z(2.3,.4,4.4),l);_.position.y=2.5;const g=new W(new Z(2.18,.78,3.3),u);g.position.y=1.55,p.add(m,_,g)}this.group.add(p),this.trainCars.push(p)}}buildArcaneMagicCircles(){const t=(e,n)=>{const s=new Re({uniforms:{uColor:{value:new ot(n)}},transparent:!0,depthWrite:!1,side:qe,blending:rs,vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform vec3 uColor;
          varying vec2 vUv;

          // 正三角形有符号距离场（用于合成像素六芒星！）
          float sdTriangle(vec2 p, float r) {
            const float k = sqrt(3.0);
            p.x = abs(p.x) - r;
            p.y = p.y + r / k;
            if (p.x + k * p.y > 0.0) p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
            p.x -= clamp(p.x, -2.0 * r, 0.0);
            return -length(p) * sign(p.y);
          }

          void main() {
            // 像素网格量化（纯正像素风魔法阵！）
            vec2 p = (floor(vUv * 96.0) / 96.0 - 0.5) * 2.0;
            float r = length(p);
            if (r > 0.98) discard;

            float ring1 = smoothstep(0.038, 0.0, abs(r - 0.92));
            float ring2 = smoothstep(0.03, 0.0, abs(r - 0.76));
            float ring3 = smoothstep(0.028, 0.0, abs(r - 0.42));

            // 符文刻度齿环
            float angle = atan(p.y, p.x);
            float runes = step(0.35, sin(angle * 24.0)) * smoothstep(0.055, 0.0, abs(r - 0.84));

            // 双正反三角形交叠成神圣六芒星线框
            float tri1 = smoothstep(0.032, 0.0, abs(sdTriangle(p, 0.52)));
            float tri2 = smoothstep(0.032, 0.0, abs(sdTriangle(vec2(p.x, -p.y), 0.52)));

            float pattern = max(max(ring1, ring2), max(ring3, runes * 0.85));
            pattern = max(pattern, max(tri1, tri2) * 0.9);

            if (pattern < 0.08) discard;
            gl_FragColor = vec4(uColor * 1.35, pattern * 0.78);
          }
        `}),r=new W(new Jn(e,e),s);return r.rotation.x=-Math.PI/2,r};this.frostCircleOuter=t(58,"#5cf2ff"),this.frostCircleOuter.position.set(0,50,-82),this.frostCircleInner=t(38,"#a890ff"),this.frostCircleInner.position.set(0,52,-82),this.astralCircle=t(26,"#ffd666"),this.astralCircle.position.set(64.5,45.5,-11.5),this.group.add(this.frostCircleOuter,this.frostCircleInner,this.astralCircle)}update(t,e){for(let _=0;_<this.whaleSegments.length;_++){const g=this.whaleSegments[_],d=e*.16-_*.055,v=this.sampleWhalePath(d),M=this.sampleWhalePath(d+.03);v.y+=Math.sin(e*2.1-_*.45)*.55,g.position.copy(v),g.lookAt(M)}const n=Math.sin(e*1.8)*.28;this.whaleLeftFin.rotation.z=n-.15,this.whaleRightFin.rotation.z=-n+.15,this.whaleTailFluke.rotation.x=Math.cos(e*2.1)*.38;for(const _ of this.jellyfishes){const g=Math.sin(e*_.speed+_.phase);_.group.position.y=_.basePos.y+Math.sin(e*.6+_.phase)*3.5,_.group.rotation.y=e*.25+_.phase,_.bell.scale.set(1+g*.14,1-g*.16,1+g*.14),_.tentacles.scale.y=1+g*.18}const s=e*.36,r=62+Math.cos(s)*28,o=8+Math.sin(s)*32,a=92+Math.sin(e*1.4)*6,l=62+Math.cos(s+.05)*28,f=8+Math.sin(s+.05)*32;this.phoenixRoot.position.set(r,a,o),this.phoenixRoot.lookAt(l,a,f);const u=Math.sin(e*5.2)*.56;this.phoenixLeftWing.rotation.z=u,this.phoenixRightWing.rotation.z=-u,this.phoenixTails.forEach((_,g)=>{_.rotation.x=Math.sin(e*6.5+g)*.22,_.rotation.y=Math.cos(e*4.5+g)*.15});const h=e*.55;this.gearLarge.rotation.z=h,this.gearMedium.rotation.z=-h*(12/8)+Math.PI/8,this.gearSmall.rotation.z=h*(12/6),this.clockMinuteHand.rotation.x=-e*.35,this.clockHourHand.rotation.x=-e*.04,this.clockPendulum.rotation.z=Math.sin(e*2.2)*.34;const p=e*.22;this.ferrisWheel.rotation.z=p;for(let _=0;_<this.ferrisGondolas.length;_++)this.ferrisGondolas[_].rotation.z=-p+Math.sin(e*2+_)*.05;this.carouselCanopy.rotation.y=e*.65;for(const _ of this.carouselHorses)_.group.position.y=_.baseY+Math.sin(e*3.6+_.phase)*.42;this.trainProgress=(this.trainProgress+t*.032)%1;for(let _=0;_<this.trainCars.length;_++){const g=(this.trainProgress-_*.017+1)%1,d=(g+.008)%1,v=this.railCurve.getPointAt(g),M=this.railCurve.getPointAt(d);this.trainCars[_].position.copy(v),this.trainCars[_].lookAt(M)}if(this.steamSpawnTimer+=t,this.steamSpawnTimer>=.14){this.steamSpawnTimer=0;const _=this.trainCars[0].position.clone();_.y+=3.3;const g=new Qt({color:"#fff6cc",transparent:!0,opacity:.85}),d=new W(this.sharedBox,g);d.scale.setScalar(.45),d.position.copy(_),this.group.add(d),this.trainSteam.push({mesh:d,age:0,maxAge:1.6,vel:new C((Math.random()-.5)*1.2,2.2+Math.random()*1,(Math.random()-.5)*1.2)})}for(let _=this.trainSteam.length-1;_>=0;_--){const g=this.trainSteam[_];if(g.age+=t,g.age>=g.maxAge){this.group.remove(g.mesh),this.trainSteam.splice(_,1);continue}g.mesh.position.addScaledVector(g.vel,t);const d=g.age/g.maxAge;g.mesh.scale.setScalar((.45+d*.65)*(1-d))}this.magicSurge>0&&(this.magicSurge=Math.max(0,this.magicSurge-t*.35));const c=1+this.magicSurge*3.5;this.frostCircleOuter.rotation.z+=t*.16*c,this.frostCircleInner.rotation.z-=t*.28*c,this.astralCircle.rotation.z+=t*.24*c;const m=1+this.magicSurge*.12*Math.sin(e*12);this.frostCircleOuter.scale.setScalar(m)}}class a0{constructor(t,e,n){tt(this,"avatar",new Ut);tt(this,"wandViewmodel",new Ut);tt(this,"wandStarTip");tt(this,"leftLeg");tt(this,"rightLeg");tt(this,"leftArm");tt(this,"rightArm");tt(this,"pos",new C(.5,14,22.5));tt(this,"smoothY",14);tt(this,"velY",0);tt(this,"yaw",Math.PI);tt(this,"lookPitch",.08);tt(this,"rideLookYaw",0);tt(this,"rideLookPitch",0);tt(this,"isFirstPerson",!0);tt(this,"activeMode","orbit");tt(this,"rideAttachment","none");tt(this,"isGrounded",!1);tt(this,"isFlying",!1);tt(this,"lastSpaceTime",0);tt(this,"swingAnim",0);tt(this,"keys",new Set);tt(this,"isDraggingLook",!1);tt(this,"tourCurve");tt(this,"lookCurve");tt(this,"tourProgress",0);this.world=t,this.camera=e,this.dom=n,this.buildCuteHeroAvatar(),this.buildStarlightWandViewmodel(),this.avatar.visible=!1,this.wandViewmodel.visible=!1,this.camera.add(this.wandViewmodel),this.tourCurve=new sr([new C(62,46,84),new C(62,36,18),new C(46,56,-24),new C(34,108,-34),new C(-34,106,-42),new C(-48,44,-18),new C(-52,28,28),new C(16,22,46)],!0,"catmullrom",.5),this.lookCurve=new sr([new C(0,38,-24),new C(45,28,-10),new C(4,68,-62),new C(0,98,-82),new C(0,94,-80),new C(-24,28,-14),new C(-34,20,12),new C(0,56,-36)],!0,"catmullrom",.5),window.addEventListener("keydown",s=>{const r=s.code;if(this.activeMode==="walk"&&(r==="KeyV"&&!this.keys.has("KeyV")&&this.togglePerspective(),r==="Space"&&!this.keys.has("Space")))if(this.rideAttachment!=="none")this.dismountRide();else{const o=performance.now();o-this.lastSpaceTime<320&&(this.isFlying=!this.isFlying,this.velY=0),this.lastSpaceTime=o}this.keys.add(r)}),window.addEventListener("keyup",s=>{this.keys.delete(s.code)}),n.addEventListener("mousedown",s=>{var r;(s.button===0||s.button===2)&&(this.isDraggingLook=!0),(this.activeMode==="walk"||this.activeMode==="dragon"||this.activeMode==="train")&&document.pointerLockElement!==n&&s.button===0&&((r=n.requestPointerLock)==null||r.call(n))}),window.addEventListener("mouseup",()=>{this.isDraggingLook=!1}),window.addEventListener("mousemove",s=>{!(document.pointerLockElement===n)&&!this.isDraggingLook||(this.activeMode==="walk"?(this.yaw-=s.movementX*.0032,this.lookPitch=be.clamp(this.lookPitch-s.movementY*.003,-1.35,1.42)):(this.activeMode==="dragon"||this.activeMode==="train")&&(this.rideLookYaw=be.clamp(this.rideLookYaw-s.movementX*.003,-2.2,2.2),this.rideLookPitch=be.clamp(this.rideLookPitch-s.movementY*.0028,-1,1.1)))})}buildStarlightWandViewmodel(){const t=new wt({color:"#6b442b",roughness:.7}),e=new wt({color:"#ffd166",emissive:"#ffae2b",emissiveIntensity:.5,roughness:.25}),n=new wt({color:"#ff85e4",emissive:"#ff5cc8",emissiveIntensity:1.4,roughness:.15}),s=new Qt({color:"#9ef8ff"}),r=new W(new Z(.055,.48,.055),t),o=new W(new Z(.14,.05,.09),e);o.position.y=.22;const a=new W(new Z(.11,.07,.03),s);a.position.set(-.1,.27,0),a.rotation.z=.35;const l=a.clone();l.position.x=.1,l.rotation.z=-.35,this.wandStarTip=new W(new Ni(.085,0),n),this.wandStarTip.position.y=.33,this.wandViewmodel.add(r,o,a,l,this.wandStarTip),this.wandViewmodel.scale.setScalar(.52),this.wandViewmodel.position.set(.38,-.32,-.62),this.wandViewmodel.rotation.set(.22,-.25,.12)}buildCuteHeroAvatar(){const t=new wt({color:"#5994f0",roughness:.65}),e=new wt({color:"#ff7eb9",roughness:.6}),n=new wt({color:"#ffe2cc",roughness:.7}),s=new wt({color:"#fff1b8",roughness:.6}),r=new wt({color:"#ffd166",emissive:"#ffbe40",emissiveIntensity:.4,roughness:.3}),o=new wt({color:"#6b4835",roughness:.8});this.leftLeg=new W(new Z(.32,.55,.32),o),this.leftLeg.position.set(-.2,.28,0),this.rightLeg=new W(new Z(.32,.55,.32),o),this.rightLeg.position.set(.2,.28,0);const a=new W(new Z(.76,.82,.48),t);a.position.y=.92,a.castShadow=!0;const l=new W(new Z(.72,.85,.12),e);l.position.set(0,.88,-.3),l.rotation.x=.14,this.leftArm=new W(new Z(.26,.68,.26),t),this.leftArm.position.set(-.54,.92,0),this.rightArm=new W(new Z(.26,.68,.26),t),this.rightArm.position.set(.54,.92,0);const f=new W(new Z(.76,.72,.76),n);f.position.y=1.72,f.castShadow=!0;const u=new W(new Z(.82,.35,.82),s);u.position.y=1.98;const h=new W(new Z(.52,.26,.52),r);h.position.y=2.24,this.avatar.add(this.leftLeg,this.rightLeg,a,l,this.leftArm,this.rightArm,f,u,h)}triggerWandSwing(){this.swingAnim=1}togglePerspective(){return this.isFirstPerson=!this.isFirstPerson,this.activeMode==="walk"&&(this.avatar.visible=!this.isFirstPerson&&this.rideAttachment==="none",this.wandViewmodel.visible=this.isFirstPerson),this.isFirstPerson}enterWalkMode(){this.activeMode="walk",this.rideAttachment="none";const t=this.world.getSurfaceY(0,22,30,8);this.pos.set(.5,t+1.02,22.5),this.smoothY=this.pos.y,this.velY=0,this.yaw=Math.PI,this.lookPitch=.1,this.isFlying=!1,this.avatar.visible=!this.isFirstPerson,this.wandViewmodel.visible=this.isFirstPerson}exitWalkMode(t){var e;this.activeMode=t,this.rideAttachment="none",this.avatar.visible=!1,this.wandViewmodel.visible=!1,this.rideLookYaw=0,this.rideLookPitch=0,t!=="dragon"&&t!=="train"&&document.pointerLockElement===this.dom&&((e=document.exitPointerLock)==null||e.call(document))}teleportTo(t,e,n,s){if(this.rideAttachment="none",this.pos.set(t,e,n),this.smoothY=e,this.velY=0,this.isFlying=!1,s){const r=s.x-t,o=s.z-n;this.yaw=Math.atan2(-r,-o);const a=Math.hypot(r,o);this.lookPitch=be.clamp(Math.atan2(s.y-(e+1.7),Math.max(.1,a)),-.8,.9)}this.triggerWandSwing()}mountRide(t){this.rideAttachment=t,this.avatar.visible=!1,this.wandViewmodel.visible=this.isFirstPerson,this.triggerWandSwing()}dismountRide(){this.rideAttachment==="ferris"?this.pos.set(-17.5,13.05,37.5):this.rideAttachment==="carousel"&&this.pos.set(-2.5,13.05,35.5),this.smoothY=this.pos.y,this.velY=0,this.rideAttachment="none",this.avatar.visible=!this.isFirstPerson}getLookDirection(){return new C(-Math.sin(this.yaw)*Math.cos(this.lookPitch),Math.sin(this.lookPitch),-Math.cos(this.yaw)*Math.cos(this.lookPitch)).normalize()}isSolidAt(t,e,n){const s=this.world.get(Math.floor(t),Math.floor(e),Math.floor(n));return s!==S.AIR&&s!==S.WATER&&s!==S.WATERFALL_FOAM}isBodyClear(t,e,n){for(const r of[-.28,.28])for(const o of[-.28,.28])if(this.isSolidAt(t+r,e+.15,n+o)||this.isSolidAt(t+r,e+1.65,n+o))return!1;return!0}tryMoveAxis(t,e){const n=this.pos.x+t,s=this.pos.z+e;if(this.isBodyClear(n,this.pos.y,s)){this.pos.x=n,this.pos.z=s;return}this.isBodyClear(n,Math.floor(this.pos.y)+1.02,s)&&(this.pos.x=n,this.pos.z=s,this.pos.y=Math.floor(this.pos.y)+1.02)}updateCinematic(t){this.tourProgress=(this.tourProgress+t*.024)%1;const e=this.tourCurve.getPointAt(this.tourProgress),n=this.lookCurve.getPointAt(this.tourProgress);this.camera.position.lerp(e,Math.min(1,t*3.5)),this.camera.lookAt(n)}applyRidePose(t,e,n){this.camera.position.lerp(t,Math.min(1,n*10));const s=e.clone().sub(t).normalize(),r=Math.atan2(-s.x,-s.z),o=Math.asin(be.clamp(s.y,-.95,.95)),a=r+this.rideLookYaw,l=be.clamp(o+this.rideLookPitch,-1.25,1.3),f=new C(-Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l));this.camera.lookAt(this.camera.position.clone().add(f.multiplyScalar(20)))}updateWalk(t,e,n){if(this.wandStarTip.rotation.y=e*2.6,this.swingAnim>0&&(this.swingAnim=Math.max(0,this.swingAnim-t*4.5)),this.rideAttachment!=="none"&&n){this.pos.copy(n),this.smoothY=n.y;const p=n.clone();this.camera.position.lerp(p,Math.min(1,t*18));const c=this.getLookDirection();this.camera.lookAt(this.camera.position.clone().add(c.multiplyScalar(20))),this.updateWandTransform(e,!1);return}const s=new C(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r=new C(Math.cos(this.yaw),0,-Math.sin(this.yaw)),o=new C;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&o.add(s),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&o.sub(s),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&o.add(r),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&o.sub(r);const a=this.keys.has("ShiftLeft")?13.5:this.isFlying?12.5:8.4;let l=!1;o.lengthSq()>.001&&(l=!0,o.normalize(),this.tryMoveAxis(o.x*a*t,0),this.tryMoveAxis(0,o.z*a*t));const f=this.world.get(Math.floor(this.pos.x),Math.floor(this.pos.y+.4),Math.floor(this.pos.z))===S.WATER;if(this.isFlying)this.keys.has("Space")&&(this.pos.y+=10.5*t),(this.keys.has("KeyQ")||this.keys.has("ControlLeft"))&&(this.pos.y-=10.5*t);else if(f)this.velY=this.keys.has("Space")?4.8:-1.8,this.pos.y+=this.velY*t,this.isGrounded=!0;else{this.keys.has("Space")&&this.isGrounded&&(this.velY=9.4,this.isGrounded=!1),this.velY-=23.5*t;const p=this.pos.y+this.velY*t;this.velY<=0&&!this.isBodyClear(this.pos.x,p-.16,this.pos.z)?(this.pos.y=Math.floor(p-.02)+1,this.velY=0,this.isGrounded=!0):(this.pos.y=p,this.isGrounded=!1),this.pos.y<-30&&(this.pos.set(.5,14,20.5),this.smoothY=14,this.velY=0)}this.smoothY=be.lerp(this.smoothY,this.pos.y,Math.min(1,t*18)),this.avatar.position.set(this.pos.x,this.smoothY,this.pos.z),this.avatar.rotation.y=this.yaw+Math.PI;const u=l?Math.sin(e*11)*.55:0;this.leftLeg.rotation.x=u,this.rightLeg.rotation.x=-u,this.leftArm.rotation.x=-u*.8,this.rightArm.rotation.x=u*.8;const h=this.getLookDirection();if(this.isFirstPerson){const p=l&&this.isGrounded&&!this.isFlying?Math.sin(e*12)*.045:0;this.camera.position.set(this.pos.x,this.smoothY+1.72+p,this.pos.z),this.camera.lookAt(this.camera.position.x+h.x*20,this.camera.position.y+h.y*20,this.camera.position.z+h.z*20),this.updateWandTransform(e,l&&this.isGrounded)}else{const p=new C(this.pos.x,this.smoothY+1.95,this.pos.z),c=h.clone().negate();let m=6.4;const _=this.world.raycast(p,c,m,!0);_&&_.distance>.6&&(m=Math.max(1.2,_.distance-.45));const g=p.clone().addScaledVector(c,m);this.camera.position.lerp(g,Math.min(1,t*16)),this.camera.lookAt(p.x+h.x*12,p.y+h.y*12,p.z+h.z*12)}}updateWandTransform(t,e){const n=e?Math.cos(t*6)*.014:Math.sin(t*1.8)*.005,s=e?Math.abs(Math.sin(t*12))*.018:Math.cos(t*1.8)*.006,r=Math.sin(this.swingAnim*Math.PI)*.75;this.wandViewmodel.position.set(.38+n,-.32+s-r*.06,-.62-r*.1),this.wandViewmodel.rotation.set(.22-r,-.25+r*.4,.12)}}class c0{constructor(t,e,n,s,r,o,a){tt(this,"group",new Ut);tt(this,"portals",[]);tt(this,"magicBolts",[]);tt(this,"dialogBoxEl");tt(this,"dialogSpeakerEl");tt(this,"dialogTextEl");tt(this,"dialogTimer",0);this.world=t,this.dynamicWorld=e,this.celestialWonders=n,this.explorer=s,this.sky=r,this.audio=o,this.onSwitchMode=a,this.dialogBoxEl=document.getElementById("npc-dialog"),this.dialogSpeakerEl=document.getElementById("npc-speaker"),this.dialogTextEl=document.getElementById("npc-text"),this.buildStarPortals()}buildStarPortals(){const t=[{pos:[10.5,13.05,14.5],dest:[.5,83.05,-63.5],look:[.5,89,-86],color:"#66f2ff",label:"踏入星界法阵 · 传送至「❄️ 九霄凌霄冰霜神殿」"},{pos:[5.5,83.05,-65.5],dest:[69.5,39.05,22.5],look:[78,56,22],color:"#ffd166",label:"踏入冰晶法阵 · 传送至「⚙️ 黄金星晷齿轮钟塔岛」"},{pos:[67.5,39.05,25.5],dest:[58.5,26.05,-11.5],look:[64,34,-12],color:"#c77dff",label:"踏入星晷法阵 · 传送至「🌈 紫晶星象台浮岛」"},{pos:[57.5,26.05,-11.5],dest:[.5,13.05,21.5],look:[0,32,-24],color:"#ff85c0",label:"踏入紫晶法阵 · 返回「⛲ 星泉小镇广场」"}];for(const e of t){const n=new Ut;n.position.set(e.pos[0],e.pos[1],e.pos[2]);const s=new wt({color:"#f5f0fa",roughness:.4}),r=new wt({color:e.color,emissive:e.color,emissiveIntensity:1.5,roughness:.2}),o=new W(new Z(2.2,.18,2.2),s);o.position.y=.09;const a=new W(new ls(1.15,.1,6,8),r);a.rotation.x=Math.PI/2,a.position.y=.24;const l=new W(new Ni(.38,0),r);l.position.y=1.45,n.add(o,a,l),this.group.add(n),this.portals.push({pos:new C(e.pos[0],e.pos[1],e.pos[2]),dest:new C(e.dest[0],e.dest[1],e.dest[2]),lookTarget:new C(e.look[0],e.look[1],e.look[2]),label:e.label,ringMesh:a,gemMesh:l})}}showBubble(t,e,n=5.2){this.dialogSpeakerEl.textContent=t,this.dialogTextEl.textContent=e,this.dialogBoxEl.classList.remove("hidden"),this.dialogTimer=n}castMagicStarBolt(){this.explorer.triggerWandSwing(),this.audio.playWandCast();const t=this.explorer.getLookDirection(),e=this.explorer.pos.clone();e.y+=1.55,e.addScaledVector(t,1.1);const n=new Qt({color:"#ff9ef5"}),s=new W(new Ni(.32,0),n);s.position.copy(e),this.group.add(s),this.magicBolts.push({mesh:s,vel:t.multiplyScalar(36),age:0,trailTimer:0})}detectAvailableInteraction(){if(this.explorer.activeMode!=="walk")return null;if(this.explorer.rideAttachment==="ferris")return{prompt:"🎡 正在乘坐摩天轮升空观景 · 按 [E] 或 [空格] 返回站台",execute:()=>{this.explorer.dismountRide(),this.audio.playBlockPop(!1)}};if(this.explorer.rideAttachment==="carousel")return{prompt:"🎠 正在骑乘童话旋转木马 · 按 [E] 或 [空格] 下马",execute:()=>{this.explorer.dismountRide(),this.audio.playBlockPop(!1)}};const t=this.explorer.pos;for(const c of this.portals)if(t.distanceTo(c.pos)<3.4)return{prompt:`🌀 按 [E] ${c.label}`,execute:()=>{this.audio.playInteractChime(),this.dynamicWorld.spawnMiniSparkles(c.dest.clone().add(new C(0,1,0)),"#6ef7ff",28),this.explorer.teleportTo(c.dest.x,c.dest.y,c.dest.z,c.lookTarget),this.showBubble("✨ 星界传送法阵","空间折跃完成！欢迎抵达全新云端奇观领域！",3.5)}};let e=-1,n=5;if(this.dynamicWorld.villagers.forEach((c,m)=>{const _=t.distanceTo(c.group.position);_<n&&(n=_,e=m)}),e>=0)return{prompt:`💬 按 [E] 与「${this.dynamicWorld.villagers[e].name}」交谈`,execute:()=>{this.explorer.triggerWandSwing(),this.audio.playNpcGreeting(e);const m=this.dynamicWorld.interactWithVillager(e,t);this.showBubble(m.name,m.line,5.8)}};const s=new C(.5,13,15.5);if(t.distanceTo(s)<6.8)return{prompt:"⛲ 按 [E] 向中央星泉投币许愿 ✨",execute:()=>{this.explorer.triggerWandSwing(),this.audio.playInteractChime(),this.dynamicWorld.spawnMiniSparkles(new C(.5,18.5,15.5),"#ffe382",36),this.dynamicWorld.releaseSkyLanterns(3),this.showBubble("⛲ 星泉女神的祝福","叮咚～你的心愿已化作三盏祈愿天灯冉冉升入星河！✨",4.5)}};const r=new C(-18,13,40);if(t.distanceTo(r)<6.8)return{prompt:"🎡 按 [E] 登上「星梦霓虹摩天轮」发光轿厢升空观景",execute:()=>{this.audio.playInteractChime(),this.explorer.mountRide("ferris"),this.showBubble("🎡 星梦霓虹摩天轮","已坐进七彩发光轿厢！转动鼠标可 360° 俯瞰童话镇与云海，按 [E] 或 [空格] 随时返回站台。",5)}};const o=new C(-3,13,40);if(t.distanceTo(o)<5.6)return{prompt:"🎠 按 [E] 骑乘「童话金顶旋转木马」",execute:()=>{this.audio.playInteractChime(),this.explorer.mountRide("carousel"),this.showBubble("🎠 童话旋转木马","伴随星光旋律旋转起伏中～按 [E] 或 [空格] 即可下马继续漫步！",4.5)}};const a=new C(8.5,13,41.5),l=new C(8.5,18,47);if(t.distanceTo(a)<4.5||t.distanceTo(l)<5.8)return{prompt:"🚂 按 [E] 登乘「云海银河蒸汽列车」环游全岛星轨",execute:()=>{this.audio.playInteractChime(),this.onSwitchMode("train"),this.showBubble("🚂 云海银河号列车长","呜——欢迎登车！转动鼠标可自由欣赏窗外的冰霜神殿、星云巨鲸与黄金钟塔！",5)}};const f=new C(.5,85,-88.5);if(t.distanceTo(f)<5.5)return{prompt:"👑 按 [E] 端坐「九霄冰封星冕王座」· 号令极光星陨",execute:()=>{this.audio.playInteractChime(),this.explorer.teleportTo(.5,85.05,-88.5,new C(.5,86,-65)),this.sky.summonMeteorShower(),this.celestialWonders.triggerArcaneResonance(),this.showBubble("👑 凛冬星冕之主","你端坐于九霄冰封王座之上，殿外漫天星陨与太古魔法阵为你齐声共鸣！",5.5)}};const u=new C(-38,15,12);if(t.distanceTo(u)<8.5)return{prompt:"🌸 按 [E] 轻触千年绯樱神木 · 唤起漫天樱吹雪",execute:()=>{this.explorer.triggerWandSwing(),this.audio.playInteractChime(),this.dynamicWorld.spawnMiniSparkles(new C(-38,25,12),"#ff9ec7",55),this.dynamicWorld.launchFirework(new C(-38,38,12)),this.showBubble("🌸 千年绯樱神木","神木枝叶轻颤，为你降下一场浪漫璀璨的粉白樱花星雨！",4.5)}};const h=t.clone();h.y+=1.72;const p=this.world.raycast(h,this.explorer.getLookDirection(),7.5,!0);if(p){if(p.blockId===S.LANTERN_GLOW||p.blockId===S.CRYSTAL_CYAN||p.blockId===S.CRYSTAL_AMETHYST||p.blockId===S.FROST_RUNE_GLOW||p.blockId===S.STAR_CORE)return{prompt:"✨ 按 [E] 用魔杖共鸣星辉晶石 · 绽放流光星火",execute:()=>{this.explorer.triggerWandSwing(),this.audio.playInteractChime(),this.dynamicWorld.spawnMiniSparkles(new C(p.x+.5,p.y+.8,p.z+.5),"#7af5ff",28)}};if(p.blockId===S.ROSE_STAINED_GLASS||p.blockId===S.WARM_WINDOW)return{prompt:"🏰 按 [E] 轻叩童话花窗 · 倾听屋内八音盒回响",execute:()=>{this.explorer.triggerWandSwing(),this.audio.playNpcGreeting(2),this.showBubble("🕯️ 温暖的窗内","窗内传出温柔的笑语与茶杯轻碰声，壁炉火光暖融融的～",3.8)}}}return null}update(t,e){for(const n of this.portals)n.ringMesh.rotation.z=e*1.4,n.gemMesh.rotation.y=e*2.2,n.gemMesh.position.y=1.45+Math.sin(e*3)*.22;this.dialogTimer>0&&(this.dialogTimer-=t,this.dialogTimer<=0&&this.dialogBoxEl.classList.add("hidden"));for(let n=this.magicBolts.length-1;n>=0;n--){const s=this.magicBolts[n];s.age+=t,s.trailTimer+=t,s.mesh.rotation.x+=8*t,s.mesh.rotation.y+=8*t;const r=s.vel.length()*t,o=this.world.raycast(s.mesh.position,s.vel.clone().normalize(),r+.4,!0);if(s.trailTimer>=.04&&(s.trailTimer=0,this.dynamicWorld.spawnMiniSparkles(s.mesh.position,"#ff9ef5",2)),o||s.age>=1.45){const a=s.mesh.position.clone();this.dynamicWorld.launchFirework(a),this.celestialWonders.triggerArcaneResonance(),this.group.remove(s.mesh),this.magicBolts.splice(n,1)}else s.mesh.position.addScaledVector(s.vel,t)}}}class l0{constructor(){tt(this,"ctx",null);tt(this,"isPlaying",!1);tt(this,"timerId",null);tt(this,"step",0);tt(this,"melodyNotes",[523.25,659.25,783.99,987.77,880,659.25,523.25,587.33,440,523.25,659.25,880,783.99,659.25,587.33,523.25,349.23,440,523.25,659.25,783.99,659.25,523.25,440,392,493.88,587.33,783.99,659.25,587.33,493.88,392])}toggle(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}start(){this.isPlaying||(this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.isPlaying=!0,this.playTick(),this.timerId=window.setInterval(()=>this.playTick(),430))}stop(){this.isPlaying=!1,this.timerId!==null&&(clearInterval(this.timerId),this.timerId=null)}playTick(){if(!this.ctx||!this.isPlaying)return;const t=this.ctx.currentTime,e=this.melodyNotes[this.step%this.melodyNotes.length];this.pluckNote(e,t,.08,1.9),this.step%4===0&&this.pluckNote(e*.5,t,.045,2.6),this.step%8===2&&this.pluckNote(e*2,t+.02,.022,1.2),this.step++}pluckNote(t,e,n,s){if(!this.ctx)return;const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(t,e),o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(n,e+.018),o.gain.exponentialRampToValueAtTime(1e-4,e+s),r.connect(o),o.connect(this.ctx.destination),r.start(e),r.stop(e+s+.05)}ensureContext(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}playInteractChime(){const e=this.ensureContext().currentTime;[523.25,659.25,783.99,1046.5].forEach((n,s)=>{this.pluckNote(n,e+s*.065,.075,1.1)})}playBlockPop(t=!1){const n=this.ensureContext().currentTime;this.pluckNote(t?330:587.33,n,.065,.22),this.pluckNote(t?246.94:880,n+.04,.045,.25)}playNpcGreeting(t=0){const n=this.ensureContext().currentTime,s=480+t%5*65;this.pluckNote(s,n,.06,.25),this.pluckNote(s*1.25,n+.07,.065,.32),this.pluckNote(s*1.5,n+.14,.055,.4)}playWandCast(){const e=this.ensureContext().currentTime;this.pluckNote(659.25,e,.055,.35),this.pluckNote(987.77,e+.045,.06,.55),this.pluckNote(1318.5,e+.09,.045,.7)}}async function h0(){const i=document.getElementById("canvas-container"),t=document.getElementById("loading-screen"),e=document.getElementById("loading-status"),n=document.getElementById("loading-bar"),s=document.getElementById("voxel-stats"),r=document.getElementById("control-toast"),o=(I,z)=>(n.style.width=`${I}%`,e.textContent=z,new Promise(X=>requestAnimationFrame(()=>X()))),a=new zm({antialias:!0,powerPreference:"high-performance"});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(window.innerWidth,window.innerHeight),a.shadowMap.enabled=!0,a.shadowMap.type=Bc,a.toneMapping=ko,a.toneMappingExposure=1.06,i.appendChild(a.domElement);const l=new km,f=new He(48,window.innerWidth/window.innerHeight,.25,980);f.position.set(64,46,86),l.add(f);const u=new vg(f,a.domElement);u.enableDamping=!0,u.dampingFactor=.065,u.maxDistance=240,u.minDistance=8,u.maxPolarAngle=Math.PI*.72,u.target.set(0,38,-24);const h=new Ug(a),p=new Fg(l,f),c=new Ui(new lt(window.innerWidth,window.innerHeight),.36,.65,.82),m=new kg;h.addPass(p),h.addPass(c),h.addPass(m),await o(28,"正在手绘 16×16 像素艺术纹理图集...");const _=Yg(),g=new qg(_);l.add(g.group),await o(58,"正在雕琢星冠皇家圣城、童话风车镇与彩虹浮岛...");const d=i0(g);await o(84,"正在烘焙逐顶点环境光遮蔽 (AO) 与体素网格..."),g.rebuildDirtyChunks(),await o(96,"正在唤醒星云巨鲸、冰火神兽、银河列车与奥术星阵...");const v=new s0(l,g),M=new r0(g,d);l.add(M.group);const x=new o0(d.wonders);l.add(x.group);const T=new a0(g,f,a.domElement);l.add(T.avatar);const b=new l0;let R="orbit";const L=document.querySelectorAll("[data-mode]"),E=document.getElementById("crosshair"),y=document.getElementById("interact-prompt");let D=null;const B=()=>{s.textContent=`共 ${g.blockCount.toLocaleString()} 枚像素方块 · 60 FPS`};B(),M.releaseSkyLanterns(3),await o(100,"欢迎来到星冠云国！"),setTimeout(()=>{t.classList.add("fade-out")},220);let k=null;const J=(I,z)=>{R!=="orbit"&&K("orbit"),k={fromPos:f.position.clone(),toPos:I.clone(),fromTarget:u.target.clone(),toTarget:z.clone(),t:0}},et=()=>{const I=T.isFirstPerson?"第一人称":"第三人称";r.textContent=st?`🧱 ${I}建造：准星对准方块 · 左键放置 · 右键拆除 · [B] 退出建造 · [ESC] 释放鼠标`:`🪄 ${I}漫步：WASD 移动 · [E] 场景互动 · [F] 魔杖星弹 · [V] 切换一/三人称 · 双击空格飞行`},K=I=>{R!==I&&T.exitWalkMode(I),R=I,T.activeMode=I,k=null,L.forEach(z=>z.classList.toggle("active",z.dataset.mode===I)),u.enabled=I==="orbit",E.classList.toggle("hidden",I!=="walk"&&!st),I!=="walk"&&(y.classList.add("hidden"),D=null),I==="orbit"?r.textContent=st?"🧱 建造模式：左键放置方块 · 右键敲除方块 · 滚轮缩放":"🖱️ 左键旋转 · 右键平移 · 滚轮缩放 · 双击场景任意位置聚焦":I==="cinematic"?r.textContent="🎬 正在进行无人机电影环游运镜 · 点击「自由俯瞰」可随时接管":I==="dragon"?r.textContent="🐉 正在骑乘「九霄星霜圣龙」· 点击画面移动鼠标可 360° 自由转头环顾！":I==="train"?r.textContent="🚂 正在搭乘「云海银河蒸汽列车」· 移动鼠标可自由欣赏窗外奇观！":I==="walk"&&(T.enterWalkMode(),et())},Q=new c0(g,M,x,T,v,b,K);l.add(Q.group),y.addEventListener("click",()=>{D==null||D.execute()}),L.forEach(I=>{I.addEventListener("click",()=>{K(I.dataset.mode)})});const H={panorama:[.5,13.05,22.5,0,36,-28],frost:[.5,83.05,-63.5,.5,87,-88],clockwork:[69.5,39.05,22.5,78,56,22],amusement:[-12.5,13.05,35.5,-14,22,42],celestial:[.5,18.05,-6.5,0,88,-68],castle:[.5,23.05,-15.5,0,38,-36],plaza:[.5,13.05,21.5,.5,17,15.5],windmill:[29.5,16.05,18.5,36,26,18],rainbow:[54.5,26.05,-11.5,64,34,-12],sakura:[-31.5,14.05,12.5,-38,22,12]},at=document.querySelectorAll("[data-landmark]");at.forEach(I=>{I.addEventListener("click",()=>{const z=I.dataset.landmark,X=d.landmarks[z];if(X)if(at.forEach(q=>q.classList.toggle("active",q===I)),R==="walk"&&H[z]){const[q,xt,ht,vt,qt,rt]=H[z];b.playInteractChime(),T.teleportTo(q,xt,ht,new C(vt,qt,rt)),M.spawnMiniSparkles(new C(q,xt+1,ht),"#7af5ff",24)}else J(X.position,X.target)})});const ft=document.querySelectorAll("[data-preset]"),yt=document.getElementById("btn-auto-cycle"),Ot=I=>{ft.forEach(z=>z.classList.toggle("active",z.dataset.preset===I))};ft.forEach(I=>{I.addEventListener("click",()=>{const z=I.dataset.preset;v.setPreset(z),Ot(z),z==="night"&&M.releaseSkyLanterns(4)})}),window.addEventListener("kingdom-preset-changed",I=>{const z=I.detail;Ot(z)}),yt.addEventListener("click",()=>{v.autoCycle=!v.autoCycle,yt.classList.toggle("active",v.autoCycle)}),document.getElementById("btn-meteor").addEventListener("click",()=>{v.summonMeteorShower(),x.triggerArcaneResonance()}),document.getElementById("btn-firework").addEventListener("click",()=>{M.launchFirework(),setTimeout(()=>M.launchFirework(),240)}),document.getElementById("btn-lantern").addEventListener("click",()=>{M.releaseSkyLanterns(5)});const Xt=document.getElementById("btn-music");Xt.addEventListener("click",()=>{const I=b.toggle();Xt.textContent=I?"🎵 音乐: 开":"🎵 音乐: 关",Xt.classList.toggle("active",I)}),document.getElementById("btn-screenshot").addEventListener("click",()=>{h.render();const I=a.domElement.toDataURL("image/png"),z=document.createElement("a");z.href=I,z.download=`星冠云国_${v.currentPreset}_${Date.now()}.png`,z.click()});const $=document.getElementById("hud-root"),it=document.getElementById("restore-ui-btn"),_t=()=>{const I=$.classList.toggle("ui-hidden");it.classList.toggle("hidden",!I)};document.getElementById("btn-hide-ui").addEventListener("click",_t),it.addEventListener("click",_t);let st=!1,Ct=Ys[0];const It=document.getElementById("btn-build-mode"),Bt=document.getElementById("build-palette"),oe=document.getElementById("palette-slots"),Kt=()=>{oe.innerHTML="",Ys.forEach((I,z)=>{const X=Js[I],q=document.createElement("button");q.className=`palette-slot ${I===Ct?"active":""}`,q.innerHTML=`<span class="swatch-dot" style="background:${X.swatch}"></span><span>${z+1}. ${X.name}</span>`,q.addEventListener("click",()=>{Ct=I,Kt()}),oe.appendChild(q)})};Kt();const te=new Vm(new cg(new Z(1.04,1.04,1.04)),new vl({color:"#ffe382",transparent:!0,opacity:.9}));te.visible=!1,l.add(te);const U=()=>{st=!st,It.classList.toggle("active",st),Bt.classList.toggle("hidden",!st),te.visible=!1,E.classList.toggle("hidden",R!=="walk"&&!st),R==="orbit"?r.textContent=st?"🧱 建造模式：单击左键放置方块 · 单击右键移除方块 · 拖拽仍可旋转视角":"🖱️ 左键旋转 · 右键平移 · 滚轮缩放 · 双击场景任意位置聚焦":R==="walk"&&et()};It.addEventListener("click",U),window.addEventListener("keydown",I=>{if(I.code==="KeyH"&&_t(),I.code==="KeyB"&&U(),R==="walk"&&(I.code==="KeyV"&&setTimeout(et,10),I.code==="KeyE"&&D&&D.execute(),I.code==="KeyF"&&Q.castMagicStarBolt()),st&&I.key>="1"&&I.key<="7"){const z=Number(I.key)-1;Ys[z]&&(Ct=Ys[z],Kt())}});const Ee=new lt,zt=new mg;let Yt={x:0,y:0};const Lt=(I,z)=>R==="walk"||document.pointerLockElement===a.domElement?(Ee.set(0,0),zt.setFromCamera(Ee,f),g.raycast(zt.ray.origin,zt.ray.direction,12,!0)):(Ee.x=(I??window.innerWidth/2)/window.innerWidth*2-1,Ee.y=-((z??window.innerHeight/2)/window.innerHeight)*2+1,zt.setFromCamera(Ee,f),g.raycast(zt.ray.origin,zt.ray.direction,160,!0));a.domElement.addEventListener("pointerdown",I=>{Yt={x:I.clientX,y:I.clientY}}),a.domElement.addEventListener("pointermove",I=>{if(!st||R==="walk")return;const z=Lt(I.clientX,I.clientY);z?(te.visible=!0,te.position.set(z.x+.5,z.y+.5,z.z+.5)):te.visible=!1}),a.domElement.addEventListener("pointerup",I=>{if(!(!(document.pointerLockElement===a.domElement)&&Math.hypot(I.clientX-Yt.x,I.clientY-Yt.y)>5)){if(st){const X=Lt(I.clientX,I.clientY);if(!X)return;if(T.triggerWandSwing(),I.button===0){const q=X.x+X.nx,xt=X.y+X.ny,ht=X.z+X.nz;g.set(q,xt,ht,Ct),g.rebuildDirtyChunks(),b.playBlockPop(!1),B()}else I.button===2&&(g.set(X.x,X.y,X.z,S.AIR),g.rebuildDirtyChunks(),b.playBlockPop(!0),B());return}R==="walk"&&I.button===2&&D&&D.execute()}}),a.domElement.addEventListener("dblclick",I=>{if(R!=="orbit"||st)return;const z=Lt(I.clientX,I.clientY);if(!z)return;const X=new C(z.x+.5,z.y+.5,z.z+.5),q=f.position.clone().sub(u.target),xt=be.clamp(q.length()*.68,18,65);q.setLength(xt),J(X.clone().add(q),X)}),a.domElement.addEventListener("contextmenu",I=>I.preventDefault()),window.addEventListener("resize",()=>{const I=window.innerWidth,z=window.innerHeight;f.aspect=I/z,f.updateProjectionMatrix(),a.setSize(I,z),h.setSize(I,z),c.setSize(I,z)});const ae=new El;let Pt=0,P=0;const A=()=>{requestAnimationFrame(A);const I=Math.min(ae.getDelta(),.05),z=ae.elapsedTime;if(k&&R==="orbit"){k.t=Math.min(1,k.t+I*1.35);const X=1-Math.pow(1-k.t,3);f.position.lerpVectors(k.fromPos,k.toPos,X),u.target.lerpVectors(k.fromTarget,k.toTarget,X),k.t>=1&&(k=null)}if(R==="orbit")u.update();else if(R==="cinematic")T.updateCinematic(I);else if(R==="dragon"){const X=M.getDragonCameraPose(z);T.applyRidePose(X.position,X.lookAt,I)}else if(R==="train"){const X=x.getTrainCameraPose();T.applyRidePose(X.position,X.lookAt,I)}else if(R==="walk"){let X;if(T.rideAttachment==="ferris"?X=x.getFerrisCabinWorldPos():T.rideAttachment==="carousel"&&(X=x.getCarouselHorseWorldPos()),T.updateWalk(I,z,X),st){const q=Lt();q?(te.visible=!0,te.position.set(q.x+.5,q.y+.5,q.z+.5)):te.visible=!1}D=Q.detectAvailableInteraction(),D?(y.textContent=D.prompt,y.classList.remove("hidden")):y.classList.add("hidden")}if(g.materials.transparent.emissiveIntensity=.22+Math.sin(z*2.2)*.06,v.update(I,z),c.strength=v.curBloomStrength,M.update(I,z),x.update(I,z),Q.update(I,z),h.render(),Pt++,P+=I,P>=1){const X=Math.round(Pt/P);s.textContent=`共 ${g.blockCount.toLocaleString()} 枚像素方块 · ${X} FPS`,Pt=0,P=0}};A()}h0();
