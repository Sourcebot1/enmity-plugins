function H(e,t,s){window.enmity.settings.set(e,t,s)}function q(e,t,s){return window.enmity.settings.get(e,t,s)}function J(e){window.enmity.plugins.registerPlugin(e)}const u=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const y=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const _=window.enmity.modules.common.Storage,v=window.enmity.modules.common.Toasts,S=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const p=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const R=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const K=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const X=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const g=o.Text;o.TextInput,o.TouchableHighlight;const h=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const f=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const D=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,F=o.FormSection;o.FormSelect,o.FormSubLabel;const Q=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const $={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function N(...e){return window.enmity.modules.bulk(...e)}function Z(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const M=e=>{let t=0;for(let s in e)t++;return t};function a(e){return window.enmity.assets.getIDByName(e)}const d={Debug:a("debug"),Retry:a("ic_message_retry"),Failed:a("Small"),Cancel:a("ic_megaphone_nsfw_16px"),Add:a("add_white"),Delete:a("ic_message_delete"),Clear:a("ic_clear_all_24px"),Pencil:a("ic_pencil_24px"),Success:a("ic_selection_checked_24px"),Warning:a("ic_warning_24px"),Copy:a("toast_copy_link"),Open:a("ic_leave_stage"),Clipboard:a("pending-alert"),Initial:a("coffee"),Shield:a("ic_person_shield"),Debug_Command:{Sent:a("ic_application_command_24px"),Clock:a("clock")},Settings:{Toasts:{Context:a("toast_image_saved"),Settings:a("ic_selection_checked_24px")},Self:a("friends_toast_icon"),Share:a("share"),Robot:a("ic_robot_24px"),Commands:a("ic_profile_badge_bot_commands"),Debug:a("ic_rulebook_16px")}},I=e=>{v.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},A=e=>{let t=e.split(`
`).map(s=>{if(s!="")return`"${s.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[M(t)]=`${t[M(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function O(){try{let e=await _.getItem("device_list");if(e)return JSON.parse(e);let t=(await p.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,s=A(t);await _.setItem("device_list",s);let r=await _.getItem("device_list");return JSON.parse(r)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ee(e,t,s){let r=await O();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${s.split("-")[1]}
> **Discord Build:** ${y.InfoDictionaryManager.Version} (${y.InfoDictionaryManager.Build})
> **Software Version:** ${y.DCDDeviceManager.systemVersion}
> **Device:** ${r[y.DCDDeviceManager.device]}`}const{native:b}=window.enmity;function te(){b.reload()}b.version,b.build,b.device,b.version;const ne=Z("transitionToGuild");async function oe({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,s=await(await p.get(t)).text;let r=s.match(/\d\.\d\.\d+/g),i=s.match(/patch\-\d\.\d\.\d+/g);return!r||!i?U(e.name,e.version):(r=r[0],i=i[0],r!=e.version?C(t,r,i.split("-")[1],e,!1):i!=e.build?C(t,r,i.split("-")[1],e,!0):U(e.name,e.version))}const C=(e,t,s,r,i)=>{const m=i?s:t;S.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${r.name}. ${i?`
The version will remain at ${t}, but the build will update to ${s}.`:""}
Would you like to install ${i?`build \`${s}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ie(e,m,r,i)})},U=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),v.open({content:`${e} is on latest version (${t})`,source:d.Success})};async function ie(e,t,s,r){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?S.show({title:`Updated ${s.name}`,body:`Successfully updated to ${r?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{te()}}):S.show({title:"Error",body:`Something went wrong while updating ${s.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{ne.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${s.name}%20Update%20Error%3A%20${r?`b${t}`:`v${t}`}`)}})})}const E=window.enmity.modules.common.Components.General.Animated,[x,se]=N($.byProps("transitionToGuild"),$.byProps("setString")),c=R.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:u.Fonts.DISPLAY_NORMAL},header:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:u.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:u.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var re=({manifest:e})=>{const t=n.useRef(new E.Value(1)).current,s=()=>{E.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},r=()=>{E.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},i=()=>{x.openURL("https://spin.rip/")},m={transform:[{scale:t}]};return n.createElement(n.Fragment,null,n.createElement(f,{style:c.container},n.createElement(h,{onPress:i,onPressIn:s,onPressOut:r},n.createElement(E.View,{style:[m]},n.createElement(K,{style:[c.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(f,{style:c.text_container},n.createElement(h,{onPress:()=>{x.openURL(e.sourceUrl)}},n.createElement(g,{style:[c.main_text,c.header]},e.name," ")),n.createElement(f,{style:{flexDirection:"row"}},n.createElement(g,{style:[c.main_text,c.sub_header]},"A plugin by"),n.createElement(h,{onPress:()=>{x.openURL("https://spin.rip/")}},n.createElement(g,{style:[c.main_text,c.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(f,{style:{flexDirection:"row"}},n.createElement(g,{style:[c.main_text,c.sub_header]},"Settings page by"),n.createElement(h,{onPress:()=>{x.openURL("https://github.com/acquitelol/")}},n.createElement(g,{style:[c.main_text,c.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(f,null,n.createElement(h,{style:{flexDirection:"row"},onPress:()=>{se.setString(`**${e.name}** v${e.version}`),I("plugin name and version")}},n.createElement(g,{style:[c.main_text,c.sub_header]},"Version:"),n.createElement(g,{style:[c.main_text,c.sub_header,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ae,k]=N($.byProps("transitionToGuild","openURL"),$.byProps("setString","getString")),w=R.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var le=({manifest:e,settings:t,hasToasts:s,children:r,commands:i})=>n.createElement(X,null,n.createElement(re,{manifest:e}),r,i&&n.createElement(F,{title:"Plugin Commands"},i.map(m=>n.createElement(l,{label:`/${m.name}`,subLabel:m.description,leading:n.createElement(l.Icon,{style:w.icon,source:d.Settings.Commands}),trailing:l.Arrow,onPress:function(){k.setString(`/${m.name}`),I(`the command ${m.name}`)}}))),n.createElement(F,{title:"Utility"},s&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:w.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(Q,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),v.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Success})}})}),n.createElement(D,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:w.icon,source:d.Settings.Debug}),trailing:l.Arrow,onPress:async function(){k.setString(await ee(e.name,e.version,e.build)),I("plugin debug information")}}),n.createElement(D,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:w.icon,source:d.Delete}),trailing:l.Arrow,onPress:async function(){await _.removeItem("device_list"),v.open({content:"Cleared device list storage.",source:d.Success})}})),n.createElement(F,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:w.icon,source:d.Copy}),trailing:l.Arrow,onPress:()=>{oe({manifest:e})}}),n.createElement(D,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:w.icon,source:d.Open}),trailing:l.Arrow,onPress:()=>{ae.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{style:w.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),ce="GotFeet",me="1.0.1",de="patch-1.0.2",ue="Get a post of some feet from r/feet",ge=[{name:"spin",id:"308440976723148800"}],we="#ff0069",he="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/GotFeet.js",V={name:ce,version:me,build:de,description:ue,authors:ge,color:we,sourceUrl:he};function T(e,t,s,r){window.enmity.clyde.sendReply(e,t,s,r)}var G;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(G||(G={}));var P;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(P||(P={}));var L;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(L||(L={}));var W;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(W||(W={}));var B;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(B||(B={}));var Y;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(Y||(Y={}));const j=["FemBoys","FemboyHentai"],fe={id:"feet-command",name:"feet",displayName:"feet",description:"Get an image of a feet",displayDescription:"Get an image of a feet",type:P.Chat,inputType:L.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the result",displayDescription:"Only you can see the result",type:B.Boolean,required:!1}],execute:async function(e,t){const s=e[e.findIndex(i=>i.name==="whisper")],r=j[Math.floor(Math.random()*j.length)];try{let i=await p.get(`https://www.reddit.com/r/${r}.json`);i=i.body?.data?.children?.[Math.floor(Math.random()*i.body?.data?.children?.length)]?.data;const m={type:"rich",title:i?.title,url:`https://reddit.com${i?.permalink}`,image:{proxy_url:i?.url_overridden_by_dest??i?.url,url:i?.url_overridden_by_dest??i?.url,width:i?.preview?.images?.[0]?.source?.width,height:i?.preview?.images?.[0]?.source?.height},footer:{text:`Posted by u/${i?.author} in r/${r}`},color:"0xff0069"};if(t?.guild?.id=="950850315601711176"&&s?.value===!1&&(s.value=!0),s?.value??!0){T(t?.channel.id??"0",{content:t?.guild?.id=="950850315601711176"?"anywhere else but this server smh - spin":"",embeds:[m]});return}else return{content:i?.url_overridden_by_dest??i?.url}}catch(i){console.log("[ Gotfeets Error ]",i),T(t?.channel.id??"0","An error occured while fetching and returning the feet image. Check debug logs for more info.")}}},z=[fe],be={...V,onStart(){q("_age","_confirmed",!1)||S.show({title:"Wait!",body:`This plugin might show content that is not suitable for ages under 18. By clicking "I'm 18 or older" you are stating that you are 18 or older, and spin is not responsible for any content you see.`,confirmText:"I'm 18 or older",cancelText:"I'm under 18",onConfirm:()=>{H("_age","_confirmed",!0)},onCancel:()=>{window.enmity.plugins.disablePlugin("GotFeet")}}),this.commands=z},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){return n.createElement(le,{manifest:V,settings:e,hasToasts:!1,commands:z})}};J(be);
