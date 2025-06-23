function UI_effect_drugs(){let a=$(document).height(),b=$(document).width(),c=getRandom(400,900),d=getRandom(400,900),e=`
        height: ${c}px;
        width: ${d}px;
        top: ${getRandom(0,a-300)}px;
        left: ${getRandom(0,b-300)}px;
        transform: rotate(${getRandom(0,360)}deg);
        opacity: 0.3;
        transition: width 2s, height 2s;
        display: none;
    `,f=$("<img style=\"position: absolute;"+e+"\" src=\"package://Player/ChatAndUI/Effect/Drugs/"+"1.png"+"\">");$("body").append(f),f.fadeIn(getRandom(500,1500),function(){f.css("height",c+getRandom(120,300)+"px"),f.css("width",d+getRandom(120,300)+"px"),setTimeout(()=>{f.fadeOut(getRandom(400,1e3),function(){f.remove()})},200)})}var bagInHead=!1,bagEffectObject=null;function UI_effect_bagInHead(a){if(a&&!bagInHead){bagInHead=!0;return bagEffectObject=$(`<div style="${"\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 100%;\n            width: 100%;\n            background: url(http://files.gta5rp.com/UI/tkan.png);\n            background-size: 100% 100%;\n            background-position: center;\n            z-index: -1;\n        "}"></div>`),void $("body").append(bagEffectObject)}return!a&&bagInHead?(bagInHead=!1,void bagEffectObject.remove()):void 0}$(function(){$("body").append(`
        <div 
            id="gameCounterStart" style="
                position: absolute; 
                top: 25%; 
                left: 50%; 
                transform: translate(-50%, -50%);
                font-family: 'Geometria Regular';
                font-size: 100px;
                color: #fff;
            ">
        </div>`)});function startGameCounterSec(a){const b=$("#gameCounterStart");b.hide().text(a+"").slideDown(),a--;const c=setInterval(()=>0>=a?(b.text(""),void clearInterval(c)):void(b.hide().text(a+"").slideDown(),a--),1e3)}function getRandom(a,b){return Math.floor(Math.random()*(b-a)+a)}