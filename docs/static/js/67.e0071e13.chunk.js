(this["webpackJsonpp1-app"]=this["webpackJsonpp1-app"]||[]).push([[67],{200:function(e,a,t){!function(e){"use strict";e.defineMode("mathematica",(function(e,a){var t="[a-zA-Z\\$][a-zA-Z0-9\\$]*",n="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",m="(?:`(?:`?"+n+")?)",c=new RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)"+m+"?(?:\\*\\^[+-]?\\d+)?))"),o=new RegExp("(?:"+n+m+"?(?:\\*\\^[+-]?\\d+)?)"),r=new RegExp("(?:`?)(?:"+t+")(?:`(?:"+t+"))*(?:`?)");function z(e,a){var t;return'"'===(t=e.next())?(a.tokenize=i,a.tokenize(e,a)):"("===t&&e.eat("*")?(a.commentLevel++,a.tokenize=A,a.tokenize(e,a)):(e.backUp(1),e.match(c,!0,!1)||e.match(o,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)||e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)||e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(r,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function i(e,a){for(var t,n=!1,m=!1;null!=(t=e.next());){if('"'===t&&!m){n=!0;break}m=!m&&"\\"===t}return n&&!m&&(a.tokenize=z),"string"}function A(e,a){for(var t,n;a.commentLevel>0&&null!=(n=e.next());)"("===t&&"*"===n&&a.commentLevel++,"*"===t&&")"===n&&a.commentLevel--,t=n;return a.commentLevel<=0&&(a.tokenize=z),"comment"}return{startState:function(){return{tokenize:z,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},blockCommentStart:"(*",blockCommentEnd:"*)"}})),e.defineMIME("text/x-mathematica",{name:"mathematica"})}(t(25))}}]);
//# sourceMappingURL=67.e0071e13.chunk.js.map