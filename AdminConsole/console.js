$("body").append(`
    <div id="consoleApp">
        <div id="consoleContainer" v-bind:class="{'open': open}">
            <div v-if="auth" class="c-wrapper">
                <keep-alive><component v-bind:is="currentTab" ref="currentTab"></component></keep-alive>
                <div class="mt-auto">
                    <div class="c-buttons">
                        <button 
                            v-for="t in tabs" 
                            v-on:click="app.openTab(t);" 
                            v-bind:class="{'selected': currentTab == t.template}" 
                            class="c-button"
                            style="padding: 8px 15px;">
                                {{ t.name }}
                            </button>
                    </div>
                </div>
            </div>
            <div v-else class="c-wrapper">
                <div class="mt-auto">
                    <div class="c-input-block">
                        <input 
                            v-model="form.pass" 
                            v-on:keyup.enter="app.onPassEnter(form.pass);" 
                            ref="iPass" class="c-input" type="password" placeholder="Пароль">
                    </div>
                </div>
            </div>
        </div>
        <div id="consoleNotifyBlock" v-bind:class="{'open': open}">
        </div>
    </div>
    <div id="consoleModalApp" class="menu-modal" v-bind:class="{'open': open}">
        <div class="menu-header">
            <div class="menu-header-text">{{ header }}</div>
        </div>
        <div class="menu-content">
            <div class="menu-text">{{ text }}</div>
            <div v-for="p in params" class="mt-10">
                <div class="menu-text">{{ p.text }}:</div>
                <div class="menu-input-block mt-5">
                    <input v-if="p.type == 'i'" v-model.number="p.value" class="menu-input">
                    <input v-else v-model="p.value" class="menu-input">
                </div>
            </div>
        </div>
        <div class="menu-footer center menu-buttons">
            <button v-on:click="sendModal();" class="menu-btn red shadow">Отправить</button>
            <button v-on:click="closeModal();" class="menu-btn">Отмена</button>
        </div>
    </div>
`);var commandList=[];const varList=[{var:"flyFirstSpeed",desc:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0451\u0442\u0430 fly",type:"f"},{var:"flyFirstMaxSpeed",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0451\u0442\u0430 fly",type:"f"},{var:"flyFirstMaxSubSpeed",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0451\u0442\u0430 2 fly",type:"f"},{var:"flySecondSpeed",desc:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0451\u0442\u0430 fly ( SHIFT )",type:"f"},{var:"flySecondMaxSpeed",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0451\u0442\u0430 fly ( SHIFT )",type:"f"},{var:"flySecondMaxSubSpeed",desc:"\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u0451\u0442\u0430 2 fly ( SHIFT )",type:"f"},{var:"flyCameraRotInterval",desc:"\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u043A\u0430\u043C\u0435\u0440\u044B",type:"f"},{var:"flyCameraRotSpeed",desc:"\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u043A\u0430\u043C\u0435\u0440\u044B",type:"f"},{var:"flyEnableNametags",desc:"\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C ID \u043F\u043E \u0432\u0440\u0435\u043C\u044F fly ( 1 \u0438\u043B\u0438 0 )",type:"f"}],mainTab=Vue.component("mainConsoleTab",{template:`
        <div class="d-flex column flex-1">
            <ul class="c-main-list" ref="iConsoleList">
                <li v-for="i in list" v-bind:class="i.css || ''">{{ i.text }}</li>
            </ul>
            <div class="mt-auto mb-10">
                <div class="c-input-block">
                    <div v-if="helperLine.length > 0" class="c-input-help-block">{{ helperLine }}</div>
                    <input 
                        v-model="input" 
                        v-on:keyup.enter="sendCommand(input)"
                        v-on:keyup.up="historySearch(-1)"
                        v-on:keyup.down="historySearch(1)"
                        v-on:keyup.tab="autoComplete($event)" 
                        v-on:input="onInputChange" 
                        ref="iConsole" class="c-input" placeholder="Команда">
                </div>
            </div>
        </div>
    `,data(){return{list:[{text:"Admin Console 1.1",css:"help"},{text:"\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C.",css:"help"},{text:"\u0414\u043B\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u043B\u044E\u0431\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435, \u0432\u0432\u0435\u0434\u0438\u0442\u0435: (\u0438\u043C\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u044B) --help",css:"help"},{text:"\u0421\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u043A\u043E\u043C\u0430\u043D\u0434: help",css:"help"},{text:"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445: var-list ( var-get / var-set )",css:"help"}],helperLine:"",helperAutoIndex:0,input:"",history:[],historyIndex:0}},mounted(){this.$refs.iConsole.focus()},methods:{async sendCommand(e){if(0==e.length)return;const t=e.trim().split(" "),n=t[0].toLowerCase();if("super-secret"===n)return adminConsole.app.tabs.push({name:"\u041A\u043E\u0434",template:codeTab}),this.input="",void(this.helperLine="");if("var-list"===n)return varList.forEach(e=>{this.newItemHelp(`Переменная: ${e.var} ${e.desc} ( ${e.type} )`)}),this.input="",this.helperLine="",void this.addConsoleHistory(e);if("var-get"===n){let n=!1;for(const e of varList)if(e.var==t[1]){n=!0;break}if(!n)return void this.newItemError("\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");const r=await rpc.callClient("client_getGlobalValue",t[1]);return this.newItemText(`Переменная ${t[1]} = ${r}`),this.input="",this.helperLine="",void this.addConsoleHistory(e)}if("var-set"===n){let n=!1,r="f";for(const e of varList)if(e.var==t[1]){r=e.type,n=!0;break}if(!n)return void this.newItemError("\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.");if("f"==r){if(""==t[2]||isNaN(t[2]))return void this.newItemError("\u041E\u0448\u0438\u0431\u043A\u0430.");t[2]=parseFloat(t[2])}return await rpc.triggerClient("client_setGlobalValue",[t[1],t[2]]),this.newItemText(`Готово.`),this.input="",this.helperLine="",void this.addConsoleHistory(e)}if("help"===n)return commandList.forEach(e=>{this.newItemHelp(`Команда: ${e.command} ${this._commandArgToText(e.argType)} - ${e.desc}`)}),this.input="",this.helperLine="",void this.addConsoleHistory(e);const r=commandList.find(e=>e.command===n);if(!r)return this.newItemError("\u041E\u0448\u0438\u0431\u043A\u0430, \u0434\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0438\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u0430.");if(e.endsWith("--help"))return this.newItemHelp(`Использование: ${r.command} ${this._commandArgToText(r.argType)}`),this.newItemHelp(`Описание: ${r.desc}`),this.input="",this.helperLine="",void this.addConsoleHistory(e);if(t.length<r.argType.length+1)return this.newItemError("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430\u0445.");let o=[];for(let n,a=0;a<r.argType.length;a++)if(n=r.argType[a],"p"==n){let e=parseInt(t[1+a]);if(isNaN(e)||0>e||1e4<e)return this.newItemError(`Параметр ${a+1} задан не верно. Одижалось натуральное число ( ID Игрока ).`);o.push(e)}else if("i"==n){let e=t[1+a];","==e[e.length-1]&&(e=e.substr(0,e.length-1));let n=parseInt(e);if(isNaN(n))return this.newItemError(`Параметр ${a+1} задан не верно. Одижалось целое число.`);o.push(n)}else if("f"==n){let e=t[1+a];","==e[e.length-1]&&(e=e.substr(0,e.length-1));let n=parseFloat(e);if(isNaN(n))return this.newItemError(`Параметр ${a+1} задан не верно. Одижалось число.`);o.push(n)}else if("s"==n)o.push(t[1+a]);else if("S"==n){let e=[];for(let n=a;n<t.length;n++)e.push(t[1+n]);o.push(e.join(" ").trim());break}const a=await rpc.callServer("server_adminConsole_command",[r.command,o]);return a&&a.error?void this.newItemError(a.errorText):void(this.input="",this.helperLine="",a&&a.closeConsole&&adminConsole.hide(),this.addConsoleHistory(e))},historySearch(e){let t=this.history.length;0==t||(this.historyIndex+=e,this.historyIndex>=t?this.historyIndex=0:0>this.historyIndex&&(this.historyIndex=t-1),this.input=this.history[this.historyIndex])},onInputChange(){if(0==this.input.length)return this.helperLine="",void(this.helperAutoIndex=0);const e=this.input.trimLeft().split(" "),t=e[0],n=commandList.find(e=>e.command==t);return n?(this.helperLine=`${n.command} ${this._commandArgToText(n.argType)} ${n.desc}`,void(this.helperAutoIndex=0)):void(this.helperLine=commandList.filter(e=>e.command.startsWith(t)).filter((e,t)=>25>t).map(e=>e.command).join(" "),this.helperAutoIndex=0)},autoComplete(e){const t=this.helperLine,n=t.split(" ")[this.helperAutoIndex];if(n)return this.input=n+" ",this.helperLine=t,this.helperAutoIndex++,void e.preventDefault()},newItemText(e){this.newItem({text:e})},newItemHelp(e){this.newItem({text:e,css:"help"})},newItemError(e){this.newItem({text:e,css:"error"})},newItem(e){200<this.list.length&&this.list.shift(),this.list.push(e),this.$nextTick(()=>this.$refs.iConsoleList.scrollTop=this.$refs.iConsoleList.scrollHeight+99)},addConsoleHistory(e){15<this.history.length&&this.history.shift(),this.history.push(e),this.historyIndex=this.history.length},onOpen(){this.historyIndex=this.history.length,this.$nextTick(()=>this.$refs.iConsole.focus())},_commandArgToText(e){let t="";for(let n=0;n<e.length;n++)switch(e[n]){case"p":t+="[ID \u0418\u0433\u0440\u043E\u043A\u0430] ";break;case"i":t+="[\u0426\u0435\u043B\u043E\u0435 \u0447\u0438\u0441\u043B\u043E] ";break;case"f":t+="[\u0427\u0438\u0441\u043B\u043E] ";break;case"s":t+="[\u0421\u043B\u043E\u0432\u043E] ";break;case"S":t+="[\u0421\u0442\u0440\u043E\u043A\u0430] ";break;default:t+="[UNK] ";}return""==t&&(t="[\u0411\u0435\u0437 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432]"),t.trimRight()}}});rpc.on("client_browser_adminConsole_loadCommand",e=>{commandList=e.map(e=>({command:e[0],desc:e[1],argType:e[2]}))});const codeTab=Vue.component("mainConsoleTab",{template:`
        <div class="d-flex column flex-1">
            <div class="c-input-block">
                <textarea v-model="codeForm" class="c-input" style="height: 200px;"></textarea>
            </div>
            <div class="mt-10">
                <button class="c-button" @click="runCode(codeForm)">Запуск</button>
            </div>
        </div>
    `,data(){return{codeForm:""}},methods:{runCode(e){serverAPI.send("server_adminConsole_test_client",e)},onOpen(){}}});var ADMIN_CHAT=["\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0447\u0430\u0442."],ADMIN_CHAT_UPDATE=!1,USE_NOTIFY=!0;const chatTab=Vue.component("adminChatTab",{template:`
        <div class="d-flex column flex-1">
            <ul class="c-main-list admin-chat" ref="iChatList">
                <li v-for="message in messages"><span v-html="message"></span></li>
            </ul>
            <div class="mt-auto mb-10">
                <div class="c-input-block">
                    <input v-model="input" v-on:keyup.enter="sendChat(input)" ref="iInput" class="c-input" placeholder="Текст">
                    <input v-model="useNotify" v-on:change="changeNotifyStatus" class="c-checkbox ml-5" type="checkbox">
                    <div class="menu-text ml-5">Оповещения</div>
                </div>
            </div>
        </div>
    `,data:()=>({messages:[],input:"",useNotify:!0}),methods:{sendChat(e){0==e.length||(rpc.triggerServer("server_adminConsole_chat_sendText",e),this.input="")},changeNotifyStatus(){USE_NOTIFY=this.useNotify},update(){ADMIN_CHAT_UPDATE||(this.messages=ADMIN_CHAT,ADMIN_CHAT_UPDATE=!0,this.$nextTick(()=>this.$refs.iChatList.scrollTop=this.$refs.iChatList.scrollHeight+99))},onOpen(){this.update(),this.$nextTick(()=>this.$refs.iInput.focus()),this.$nextTick(()=>this.$refs.iChatList.scrollTop=this.$refs.iChatList.scrollHeight+99)}}});function console_adminChat(e){if(200<ADMIN_CHAT.length&&ADMIN_CHAT.shift(),ADMIN_CHAT.push(unescape(e)),ADMIN_CHAT_UPDATE=!1,adminConsole.isOpen()&&adminConsole.isCurrentTab(chatTab)||!USE_NOTIFY||adminConsole.notifyWarning("<C> "+unescape(e)),adminConsole.isCurrentTab(chatTab)){const e=adminConsole.getCurrentTab();e.update()}}const manageTab=Vue.component("manageTab",{template:`
        <div class="d-fex column flex-1">
            <div v-if="selectType == ''" class="d-flex">
                <button @click="select('bizMenu')" class="c-button list-ml-10">Бизнесы</button>
                <button @click="select('gangZoneMenu')" class="c-button list-ml-10">Капт зоны</button>
                <button @click="select('whiteListMenu')" class="c-button list-ml-10">WhiteList</button>
            </div>
            <div v-else style="position: absolute; right: 10px; z-index: 999;">
                <button @click="prev" class="c-button">Назад</button>
            </div>
            <div v-if="selectType === 'whiteListMenu'" class="d-flex column flex-1">
                <div class="c-input-block">
                    <textarea v-model="whiteListMenu.list" class="c-input" style="height: 200px;"></textarea>
                </div>
            </div>
            <div v-if="selectType === 'bizMenu'" class="d-flex column flex-1">
                <div v-if="bizMenu.selectedBiz == null">
                    <div class="c-scroll" style="height: 345px;">
                        <div class="d-flex wrap">
                            <button v-for="biz in bizMenu.list" @click="selectBiz(biz)" class="c-button mt-5 mr-5" style="width: 220px;">{{ biz.name }}</button>
                        </div>
                    </div>
                </div>
                <div v-else class="d-flex column flex-1">
                    <div class="menu-text list-mt-5">Название: {{ bizMenu.selectedBiz.name }}</div>
                    <div class="menu-text list-mt-5">Тип: {{ bizMenu.selectedBiz.type }}</div>
                    <div class="menu-text list-mt-5">Владелец: {{ bizMenu.selectedBiz.owner }}</div>
                    <div class="menu-text list-mt-5">Продукты: {{ bizMenu.selectedBiz.productCount }} / {{ bizMenu.selectedBiz.productMaxCount }}</div>
                    <div class="menu-text list-mt-5">Крыша: {{ bizMenu.selectedBiz.defensive }}</div>
                    <div class="menu-text list-mt-5">Аренда: {{ bizMenu.selectedBiz.rentPrice }} | Налог: {{ bizMenu.selectedBiz.tax }}</div>
                    <div class="menu-text list-mt-5">Профит: {{ bizMenu.selectedBiz.profit.join(' ') }}</div>
                    <div class="menu-text list-mt-5">Расходы: {{ bizMenu.selectedBiz.costs.join(' ') }}</div>
                    <div class="list-mt-5">
                        <button v-on:click="bizRestoreProduct(bizMenu.selectedBiz)" class="c-button list-ml-10">Пополнить склад</button>
                        <button v-on:click="bizSellToGov(bizMenu.selectedBiz)" class="c-button red list-ml-10">Забрать бизнес</button>
                    </div>
                    <div class="mt-10">
                        <div class="d-flex center-align">
                            <div class="menu-text">Отдать:</div>
                            <button v-for="m in bizMenu.mafiaList" v-on:click="bizGiveTo(m.id, m.name)" class="c-button ml-5" style="width: 250px;">
                                {{ m.name }}
                            </button>
                            <button v-on:click="bizResetDef()" class="c-button ml-5" style="width: 250px;">Сброс</button>
                        </div>
                    </div>
                    <div class="mt-10">
                        <div class="d-flex center-align">
                            <div class="menu-text">Аренда:</div>
                            <div class="c-input-block ml-10" style="width: 100px">
                                <input v-model="bizMenu.bizEditRentPrice" class="c-input">
                            </div>
                            <div class="menu-text ml-10">Налог:</div>
                            <div class="c-input-block ml-10" style="width: 100px">
                                <input v-model="bizMenu.bizEditTax" class="c-input">
                            </div>
                            <button @click="changeBizRentTax" class="c-button ml-5">Поставить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="selectType === 'gangZoneMenu'" class="d-flex column flex-1">
                <div v-if="gangZoneMenu.selectedZone == null">
                    <div class="c-scroll" style="height: 300px;">
                        <div class="d-flex wrap">
                            <button v-for="g in gangZoneMenu.list" @click="gangZoneMenu.selectedZone = g" class="c-button mt-5 mr-5" style="width: 230px;">
                                {{ g.id }} {{ g.owner }}
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="gangZoneMenu.selectedZone == null" class="d-flex center-align mt-auto">
                    <div class="menu-text">Создать:</div>
                    <button v-for="g in gangZoneMenu.gangs" v-on:click="createGangZone(g.id)" class="c-button ml-5" style="width: 250px;">
                        {{ g.name }}
                    </button>
                    <div class="menu-text ml-20">Выбор зоны:</div>
                    <button class="c-button ml-5" v-on:click="findGangZone()">Зона где Я</button>
                </div>
                <div v-if="gangZoneMenu.selectedZone != null" class="d-flex column flex-1">
                    <div class="menu-text list-mt-5">ID: {{ gangZoneMenu.selectedZone.id }}</div>
                    <div class="menu-text list-mt-5">Владелец: {{ gangZoneMenu.selectedZone.owner }}</div>
                    <div class="mt-20">
                        <div class="d-flex center-align">
                            <div class="menu-text list-ml-10">Позиция:</div>
                            <div class="c-input-block list-ml-10" style="width: 140px">
                                <div class="menu-text mr-5" v-on:click="gangZoneMenu.selectedZone.position.x -= 0.5; zoneUpdateData();">[-]</div>
                                <input v-model="gangZoneMenu.selectedZone.position.x" v-on:keyup.enter="zoneUpdateData()" class="c-input">
                                <div class="menu-text ml-5" v-on:click="gangZoneMenu.selectedZone.position.x += 0.5; zoneUpdateData();">[+]</div>
                            </div>
                            <div class="c-input-block list-ml-10" style="width: 140px">
                                <div class="menu-text mr-5" v-on:click="gangZoneMenu.selectedZone.position.y -= 0.5; zoneUpdateData();">[-]</div>
                                <input v-model="gangZoneMenu.selectedZone.position.y" v-on:keyup.enter="zoneUpdateData()" class="c-input">
                                <div class="menu-text ml-5" v-on:click="gangZoneMenu.selectedZone.position.y += 0.5; zoneUpdateData();">[+]</div>
                            </div>
                            <div class="c-input-block list-ml-10" style="width: 140px">
                                <div class="menu-text mr-5" v-on:click="gangZoneMenu.selectedZone.position.z -= 0.5; zoneUpdateData();">[-]</div>
                                <input v-model="gangZoneMenu.selectedZone.position.z" v-on:keyup.enter="zoneUpdateData()" class="c-input">
                                <div class="menu-text ml-5" v-on:click="gangZoneMenu.selectedZone.position.z += 0.5; zoneUpdateData();">[+]</div>
                            </div>
                            <div class="menu-text list-ml-10">Размер:</div>
                            <div class="c-input-block list-ml-10" style="width: 140px">
                                <div class="menu-text mr-5" v-on:click="gangZoneMenu.selectedZone.range -= 1; zoneUpdateData();">[-]</div>
                                <input v-model="gangZoneMenu.selectedZone.range" v-on:keyup.enter="zoneUpdateData()" class="c-input">
                                <div class="menu-text ml-5" v-on:click="gangZoneMenu.selectedZone.range += 1; zoneUpdateData();">[+]</div>
                            </div>
                            <div class="menu-text list-ml-10">Поворот:</div>
                            <div class="c-input-block list-ml-10" style="width: 140px">
                                <div class="menu-text mr-5" v-on:click="gangZoneMenu.selectedZone.rot -= 1; zoneUpdateData();">[-]</div>
                                <input v-model="gangZoneMenu.selectedZone.rot" v-on:keyup.enter="zoneUpdateData()" class="c-input">
                                <div class="menu-text ml-5" v-on:click="gangZoneMenu.selectedZone.rot += 1; zoneUpdateData();">[+]</div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-20">
                        <div class="d-flex center-align">
                            <div class="menu-text">Отдать:</div>
                            <button v-for="g in gangZoneMenu.gangs" v-on:click="giveZoneTo(g.id, g.name)" class="c-button ml-5" style="width: 250px;">
                                {{ g.name }}
                            </button>
                        </div>
                    </div>
                    <div class="c-buttons mt-20">
                        <button class="c-button" v-on:click="zoneSetPoint(1)">Точка атаки</button>
                        <button class="c-button" v-on:click="zoneSetPoint(2)">Точка защиты</button>
                        <button class="c-button" v-on:click="zoneSetPoint(0)">Удалить обе</button>
                    </div>
                    <div class="c-buttons mt-20">
                        <button class="c-button" v-on:click="teleportToZone()">Телепорт</button>
                        <button class="c-button" v-on:click="deleteZone()">Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    `,data:()=>({selectType:"",bizMenu:{list:[],mafiaList:[],selectedBiz:null,bizEditRentPrice:100,bizEditTax:10},gangZoneMenu:{list:[],selectedZone:null,gangs:[]},whiteListMenu:{list:""},loaded:!1}),methods:{async selectBiz(e){try{e=await serverAPI.getAsync("server_adminConsole_management_biz_getData",e.id)}catch(e){adminConsole.notifyError(e)}this.bizMenu.selectedBiz=e,this.bizMenu.bizEditRentPrice=e.rentPrice,this.bizMenu.bizEditTax=e.tax},async bizRestoreProduct(e){try{await serverAPI.getAsync("server_adminConsole_management_biz_restoreProduct",e.id),e.productCount=e.productMaxCount}catch(e){adminConsole.notifyError(e)}},async bizSellToGov(e){try{await serverAPI.getAsync("server_adminConsole_management_biz_sellToGov",e.id),e.owner="\u0413\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u043E"}catch(e){adminConsole.notifyError(e)}},async bizGiveTo(e,t){try{await serverAPI.getAsync("server_adminConsole_management_biz_giveTo",{id:this.bizMenu.selectedBiz.id,faction:e}),this.bizMenu.selectedBiz.defensive=t}catch(e){adminConsole.notifyError(e)}},async bizResetDef(){try{await serverAPI.getAsync("server_adminConsole_management_biz_resetDef",{id:this.bizMenu.selectedBiz.id}),this.bizMenu.selectedBiz.defensive="\u041D\u0435\u0442"}catch(e){adminConsole.notifyError(e)}},async changeBizRentTax(){try{await serverAPI.getAsync("server_adminConsole_management_biz_setRentTax",[this.bizMenu.selectedBiz.id,this.bizMenu.bizEditRentPrice,this.bizMenu.bizEditTax]),this.bizMenu.selectedBiz.rentPrice=this.bizMenu.bizEditRentPrice,this.bizMenu.selectedBiz.tax=this.bizMenu.bizEditTax}catch(e){adminConsole.notifyError(e)}},async createGangZone(e){try{await serverAPI.getAsync("server_adminConsole_management_gangZone_create",e);let t=await serverAPI.getAsync("server_adminConsole_management_gangZone_getData");this.gangZoneMenu.list=t.list,this.gangZoneMenu.gangs=t.gangs}catch(e){adminConsole.notifyError(e)}},async findGangZone(){try{const e=await rpc.callClient("client_gangZone_findMy"),t=this.gangZoneMenu.list.find(t=>t.id==e);t&&(this.gangZoneMenu.selectedZone=t)}catch(e){adminConsole.notifyError(e)}},async zoneUpdateData(){try{await serverAPI.getAsync("server_adminConsole_management_gangZone_updateData",{id:this.gangZoneMenu.selectedZone.id,x:this.gangZoneMenu.selectedZone.position.x,y:this.gangZoneMenu.selectedZone.position.y,z:this.gangZoneMenu.selectedZone.position.z,range:this.gangZoneMenu.selectedZone.range,rot:this.gangZoneMenu.selectedZone.rot})}catch(e){adminConsole.notifyError(e)}},async zoneSetPoint(e){try{const t=await rpc.callClient("client_console_getMyCoords");if(!t.gameData)return adminConsole.notifyError("\u041E\u0448\u0438\u0431\u043A\u0430");await serverAPI.getAsync("server_adminConsole_management_gangZone_setPoint",{id:this.gangZoneMenu.selectedZone.id,type:e,x:t.gameData.x,y:t.gameData.y,z:t.gameData.z}),adminConsole.notifyText("\u0413\u043E\u0442\u043E\u0432\u043E")}catch(e){adminConsole.notifyError(e)}},async giveZoneTo(e,t){try{await serverAPI.getAsync("server_adminConsole_management_gangZone_setFaction",{id:this.gangZoneMenu.selectedZone.id,faction:e}),this.gangZoneMenu.selectedZone.owner=t}catch(e){adminConsole.notifyError(e)}},async teleportToZone(){try{await serverAPI.getAsync("server_adminConsole_management_gangZone_teleport",this.gangZoneMenu.selectedZone.id)}catch(e){adminConsole.notifyError(e)}},async deleteZone(){try{await serverAPI.getAsync("server_adminConsole_management_gangZone_delete",this.gangZoneMenu.selectedZone.id),this.gangZoneMenu.selectedZone=null;let e=await serverAPI.getAsync("server_adminConsole_management_gangZone_getData");this.gangZoneMenu.list=e.list,this.gangZoneMenu.gangs=e.gangs}catch(e){adminConsole.notifyError(e)}},async select(e){try{if("bizMenu"===e){const e=await serverAPI.getAsync("server_adminConsole_management_biz_getList");this.bizMenu.list=e.list,this.bizMenu.mafiaList=e.mafia}else if("gangZoneMenu"===e){const e=await serverAPI.getAsync("server_adminConsole_management_gangZone_getData");this.gangZoneMenu.list=e.list,this.gangZoneMenu.gangs=e.gangs}else"whiteListMenu"===e&&(this.whiteListMenu.list=await serverAPI.getAsync("server_adminConsole_management_whiteList_get"));this.selectType=e}catch(e){adminConsole.notifyError(e)}},prev(){return"bizMenu"==this.selectType&&null!=this.bizMenu.selectedBiz?void(this.bizMenu.selectedBiz=null):"gangZoneMenu"==this.selectType&&null!=this.gangZoneMenu.selectedZone?void(this.gangZoneMenu.selectedZone=null):void(this.selectType="")},async onOpen(){}}}),playerTab=Vue.component("playerTab",{template:`
        <div class="d-flex column flex-1">
            <div class="c-input-block">
                <input
                    v-model="form.playerIdOrNick"
                    v-on:keyup.enter="getPlayer(form.playerIdOrNick);"
                    ref="iInput" class="c-input" placeholder="ID Игрока или Ник">
            </div>
            <div v-if="player != null" class="d-flex mt-10">
                <div class="d-flex column">
                    <div :class="{'menu-color-green': player.gId !== -1}">Персонаж: {{ player.nick }} ( {{ player.cId }} ) {{ player.gId !== -1 ? 'GID: ' + player.gId : '' }} LVL: {{ player.level }}</div>
                    <div>Телефон: {{ player.phone }}</div>

                    <div class="mt-5">Д: {{ player.cash }} $ | Б: {{ player.bank }} $</div>
                    <div>Фишки: {{ player.chips }} ( {{ player.casinoAllSum }} )</div>

                    <div class="mt-5">Фракция: {{ player.faction }}</div>
                    <div>Семья: {{ player.family }}</div>
                    <div>Дом: {{ player.houseId }} | КВ: {{ player.apartmentId }}</div>
                    <div>Бизы: {{ player.bizList }}</div>

                    <div class="mt-5">Варны: {{ player.warnNow }} ( Всего: {{ player.warnCount }} )</div>
                    <div>Бан: {{ player.banStatus }}</div>
                    <div>{{ player.prisonTime > 0 ? 'Деморган' : 'Арест' }}: {{ player.prisonTime > 0 ? Math.floor(player.prisonTime / 60) : Math.floor(player.jailTime / 60) }} мин.</div>

                    <div class="mt-10">Логин: {{ player.login }} ( Social: {{ player.socialClub }} )</div>
                </div>
                <div class="d-flex column" style="margin-left: 60px;">
                    <div style="height: 290px; overflow-x: auto;">
                        <div>Машины игрока:</div>
                        <div v-for="v in player.vehicles" class="list-mt-10">
                            <div classs="d-flex">
                                {{ v[0] }} {{ v[1] }} ( {{ v[2] }} ) ( GID: {{ v[3] }} )
                                <button v-if="adminLevel >= 7" class="c-button ml-5" @click="sendSellVeh(v[0])">S</button>
                            </div>
                            <div v-if="v[3] >= 0" classs="d-flex mt-5">
                                <button class="c-button" @click="sendCommand('gotocar', v[3])">GOTO</button>
                                <button class="c-button" @click="sendCommand('tpcar', v[3])">TPCAR</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex column" style="margin-left: 120px;">
                    <div>Телепорт:</div>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('goto', []);">goto</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('gotoup', []);">gotoup</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('gethere', []);">gethere</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('sp', []);">sp</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('slap', []);">slap</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('re', []);">re</button>
                    <button class="c-button mt-5" v-on:click="sendCommand('goto_house', player.houseId)">goto_house</button>
                    <button class="c-button mt-5" v-on:click="sendCommand('goto_apt', player.apartmentId)">goto_apt</button>
                </div>
                <div class="d-flex column" style="margin-left: 70px;">
                    <div>Функции:</div>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('kill', []);">kill</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('heal', []);">heal</button>
                    <button class="c-button mt-5" v-on:click="player.gId !== -1 && sendCommand('healup', player.gId)">healup</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('unmute', []);">unmute</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('unjail', []);">unjail</button>
                </div>
                <div class="d-flex wrap column" style="margin-left: 70px;">
                    <div class="ml-10">Наказания:</div>
                    <button @click="actionAsync('mute', 'Мут', 'Мут игроку', [['i', 'Время в минутах', 10], ['s', 'Причина', '']])" class="c-button mt-5 ml-10">mute</button>
                    <button @click="actionAsync('jail', 'Тюрьма', 'Посадить игрока', [['i', 'Время в минутах', 10], ['s', 'Причина', '']])" class="c-button mt-5 ml-10">jail</button>
                    <button @click="actionAsync('prison', 'Тюрьма 2', 'Посадить игрока', [['i', 'Время в минутах', 10], ['s', 'Причина', '']])" class="c-button mt-5 ml-10">prison</button>
                    <button @click="actionAsync('kick', 'Кик', 'Кикнуть с сервера', [['s', 'Причина', '']])" class="c-button mt-5 ml-10">kick</button>
                    <button @click="actionAsync('warn', 'Варн', 'Выдать варн', [['s', 'Причина', '']])" class="c-button mt-5 ml-10">warn</button>
                    <button @click="actionAsync('ban', 'БАН', 'Выдать бан', [['i', 'Дни:', 3], ['s', 'Причина', '']])" class="c-button mt-5 ml-10">ban</button>
                    <button @click="actionAsync('sban', 'Тихий БАН', 'Выдать тихий бан', [['i', 'Дни:', 3], ['s', 'Причина', '']])" class="c-button mt-5 ml-10">sban</button>
                    <button @click="actionAsync('iban', 'ВЕЧНЫЙ БАН', 'Выдать ВЕЧНЫЙ бан', [['s', 'Причина', '']])" class="c-button mt-5 ml-10">iban</button>
                    <button @click="sendPlayerAction('uninvite', []);" class="c-button mt-5 ml-10">uninvite</button>
                </div>
                <div class="d-flex column" style="margin-left: 120px;">
                    <div>Снятие:</div>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('unwarn', []);">unwarn</button>
                    <button class="c-button mt-5" v-on:click="sendPlayerAction('unban', []);">unban</button>
                </div>
                <div class="d-flex column" style="margin-left: 70px;">
                    <div>Прочие:</div>
                    <button class="c-button mt-5" v-on:click="checkPlayerHistory(player.cId)">history</button>
                    <button v-if="adminLevel >= 7" class="c-button mt-5" v-on:click="clearPlayerAccount(player.nick)">clear account</button>
                    <button v-if="adminLevel >= 7" class="c-button mt-5" v-on:click="sellPlayerHouse(player.houseId, player.cId)">house sell</button>
                </div>
            </div>
        </div>
    `,data:()=>({player:null,adminLevel:0,form:{playerIdOrNick:""}}),methods:{async getPlayer(e){try{this.player=await serverAPI.getAsync("server_adminConsole_getPlayerData",e)}catch(e){adminConsole.notifyError(e)}},async sendPlayerAction(e,t){let n=await rpc.callServer("server_adminConsole_playerAction",{name:e,player:this.player.nick,params:t});if(n&&n.error)return void adminConsole.notifyError(n.errorText)},async actionAsync(e,t,n,r){try{let o=await adminConsole.openModalAsync(t,n,r.map(e=>({type:e[0],text:e[1],value:e[2]||""}))),a=await rpc.callServer("server_adminConsole_playerAction",{name:e,player:this.player.nick,params:o});if(a&&a.error)return void adminConsole.notifyError(a.errorText)}catch(e){}},async checkPlayerHistory(e){await rpc.callServer("server_adminConsole_command",["history",[e]])},async sendSellVeh(e){await rpc.callServer("server_adminConsole_command",["vehicle_sell",[e]])},async clearPlayerAccount(e){await rpc.callServer("server_adminConsole_command",["clear_account",[e]])},async sellPlayerHouse(e,t){await rpc.callServer("server_adminConsole_command",["house_sell",[e,t]])},async sendCommand(e,...t){await rpc.callServer("server_adminConsole_command",[e,t])},onOpen(e){this.adminLevel=adminConsole.app.level,this.$nextTick(()=>this.$refs.iInput.focus()),e&&this.getPlayer(e)}}});let testObjectCreateNeedUpdate=!1,testObjectCreateCoords="";const testTab=Vue.component("testTab",{template:`
        <div class="d-flex flex-1">
            <div class="d-flex column">
                <div class="menu-text">Ваши координаты:</div>
                <div class="c-input-block mt-5" style="width: 280px;">
                    <input v-model="coords.ground" class="c-input" placeholder="Координаты земли ( -1 по Z )">
                </div>
                <div class="c-input-block mt-5" style="width: 280px;">
                    <input v-model="coords.standart" class="c-input" placeholder="Координаты персонажа">
                </div>
                <div class="c-input-block mt-5" style="width: 280px;">
                    <input v-model="coords.rot" class="c-input" placeholder="Поворот">
                </div>
                <button @click="getMyCoords();" class="c-button mt-5">Получить</button>
                <div class="menu-text mt-10">Погода:</div>
                <button @click="setSpecialWeather('CLEAR');" class="c-button mt-5">Всегда ясно</button>
                <button @click="setSpecialWeather('');" class="c-button mt-5">Сброс</button>
            </div>
            <div v-if="adminLevel >= 6" class="d-flex column ml-10">
                <div class="menu-text">Тест одежды:</div>
                <div class="c-input-block mt-5" style="width: 280px;">
                    <input 
                        v-model="clothes.component" @change="updateClothes();"
                        v-on:keyup.up="$refs.iClothesColor.focus();"
                        v-on:keyup.down="$refs.iClothesId.focus();"
                        ref="iClothesComponent"
                        class="c-input" placeholder="Компонент">
                </div>
                <div class="c-input-block mt-5" style="width: 280px;">
                    <input 
                        v-model="clothes.id" @change="updateClothes();"
                        v-on:keyup.up="$refs.iClothesComponent.focus();"
                        v-on:keyup.down="$refs.iClothesColor.focus();"
                        ref="iClothesId"
                        class="c-input" placeholder="ID">
                </div>
                <div class="c-input-block mt-5" style="width: 280px;">
                    <input 
                        v-model="clothes.color" @change="updateClothes();"
                        v-on:keyup.up="$refs.iClothesId.focus();"
                        v-on:keyup.down="$refs.iClothesComponent.focus();"
                        ref="iClothesColor"
                        class="c-input" placeholder="Цвет">
                </div>
                <button @click="resetClothes();" class="c-button mt-5">Сбросить</button>
                <button v-if="adminLevel >= 7" @click="setLocalModel('mp_m_freemode_01');" class="c-button mt-5">Простой Иван город Тверь</button>
                <button v-if="adminLevel >= 7" @click="setLocalModel('mp_f_freemode_01');" class="c-button mt-5">Кошачья жена</button>
            </div>
            <div class="d-flex column ml-10">
                <div class="menu-text">Камера:</div>
                <button v-if="!camera.control" v-on:click="setCameraToPlayer(1);" class="c-button mt-5">На персонажа</button>
                <button v-if="!camera.control" v-on:click="setCameraToPlayer(0);" class="c-button mt-5">Перед персонажем</button>
                <button v-if="camera.control" v-on:click="resetCamera();" class="c-button mt-5">Сбросить</button>
                <div v-if="camera.control" class="d-flex column mt-5">
                    <div class="menu-text">Позиция камеры:</div>
                    <div class="d-flex center-align mt-5">
                        <div class="c-input-block" style="width: 70px;">
                            <input 
                                v-model.number="camera.position.x" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraRotX.focus();"
                                v-on:keyup.right="return; $refs.iCameraPositionY.focus();"
                                v-on:keyup.down="return; $refs.iCameraPointX.focus();"
                                v-on:keyup.left="return; $refs.iCameraPositionZ.focus();"
                                ref="iCameraPositionX"
                                class="c-input" placeholder="X">
                        </div>
                        <div v-on:click="camera.position.x = parseFloat((camera.position.x + 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[+]</div>
                        <div v-on:click="camera.position.x = parseFloat((camera.position.x - 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block ml-10" style="width: 70px;">
                            <input 
                                v-model.number="camera.position.y" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraRotY.focus();"
                                v-on:keyup.right="return; $refs.iCameraPositionZ.focus();"
                                v-on:keyup.down="return; $refs.iCameraPointY.focus();"
                                v-on:keyup.left="return; $refs.iCameraPositionX.focus();"
                                ref="iCameraPositionY"
                                class="c-input" placeholder="Y">
                        </div>
                        <div v-on:click="camera.position.y = parseFloat((camera.position.y + 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[+]</div>
                        <div v-on:click="camera.position.y = parseFloat((camera.position.y - 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block ml-10" style="width: 70px;">
                            <input 
                                v-model.number="camera.position.z" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraRotZ.focus();"
                                v-on:keyup.right="return; $refs.iCameraPositionX.focus();"
                                v-on:keyup.down="return; $refs.iCameraPointZ.focus();"
                                v-on:keyup.left="return; $refs.iCameraPositionY.focus();"
                                ref="iCameraPositionZ"
                                class="c-input" placeholder="Z">
                        </div>
                        <div v-on:click="camera.position.z = parseFloat((camera.position.z + 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[+]</div>
                        <div v-on:click="camera.position.z = parseFloat((camera.position.z - 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[-]</div>
                    </div>
                    <div class="menu-text mt-5">Направление камеры:</div>
                    <div class="d-flex center-align mt-5">
                        <div class="c-input-block" style="width: 70px;">
                            <input 
                                v-model.number="camera.point.x" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraPositionX.focus();"
                                v-on:keyup.right="return; $refs.iCameraPointY.focus();"
                                v-on:keyup.down="return; $refs.iCameraRotX.focus();"
                                v-on:keyup.left="return; $refs.iCameraPointZ.focus();"
                                ref="iCameraPointX"
                                class="c-input" placeholder="X">
                        </div>
                        <div v-on:click="camera.point.x = parseFloat((camera.point.x + 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[+]</div>
                        <div v-on:click="camera.point.x = parseFloat((camera.point.x - 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block ml-10" style="width: 70px;">
                            <input 
                                v-model.number="camera.point.y" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraPositionY.focus();"
                                v-on:keyup.right="return; $refs.iCameraPointZ.focus();"
                                v-on:keyup.down="return; $refs.iCameraRotY.focus();"
                                v-on:keyup.left="return; $refs.iCameraPointX.focus();"
                                ref="iCameraPointY"
                                class="c-input" placeholder="Y">
                        </div>
                        <div v-on:click="camera.point.y = parseFloat((camera.point.y + 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[+]</div>
                        <div v-on:click="camera.point.y = parseFloat((camera.point.y - 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block ml-10" style="width: 70px;">
                            <input 
                                v-model.number="camera.point.z" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraPositionZ.focus();"
                                v-on:keyup.right="return; $refs.iCameraPointX.focus();"
                                v-on:keyup.down="return; $refs.iCameraRotZ.focus();"
                                v-on:keyup.left="return; $refs.iCameraPositionY.focus();"
                                ref="iCameraPointZ"
                                class="c-input" placeholder="Z">
                        </div>
                        <div v-on:click="camera.point.z = parseFloat((camera.point.z + 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[+]</div>
                        <div v-on:click="camera.point.z = parseFloat((camera.point.z - 0.25).toFixed(2)); updateCamera();" class="menu-text ml-5">[-]</div>
                    </div>
                    <div class="menu-text mt-5">Угол камеры:</div>
                    <div class="d-flex center-align mt-5">
                        <div class="c-input-block" style="width: 40px;">
                            <input 
                                v-model.number="camera.rot.x" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraPointX.focus();"
                                v-on:keyup.right="return; $refs.iCameraRotY.focus();"
                                v-on:keyup.down="return; $refs.iCameraPositionX.focus();"
                                v-on:keyup.left="return; $refs.iCameraRotZ.focus();"
                                ref="iCameraRotX"
                                class="c-input" placeholder="X">
                        </div>
                        <div class="c-input-block ml-10" style="width: 40px;">
                            <input 
                                v-model.number="camera.rot.y" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraPointY.focus();"
                                v-on:keyup.right="return; $refs.iCameraRotZ.focus();"
                                v-on:keyup.down="return; $refs.iCameraPositionY.focus();"
                                v-on:keyup.left="return; $refs.iCameraRotX.focus();"
                                ref="iCameraRotY"
                                class="c-input" placeholder="Y">
                        </div>
                        <div class="c-input-block ml-10" style="width: 40px;">
                            <input 
                                v-model.number="camera.rot.z" @change="updateCamera();"
                                v-on:keyup.up="return; $refs.iCameraPointZ.focus();"
                                v-on:keyup.right="return; $refs.iCameraRotX.focus();"
                                v-on:keyup.down="return; $refs.iCameraPositionZ.focus();"
                                v-on:keyup.left="return; $refs.iCameraRotY.focus();"
                                ref="iCameraRotZ"
                                class="c-input" placeholder="Z">
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex column ml-10">
                <div class="menu-text">Создание объекта:</div>
                <div class="c-input-block mt-5" style="width: 200px;">
                    <input v-model="object.model" class="c-input" placeholder="Объект">
                </div>
                <div class="c-input-block mt-5" style="width: 200px;">
                    <input v-model="object.coords" disable class="c-input" placeholder="Координаты">
                </div>
                <button v-on:click="objectStartCreate();" class="c-button mt-5">Создать</button>
            </div>
            <div class="d-flex column ml-10">
                <div class="menu-text">Посадка персонажа:</div>
                <div v-if="actionObjectTest.code === ''">
                    <div class="d-flex mt-5">
                        <div @click="actionObjectTest.x = parseFloat((actionObjectTest.x - 0.05).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block" style="width: 100px;">
                            <input v-model="actionObjectTest.x" class="c-input" placeholder="x">
                        </div>
                        <div @click="actionObjectTest.x = parseFloat((actionObjectTest.x + 0.05).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[+]</div>
                    </div>
                    <div class="d-flex mt-5">
                        <div @click="actionObjectTest.y = parseFloat((actionObjectTest.y - 0.05).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block" style="width: 100px;">
                            <input v-model="actionObjectTest.y" class="c-input" placeholder="x">
                        </div>
                        <div @click="actionObjectTest.y = parseFloat((actionObjectTest.y + 0.05).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[+]</div>
                    </div>
                    <div class="d-flex mt-5">
                        <div @click="actionObjectTest.z = parseFloat((actionObjectTest.z - 0.05).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block" style="width: 100px;">
                            <input v-model="actionObjectTest.z" class="c-input" placeholder="z">
                        </div>
                        <div @click="actionObjectTest.z = parseFloat((actionObjectTest.z + 0.05).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[+]</div>
                    </div>
                    <div class="d-flex mt-5">
                        <div @click="actionObjectTest.heading = parseFloat((actionObjectTest.heading - 1).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[-]</div>
                        <div class="c-input-block" style="width: 100px;">
                            <input v-model="actionObjectTest.heading" class="c-input" placeholder="heading">
                        </div>
                        <div @click="actionObjectTest.heading = parseFloat((actionObjectTest.heading + 1).toFixed(2)); actionObjectTry();" class="menu-text ml-5">[+]</div>
                    </div>
                    <div class="d-flex mt-5">
                        <div class="c-input-block" style="width: 100px;">
                            <input v-model="actionObjectTest.animDict" class="c-input" placeholder="animDict">
                        </div>
                        <div class="c-input-block ml-5" style="width: 100px;">
                            <input v-model="actionObjectTest.animName" class="c-input" placeholder="animName">
                        </div>
                    </div>
                    <div class="mt-5">
                        <button @click="actionObjectTry();" class="c-button" style="width: 150px;">Тест</button>
                        <button @click="actionObjectGetCoords();" class="c-button" style="width: 150px;">Координаты</button>
                    </div>
                    <div class="mt-5">
                        <button @click="actionObjectGetCode();" class="c-button" style="width: 150px;">Код</button>
                        <button @click="actionObjectReset();" class="c-button" style="width: 150px;">Сбросить</button>
                    </div>
                </div>
                <div v-else>
                    <div>
                        <textarea v-model="actionObjectTest.code" class="c-input" style="height: 100px; width: 200px;"></textarea>
                    </div>
                    <div>
                        <button @click="actionObjectTest.code = ''" class="c-button mt-5">Назад</button>
                    </div>
                </div>
            </div>
        </div>
    `,data:()=>({adminLevel:0,coords:{ground:"",standart:"",rot:""},clothes:{component:"",id:"",color:""},camera:{control:!1,position:{x:0,y:0,z:0},point:{x:0,y:0,z:0},rot:{x:0,y:0,z:0}},object:{model:"",coords:""},actionObjectTest:{x:0,y:0,z:0,heading:0,animDict:"",animName:"",code:""}}),methods:{getMyCoords(){rpc.callClient("client_console_getMyCoords").then(e=>{this.coords=e})},setSpecialWeather(e){mp.trigger("client_weather_setSpecialWeather",e)},updateClothes(){0==this.clothes.component.length||0==this.clothes.id.length||0==this.clothes.color.length||isNaN(this.clothes.component)||isNaN(this.clothes.id)||isNaN(this.clothes.color)||rpc.triggerClient("client_console_setClothes",{component:parseInt(this.clothes.component),id:parseInt(this.clothes.id),color:parseInt(this.clothes.color)})},resetClothes(){rpc.triggerServer("server_adminConsole_test_resetClothes",{})},setLocalModel(e){mp.trigger("client_console_setLocalModel",e)},setCameraToPlayer(e){rpc.callClient("client_console_setCameraToPlayer",e).then(e=>{this.camera.position.x=e.position.x,this.camera.position.y=e.position.y,this.camera.position.z=e.position.z,this.camera.point.x=e.point.x,this.camera.point.y=e.point.y,this.camera.point.z=e.point.z,this.camera.rot.x=0,this.camera.rot.y=0,this.camera.rot.z=0,this.camera.control=!0})},updateCamera(){let e=this.camera.position;if(0!=e.x.length&&0!=e.y.length&&0!=e.z.length&&!(isNaN(e.x)||isNaN(e.y)||isNaN(e.z))){let e=this.camera.point;if(0!=e.x.length&&0!=e.y.length&&0!=e.z.length&&!(isNaN(e.x)||isNaN(e.y)||isNaN(e.z))){let e=this.camera.rot;0==e.x.length||0==e.y.length||0==e.z.length||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||rpc.triggerClient("client_console_setCamera",this.camera)}}},resetCamera(){rpc.triggerClient("client_console_resetCamera"),this.camera.control=!1},objectStartCreate(){mp.trigger("client_console_startCreateObject",this.object.model)},actionObjectTry(){const{x:e,y:t,z:n,heading:r,animDict:o,animName:a}=this.actionObjectTest;mp.trigger("client_console_actionObjectTest",parseFloat(e),parseFloat(t),parseFloat(n),parseFloat(r),o,a)},actionObjectGetCode(){const{x:e,y:t,z:n,heading:r,animDict:o,animName:a}=this.actionObjectTest;this.actionObjectTest.code=`
            {
                use: new mp.Vector3(),
                position: new mp.Vector3(${parseFloat((e-0).toFixed(2))}, ${parseFloat((t-0).toFixed(2))}, ${parseFloat((n-0).toFixed(2))}),
                heading: ${parseFloat((r-0).toFixed(2))},
                anim: ['${o}', '${a}', 1],
                useText: '???',
                cancelText: '!!!',
            },`},async actionObjectGetCoords(){const e=await rpc.callClient("client_console_actionObjectGetCoords");this.actionObjectTest.x=e[0],this.actionObjectTest.y=e[1],this.actionObjectTest.z=e[2],this.actionObjectTest.heading=e[3]},actionObjectReset(){mp.trigger("client_console_actionObjectReset")},onOpen(){this.adminLevel=adminConsole.app.level,testObjectCreateNeedUpdate&&(this.object.coords=testObjectCreateCoords,testObjectCreateNeedUpdate=!1)}}});function console_setLastCreatedObjectCoords(e,t,n,r,o,a){testObjectCreateNeedUpdate=!0,testObjectCreateCoords=`${e}, ${t}, ${n}, ${r}, ${o}, ${a}`}var TELEPORT_LIST=[];const teleportTab=Vue.component("teleportTab",{template:`
        <div class="d-flex flex-1">
            <div class="d-flex column">
                <button v-for="(c, index) in teleportList" v-on:click="currentCategory = index;" class="c-button mt-5">{{ c[0] }}</button>
            </div>
            <div class="d-flex wrap column ml-10" style="max-height: 345px;" v-if="currentCategory != -1">
                <button 
                    v-for="tp in teleportList[currentCategory][1]" 
                    v-on:click="rpc.triggerClient('client_console_teleport', tp[1])" 
                    class="c-button mt-5 mr-5">
                    {{ tp[0] }}
                </button>
            </div>
        </div>
    `,data:()=>({teleportList:[],currentCategory:-1}),methods:{onOpen(){0==this.teleportList.length&&(this.teleportList=TELEPORT_LIST)}}});rpc.on("client_browser_adminConsole_setTeleportMenu",function(e){TELEPORT_LIST=e});var VEHICLE_LIST=[];const vehicleTab=Vue.component("vehicleTab",{template:`
        <div class="d-flex flex-1">
            <div class="d-flex column" style="width: 540px;">
                <div class="c-scroll" style="height: 340px;">
                    <div v-for="v in vehicleList" class="d-flex center-align mt-5">
                        <div class="menu-text">{{ v.model }} {{ v.id }} ( {{ v.creator }} )</div>
                        <div class="ml-auto">
                            <button v-on:click="gotoVeh(v);" class="c-button" style="width: 90px;">goto</button>
                            <button v-on:click="gethereVeh(v);" class="c-button ml-5" style="width: 90px;">gethere</button>
                            <button v-on:click="deleteVeh(v);" class="c-button ml-5" style="width: 90px;">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex column flex-1 ml-10">
                <div class="d-flex center-align">
                    <div class="c-input-block" style="width: 150px;">
                        <input v-model="vehicleModel" class="c-input" placeholder="Модель">
                    </div>
                    <div class="c-input-block ml-5" style="width: 100px;">
                        <input v-model="vehicleNumber" class="c-input" placeholder="Номер">
                    </div>
                    <button v-on:click="createVeh(vehicleModel, 0, putToVehicle);" class="c-button ml-5">Для себя</button>
                    <button v-on:click="createVeh(vehicleModel, 1, putToVehicle);" class="c-button ml-5">Для всех</button>
                    <input v-model="putToVehicle" class="c-checkbox ml-5" type="checkbox">
                    <div class="menu-text ml-5">Посадить себя</div>
                </div>
                <div v-if="vehicleCategorySelected == ''" class="d-flex wrap mt-15">
                    <button v-for="c in vehicleCategoryList" v-on:click="vehicleCategorySelected = c" class="c-button mt-5 ml-5" style="flex: 1 0 auto;">{{ c }}</button>
                </div>
                <div v-else class="d-flex wrap mt-15">
                    <button v-for="v in vehicleModelList[vehicleCategorySelected]" v-on:click="vehicleModel = v" class="c-button mt-5 ml-5" style="flex: 1 0 auto;">{{ v }}</button>
                    <button v-on:click="vehicleCategorySelected = ''" class="c-button mt-5 ml-5" style="flex: 1 0 auto;">Отмена</button>
                </div>
            </div>
        </div>
    `,data:()=>({vehicleList:[],vehicleModelList:{Boats:["dinghy","dinghy2","dinghy3","dinghy4","jetmax","marquis","seashark","seashark2","seashark3","speeder","speeder2","squalo","submersible","submersible2","suntrap","toro","toro2","tropic","tropic2","tug"],Commercials:["benson","biff","hauler","hauler2","mule","mule2","mule3","packer","phantom","phantom2","phantom3","pounder","stockade","stockade3"],Compacts:["blista","brioso","dilettante","dilettante2","issi2","panto","prairie","rhapsody"],Coupes:["cogcabrio","exemplar","f620","felon","felon2","jackal","oracle","oracle2","sentinel","sentinel2","windsor","windsor2","zion","zion2"],Cycles:["bmx","cruiser","fixter","scorcher","tribike","tribike2","tribike3"],Emergency:["ambulance","fbi","fbi2","firetruck","lguard","pbus","police","police2","police3","police4","policeb","polmav","policeold1","policeold2","policet","pranger","predator","riot","riot2","sheriff","sheriff2"],Industrial:["bulldozer","cutter","dump","flatbed","guardian","handler","mixer","mixer2","rubble","tiptruck","tiptruck2"],Military:["apc","barracks","barracks2","barracks3","barrage","chernobog","crusader","halftrack","khanjali","rhino","thruster","trailersmall2"],Motorcycles:["akuma","avarus","bagger","bati","bati2","bf400","carbonrs","chimera","cliffhanger","daemon","daemon2","defiler","diablous","diablous2","double","enduro","esskey","faggio","faggio2","faggio3","fcr","fcr2","gargoyle","hakuchou","hakuchou2","hexer","innovation","lectro","manchez","nemesis","nightblade","oppressor","pcj","ratbike","ruffian","sanchez2","sanctus","shotaro","sovereign","thrust","vader","vindicator","vortex","wolfsbane","zombiea","zombieb"],Muscle:["blade","buccaneer","buccaneer2","chino","chino2","coquette3","dominator","dominator2","dukes","dukes2","faction","faction2","faction3","gauntlet","gauntlet2","hermes","hotknife","lurcher","moonbeam","moonbeam2","nightshade","pheonix","picador","ratloader","ratloader2","ruiner","ruiner2","ruiner3","sabregt","sabregt2","slamvan","slamvan2","slamvan3","stalion","stalion2","tampa","tampa3","vigero","virgo","virgo2","virgo3","voodoo","voodoo2","yosemite"],"Off-Road":["bfinjection","bifta","blazer","blazer2","blazer3","blazer4","blazer5","bodhi2","brawler","dloader","dubsta3","dune","dune2","dune3","dune4","dune5","insurgent","insurgent2","insurgent3","kalahari","marshall","mesa3","monster","nightshark","rancherxl","rancherxl2","rebel","rebel2","riata","sandking","sandking2","technical","technical2","technical3","trophytruck","trophytruck2"],Planes:["alphaz1","avenger","besra","blimp","blimp2","bombushka","cargoplane","cuban800","dodo","duster","howard","hydra","jet","lazer","luxor","luxor2","mammatus","microlight","miljet","mogul","molotok","nimbus","nokota","pyro","rogue","seabreeze","shamal","starling","stunt","titan","tula","velum","velum2","vestra","volatol"],SUVs:["baller","baller2","baller3","baller4","baller5","baller6","bjxl","cavalcade","cavalcade2","contender","dubsta","dubsta2","fq2","granger","gresley","habanero","huntley","landstalker","mesa","mesa2","patriot","radi","rocoto","seminole","serrano","xls","xls2"],Sedans:["asea","asea2","asterope","cog55","cog552","cognoscenti","cognoscenti2","emperor","emperor2","emperor3","fugitive","glendale","ingot","intruder","limo2","premier","primo","primo2","regina","romero","schafter2","schafter5","schafter6","stanier","stratum","stretch","superd","surge","tailgater","warrener","washington"],Service:["airbus","brickade","bus","coach","rallytruck","rentalbus","taxi","tourbus","trash","trash2","wastelander"],Sports:["alpha","banshee","bestiagts","blista2","blista3","buffalo","buffalo2","buffalo3","carbonizzare","comet2","comet3","comet4","coquette","elegy","elegy2","feltzer2","furoregt","fusilade","futo","jester","jester2","khamelion","kuruma","kuruma2","lynx2","massacro","massacro2","neon","ninef","ninef2","omnis","pariah","penumbra","raiden","rapidgt","rapidgt2","raptor","revolter","ruston","schafter3","schafter4","schwarzer","sentinel3","seven70","specter","specter2","streiter","sultan","surano","tampa2","tropos","verlierer2"],"Sports Classic":["ardent","btype","btype2","btype3","casco","cheetah2","coquette2","deluxo","feltzer3","gt500","infernus2","jb700","mamba","manana","monroe","peyote","pigalle","rapidgt3","retinue","savestra","stinger","stingergt","stromberg","torero","tornado","tornado2","tornado3","tornado4","tornado5","tornado6","turismo2","viseris","ztype"],Super:["adder","autarch","banshee2","bullet","cheetah","cyclone","entityxf","fmj","gp1","infernus","italigtb","italigtb2","le7b","nero","nero2","osiris","penetrator","pfister811","prototipo","reaper","sc1","sheava","sultanrs","t20","tempesta","turismor","tyrus","vacca","vagner","vigilante","visione","voltic","voltic2","xa21","zentorno"],Trains:["freight","freightcar","freightcont1","freightcont2","freightgrain","tankercar"],Utility:["airtug","caddy","caddy2","caddy3","docktug","forklift","mower","ripley","sadler","sadler2","scrap","towtruck","towtruck2","tractor","tractor2","tractor3","utillitruck","utillitruck2","utillitruck3"],REAL:["camry35","a45","merse63","rs6","GL63","p90d","2019M5","g63","m8","maybach"]},vehicleCategoryList:["Boats","Commercials","Compacts","Coupes","Cycles","Emergency","Industrial","Military","Motorcycles","Muscle","Off-Road","Planes","SUVs","Sedans","Service","Sports","Sports Classic","Super","Trains","Utility","Vans","REAL"],vehicleCategorySelected:"",vehicleModel:"",vehicleNumber:"ADMIN",putToVehicle:!0}),methods:{createVeh(e,t,n){rpc.triggerServer("server_adminConsole_vehicle_create",{model:e,number:this.vehicleNumber,mode:t,put:n})},gotoVeh(e){rpc.triggerServer("server_adminConsole_vehicle_goto",e.id)},gethereVeh(e){rpc.triggerServer("server_adminConsole_vehicle_gethere",e.id)},deleteVeh(e){rpc.triggerServer("server_adminConsole_vehicle_delete",e.id)},updateLsit(){this.vehicleList=VEHICLE_LIST},onOpen(){this.updateLsit()}}});rpc.on("client_browser_adminConsole_newAdminVehicle",function(e){VEHICLE_LIST.push(e),adminConsole.isCurrentTab(vehicleTab)&&adminConsole.getCurrentTab().updateLsit()}),rpc.on("client_browser_adminConsole_loadVehicleList",function(e){VEHICLE_LIST=e,adminConsole.isCurrentTab(vehicleTab)&&adminConsole.getCurrentTab().updateLsit()});const reportTab=Vue.component("reportTab",{template:`
        <div class="d-flex column flex-1">
            <div style="position: absolute; right: 10px;">
                <button @click="updateAsync()" class="c-button">Обновить</button>
            </div>
            <div v-if="openReport == -1" class="d-flex column wrap" style="height: 345px; overflow-x: auto;">
                <button class="c-button mt-5 mr-5" style="width: 200px;"
                    v-for="r in reportList" 
                    @click="selectReport(r.id)" :class="{'menu-color-red': !r.hasAns}">
                        Репорт #{{ r.number }}
                        <span v-if="r.media" class="menu-color-green">( МЕДИА )</span>
                        <span v-if="r.leader" class="menu-color-gold">( ЛИДЕР )</span>
                    </button>
            </div>
            <div v-if="openReport != -1" class="d-flex column">
                <div class="d-flex">
                    <div ref="chat" style="width: 650px; height: 290px; overflow-x: auto;">
                        <div v-for="d in reportData.list" class="mt-5" style="width: 600px;">{{ d.name }} : {{ d.text }}</div>
                    </div>
                    <div class="d-flex column ml-10">
                        <button class="c-button mt-5" @click="reToPlayer(openReport)">RE</button>
                        <button class="c-button mt-5" @click="teleportTo(openReport)">GOTO</button>
                        <button class="c-button mt-5" @click="teleportToUp(openReport)">GOTOUP</button>
                        <button class="c-button mt-5" @click="gethereTo(openReport)">GETHERE</button>
                        <button class="c-button mt-5" @click="dimension(openReport)">DIMENSION_SYNC</button>
                        <button class="c-button mt-5" @click="showPlayerHistory(reportData.cId)">HISTORY</button>
                        <button class="c-button mt-5" @click="setGPSToPlayer(openReport, 0)">GPS MY</button>
                        <button class="c-button mt-5" @click="setGPSToPlayer(openReport, 1)">GPS POINT</button>
                    </div>
                </div>
                <div class="d-flex center-align mt-10">
                    <div class="c-input-block" style="width: 300px;">
                        <input v-model="messageForm" @keyup.enter="sendMessage(messageForm)" class="c-input" placeholder="Сообщение">
                    </div>
                    <div @click="openPlayerTab(openReport)" class="ml-10">Репорт #{{ reportData.number }} | ID Игрока: {{ openReport }} <span v-if="reportData.media" class="menu-color-green">( МЕДИА )</span> <span v-if="reportData.leader" class="menu-color-gold">( ЛИДЕР )</span></div>
                    <button class="c-button ml-10" @click="openReport = -1; updateAsync();">Закрыть</button>
                    <button class="c-button ml-10" @click="deleteReport(openReport);">Удалить репорт</button>
                </div>
            </div>
        </div>
    `,data:()=>({reportList:[],reportData:[],openReport:-1,messageForm:""}),methods:{async updateAsync(){try{this.reportList=(await serverAPI.getAsync("server_reportSystem_getReportList")).map(e=>({number:e[0],id:e[1],hasAns:e[2],media:e[3],leader:e[4]}))}catch(e){adminConsole.notifyError(e)}},async sendMessage(e){try{await serverAPI.getAsync("server_reportSystem_sendMessageToReport",{id:this.openReport,message:e}),this.messageForm=""}catch(e){adminConsole.notifyError(e)}},async selectReport(e){try{const t=await serverAPI.getAsync("server_reportSystem_getReportData",e);this.reportData={number:t[0],id:e,cId:t[1],hasAns:!!t[2],media:!!t[3],leader:!!t[4],list:t[5].map(e=>({name:e[0],text:e[1]}))},this.openReport=e,this.$nextTick(()=>{this.$refs.chat.scrollTop=this.$refs.chat.scrollHeight})}catch(e){adminConsole.notifyError(e),this.openReport=-1}},async reToPlayer(e){await rpc.callServer("server_adminConsole_command",["re",[e]])},async teleportTo(e){await rpc.callServer("server_adminConsole_command",["goto",[e]])},async teleportToUp(e){await rpc.callServer("server_adminConsole_command",["gotoup",[e]])},async gethereTo(e){await rpc.callServer("server_adminConsole_command",["gethere",[e]])},async dimension(e){await rpc.callServer("server_adminConsole_command",["dimension_sync",[e]])},async showPlayerHistory(e){await rpc.callServer("server_adminConsole_command",["history",[e]])},async setGPSToPlayer(e,t){const n=0===t?await serverAPI.callApiAsync("player.getPosition"):await serverAPI.callApiAsync("player.getWaypointPosition");return n?void(await rpc.callServer("server_adminConsole_command",["set_gps",[e,n.x,n.y,n.z]]),adminConsole.notifyText(0===t?"\u0418\u0433\u0440\u043E\u043A\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432\u0430\u0448\u0430 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u043F\u043E\u0437\u0438\u0446\u0438\u044F":"\u0418\u0433\u0440\u043E\u043A\u0443 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044F \u043C\u0435\u0442\u043A\u0438 \u0441 \u0432\u0430\u0448\u0435\u0439 \u043A\u0430\u0440\u0442\u044B")):adminConsole.notifyError("\u0422\u043E\u0447\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430")},async openPlayerTab(e){adminConsole.openTab({template:playerTab},e)},async deleteReport(e){try{await serverAPI.getAsync("server_reportSystem_deleteReport",e),this.openReport=-1,this.updateAsync()}catch(e){adminConsole.notifyError(e)}},async onOpen(){-1==this.openReport?await this.updateAsync():await this.selectReport(this.openReport)}}});function console_reportNewMessage(e,t,n){if(adminConsole.isOpen()&&adminConsole.isCurrentTab(reportTab)){const r=adminConsole.getCurrentTab();r.openReport==e&&r.reportData.list.push({name:unescape(t),text:unescape(n)})}}var LOGS_UPDATE=!1,LOGS=[],KILL_LOGS_UPDATE=!1,KILL_LOGS=[];const logTab=Vue.component("logTab",{template:`
        <div class="d-flex flex-1">
            <div class="d-flex column flex-1">
                <ul v-if="searchKillLog === ''" class="c-main-list admin-chat" ref="iKillLogList">
                    <li v-for="l in killLogs">{{ l }}</li>
                </ul>
                <ul v-else class="c-main-list admin-chat" ref="iLogList">
                    <li v-for="l in killLogs" v-if="l.indexOf(searchKillLog) !== -1">{{ l }}</li>
                </ul>
                <div class="d-flex mt-auto mb-10">
                    <button v-on:click="clearKillLogs();" class="c-button">Очистить ( только для себя )</button>
                    <div class="c-input-block ml-10" style="width: 300px;">
                        <input v-model="searchKillLog" class="c-input" placeholder="Поиск...">
                    </div>
                </div>
            </div>
            <div class="d-flex column flex-1">
                <ul v-if="searchLog === ''" class="c-main-list admin-chat" ref="iLogList">
                    <li v-for="l in logs">{{ l }}</li>
                </ul>
                <ul v-else class="c-main-list admin-chat" ref="iLogList">
                    <li v-for="l in logs" v-if="l.indexOf(searchLog) !== -1">{{ l }}</li>
                </ul>
                <div class="d-flex mt-auto mb-10">
                    <button v-on:click="clearLogs();" class="c-button">Очистить ( только для себя )</button>
                    <div class="c-input-block ml-10" style="width: 300px;">
                        <input v-model="searchLog" class="c-input" placeholder="Поиск...">
                    </div>
                </div>
            </div>
        </div>
    `,data:()=>({logs:[],searchLog:"",killLogs:[],searchKillLog:""}),methods:{clearLogs(){this.logs=[],LOGS=[],LOGS_UPDATE=!0},clearKillLogs(){this.killLogs=[],KILL_LOGS=[],KILL_LOGS_UPDATE=!0},update(){LOGS_UPDATE||(this.logs=LOGS,LOGS_UPDATE=!0),KILL_LOGS_UPDATE||(this.killLogs=KILL_LOGS,KILL_LOGS_UPDATE=!0)},onOpen(){this.update(),this.$nextTick(()=>{this.$refs.iLogList.scrollTop=this.$refs.iLogList.scrollHeight+99,this.$refs.iKillLogList.scrollTop=this.$refs.iKillLogList.scrollHeight+99})}}});function console_adminLog(e){LOGS.push(unescape(e)),LOGS_UPDATE=!1,adminConsole.isCurrentTab(logTab)&&adminConsole.getCurrentTab().update()}function console_adminKillLog(e){KILL_LOGS.push(unescape(e)),KILL_LOGS_UPDATE=!1,adminConsole.isCurrentTab(logTab)&&adminConsole.getCurrentTab().update()}var PLAYERS_AUTH_LOGS_UPDATE=!1,PLAYERS_AUTH_LOGS=[];const playersTab=Vue.component("playersTab",{template:`
        <div class="d-flex flex-1">
            <div class="d-flex column flex-1">
                <ul v-if="playersAuthSearchLog === ''" class="c-main-list admin-chat" ref="iPlayersAuthLogList">
                    <li v-for="l in playersAuthLogs">{{ l }}</li>
                </ul>
                <ul v-else class="c-main-list admin-chat" ref="iLogList">
                    <li v-for="l in playersAuthLogs" v-if="l.indexOf(playersAuthSearchLog) !== -1">{{ l }}</li>
                </ul>
                <div class="d-flex mt-auto mb-10">
                    <button @click="clearLogs();" class="c-button">Очистить ( только для себя )</button>
                    <div class="c-input-block ml-10" style="width: 300px;">
                        <input v-model="playersAuthSearchLog" class="c-input" placeholder="Поиск...">
                    </div>
                </div>
            </div>
        </div>
    `,data:()=>({playersAuthLogs:[],playersAuthSearchLog:""}),methods:{clearLogs(){this.playersAuthLogs=[],PLAYERS_AUTH_LOGS=[],PLAYERS_AUTH_LOGS_UPDATE=!0},update(){PLAYERS_AUTH_LOGS_UPDATE||(this.playersAuthLogs=PLAYERS_AUTH_LOGS,PLAYERS_AUTH_LOGS_UPDATE=!0)},onOpen(){this.update(),this.$nextTick(()=>{this.$refs.iPlayersAuthLogList.scrollTop=this.$refs.iPlayersAuthLogList.scrollHeight+99})}}});function console_playerAuthLog(e){PLAYERS_AUTH_LOGS.push(unescape(e)),PLAYERS_AUTH_LOGS_UPDATE=!1,adminConsole.isCurrentTab(playersTab)&&adminConsole.getCurrentTab().update()}var ANTICHEAT_LOGS_UPDATE=!1,ANTICHEAT_LOGS=[];const antiCheatLog=Vue.component("antiCheatLog",{template:`
        <div class="d-flex flex-1">
            <div class="d-flex column flex-1">
                <ul v-if="search === ''" class="c-main-list admin-chat" ref="iLogList">
                    <li v-for="l in logs">{{ l }}</li>
                </ul>
                <ul v-else class="c-main-list admin-chat" ref="iLogList">
                    <li v-for="l in logs" v-if="l.indexOf(search) !== -1">{{ l }}</li>
                </ul>
                <div class="d-flex mt-auto mb-10">
                    <button @click="clearLogs();" class="c-button">Очистить ( только для себя )</button>
                    <div class="c-input-block ml-10" style="width: 300px;">
                        <input v-model="search" class="c-input" placeholder="Поиск...">
                    </div>
                </div>
            </div>
        </div>
    `,data:()=>({logs:[],search:""}),methods:{clearLogs(){this.logs=[],ANTICHEAT_LOGS=[],ANTICHEAT_LOGS_UPDATE=!0},update(){ANTICHEAT_LOGS_UPDATE||(this.logs=ANTICHEAT_LOGS,ANTICHEAT_LOGS_UPDATE=!0)},onOpen(){this.update(),this.$nextTick(()=>{this.$refs.iLogList.scrollTop=this.$refs.iLogList.scrollHeight+99})}}});function console_antiCheatLog(e){e=unescape(e),ANTICHEAT_LOGS.push(e),ANTICHEAT_LOGS_UPDATE=!1,adminConsole.notifyWarning(e),adminConsole.isCurrentTab(antiCheatLog)&&adminConsole.getCurrentTab().update()}let consoleNotifyTimer=null;class AdminConsole{constructor(){this.app=new Vue({el:"#consoleApp",data:{app:this,open:!1,auth:!1,level:0,currentTab:mainTab,tabs:[{name:"\u041A\u043E\u043D\u0441\u043E\u043B\u044C",template:mainTab},{name:"\u0427\u0430\u0442",template:chatTab},{name:"\u0418\u0433\u0440\u043E\u043A",template:playerTab},{name:"\u0420\u0435\u043F\u043E\u0440\u0442",template:reportTab},{name:"\u0422\u0435\u043B\u0435\u043F\u043E\u0440\u0442",template:teleportTab},{name:"\u041C\u0430\u0448\u0438\u043D\u044B",template:vehicleTab},{name:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",template:manageTab},{name:"\u041B\u043E\u0433\u0438",template:logTab},{name:"\u0410\u043D\u0442\u0438\u0447\u0438\u0442",template:antiCheatLog},{name:"\u0418\u0433\u0440\u043E\u043A\u0438",template:playersTab},{name:"\u0422\u0435\u0441\u0442",template:testTab}],form:{pass:""}}}),this.promiseModal=null,this.promiseResolve=null,this.promiseReject=null,this.modal=new Vue({el:"#consoleModalApp",data:{app:this,open:!1,header:"",text:"",params:[]},methods:{sendModal(){this.open=!1,this.app.promiseResolve(this.params.map(e=>e.value)),this.app.promiseModal=null},closeModal(){this.open=!1,this.app.promiseReject(""),this.app.promiseModal=null}}})}isOpen(){return this.app.open}async show(){this.app.open=!0,this.app.auth?this.app.$nextTick(()=>{let e=this.app.$refs.currentTab;e.onOpen&&e.onOpen()}):this.app.$nextTick(()=>this.app.$refs.iPass.focus()),await rpc.triggerClient("client_setGlobalValue",["isConsoleOpen",!0]),await rpc.triggerClient("client_cursor_status",!0)}async hide(){this.app.open=!1,await rpc.triggerClient("client_setGlobalValue",["isConsoleOpen",!1]),await rpc.triggerClient("client_cursor_status",!1)}async toggle(){this.app.open?await this.hide():await this.show()}openTab(e,t){this.app.currentTab=e.template,this.app.$nextTick(()=>{const e=this.app.$refs.currentTab;e.onOpen&&e.onOpen(t)})}notifyText(e){this.notify("#fff",e)}notifyWarning(e){this.notify("#FF8000",e)}notifyError(e){this.notify("#e72139",e)}notify(e,t){5<=$(".console-notify").length&&$(".console-notify").last().remove(),$("#consoleNotifyBlock").prepend(`<div class="console-notify" style="display: none; border-color: ${e}">${t}</div>`),$(".console-notify").first().show("fade"),clearInterval(consoleNotifyTimer),consoleNotifyTimer=setInterval(function(){$(".console-notify").is(":visible")?$(".console-notify").last().hide(function(){$(this).remove()}):clearInterval(consoleNotifyTimer)},5e3)}async openModalAsync(e,t,n){return null!=this.promiseModal&&this.promiseReject(""),this.promiseModal=new Promise((e,t)=>{this.promiseResolve=e,this.promiseReject=t}),this.modal.open=!0,this.modal.header=e,this.modal.text=t,this.modal.params=n,this.promiseModal}isCurrentTab(e){return adminConsole.app.currentTab==e}getCurrentTab(){return this.app.$refs.currentTab}async onPassEnter(e){if(!(6>e.length))try{await serverAPI.getAsync("server_admin_auth",e),this.app.auth=!0}catch(e){this.notifyError(e),this.app.form.pass=""}}}const adminConsole=new AdminConsole;function console_notify(e,t){adminConsole.notify(unescape(e),unescape(t))}rpc.on("__console_toggle",()=>adminConsole.toggle()),rpc.on("__console_setAuth",e=>adminConsole.app.auth=e);const CONSOLE_KEY=1040;$("body").keydown(async function(e){e.which==CONSOLE_KEY&&adminConsole.isOpen()&&e.preventDefault()});async function console_toggle(){(await rpc.callClient("client_getGlobalValue","isAuth"))&&((await rpc.callClient("client_getGlobalValue","startAdminAuth"))||0!=(await rpc.callClient("client_getGlobalValue","adminLevel")))&&!(await rpc.callClient("client_getGlobalValue","isChatOpen"))&&(await adminConsole.toggle())}function console_setAdminLevel(e){adminConsole.app.auth=0<e,adminConsole.app.level=e,8<=e&&adminConsole.app.tabs.push({name:"\u041A\u043E\u0434",template:codeTab}),0===e&&adminConsole.isOpen()&&adminConsole.hide()}