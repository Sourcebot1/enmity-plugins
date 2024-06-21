function W(e){window.enmity.plugins.registerPlugin(e)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const f=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const _=window.enmity.modules.common.Storage,v=window.enmity.modules.common.Toasts,D=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const x=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const R=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const H=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const q=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const g=o.Text;o.TextInput,o.TouchableHighlight;const b=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const p=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,F=o.FormSection;o.FormSelect,o.FormSubLabel;const J=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const S={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function N(...e){return window.enmity.modules.bulk(...e)}function K(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const M=e=>{let t=0;for(let s in e)t++;return t};function r(e){return window.enmity.assets.getIDByName(e)}const c={Debug:r("debug"),Retry:r("ic_message_retry"),Failed:r("Small"),Cancel:r("ic_megaphone_nsfw_16px"),Add:r("add_white"),Delete:r("ic_message_delete"),Clear:r("ic_clear_all_24px"),Pencil:r("ic_pencil_24px"),Success:r("ic_selection_checked_24px"),Warning:r("ic_warning_24px"),Copy:r("toast_copy_link"),Open:r("ic_leave_stage"),Clipboard:r("pending-alert"),Initial:r("coffee"),Shield:r("ic_person_shield"),Debug_Command:{Sent:r("ic_application_command_24px"),Clock:r("clock")},Settings:{Toasts:{Context:r("toast_image_saved"),Settings:r("ic_selection_checked_24px")},Self:r("friends_toast_icon"),Share:r("share"),Robot:r("ic_robot_24px"),Commands:r("ic_profile_badge_bot_commands"),Debug:r("ic_rulebook_16px")}},I=e=>{v.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},X=e=>{let t=e.split(`
`).map(s=>{if(s!="")return`"${s.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[M(t)]=`${t[M(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function Q(){try{let e=await _.getItem("device_list");if(e)return JSON.parse(e);let t=(await x.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,s=X(t);await _.setItem("device_list",s);let i=await _.getItem("device_list");return JSON.parse(i)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function Z(e,t,s){let i=await Q();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${s.split("-")[1]}
> **Discord Build:** ${f.InfoDictionaryManager.Version} (${f.InfoDictionaryManager.Build})
> **Software Version:** ${f.DCDDeviceManager.systemVersion}
> **Device:** ${i[f.DCDDeviceManager.device]}`}const{native:y}=window.enmity;function A(){y.reload()}y.version,y.build,y.device,y.version;const O=K("transitionToGuild");async function ee({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,s=await(await x.get(t)).text;let i=s.match(/\d\.\d\.\d+/g),a=s.match(/patch\-\d\.\d\.\d+/g);return!i||!a?C(e.name,e.version):(i=i[0],a=a[0],i!=e.version?U(t,i,a.split("-")[1],e,!1):a!=e.build?U(t,i,a.split("-")[1],e,!0):C(e.name,e.version))}const U=(e,t,s,i,a)=>{const u=a?s:t;D.show({title:"Update found",body:`A newer ${a?"build":"version"} is available for ${i.name}. ${a?`
The version will remain at ${t}, but the build will update to ${s}.`:""}
Would you like to install ${a?`build \`${s}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>te(e,u,i,a)})},C=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),v.open({content:`${e} is on latest version (${t})`,source:c.Success})};async function te(e,t,s,i){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?D.show({title:`Updated ${s.name}`,body:`Successfully updated to ${i?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{A()}}):D.show({title:"Error",body:`Something went wrong while updating ${s.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{O.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${s.name}%20Update%20Error%3A%20${i?`b${t}`:`v${t}`}`)}})})}const E=window.enmity.modules.common.Components.General.Animated,[$,ne]=N(S.byProps("transitionToGuild"),S.byProps("setString")),m=R.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:d.Fonts.DISPLAY_NORMAL},header:{color:d.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:d.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var oe=({manifest:e})=>{const t=n.useRef(new E.Value(1)).current,s=()=>{E.spring(t,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},i=()=>{E.spring(t,{toValue:1,duration:250,useNativeDriver:!0}).start()},a=()=>{$.openURL("https://spin.rip/")},u={transform:[{scale:t}]};return n.createElement(n.Fragment,null,n.createElement(h,{style:m.container},n.createElement(b,{onPress:a,onPressIn:s,onPressOut:i},n.createElement(E.View,{style:[u]},n.createElement(H,{style:[m.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(h,{style:m.text_container},n.createElement(b,{onPress:()=>{$.openURL(e.sourceUrl)}},n.createElement(g,{style:[m.main_text,m.header]},e.name," ")),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(g,{style:[m.main_text,m.sub_header]},"A plugin by"),n.createElement(b,{onPress:()=>{$.openURL("https://spin.rip/")}},n.createElement(g,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(h,{style:{flexDirection:"row"}},n.createElement(g,{style:[m.main_text,m.sub_header]},"Settings page by"),n.createElement(b,{onPress:()=>{$.openURL("https://github.com/acquitelol/")}},n.createElement(g,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),n.createElement(h,null,n.createElement(b,{style:{flexDirection:"row"},onPress:()=>{ne.setString(`**${e.name}** v${e.version}`),I("plugin name and version")}},n.createElement(g,{style:[m.main_text,m.sub_header]},"Version:"),n.createElement(g,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ie,k]=N(S.byProps("transitionToGuild","openURL"),S.byProps("setString","getString")),w=R.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:d.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:d.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var se=({manifest:e,settings:t,hasToasts:s,children:i,commands:a})=>n.createElement(q,null,n.createElement(oe,{manifest:e}),i,a&&n.createElement(F,{title:"Plugin Commands"},a.map(u=>n.createElement(l,{label:`/${u.name}`,subLabel:u.description,leading:n.createElement(l.Icon,{style:w.icon,source:c.Settings.Commands}),trailing:l.Arrow,onPress:function(){k.setString(`/${u.name}`),I(`the command ${u.name}`)}}))),n.createElement(F,{title:"Utility"},s&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:w.icon,source:c.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(J,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),v.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:c.Success})}})}),n.createElement(p,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:w.icon,source:c.Settings.Debug}),trailing:l.Arrow,onPress:async function(){k.setString(await Z(e.name,e.version,e.build)),I("plugin debug information")}}),n.createElement(p,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:w.icon,source:c.Delete}),trailing:l.Arrow,onPress:async function(){await _.removeItem("device_list"),v.open({content:"Cleared device list storage.",source:c.Success})}})),n.createElement(F,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:w.icon,source:c.Copy}),trailing:l.Arrow,onPress:()=>{ee({manifest:e})}}),n.createElement(p,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:w.icon,source:c.Open}),trailing:l.Arrow,onPress:()=>{ie.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{style:w.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),re="GotFemboys",ae="1.0.0",le="patch-1.0.7",me="Get a post of a femboy from r/femboy or r/femboys",ce=[{name:"spin",id:"308440976723148800"}],de="#ff0069",ue="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/GotFemboys.js",V={name:re,version:ae,build:le,description:me,authors:ce,color:de,sourceUrl:ue};function G(e,t,s,i){window.enmity.clyde.sendReply(e,t,s,i)}var T;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(T||(T={}));var P;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(P||(P={}));var L;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(L||(L={}));var Y;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(Y||(Y={}));var B;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(B||(B={}));var j;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(j||(j={}));const ge={id:"femboy-command",name:"femboy",displayName:"femboy",description:"Get an image of a femboy",displayDescription:"Get an image of a femboy",type:P.Chat,inputType:L.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the result",displayDescription:"Only you can see the result",type:B.Boolean,required:!1}],execute:async function(e,t){const s=e[e.findIndex(i=>i.name==="whisper")];try{let i=await x.get("https://www.reddit.com/r/FemBoys.json");i=i.body?.data?.children?.[Math.floor(Math.random()*i.body?.data?.children?.length)]?.data;const a={type:"rich",title:i?.title,url:`https://reddit.com${i?.permalink}`,image:{proxy_url:i?.url_overridden_by_dest??i?.url,url:i?.url_overridden_by_dest??i?.url,width:i?.preview?.images?.[0]?.source?.width,height:i?.preview?.images?.[0]?.source?.height},footer:{text:`Posted by u/${i?.author} in r/femboyss!`},color:"0xff0069"};if(t?.guild?.id=="950850315601711176"&&s?.value===!1&&(s.value=!0),s?.value??!0){G(t?.channel.id??"0",{content:t?.guild?.id=="950850315601711176"?"i do not recommend sending femboy images here, most of them are too revealing - spin":"",embeds:[a]});return}else return{content:i?.url_overridden_by_dest??i?.url}}catch(i){console.log("[ GotFemboys Error ]",i),G(t?.channel.id??"0","An error occured while fetching and returning the femboy image. Check debug logs for more info.")}}},z=[ge],we={...V,onStart(){this.commands=z},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){return n.createElement(se,{manifest:V,settings:e,hasToasts:!1,commands:z})}};W(we);