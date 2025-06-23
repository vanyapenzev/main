$(function(){$("body").append(`<div id="killLogBlock"></div>`)});let killLogTimer=null;function UI_killLogSend(a,b,c,d,e){5<=$(".killLog-item").length&&$(".killLog-item").last().slideUp(function(){$(this).remove()}),$("#killLogBlock").prepend(`
        <div class="killLog-item">
            <span class="menu-text s-16" style="color: #${a};">${b}</span>
            <img src="KillLog/die.png" style="height: 20px; margin-left: 10px;">
            <span class="menu-text s-16" style="color: #${c}; margin-left: 10px;">${d}</span>
            ${""==e?``:`<img src="KillLog/w${e}.png" style="max-height: 20px; max-width: 40px; margin-left: 10px;">`}
        </div>`),$(".killLog-item").first().hide().slideDown(),clearInterval(killLogTimer),killLogTimer=setInterval(function(){$(".killLog-item").is(":visible")?$(".killLog-item").last().slideUp(function(){$(this).remove()}):clearInterval(killLogTimer)},9e3)}