var render=function(){"use strict";return function(r,e){var n=void 0;if("string"==typeof r){var t=r.slice(0,1);"."==t||"#"==t?r=document.querySelector(r):n=r}return n||(n=r.innerHTML),n.replace(/\{{(.*?)\}}/g,function(r){var n=e;return r.slice(2,r.length-2).trim().split(".").forEach(function(r){r&&(n=n[r])}),n||""})}}();