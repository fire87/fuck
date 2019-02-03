/*!CK:3430789311!*//*1427693780,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Oyh2f"]); }

__d("ModuleErrorLogger",["Bootloader","ErrorUtils","ModuleDependencies","BanzaiScuba"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(n){if(!n||!n.length)return 0;return n.reduce(function(o,p){return o+p;})/n.length;}function l(n){if(!n)return [];var o=[];for(var p in n)o.push(n[p]);return o;}var m={init:function(){h.addListener(function(n){if(n.name!=='ModuleError')return;var o=i.getNotLoadedModules(),p=Object.keys(o.loading),q=l(g.getLoadingUrls()),r=l(g.getLoadedUrlTimes()),s={};o.missing.forEach(function(v){s[v]=1;});var t={};p.forEach(function(v){t[v]=1;});var u=new j('module_errors',null,{addAsnFields:true,addPredictedGeographyFields:true,addBrowserFields:true,addMobileDeviceFields:true,addPageFields:true,addUserFields:true});u.addInteger('missing_count',o.missing.length).addInteger('loading_count',p.length).addInteger('error_url_count',g.getErrorUrls().length).addTagset('missing_modules',s).addTagset('loading_modules',t).addInteger('mean_url_loading_time',Math.floor(k(q))).addInteger('mean_url_loaded_time',Math.floor(k(r))).post();},true);}};e.exports=m;},null);
__d("clearImmediatePolyfill",["ImmediateImplementation"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=a.clearImmediate||b('ImmediateImplementation').clearImmediate;},null);
__d("clearImmediate",["clearImmediatePolyfill"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();e.exports=g.bind(a);},null);
__d("clearInterval",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=a.clearInterval.bind(a);},null);
__d("clearTimeout",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=a.clearTimeout.bind(a);},null);
__d("setInterval",["TimerStorage","setIntervalAcrossTransitions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();e.exports=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=h.apply(a,i);g.push(g.INTERVAL,l);return l;};},null);
__d("setTimeout",["TimerStorage","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();e.exports=function(){for(var i=[],j=0,k=arguments.length;j<k;j++)i.push(arguments[j]);var l=h.apply(a,i);g.push(g.TIMEOUT,l);return l;};},null);
__d("replaceNativeTimer",["clearInterval","clearTimeout","setInterval","setTimeout"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=false;function l(){if(!k){k=true;j.nativeBackup=a.setTimeout;h.nativeBackup=a.clearTimeout;i.nativeBackup=a.setInterval;g.nativeBackup=a.clearInterval;a.setTimeout=j;a.clearTimeout=h;a.setInterval=i;a.clearInterval=g;}}e.exports=l;},null);
__d("TimeSpentArray",["Banzai","pageID","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=2,k=j*32,l,m,n,o,p,q,r,s,t,u={},v;function w(){return {timeoutDelayMap:u,nextDelay:v,timeoutInSeconds:n};}function x(){if(l){var fa=Date.now();if(fa>p)r=Math.min(k,Math.ceil((fa/1000)-o));var ga=ca();if(ga)l(ga,v);}ba();}function y(){z();m=i(x,n*1000);}function z(){if(m){clearTimeout(m);m=null;}}function aa(fa){o=fa;p=o*1000;q=[1];for(var ga=1;ga<j;ga++)q.push(0);r=1;s+=1;t+=1;var ha=t.toString()+'_delay';v=u[ha];if(typeof v=='undefined')v=u.delay;var ia=t.toString()+'_timeout',ja=u[ia];if(typeof ja=='undefined')ja=u.timeout;ja=Math.min(ja,k);n=ja||k;y();}function ba(){z();q=null;}function ca(){if(!q)return null;return {tos_id:h,start_time:o,tos_array:q.slice(0),tos_len:r,tos_seq:t,tos_cum:s};}function da(fa){if(fa>=p&&(fa-p)<1000)return;ea(Math.floor(fa/1000));}function ea(fa){var ga=fa-o;if(ga<0||ga>=k)x();if(!q){aa(fa);}else{q[ga>>5]|=(1<<(ga&31));r=ga+1;s+=1;p=fa*1000;}}e.exports={init:function(fa,ga,ha){s=0;t=-1;l=fa;if(typeof ga=='object'&&ga!==null){u=ga;}else u={};if(!ha)ha=Date.now();aa(Math.floor(ha/1000));g.subscribe(g.SHUTDOWN,x);},update:function(fa){da(fa);},get:function(){return ca();},ship:function(){x();},reset:function(){ba();},testState:function(){return w();}};},null);
__d("TimeSpentImmediateActiveSecondsLogger",["Banzai","ImmediateActiveSecondsConfig","ScriptPath"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j='immediate_active_seconds',k={signal:true,retry:true},l=h.sampling_rate,m=h.ias_bucket,n=0;function o(s){if(l<=0)return false;var t=Math.floor(s/1000)%l;return t===m;}function p(s){if(s>=n&&s-n<1000)return;if(o(s)){var t={activity_time_ms:s,last_activity_time_ms:n,script_path:i.getTopViewEndpoint()};try{g.post(j,t,k);}catch(u){}}n=Math.floor(s/1000)*1000;}function q(event,s,t){if(u<0||v<0||u>v)return;var u=Math.floor(s/1000),v=Math.floor(t/1000);if(!r(u,v))return;var w={event:event,start_time_ms:s,end_time_ms:t};g.post(j,w,k);}function r(s,t){if(l<=0)return false;if(t-s>=l)return true;var u=s+(m-(s%l)+l)%l;return u<=t;}e.exports={maybeReportActiveSecond:p,maybeReportActiveInterval:q};},null);
__d("legacy:onload-action",["PageHooks"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();a._domreadyHook=g._domreadyHook;a._onloadHook=g._onloadHook;a.runHook=g.runHook;a.runHooks=g.runHooks;a.keep_window_set_as_loaded=g.keepWindowSetAsLoaded;},3);
__d("EagleEye",["Arbiter","CurrentUser","EagleEyeConfig","Env","ISB","PageEvents","TrackingConfig","WebStorage","SessionName"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){b.__markCompiled&&b.__markCompiled();var p=(window.location.protocol=='https:'&&document.cookie.match(/\bcsm=1/))?'; secure':'',q=o.TOKEN+o.getName()+'_',r=new Date(Date.now()+604800000).toGMTString(),s=window.location.hostname.replace(/^.*(facebook\..*)$/i,'$1'),t='; expires='+r+';path=/; domain='+s+p,u=0,v,w=i.sessionStorage&&n.getSessionStorage(),x=document.cookie.length,y=false,z=Date.now();function aa(ea){return q+(u++)+'='+encodeURIComponent(ea)+t;}function ba(){var ea=[],fa=false,ga=0,ha=0;this.isEmpty=function(){return !ea.length;};this.enqueue=function(ia,ja){if(ja){ea.unshift(ia);}else ea.push(ia);};this.dequeue=function(){ea.shift();};this.peek=function(){return ea[0];};this.clear=function(ia){x=Math.min(x,document.cookie.length);if(!y&&(new Date()-z>60000))y=true;var ja=!ia&&(document.cookie.search(o.TOKEN)>=0),ka=!!i.cookieHeaderLimit,la=i.cookieCountLimit||19,ma=i.cookieHeaderLimit||3950,na=la-5,oa=ma-1000;while(!this.isEmpty()){var pa=aa(this.peek());if(ka&&(pa.length>ma||(y&&pa.length+x>ma))){this.dequeue();continue;}if((ja||ka)&&((document.cookie.length+pa.length>ma)||(document.cookie.split(';').length>la)))break;document.cookie=pa;ja=true;this.dequeue();}var qa=Date.now();if(ia||!fa&&ja&&((ha>0)&&(Math.min(10*Math.pow(2,ha-1),60000)+ga<qa))&&g.query(l.NATIVE_ONLOAD)&&(!this.isEmpty()||(document.cookie.length>oa)||(document.cookie.split(';').length>na))){var ra=new Image(),sa=this,ta=m.domain||'';fa=true;ra.onload=function wa(){fa=false;ha=0;sa.clear();};ra.onerror=ra.onabort=function wa(){fa=false;ga=Date.now();ha++;};var ua=k.token?'&fb_isb='+k.token:'',va='&__user='+h.getID();ra.src=ta+'/ajax/nectar.php?asyncSignal='+(Math.floor(Math.random()*10000)+1)+ua+va+'&'+(!ia?'':'s=')+qa;}};}v=new ba();if(w){var ca=function(){var ea=0,fa=ea;function ga(){var ja=sessionStorage.getItem('_e_ids');if(ja){var ka=(ja+'').split(';');if(ka.length==2){ea=parseInt(ka[0],10);fa=parseInt(ka[1],10);}}}function ha(){var ja=ea+';'+fa;sessionStorage.setItem('_e_ids',ja);}function ia(ja){return '_e_'+((ja!==(void 0))?ja:ea++);}this.isEmpty=function(){return fa===ea;};this.enqueue=function(ja,ka){var la=ka?ia(--fa):ia();sessionStorage.setItem(la,ja);ha();};this.dequeue=function(){this.isEmpty();sessionStorage.removeItem(ia(fa));fa++;ha();};this.peek=function(){var ja=sessionStorage.getItem(ia(fa));return ja?(ja+''):ja;};this.clear=v.clear;ga();};v=new ca();}var da={log:function(ea,fa,ga){if(j.no_cookies)return;var ha=[o.getName(),Date.now(),ea].concat(fa);ha.push(ha.length);function ia(){var ja=JSON.stringify(ha);try{v.enqueue(ja,!!ga);v.clear(!!ga);}catch(ka){if(w&&(ka.code===1000)){v=new ba();w=false;ia();}}}ia();},getSessionID:function(){return o.getName();}};e.exports=da;a.EagleEye=da;},3);
__d("ClickRefUtils",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={get_intern_ref:function(h){if(!!h){var i={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var j=h;j&&j!=document.body;j=j.parentNode){if(!j.id||typeof j.id!=='string')continue;if(j.id.substr(0,8)=='pagelet_')return j.id.substr(8);if(j.id.substr(0,8)=='box_app_')return j.id;if(i[j.id])return j.id;}}return '-';},get_href:function(h){var i=(h.getAttribute&&(h.getAttribute('ajaxify')||h.getAttribute('data-endpoint'))||h.action||h.href||h.name);return typeof i==='string'?i:null;},should_report:function(h,i){if(i=='FORCE')return true;if(i=='INDIRECT')return false;return h&&(g.get_href(h)||(h.getAttribute&&h.getAttribute('data-ft')));}};e.exports=g;},null);
__d("setUECookie",["Env"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(i){if(!g.no_cookies)document.cookie="act="+encodeURIComponent(i)+"; path=/; domain="+window.location.hostname.replace(/^.*(\.facebook\..*)$/i,'$1');}e.exports=h;},null);
__d("ClickRefLogger",["Arbiter","Banzai","ClickRefUtils","Env","ScriptPath","SessionName","Vector","$","collectDataAttributes","copyProperties","ge","pageID","setUECookie"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){b.__markCompiled&&b.__markCompiled();var t={delay:0,retry:true};function u(y){if(!q('content'))return [0,0,0,0];var z=n('content'),aa=m.getEventPosition(y);return [aa.x,aa.y,z.offsetLeft,z.clientWidth];}function v(y,z,event,aa){var ba='r',ca=[0,0,0,0],da,ea;if(!!event){da=event.type;if(da=='click'&&q('content'))ca=u(event);var fa=0;event.ctrlKey&&(fa+=1);event.shiftKey&&(fa+=2);event.altKey&&(fa+=4);event.metaKey&&(fa+=8);if(fa)da+=fa;}if(!!z)ea=i.get_href(z);var ga=o(!!event?(event.target||event.srcElement):z,['ft','gt']);p(ga.ft,aa.ft||{});p(ga.gt,aa.gt||{});if(typeof(ga.ft.ei)==='string')delete ga.ft.ei;var ha=[y._ue_ts,y._ue_count,ea||'-',y._context,da||'-',i.get_intern_ref(z),ba,a.URI?a.URI.getRequestURI(true,true).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,ga].concat(ca).concat(r).concat(k.getScriptPath());return ha;}g.subscribe("ClickRefAction/new",function(y,z){if(i.should_report(z.node,z.mode)){var aa=v(z.cfa,z.node,z.event,z.extra_data);s(z.cfa.ue);var ba=[l.getName(),Date.now(),'act'];h.post('click_ref_logger',Array.prototype.concat(ba,aa),t);}});function w(y){function z(ha){var ia='';for(var ja=0;ja<ha.length;ja++)ia+=String.fromCharCode(1^ha.charCodeAt(ja));return ia;}function aa(ha,ia,ja,ka){var la=ia[ja];if(la&&ha&&la in ha)if(ja+1<ia.length){aa(ha[la],ia,ja+1,ka);}else{var ma=ha[la],na=function(){setTimeout(ka.bind(null,arguments));return ma.apply(this,arguments);};na.toString=ma.toString.bind(ma);Object.defineProperty(ha,la,{configurable:false,writable:true,value:na});}}var ba={},ca={},da=false;function ea(ha,ia){if(ca[ha])return;ca[ha]=ba[ha]=1;}var fa=y[z('jiri')];if(fa){var ga=[];z(fa).split(',').map(function(ha,ia){var ja=ha.substring(1).split(':'),ka;switch(ha.charAt(0)){case '1':ka=new RegExp('\\b('+ja[0]+')\\b','i');ga.push(function(la){var ma=ka.exec(Object.keys(window));if(ma)ea(ia,''+ma);});break;case '2':ka=new RegExp(ja[0]);aa(window,ja,2,function(la){var ma=la[ja[1]];if(typeof ma==='string'&&ka.test(ma))ea(ia,ha);});break;case '3':aa(window,ja,0,function(){for(var la=ga.length;la--;)ga[la]();var ma=Object.keys(ba);if(ma.length){ba={};setTimeout(h[z('qnru')].bind(h,z('islg'),{m:''+ma}),5000);}});break;case '4':da=true;break;}});}}try{w(j);}catch(x){}},null);
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;},null);
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","HTML","PageHooks","PageEvents","PageTransitions","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent_DEPRECATED","PHPQuerySerializer","TimerStorage","cancelAnimationFrame","clearImmediate","clearInterval","clearTimeout","goOrReplace","isEmpty","replaceNativeTimer"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){b.__markCompiled&&b.__markCompiled();var da=q.version,ea=q.sessionLength,fa=new RegExp(q.inactivePageRegex),ga=0,ha,ia='',ja={isActive:function(){return true;},isPageActive:function(ra){if(ra=='#')return false;ra=new s(ra);if(ra.getDomain()&&ra.getDomain()!=s().getDomain())return false;if(ra.getPath()=='/l.php'){var sa=ra.getQueryData().u;if(sa){sa=s(unescape(sa)).getDomain();if(sa&&sa!=s().getDomain())return false;}}var ta=ra.getPath(),ua=ra.getQueryData();if(!ba(ua))ta+='?'+u.serialize(ua);return !fa.test(ta);},getLoadCount:function(){return ga;}};function ka(ra){ra=ra||'Facebook';j.set(ra);if(t.ie()){ia=ra;if(!ha)ha=window.setInterval(function(){var sa=ia,ta=j.get();if(sa!=ta)j.set(sa);},5000,false);}}function la(ra){var sa=document.getElementsByTagName('link');for(var ta=0;ta<sa.length;++ta){if(sa[ta].rel!='alternate')continue;k.remove(sa[ta]);}if(ra.length){var ua=k.find(document,'head');ua&&k.appendContent(ua,l(ra[0]));}}for(var ma in g)if(g.hasOwnProperty(ma))oa[ma]=g[ma];var na=g===null?null:g.prototype;oa.prototype=Object.create(na);oa.prototype.constructor=oa;oa.__superConstructor__=g;function oa(ra){"use strict";var sa={version:da};this._isQuickling=true;g.call(this,ra,{quickling:sa});}oa.prototype._preBootloadFirstResponse=function(ra){"use strict";return true;};oa.prototype._fireDomContentCallback=function(){"use strict";this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');o.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);na._fireDomContentCallback.call(this);};oa.prototype._fireOnloadCallback=function(){"use strict";if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}na._fireOnloadCallback.call(this);};oa.prototype.isPageActive=function(ra){"use strict";return ja.isPageActive(ra);};oa.prototype._versionCheck=function(ra){"use strict";if(ra.version==da)return true;var sa=['quickling','ajaxpipe','ajaxpipe_token'];aa(window.location,s(ra.uri).removeQueryData(sa),true);return false;};oa.prototype._processFirstResponse=function(ra){"use strict";var sa=ra.getPayload();ka(sa.title);la(sa.syndication||[]);window.scrollTo(0,0);i.go(document.body,sa.body_class||'',o.getMostRecentURI(),ra.getRequest().getURI());h.inform('quickling/response');};oa.prototype.getSanitizedParameters=function(){"use strict";return ['quickling'];};function pa(){ga++;return ga>=ea;}function qa(ra){g.setCurrentRequest(null);if(pa())return false;ra=p.augmentURI(ra);if(!ja.isPageActive(ra))return false;v.popAll(v.TIMEOUT,z);v.popAll(v.INTERVAL,y);v.popAll(v.IMMEDIATE,x);v.popAll(v.ANIMATION_FRAME,w);window.ExitTime=Date.now();r.__removeHook(m.ONLOAD_HOOK);r.__removeHook(m.DOMREADY_HOOK);m.runHooks('onleavehooks');h.inform(n.AJAXPIPE_ONUNLOAD,true);new oa(ra).setCanvasId('content').send();return true;}ca();r.onAfterLoad(function ra(){o.registerHandler(qa,1);});e.exports=a.Quickling=ja;},null);
__d("StringTransformations",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={unicodeEscape:function(g){return g.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g,function(h){var i=h.charCodeAt().toString(16);return '\\u'+('0000'+i.toUpperCase()).slice(-4);});},unicodeUnescape:function(g){return g.replace(/(\\u[0-9A-Fa-f]{4})/g,function(h){return String.fromCharCode(parseInt(h.slice(2),16));});}};},null);
__d("UserActionHistory",["Arbiter","ClickRefUtils","ScriptPath","throttle","WebStorage"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l={click:1,submit:1},m=false,n={log:[],len:0},o=j.acrossTransitions(function(){try{m._ua_log=JSON.stringify(n);}catch(r){m=false;}},1000);function p(){var r=k.getSessionStorage();if(r){m=r;m._ua_log&&(n=JSON.parse(m._ua_log));}else m=false;n.log[n.len%10]={ts:Date.now(),path:'-',index:n.len,type:'init',iref:'-'};n.len++;g.subscribe("UserAction/new",function(s,t){var u=t.ua,v=t.node,event=t.event;if(!event||!(event.type in l))return;var w={path:i.getScriptPath(),type:event.type,ts:u._ue_ts,iref:h.get_intern_ref(v)||'-',index:n.len};n.log[n.len++%10]=w;m&&o();});}function q(){return n.log.sort(function(r,s){return (s.ts!=r.ts)?(s.ts-r.ts):(s.index-r.index);});}p();e.exports={getHistory:q};},null);
__d("Chromedome",["fbt"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();f.start=function(h){if(h.off||top!==window||!/(^|\.)facebook\.com$/.test(document.domain))return;var i=h.stop||g._("\u4f4f\u624b\uff01"),j=h.text||g._("\u9019\u662f\u5c08\u9580\u63d0\u4f9b\u7d66\u958b\u767c\u4eba\u54e1\u7684\u700f\u89bd\u5668\u529f\u80fd\u3002\u5982\u679c\u6709\u4eba\u544a\u8a34\u4f60\u5728\u6b64\u8655\u8907\u88fd\u8cbc\u4e0a\u67d0\u4e9b\u5167\u5bb9\u53ef\u4ee5\u4f7f\u7528\u67d0\u500b Facebook \u529f\u80fd\u6216\u300c\u99ed\u5165\u300d\u5176\u4ed6\u4eba\u7684\u5e33\u865f\uff0c\u90a3\u5176\u5be6\u662f\u4e0d\u5be6\u7684\u8a50\u9a19\u8a0a\u606f\uff0c\u4e26\u4e14\u6703\u8b93\u4e0d\u6cd5\u4e4b\u5f92\u6709\u6a5f\u6703\u5b58\u53d6\u4f60\u7684 Facebook \u5e33\u865f\u3002"),k=h.more||g._("\u82e5\u9700\u8981\u66f4\u591a\u8cc7\u8a0a\uff0c\u8acb\u53c3\u95b1{url}\u3002",[g.param("url",'https://www.facebook.com/selfxss')]);if((window.chrome||window.safari)&&!h.textonly){var l='font-family:helvetica; font-size:20px; ';[[i,h.c1||l+'font-size:50px; font-weight:bold; '+'color:red; -webkit-text-stroke:1px black;'],[j,h.c2||l],[k,h.c3||l],['','']].map(function(r){setTimeout(console.log.bind(console,'\n%c'+r[0],r[1]));});}else{var m=['',' .d8888b.  888                       888','d88P  Y88b 888                       888','Y88b.      888                       888',' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P','Y88b  d88P Y88b.  Y88..88P 888 d88P',' "Y8888P"   "Y888  "Y88P"  88888P"   888','                           888','                           888','                           888'],n=(''+j).match(/.{35}.+?\s+|.+$/g),o=Math.floor(Math.max(0,(m.length-n.length)/2));for(var p=0;p<m.length||p<n.length;p++){var q=m[p];m[p]=q+new Array(45-q.length).join(' ')+(n[p-o]||'');}console.log('\n\n\n'+m.join('\n')+'\n\n'+k+'\n');return;}};},null);
__d("NavigationClickPointHandler",["Event","ScriptPath","collectDataAttributes"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j=null;function k(m){var n=i(m,['ft'],['href','data-click']),o=n.normal.href;if(!o||o==='#')return false;var p=n.ft.tn;if(p){j={tn:p};return true;}var q=n.normal['data-click'];if(q){j={click:q};return true;}if(m.getAttribute){var r=m.getAttribute('class');if(r){j={"class":r};return true;}}j=null;return true;}function l(event){var m=event.target||event.srcElement;if(k(m))h.setClickPointInfo(j);}g.listen(document.documentElement,{click:l});e.exports=null;},null);
__d("WebStorageMonster",["Event","AsyncRequest","UserActivity","StringTransformations","WebStorage","arrayContains","isEmpty","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){b.__markCompiled&&b.__markCompiled();var o=300000,p=false;function q(v){var w={};for(var x in v){var y=v.getItem(x),z=j.unicodeEscape(x);if(typeof y==='string')w[z]=y.length;}return w;}function r(v){var w=k.getLocalStorage();if(!w||!v.keys)return;u._getLocalStorageKeys().forEach(function(x){if(l(v.keys,x))w.removeItem(x);});}function s(v){var w=k.getLocalStorage();if(w)u._getLocalStorageKeys().forEach(function(y){if(!v.some(function(z){return new RegExp(z).test(y);}))w.removeItem(y);});var x=k.getSessionStorage();if(x)x.clear();}function t(v){if(i.isActive(o)){n(t.bind(null,v),o);}else u.cleanNow(v);}var u={registerLogoutForm:function(v,w){g.listen(v,'submit',function(x){u.cleanOnLogout(w);});},schedule:function(v){if(p)return;p=true;t(v);},cleanNow:function(v){var w=Date.now(),x={},y=k.getLocalStorage();if(y)x.localStorage=q(y);var z=k.getSessionStorage();if(z)x.sessionStorage=q(z);var aa=!m(x),ba=Date.now();x.logtime=ba-w;if(aa)new h('/ajax/webstorage/process_keys.php').setData(x).setHandler(function(ca){if(!v){var da=ca.getPayload();if(da.keys)da.keys=da.keys.map(j.unicodeUnescape);r(da);}}.bind(this)).send();},cleanOnLogout:function(v){if(v)s(v);var w=k.getSessionStorage();if(w)w.clear();},_getLocalStorageKeys:function(){var v=k.getLocalStorage();return v?Object.keys(v):[];}};e.exports=u;},null);