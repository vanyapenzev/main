$("body").append(`
<div id="smartphoneApp">
<template>
<div v-show="isOpen" id="iphoneBlock">
    <div id="iphoneFrame">
        <div @click="phoneClick" id="iphoneContent">
            <div id="iphoneAppContent" :class="app_appContentClass" :style="app_appContentStyle">
                <div v-show="app_enableTopbar" class="d-flex" :style="{'background': app_topbarBackground }" style="padding-top: 5px; padding-left: 20px; padding-right: 17px; transition: .4s all;">
                    <div class="app-text s-12 f-m" :class="{'app-c-black': app_whiteApp}">{{ serverTime }}</div>
                    <div class="ml-auto" style="margin-top: 2px; margin-right: 5px;">
                        <svg width="30" height="10" viewBox="0 0 32 10" :class="{'app-c-black': app_whiteApp, 'app-c-white': !app_whiteApp}"><defs><path d="M1675,510.65c0,-0.49706 0.40294,-0.9 0.9,-0.9h0.9c0.49706,0 0.9,0.40294 0.9,0.9v2.25c0,0.49706 -0.40294,0.9 -0.9,0.9h-0.9c-0.49706,0 -0.9,-0.40294 -0.9,-0.9zM1679.05,509.3c0,-0.49706 0.40294,-0.9 0.9,-0.9h0.9c0.49706,0 0.9,0.40294 0.9,0.9v3.6c0,0.49706 -0.40294,0.9 -0.9,0.9h-0.9c-0.49706,0 -0.9,-0.40294 -0.9,-0.9zM1683.1,507.5c0,-0.49706 0.40294,-0.9 0.9,-0.9h0.9c0.49706,0 0.9,0.40294 0.9,0.9v5.4c0,0.49706 -0.40294,0.9 -0.9,0.9h-0.9c-0.49706,0 -0.9,-0.40294 -0.9,-0.9zM1687.15,505.7c0,-0.49706 0.40294,-0.9 0.9,-0.9h0.9c0.49706,0 0.9,0.40294 0.9,0.9v7.2c0,0.49706 -0.40294,0.9 -0.9,0.9h-0.9c-0.49706,0 -0.9,-0.40294 -0.9,-0.9z" id="Path-0"/><path d="M1698.65234,511.80894l1.99606,1.99106l1.99606,-1.99106c-0.54401,-0.44315 -1.23892,-0.70894 -1.99606,-0.70894c-0.75714,0 -1.45205,0.26579 -1.99606,0.70894zM1697.69584,510.85094c0.79071,-0.68582 1.82309,-1.10094 2.95255,-1.10094c1.12946,0 2.16184,0.41512 2.95256,1.10094l1.27656,-1.27506c-1.11875,-1.01048 -2.60199,-1.62588 -4.22912,-1.62588c-1.62713,0 -3.11037,0.6154 -4.22912,1.62588zM1694.19,507.34661l1.27467,1.27368c1.36364,-1.25432 3.18416,-2.02029 5.18372,-2.02029c1.99957,0 3.82009,0.76597 5.18373,2.02029l1.27467,-1.27368c-1.69039,-1.57964 -3.96138,-2.54661 -6.4584,-2.54661c-2.49701,0 -4.768,0.96697 -6.45839,2.54661z" id="Path-1"/></defs><desc>Generated with Avocode.</desc><g transform="matrix(1,0,0,1,-1675,-504)"><g><title>Signal</title><g><title>Mobile Signal</title><use xlink:href="#Path-0" fill-opacity="1"/></g><g><title>Wifi</title><use xlink:href="#Path-1" fill-opacity="1"/></g></g></g></svg>
                    </div>
                </div>
                <keep-alive>
                    <component :is="currentApp" ref="currentApp"></component>
                </keep-alive>
                <div v-show="app_enableBottom" id="iphoneAppBottom" :class="{'black': app_whiteApp}"></div>
                <div v-show="app_enableBottom" @click="openMainScreen();" id="iphoneAppBottomArea"></div>
            </div>
        </div>
    </div>
    <div id="iphoneStripe"></div>
    <div id="iphoneHeader"></div>
    <div id="iphonePower"></div>
    <div @click="taskClose();" id="iphonePowerArea"></div>
    <div id="iphoneBtns" :class="{'silent-mode': silentMode}"></div>
    <div @click="toggleSilentMode();" id="iphoneBtnsArea"></div>
    <div id="iphoneSensors"></div>
</div>
<div id="iphoneNotifyBlock" :style="{'bottom': isOpen ? 555 : 100 }"></div>
</template>
</div>
`);var myCharacterId=-1,enablePlayerControl=!1;Vue.use(Vuex);const appPhoneStore=new Vuex.Store({state:{contacts:[],phoneHistory:[]},mutations:{addNumberToHistory(e,t){50<e.phoneHistory.length&&e.phoneHistory.splice(0,1),e.phoneHistory.push({number:t,time:smartphoneAppVue.serverTime})}}}),phoneApp=createSmartphoneApp("phoneApp",{template:`
        <div class="d-flex column app-content">
            <div v-show="openTab == 0" class="d-flex column mt-10 p-10">
                <div class="text-center mt-20" style="height: 40px;">
                    <span class="app-text f-b s-32 blackgray">{{ enterPhone }}</span>
                </div>
                <div class="mt-20">
                    <div class="d-flex space-around list-mt-10">
                        <div @click="enterPhoneNumber(1)" class="app-phone-numberButton">1</div>
                        <div @click="enterPhoneNumber(2)" class="app-phone-numberButton">2</div>
                        <div @click="enterPhoneNumber(3)" class="app-phone-numberButton">3</div>
                    </div>
                    <div class="d-flex space-around list-mt-10">
                        <div @click="enterPhoneNumber(4)" class="app-phone-numberButton">4</div>
                        <div @click="enterPhoneNumber(5)" class="app-phone-numberButton">5</div>
                        <div @click="enterPhoneNumber(6)" class="app-phone-numberButton">6</div>
                    </div>
                    <div class="d-flex space-around list-mt-10">
                        <div @click="enterPhoneNumber(7)" class="app-phone-numberButton">7</div>
                        <div @click="enterPhoneNumber(8)" class="app-phone-numberButton">8</div>
                        <div @click="enterPhoneNumber(9)" class="app-phone-numberButton">9</div>
                    </div>
                    <div class="d-flex space-around list-mt-10">
                        <div class="app-phone-numberButton">*</div>
                        <div @click="enterPhoneNumber(0)" class="app-phone-numberButton">0</div>
                        <div class="app-phone-numberButton">#</div>
                    </div>
                    <div class="d-flex space-around list-mt-10">
                        <div @click="startSMSToPhone(enterPhone)" class="app-phone-numberButton blue" :style="{'opacity': enterPhone.length > 6 ? 1 : 0}"><i class="fas fa-comment"></i></div>
                        <div @click="startCallToPhone(enterPhone)" class="app-phone-numberButton green"><i class="fas fa-phone pe-none"></i></div>
                        <div @click="enterPhone = enterPhone.substring(0, enterPhone.length - 1)" class="app-phone-numberButton outline" :style="{'opacity': enterPhone.length > 0 ? 1 : 0}"><i class="fas fa-backspace"></i></div>
                    </div>
                </div>
            </div>
            <div v-show="openTab == 1" class="d-flex column mt-10 p-10" style="max-height: calc(100% - 95px)">
                <div class="d-flex center-align">
                    <div class="app-text f-b s-28 blackgray">Контакты</div>
                    <button @click="openTab = 3;" class="app-label-button blue ml-auto">Добавить</button>
                </div>
                <div class="app-input-block outline-gray mt-10" style="flex-shrink: 0;">
                    <input v-model="searchContact" class="app-input" placeholder="Поиск">
                </div>
                <div class="app-scroll-shadow mt-10">
                    <div v-if="searchContact.length == 0">
                        <div v-for="c in contacts">
                            <div @click="openContact(c)" class="app-text f-m s-16 black app-phone-contactItem">{{ c.name }}</div>
                        </div>
                        <div class="app-text f-m s-16 gray mt-20">Важное</div>
                        <div @click="callToContact({ number: '511' })" class="app-text f-m s-16 black app-phone-contactItem">Полиция</div>
                        <div @click="callToContact({ number: '911' })" class="app-text f-m s-16 black app-phone-contactItem">Медики</div>
                        <div @click="callToContact({ number: '7220' })" class="app-text f-m s-16 black app-phone-contactItem">Такси</div>
                        <div @click="callToContact({ number: '1020' })" class="app-text f-m s-16 black app-phone-contactItem">Механик</div>
                    </div>
                    <div v-else>
                        <div v-for="c in contactsSearch">
                            <div @click="openContact(c)" class="app-text f-m s-16 black app-phone-contactItem">{{ c.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="openTab == 2" class="d-flex column mt-10 p-10" style="max-height: calc(100% - 95px)">
                <div class="d-flex center-align">
                    <div class="app-text f-b s-28 blackgray">История</div>
                </div>
                <div class="app-scroll-shadow mt-10" style="display: flex; flex-direction: column-reverse;">
                    <div v-for="ph in phoneHistory">
                        <div @click="callToContact(ph)" class="d-flex app-phone-contactItem">
                            <div class="app-text f-m s-16 black">{{ numberToName(ph.number) }}</div>
                            <div class="app-text f-m s-14 gray ml-auto">{{ ph.time }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="openTab == 3" class="d-flex column mt-20">
                <div class="d-flex space-around center-align">
                    <button @click="openTab = 1; addContactName = ''; addContactNumber = ''; addContactError = '';" class="app-label-button blue">Отмена</button>
                    <div class="app-text f-b s-20 blackgray">Контакт</div>
                    <button @click="createContact" :disabled="addContactName.length < 3 || addContactNumber.length < 3" class="app-label-button blue">Готово</button>
                </div>
                <div class="mt-10" style="border-top: 1px solid rgba(0, 0, 0, 0.2); heigth: 1px; width: 100%;"></div>
                <div class="p-10">
                    <div class="app-input-block transparent mt-10">
                        <input v-model="addContactName" class="app-input" placeholder="Имя">
                    </div>
                    <div class="app-input-block transparent mt-10">
                        <input v-model="addContactNumber" class="app-input" placeholder="Телефон">
                    </div>
                    <div class="app-text f-m s-16 red text-center mt-10">{{ addContactError }}</div>
                </div>
            </div>
            <div v-show="openTab == 4" class="d-flex column mt-20">
                <div class="d-flex space-between center-align" style="padding: 0px 10px;">
                    <button @click="openTab = 1;" class="app-label-button blue">Назад</button>
                    <button @click="startEditContact(openedContact)" class="app-label-button blue">Править</button>
                </div>
                <div class="text-center mt-10">
                    <div class="app-text f-b s-20 blackgray">{{ openedContact.name }}</div>
                </div>
                <div class="d-flex center mt-10">
                    <div @click="callToContact(openedContact)" class="d-flex center app-bg-blue" style="height: 30px; width: 30px; border-radius: 50%;">
                        <i class="fas fa-phone" style="color: #fff; font-size: 12px;"></i>
                    </div>
                    <div @click="smsToContact(openedContact)" class="d-flex center app-bg-blue ml-10" style="height: 30px; width: 30px; border-radius: 50%;">
                        <i class="fas fa-comment" style="color: #fff; font-size: 12px;"></i>
                    </div>
                </div>
                <div class="mt-10" style="border-top: 1px solid rgba(0, 0, 0, 0.2); heigth: 1px; width: 100%;"></div>
                <div class="p-10">
                    <div class="app-text f-m s-16 gray">Телефон</div>
                    <div class="app-text f-m s-16 blue mt-5">{{ openedContact.number }}</div>
                </div>
                <div class="mt-30" style="border-top: 1px solid rgba(0, 0, 0, 0.2); heigth: 1px; width: 100%;"></div>
                <div @click="deleteContact" class="app-text f-m s-16 red p-10">Удалить контакт</div>
                <div style="border-top: 1px solid rgba(0, 0, 0, 0.2); heigth: 1px; width: 100%;"></div>
            </div>
            <div v-show="openTab == 5" class="d-flex column mt-20">
                <div class="d-flex space-around center-align">
                    <button @click="openContact(editContact)" class="app-label-button blue">Отмена</button>
                    <div class="app-text f-b s-14 blackgray">Редактирование</div>
                    <button @click="endEditContact" :disabled="editContactName.length < 3 || editContactNumber.length < 3" class="app-label-button blue">Готово</button>
                </div>
                <div class="mt-10" style="border-top: 1px solid rgba(0, 0, 0, 0.2); heigth: 1px; width: 100%;"></div>
                <div class="p-10">
                    <div class="app-input-block transparent mt-10">
                        <input v-model="editContactName" class="app-input" placeholder="Имя">
                    </div>
                    <div class="app-input-block transparent mt-10">
                        <input v-model="editContactNumber" class="app-input" placeholder="Телефон">
                    </div>
                    <div class="app-text f-m s-16 red text-center mt-10">{{ editContactError }}</div>
                </div>
            </div>
            <div class="d-flex space-around" style="position: absolute; bottom: 0px; height: 65px; border-top: 1px solid rgba(0, 0, 0, 0.1); width: 100%; background: rgb(245, 245, 250);">
                <div class="app-phone-menuTabIcon" @click="openTab = 0">
                    <svg :class="{'app-c-gray': openTab != 0, 'app-c-blue': openTab == 0}" class="pe-none" width="30" height="30" viewBox="0 0 172 172"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M40.13333,22.93333c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM86,22.93333c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM131.86667,22.93333c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM40.13333,68.8c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM86,68.8c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM131.86667,68.8c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM40.13333,114.66667c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM86,114.66667c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2zM131.86667,114.66667c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2z"></path></g></g></svg>
                    <span :class="{'app-c-gray': openTab != 0, 'app-c-blue': openTab == 0}" class="app-text f-m s-10 pe-none">Набор</span>
                </div>
                <div class="app-phone-menuTabIcon" @click="openTab = 1">
                    <svg :class="{'app-c-gray': openTab != 1 && openTab != 3 && openTab != 4 && openTab != 5, 'app-c-blue': !(openTab != 1 && openTab != 3 && openTab != 4 && openTab != 5)}" class="pe-none" width="30" height="30" viewBox="0 0 172 172"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M85.57,11.395c-16.13844,0.36281 -26.35094,6.89344 -30.745,16.985c-4.17906,9.60781 -3.30562,21.715 -0.3225,34.2925c-1.59906,1.88125 -2.91594,4.52844 -2.58,8.4925v0.215c0.57781,4.1925 1.84094,7.14875 3.44,9.245c0.76594,0.99438 1.85438,1.04813 2.795,1.6125c0.83313,4.68969 2.70094,9.16438 4.8375,12.685c0.1075,0.51063 0.3225,0.98094 0.645,1.3975c0,0 0.34938,0.44344 0.43,0.5375c1.075,1.6125 1.6125,3.85656 1.6125,6.3425c0,2.64719 -0.04031,5.10625 -0.3225,7.8475c-1.03469,2.60688 -3.61469,4.68969 -7.74,6.7725c-4.31344,2.17688 -9.95719,4.17906 -15.695,6.665c-5.73781,2.48594 -11.55625,5.46906 -16.2325,10.2125c-4.67625,4.74344 -8.02219,11.31438 -8.4925,19.8875l-0.215,3.655h138.03l-0.215,-3.655c-0.47031,-8.57312 -3.73562,-15.13062 -8.385,-19.8875c-4.64937,-4.75687 -10.49469,-7.72656 -16.2325,-10.2125c-5.73781,-2.48594 -11.42187,-4.47469 -15.8025,-6.665c-4.24625,-2.12312 -6.90687,-4.28656 -8.0625,-6.9875c-0.26875,-3.25187 -0.3225,-5.81844 -0.3225,-8.7075c0,-1.84094 0.63156,-3.50719 1.72,-5.16c0.02688,-0.04031 0.08063,-0.06719 0.1075,-0.1075c0.01344,-0.02687 0.215,-0.215 0.215,-0.215c0.43,-0.44344 0.72563,-1.00781 0.86,-1.6125c2.08281,-3.57437 3.81625,-8.11625 4.6225,-12.685c1.075,-0.56437 2.28438,-0.63156 3.1175,-1.72c1.65281,-2.16344 2.62031,-5.24062 3.01,-9.46c0.30906,-3.64156 -0.73906,-6.28875 -2.365,-8.2775c1.78719,-5.50937 3.91031,-14.32437 3.225,-23.3275c-0.37625,-4.945 -1.67969,-9.87656 -4.6225,-13.975c-2.66062,-3.70875 -6.96062,-6.24844 -12.3625,-7.4175c-3.64156,-4.86437 -10.25281,-6.7725 -17.845,-6.7725zM85.6775,18.275c0.04031,0 0.06719,0 0.1075,0c6.86656,0.02688 11.26063,1.96188 12.685,4.4075l0.86,1.505l1.72,0.215c4.73,0.65844 7.32344,2.48594 9.245,5.16c1.92156,2.67406 3.02344,6.40969 3.3325,10.535c0.63156,8.26406 -1.76031,17.9525 -3.3325,22.36l-1.075,2.9025l2.6875,1.3975c-0.02687,0.09406 1.10188,1.23625 0.9675,3.7625c0,0.05375 0,0.05375 0,0.1075c-0.3225,3.23844 -1.15562,5.06594 -1.72,5.805c-0.57781,0.7525 -0.87344,0.645 -0.7525,0.645h-3.01l-0.43,3.01c-0.59125,4.46125 -2.86219,10.07813 -4.8375,12.9h-0.1075c-0.20156,0.29563 -0.34937,0.645 -0.5375,0.9675c-0.90031,1.04813 -2.2575,2.43219 -4.1925,4.085c-3.21156,2.74125 -7.47125,5.16 -11.2875,5.16c-3.78937,0 -8.08937,-2.53969 -11.395,-5.375c-2.86219,-2.45906 -4.56875,-4.56875 -5.0525,-5.16c-0.01344,-0.02687 0.01344,-0.08062 0,-0.1075c-2.02906,-2.92937 -4.35375,-8.0625 -4.945,-12.47l-0.3225,-3.01h-2.795c-0.12094,-0.05375 -0.44344,-0.22844 -0.7525,-0.645c-0.60469,-0.79281 -1.46469,-2.64719 -1.935,-5.805c0,-0.06719 0,-0.04031 0,-0.1075c-0.01344,-0.05375 0.01344,-0.05375 0,-0.1075c-0.05375,-2.60687 1.55875,-4.05812 1.29,-3.87l1.935,-1.3975l-0.5375,-2.365c-3.17125,-12.53719 -3.66844,-23.89187 -0.3225,-31.605c3.34594,-7.68625 10.11844,-12.55062 24.51,-12.9zM72.5625,105.0275c3.62813,2.67406 8.17,5.0525 13.4375,5.0525c5.16,0 9.58094,-2.2575 13.115,-4.8375c0.01344,2.09625 0.08063,4.24625 0.3225,6.88v0.43l0.215,0.43c0.60469,1.58563 1.46469,2.92938 2.4725,4.1925c-0.04031,0.13438 -0.08062,0.28219 -0.1075,0.43c0,0 -0.81969,2.2575 -3.225,4.73c-2.40531,2.4725 -6.14094,4.945 -12.7925,4.945c-6.62469,0 -10.49469,-2.58 -13.0075,-5.16c-2.51281,-2.58 -3.3325,-4.945 -3.3325,-4.945c0.99438,-1.29 1.81406,-2.67406 2.365,-4.3l0.215,-0.645c0.29563,-2.60687 0.3225,-4.95844 0.3225,-7.2025zM107.5,121.905c1.20938,0.77938 2.45906,1.505 3.7625,2.15c5.02563,2.49938 10.72313,4.43438 16.125,6.7725c5.40188,2.33813 10.44094,4.98531 14.0825,8.7075c2.9025,2.96969 4.64938,6.92031 5.59,11.825h-122.12c0.94063,-4.90469 2.67406,-8.85531 5.59,-11.825c3.655,-3.72219 8.78813,-6.36937 14.19,-8.7075c5.40188,-2.33812 11.04563,-4.25969 16.0175,-6.7725c1.23625,-0.63156 2.49938,-1.29 3.655,-2.0425c0.76594,1.38406 1.94844,3.18469 3.655,4.945c3.50719,3.61469 9.44656,7.2025 17.9525,7.2025c8.47906,0 14.2975,-3.5475 17.7375,-7.095c1.88125,-1.935 3.02344,-3.73562 3.7625,-5.16z"></path></g></g></svg>
                    <span :class="{'app-c-gray': openTab != 1 && openTab != 3 && openTab != 4 && openTab != 5, 'app-c-blue': !(openTab != 1 && openTab != 3 && openTab != 4 && openTab != 5)}" class="app-text f-m s-10 pe-none">Контакты</span>
                </div>
                <div class="app-phone-menuTabIcon" @click="openTab = 2">
                    <svg :class="{'app-c-gray': openTab != 2, 'app-c-blue': openTab == 2}" class="pe-none" width="30" height="30" viewBox="0 0 128 128"><path d="M 64 13.5 C 36.2 13.5 13.5 36.2 13.5 64 C 13.5 91.8 36.2 114.5 64 114.5 C 91.8 114.5 114.5 91.8 114.5 64 C 114.5 36.2 91.8 13.5 64 13.5 z M 64 19.5 C 88.5 19.5 108.5 39.5 108.5 64 C 108.5 88.5 88.5 108.5 64 108.5 C 39.5 108.5 19.5 88.5 19.5 64 C 19.5 39.5 39.5 19.5 64 19.5 z M 64 31 C 62.3 31 61 32.3 61 34 L 61 58.800781 C 59.2 59.800781 58 61.8 58 64 C 58 67.3 60.7 70 64 70 C 66.2 70 68.199219 68.8 69.199219 67 L 84 67 C 85.7 67 87 65.7 87 64 C 87 62.3 85.7 61 84 61 L 69.199219 61 C 68.699219 60.1 67.9 59.300781 67 58.800781 L 67 34 C 67 32.3 65.7 31 64 31 z"></path></svg>
                    <span :class="{'app-c-gray': openTab != 2, 'app-c-blue': openTab == 2}" class="app-text f-m s-10 pe-none">История</span>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: rgb(250, 250, 254);",openTab:0,enterPhone:"",searchContact:"",addContactName:"",addContactNumber:"",addContactError:"",openedContact:{id:-1,name:"",number:""},editContact:null,editContactName:"",editContactNumber:"",editContactError:"",loadedData:!1},computed:{contacts(){return appPhoneStore.state.contacts},phoneHistory(){return appPhoneStore.state.phoneHistory},contactsSearch(){const e=this.searchContact.toLocaleLowerCase();return this.contacts.filter(t=>-1!=t.name.toLocaleLowerCase().indexOf(e))}},methods:{async onOpen(e){if(this.searchContact="",!this.loadedData){this.loadedData=!0;try{const e=await sendHttpAsync("smartphone/phoneApp/contacts/list");for(const t of e)appPhoneStore.state.contacts.push(t)}catch(e){serverAPI.notifyError(`Ошибка получения контактов ( ${e} )`)}}null!=e&&this.callToContact({number:e+""})},startCallToPhone(e){""==e||smartphoneAppVue.openApp(phoneAppCall,{callTo:e})},enterPhoneNumber(e){7>this.enterPhone.length&&(this.enterPhone+=e)},startSMSToPhone(e){smartphoneAppVue.openApp(phoneAppMessanger,{number:e})},openContact(e){this.openedContact=e,this.openTab=4},callToContact(e){this.enterPhone=e.number+"",this.openTab=0},smsToContact(e){smartphoneAppVue.openApp(phoneAppMessanger,{number:e.number})},async deleteContact(){try{await sendHttpAsync("smartphone/phoneApp/contacts/delete",{id:this.openedContact.id}),appPhoneStore.state.contacts=appPhoneStore.state.contacts.filter(e=>e.id!=this.openedContact.id),this.openedContact={id:-1,name:"",number:""},this.openTab=1}catch(e){serverAPI.notifyError(e)}},startEditContact(e){this.editContact=e,this.editContactName=e.name,this.editContactNumber=e.number,this.editContactError="",this.openTab=5},async endEditContact(){if(20<this.editContactName.length)return void(this.editContactError="\u0418\u043C\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");if(7<this.editContactNumber.length)return void(this.editContactError="\u041D\u043E\u043C\u0435\u0440 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 7 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");if(isNaN(this.editContactNumber))return void(this.editContactError="\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C");try{await sendHttpAsync("smartphone/phoneApp/contacts/edit",{id:this.editContact.id,name:this.editContactName,number:this.editContactNumber}),this.editContact.name=this.editContactName,this.editContact.number=this.editContactNumber,this.openContact(this.editContact)}catch(e){this.editContactError=e}},async createContact(){if(50<appPhoneStore.state.contacts.length)return void(this.addContactError="\u041D\u0435\u043B\u044C\u0437\u044F \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 50 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043E\u0432");if(20<this.addContactName.length)return void(this.addContactError="\u0418\u043C\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");if(7<this.addContactNumber.length)return void(this.addContactError="\u041D\u043E\u043C\u0435\u0440 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 7 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");if(isNaN(this.addContactNumber))return void(this.addContactError="\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C");try{const e=await sendHttpAsync("smartphone/phoneApp/contacts/create",{name:this.addContactName,number:this.addContactNumber}),t={id:e,name:this.addContactName,number:this.addContactNumber};appPhoneStore.state.contacts.push(t),this.addContactName="",this.addContactNumber="",this.openContact(t)}catch(e){this.addContactError=e}},numberToName(e){const t=appPhoneStore.state.contacts.find(t=>t.number===e);return t?t.name:e}}}),appPhoneCallStore=new Vuex.Store({state:{status:0}}),phoneAppCall=createSmartphoneApp("phoneAppCall",{template:`
        <div class="d-flex column app-content">
            <div class="app-text f-m s-20 text-center" style="margin-top: 100px;">{{ numberToName(number) }} ( {{ fromId }} )</div>
            <div class="app-text s-16 text-center mt-20">{{ statusText }}</div>
            <div v-if="!isCallEnd && status != -1" class="d-flex center" style="margin-top: 170px;">
                <div @click="endCall" class="app-phoneCall-button red">
                    <i class="fas fa-phone-slash pe-none"></i>
                </div>
                <div @click="acceptCall" v-if="!isCaller && status == 0" class="app-phoneCall-button green ml-20">
                    <i class="fas fa-phone pe-none"></i>
                </div>
            </div>
            <div v-if="isCallEnd" class="d-flex center" style="margin-top: 170px;">
                <div @click="exitCallApp" class="app-phoneCall-button red">
                    <i class="fas fa-times pe-none"></i>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!1,enableBottom:!1,appContentClass:"",appContentStyle:"background: rgb(30, 30, 30);",isCaller:!0,number:"",fromId:""},computed:{status(){return appPhoneCallStore.state.status},statusText(){const e=appPhoneCallStore.state.status;if(this.isCaller){if(-1==e)return"\u0418\u0434\u0451\u0442 \u0432\u044B\u0437\u043E\u0432";if(0==e)return"\u0418\u0434\u0451\u0442 \u0432\u044B\u0437\u043E\u0432";if(1==e)return"\u0418\u0434\u0451\u0442 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440";if(2==e)return"\u0412\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440";if(3==e)return"\u0410\u0431\u043E\u043D\u0435\u043D\u0442 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440";if(4==e)return"\u0410\u0431\u043E\u043D\u0435\u043D\u0442 \u043E\u0442\u043A\u043B\u043E\u043D\u0438\u043B \u0432\u044B\u0437\u043E\u0432";if(5==e)return"\u0410\u0431\u043E\u043D\u0435\u043D\u0442 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C";if(6==e)return"\u0417\u0430\u043D\u044F\u0442\u043E";if(7==e)return"\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435";if(8==e)return"\u0423 \u0432\u0430\u0441 \u043C\u0443\u0442";if(9==e)return"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0432\u044F\u0437\u044C";if(10==e)return"\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u0431\u0440\u0430\u043D \u043D\u043E\u043C\u0435\u0440";if(11==e)return"\u0410\u0431\u043E\u043D\u0435\u043D\u0442 \u0437\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D";if(12==e)return"\u0410\u0431\u043E\u043D\u0435\u043D\u0442 \u0432\u044B\u043A\u043B\u044E\u0447\u0438\u043B \u0442\u0435\u043B\u0435\u0444\u043E\u043D"}else{if(0==e)return"\u0417\u0432\u043E\u043D\u0438\u0442 \u0432\u0430\u043C";if(1==e)return"\u0418\u0434\u0451\u0442 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440";if(2==e)return"\u0410\u0431\u043E\u043D\u0435\u043D\u0442 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440";if(3==e)return"\u0412\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438 \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440"}return""},isCallEnd(){const e=appPhoneCallStore.state.status;return 0!=e&&1!=e&&-1!=e}},methods:{async onOpen(e){return e.callTo?(this.isCaller=!0,this.number=e.callTo,this.fromId="",appPhoneCallStore.state.status=-1,void serverAPI.getAsync("server_smartphone_startCall",this.number).then(e=>99==e?void smartphoneAppVue.openApp(mainScreenApp):void(appPhoneCallStore.state.status=e,appPhoneStore.commit("addNumberToHistory",this.number))).catch(()=>{appPhoneCallStore.state.status=6})):e.callFrom?(this.isCaller=!1,this.number=e.callFrom,this.fromId=e.id,appPhoneCallStore.state.status=0,void appPhoneStore.commit("addNumberToHistory",this.number)):void 0},acceptCall(){serverAPI.triggerRemote("server_smartphone_acceptCall")},endCall(){serverAPI.triggerRemote("server_smartphone_endCall")},exitCallApp(){smartphoneAppVue.openApp(mainScreenApp)},numberToName(e){const t=appPhoneStore.state.contacts.find(t=>t.number===e);return t?t.name:e}}}),appMessangerStore=new Vuex.Store({state:{chats:[],openChat:{chatId:-1,fromId:-1,fromNumber:"",toId:-1,toNumber:"",new:!0,last:""},openChatMessage:[]}}),phoneAppMessanger=createSmartphoneApp("phoneAppMessanger",{template:`
        <div class="d-flex column app-content">
            <div v-if="openedChat === null && !newMessageMode">
                <div class="d-flex center-align mt-10 p-10">
                    <div class="app-text f-b s-28 blackgray">Сообщения</div>
                    <button @click="startNewMessage" class="app-label-button blue ml-auto">
                        <svg class="pe-none" width="17" height="17" viewBox="0 0 146 150">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4152 0C61.7742 0 53.9587 7.81557 53.9587 17.4565V57.1305H17.4565C7.81555 57.1305 0 64.9461 0 74.587C0 84.228 7.81554 92.0435 17.4565 92.0435H53.9587V131.717C53.9587 141.358 61.7742 149.174 71.4152 149.174C81.0562 149.174 88.8717 141.358 88.8717 131.717V92.0435H128.543C138.184 92.0435 146 84.228 146 74.587C146 64.946 138.184 57.1305 128.543 57.1305H88.8717V17.4565C88.8717 7.81555 81.0562 0 71.4152 0Z" fill="#0070c9"/>
                        </svg>
                    </button>
                </div>
                <div class="d-flex column p-10">
                    <div class="app-scroll-shadow" style="max-height: 395px">
                        <div v-for="chat in chatList">
                            <div @click="openChat(chat)" class="d-flex column app-messanger-chatItem">
                                <div class="d-flex center-align app-text f-m s-16 blackgray pe-none">
                                    {{ chat.name }} 
                                    <div v-if="chat.new" class="app-messanger-newMessageIco"></div>
                                </div>
                                <div class="app-text f-m gray pe-none">{{ chat.last }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="openedChat === null && newMessageMode" class="mt-20">
                <div class="d-flex center" style="position: relative;">
                    <button @click="newMessageMode = false;" class="app-label-button blue" style="position: absolute; left: 5px;">Отмена</button>
                    <div class="app-text f-m blackgray">Сообщение</div>
                    <button @click="sendNewMessage" class="app-label-button blue" style="position: absolute; right: 5px;">Отправить</button>
                </div>
                <div class="mt-10" style="border-top: 1px solid rgba(0, 0, 0, 0.2); heigth: 1px; width: 100%;"></div>
                <div class="p-10">
                    <div class="app-input-block transparent mt-10">
                        <input maxlength="7" v-model="newMessageNumber" class="app-input" placeholder="Телефон">
                    </div>
                    <div class="app-input-block transparent mt-10">
                        <input maxlength="124" v-model="newMessageText" class="app-input" placeholder="Сообщение">
                    </div>
                    <div class="app-text f-m s-16 red text-center mt-10">{{ newMessageError }}</div>
                    <div class="app-text f-m s-16 green text-center mt-10">{{ newMessageSuccess }}</div>
                </div>
            </div>
            <div v-else>
                <div class="d-flex center mt-20" style="position: relative;">
                    <button @click="openedChat = null" class="app-label-button blue" style="position: absolute; left: 5px;">Назад</button>
                    <div class="app-text f-m s-16 blackgray">{{ openedChat.name }}</div>
                </div>
                <div class="mt-10" style="border-top: 1px solid rgba(0, 0, 0, 0.2); heigth: 1px; width: 100%;"></div>
                <div class="p-10">
                    <div class="d-flex app-scroll-shadow" style="flex-direction: column-reverse;" :style="{'height': openedChat.fromId != -1 ? '345px' : '390px'}">
                        <div v-for="m in messageList">
                            <div class="app-messanger-mRow">
                                <div class="app-messanger-mBlock" :class="{'my': m.my}">
                                    <div class="app-messanger-mText">{{ m.m }}</div>
                                    <div v-if="m.a.length > 0">
                                        <div v-for="a in m.a">
                                            <div v-if="a.type == 'point'" @click="setPointTo(a.x, a.y, a.z)" class="app-text f-m s-16 mt-5" :style="{'color': m.my ? '#fff' : '#000'}">
                                                [ Геолокация ]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="openedChat.fromId != -1" class="d-flex center-align mt-5">
                        <div class="app-messanger-inputBlock flex-1">
                            <input @keyup.enter="smsTochat" v-model="chatMessageInput" maxlength="124" class="app-messanger-input" placeholder="Сообщение...">
                            <div @click="smsTochat" class="app-messanger-button green ml-5">
                                <svg class="pe-none" width="12" height="12" viewBox="0 0 512.005 512.005" enable-background="new 0 0 512.005 512.005" >
                                    <path d="m511.658 51.675c2.496-11.619-8.895-21.416-20.007-17.176l-482 184c-5.801 2.215-9.638 7.775-9.65 13.984-.012 6.21 3.803 11.785 9.596 14.022l135.403 52.295v164.713c0 6.948 4.771 12.986 11.531 14.593 6.715 1.597 13.717-1.598 16.865-7.843l56.001-111.128 136.664 101.423c8.313 6.17 20.262 2.246 23.287-7.669 127.599-418.357 122.083-400.163 122.31-401.214zm-118.981 52.718-234.803 167.219-101.028-39.018zm-217.677 191.852 204.668-145.757c-176.114 185.79-166.916 176.011-167.684 177.045-1.141 1.535 1.985-4.448-36.984 72.882zm191.858 127.546-120.296-89.276 217.511-229.462z" fill="white" />
                                </svg>
                            </div>
                        </div>
                        <div @click="chatMessageAttchOpen = true" class="app-messanger-button blue ml-5">
                            <svg class="pe-none" width="10" height="10" viewBox="0 0 146 150">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4152 0C61.7742 0 53.9587 7.81557 53.9587 17.4565V57.1305H17.4565C7.81555 57.1305 0 64.9461 0 74.587C0 84.228 7.81554 92.0435 17.4565 92.0435H53.9587V131.717C53.9587 141.358 61.7742 149.174 71.4152 149.174C81.0562 149.174 88.8717 141.358 88.8717 131.717V92.0435H128.543C138.184 92.0435 146 84.228 146 74.587C146 64.946 138.184 57.1305 128.543 57.1305H88.8717V17.4565C88.8717 7.81555 81.0562 0 71.4152 0Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div v-if="chatMessageAttch.length != 0" class="d-flex mt-5">
                        <div v-for="messageAttach in chatMessageAttch">
                            <span class="app-text f-m s-12 blue">{{ getAttachName(messageAttach) }}</span>
                        </div>
                        <div @click="chatMessageAttch = []" class="app-text f-m s-12 red ml-5">[ Удалить ]</div>
                    </div>
                    <div v-show="chatMessageAttchOpen" class="app-messanger-attachmentSelect-menu">
                        <div @click="attachPoint(1)" class="app-messanger-attachmentSelect-item">Точка на карте</div>
                        <div @click="attachPoint(0)" class="app-messanger-attachmentSelect-item">Мои координаты</div>
                        <div @click="chatMessageAttchOpen = false" class="app-messanger-attachmentSelect-item app-c-red">Отмена</div>
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: rgb(250, 250, 254);",myId:-1,openedChat:null,lastOpenChat:{chatId:-1,name:"",fromId:-1},newMessageMode:!1,newMessageNumber:"",newMessageText:"",newMessageError:"",newMessageSuccess:"",chatMessageInput:"",chatMessageAttchOpen:!1,chatMessageAttch:[]},computed:{chatList(){return appMessangerStore.state.chats.map(e=>this.convertChatFromServer(e))},messageList(){return appMessangerStore.state.openChatMessage.map(e=>({my:e.cId==myCharacterId,m:e.m,a:e.a,d:e.d}))}},methods:{async onOpen(e){if(this.myId=myCharacterId,this.openedChat=null,this.newMessageMode=!1,await this.updateChatListAsync(),null!=e)if("object"==typeof e)try{const t=await sendHttpAsync("smartphone/sms/chat/findByNumber",{number:parseInt(e.number)});if(!t)return this.startNewMessage(),void(this.newMessageNumber=`${e.number}`);this.openChat(this.convertChatFromServer(t))}catch(e){serverAPI.notifyError(`Ошибка получения чата ( ${e} )`)}else this.startNewMessage(),this.newMessageNumber=`${e}`},async updateChatListAsync(){try{appMessangerStore.state.chats=await sendHttpAsync("smartphone/sms/chat/list")}catch(e){serverAPI.notifyError(`Ошибка получения списка сообщений ( ${__error} )`)}},async openChat(e){try{this.chatMessageInput="",this.chatMessageAttchOpen=!1,this.chatMessageAttch=[],appMessangerStore.state.openChatMessage=await sendHttpAsync("smartphone/sms/chat/get",{id:e.chatId}),this.openedChat=e,this.lastOpenChat=this.openedChat,appMessangerStore.state.openChat=this.openedChat;const t=appMessangerStore.state.chats.find(t=>t.id==e.chatId);t&&(t.new=!1)}catch(e){serverAPI.notifyError(`Ошибка ( ${e} )`)}},async smsTochat(){if(0!=this.chatMessageInput.length)try{const e=await sendHttpAsync("smartphone/sms/chat/sms",{id:this.openedChat.chatId,text:this.chatMessageInput,attach:JSON.stringify(this.chatMessageAttch)});this.chatMessageInput="",this.chatMessageAttch=[],appMessangerStore.state.openChatMessage.unshift(e)}catch(e){serverAPI.notifyError(`Ошибка ( ${e} )`)}},startNewMessage(){this.newMessageMode=!0,this.newMessageNumber="",this.newMessageText="",this.newMessageError="",this.newMessageSuccess=""},async sendNewMessage(){if(124<this.newMessageText.length||1>this.newMessageText.length)return void(this.newMessageError="\u0422\u0435\u043A\u0441\u0442 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043E\u0442 1 \u0434\u043E 124 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");if(7<this.newMessageNumber.length||3>this.newMessageNumber.length)return void(this.newMessageError="\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043E\u0442 3 \u0434\u043E 7 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");if(isNaN(this.newMessageNumber))return void(this.newMessageError="\u041D\u043E\u043C\u0435\u0440 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0447\u0438\u0441\u043B\u043E\u043C");try{const e=await sendHttpAsync("smartphone/sms/chat/new",{number:this.newMessageNumber,text:this.newMessageText,attach:JSON.stringify(this.chatMessageAttch)});if(e.system)return this.newMessageText="",this.newMessageSuccess="\u0413\u043E\u0442\u043E\u0432\u043E",void(this.newMessageError="");const t=appMessangerStore.state.chats.find(t=>t.id==e.chat.id);-1!=t&&appMessangerStore.state.chats.splice(t,1),appMessangerStore.state.chats.push(e.chat),this.newMessageText="",this.newMessageSuccess="\u0413\u043E\u0442\u043E\u0432\u043E",this.newMessageError=""}catch(e){this.newMessageError=e}},async attachPoint(e){const t=await rpc.callClient("client_smartphone_sms_getPos",e);return 0==t.x&&0==t.y&&0==t.z?void serverAPI.notifyError("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0442\u043E\u0447\u043A\u0443"):void(this.chatMessageAttch=[{type:"point",x:t.x,y:t.y,z:t.z}],this.chatMessageAttchOpen=!1)},setPointTo(e,t,n){mp.trigger("client_smartphone_gps_start","\u0413\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044F",parseFloat(e),parseFloat(t),parseFloat(n))},numberToName(e){const t=appPhoneStore.state.contacts.find(t=>t.number===e);return t?t.name:e},convertChatFromServer(e){return{name:e.fromId==myCharacterId?this.numberToName(e.toNumber):this.numberToName(e.fromNumber),new:e.new,last:e.last,fromId:e.fromId,chatId:e.id}},getAttachName(e){return e.type&&"point"==e.type?"\u0422\u043E\u0447\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435":""}}});function smartphone_sms_new(e,t){appMessangerStore.state.openChat.chatId==e&&appMessangerStore.state.openChatMessage.unshift(JSON.parse(unescape(t))),smartphoneAppVue.isOpen||UI_smartphoneNotify("app_sms_ico.png","\u041D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435","\u0423 \u0432\u0430\u0441 \u043D\u043E\u0432\u043E\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")}const newsApp=createSmartphoneApp("newsApp",{template:`
        <div class="d-flex column app-content">
            <div v-show="!startCreateAd" class="flex-1 mt-20 p-5">
                <div class="d-flex flex-1">
                    <img src="Smartphone/app_news_logo.png" style="height: 40px;">
                    <div @click="startCreateAd = true" class="app-text f-b s-14 ml-auto text-center" style="color: rgb(242, 2, 1)">
                        <div class="pe-none">Подать</div>
                        <div class="pe-none">Объявление</div>
                    </div>
                </div>
                <div class="mt-20">
                    <div class="app-scroll-shadow" style="height: 360px;">
                        <div v-for="news in newsList" class="list-mt-10">
                            <div @click="callToNumber(news.phone)" style="border-left: 3px solid rgb(242, 2, 1); padding: 1px 5px;">
                                <div class="app-text f-m s-14 black">{{ news.text }}</div>
                                <div class="app-text f-m s-14 black mt-5">
                                    <span style="color: rgb(242, 2, 1)">Телефон:</span>
                                    <span>{{ news.phone }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-show="startCreateAd" class="flex-1 mt-20 p-5">
                <div class="d-flex flex-1">
                    <img src="Smartphone/app_news_logo.png" style="height: 40px;">
                    <div @click="startCreateAd = false" class="app-text f-b s-14 ml-auto text-center mt-10" style="color: rgb(242, 2, 1)">Отмена</div>
                </div>
                <div class="mt-20 p-10">
                    <div class="app-input-block outline-gray">
                        <input v-model="adText" class="app-input" placeholder="Текст объявления">
                    </div>
                    <div class="mt-10 text-center">
                        <div class="app-text f-m s-16 black">Цена: <span style="color: rgb(242, 2, 1)">{{ adText.length * adPrice }}$</span></div>
                        <div class="app-text f-m s-16 black mt-5"><span style="color: rgb(242, 2, 1)">{{ adPrice }}$</span> за символ</div>
                        <div class="mt-20">
                            <button @click="sendNewAd" class="app-button">Отправить</button>
                        </div>
                        <div class="app-text f-m s-16 black mt-20">{{ adError }}</div>
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: rgb(244, 244, 248);",startCreateAd:!1,newsList:[],adText:"",adPrice:10,adError:""},computed:{},methods:{async onOpen(e){const t=await serverAPI.getAsync("server_weazelNews_getData");this.newsList=t.list,this.adPrice=t.price},async sendNewAd(){try{await serverAPI.getAsync("server_news_ad_new",this.adText),this.adError="",this.adText=""}catch(e){this.adError=e}},callToNumber(e){smartphoneAppVue.openApp(phoneApp,e)}}}),govNewsApp=createSmartphoneApp("govNewsApp",{template:`
        <div class="d-flex column app-content">
            <div class="flex-1 mt-20 p-5">
                <div class="d-flex flex-1">
                    <div class="app-text f-b" style="color: #A4003B; font-size: 28px;">LOSSANTOS<span class="app-text f-l" style="color: #A4003B; font-size: 28px;">.GOV</span></div>
                </div>
                <div class="mt-20">
                    <div class="app-scroll-shadow" style="height: 360px;">
                        <div v-for="news in newsList" class="list-mt-10">
                            <div style="border-left: 5px solid #A4003B; padding: 1px 5px;">
                                <div class="app-text f-m s-14" style="color: #2E2E2E;">{{ news }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: rgb(244, 244, 248);",newsList:[]},computed:{},methods:{async onOpen(e){this.newsList=(await serverAPI.getAsync("server_govNews_getLast")).reverse()}}}),mySimApp=createSmartphoneApp("mySimApp",{template:`
        <div class="d-flex column app-content">
            <div class="app-text s-20 mt-20 text-center">Ваш баланс</div>
            <div class="app-text s-20 mt-5 text-center">{{ phoneBalance }} $</div>
            <div class="p-10 mt-20">
                <div style="border: 2px solid rgb(255, 2, 4);">
                    <div style="padding: 5px;">
                        <div class="app-text f-m s-20 black text-center">{{ phoneNumber }}</div>
                        <div class="app-text s-18 black text-center">Ваш номер телефона</div>
                    </div>
                </div>
                <div class="app-text gray mt-20 text-center">С отрицательным балансом вы не сможете пользоваться звонками, смс, интернет банком</div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,topbarBackground:"rgb(255, 2, 4)",appContentClass:"",appContentStyle:"background: linear-gradient(rgb(255, 2, 4), rgb(255, 2, 4) 20%, rgb(252, 252, 254) 20%);",phoneNumber:"123123",phoneBalance:0},computed:{},methods:{async onOpen(e){const t=await serverAPI.getAsync("server_smartphone_mySim_getData");this.phoneNumber=t.phone,this.phoneBalance=t.balance}}}),mpApp=createSmartphoneApp("mpApp",{template:`
        <div class="d-flex column app-content">
            <div style="margin-top: 25px;" class="text-center">
                <img src="Smartphone/app_mp_logo.png">
                <div class="app-text w-700 s-20">Мероприятия</div>
            </div>
            <div v-if="openMp == null" class="mt-25 text-center">
                <div v-for="l in list" class="list-mt-10">
                    <button @click="getMpInfo(l)" class="app-outline-button">
                        <div class="pe-none">{{ l.name }}</div>
                        <div class="d-flex center-align mt-5 pe-none">
                            <i class="far fa-clock mr-5"></i>
                            {{ l.time }}
                            <i class="fas fa-user-friends ml-10 mr-5"></i>
                            {{ l.minPlayer }} - {{ l.maxPlayer }}
                        </div>
                    </button>
                </div>
            </div>
            <div v-else class="mt-25">
                <div class="d-flex column" style="margin-top: 40px; padding: 0px 15px;">
                    <div style="padding: 15px 10px; border-radius: 5px; border: 2px solid #fff;">
                        <div class="app-text s-18 f-m">{{ openMp.name }}</div>
                        <div class="app-text f-m mt-10" style="font-size: 13px;">{{ openMp.desc }}</div>
                        <div class="d-flex center-align app-text mt-10">
                            <i class="far fa-clock mr-5"></i>
                            {{ openMp.time }}
                            <i class="fas fa-user-friends ml-10 mr-5"></i>
                            <span members-count-label>{{ openMp.membersCount }}</span>
                        </div>
                    </div>
                    <div class="mt-10 d-flex">
                        <button @click="startMp" class="app-outline-button center flex-1">
                            <i class="fas fa-check" style="font-size: 20px; margin-right: 10px;"></i>
                            Записаться
                        </button>
                    </div>
                    <div class="mt-10 d-flex">
                        <button @click="openMp = null" class="app-outline-button center flex-1">
                            <i class="fas fa-chevron-left" style="font-size: 20px; margin-right: 10px;"></i>
                            Назад
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!1,enableBottom:!0,appContentClass:"app-mp-bg",list:[],openMp:null},computed:{},methods:{async onOpen(e){return null==e?(this.openMp=null,void(this.list=await rpc.callServer("server_gameActivityEvents_getList"))):void(this.openMp=e)},async startMp(){this.openMp.membersCount=await serverAPI.getAsync("server_gameActivityEvents_go",this.openMp.id)},getMpInfo(e){smartphoneAppVue.openApp(mpApp,e)}}}),bankApp=createSmartphoneApp("bankApp",{template:`
        <div class="d-flex column app-content">
            <div class="text-center mt-25">
                <img src="Smartphone/app_bank_logo.png">
                <div class="app-text f-m w-700 s-20 mt-20">{{ balance }} $</div>
                <div class="app-text w-700 s-16 mt-5">Ваш баланс</div>
            </div>
            <div v-if="tab === 0" class="mt-25 text-center">
                <button @click="tab = 2;" class="app-outline-button list-mt-10" style="width: 200px;">Перевод</button>
                <button @click="payMode = 'home'; payName = 'Оплата за дом'; tab = 1;" class="app-outline-button list-mt-10" style="width: 200px;">Оплатить дом</button>
                <button @click="payMode = 'apt'; payName = 'Оплата за квартиру'; tab = 1;" class="app-outline-button list-mt-10" style="width: 200px;">Оплатить квартиру</button>
                <button @click="payMode = 'phone'; payName = 'Оплата за телефон'; tab = 1;" class="app-outline-button list-mt-10" style="width: 200px;">Оплатить телефон</button>
                <button @click="payMode = 'biz'; payName = 'Оплата за бизнес'; tab = 1;" class="app-outline-button list-mt-10" style="width: 200px;">Оплатить бизнес</button>
            </div>
            <div v-if="tab === 1" class="p-10 mt-25 text-center">
                <div class="app-text f-m s-20">{{ payName }}</div>
                <div class="app-input-block outline-gray mt-10">
                    <input v-model.number="paySum" class="app-input" placeholder="Сумма">
                </div>
                <button @click="pay" class="app-outline-button mt-10" style="width: 150px;">Оплатить</button>
                <div class="app-text f-m s-16 mt-10">Комиссия 10%</div>
                <div class="app-text f-m s-16 mt-10 red">{{ payError }}</div>
                <button @click="tab = 0" class="app-outline-button mt-10" style="width: 150px;">Назад</button>
            </div>
            <div v-if="tab === 2" class="d-flex column flex-1 p-10 mt-10 text-center">
                <div class="app-text f-m s-20">Имя получателя</div>
                <div class="app-input-block outline-gray mt-5">
                    <input v-model="transferName" class="app-input" placeholder="Имя получателя">
                </div>
                <div class="app-text f-m s-20 mt-5">Сумма</div>
                <div class="app-input-block outline-gray mt-5">
                    <input v-model.number="transferSum" class="app-input" placeholder="Сумма перевода">
                </div>
                <div class="text-center mt-5">
                    <button @click="transfer" class="app-outline-button" style="width: 150px;">Перевести</button>
                </div>
                <div class="app-text f-m s-16 mt-5">{{ transferSum < 1000 ? 'Минимальная сумма перевода 1000$' : 'Для перевода вам нужно ' + Math.round((transferSum * 1.03)) + '$' }}</div>
                <div class="app-text f-m s-16 mt-5 red">{{ transferError }}</div>
                <div class="text-center mt-auto" style="padding-bottom: 5px">
                    <button @click="tab = 0" class="app-outline-button mt-auto" style="width: 150px;">Назад</button>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!1,enableBottom:!0,appContentClass:"app-bank-bg",balance:0,tab:0,transferName:"",transferSum:0,transferError:"",payMode:"",payName:"",paySum:0,payError:""},computed:{},methods:{async onOpen(e){this.balance=await serverAPI.getAsync("server_smartphone_bank_balance")},async pay(){try{await serverAPI.getAsync("server_smartphone_bank_pay",[this.payMode,this.paySum]),this.payError="",this.balance-=this.paySum}catch(e){this.payError=e}},async transfer(){try{await serverAPI.getAsync("server_smartphone_bank_transfer",[this.transferName,this.transferSum]),this.transferError="",this.transferSum=0,this.balance-=this.transferSum}catch(e){this.transferError=e}}}}),gpsAppStore=new Vuex.Store({state:{enable:!1,gpsName:"",gpsDist:0,gpsStreet:""}}),gpsApp=createSmartphoneApp("bankApp",{template:`
        <div class="d-flex column app-content">
            <div style="margin-top: 20px;" class="text-center">
                <img src="Smartphone/app_gps_logo.png">
                <div v-if="!store.enable && gpsCategorySelect == null" class="app-text f-m w-700 s-20 mt-20">GPS</div>
                <div v-if="!store.enable && gpsCategorySelect != null" class="app-text f-m w-700 s-20 mt-20">{{ gpsCategorySelect.name }}</div>
            </div>
            <div v-if="!store.enable && gpsCategorySelect == null" class="app-scroll-shadow p-10" style="max-height: 320px;">
                <div class="d-flex">
                    <button @click="findHome" class="app-outline-button flex-1">Дом</button>
                    <button @click="findBank" class="app-outline-button flex-1 ml-10">Банкомат</button>
                </div>
                <div class="text-center mt-10">
                    <div v-for="category in gpsList" class="list-mt-10">
                        <button @click="gpsCategorySelect = category" class="app-outline-button" style="width: 220px;">{{ category.name }}</button>
                    </div>
                </div>
            </div>
            <div v-if="!store.enable && gpsCategorySelect != null" class="app-scroll-shadow p-10" style="max-height: 320px;">
                <div class="d-flex menu-buttons">
                    <button v-if="gpsCategorySelect.enableSearch" @click="findFirst" class="app-outline-button flex-1">Ближайший</button>
                    <button @click="gpsCategorySelect = null" class="app-outline-button flex-1">Назад</button>
                </div>
                <div class="text-center mt-10">
                    <div v-for="item in gpsCategorySelect.list" class="list-mt-10">
                        <button @click="gpsToItem(item)" class="app-outline-button" style="width: 220px;">{{ item.name }}</button>
                    </div>
                </div>
            </div>
            <div v-if="store.enable" class="mt-10">
                <div class="mt-10 d-flex column text-center">
                    <div class="app-text f-b s-20">{{ store.gpsName }}</div>
                    <div class="app-text f-m s-16 mt-5">{{ store.gpsStreet }}</div>
                    <div class="app-text f-b s-20 mt-15">{{ gpsDist }}</div>
                    <div class="app-text f-m s-16 mt-5">осталось</div>
                </div>
                <div class="text-center mt-20">
                    <button @click="gpsOff" class="app-outline-button" style="width: 200px;">Отключить</button>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!1,enableBottom:!0,appContentClass:"app-gps-bg",store:gpsAppStore.state,isLoadData:!1,gpsList:[],gpsCategorySelect:null},computed:{gpsDist(){return 1e3<this.store.gpsDist?`${(this.store.gpsDist/1e3).toFixed(2)} КМ`:`${this.store.gpsDist} М`}},methods:{async onOpen(e){if(!this.isLoadData){const e=await serverAPI.getAsync("server_smartphone_gps_getList");for(const t of e){const e={name:t[0],list:[],enableSearch:t[2]};for(const n of t[1])e.list.push({name:n[0],position:n[1]});this.gpsList.push(e)}this.isLoadData=!0}},async findFirst(){var e=Math.pow;const t=await rpc.callClient("client_smartphone_sms_getPos",0);if(0==t.x&&0==t.y&&0==t.z)return void serverAPI.notifyError("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0442\u043E\u0447\u043A\u0443");let n=null,a=99999999;for(const o of this.gpsCategorySelect.list){const r=Math.sqrt(e(t.x-o.position.x,2)+e(t.y-o.position.y,2));r<a&&(a=r,n=o)}n&&this.gpsToItem(n)},gpsToItem(e){mp.trigger("client_smartphone_gps_start",e.name,e.position.x,e.position.y,e.position.z)},async findHome(){try{const e=await serverAPI.getAsync("server_smartphone_gps_getHousePosition");mp.trigger("client_smartphone_gps_start","\u0414\u043E\u043C",e.x,e.y,e.z)}catch(e){serverAPI.notifyError(e)}},async findBank(){mp.trigger("client_menu_atm_find")},gpsOff(){mp.trigger("client_smartphone_gps_off")}}}),carApp=createSmartphoneApp("carApp",{template:`
        <div class="d-flex column app-content">
            <div class="d-flex center-align mt-20 p-10">
                <img src="Smartphone/app_car_logo.png" style="height: 55px;">
                <div class="app-text f-b s-20 blackgray ml-10">
                    <div>Сигнализация</div>
                    <div>Авто</div>
                </div>
            </div>
            <div v-if="tab === 0" class="app-scroll-shadow mt-10 p-10" style="max-height: 330px;">
                <div v-for="i in list" class="list-mt-10">
                    <div @click="openCar = i; tab = 1;" class="app-car-carBlock">
                        <div style="width: 100px; min-width: 100px; max-width: 100px; flex-basis: 100px; height: 70px; background-position: center; background-size: 140px 70px;" :style="{'background-image': 'url(https://gta5rp.com/?act=proxy_car_photo&model=' + i.model + ')'}"></div>
                        <div class="app-car-carItem-text ml-5">
                            <div>{{ i.name }}</div>
                            <div>{{ i.number }}</div>
                        </div>
                    </div>
                </div>
                <div @click="openSpawnSetting" class="menu-text s-18 text-center mt-20" style="color: #55A1E8;">Настройки</div>
            </div>
            <div v-if="tab === 1 && openCar != null" class="mt-10 p-10">
                <div class="app-car-carBlock column">
                    <img :src="'https://gta5rp.com/?act=proxy_car_photo&model=' + openCar.model" style="height: 100px; width: 100%; flex: 1;">
                    <div class="app-car-carItem-text mt-10">{{ openCar.name }}</div>
                </div>
                <div class="mt-20 text-center">
                    <button @click="findVeh" class="app-car-button" style="width: 210px;">Найти</button>
                </div>
                <div class="mt-20 text-center">
                    <button @click="saveVeh" class="app-car-button" style="width: 210px;">Эвакуировать авто</button>
                </div>
                <div class="mt-20 text-center">
                    <button @click="tab = 0" class="app-car-button" style="width: 210px;">Назад</button>
                </div>
            </div>
            <div v-if="tab === 2" class="app-scroll-shadow p-10" style="max-height: 340px;">
                <div class="d-flex center-align">
                    <div @click="tab = 0" class="menu-text s-18" style="color: #55A1E8;">
                        <svg width="6" height="10" viewBox="0 0 6 10" style="margin-bottom: 1px;">
                            <path d="M0.222037 5.3902L4.67216 9.84025C4.77509 9.94325 4.91249 10 5.05899 10C5.20549 10 5.34289 9.94325 5.44582 9.84025L5.77354 9.51261C5.98679 9.29911 5.98679 8.95212 5.77354 8.73895L2.03666 5.00207L5.77768 1.26105C5.88061 1.15804 5.93744 1.02072 5.93744 0.8743C5.93744 0.727715 5.88061 0.5904 5.77768 0.48731L5.44996 0.159753C5.34696 0.0567455 5.20964 -1.97097e-06 5.06314 -1.98378e-06C4.91663 -1.99659e-06 4.77924 0.0567454 4.67631 0.159753L0.222037 4.61386C0.118867 4.7172 0.0622015 4.85516 0.0625267 5.00183C0.0622014 5.14906 0.118867 5.28695 0.222037 5.3902Z" fill="#55A1E8"/>
                        </svg>
                        Назад
                    </div>
                    <div @click="saveSpawnData" class="menu-text s-18 ml-auto" style="color: #55A1E8;">
                        Сохранить
                    </div>
                </div>
                <div v-for="sp in spawnList" class="mt-10">
                    <div class="menu-text s-20 text-center" style="color: #88B8E3">{{ sp.name }}</div>
                    <div v-for="(vehSpNumber, vehSpIndex) in sp.count" v-if="vehicleForSpawn[sp.offset + vehSpIndex]" class="app-spcar-carBlock mt-10">
                        <img :src="'https://gta5rp.com/?act=proxy_car_photo&model=' + vehicleForSpawn[sp.offset + vehSpIndex].model" class="app-spcar-ico">
                        <div class="d-flex center-align">
                            <div>
                                <div class="menu-text s-13" style="color: #45719A;">{{ vehicleForSpawn[sp.offset + vehSpIndex].name }}</div>
                                <div class="menu-text s-11" style="color: #45719A;">{{ vehicleForSpawn[sp.offset + vehSpIndex].number }}</div>
                            </div>
                            <div class="ml-auto">
                                <div @click="swapVeh(vehicleForSpawn[sp.offset + vehSpIndex].index, -1)">
                                    <svg width="14" height="10" viewBox="0 0 14 10" class="pe-none">
                                        <path d="M6.45372 1.11087L0.223657 7.34104C0.0794465 7.48514 -6.27228e-08 7.6775 -5.37575e-08 7.8826C-4.47921e-08 8.0877 0.0794465 8.28006 0.223657 8.42416L0.682352 8.88297C0.981244 9.18152 1.46703 9.18152 1.76547 8.88297L6.9971 3.65133L12.2345 8.88877C12.3787 9.03287 12.571 9.11243 12.776 9.11243C12.9812 9.11243 13.1734 9.03287 13.3178 8.88877L13.7763 8.42996C13.9206 8.28575 14 8.09351 14 7.8884C14 7.6833 13.9206 7.49094 13.7763 7.34685L7.54059 1.11087C7.39593 0.966427 7.20277 0.887094 6.99744 0.88755C6.79131 0.887094 6.59827 0.966427 6.45372 1.11087Z" fill="#88B8E3"/>
                                    </svg>      
                                </div>
                                <div @click="swapVeh(vehicleForSpawn[sp.offset + vehSpIndex].index, +1)" class="mt-10">
                                    <svg width="14" height="10" viewBox="0 0 14 10" style="transform: rotate(180deg)" class="pe-none">
                                        <path d="M6.45372 1.11087L0.223657 7.34104C0.0794465 7.48514 -6.27228e-08 7.6775 -5.37575e-08 7.8826C-4.47921e-08 8.0877 0.0794465 8.28006 0.223657 8.42416L0.682352 8.88297C0.981244 9.18152 1.46703 9.18152 1.76547 8.88297L6.9971 3.65133L12.2345 8.88877C12.3787 9.03287 12.571 9.11243 12.776 9.11243C12.9812 9.11243 13.1734 9.03287 13.3178 8.88877L13.7763 8.42996C13.9206 8.28575 14 8.09351 14 7.8884C14 7.6833 13.9206 7.49094 13.7763 7.34685L7.54059 1.11087C7.39593 0.966427 7.20277 0.887094 6.99744 0.88755C6.79131 0.887094 6.59827 0.966427 6.45372 1.11087Z" fill="#88B8E3"/>
                                    </svg>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="hasUnSpawnedVehicle" class="mt-10">
                    <div class="menu-text s-20 text-center" style="color: #88B8E3">Штрафстоянка</div>
                    <div v-for="(vehSpNumber, vehSpIndex) in 30 - spawnPosCount" v-if="vehicleForSpawn[spawnPosCount + vehSpIndex]" class="app-spcar-carBlock mt-10">
                        <img :src="'https://gta5rp.com/?act=proxy_car_photo&model=' + vehicleForSpawn[spawnPosCount + vehSpIndex].model" class="app-spcar-ico">
                        <div class="d-flex center-align">
                            <div>
                                <div class="menu-text s-13" style="color: #45719A;">{{ vehicleForSpawn[spawnPosCount + vehSpIndex].name }}</div>
                                <div class="menu-text s-11" style="color: #45719A;">{{ vehicleForSpawn[spawnPosCount + vehSpIndex].number }}</div>
                            </div>
                            <div class="ml-auto">
                                <div @click="swapVeh(vehicleForSpawn[spawnPosCount + vehSpIndex].index, -1)">
                                    <svg width="14" height="10" viewBox="0 0 14 10" class="pe-none">
                                        <path d="M6.45372 1.11087L0.223657 7.34104C0.0794465 7.48514 -6.27228e-08 7.6775 -5.37575e-08 7.8826C-4.47921e-08 8.0877 0.0794465 8.28006 0.223657 8.42416L0.682352 8.88297C0.981244 9.18152 1.46703 9.18152 1.76547 8.88297L6.9971 3.65133L12.2345 8.88877C12.3787 9.03287 12.571 9.11243 12.776 9.11243C12.9812 9.11243 13.1734 9.03287 13.3178 8.88877L13.7763 8.42996C13.9206 8.28575 14 8.09351 14 7.8884C14 7.6833 13.9206 7.49094 13.7763 7.34685L7.54059 1.11087C7.39593 0.966427 7.20277 0.887094 6.99744 0.88755C6.79131 0.887094 6.59827 0.966427 6.45372 1.11087Z" fill="#88B8E3"/>
                                    </svg>      
                                </div>
                                <div @click="swapVeh(vehicleForSpawn[spawnPosCount + vehSpIndex].index, +1)" class="mt-10">
                                    <svg width="14" height="10" viewBox="0 0 14 10" class="pe-none" style="transform: rotate(180deg)">
                                        <path d="M6.45372 1.11087L0.223657 7.34104C0.0794465 7.48514 -6.27228e-08 7.6775 -5.37575e-08 7.8826C-4.47921e-08 8.0877 0.0794465 8.28006 0.223657 8.42416L0.682352 8.88297C0.981244 9.18152 1.46703 9.18152 1.76547 8.88297L6.9971 3.65133L12.2345 8.88877C12.3787 9.03287 12.571 9.11243 12.776 9.11243C12.9812 9.11243 13.1734 9.03287 13.3178 8.88877L13.7763 8.42996C13.9206 8.28575 14 8.09351 14 7.8884C14 7.6833 13.9206 7.49094 13.7763 7.34685L7.54059 1.11087C7.39593 0.966427 7.20277 0.887094 6.99744 0.88755C6.79131 0.887094 6.59827 0.966427 6.45372 1.11087Z" fill="#88B8E3"/>
                                    </svg>      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: #edf1f3;",list:[],openCar:null,spawnList:[],spawnPosCount:0,vehicleForSpawn:[],hasUnSpawnedVehicle:!1,tab:0},computed:{},methods:{async onOpen(e){this.tab=0;try{this.list=await serverAPI.getAsync("server_smartphone_car_list")}catch(e){serverAPI.notifyError(e)}},async saveVeh(){try{await serverAPI.getAsync("server_smartphone_car_save",this.openCar.id)}catch(e){serverAPI.notifyError(e)}},async openSpawnSetting(){try{const[e,t]=await serverAPI.getAsync("server_smartphone_car_spawnList");let n=0;this.spawnList=e.map(e=>{return n+=e[1],{type:e[0],name:{h:["\u0414\u043E\u043C"],a:["\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430"],p:["\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430"]}[e[0]][0],count:e[1],offset:n-e[1]}}),this.spawnPosCount=0<this.spawnList.length?this.spawnList[this.spawnList.length-1].offset+this.spawnList[this.spawnList.length-1].count:0,this.vehicleForSpawn=t.map((e,t)=>({index:t,id:e[0],model:e[1],name:e[2],number:e[3]})),this.hasUnSpawnedVehicle=this.spawnPosCount<this.vehicleForSpawn.length,this.tab=2}catch(e){serverAPI.notifyError(e)}},swapVeh(e,t){const n=this.vehicleForSpawn[e],a=this.vehicleForSpawn[e+t];n&&a&&(a.index=e,n.index=e+t,Vue.set(this.vehicleForSpawn,e,a),Vue.set(this.vehicleForSpawn,e+t,n))},async saveSpawnData(){try{await serverAPI.getAsync("server_smartphone_car_spawnListSave",this.vehicleForSpawn.map(e=>e.id)),this.tab=0}catch(e){serverAPI.notifyError(e)}},findVeh(){return 0==this.openCar.position.x&&0==this.openCar.position.y&&0==this.openCar.position.z?void serverAPI.notifyError("\u041C\u0430\u0448\u0438\u043D\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0433\u0430\u0440\u0430\u0436\u0435"):void mp.trigger("client_smartphone_gps_start",this.openCar.name,this.openCar.position.x,this.openCar.position.y,this.openCar.position.z)}}}),familyContractApp=createSmartphoneApp("familyContractApp",{template:`
        <div class="d-flex column app-content">
            <div class="d-flex center mt-20">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="#0085FF">
                    <path d="M4.62778 6.70556L3.30556 8.02778L7.55556 12.2778L17 2.83333L15.6778 1.51111L7.55556 9.63333L4.62778 6.70556ZM15.1111 15.1111H1.88889V1.88889H11.3333V0H1.88889C0.85 0 0 0.85 0 1.88889V15.1111C0 16.15 0.85 17 1.88889 17H15.1111C16.15 17 17 16.15 17 15.1111V7.55556H15.1111V15.1111Z" fill="#0085FF"/>
                </svg>
                <div class="menu-text s-15 ml-5" style="color: #0085FF;">КОНТРАКТЫ</div>
            </div>
            <div v-if="current == null" class="app-scroll-shadow p-10" style="max-height: 380px;">
                <div class="d-flex column">
                    <button v-for="l in list" @click="current = l" class="menu-btn list-mt-10" style="background: linear-gradient(90deg, #0085FF 0%, #00E0FF 100%); border-radius: 5px; box-shadow: none;">{{ l.name }}</button>
                </div>
            </div>
            <div v-else class="app-scroll-shadow p-10" style="max-height: 380px;">
                <div class="menu-text f-m s-17 text-center" style="color: #0085FF;">{{ current.name }}</div>
                <div class="menu-text" style="color: #004D95;" v-html="current.desc"></div>
                <div class="menu-progress-block mt-10" style="box-shadow: none; background: #C1C6D8;">
                    <div class="d-flex menu-progress-fill" style="box-shadow: none; background: #0094FF;" :style="{'width': Math.min(100, current.progress / current.need * 100) + '%'}"></div>
                    <div class="menu-progress-text menu-text f-m flex-1 w-100 text-center" style="word-wrap: none; word-break: unset;">{{ current.progress }} / {{ current.need }} ( {{ Math.min(100, Math.round(current.progress / current.need * 100)) }} % )</div>
                </div>
                <div class="menu-text s-12 text-center mt-10" style="color: #0085FF;">Время до: {{ formatUnixToDate00(current.time) }}</div>
                <div class="menu-text f-m s-14 text-center mt-10" style="color: #0085FF;">Проложить маршрут</div>
                <button v-for="p in current.points" @click="setPoint(p[1], p[2])" class="menu-btn mt-10 w-100" style="background: linear-gradient(90deg, #0085FF 0%, #00F0FF 100%); border-radius: 5px; box-shadow: none; padding: 5px 10px;">
                    <svg class="mr-5" width="11" height="15" viewBox="0 0 11 15" fill="#fff">
                        <path d="M5.37281 0.461426C2.67755 0.461426 0.484741 2.65423 0.484741 5.34948C0.484741 8.73713 5.37761 14.5239 5.37761 14.5239C5.37761 14.5239 10.2609 8.57054 10.2609 5.34948C10.2609 2.65423 8.06815 0.461426 5.37281 0.461426ZM6.84764 6.78071C6.44097 7.18729 5.90693 7.39062 5.37281 7.39062C4.83877 7.39062 4.30456 7.18729 3.89806 6.78071C3.08481 5.96755 3.08481 4.64438 3.89806 3.83114C4.29185 3.43718 4.81568 3.2202 5.37281 3.2202C5.92993 3.2202 6.45367 3.43726 6.84764 3.83114C7.66088 4.64438 7.66088 5.96755 6.84764 6.78071Z" fill="white"/>
                    </svg>                
                    {{ p[0] }}
                </button>
                <button @click="current = null" class="menu-btn mt-10 w-100" style="background: linear-gradient(90deg, #FF4D00 0%, #FFC700 100%); border-radius: 5px; box-shadow: none; padding: 5px 10px;">Вернуться к списку</button>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: #edf1f3;",list:[],current:null},computed:{},methods:{async onOpen(e){try{this.list=await serverAPI.getAsync("server_playerFamily_contracts")}catch(e){serverAPI.notifyError(e)}},setPoint(e,t){mp.trigger("clientFunc_setWaypoint",e,t),serverAPI.notifySuccess("\u0422\u043E\u0447\u043A\u0430 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435")},formatUnixToDate00(e){const t=e=>10>e?"0"+e:e,n=new Date(1e3*e);return`${t(n.getDate())}.${t(n.getMonth()+1)}.${n.getFullYear()} ${t(n.getHours())}:00`}}}),radioAudio=new Audio,radioAppStore=new Vuex.Store({state:{load:!1,url:"",api:"",message:"",server:-1,phone:"",hash:"",play:!1,volume:100}}),radioApp=createSmartphoneApp("radioApp",{template:`
        <div class="d-flex column app-content">
            <div v-if="loadRadioData" class="flex-1 d-flex column center text-center">
                <div class="app-text f-m s-20 black">Загрузка данных...</div>
                <div v-if="loadFail" class="app-text f-m s-16 black">Радио выключено</div>
            </div>
            <div v-else class="flex-1 d-flex column center">
                <img :src="musicImage" @click="openRDMenu();" style="height: 200px; width: 200px; box-shadow: rgb(0, 0, 0) 0px 0px 15px 0px; border-radius: 10px;">
                <div class="app-text f-m s-12 black text-center mt-20">{{ musicName }}</div>
                <div class="app-text f-m s-12 pink text-center mt-5">{{ musicHost }}</div>
                <div class="text-center mt-10">
                    <button v-if="!store.play" @click="torgglePlay" class="app-music-button"><i class="fas fa-play pe-none" style="font-size: 32px;"></i></button>
                    <button v-else @click="torgglePlay" class="app-music-button"><i class="fas fa-stop pe-none" style="font-size: 32px;"></i></button>
                </div>
                <div class="d-flex center mt-10">
                    <div>
                        <i class="fas fa-volume-off" style="font-size: 16px; color: #919195;"></i>
                    </div>
                    <div class="app-music-slider ml-10" style="width: 150px;">
                        <input data-appmusic-slide type="range" value="50" step="1" min="0" max="100">
                    </div>
                    <div class="ml-10">
                        <i class="fas fa-volume-up" style="font-size: 16px; color: #919195;"></i>
                    </div>
                </div>
                <div v-if="enableMessage != 0" class="d-flex" style="margin-top: 40px;">
                    <div class="app-music-inputBlock flex-1">
                        <input @keyup.enter="messageToHost" v-model="message" maxlength="124" class="app-music-input" placeholder="Сообщение...">
                        <div @click="messageToHost" class="app-messanger-button app-music-button-message ml-5">
                            <i class="far fa-paper-plane pe-none" style="font-size: 10px;"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: #fff;",loadRadioData:!0,loadFail:!1,musicHost:"",musicName:"",musicImage:"",enableMessage:0,message:"",rdFunc:!1,store:radioAppStore.state},computed:{},methods:{async onOpen(e){try{if(!radioAppStore.state.load||!radioAppStore.state.play){this.loadRadioData=!0,this.loadFail=!1;try{const e=await serverAPI.getAsync("server_radio_getData");radioAppStore.state.url=e.host+":8000/play",radioAppStore.state.api=e.host+"/onair.json",radioAppStore.state.message=e.host+"/message.php",radioAppStore.state.server=e.server,radioAppStore.state.phone=e.phone,radioAppStore.state.hash=e.hash,radioAppStore.state.load=!0,this.rdFunc=e.rd}catch(e){return serverAPI.notifyError(`${e}`),void(this.loadFail=!0)}}this.updateAudioData(),this.loadRadioData=!1}catch(e){serverAPI.notifyError(e)}const t=setInterval(()=>{const e=$("[data-appmusic-slide]");e.length&&(e.val(this.store.volume),e.rangeslider({polyfill:!1,onSlide:(e,t)=>{this.store.volume=t,radioAudio.volume=this.store.volume/100}}),clearInterval(t))},200)},torgglePlay(){this.store.play?radioAudio.pause():(radioAudio.src=this.store.url,radioAudio.volume=this.store.volume/100,radioAudio.load(),radioAudio.play()),this.store.play=!this.store.play},openRDMenu(){this.rdFunc&&smartphoneAppVue.openApp(radioRDMenuApp,null)},async updateAudioData(){const e=await sendHttpGetAsync(radioAppStore.state.api);this.musicHost=e.host,this.musicName=e.song,this.musicImage=e.img,this.enableMessage=e.enableMessage},async messageToHost(){if(""!=this.message){try{const e=radioAppStore.state;await sendHttpGetAsync(radioAppStore.state.message+`?s=${e.server}&p=${e.phone}&h=${e.hash}&id=${myCharacterId}&t=${encodeURIComponent(this.message)}`)}catch(e){}this.message=""}}}}),radioRDMenuApp=createSmartphoneApp("radioRDMenuApp",{template:`
        <div class="d-flex column" style="flex-shrink: 0;">
            <div class="app-scroll-shadow mt-20" style="height: 460px; flex-shrink: 0;">
                <div class="d-flex column p-5">
                    <div class="app-text f-m s-16 black text-center">Сообщения игрокам</div>
                    <div class="d-flex">
                        <div class="app-music-inputBlock flex-1 mt-5">
                            <input v-model="adMessage" maxlength="124" class="app-music-input" placeholder="Сообщение...">
                            <div @click="sendMessageToPlayers" class="app-messanger-button app-music-button-message ml-5">
                                <i class="far fa-paper-plane pe-none" style="font-size: 10px;"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex column p-5">
                    <div class="app-text f-m s-16 black text-center">Арена</div>
                    <div>
                        <button @click="togglePickup" class="app-rdMenu-button mt-5 w-100">Открыть \\ Закрыть</button>
                        <button @click="saveCoord" class="app-rdMenu-button mt-5 w-100">Записать координаты</button>
                        <button @click="toggleDimension" class="app-rdMenu-button mt-5 w-100">Сменить измерение</button>
                        <button @click="giveHPAll" class="app-rdMenu-button mt-5 w-100">Восполнить всем хп</button>
                    </div>
                </div>
                <div class="d-flex column p-5">
                    <div class="app-text f-m s-16 black text-center">Машины</div>
                    <div class="d-flex">
                        <div class="app-music-inputBlock flex-1 mt-5">
                            <input v-model="vehModel" maxlength="124" class="app-music-input" placeholder="Модель">
                            <div @click="createVeh" class="app-messanger-button app-music-button-message ml-5">
                                <i class="fas fa-plus pe-none" style="font-size: 10px;"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button @click="deleteVeh" class="app-rdMenu-button mt-5 w-100">Удалить</button>
                    </div>
                    <div class="d-flex">
                        <div class="app-music-inputBlock flex-1 mt-5">
                            <input v-model="kickId" maxlength="4" class="app-music-input" placeholder="ID">
                            <div @click="kickPlayer" class="app-messanger-button app-music-button-message ml-5">
                                <i class="fas fa-plus pe-none" style="font-size: 10px;"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex column p-5">
                    <div class="app-text f-m s-16 black text-center">Прочее</div>
                    <div>
                        <button @click="toggleFly" class="app-rdMenu-button mt-5 w-100">Режим полёта</button>
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: #fff;",adMessage:"",vehModel:"sultan",kickId:0},computed:{},methods:{async onOpen(e){},async sendMessageToPlayers(){if(!(2>=this.adMessage.length))try{await serverAPI.getAsync("server_radioRD_ad",this.adMessage),this.adMessage=""}catch(e){serverAPI.notifyError(`${e}`)}},async togglePickup(){try{await serverAPI.getAsync("server_radioRD_togglePickup"),serverAPI.notifySuccess(`Готово`)}catch(e){serverAPI.notifyError(`${e}`)}},async saveCoord(){try{await serverAPI.getAsync("server_radioRD_saveCoord"),serverAPI.notifySuccess(`Готово`)}catch(e){serverAPI.notifyError(`${e}`)}},async toggleDimension(){try{await serverAPI.getAsync("server_radioRD_toggleDimension")}catch(e){serverAPI.notifyError(`${e}`)}},async giveHPAll(){try{await serverAPI.getAsync("server_radioRD_giveHPAll"),serverAPI.notifySuccess(`Готово`)}catch(e){serverAPI.notifyError(`${e}`)}},async createVeh(){try{await serverAPI.getAsync("server_radioRD_createVeh",this.vehModel)}catch(e){serverAPI.notifyError(`${e}`)}},async deleteVeh(){serverAPI.triggerRemote("server_radioRD_deleteVeh")},async kickPlayer(){try{await serverAPI.getAsync("server_radioRD_kick",this.kickId),serverAPI.notifySuccess(`Готово`)}catch(e){serverAPI.notifyError(`${e}`)}},async toggleFly(){try{await serverAPI.getAsync("server_radioRD_toggleFly")}catch(e){serverAPI.notifyError(`${e}`)}}}});setInterval(()=>{smartphoneAppVue.isOpen&&radioAppStore.state.load&&smartphoneAppVue.currentApp==radioApp&&smartphoneAppVue.app().updateAudioData()},10000);const lotteryApp=createSmartphoneApp("lotteryApp",{template:`
        <div class="d-flex column app-content">
            <div class="mt-20 text-center">
                <div class="menu-text f-b s-25" style="color: #FF7A00;">LOTTERY <span class="menu-text f-l s-25" style="color: #1D324A;">TICKET</span></div>
            </div>
            <div class="d-flex column flex-1" v-if="on">
                <div class="mt-20 text-center">
                    <div class="menu-text f-l s-19" style="color: #1D324A;">Текущий джекпот:</div>
                    <div class="menu-text f-b s-25" style="color: #FF7A00;">{{ lotterySum }} $</div>
                    <svg width="103" height="98" viewBox="0 0 103 98" class="mt-20">
                        <g clip-path="url(#lotteryAppClip)">
                        <path d="M102.704 43.6198L96.4512 32.5679C96.1869 32.0634 95.7435 31.6741 95.207 31.4754C94.6704 31.2767 94.0787 31.2826 93.5463 31.4921C91.4437 32.2092 89.1545 32.1713 87.077 31.3851C84.9996 30.5989 83.2654 29.1141 82.1763 27.1891C81.0872 25.2641 80.7122 23.0208 81.1164 20.8495C81.5206 18.6782 82.6785 16.7164 84.3886 15.3054C84.7874 14.9499 85.0496 14.4679 85.1304 13.9417C85.2112 13.4155 85.1056 12.8777 84.8317 12.4202L78.7758 1.17271C78.6321 0.904499 78.4352 0.667976 78.1969 0.477414C77.9587 0.286851 77.6841 0.146198 77.3896 0.0639392C77.0951 -0.0183193 76.7869 -0.0404782 76.4836 -0.00120056C76.1803 0.038077 75.8881 0.137977 75.6247 0.292473L1.18114 41.8593C0.911097 42.0021 0.672964 42.1976 0.481103 42.4343C0.289243 42.6709 0.147632 42.9437 0.0648136 43.2361C-0.018005 43.5286 -0.0403148 43.8347 -0.000769708 44.136C0.0387754 44.4373 0.139356 44.7275 0.294903 44.9891L2.9536 49.8793V46.9941C2.9536 45.4507 3.57089 43.9705 4.66966 42.8792C5.76843 41.7878 7.25869 41.1747 8.81259 41.1747H94.0879C94.8615 41.1682 95.6286 41.314 96.3452 41.6036C97.0617 41.8931 97.7134 42.3207 98.2627 42.8618C98.812 43.4028 99.248 44.0465 99.5455 44.7557C99.843 45.465 99.9962 46.2257 99.9961 46.9941V47.7765L101.818 46.7496C102.088 46.6068 102.326 46.4113 102.518 46.1746C102.71 45.938 102.851 45.6652 102.934 45.3727C103.017 45.0803 103.039 44.7742 103 44.4729C102.96 44.1716 102.86 43.8814 102.704 43.6198Z" fill="#1D324A"/>
                        <path d="M94.0885 44.6966H8.81317C8.19945 44.6966 7.61086 44.9388 7.17689 45.3698C6.74292 45.8008 6.49912 46.3854 6.49912 46.995V60.003C6.48661 60.5238 6.65648 61.0328 6.97974 61.443C7.30299 61.8533 7.75959 62.1394 8.27158 62.2525C10.3949 62.711 12.296 63.8784 13.6578 65.5603C15.0196 67.2421 15.7599 69.3367 15.7553 71.495C15.767 73.6496 15.0282 75.742 13.6643 77.4175C12.3004 79.093 10.3952 80.2487 8.27158 80.6886C7.75998 80.8198 7.30739 81.1174 6.9861 81.5341C6.66481 81.9507 6.49336 82.4622 6.49912 82.987V95.7016C6.49912 96.3112 6.74292 96.8958 7.17689 97.3268C7.61086 97.7578 8.19945 98 8.81317 98H94.0885C94.7022 98 95.2908 97.7578 95.7248 97.3268C96.1588 96.8958 96.4026 96.3112 96.4026 95.7016V83.1337C96.4128 82.6061 96.236 82.0917 95.9029 81.6804C95.5699 81.2692 95.1019 80.9874 94.5808 80.8842C92.4279 80.4431 90.4941 79.278 89.1056 77.5853C87.7171 75.8927 86.9588 73.7762 86.9588 71.5928C86.9588 69.4094 87.7171 67.2929 89.1056 65.6003C90.4941 63.9076 92.4279 62.7425 94.5808 62.3014C95.1019 62.1982 95.5699 61.9164 95.9029 61.5052C96.236 61.094 96.4128 60.5795 96.4026 60.0519V46.995C96.4026 46.3854 96.1588 45.8008 95.7248 45.3698C95.2908 44.9388 94.7022 44.6966 94.0885 44.6966ZM67.6492 68.1208L59.9193 75.6028C59.8919 75.6987 59.8919 75.8003 59.9193 75.8962L61.741 86.4591C61.747 86.5196 61.7368 86.5805 61.7112 86.6358C61.6857 86.691 61.6458 86.7385 61.5957 86.7733C61.5455 86.8082 61.487 86.8292 61.426 86.8341C61.365 86.839 61.3038 86.8277 61.2486 86.8014L51.697 81.9112C51.6521 81.8854 51.6012 81.8719 51.5493 81.8719C51.4975 81.8719 51.4465 81.8854 51.4016 81.9112L41.85 86.8014C41.7948 86.8277 41.7336 86.839 41.6726 86.8341C41.6116 86.8292 41.5531 86.8082 41.5029 86.7733C41.4528 86.7385 41.4129 86.691 41.3874 86.6358C41.3619 86.5805 41.3516 86.5196 41.3576 86.4591L42.49 80.004L43.1793 75.8962C43.1793 75.8962 43.1793 75.8962 43.1793 75.6028L35.2525 68.1208C35.2015 68.0903 35.1593 68.0473 35.13 67.9959C35.1007 67.9445 35.0853 67.8864 35.0853 67.8273C35.0853 67.7683 35.1007 67.7102 35.13 67.6588C35.1593 67.6074 35.2015 67.5644 35.2525 67.5339L45.9365 66.018C46.0172 66.0387 46.1019 66.0387 46.1827 66.018L51.1062 56.2375C51.2009 56.1995 51.3069 56.1995 51.4016 56.2375C51.4478 56.2158 51.4982 56.2045 51.5493 56.2045C51.6004 56.2045 51.6509 56.2158 51.697 56.2375L56.6205 66.018L67.3046 67.5339C67.3818 67.5011 67.4685 67.4975 67.5483 67.5237C67.628 67.5499 67.6954 67.6041 67.7378 67.6762C67.7801 67.7483 67.7945 67.8332 67.7782 67.9151C67.7618 67.997 67.716 68.0701 67.6492 68.1208Z" fill="#1D324A"/>
                        </g>
                        <defs>
                        <clipPath id="lotteryAppClip">
                        <rect width="103" height="98" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    <div class="menu-text f-l s-16 mt-20" style="color: #1D324A;">До розыгрыша осталось</div>
                    <div class="menu-text f-b s-26 mt-5" style="color: #1D324A;">{{ timeToLottery }}</div>
                </div>
                <div class="mt-auto text-center mb-20">
                    <div class="d-flex center">
                        <svg width="28" height="17" viewBox="0 0 28 17" style="margin-bottom: 4px;">
                            <path d="M27.4368 5.57624C27.5988 5.54119 27.7437 5.44975 27.8466 5.31769C27.9494 5.18563 28.0037 5.02123 28 4.85284V0.738475C28 0.641497 27.9813 0.545469 27.9448 0.455873C27.9083 0.366277 27.8548 0.284868 27.7873 0.216294C27.7199 0.147721 27.6398 0.0933249 27.5517 0.0562131C27.4636 0.0191012 27.3691 0 27.2737 0L0.726347 0C0.533717 0 0.348977 0.0778034 0.212768 0.216294C0.0765583 0.354785 3.6562e-05 0.542619 3.6562e-05 0.738475L3.6562e-05 4.88298C-0.00159767 5.04863 0.0515952 5.21003 0.151065 5.34123C0.250535 5.47243 0.390504 5.56582 0.548475 5.60638C1.20739 5.75387 1.79711 6.12547 2.22023 6.6598C2.64334 7.19413 2.87454 7.85922 2.87563 8.54521C2.89167 9.24406 2.66831 9.92685 2.24378 10.4767C1.81925 11.0266 1.21996 11.4093 0.548475 11.5594C0.402393 11.5912 0.270226 11.6699 0.171476 11.7838C0.0727255 11.8978 0.0126231 12.041 3.6562e-05 12.1924L3.6562e-05 16.2615C3.6562e-05 16.4574 0.0765583 16.6452 0.212768 16.7837C0.348977 16.9222 0.533717 17 0.726347 17H27.2737C27.4664 17 27.6511 16.9222 27.7873 16.7837C27.9235 16.6452 28 16.4574 28 16.2615V12.2225C28.0037 12.0541 27.9494 11.8897 27.8466 11.7577C27.7437 11.6256 27.5988 11.5342 27.4368 11.4991C26.7584 11.3684 26.1462 11.001 25.7058 10.4603C25.2654 9.91967 25.0244 9.23968 25.0244 8.53768C25.0244 7.83568 25.2654 7.15569 25.7058 6.61504C26.1462 6.07439 26.7584 5.707 27.4368 5.57624ZM17.0609 13.4282L14.0964 11.8307H13.9482L10.9836 13.4282C10.9658 13.4376 10.9456 13.4416 10.9256 13.4396C10.9056 13.4376 10.8866 13.4298 10.8709 13.417C10.8552 13.4042 10.8435 13.3871 10.8372 13.3677C10.8309 13.3483 10.8303 13.3274 10.8354 13.3076L11.3838 9.94681C11.3947 9.93144 11.4005 9.91299 11.4005 9.89406C11.4005 9.87513 11.3947 9.85669 11.3838 9.84131L8.89363 7.53546C8.87828 7.52608 8.86558 7.51283 8.85677 7.49698C8.84795 7.48114 8.84332 7.46324 8.84332 7.44504C8.84332 7.42683 8.84795 7.40893 8.85677 7.39309C8.86558 7.37724 8.87828 7.36399 8.89363 7.35461L12.3325 6.78192C12.346 6.78985 12.3613 6.79403 12.377 6.79403C12.3926 6.79403 12.4079 6.78985 12.4214 6.78192L13.9037 3.76773C13.9147 3.75217 13.9291 3.7395 13.9459 3.73075C13.9626 3.72201 13.9812 3.71745 14 3.71745C14.0189 3.71745 14.0374 3.72201 14.0542 3.73075C14.0709 3.7395 14.0854 3.75217 14.0964 3.76773L15.5787 6.78192C15.5899 6.78853 15.6027 6.79201 15.6157 6.79201C15.6287 6.79201 15.6415 6.78853 15.6528 6.78192L18.9879 7.27926C19.0032 7.28863 19.0159 7.30189 19.0247 7.31773C19.0335 7.33358 19.0382 7.35148 19.0382 7.36968C19.0382 7.38789 19.0335 7.40578 19.0247 7.42163C19.0159 7.43747 19.0032 7.45073 18.9879 7.46011L16.6311 9.84131C16.6223 9.87591 16.6223 9.91221 16.6311 9.94681L17.2091 13.3076C17.2153 13.3325 17.2135 13.3587 17.204 13.3825C17.1945 13.4063 17.1778 13.4264 17.1563 13.4398C17.1348 13.4533 17.1097 13.4594 17.0845 13.4573C17.0594 13.4552 17.0355 13.445 17.0164 13.4282H17.0609Z" fill="#FF7A00"/>
                        </svg>
                        <div class="menu-text f-b s-19 ml-5" style="color: #FF7A00;">{{ lotteryPrice }}$</div>
                    </div>
                    <button @click="buyTicket()" class="menu-text f-m s-14 menu-btn mt-10" style="padding: 15px 50px; background: linear-gradient(90deg, #FF5C00 0%, #FFC700 100%); border-radius: 10px; box-shadow: none;">Купить билет</button>
                </div>
            </div>
            <div v-else style="margin-top: 50px;">
                <div class="menu-text s-20 text-center" style="color: #1D324A;">Билеты продаются с 10:00 до 24:00</div>
            </div>
        </div>
    `,data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: rgb(244, 244, 248);",on:!0,playerBuy:!1,timeout:0,lotteryPrice:0,lotterySum:0},computed:{timeToLottery(){const e=Math.floor(this.timeout/60);return 0<e?`${e} час ${this.timeout-60*e} минут`:`${this.timeout-60*e} минут`}},methods:{async onOpen(e){try{const e=await serverAPI.getAsync("server_lottery_info");this.on=e[0],this.on&&(this.playerBuy=e[1],this.timeout=e[2],this.lotteryPrice=e[3],this.lotterySum=e[4])}catch(e){serverAPI.notifyError(`${e}`)}},async buyTicket(){try{await serverAPI.getAsync("server_lottery_buy"),this.lotterySum+=this.lotteryPrice}catch(e){serverAPI.notifyError(`${e}`)}}}}),raceApp=createSmartphoneApp("raceApp",{template:`
        <div class="d-flex column app-content">
            <div class="app-race-bg" :class="{'shadow': currentRace}"></div>
            <div v-if="!currentRace" style="z-index: 2;">
                <div class="d-flex column" style="padding: 50px 10px 20px 10px;">
                    <div class="yk-text w-5 s-36 text-center">STREET</div>
                    <div class="yk-text w-5 s-36 text-center">RACER</div>
                </div>
                <div class="d-flex column app-scroll-shadow" style="padding: 0px 8px; height: 250px">
                    <div v-for="race of raceList" class="app-race-raceItem-block list-mt-5">
                        <div>
                            <svg v-if="race.isCanJoin" @click="joinToRace(race)" width="32" height="32" viewBox="0 0 32 32" style="border-radius: 33px;">
                                <path d="M24.6316 0H7.36842C3.29895 0 0 3.29895 0 7.36842V24.6316C0 28.701 3.29895 32 7.36842 32H24.6316C28.701 32 32 28.701 32 24.6316V7.36842C32 3.29895 28.701 0 24.6316 0Z" fill="#AAFF1F"/>
                                <path d="M32.0004 23.3681V24.5344C31.9921 26.5132 31.2017 28.4085 29.8017 29.8069C28.4017 31.2054 26.5055 31.9936 24.5267 31.9997H23.5246L15.2762 23.7512C15.0676 23.63 14.8942 23.4566 14.773 23.2481L8.70146 17.1765C8.4346 17.016 8.22755 16.7726 8.11188 16.4835C7.99621 16.1944 7.97827 15.8754 8.0608 15.5751C8.14332 15.2748 8.32177 15.0098 8.56895 14.8204C8.81613 14.6309 9.11848 14.5276 9.42988 14.526H14.2867C14.3241 14.5263 14.3612 14.5191 14.3958 14.5049C14.4304 14.4907 14.4619 14.4698 14.4883 14.4434C14.5148 14.4169 14.5357 14.3855 14.5499 14.3509C14.5641 14.3163 14.5712 14.2792 14.5709 14.2418V9.37862C14.5717 9.09104 14.6593 8.81039 14.8223 8.57345C14.9853 8.33652 15.2161 8.15434 15.4844 8.0508C15.7527 7.94726 16.046 7.92718 16.3259 7.99319C16.6058 8.0592 16.8593 8.20822 17.053 8.42073L23.4846 14.8544L23.4383 14.8207C23.4678 14.8439 23.4994 14.8691 23.5267 14.8944C23.5621 14.9234 23.5945 14.9559 23.6236 14.9912L32.0004 23.3681Z" fill="url(#sRaceAppJoinGrad)"/>
                                <path d="M24 15.9492C24 16.1369 23.963 16.3228 23.8912 16.4963C23.8193 16.6697 23.7141 16.8273 23.5813 16.96C23.4486 17.0927 23.291 17.198 23.1176 17.2699C22.9441 17.3417 22.7582 17.3787 22.5705 17.3787H17.7137C17.6763 17.3784 17.6392 17.3856 17.6046 17.3998C17.57 17.4139 17.5385 17.4349 17.5121 17.4613C17.4856 17.4878 17.4647 17.5192 17.4505 17.5538C17.4364 17.5884 17.4292 17.6255 17.4295 17.6629V22.5261C17.4295 22.9052 17.2789 23.2688 17.0108 23.5369C16.7427 23.8049 16.3791 23.9555 16 23.9555C15.6209 23.9555 15.2573 23.8049 14.9892 23.5369C14.7211 23.2688 14.5705 22.9052 14.5705 22.5261V17.6629C14.5708 17.6255 14.5636 17.5884 14.5495 17.5538C14.5353 17.5192 14.5144 17.4878 14.4879 17.4613C14.4615 17.4349 14.43 17.4139 14.3954 17.3998C14.3608 17.3856 14.3237 17.3784 14.2863 17.3787H9.42947C9.24175 17.3787 9.05587 17.3417 8.88244 17.2699C8.70901 17.198 8.55142 17.0927 8.41868 16.96C8.28594 16.8273 8.18065 16.6697 8.10881 16.4963C8.03697 16.3228 8 16.1369 8 15.9492C8 15.7615 8.03697 15.5756 8.10881 15.4022C8.18065 15.2288 8.28594 15.0712 8.41868 14.9384C8.55142 14.8057 8.70901 14.7004 8.88244 14.6286C9.05587 14.5567 9.24175 14.5197 9.42947 14.5197H14.2863C14.3237 14.52 14.3608 14.5129 14.3954 14.4987C14.43 14.4845 14.4615 14.4636 14.4879 14.4371C14.5144 14.4107 14.5353 14.3792 14.5495 14.3446C14.5636 14.31 14.5708 14.2729 14.5705 14.2355V9.37869C14.5705 8.99957 14.7211 8.63598 14.9892 8.3679C15.2573 8.09982 15.6209 7.94922 16 7.94922C16.3791 7.94922 16.7427 8.09982 17.0108 8.3679C17.2789 8.63598 17.4295 8.99957 17.4295 9.37869V14.2355C17.4283 14.2735 17.4349 14.3112 17.4487 14.3466C17.4625 14.3819 17.4833 14.4141 17.5098 14.4412C17.5363 14.4684 17.5681 14.4899 17.6031 14.5044C17.6381 14.519 17.6757 14.5264 17.7137 14.5261H22.5705C22.9486 14.5261 23.3112 14.6758 23.5791 14.9425C23.847 15.2092 23.9983 15.5712 24 15.9492Z" fill="white"/>
                                <defs>
                                <linearGradient id="sRaceAppJoinGrad" x1="11.7036" y1="11.6523" x2="29.8299" y2="29.7786" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#00A410"/>
                                <stop offset="1" stop-color="#00FF47" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <svg v-else @click="setGPSToPoint(race.points[0].x, race.points[0].y)" width="32" height="32" viewBox="0 0 25 35">
                                <path d="M12.4995 0C5.71711 0 0.199219 5.51789 0.199219 12.3002C0.199219 14.7636 0.921311 17.1306 2.28978 19.1621L12.4995 35L22.7091 19.1621C24.0776 17.1306 24.7997 14.7636 24.7997 12.3002C24.7997 5.51789 19.2818 0 12.4995 0V0ZM12.4995 18.4504C9.10828 18.4504 6.34934 15.6914 6.34934 12.3002C6.34934 8.90907 9.10828 6.15012 12.4995 6.15012C15.8906 6.15012 18.6496 8.90907 18.6496 12.3002C18.6496 15.6914 15.8906 18.4504 12.4995 18.4504Z" fill="#C3FF1A"/>
                                <path d="M12.498 0V6.15012C15.8892 6.15012 18.6482 8.90907 18.6482 12.3002C18.6482 15.6914 15.8892 18.4504 12.498 18.4504V35L22.7077 19.1621C24.0762 17.1306 24.7983 14.7636 24.7983 12.3002C24.7983 5.51789 19.2804 0 12.498 0V0Z" fill="#63E100"/>
                            </svg>                  
                        </div>
                        <div class="flex-1 ml-10">
                            <div class="yk-text w-5 s-17" style="color: #242424;"><marquee behavior="alternate">{{ race.startStreet }} - {{ race.endStreet }}</marquee></div>
                            <div class="d-flex center-align mt-5">
                                <div class="yk-text s-14" style="color: #393939;">{{ race.bet }} <span class="yk-text w-6" style="color: #393939;">$</span></div>
                                <div class="d-flex center-align yk-text s-14 ml-10" style="color: #393939;">
                                    <svg width="15" height="15" viewBox="0 0 15 15" class="mr-5">
                                        <path d="M7.5 6.05469C8.90768 6.05469 10.0488 4.91354 10.0488 3.50586C10.0488 2.09818 8.90768 0.957031 7.5 0.957031C6.09232 0.957031 4.95117 2.09818 4.95117 3.50586C4.95117 4.91354 6.09232 6.05469 7.5 6.05469Z" fill="#393939"/>
                                        <path d="M12.6562 6.05469C13.5462 6.05469 14.2676 5.33327 14.2676 4.44336C14.2676 3.55345 13.5462 2.83203 12.6562 2.83203C11.7663 2.83203 11.0449 3.55345 11.0449 4.44336C11.0449 5.33327 11.7663 6.05469 12.6562 6.05469Z" fill="#393939"/>
                                        <path d="M2.34375 6.05469C3.23366 6.05469 3.95508 5.33327 3.95508 4.44336C3.95508 3.55345 3.23366 2.83203 2.34375 2.83203C1.45384 2.83203 0.732422 3.55345 0.732422 4.44336C0.732422 5.33327 1.45384 6.05469 2.34375 6.05469Z" fill="#393939"/>
                                        <path d="M3.93135 7.50272C3.29707 6.98305 2.72265 7.05184 1.98926 7.05184C0.892383 7.05184 0 7.93895 0 9.02909V12.2286C0 12.702 0.386426 13.087 0.861621 13.087C2.91316 13.087 2.66602 13.1241 2.66602 12.9985C2.66602 10.7314 2.39748 9.06873 3.93135 7.50272V7.50272Z" fill="#393939"/>
                                        <path d="M8.19996 7.06191C6.91899 6.95507 5.80556 7.06314 4.84518 7.85586C3.23804 9.14316 3.54733 10.8765 3.54733 12.9969C3.54733 13.5579 4.00377 14.0228 4.5733 14.0228C10.7573 14.0228 11.0035 14.2223 11.3702 13.4103C11.4904 13.1356 11.4575 13.2229 11.4575 10.5957C11.4575 8.509 9.65066 7.06191 8.19996 7.06191V7.06191Z" fill="#393939"/>
                                        <path d="M13.0104 7.04982C12.273 7.04982 11.7018 6.98173 11.0684 7.5007C12.5908 9.05507 12.3337 10.6043 12.3337 12.9965C12.3337 13.1229 12.1285 13.085 14.1073 13.085C14.5995 13.085 14.9997 12.6862 14.9997 12.1961V9.02706C14.9997 7.93693 14.1073 7.04982 13.0104 7.04982Z" fill="#393939"/>
                                    </svg>
                                    {{ race.players.length }}/{{ race.playerCount }}
                                </div>
                                <div @click="showMap(race)" class="d-flex center-align yk-text s-14 app-race-btn-ico ml-auto">
                                    <svg width="15" height="15" viewBox="0 0 15 15" class="mr-5">
                                        <g>
                                        <path d="M11.7188 0C9.90938 0 8.4375 1.47188 8.4375 3.28125C8.4375 4.965 11.07 7.94719 11.37 8.28187C11.4591 8.38031 11.5856 8.4375 11.7188 8.4375C11.8519 8.4375 11.9784 8.38031 12.0675 8.28187C12.3675 7.94719 15 4.965 15 3.28125C15 1.47188 13.5281 0 11.7188 0ZM11.7188 4.6875C10.9425 4.6875 10.3125 4.0575 10.3125 3.28125C10.3125 2.505 10.9425 1.875 11.7188 1.875C12.495 1.875 13.125 2.505 13.125 3.28125C13.125 4.0575 12.495 4.6875 11.7188 4.6875Z"/>
                                        <path d="M0.294375 5.50688C0.117188 5.57813 0 5.75063 0 5.94281V14.5312C0 14.6869 0.0778125 14.8322 0.20625 14.9194C0.285 14.9719 0.375938 15 0.46875 15C0.527813 15 0.586875 14.9887 0.643125 14.9662L4.6875 13.3481V3.75L0.294375 5.50688Z"/>
                                        <path d="M12.765 8.90953C12.4988 9.20578 12.1172 9.37641 11.7188 9.37641C11.3203 9.37641 10.9387 9.20578 10.6725 8.90953C10.5769 8.80359 10.4541 8.66391 10.3125 8.49797V15.0014L14.7056 13.2445C14.8837 13.1742 15 13.0008 15 12.8095V5.91797C14.2322 7.21828 13.2056 8.41828 12.765 8.90953Z"/>
                                        <path d="M7.79531 4.61813L5.625 3.75V13.3481L9.375 14.8481V7.32C8.77594 6.51281 8.15062 5.54063 7.79531 4.61813Z"/>
                                        </g>
                                    </svg>
                                    {{ race.dist }} км
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="startSelectPoints" class="yk-btn green" style="position: absolute; bottom: 20px; left: 50%; width: 95%; transform: translateX(-50%); background: linear-gradient(86.37deg, #BDFF00 -10.92%, #319A00 109.12%); border-radius: 35px; font-size: 19px;">Создать</button>
            </div>
            <div v-if="currentRace" style="z-index: 2;">
                <div class="d-flex column" style="padding: 20px 10px 10px 10px;">
                    <div class="yk-text w-5 s-26 text-center">Участники {{ currentRace.players.length }} / {{ currentRace.playerCount }}</div>
                </div>
                <div style="padding: 0px 10px">
                    <div v-for="player of currentRace.players" class="app-race-raceItem-player-block list-mt-10">
                        <div class="yk-text s-17">{{ player.name }}</div>
                        <div v-if="currentRace.isOwner && !player.owner" class="ml-auto">
                            <svg @click="kickPlayer(player)" width="20" height="20" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4142 10.0002L15.7072 5.70725C16.0982 5.31625 16.0982 4.68425 15.7072 4.29325C15.3162 3.90225 14.6842 3.90225 14.2933 4.29325L10.0002 8.58625L5.70725 4.29325C5.31625 3.90225 4.68425 3.90225 4.29325 4.29325C3.90225 4.68425 3.90225 5.31625 4.29325 5.70725L8.58625 10.0002L4.29325 14.2933C3.90225 14.6842 3.90225 15.3162 4.29325 15.7072C4.48825 15.9022 4.74425 16.0002 5.00025 16.0002C5.25625 16.0002 5.51225 15.9022 5.70725 15.7072L10.0002 11.4142L14.2933 15.7072C14.4882 15.9022 14.7443 16.0002 15.0002 16.0002C15.2562 16.0002 15.5122 15.9022 15.7072 15.7072C16.0982 15.3162 16.0982 14.6842 15.7072 14.2933L11.4142 10.0002Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div @click="showMap(currentRace)" class="yk-text s-16 text-center app-race-btn-ico" style="position: absolute; bottom: 100px; left: 50%; width: 95%; transform: translateX(-50%);">
                    <svg width="21" height="21" viewBox="0 0 15 15" class="mr-5">
                        <g>
                        <path d="M11.7188 0C9.90938 0 8.4375 1.47188 8.4375 3.28125C8.4375 4.965 11.07 7.94719 11.37 8.28187C11.4591 8.38031 11.5856 8.4375 11.7188 8.4375C11.8519 8.4375 11.9784 8.38031 12.0675 8.28187C12.3675 7.94719 15 4.965 15 3.28125C15 1.47188 13.5281 0 11.7188 0ZM11.7188 4.6875C10.9425 4.6875 10.3125 4.0575 10.3125 3.28125C10.3125 2.505 10.9425 1.875 11.7188 1.875C12.495 1.875 13.125 2.505 13.125 3.28125C13.125 4.0575 12.495 4.6875 11.7188 4.6875Z"/>
                        <path d="M0.294375 5.50688C0.117188 5.57813 0 5.75063 0 5.94281V14.5312C0 14.6869 0.0778125 14.8322 0.20625 14.9194C0.285 14.9719 0.375938 15 0.46875 15C0.527813 15 0.586875 14.9887 0.643125 14.9662L4.6875 13.3481V3.75L0.294375 5.50688Z"/>
                        <path d="M12.765 8.90953C12.4988 9.20578 12.1172 9.37641 11.7188 9.37641C11.3203 9.37641 10.9387 9.20578 10.6725 8.90953C10.5769 8.80359 10.4541 8.66391 10.3125 8.49797V15.0014L14.7056 13.2445C14.8837 13.1742 15 13.0008 15 12.8095V5.91797C14.2322 7.21828 13.2056 8.41828 12.765 8.90953Z"/>
                        <path d="M7.79531 4.61813L5.625 3.75V13.3481L9.375 14.8481V7.32C8.77594 6.51281 8.15062 5.54063 7.79531 4.61813Z"/>
                        </g>
                    </svg>    
                    Посмотреть маршрут
                </div>
                <button @click="startRace" :disabled="!currentRace.isOwner" class="yk-btn green" style="position: absolute; bottom: 50px; left: 50%; width: 95%; transform: translateX(-50%); background: linear-gradient(86.37deg, #BDFF00 -10.92%, #319A00 109.12%); border-radius: 35px; font-size: 19px;">Старт</button>
                <div @click="cancelRace" class="yk-text s-15 text-center" style="position: absolute; bottom: 20px; left: 50%; width: 95%; transform: translateX(-50%);">Отменить</div>
            </div>
        </div>
    `,data:{whiteApp:!1,enableBottom:!0,appContentClass:"",appContentStyle:"background: #15191F;",raceList:[],currentRace:null,openPointsMenu:!1,points:[]},computed:{},methods:{async onOpen(e){this.raceList=[],this.currentRace=null;try{const e=await serverAPI.getAsync("server_raceApp_get");if(e.current)return this.openRace((await this.convertFromClient(e.current)));for(const t of e.list)this.raceList.push((await this.convertFromClient(t)));const t=setInterval(async()=>smartphoneAppVue.isOpen&&smartphoneAppVue.currentApp===raceApp?(mp.trigger("client_raceApp_blips",JSON.stringify(this.raceList.map(e=>[e.points[0].x,e.points[0].y,e.bet]))),this.currentRace?-1===this.currentRace.players.findIndex(e=>e.owner)?(this.currentRace=null,setTimeout(()=>{this.onOpen()},0),void clearInterval(t)):void mp.trigger("client_raceApp_checkPlayers",this.currentRace.points[0].x,this.currentRace.points[0].y,JSON.stringify(this.currentRace.players.map(e=>e.id))):void 0):void clearInterval(t),500)}catch(e){serverAPI.notifyError("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"),serverAPI.notifyError(""+e)}},onSmartphoneOpen(){this.onOpen()},openRace(e){this.currentRace=e},async startRace(){try{await serverAPI.getApiAsync("client_raceApp_checkStart",this.currentRace.players),await serverAPI.getAsync("server_raceApp_start")}catch(e){serverAPI.notifyError(e)}},async cancelRace(){try{if(this.currentRace.isOwner)return await serverAPI.getAsync("server_raceApp_cancel"),void(this.currentRace=null);await serverAPI.getAsync("server_raceApp_left",this.currentRace.id),this.currentRace=null}catch(e){serverAPI.notifyError(e)}},async kickPlayer(e){try{await serverAPI.getAsync("server_raceApp_kick",e.id),this.currentRace.players=this.currentRace.players.filter(t=>t!==e)}catch(e){serverAPI.notifyError(e)}},async joinToRace(e){try{const t=await serverAPI.getAsync("server_raceApp_join",e.id);this.openRace((await this.convertFromClient(t)))}catch(e){serverAPI.notifyError(e)}},setGPSToPoint(e,t){mp.trigger("clientFunc_setWaypoint",e,t)},async convertFromClient(e){var t=Math.sqrt,n=Math.pow;const a={id:e[0],ownerId:e[1],isOwner:e[1]===myCharacterId,isCanJoin:!1,bet:e[2],playerCount:e[3],players:e[4].split("|").map(t=>({id:parseInt(t.split("%")[0]),name:t.split("%")[1],owner:e[1]===parseInt(t.split("%")[0])})),points:e[5].split("|").map(e=>({x:parseFloat(e.split("%")[0]),y:parseFloat(e.split("%")[1])})),startStreet:"",endStreet:"",dist:"0.0"};let o=0;for(let r=0;r<a.points.length-1;r++){const e=a.points[r],s=a.points[r+1];o+=t(n(e.x-s.x,2)+n(e.y-s.y,2))}a.dist=(o/1e3).toFixed(1);const r=await serverAPI.callApiAsync("player.getPosition");return 25>t(n(r.x-a.points[0].x,2)+n(r.y-a.points[0].y,2))&&(a.isCanJoin=!0),a.startStreet=await serverAPI.callApiAsync("location.getStreetName",a.points[0].x,a.points[0].y,0),a.endStreet=await serverAPI.callApiAsync("location.getStreetName",a.points[a.points.length-1].x,a.points[a.points.length-1].y,0),a},async startSelectPoints(){var e=Math.max,t=Math.min,n=Math.sqrt,a=Math.pow;if(this.openPointsMenu)return;this.openPointsMenu=!0;const o=$(`
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999999999;">
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 600px; width: 600px;">
                    <div id="raceAppMapWrapper" style="height: 600px; width: 600px; overflow: hidden;">
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;" class="yk-text w-5 s-30 text-center">Загрузка...</div>
                        <div id="raceAppMapContainer" style="position: relative; top: 0px; left: 0px; pointer-events: none;">
                            <img src="package://Menu/UI/Images/gta_map_8k.png" draggable="false" style="position: absolute; top: 0; left: 0; height: 8192px; width: 8192px; pointer-events: none;">
                        </div>
                    </div>
                    <div class="d-flex column" style="position: absolute; top: 0px; left: calc(100% + 10px); height: 100%;">
                        <div class="flex-1" style="background: rgba(11, 11, 12, 0.67); border-radius: 3px; padding: 15px; width: 175px">
                            <div class="d-flex center-align list-mt-10">
                                <svg width="31" height="31" viewBox="0 0 23 31" style="flex-shrink: 0;">
                                    <path d="M4.41797 9.79856L10.8767 3.33984C7.58953 3.93902 5.01714 6.51141 4.41797 9.79856Z" fill="white"/>
                                    <path d="M4.2832 22.9821C4.28817 27.4078 7.87472 30.9943 12.3004 30.9994H14.4383C18.864 30.9943 22.4505 27.4078 22.4556 22.9821V14.9648H15.4314C15.1914 15.9078 14.3423 16.5678 13.3694 16.5678C12.3964 16.5678 11.5473 15.9078 11.3073 14.9648H4.2832V22.9821Z" fill="white"/>
                                    <path d="M11.2331 11.9805L9.31641 13.8971H11.2331V11.9805Z" fill="white"/>
                                    <path d="M12.3008 10.1549V14.4308C12.3008 15.0212 12.7794 15.4997 13.3697 15.4997C13.9601 15.4997 14.4387 15.0212 14.4387 14.4308V10.1549C14.4387 9.5645 13.9601 9.08594 13.3697 9.08594C12.7794 9.08594 12.3008 9.5645 12.3008 10.1549Z" fill="white"/>
                                    <path d="M4.2832 13.6754L12.8349 5.12364V3.20703H12.5217L4.2832 11.4455V13.6754Z" fill="white"/>
                                    <path d="M15.5097 10.1553V13.8967H22.458V11.2243C22.453 6.79855 18.8665 3.21206 14.4408 3.20703H13.9062V8.09329C14.8473 8.33626 15.5061 9.18343 15.5097 10.1553V10.1553Z" fill="white"/>
                                    <path d="M11.2323 10.1549C11.2359 9.183 11.8946 8.33583 12.8357 8.09285V6.63477L5.57422 13.8963H7.8041L11.2323 10.4681V10.1549Z" fill="white"/>
                                    <path d="M5.88802 3.20693C6.18319 3.20693 6.42253 2.96764 6.42253 2.67242V0.534508C6.42253 0.239342 6.18325 0 5.88802 0C5.59286 0 5.35352 0.239281 5.35352 0.534508V2.67242C5.35358 2.96758 5.59286 3.20693 5.88802 3.20693V3.20693Z" fill="white"/>
                                    <path d="M3.37248 3.58336C3.58222 3.78589 3.91559 3.78305 4.12175 3.57682C4.32791 3.37066 4.33082 3.03729 4.12829 2.82756L2.61625 1.31552C2.48208 1.17657 2.2833 1.12086 2.09645 1.16978C1.90961 1.21871 1.76363 1.36462 1.71471 1.55153C1.66578 1.73844 1.72149 1.93715 1.86044 2.07133L3.37248 3.58336Z" fill="white"/>
                                    <path d="M1.07748 5.87956H3.21539C3.51055 5.87956 3.74989 5.64028 3.74989 5.34505C3.74989 5.04989 3.51061 4.81055 3.21539 4.81055H1.07748C0.782311 4.81055 0.542969 5.04983 0.542969 5.34505C0.542969 5.64028 0.782311 5.87956 1.07748 5.87956Z" fill="white"/>
                                </svg>
                                <div class="yk-text s-14 ml-10">Создать точку</div>
                            </div>
                            <div class="d-flex center-align list-mt-10">
                                <svg width="31" height="31" viewBox="0 0 31 29" style="flex-shrink: 0;">
                                    <path d="M0.249756 13.9765L2.79926 11.9519C2.98865 11.814 3.24138 11.8001 3.44475 11.9163C3.64813 12.0326 3.76432 12.2575 3.74156 12.4907V16.5399C3.76462 16.7732 3.64849 16.9982 3.44506 17.1147C3.24162 17.2311 2.98872 17.2172 2.79926 17.0792L0.249756 15.0546C0.0913047 14.9203 0 14.7232 0 14.5156C0 14.3079 0.0913047 14.1108 0.249756 13.9765V13.9765Z" fill="white"/>
                                    <path d="M30.7505 13.9765L28.201 11.9519C28.0117 11.814 27.7589 11.8001 27.5556 11.9163C27.3522 12.0326 27.236 12.2575 27.2588 12.4907V16.5399C27.2357 16.7732 27.3518 16.9982 27.5553 17.1147C27.7587 17.2311 28.0116 17.2172 28.201 17.0792L30.7505 15.0546C30.9089 14.9203 31.0003 14.7232 31.0003 14.5155C31.0002 14.3079 30.9089 14.1108 30.7505 13.9765V13.9765Z" fill="white"/>
                                    <path d="M6.41406 11.0718L14.9658 2.52017V0.603516H14.6526L6.41406 8.84194V11.0718Z" fill="white"/>
                                    <path d="M13.3631 7.55132C13.3668 6.57942 14.0255 5.73225 14.9666 5.48928V4.03125L7.70508 11.2928H9.93496L13.3631 7.86459V7.55132Z" fill="white"/>
                                    <path d="M24.5869 11.2931V8.62071C24.5818 4.19501 20.9954 0.608541 16.5697 0.603516H16.0352V5.48973C16.9762 5.7327 17.635 6.57987 17.6386 7.55176V11.2931H24.5869Z" fill="white"/>
                                    <path d="M13.362 9.37695L11.4453 11.2936H13.362V9.37695Z" fill="white"/>
                                    <path d="M6.41406 20.3805C6.41909 24.8062 10.0056 28.3926 14.4313 28.3977H16.5691C20.9948 28.3926 24.5813 24.8062 24.5863 20.3805V12.3633H17.5622C17.3222 13.3062 16.4732 13.9662 15.5002 13.9662C14.5272 13.9662 13.6782 13.3062 13.4382 12.3633H6.41406V20.3805Z" fill="white"/>
                                    <path d="M15.4986 12.8962C16.089 12.8962 16.5676 12.4177 16.5676 11.8273V7.55138C16.5676 6.96098 16.089 6.48242 15.4986 6.48242C14.9083 6.48242 14.4297 6.96098 14.4297 7.55138V11.8273C14.4297 12.4177 14.9083 12.8962 15.4986 12.8962V12.8962Z" fill="white"/>
                                    <path d="M13.0056 0.738281C9.71844 1.33745 7.14605 3.90985 6.54688 7.197L13.0056 0.738281Z" fill="white"/>
                                </svg>
                                <div class="yk-text s-14 ml-10">Удерживать для перемещения точки</div>                        
                            </div>
                            <div class="d-flex center-align list-mt-10">
                                <svg width="31" height="31" viewBox="0 0 23 31" style="flex-shrink: 0;">
                                    <path d="M11.7672 10.156V10.4692L16.5134 5.72247C16.1508 5.33867 15.7514 4.99137 15.321 4.68555L11.2402 8.76635C11.5778 9.15082 11.765 9.6444 11.7672 10.156Z" fill="white"/>
                                    <path d="M11.7656 11.98V13.8967H12.0788L18.0116 7.96395C17.7882 7.46631 17.5146 6.99277 17.1949 6.55078L11.7656 11.98Z" fill="white"/>
                                    <path d="M15.8216 13.8963L18.7046 11.0133C18.6878 10.3574 18.5902 9.70615 18.4139 9.07422L13.5918 13.8963H15.8216Z" fill="white"/>
                                    <path d="M18.7142 13.8958V12.5137L17.332 13.8958H18.7142Z" fill="white"/>
                                    <path d="M10.6986 3.20703H10.1641V4.58919L11.5051 3.24766C11.24 3.22144 10.9712 3.20703 10.6986 3.20703V3.20703Z" fill="white"/>
                                    <path d="M14.3833 4.10986C13.8713 3.84502 13.3321 3.63656 12.775 3.48828L10.1641 6.09924V8.09178C10.2255 8.10783 10.2854 8.12708 10.3447 8.14791L14.3833 4.10986Z" fill="white"/>
                                    <path d="M7.49127 10.1553C7.4949 9.18337 8.15365 8.3362 9.09473 8.09323V3.20703H8.56022C4.13449 3.21206 0.547994 6.79855 0.542969 11.2243V13.8967H7.49127V10.1553Z" fill="white"/>
                                    <path d="M8.56055 10.1549V14.4308C8.56055 15.0212 9.03911 15.4997 9.6295 15.4997C10.2199 15.4997 10.6985 15.0212 10.6985 14.4308V10.1549C10.6985 9.5645 10.2199 9.08594 9.6295 9.08594C9.03911 9.08594 8.56055 9.5645 8.56055 10.1549Z" fill="white"/>
                                    <path d="M8.56022 30.9994H10.6981C15.1239 30.9943 18.7104 27.4078 18.7154 22.9821V14.9648H11.6912C11.4512 15.9078 10.6022 16.5678 9.62918 16.5678C8.65619 16.5678 7.80714 15.9078 7.56713 14.9648H0.542969V22.9821C0.547994 27.4078 4.13449 30.9943 8.56022 30.9994V30.9994Z" fill="white"/>
                                    <path d="M17.1126 3.20693C17.4078 3.20693 17.6471 2.96764 17.6471 2.67242V0.534508C17.6471 0.239342 17.4079 0 17.1126 0C16.8174 0 16.5781 0.239281 16.5781 0.534508V2.67242C16.5781 2.96758 16.8174 3.20693 17.1126 3.20693V3.20693Z" fill="white"/>
                                    <path d="M19.2493 3.73994C19.391 3.73994 19.527 3.68357 19.6272 3.58336L21.1387 2.07133C21.2776 1.93715 21.3333 1.73838 21.2844 1.55153C21.2355 1.36468 21.0896 1.21871 20.9026 1.16978C20.7158 1.12086 20.5171 1.17657 20.3828 1.31552L18.8714 2.82756C18.7185 2.98044 18.6728 3.21027 18.7555 3.40996C18.8383 3.6097 19.0331 3.73988 19.2493 3.73994V3.73994Z" fill="white"/>
                                    <path d="M19.25 5.34505C19.25 5.64022 19.4893 5.87956 19.7845 5.87956H21.9224C22.2176 5.87956 22.4569 5.64028 22.4569 5.34505C22.4569 5.04989 22.2176 4.81055 21.9224 4.81055H19.7845C19.4893 4.81055 19.25 5.04989 19.25 5.34505Z" fill="white"/>
                                </svg>
                                <div class="yk-text s-14 ml-10">Удалить точку</div>                         
                            </div>
                        </div>
                        <div class="d-flex column mt-10" style="background: #181B21; border-radius: 3px; padding: 25px 14px;">
                            <div class="yk-text w-5 s-14 text-center">Кол-во участников:</div>
                            <div class="yk-input-block mt-10" style="background: #04060E; border-radius: 3px;">
                                <input id="raceAppInputCount" value="2" class="yk-input center" style="width: 136px">
                            </div>
                            <div class="yk-text w-5 s-14 mt-10 text-center">Ставка:</div>
                            <div class="yk-input-block mt-10" style="background: #04060E; border-radius: 3px;">
                                <input id="raceAppInputBet" value="0" class="yk-input center" style="width: 136px">
                            </div>
                        </div>
                        <button id="raceAppBtnEnd" class="yk-btn green s-15 mt-10">Подтвердить</button>
                        <button id="raceAppBtnCancel" class="yk-btn purple s-15 mt-5">Отмена</button>
                    </div>
                    </div>
                </div>
            `);$("body").append(o);const r=document.getElementById("raceAppMapWrapper"),s=document.getElementById("raceAppMapContainer");let p=0,i=0,d=!1,c=0,l=0,m=0,u=0,g=0,h=null,f=[];r.addEventListener("contextmenu",e=>e.preventDefault()),r.addEventListener("click",async e=>{if(u+750<E()||7<=g)return;const[t,o]=[e.offsetX+p,e.offsetY+i],[r,s]=M(t,o);for(const t of f)if(75>n(a(t.x-r,2)+a(t.y-s,2)))return;const d=f[f.length-1];return 400<n(a(d.x-r,2)+a(d.y-s,2))?serverAPI.notifyError("\u041D\u043E\u0432\u0430\u044F \u0442\u043E\u0447\u043A\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0434\u0430\u043B\u0435\u043A\u043E \u043E\u0442 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0439"):x(r,s)?serverAPI.notifyError("\u0422\u0443\u0442 \u043D\u0435\u043B\u044C\u0437\u044F \u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443"):void A(r,s)}),r.addEventListener("mousedown",e=>{const[t,o]=[e.offsetX+p,e.offsetY+i],[r,s]=M(t,o);let c=null;for(const t of f)if(0!==t.index&&25>n(a(t.x-r,2)+a(t.y-s,2))){if(2===e.button)return t.elementPoint.remove(),f=f.filter(e=>e!==t),void v();c=t;break}d=!0,m=0,g=0,u=E(),h=c});const y=()=>{d=!1};document.addEventListener("mouseup",y),r.addEventListener("mousemove",n=>{if(d){if(0==++m%15&&(c=n.offsetX,l=n.offsetY),7>++g)return;if(h)return void h.moveByMapCoord(n.offsetX+p,n.offsetY+i);p=e(0,t(p-.15*(n.offsetX-c),7592)),i=e(0,t(i-.15*(n.offsetY-l),7592)),C()}else c=n.offsetX,l=n.offsetY});const b=setInterval(()=>{smartphoneAppVue.isOpen&&smartphoneAppVue.currentApp===raceApp||_()},500),C=()=>{s.style.left=-p+"px",s.style.top=-i+"px"},_=()=>{this.openPointsMenu=!1,document.removeEventListener("mouseup",y),o.remove(),clearInterval(b)},A=(e,t)=>{const n={index:f.length,x:e,y:t,elementPoint:document.createElement("div"),moveByMapCoord(e,t){const[a,o]=M(e,t);n.elementPoint.style.left=e+"px",n.elementPoint.style.top=t+"px",n.x=a,n.y=o}};f.push(n);const[a,o]=w(e,t);n.elementPoint.style.left=a+"px",n.elementPoint.style.top=o+"px",s.insertAdjacentElement("beforeend",n.elementPoint),v()},v=()=>{let e=0;for(const t of f)t.index=e++,t.elementPoint.style.position="absolute",t.elementPoint.style.width="23px",t.elementPoint.style.height="23px",t.elementPoint.style.display="flex",t.elementPoint.style.justifyContent="center",t.elementPoint.style.alignItems="center",t.elementPoint.style.borderRadius="50%",t.elementPoint.style.transform="translate(-50%, -50%)",0===t.index||t.index===f.length-1?(t.elementPoint.style.background="#BDFF00",t.elementPoint.style.boxShadow="0px 4px 4px #494949",t.elementPoint.innerHTML=`<div class="yk-text w-6 s-12" style="position: absolute; top: 110%; left: 50%; transform: translateX(-50%); color: #BDFF00; text-shadow: 0px 0px 4px #000000;">${0===t.index?"START":"FINISH"}</div>`):(t.elementPoint.style.background="#FFFFFF",t.elementPoint.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",t.elementPoint.style.color="#1C2544",t.elementPoint.style.textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",t.elementPoint.className="yk-text w-5 s-14",t.elementPoint.innerHTML=t.index)},w=(e,t)=>[3756+e/1.51821820693,5528-t/1.51821820693],M=(e,t)=>[1.51821820693*(e-3756),-1.51821820693*(t-5528)],x=(e,t)=>{const o=[[-2122.65,3030.52,440],[1705.495,2584.215,180]];for(const r of o)if(n(a(e-r[0],2)+a(t-r[1],2))<r[2])return!0;return!1},E=()=>new Date().getTime();document.getElementById("raceAppBtnEnd").onclick=async()=>{try{for(const e of f)if(x(e.x,e.y))return serverAPI.notifyError("\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u0445\u043E\u0434\u044F\u0442\u0441\u044F \u043D\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F\u0445");const e=parseInt(document.getElementById("raceAppInputBet").value),t=parseInt(document.getElementById("raceAppInputCount").value),n=await serverAPI.getAsync("server_raceApp_create",[t,e,f.filter(e=>0!==e.index).map(e=>[e.x.toFixed(2),e.y.toFixed(2)])]);this.openRace((await this.convertFromClient(n))),_()}catch(e){serverAPI.notifyError(""+e)}},document.getElementById("raceAppBtnCancel").onclick=async()=>{_()};const S=await serverAPI.callApiAsync("player.getPosition");((e,t)=>{const[n,a]=w(e,t);p=n-300,i=a-300,C()})(S.x,S.y),A(S.x,S.y)},showMap(e){var t=Math.max,n=Math.min;if(this.openPointsMenu)return;this.openPointsMenu=!0;const a=$(`
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 999999999;">
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height: 600px; width: 600px;">
                    <div id="raceAppMapWrapper" style="height: 600px; width: 600px; overflow: hidden;">
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;" class="yk-text w-5 s-30 text-center">Загрузка...</div>
                        <div id="raceAppMapContainer" style="position: relative; top: 0px; left: 0px; pointer-events: none;">
                            <img src="package://Menu/UI/Images/gta_map_8k.png" draggable="false" style="position: absolute; top: 0; left: 0; height: 8192px; width: 8192px; pointer-events: none;">
                        </div>
                    </div>
                    <div class="d-flex column" style="position: absolute; top: 0px; left: calc(100% + 10px); height: 100%;">
                        <button id="raceAppBtnCancel" class="yk-btn purple s-15 mt-5">Отмена</button>
                    </div>
                    </div>
                </div>
            `);$("body").append(a);const o=document.getElementById("raceAppMapWrapper"),r=document.getElementById("raceAppMapContainer");let s=0,p=0,i=!1,d=0,c=0,l=0,m=[];o.addEventListener("contextmenu",e=>e.preventDefault()),o.addEventListener("mousedown",e=>{const[t,n]=[e.offsetX+s,e.offsetY+p],[a,o]=_(t,n);i=!0,l=0,mouseMove=0});const u=()=>{i=!1};document.addEventListener("mouseup",u),o.addEventListener("mousemove",e=>{i?(0==++l%15&&(d=e.offsetX,c=e.offsetY),s=t(0,n(s-.15*(e.offsetX-d),7592)),p=t(0,n(p-.15*(e.offsetY-c),7592)),h()):(d=e.offsetX,c=e.offsetY)});const g=setInterval(()=>{smartphoneAppVue.isOpen&&smartphoneAppVue.currentApp===raceApp||y()},500),h=()=>{r.style.left=-s+"px",r.style.top=-p+"px"},y=()=>{this.openPointsMenu=!1,document.removeEventListener("mouseup",u),a.remove(),clearInterval(g)},f=(e,t)=>{const n={index:m.length,x:e,y:t,elementPoint:document.createElement("div"),moveByMapCoord(e,t){const[a,o]=_(e,t);n.elementPoint.style.left=e+"px",n.elementPoint.style.top=t+"px",n.x=a,n.y=o}};m.push(n);const[a,o]=C(e,t);n.elementPoint.style.left=a+"px",n.elementPoint.style.top=o+"px",r.insertAdjacentElement("beforeend",n.elementPoint),b()},b=()=>{let e=0;for(const t of m)t.index=e++,t.elementPoint.style.position="absolute",t.elementPoint.style.width="23px",t.elementPoint.style.height="23px",t.elementPoint.style.display="flex",t.elementPoint.style.justifyContent="center",t.elementPoint.style.alignItems="center",t.elementPoint.style.borderRadius="50%",t.elementPoint.style.transform="translate(-50%, -50%)",0===t.index||t.index===m.length-1?(t.elementPoint.style.background="#BDFF00",t.elementPoint.style.boxShadow="0px 4px 4px #494949",t.elementPoint.innerHTML=`<div class="yk-text w-6 s-12" style="position: absolute; top: 110%; left: 50%; transform: translateX(-50%); color: #BDFF00; text-shadow: 0px 0px 4px #000000;">${0===t.index?"START":"FINISH"}</div>`):(t.elementPoint.style.background="#FFFFFF",t.elementPoint.style.boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",t.elementPoint.style.color="#1C2544",t.elementPoint.style.textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)",t.elementPoint.className="yk-text w-5 s-14",t.elementPoint.innerHTML=t.index)},C=(e,t)=>[3756+e/1.51821820693,5528-t/1.51821820693],_=(e,t)=>[1.51821820693*(e-3756),-1.51821820693*(t-5528)];document.getElementById("raceAppBtnCancel").onclick=async()=>{y()},((e,t)=>{const[n,a]=C(e,t);s=n-300,p=a-300,h()})(e.points[0].x,e.points[0].y);for(const t of e.points)f(t.x,t.y)}}});function smartphone_raceApp_sync_cancel(){smartphoneAppVue.currentApp!==raceApp||(smartphoneAppVue.app().currentRace=null)}function smartphone_raceApp_sync_join(e,t){smartphoneAppVue.currentApp!==raceApp||smartphoneAppVue.app().currentRace&&smartphoneAppVue.app().currentRace.players.push({id:e,name:t,owner:!1})}function smartphone_raceApp_sync_left(e){if(smartphoneAppVue.currentApp===raceApp&&smartphoneAppVue.app().currentRace){if(e===myCharacterId)return void(smartphoneAppVue.app().currentRace=null);smartphoneAppVue.app().currentRace.players=smartphoneAppVue.app().currentRace.players.filter(t=>t.id!==e)}}const neonApp=createSmartphoneApp("neonApp",{template:`
        <div class="d-flex column app-content">
            <div class="d-flex center mt-20">
                <svg width="218" height="51" viewBox="0 0 218 51">
                <path d="M40.3594 51H30.1641V25.5703H40.3594C40.3594 21.5078 38.9141 18.0312 36.0234 15.1406C33.1328 12.25 29.6953 10.8047 25.7109 10.8047C21.6484 10.8047 18.1719 12.25 15.2812 15.1406C12.3906 18.0312 10.9453 21.5078 10.9453 25.5703V50.5312H0.75V25.5703C0.75 18.5391 3.17188 12.6406 8.01562 7.875C12.8594 3.03125 18.7578 0.609375 25.7109 0.609375C32.6641 0.609375 38.5625 3.07031 43.4062 7.99219C48.25 12.8359 50.6719 18.6953 50.6719 25.5703H40.3594V51Z" fill="url(#neonApp_grad)"/>
                <path d="M81.6094 39.6328V51H80.9062C73.9531 51 68.0156 48.5391 63.0938 43.6172C58.1719 38.6953 55.7109 32.7578 55.7109 25.8047C55.7109 18.8516 58.1719 12.9141 63.0938 7.99219C68.0156 3.07031 73.9531 0.609375 80.9062 0.609375C87.8594 0.609375 93.7969 3.07031 98.7188 7.99219C103.641 12.9141 106.102 18.8516 106.102 25.8047C106.102 27.2891 105.906 29.0078 105.516 30.9609L105.398 31.5469H68.3672C69.3828 33.9688 71.0625 35.9219 73.4062 37.4062C75.75 38.8906 78.25 39.6328 80.9062 39.6328H81.6094ZM97.6641 8.92969C93.0547 4.24219 87.4688 1.89844 80.9062 1.89844C74.3438 1.89844 68.7188 4.24219 64.0312 8.92969C59.3438 13.6172 57 19.2422 57 25.8047C57 32.2109 59.2656 37.7188 63.7969 42.3281C68.3281 46.9375 73.7969 49.3594 80.2031 49.5938V40.9219C77.3125 40.8438 74.5781 39.8672 72 37.9922C69.5 36.1172 67.7422 33.8125 66.7266 31.0781L66.375 30.1406H104.344C104.578 28.7344 104.695 27.2891 104.695 25.8047C104.695 19.1641 102.352 13.5391 97.6641 8.92969ZM95.0859 20.5312L95.4375 21.4688H66.375L66.7266 20.5312C67.7422 17.5625 69.5391 15.1797 72.1172 13.3828C74.7734 11.5859 77.7031 10.6875 80.9062 10.6875C84.1094 10.6875 87 11.5859 89.5781 13.3828C92.2344 15.1797 94.0703 17.5625 95.0859 20.5312ZM68.3672 20.0625H93.4453C92.4297 17.6406 90.75 15.6875 88.4062 14.2031C86.0625 12.7188 83.5625 11.9766 80.9062 11.9766C78.25 11.9766 75.75 12.7188 73.4062 14.2031C71.0625 15.6875 69.3828 17.6406 68.3672 20.0625Z" fill="url(#neonApp_grad)"/>
                <path d="M136.102 0.609375C143.055 0.609375 148.992 3.07031 153.914 7.99219C158.836 12.9141 161.297 18.8516 161.297 25.8047C161.297 32.7578 158.836 38.6953 153.914 43.6172C148.992 48.5391 143.055 51 136.102 51C129.148 51 123.211 48.5391 118.289 43.6172C113.367 38.6172 110.906 32.6797 110.906 25.8047C110.906 18.9297 113.367 13.0312 118.289 8.10938C123.289 3.10938 129.227 0.609375 136.102 0.609375ZM136.102 49.7109C142.742 49.7109 148.367 47.3672 152.977 42.6797C157.664 37.9922 160.008 32.3672 160.008 25.8047C160.008 19.1641 157.664 13.5391 152.977 8.92969C148.289 4.24219 142.664 1.89844 136.102 1.89844C129.539 1.89844 123.914 4.24219 119.227 8.92969C114.617 13.6172 112.312 19.2422 112.312 25.8047C112.312 32.3672 114.656 37.9922 119.344 42.6797C124.031 47.3672 129.617 49.7109 136.102 49.7109ZM136.102 10.6875C140.164 10.6875 143.758 12.1328 146.883 15.0234C149.773 18.1484 151.219 21.7422 151.219 25.8047C151.219 30.0234 149.734 33.6172 146.766 36.5859C143.875 39.4766 140.32 40.9219 136.102 40.9219C131.727 40.9219 128.172 39.4375 125.438 36.4688C122.469 33.7344 120.984 30.1797 120.984 25.8047C120.984 21.5859 122.469 18.0312 125.438 15.1406C128.406 12.1719 131.961 10.6875 136.102 10.6875ZM136.102 39.6328C139.852 39.6328 143.094 38.2656 145.828 35.5312C148.562 32.7969 149.93 29.5547 149.93 25.8047C149.93 24.0078 149.578 22.2109 148.875 20.4141C147.234 17.1328 144.773 14.6719 141.492 13.0312C139.773 12.3281 137.977 11.9766 136.102 11.9766C132.352 11.9766 129.109 13.3438 126.375 16.0781C123.719 18.8125 122.391 22.0547 122.391 25.8047C122.391 28.5391 123.133 31.0781 124.617 33.4219C126.18 35.7656 128.25 37.4453 130.828 38.4609C132.391 39.2422 134.148 39.6328 136.102 39.6328Z" fill="url(#neonApp_grad)"/>
                <path d="M206.883 51H196.688V25.5703H206.883C206.883 21.5078 205.438 18.0312 202.547 15.1406C199.656 12.25 196.219 10.8047 192.234 10.8047C188.172 10.8047 184.695 12.25 181.805 15.1406C178.914 18.0312 177.469 21.5078 177.469 25.5703V50.5312H167.273V25.5703C167.273 18.5391 169.695 12.6406 174.539 7.875C179.383 3.03125 185.281 0.609375 192.234 0.609375C199.188 0.609375 205.086 3.07031 209.93 7.99219C214.773 12.8359 217.195 18.6953 217.195 25.5703H206.883V51Z" fill="url(#neonApp_grad)"/>
                <defs>
                <linearGradient id="neonApp_grad" x1="121" y1="-7" x2="121" y2="108" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C110FF"/>
                <stop offset="1" stop-color="#0066FF"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div v-if="!currentVehicle" class="app-scroll-shadow mt-10 p-10" style="max-height: 330px;">
                <div v-for="v in vehicleList" class="list-mt-10">
                    <div @click="openVehicle(v)" style="display: flex; align-items: center; flex-shrink: 0; background: linear-gradient(90deg, #0400B0 0%, #C110FF 100%); border-radius: 7px;">
                        <div style="width: 53px; height: 53px; border-radius: 7px; background-position: center; background-size: 106px 53px;" :style="{'background-image': 'url(https://gta5rp.com/?act=proxy_car_photo&model=' + v.model + ')'}"></div>
                        <div class="ml-5">
                            <div class="yk-text w-5 s-15">{{ v.modelName }}</div>
                            <div class="yk-text w-5 s-13">{{ v.number }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="p-10">
                <div @click="currentVehicle = null" class="yk-text w-5 s-15" style="color: #4200FF;">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                        <path d="M2.66496 6.46824L8.00511 11.8083C8.12862 11.9319 8.2935 12 8.4693 12C8.6451 12 8.80998 11.9319 8.93349 11.8083L9.32676 11.4151C9.58266 11.1589 9.58266 10.7425 9.32676 10.4867L4.8425 6.00249L9.33173 1.51325C9.45524 1.38964 9.52344 1.22487 9.52344 1.04916C9.52344 0.873259 9.45524 0.708479 9.33173 0.584773L8.93847 0.191703C8.81486 0.0680942 8.65008 -2.93737e-06 8.47428 -2.95274e-06C8.29847 -2.96811e-06 8.1336 0.0680941 8.01008 0.191703L2.66496 5.53664C2.54115 5.66063 2.47315 5.82619 2.47354 6.00219C2.47315 6.17887 2.54115 6.34434 2.66496 6.46824Z" fill="#4200FF"/>
                    </svg>
                    Вернуться
                </div>
                <div class="yk-text w-5 s-15 mt-20" style="color: #353535">Цвет фар</div>
                <div class="mt-5" style="letter-spacing: 0px;">
                    <div @click="lightColor = 255; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #E2E2E2; border-radius: 50%;"></div>
                    <div @click="lightColor = 0; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #FFFFFF; border-radius: 50%;"></div>
                    <div @click="lightColor = 1; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #0057FF; border-radius: 50%;"></div>
                    <div @click="lightColor = 2; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #00A8FF; border-radius: 50%;"></div>
                    <div @click="lightColor = 3; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #17EBAB; border-radius: 50%;"></div>
                    <div @click="lightColor = 4; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #A5F200; border-radius: 50%;"></div>
                    <div @click="lightColor = 5; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #EEF14F; border-radius: 50%;"></div>
                </div>
                <div class="mt-5" style="letter-spacing: 0px;">
                    <div @click="lightColor = 6; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #FFD600; border-radius: 50%;"></div>
                    <div @click="lightColor = 7; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #FF8A00; border-radius: 50%;"></div>
                    <div @click="lightColor = 8; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #E90000; border-radius: 50%;"></div>
                    <div @click="lightColor = 9; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #FF8CCA; border-radius: 50%;"></div>
                    <div @click="lightColor = 10; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #FF1FC0; border-radius: 50%;"></div>
                    <div @click="lightColor = 11; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #9713FF; border-radius: 50%;"></div>
                    <div @click="lightColor = 12; changeData();" style="display: inline-block; width: 29px; height: 29px; background: #5200FF; border-radius: 50%;"></div>
                </div>
                <div class="yk-text w-5 s-15 mt-20" style="color: #353535">Цвет неона</div>
                <div class="app-neon-color-picker">
                    <chrome-picker style="width: 225px;" v-model="neon" @input="changeData();" />
                </div>
            </div>
        </div>
    `,components:{"chrome-picker":VueColor.Chrome},data:{whiteApp:!0,enableBottom:!0,appContentClass:"",appContentStyle:"background: #F4F4F8;",vehicleList:[],currentVehicle:null,neon:{rgba:{r:0,g:0,b:0,a:1}},lightColor:-1},computed:{},methods:{async onOpen(e){try{const e=await serverAPI.getAsync("server_smartphone_neon_list");this.vehicleList=e.map(e=>({sId:e[0],gId:e[1],model:e[2],modelName:e[3],number:e[4],neon:e[5]}))}catch(e){serverAPI.notifyError("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445"),serverAPI.notifyError(""+e)}},openVehicle(e){this.neon.rgba.r=e.neon[0],this.neon.rgba.g=e.neon[1],this.neon.rgba.b=e.neon[2],this.lightColor=-1,this.currentVehicle=e,mp.trigger("clent_smartphone_neon_set",this.currentVehicle.sId,this.currentVehicle.gId,!0,this.neon.rgba.r,this.neon.rgba.g,this.neon.rgba.b,this.lightColor)},changeData(){mp.trigger("clent_smartphone_neon_set",this.currentVehicle.sId,this.currentVehicle.gId,!1,this.neon.rgba.r,this.neon.rgba.g,this.neon.rgba.b,this.lightColor)}}}),mainScreenApp=createSmartphoneApp("mainScreenApp",{template:`
        <div class="d-flex column app-content">
            <div class="d-flex space-around mt-20">
                <div class="app-ms-appBlock">
                    <img @click="openNewsApp" src="Smartphone/app_news_ico.svg" class="app-ms-appIco">
                    <div class="app-ms-appText">Реклама</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openMySIMApp" src="Smartphone/app_mysim_ico.svg" class="app-ms-appIco">
                    <div class="app-ms-appText">My SIM</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openGovNewsApp" src="Smartphone/app_govnews_ico.png" class="app-ms-appIco">
                    <div class="app-ms-appText">Гос. Новости</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openBankApp" src="Smartphone/app_bank_ico.svg" class="app-ms-appIco">
                    <div class="app-ms-appText">Банк</div>
                </div>
            </div>
            <div class="d-flex space-around mt-20">
                <div class="app-ms-appBlock">
                    <img @click="openGPSApp" src="Smartphone/app_gps_ico.svg" class="app-ms-appIco">
                    <div class="app-ms-appText">GPS</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openCarApp" src="Smartphone/app_car_ico.svg" class="app-ms-appIco">
                    <div class="app-ms-appText">Авто</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openRadioApp" src="Smartphone/app_radio_ico.png" class="app-ms-appIco">
                    <div class="app-ms-appText">Радио</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openMpApp" src="Smartphone/app_mp_ico.png" class="app-ms-appIco">
                    <div class="app-ms-appText">Арена</div>
                </div>
            </div>
            <div class="d-flex space-around mt-20">
                <div class="app-ms-appBlock">
                    <img @click="openContracts" src="Smartphone/app_contracts.png" class="app-ms-appIco">
                    <div class="app-ms-appText">Контракты</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openLottery" src="Smartphone/app_lottery.png" class="app-ms-appIco">
                    <div class="app-ms-appText">Лотерея</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openRaceApp" src="Smartphone/app_race_ico.png" class="app-ms-appIco">
                    <div class="app-ms-appText">Гонки</div>
                </div>
                <div class="app-ms-appBlock">
                    <img @click="openNeonApp" src="Smartphone/app_neon_ico.png" class="app-ms-appIco">
                    <div class="app-ms-appText">Neon</div>
                </div>
            </div>
            <div class="mt-auto" style="margin-bottom: 5px; padding: 5px 10px;">
                <div class="d-flex space-around flex-1" style="border-radius: 15px; padding: 5px 0px; background: rgba(150, 150, 150, 0.4);">
                    <div>
                        <img @click="openPhoneApp" src="Smartphone/app_phone_ico.png" class="app-ms-appIco">
                    </div>
                    <div>
                        <img @click="openSmsApp" src="Smartphone/app_sms_ico.png" class="app-ms-appIco">
                    </div>
                    <div>
                        <img @click="createScreen" src="Smartphone/app_camera_ico.svg" class="app-ms-appIco">
                    </div>
                    <div>
                        <img @click="openBrowser" src="Smartphone/app_browser_ico.png" class="app-ms-appIco">
                    </div>
                </div>
            </div>
        </div>
    `,data:{whiteApp:!1,enableBottom:!1,appContentClass:"app-ms-bg"},methods:{openPhoneApp(){smartphoneAppVue.openApp(phoneApp,null)},openSmsApp(){smartphoneAppVue.openApp(phoneAppMessanger,null)},openNewsApp(){smartphoneAppVue.openApp(newsApp,null)},openMySIMApp(){smartphoneAppVue.openApp(mySimApp,null)},async openMpApp(){mp.trigger("__call_remote_event","server_mazeBankArena_open",(await rpc.callClient("client_mazeBankArena_isFirstOpen"))),smartphoneAppVue.taskClose()},openBankApp(){smartphoneAppVue.openApp(bankApp,null)},openGPSApp(){smartphoneAppVue.openApp(gpsApp,null)},openCarApp(){smartphoneAppVue.openApp(carApp,null)},openRadioApp(){smartphoneAppVue.openApp(radioApp,null)},openGovNewsApp(){smartphoneAppVue.openApp(govNewsApp,null)},openContracts(){smartphoneAppVue.openApp(familyContractApp,null)},openLottery(){smartphoneAppVue.openApp(lotteryApp,null)},openRaceApp(){smartphoneAppVue.openApp(raceApp,null)},openNeonApp(){smartphoneAppVue.openApp(neonApp,null)},createScreen(){smartphoneAppVue.isOpen=!1,mp.trigger("client_smartphone_cursor",!1),mp.trigger("__client_smartphone_camera")},openBrowser(){rpc.triggerClient("client_rpBrowser_open"),smartphoneAppVue.taskClose()}}});function smartphone_cameraApp_end(e){smartphoneAppVue.isOpen=!0,mp.trigger("client_smartphone_cursor",!0),e&&UI_smartphoneNotify("app_camera_ico.svg","\u0413\u043E\u0442\u043E\u0432\u043E","\u0424\u043E\u0442\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E \u0432 RageMP/screenshots/gta5rp")}const smartphoneAppVue=new Vue({el:"#smartphoneApp",data:{loaded:!1,serverHour:0,serverMin:0,isOpen:!1,silentMode:!1,app_whiteApp:!1,app_enableTopbar:!0,app_topbarBackground:"transparent",app_enableBottom:!0,app_appContentClass:"",app_appContentStyle:"",currentApp:mainScreenApp},computed:{serverTime(){return`${10>this.serverHour?"0"+this.serverHour:this.serverHour}:${10>this.serverMin?"0"+this.serverMin:this.serverMin}`}},methods:{taskOpen(){mp.trigger("client_smartphone_taskOpen")},open(){this.isOpen=!0,mainHud.smartphoneOpen=!0,serverAPI.setGlobalValueAsync("isSmartphoneOpen",!0),mp.trigger("client_smartphone_cursor",!0,!1),this.$nextTick(()=>{this.$nextTick(()=>{this.$nextTick(()=>{const e=this.$refs.currentApp;e.onSmartphoneOpen&&e.onSmartphoneOpen()})})})},taskClose(){serverAPI.triggerRemote("server_smartphone_taskClose")},close(){this.isOpen=!1,mainHud.smartphoneOpen=!1,serverAPI.setGlobalValueAsync("isSmartphoneOpen",!1),mp.trigger("client_smartphone_cursor",!1)},toggleSilentMode(){this.silentMode=!this.silentMode,serverAPI.triggerRemote("server_smartphone_silentMode",this.silentMode)},openAppAndPhone(e,t){this.isOpen||this.taskOpen(),this.openApp(e,t)},openApp(e,t){this.currentApp=e,this.$nextTick(async()=>{const e=this.$refs.currentApp;this.app_whiteApp=e.whiteApp,this.app_enableTopbar=e.enableTopbar,this.app_topbarBackground=e.topbarBackground,this.app_enableBottom=e.enableBottom,this.app_appContentClass=e.appContentClass,this.app_appContentStyle=e.appContentStyle,e.onOpen&&(await e.onOpen(t))})},openMainScreen(){this.openApp(mainScreenApp,null)},app(){return this.$refs.currentApp},phoneClick(e){this.isOpen&&(150>e.offsetY?(this.clientFinger(1),this.clientFinger(5)):(this.clientFinger(2),this.clientFinger(5)))},clientFinger(e){mp.trigger("__client_smartphone_finger",e)}},mounted(){this.openApp(mainScreenApp,null),this.loaded=!0}});async function ___closeSmarphone(){return(await serverAPI.isChatOpenAsync())||null!=document.activeElement&&"input"===document.activeElement.tagName.toLocaleLowerCase()?void 0:smartphoneAppVue.currentApp==mainScreenApp?smartphoneAppVue.taskClose():void(smartphoneAppVue.currentApp==phoneAppCall||smartphoneAppVue.openApp(mainScreenApp))}let smartphoneNotifyTimer=null;function UI_smartphoneNotify(e,t,n){5<=$(".smartphone-notify-item").length&&$(".smartphone-notify-item").last().remove(),$("#iphoneNotifyBlock").prepend(`
        <div class="smartphone-notify-item">
            <img src="Smartphone/${e}" style="height: 45px;">
            <div class="smartphone-notify-data ml-10">
                <div class="smartphone-notify-header">${t}</div>
                <div class="smartphone-notify-text">${n}</div>
            </div>
        </div>
    `),$(".smartphone-notify-item").first().hide().slideDown(),clearInterval(smartphoneNotifyTimer),smartphoneNotifyTimer=setInterval(function(){$(".smartphone-notify-item").is(":visible")?$(".smartphone-notify-item").last().slideUp(function(){$(this).remove()}):clearInterval(smartphoneNotifyTimer)},9e3)}function createSmartphoneApp(e,{template:t,data:n,methods:a,computed:o,components:r}){return Vue.component(e,{template:t,data(){return{whiteApp:!1,enableTopbar:!0,topbarBackground:"transparent",enableBottom:!0,appContentClass:"",appContentStyle:"",...n}},components:r==null?{}:r,computed:o,methods:{...a}})}var httpUrl="",httpPlayerId=-1,httpPlayerToken="";function smartphone_setHttpServerData(e,t,n){httpUrl=e,httpPlayerId=t,httpPlayerToken=n}function sendHttpAsync(e,t){return t?(t._i=httpPlayerId,t._t=httpPlayerToken):t={_i:httpPlayerId,_t:httpPlayerToken},new Promise((n,a)=>{$.ajax({url:`${httpUrl}/${e}`,dataType:"json",type:"post",contentType:"application/json",data:JSON.stringify(t),success:function(e){try{return e.s?n(e.d):a(e.d)}catch(e){a("\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")}},error:function(){a("\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 2")}})})}function sendHttpGetAsync(e){return new Promise((t,n)=>{$.ajax({url:e,dataType:"json",type:"get",contentType:"application/json",success:function(e){try{return t(e)}catch(e){n("\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")}},error:function(){n("\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 2")}})})}