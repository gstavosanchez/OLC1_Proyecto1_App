(this["webpackJsonpp1-app"]=this["webpackJsonpp1-app"]||[]).push([[106],{241:function(e,t,r){!function(e){"use strict";e.defineMode("tiddlywiki",(function(){var e={},t={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},r=/[\w_\-]/i,n=/^\-\-\-\-+$/,i=/^\/\*\*\*$/,a=/^\*\*\*\/$/,u=/^<<<$/,o=/^\/\/\{\{\{$/,f=/^\/\/\}\}\}$/,c=/^<!--\{\{\{-->$/,l=/^<!--\}\}\}-->$/,m=/^\{\{\{$/,k=/^\}\}\}$/,h=/.*?\}\}\}/;function s(e,t,r){return t.tokenize=r,r(e,t)}function p(t,k){var h=t.sol(),p=t.peek();if(k.block=!1,h&&/[<\/\*{}\-]/.test(p)){if(t.match(m))return k.block=!0,s(t,k,w);if(t.match(u))return"quote";if(t.match(i)||t.match(a))return"comment";if(t.match(o)||t.match(f)||t.match(c)||t.match(l))return"comment";if(t.match(n))return"hr"}if(t.next(),h&&/[\/\*!#;:>|]/.test(p)){if("!"==p)return t.skipToEnd(),"header";if("*"==p)return t.eatWhile("*"),"comment";if("#"==p)return t.eatWhile("#"),"comment";if(";"==p)return t.eatWhile(";"),"comment";if(":"==p)return t.eatWhile(":"),"comment";if(">"==p)return t.eatWhile(">"),"quote";if("|"==p)return"header"}if("{"==p&&t.match("{{"))return s(t,k,w);if(/[hf]/i.test(p)&&/[ti]/i.test(t.peek())&&t.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==p)return"string";if("~"==p)return"brace";if(/[\[\]]/.test(p)&&t.match(p))return"brace";if("@"==p)return t.eatWhile(r),"link";if(/\d/.test(p))return t.eatWhile(/\d/),"number";if("/"==p){if(t.eat("%"))return s(t,k,d);if(t.eat("/"))return s(t,k,$)}if("_"==p&&t.eat("_"))return s(t,k,v);if("-"==p&&t.eat("-")){if(" "!=t.peek())return s(t,k,x);if(" "==t.peek())return"brace"}return"'"==p&&t.eat("'")?s(t,k,b):"<"==p&&t.eat("<")?s(t,k,z):(t.eatWhile(/[\w\$_]/),e.propertyIsEnumerable(t.current())?"keyword":null)}function d(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=p;break}n="%"==r}return"comment"}function b(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=p;break}n="'"==r}return"strong"}function w(e,t){var r=t.block;return r&&e.current()?"comment":!r&&e.match(h)||r&&e.sol()&&e.match(k)?(t.tokenize=p,"comment"):(e.next(),"comment")}function $(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=p;break}n="/"==r}return"em"}function v(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=p;break}n="_"==r}return"underlined"}function x(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=p;break}n="-"==r}return"strikethrough"}function z(e,r){if("<<"==e.current())return"macro";var n=e.next();return n?">"==n&&">"==e.peek()?(e.next(),r.tokenize=p,"macro"):(e.eatWhile(/[\w\$_]/),t.propertyIsEnumerable(e.current())?"keyword":null):(r.tokenize=p,null)}return{startState:function(){return{tokenize:p}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}})),e.defineMIME("text/x-tiddlywiki","tiddlywiki")}(r(25))}}]);
//# sourceMappingURL=106.9fa17bd8.chunk.js.map