function W(e,t,o){window.enmity.settings.set(e,t,o)}function N(e,t,o){return window.enmity.settings.get(e,t,o)}const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const J=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const se=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const w=i.Text;i.TextInput,i.TouchableHighlight;const b=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const y=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const R=i.FormDivider;i.FormHint,i.FormIcon;const X=i.FormInput;i.FormLabel,i.FormRadio;const l=i.FormRow,P=i.FormSection;i.FormSelect,i.FormSubLabel;const ce=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function me(e){window.enmity.plugins.registerPlugin(e)}const A={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function de(e,t){return window.enmity.modules.getModule(e,t)}function K(...e){return window.enmity.modules.bulk(...e)}function C(...e){return window.enmity.modules.getByProps(...e)}function ue(...e){return window.enmity.modules.getByKeyword(...e)}window.enmity.modules.common;const c=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const I=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const F=window.enmity.modules.common.Storage,f=window.enmity.modules.common.Toasts,$=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const q=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const pe=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const Z=window.enmity.modules.common.Linking,k=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const ge=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function we(e){return window.enmity.patcher.create(e)}function ye(e,t,o){return window.enmity.utilities.findInReactTree(e,t,o)}const Q=e=>{let t=0;for(let o in e)t++;return t};function s(e){return window.enmity.assets.getIDByName(e)}const m={Debug:s("debug"),Retry:s("ic_message_retry"),Failed:s("Small"),Cancel:s("ic_megaphone_nsfw_16px"),Add:s("add_white"),Delete:s("ic_message_delete"),Clear:s("ic_clear_all_24px"),Pencil:s("ic_pencil_24px"),Copy:s("toast_copy_link"),Open:s("ic_leave_stage"),Clipboard:s("pending-alert"),Debug_Command:{Sent:s("ic_application_command_24px"),Clock:s("clock")},Settings:{Toasts:{Context:s("toast_image_saved"),Settings:s("ic_selection_checked_24px")},Self:s("friends_toast_icon"),Share:s("share"),Robot:s("ic_robot_24px"),Commands:s("ic_profile_badge_bot_commands"),Debug:s("ic_rulebook_16px")}},M=e=>{f.open({content:`Copied ${e} to clipboard.`,source:m.Clipboard})},he=e=>{let t=e.split(`
`).map(o=>{if(o!="")return`"${o.replaceAll(":",'":"').replace(" ","")}",`});return t[0]=`{${t[0]}`,t[Q(t)]=`${t[Q(t)]}}`,t=t.join(""),t=t.replaceAll("undefined",""),t=t.split("").reverse().join("").replace(",","").split("").reverse().join(""),t};async function fe(){try{let e=await F.getItem("device_list");if(e)return JSON.parse(e);let t=(await q.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,o=he(t);await F.setItem("device_list",o);let r=await F.getItem("device_list");return JSON.parse(r)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ve(e,t,o){let r=await fe();return`**[${e}] Debug Information**
> **Plugin Version:** ${t}
> **Plugin Build:** ${o.split("-")[1]}
> **Discord Build:** ${I.InfoDictionaryManager.Version} (${I.InfoDictionaryManager.Build})
> **Software Version:** ${I.DCDDeviceManager.systemVersion}
> **Device:** ${r[I.DCDDeviceManager.device]}`}const{native:D}=window.enmity;function be(){D.reload()}D.version,D.build,D.device,D.version;const Se=C("transitionToGuild");async function Ee({manifest:e}){const t=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,o=await(await q.get(t)).text;let r=o.match(/\d\.\d\.\d+/g),a=o.match(/patch\-\d\.\d\.\d+/g);return!r||!a?te(e.name,e.version):(r=r[0],a=a[0],r!=e.version?ee(t,r,a.split("-")[1],e,!1):a!=e.build?ee(t,r,a.split("-")[1],e,!0):te(e.name,e.version))}const ee=(e,t,o,r,a)=>{const d=a?o:t;$.show({title:"Update found",body:`A newer ${a?"build":"version"} is available for ${r.name}. ${a?`
The version will remain at ${t}, but the build will update to ${o}.`:""}
Would you like to install ${a?`build \`${o}\``:`version \`${t}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>_e(e,d,r,a)})},te=(e,t)=>{console.log(`[${e}] Plugin is on the latest version, which is ${t}`),f.open({content:`${e} is on latest version (${t})`,source:m.Settings.Toasts.Settings})};async function _e(e,t,o,r){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?$.show({title:`Updated ${o.name}`,body:`Successfully updated to ${r?"build":"version"} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{be()}}):$.show({title:"Error",body:`Something went wrong while updating ${o.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{Se.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${o.name}%20Update%20Error%3A%20${r?`b${t}`:`v${t}`}`)}})})}const L=window.enmity.modules.common.Components.General.Animated,[B,Te]=K(A.byProps("transitionToGuild"),A.byProps("setString"));var Re=({manifest:e})=>{const t=k.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25},header:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:c.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),o=n.useRef(new L.Value(1)).current,r=()=>{L.spring(o,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},a=()=>{L.spring(o,{toValue:1,duration:250,useNativeDriver:!0}).start()},d=()=>{B.openURL("https://spin.rip/")},p={transform:[{scale:o}]};return n.createElement(n.Fragment,null,n.createElement(y,{style:t.container},n.createElement(b,{onPress:d,onPressIn:r,onPressOut:a},n.createElement(L.View,{style:[p]},n.createElement(J,{style:[t.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),n.createElement(y,{style:t.text_container},n.createElement(b,{onPress:()=>{B.openURL(e.sourceUrl)}},n.createElement(w,{style:[t.main_text,t.header]},e.name," ")),n.createElement(y,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"A plugin by"),n.createElement(b,{onPress:()=>{B.openURL("https://spin.rip/")}},n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),n.createElement(y,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Settings page by"),n.createElement(b,{onPress:()=>{B.openURL("https://github.com/acquitelol/")}},n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},"Acquite <3"))),n.createElement(y,null,n.createElement(b,{style:{flexDirection:"row"},onPress:()=>{Te.setString(`**${e.name}** v${e.version}`),M("plugin name and version")}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[Ce,ne]=K(A.byProps("transitionToGuild"),A.byProps("setString"));var De=({manifest:e,settings:t,hasToasts:o,section:r,commands:a})=>{const d=k.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:c.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:c.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),[p,x]=n.useState(),[E,S]=n.useState();return n.createElement(n.Fragment,null,n.createElement(se,{onTouchStart:g=>{x(g.nativeEvent.pageX),S(g.nativeEvent.pageY)},onTouchEnd:g=>{p-g.nativeEvent.pageX<-100&&E-g.nativeEvent.pageY<40&&E-g.nativeEvent.pageY>-40&&pe.pop()}},n.createElement(Re,{manifest:e}),r,a&&n.createElement(P,{title:"Plugin Commands"},a.map(g=>n.createElement(l,{label:`/${g.name}`,subLabel:g.description,leading:n.createElement(l.Icon,{style:d.icon,source:m.Settings.Commands}),trailing:l.Arrow,onPress:function(){ne.setString(`/${g.name}`),M(`the command ${g.name}`)}}))),n.createElement(P,{title:"Utility"},o&&n.createElement(n.Fragment,null,n.createElement(l,{label:"Initialization Toasts",leading:n.createElement(l.Icon,{style:d.icon,source:m.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:n.createElement(ce,{value:t.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{t.toggle(`${e.name}-toastEnable`,!1),f.open({content:`Successfully ${t.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:m.Settings.Toasts.Settings})}})}),n.createElement(R,null)),n.createElement(l,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:n.createElement(l.Icon,{style:d.icon,source:m.Settings.Debug}),trailing:l.Arrow,onPress:async function(){ne.setString(await ve(e.name,e.version,e.build)),M("plugin debug information")}}),n.createElement(R,null),n.createElement(l,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:n.createElement(l.Icon,{style:d.icon,source:m.Delete}),trailing:l.Arrow,onPress:async function(){await F.removeItem("device_list"),f.open({content:"Cleared device list storage.",source:m.Settings.Toasts.Settings})}})),n.createElement(P,{title:"Source"},n.createElement(l,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:n.createElement(l.Icon,{style:d.icon,source:m.Copy}),trailing:l.Arrow,onPress:()=>{Ee({manifest:e})}}),n.createElement(R,null),n.createElement(l,{label:"Source",subLabel:`View ${e.name} source code`,leading:n.createElement(l.Icon,{style:d.icon,source:m.Open}),trailing:l.Arrow,onPress:()=>{Ce.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),n.createElement(l,{style:d.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})))},xe="ReviewDB",Pe="1.3.0",Ae="patch-1.1.1",Ie="Review other users. These reviews are visible to anyone with this type of plugin on any platform.",Fe=[{name:"spin",id:"308440976723148800"},{name:"Rosie<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],$e="#ff0069",Le="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/ReviewDB.js",Be="https://manti.vendicated.dev",h={name:xe,version:Pe,build:Ae,description:Ie,authors:Fe,color:$e,sourceUrl:Le,API_URL:Be};const u=k.createThemedStyleSheet({container:{marginTop:12,marginLeft:10,alignSelf:"flex-start",width:"95%"},eyebrow:{textTransform:"uppercase",fontSize:12,lineHeight:16,fontFamily:c.Fonts.PRIMARY_BOLD,color:c.ThemeColorMap.TEXT_NORMAL,mixBlendMode:"difference",marginBottom:10},innerContainer:{backgroundColor:c.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,borderRadius:8,borderWidth:1,borderColor:c.ThemeColorMap.HEADER_PRIMARY,overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},button:{width:"100%",height:40,justifyContent:"center",alignItems:"center",backgroundColor:"#1e1f22",borderRadius:8,marginTop:10,marginBottom:5},buttonContainer:{flexDirection:"row"},circle:{width:12,height:12,borderRadius:12/2,backgroundColor:c.ThemeColorMap.HEADER_PRIMARY,marginLeft:8,marginRight:6},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},text:{fontFamily:c.Fonts.DISPLAY_BOLD,color:c.ThemeColorMap.TEXT_NORMAL},buttonText:{fontSize:16},mainText:{opacity:.975,letterSpacing:.25},itemContainer:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:6,paddingBottom:6,width:"95%"},authorName:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.DISPLAY_BOLD,fontSize:18,letterSpacing:.25,paddingBottom:4,mixBlendMode:"difference"},reviewHeader:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",maxWidth:"90%"},reviewSubHeader:{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:"65%"},avatarContainer:{alignSelf:"start",justifySelf:"start"},authorAvatar:{width:40,height:40,borderRadius:100},messageContent:{color:c.ThemeColorMap.TEXT_NORMAL,opacity:.985,fontSize:16,mixBlendMode:"difference"},textContainer:{display:"flex",flexDirection:"column",paddingBottom:4,paddingLeft:8,width:"90%"}});function O({text:e,onPress:t}){return n.createElement(y,{style:u.buttonContainer},n.createElement(b,{style:u.button,onPress:t!=null?t:console.log("No press function provided.")},n.createElement(w,{style:[u.text,u.buttonText]},e)))}const V=()=>N(h.name,"rdbToken","");let U=!1;const Y=()=>U?!1:V()?!0:(U=!0,$.show({title:"Unauthorized",body:"You have not set your ReviewDB Auth Token. Please do so in the settings panel.",confirmText:"Get ReviewDB Token",cancelText:"Close",onConfirm:()=>{Z.openURL("https://discord.com/api/v9/oauth2/authorize?client_id=915703782174752809&response_type=code&redirect_uri=https%3A%2F%2Fmanti.vendicated.dev%2FURauth&scope=identify"),U=!1},onCancel:()=>{U=!1}}),!1);async function oe(e){try{return await(await fetch(`${h.API_URL}/getUserReviews?snowflakeFormat=string&discordid=${e}`)).json()}catch(t){f.open({content:"Error while fetching reviews. Check logs for more info.",source:m.Failed}),console.log("[ReviewDB] Error while fetching reviews:",t)}}async function Ue(e){var t;if(!Y())return new Promise((r,a)=>a("Invalid token!"));const o=await(await fetch(h.API_URL+"/addUserReview",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).text();return o&&f.open({content:o,source:m.Pencil}),console.log("[ReviewDB]",(t=Response[o])!=null?t:Response.error)}async function Ne(e){if(!Y())return new Promise((o,r)=>r("Invalid token!"));const t=await(await fetch(h.API_URL+"/deleteReview",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({token:V(),reviewid:e})})).json();f.open({content:(t==null?void 0:t.message)||"Response is empty",source:m.Debug_Command.Sent})}async function ke(e){if(!Y())return new Promise((o,r)=>r("Invalid token!"));const t=await fetch(h.API_URL+"/reportReview",{method:"POST",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"}),body:JSON.stringify({reviewid:e,token:V()})});f.open({content:await t.text(),source:m.Debug_Command.Sent})}function Me(e,t){return e.senderdiscordid==t}var ie=({item:e,onSubmit:t})=>n.createElement(n.Fragment,null,n.createElement(y,{style:u.itemContainer},n.createElement(b,{onPress:()=>{try{ge.showUserProfile({userId:e.senderdiscordid})}catch(o){f.open({content:"Error while fetching user. Check logs for more info.",source:m.Failed}),console.log("[ReviewDB User Fetch Error]"),console.log(o)}},style:u.avatarContainer},n.createElement(J,{style:u.authorAvatar,source:{uri:e.profile_photo}})),n.createElement(b,{onPress:t,style:u.textContainer},n.createElement(y,{style:u.reviewHeader},n.createElement(y,{style:u.reviewSubHeader},n.createElement(w,{style:[u.mainText,u.authorName]},e.username))),n.createElement(y,null,n.createElement(w,{style:u.messageContent},e.comment)))),n.createElement(R,null)),re;const ae=((re=de(e=>{var t,o;return((o=(t=e.default)==null?void 0:t.render)==null?void 0:o.name)=="ActionSheet"}))!=null?re:{default:{render:!1}}).default.render,Oe=C("BottomSheetScrollView").BottomSheetScrollView,Ve=C("openLazy","hideActionSheet");function Ye(e,t,o){ae?Ve.openLazy(new Promise(r=>r({default:ze})),"ReviewActionSheet",{onConfirm:e,item:t,currentUserID:o}):f.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:m.Failed})}function ze({onConfirm:e,item:t,currentUserID:o}){return n.createElement(ae,null,n.createElement(Oe,{contentContainerStyle:{marginBottom:10}},n.createElement(y,{style:{flexDirection:"column",padding:15}},n.createElement(ie,{item:t,onSubmit:null}),Me(t,o)?n.createElement(O,{text:"Delete Review",onPress:()=>{Ne(t.id).then(()=>{e()})}}):null,n.createElement(O,{text:"Report Review",onPress:()=>{ke(t.id).then(()=>{e()})}}))))}const je=C("openLazy","hideActionSheet");var He=({userID:e,currentUserID:t})=>{const[o,r]=n.useState(""),[a,d]=n.useState([]);return n.useEffect(()=>{oe(e).then(p=>{d(p)})},[]),n.createElement(y,{style:u.container},n.createElement(w,{style:u.eyebrow},"User Reviews"),a&&a.length>0?a.map(p=>n.createElement(ie,{item:p,onSubmit:()=>Ye(()=>{je.hideActionSheet()},p,t)})):n.createElement(w,{style:[u.text,u.content]},"No reviews yet. You could be the first!"),n.createElement(X,{id:"reviewTextbox",placeholder:JSON.stringify(a).includes(t)?"Tap here to update your review...":"Tap here to leave a review...",value:o,onChange:p=>{r(p)}}),n.createElement(O,{text:"Submit",onPress:()=>{o?Ue({userid:e,comment:o.trim(),star:-1,token:N(h.name,"rdbToken","")}).then(()=>{oe(e).then(p=>{d(p)}),r("")}):f.open({content:"Please enter a review before submitting.",source:m.Failed})}}))};const le=we(h.name),Ge=C("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),We={...h,onStart(){let e;setTimeout(()=>e=ue("getCurrentUser").getCurrentUser().id,2e3),le.after(Ge.default,"type",(t,o,r)=>{var a,d,p,x,E;const S=(d=(a=ye(r,v=>{var _,T,z;return((_=v==null?void 0:v.props)==null?void 0:_.children.find(j=>{var H,G;return typeof((G=(H=j==null?void 0:j.props)==null?void 0:H.displayProfile)==null?void 0:G.userId)=="string"}))&&((T=v==null?void 0:v.type)==null?void 0:T.displayName)==="View"&&Array.isArray((z=v==null?void 0:v.props)==null?void 0:z.style)}))==null?void 0:a.props)==null?void 0:d.children;if(!S)return r;const{userId:g}=(E=(x=(p=S==null?void 0:S.find(v=>{var _,T;return typeof((T=(_=v==null?void 0:v.props)==null?void 0:_.displayProfile)==null?void 0:T.userId)=="string"}))==null?void 0:p.props)==null?void 0:x.displayProfile)!=null?E:{};if(!g)return r;S.push(n.createElement(He,{userID:g,currentUserID:e}))})},onStop(){le.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(De,{manifest:h,settings:e,hasToasts:!1,section:n.createElement(n.Fragment,null,n.createElement(P,{title:"Plugin Settings"},n.createElement(l,{label:"Get ReviewDB Auth Token",trailing:l.Arrow,leading:n.createElement(l.Icon,{source:m.Settings.Self}),onPress:()=>{Z.openURL("https://discord.com/api/v9/oauth2/authorize?client_id=915703782174752809&response_type=code&redirect_uri=https%3A%2F%2Fmanti.vendicated.dev%2FURauth&scope=identify")}}),n.createElement(R,null),n.createElement(X,{placeholder:"token",value:N(h.name,"rdbToken",""),onChange:t=>/^[A-Za-z0-9]{30,32}$/.test(t)?W(h.name,"rdbToken",t.trim()):W(h.name,"rdbToken",""),title:"ReviewDB Auth Token"}))),commands:null})}};me(We);
