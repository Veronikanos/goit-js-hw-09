!function(){var e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]"),t=document.querySelector("body"),a=null;function l(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}d.disabled=!0,e.addEventListener("click",(function(t){a=setInterval(l,1e3),d.disabled=!d.disabled,e.disabled=!e.disabled})),d.addEventListener("click",(function(t){d.disabled=!d.disabled,e.disabled=!e.disabled,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.633b0420.js.map