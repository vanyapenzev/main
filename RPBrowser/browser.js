const IS_TEST="undefined"!=typeof MP_TEST,PATH=IS_TEST?"../../RPBrowser":"package://RPBrowser";$("body").append(`
    <div id="vueBrowser">
        <template>

        <div v-show="opened" class="browser-container">
            <div class="browser-left-buttons">
                <div class="browser-left-button" style="background: #ff6251;" onclick="browserClose();"></div>
                <div class="browser-left-button" style="background: #ffc000;" onclick="browserClose();"></div>
                <div class="browser-left-button" style="background: #00cc00;"></div>
            </div>
            <div class="browser-tab-panel">
                <div v-for="(tab, index) in tabs" @click="selectTab(index);">
                    <div class="browser-tab" :class="{'active': index == activeTabIndex, 'before-active': index == activeTabIndex - 1, 'after-active': index == activeTabIndex + 1}">
                        <div class="browser-tab-name">{{ tab.name }}</div>
                        <img class="browser-tab-close" src="${PATH}/Images/tab_clsoe_ico.png" @click="closeTab(index);">
                    </div>
                </div>
                <img v-show="this.tabs.length < 5" class="browser-tab-new" src="${PATH}/Images/tab_new_ico.png" @click="openNewTab();">
            </div>
            <div class="browser-url-panel">
                <img class="browser-url-panel-button" src="${PATH}/Images/url_panel_arrow_left.png">
                <img class="browser-url-panel-button" src="${PATH}/Images/url_panel_arrow_right.png">
                <img class="browser-url-panel-button" src="${PATH}/Images/url_panel_refresh.png">
                <div class="browser-url-input-block">
                    <input 
                        class="browser-url-input" placeholder="Введие название или ссылку на сайт" 
                        v-model="urlInputValue"
                        @keyup.enter="helpSites = []; openNewSite();"
                        @input="urlDataChange"
                        @focus="clearTimeout(urlInputActiveTimeout); urlInputActive = true;"
                        @blur="urlInputActiveTimeout = setTimeout(() => urlInputActive = false, 300);">
                    <div v-show="urlInputActive" class="browser-url-input-help-block">
                        <div v-for="site in helpSites">
                            <div @click="urlInputValue = site.getUrl(); helpSites = []; openNewSite();" class="browser-url-input-help-item">
                                <span class="browser-url-input-help-item-name">{{ site.getName() }}</span>
                                <span class="browser-url-input-help-item-url">{{ site.getUrl() }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="(tab, index) in tabs" class="browser-site-block" v-show="index == activeTabIndex">
                <keep-alive>
                    <component :key="index" :is="tab.siteComponent" :site="tab.site"></component>
                </keep-alive>
            </div>
        </div>

        </template>
    </div>
`);class RPSite{constructor(a,b,c){this.page=a,this.name=b,this.url=c,RPSite.rpSiteList.add(this),RPSite.rpSiteMap.set(this.page,this),RPSite.rpSiteUrlMap.set(this.url,this)}getUrl(){return this.url}getPage(){return`${PATH}/url_${this.page}.html`}getName(){return this.name}static getSiteByPage(a){return RPSite.rpSiteMap.get(a)}static getSiteByUrl(a){return RPSite.rpSiteUrlMap.get(a)}}RPSite.rpSiteList=new Set,RPSite.rpSiteMap=new Map,RPSite.rpSiteUrlMap=new Map;const DEFAULT_PAGE=new RPSite("startPage","\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",""),ERROR_404_PAGE=new RPSite("error404Page","\u041E\u0448\u0438\u0431\u043A\u0430, \u0441\u0430\u0439\u0442 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D","");class GameForum extends RPSite{constructor(){super("gameForum","\u0424\u043E\u0440\u0443\u043C \u0441\u0435\u0440\u0432\u0435\u0440\u0430 (NON-RP)","forum.gta5rp.com")}getPage(){return"https://forum.gta5rp.com/"}}new GameForum,new RPSite("casino","Diamond Casino","diamond-casino.com"),new RPSite("casino_luckyWheel","Diamond Casino - LuckyWheel","diamond-casino-luckywheel.com"),new RPSite("casino_roulette","Diamond Casino - Roulette","diamond-casino-roulette.com"),new RPSite("5vito","5vito","5vito.com"),new RPSite("forbes","Forbes","forbes.com"),new RPSite("gov","Los Santos Government","ls.gov");const browserTabComponent=Vue.component("browser-tab",{props:{site:{default:null,type:Object}},template:`
        <div v-if="site" class="browser-iframe-block">
            <iframe class="browser-iframe" :src="site.getPage()" frameborder="false">Ошибка 503</iframe>
        </div>
    `}),browserApp=new Vue({el:"#vueBrowser",data:{opened:!1,tabs:[],activeTabIndex:0,activeTab:null,currentSite:null,urlInputValue:"",urlInputActive:!1,urlInputActiveTimeout:setTimeout(()=>{},0),helpSites:[],sites:[]},methods:{open(){this.opened=!0,IS_TEST?this.sites=Array.from(RPSite.rpSiteList):rpc.callClient("client_rpBrowser_getPlayerData").then(a=>{let b=["startPage","gameForum","casino","forbes"];-1!=[1,2,6,7,8,9].indexOf(a.playerFactionType)&&b.push("gov"),this.sites=b.map(a=>RPSite.getSiteByPage(a)).filter(a=>null!=a)}).catch(()=>{}),0==this.tabs.length&&this.openNewTab()},close(){this.opened=!1},urlDataChange(){const a=this.urlInputValue.toLowerCase();this.helpSites=[];const b=new Set;if(""!=a&&""!=a.trim()){for(const c of this.sites)(c.getName().toLowerCase().startsWith(a)||c.getUrl().toLowerCase().startsWith(a))&&(this.helpSites.push(c),b.add(c));for(const c of this.sites)b.has(c)||(-1!=c.getName().toLowerCase().indexOf(a)||-1!=c.getUrl().toLowerCase().indexOf(a))&&this.helpSites.push(c)}},openNewSite(){const a=this.urlInputValue;if(""!=a){const b=RPSite.getSiteByUrl(a);return b&&-1!==this.sites.indexOf(b)?void this.selectNewSite(b):void this.selectNewSite(ERROR_404_PAGE)}},selectNewSite(a){const b={siteComponent:browserTabComponent,site:a,name:a.getName(),url:a.getUrl(),deleted:!1};Vue.set(this.tabs,this.activeTabIndex,b),this.activeTab=b,this.currentSite=a,this.urlInputValue=a.getUrl()},openNewTab(a=DEFAULT_PAGE){if(!(5<=this.tabs.length)){const b={siteComponent:browserTabComponent,site:a,name:a.getName(),url:a.getUrl(),deleted:!1};this.tabs.push(b),this.selectTab(this.tabs.length-1)}},selectTab(a){null==this.tabs[a]||this.tabs[a].deleted||(this.activeTabIndex=a,this.activeTab=this.tabs[a],this.currentSite=this.tabs[a].site,this.urlInputValue=this.activeTab.url)},closeTab(a){const b=this.tabs.length;this.tabs[a].deleted=!0,this.tabs.splice(a,1),1==b?this.openNewTab():this.selectTab(0)}}});function browserOpen(){browserApp.open(),rpc.triggerClient("client_cursor_status",!0),serverAPI.setGlobalValueAsync("isGameBrowserOpen",!0)}function browserClose(){browserApp.close(),rpc.triggerClient("client_cursor_status",!1),serverAPI.setGlobalValueAsync("isGameBrowserOpen",!1)}window.mainBrowser={async getAsync(a,b={}){let c=await rpc.callServer(a,b);if(c.error)throw c.errorText;else return c.data},callClientAsync(a,b){return rpc.callClient(a,b)},openNewTab(a){const b=RPSite.getSiteByUrl(a);return b?void browserApp.selectNewSite(b):void browserApp.selectNewSite(ERROR_404_PAGE)},openSite(a){const b=RPSite.getSiteByUrl(a);return b?void(mp.trigger("__client_menu_playerMenu_startDonate",b.getPage()),browserApp.opened&&browserClose()):void browserApp.selectNewSite(ERROR_404_PAGE)}},rpc.on("client_browser_rpBrowser_open",browserOpen),rpc.on("client_browser_rpBrowser_close",browserClose);