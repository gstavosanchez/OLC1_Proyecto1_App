(this["webpackJsonpp1-app"]=this["webpackJsonpp1-app"]||[]).push([[64],{197:function(e,t,n){!function(e){"use strict";e.defineMode("julia",(function(t,n){function r(e,t,n){return"undefined"===typeof n&&(n=""),"undefined"===typeof t&&(t="\\b"),new RegExp("^"+n+"(("+e.join(")|(")+"))"+t)}var i="\\\\[0-7]{1,3}",a="\\\\x[A-Fa-f0-9]{1,2}",s="\\\\[abefnrtv0%?'\"\\\\]",u="([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])",o=["[<>]:","[<>=]=","<<=?",">>>?=?","=>","--?>","<--[->]?","\\/\\/","\\.{2,3}","[\\.\\\\%*+\\-<>!\\/^|&]=?","\\?","\\$","~",":"],c=n.operators||r(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","--?>","<--[->]?","\\/\\/","[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),l=n.delimiters||/^[;,()[\]{}]/,f=n.identifiers||/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,m=r([i,a,s,u],"'"),p=["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],d=["end","else","elseif","catch","finally"],h=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],F=["true","false","nothing","NaN","Inf"];e.registerHelper("hintWords","julia",h.concat(F));var k=r(p),b=r(d),g=r(h),v=r(F),x=/^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,y=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,A=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/,z=r(o,"","@"),E=r(o,"",":");function _(e){return e.nestedArrays>0}function C(e){return e.nestedGenerators>0}function D(e,t){return"undefined"===typeof t&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function T(e,t){if(e.match("#=",!1))return t.tokenize=P,t.tokenize(e,t);var n=t.leavingExpr;if(e.sol()&&(n=!1),t.leavingExpr=!1,n&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r,i=e.peek();if("#"===i)return e.skipToEnd(),"comment";if("["===i&&(t.scopes.push("["),t.nestedArrays++),"("===i&&(t.scopes.push("("),t.nestedGenerators++),_(t)&&"]"===i){for(;t.scopes.length&&"["!==D(t);)t.scopes.pop();t.scopes.pop(),t.nestedArrays--,t.leavingExpr=!0}if(C(t)&&")"===i){for(;t.scopes.length&&"("!==D(t);)t.scopes.pop();t.scopes.pop(),t.nestedGenerators--,t.leavingExpr=!0}if(_(t)){if("end"==t.lastToken&&e.match(":"))return"operator";if(e.match("end"))return"number"}if((r=e.match(k,!1))&&t.scopes.push(r[0]),e.match(b,!1)&&t.scopes.pop(),e.match(/^::(?![:\$])/))return t.tokenize=w,t.tokenize(e,t);if(!n&&(e.match(y)||e.match(E)))return"builtin";if(e.match(c))return"operator";if(e.match(/^\.?\d/,!1)){var a=RegExp(/^im\b/),s=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(s=!0),e.match(/^0x[0-9a-f_]+/i)&&(s=!0),e.match(/^0b[01_]+/i)&&(s=!0),e.match(/^0o[0-7_]+/i)&&(s=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(s=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(s=!0),s)return e.match(a),t.leavingExpr=!0,"number"}if(e.match("'"))return t.tokenize=j,t.tokenize(e,t);if(e.match(A))return t.tokenize=B(e.current()),t.tokenize(e,t);if(e.match(x)||e.match(z))return"meta";if(e.match(l))return null;if(e.match(g))return"keyword";if(e.match(v))return"builtin";var u=t.isDefinition||"function"==t.lastToken||"macro"==t.lastToken||"type"==t.lastToken||"struct"==t.lastToken||"immutable"==t.lastToken;return e.match(f)?u?"."===e.peek()?(t.isDefinition=!0,"variable"):(t.isDefinition=!1,"def"):(t.leavingExpr=!0,"variable"):(e.next(),"error")}function w(e,t){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match("{")?t.nestedParameters++:e.match("}")&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():0==t.nestedParameters&&(t.tokenize=T),"builtin"}function P(e,t){return e.match("#=")&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match("=#")&&(t.nestedComments--,0==t.nestedComments&&(t.tokenize=T)),"comment"}function j(e,t){var n,r=!1;if(e.match(m))r=!0;else if(n=e.match(/\\u([a-f0-9]{1,4})(?=')/i))((i=parseInt(n[1],16))<=55295||i>=57344)&&(r=!0,e.next());else if(n=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var i;(i=parseInt(n[1],16))<=1114111&&(r=!0,e.next())}return r?(t.leavingExpr=!0,t.tokenize=T,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match("'")&&(t.tokenize=T),"error")}function B(e){function t(t,n){if(t.eat("\\"))t.next();else{if(t.match(e))return n.tokenize=T,n.leavingExpr=!0,"string";t.eat(/[`"]/)}return t.eatWhile(/[^\\`"]/),"string"}return'"""'===e.substr(-3)?e='"""':'"'===e.substr(-1)&&(e='"'),t}return{startState:function(){return{tokenize:T,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,n){var r=0;return("]"===n||")"===n||/^end\b/.test(n)||/^else/.test(n)||/^catch\b/.test(n)||/^elseif\b/.test(n)||/^finally/.test(n))&&(r=-1),(e.scopes.length+r)*t.indentUnit},electricInput:/\b(end|else|catch|finally)\b/,blockCommentStart:"#=",blockCommentEnd:"=#",lineComment:"#",closeBrackets:'()[]{}""',fold:"indent"}})),e.defineMIME("text/x-julia","julia")}(n(25))}}]);
//# sourceMappingURL=64.b0b22804.chunk.js.map