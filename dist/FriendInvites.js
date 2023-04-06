const{components:r}=window.enmity;r.Alert,r.Button,r.FlatList;const X=r.Image;r.ImageBackground,r.KeyboardAvoidingView,r.Modal,r.Pressable,r.RefreshControl;const K=r.ScrollView;r.SectionList,r.StatusBar,r.StyleSheet,r.Switch;const v=r.Text;r.TextInput,r.TouchableHighlight;const f=r.TouchableOpacity;r.TouchableWithoutFeedback,r.Touchable;const b=r.View;r.VirtualizedList,r.Form,r.FormArrow,r.FormCTA,r.FormCTAButton,r.FormCardSection,r.FormCheckbox;const x=r.FormDivider;r.FormHint,r.FormIcon,r.FormInput,r.FormLabel,r.FormRadio;const a=r.FormRow,I=r.FormSection;r.FormSelect,r.FormSubLabel;const O=r.FormSwitch;r.FormTernaryCheckBox,r.FormText,r.FormTextColors,r.FormTextSizes;function Q(e){window.enmity.plugins.registerPlugin(e)}const u={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,n)=>window.enmity.modules.filters.byName(e,n),byTypeName:(e,n)=>window.enmity.modules.filters.byTypeName(e,n),byDisplayName:(e,n)=>window.enmity.modules.filters.byDisplayName(e,n)};function D(...e){return window.enmity.modules.bulk(...e)}function C(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const k=window.enmity.modules.common.Native,o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const P=window.enmity.modules.common.Storage,h=window.enmity.modules.common.Toasts,p=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const U=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const T=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const N=e=>{let n=0;for(let s in e)n++;return n};function c(e){return window.enmity.assets.getIDByName(e)}const d={Debug:c("debug"),Retry:c("ic_message_retry"),Failed:c("Small"),Cancel:c("ic_megaphone_nsfw_16px"),Add:c("add_white"),Delete:c("ic_message_delete"),Clear:c("ic_clear_all_24px"),Pencil:c("ic_pencil_24px"),Success:c("ic_selection_checked_24px"),Warning:c("ic_warning_24px"),Copy:c("toast_copy_link"),Open:c("ic_leave_stage"),Clipboard:c("pending-alert"),Initial:c("coffee"),Shield:c("ic_person_shield"),Debug_Command:{Sent:c("ic_application_command_24px"),Clock:c("clock")},Settings:{Toasts:{Context:c("toast_image_saved"),Settings:c("ic_selection_checked_24px")},Self:c("friends_toast_icon"),Share:c("share"),Robot:c("ic_robot_24px"),Commands:c("ic_profile_badge_bot_commands"),Debug:c("ic_rulebook_16px")}},_=e=>{h.open({content:`Copied ${e} to clipboard.`,source:d.Clipboard})},Z=e=>{let n=e.split(`
`).map(s=>{if(s!="")return`"${s.replaceAll(":",'":"').replace(" ","")}",`});return n[0]=`{${n[0]}`,n[N(n)]=`${n[N(n)]}}`,n=n.join(""),n=n.replaceAll("undefined",""),n=n.split("").reverse().join("").replace(",","").split("").reverse().join(""),n};async function ee(){try{let e=await P.getItem("device_list");if(e)return JSON.parse(e);let n=(await U.get("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text,s=Z(n);await P.setItem("device_list",s);let t=await P.getItem("device_list");return JSON.parse(t)}catch(e){console.warn(`[SpinsPlugins Local Error \u2014 Issue when getting devices: ${e}]`);return}}async function ne(e,n,s){let t=await ee();return`**[${e}] Debug Information**
> **Plugin Version:** ${n}
> **Plugin Build:** ${s.split("-")[1]}
> **Discord Build:** ${k.InfoDictionaryManager.Version} (${k.InfoDictionaryManager.Build})
> **Software Version:** ${k.DCDDeviceManager.systemVersion}
> **Device:** ${t[k.DCDDeviceManager.device]}`}const{native:S}=window.enmity;function te(){S.reload()}S.version,S.build,S.device,S.version;const oe=C("transitionToGuild");async function ie({manifest:e}){const n=`${e.sourceUrl}?${Math.floor(Math.random()*1001)}.js`,s=await(await U.get(n)).text;let t=s.match(/\d\.\d\.\d+/g),i=s.match(/patch\-\d\.\d\.\d+/g);return!t||!i?V(e.name,e.version):(t=t[0],i=i[0],t!=e.version?M(n,t,i.split("-")[1],e,!1):i!=e.build?M(n,t,i.split("-")[1],e,!0):V(e.name,e.version))}const M=(e,n,s,t,i)=>{const l=i?s:n;p.show({title:"Update found",body:`A newer ${i?"build":"version"} is available for ${t.name}. ${i?`
The version will remain at ${n}, but the build will update to ${s}.`:""}
Would you like to install ${i?`build \`${s}\``:`version \`${n}\``}  now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>re(e,l,t,i)})},V=(e,n)=>{console.log(`[${e}] Plugin is on the latest version, which is ${n}`),h.open({content:`${e} is on latest version (${n})`,source:d.Success})};async function re(e,n,s,t){window.enmity.plugins.installPlugin(e,({data:i})=>{i=="installed_plugin"||i=="overridden_plugin"?p.show({title:`Updated ${s.name}`,body:`Successfully updated to ${t?"build":"version"} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Yep!",cancelText:"Not now",onConfirm:()=>{te()}}):p.show({title:"Error",body:`Something went wrong while updating ${s.name}.`,confirmText:"Report this issue",cancelText:"Cancel",onConfirm:()=>{oe.openURL(`https://github.com/spinfal/enmity-plugins/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D%20${s.name}%20Update%20Error%3A%20${t?`b${n}`:`v${n}`}`)}})})}const R=window.enmity.modules.common.Components.General.Animated,[L,se]=D(u.byProps("transitionToGuild"),u.byProps("setString")),m=T.createThemedStyleSheet({container:{paddingTop:30,paddingLeft:20,marginBottom:-5,flexDirection:"row"},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},image:{width:75,height:75,borderRadius:10},main_text:{opacity:.975,letterSpacing:.25,fontFamily:g.Fonts.DISPLAY_NORMAL},header:{color:g.ThemeColorMap.HEADER_PRIMARY,fontFamily:g.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:g.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}});var le=({manifest:e})=>{const n=o.useRef(new R.Value(1)).current,s=()=>{R.spring(n,{toValue:1.1,duration:250,useNativeDriver:!0}).start()},t=()=>{R.spring(n,{toValue:1,duration:250,useNativeDriver:!0}).start()},i=()=>{L.openURL("https://spin.rip/")},l={transform:[{scale:n}]};return o.createElement(o.Fragment,null,o.createElement(b,{style:m.container},o.createElement(f,{onPress:i,onPressIn:s,onPressOut:t},o.createElement(R.View,{style:[l]},o.createElement(X,{style:[m.image],source:{uri:"https://cdn.spin.rip/r/l9uevwe4ia0.jpg"}}))),o.createElement(b,{style:m.text_container},o.createElement(f,{onPress:()=>{L.openURL(e.sourceUrl)}},o.createElement(v,{style:[m.main_text,m.header]},e.name," ")),o.createElement(b,{style:{flexDirection:"row"}},o.createElement(v,{style:[m.main_text,m.sub_header]},"A plugin by"),o.createElement(f,{onPress:()=>{L.openURL("https://spin.rip/")}},o.createElement(v,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},e.authors[0].name))),o.createElement(b,{style:{flexDirection:"row"}},o.createElement(v,{style:[m.main_text,m.sub_header]},"Settings page by"),o.createElement(f,{onPress:()=>{L.openURL("https://github.com/acquitelol/")}},o.createElement(v,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},"Rosie<3"))),o.createElement(b,null,o.createElement(f,{style:{flexDirection:"row"},onPress:()=>{se.setString(`**${e.name}** v${e.version}`),_("plugin name and version")}},o.createElement(v,{style:[m.main_text,m.sub_header]},"Version:"),o.createElement(v,{style:[m.main_text,m.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},e.version," "))))))};const[ae,A]=D(u.byProps("transitionToGuild","openURL"),u.byProps("setString","getString")),y=T.createThemedStyleSheet({bottom_padding:{paddingBottom:25},icon:{color:g.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:g.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}});var ce=({manifest:e,settings:n,hasToasts:s,children:t,commands:i})=>o.createElement(K,null,o.createElement(le,{manifest:e}),t,i&&o.createElement(I,{title:"Plugin Commands"},i.map(l=>o.createElement(a,{label:`/${l.name}`,subLabel:l.description,leading:o.createElement(a.Icon,{style:y.icon,source:d.Settings.Commands}),trailing:a.Arrow,onPress:function(){A.setString(`/${l.name}`),_(`the command ${l.name}`)}}))),o.createElement(I,{title:"Utility"},s&&o.createElement(o.Fragment,null,o.createElement(a,{label:"Initialization Toasts",leading:o.createElement(a.Icon,{style:y.icon,source:d.Settings.Toasts.Context}),subLabel:`If available, show toasts when ${e.name} is starting`,trailing:o.createElement(O,{value:n.getBoolean(`${e.name}-toastEnable`,!1),onValueChange:()=>{n.toggle(`${e.name}-toastEnable`,!1),h.open({content:`Successfully ${n.getBoolean(`${e.name}-toastEnable`,!1)?"enabled":"disabled"} initialization toasts.`,source:d.Success})}})}),o.createElement(x,null)),o.createElement(a,{label:"Copy Debug Info",subLabel:`Copy useful debug information of ${e.name} to clipboard.`,leading:o.createElement(a.Icon,{style:y.icon,source:d.Settings.Debug}),trailing:a.Arrow,onPress:async function(){A.setString(await ne(e.name,e.version,e.build)),_("plugin debug information")}}),o.createElement(x,null),o.createElement(a,{label:"Clear Device List Cache",subLabel:"Remove the fetched device list storage. This will not clear Discord's or your iDevice's cache.",leading:o.createElement(a.Icon,{style:y.icon,source:d.Delete}),trailing:a.Arrow,onPress:async function(){await P.removeItem("device_list"),h.open({content:"Cleared device list storage.",source:d.Success})}})),o.createElement(I,{title:"Source"},o.createElement(a,{label:"Check for Updates",subLabel:`Check for any plugin updates for ${e.name}.`,leading:o.createElement(a.Icon,{style:y.icon,source:d.Copy}),trailing:a.Arrow,onPress:()=>{ie({manifest:e})}}),o.createElement(x,null),o.createElement(a,{label:"Source",subLabel:`View ${e.name} source code`,leading:o.createElement(a.Icon,{style:y.icon,source:d.Open}),trailing:a.Arrow,onPress:()=>{ae.openURL(`https://github.com/spinfal/enmity-plugins/tree/master/${e.name}`)}})),o.createElement(a,{style:y.bottom_padding,label:`Plugin Version: ${e.version}
Plugin Build: ${e.build.split("-").pop()}`})),de="FriendInvites",me="1.3.6",ue="patch-1.0.11",ge="Easily create a Discord friend invite link to make it easier for users to add you as a friend",he=[{name:"spin",id:"308440976723148800"}],we="#ff0069",ve="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/FriendInvites.js",Y={name:de,version:me,build:ue,description:ge,authors:he,color:we,sourceUrl:ve};function w(e,n,s,t){window.enmity.clyde.sendReply(e,n,s,t)}var G;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(G||(G={}));var E;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(E||(E={}));var $;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})($||($={}));var j;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(j||(j={}));var B;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(B||(B={}));var z;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(z||(z={}));const[ye,fe,be,pe]=D(u.byProps("getAllFriendInvites"),u.byProps("get","post"),u.byProps("v4"),u.byProps("getCurrentUser")),_e={id:"create-friend-invite",name:"invites create",displayName:"invites create",description:"Create a friend invite link",displayDescription:"Create a friend invite link",type:E.Chat,inputType:$.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the response",displayDescription:"Only you can see the response",type:B.Boolean,required:!1}],execute:async function(e,n){const s=e[e.findIndex(t=>t.name==="whisper")];try{pe.getCurrentUser().phone||w(n?.channel.id??"0","Using friend invites requires you to have a phone number linked. This is a Discord limitation for some odd reason. You can still try the plugin, however you will be met with errors.");const t=be.v4(),i=await fe.post({url:"/friend-finder/find-friends",body:{modified_contacts:{[t]:[1,"",""]}}}).then(l=>ye.createFriendInvite({code:l.body.invite_suggestions[0][3],recipient_phone_number_or_email:t})).catch(l=>console.log("[ createFriendInvite Error ]",l));if(console.log(i),i)if(s?.value??!0){w(n?.channel.id??"0",`Your friend invite link is: discord.gg/${i.code}
Max uses: ${i.max_uses}
Expires: <t:${new Date(i.expires_at).getTime()/1e3}:R>`);return}else return{content:`discord.gg/${i.code}`};else console.log("[ createFriendInvite Response ]",i),w(n?.channel.id??"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(t){console.log("[ createFriendInvite Error ]",t),w(n?.channel.id??"0","An error occured while creating the friend invite. Check debug logs for more info.")}}},Se={id:"list-friend-invites",name:"invites list",displayName:"invites list",description:"List your current friend invite links",displayDescription:"List your current friend invite links",type:E.Chat,inputType:$.BuiltInText,options:[{name:"whisper",displayName:"whisper",description:"Only you can see the response",displayDescription:"Only you can see the response",type:B.Boolean,required:!1}],execute:async function(e,n){const s=e[e.findIndex(t=>t.name==="whisper")];try{const t=await C("getAllFriendInvites").getAllFriendInvites();if(t){const i={type:"rich",title:"Friend Invites",description:t.length==0?"You have no friend invites!":`${t.map(l=>`**https://discord.gg/${l.code}**
Uses: ${l.uses}/${l.max_uses}
Expires <t:${new Date(l.expires_at).getTime()/1e3}:R>`).join(`

`)}`,footer:{text:"Friend invites are mostly undocumented and any of these features may break at any time."},color:"0xff0069"};if(s?.value??!0){w(n?.channel.id??"0",{embeds:[i]});return}else if(t.length==0){w(n?.channel.id??"0","You have no friend invites!");return}else return{content:`${t.map(l=>`\`discord.gg/${l.code}\` - uses: ${l.uses}/${l.max_uses} - expires <t:${new Date(l.expires_at).getTime()/1e3}:R>`).join(`
`)}`}}else console.log("[ listFriendInvites Response ]",t),w(n?.channel.id??"0","Something went wrong, please try again later. Fetch response sent to console.")}catch(t){console.log("[ listFriendInvites Error ]",t),w(n?.channel.id??"0","An error occured while fetching and listing friend invites. Check debug logs for more info.")}}},W=C("getAllFriendInvites"),Ee={id:"revoke-friend-invites",name:"invites revoke",displayName:"invites revoke",description:"Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",displayDescription:"Revoke all of your friend invites (this is irreversible and will delete all of your friend invites)",type:E.Chat,inputType:$.BuiltInText,execute:async function(e,n){const s=e[e.findIndex(t=>t.name==="invite")];try{await W.revokeFriendInvites().then(()=>{W.getAllFriendInvites().then(t=>{if(t.length==0){w(n?.channel.id??"0",s?"Successfully revoked invite.":"Successfully revoked all invites.");return}else console.log("[ revokeFriendInvites Response ]",t),w(n?.channel.id??"0","Something went wrong, please try again later. Fetch response sent to console.")})})}catch(t){console.log("[ revokeFriendInvites Error ]",t),w(n?.channel.id??"0","An error occured while revoking friend invites. Check debug logs for more info.")}}},q=[_e,Se,Ee],[F,$e,Fe,H,xe]=D(u.byProps("getAllFriendInvites"),u.byProps("get","post"),u.byProps("v4"),u.byProps("setString"),u.byProps("getCurrentUser")),J=T.createThemedStyleSheet({icon:{color:g.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:g.ThemeColorMap.TEXT_MUTED},text_container:{display:"flex",flexDirection:"column"}}),Ie={...Y,onStart(){this.commands=q},onStop(){this.commands=[]},patches:[],getSettingsPanel({settings:e}){const[n,s]=o.useState(null);return o.useEffect(()=>{F.getAllFriendInvites().then(t=>{!t||t.length===0?s(null):s(t)}).catch(t=>{console.log("[ getAllFriendInvites Error ]",t),h.open({content:"Something went wrong. Error details sent to console",source:d.Failed})})},[]),o.createElement(ce,{manifest:Y,settings:e,hasToasts:!1,commands:q},o.createElement(I,{title:"Invite Links"},n&&o.createElement(o.Fragment,null,n.map(t=>o.createElement(a,{key:t.code,label:`discord.gg/${t.code}`,subLabel:`This invite has been used ${t.uses} times out of ${t.max_uses} and will expire ${new Date(t.expires_at).toLocaleString()}`,leading:o.createElement(a.Icon,{style:J.icon,source:d.Settings.Share}),trailing:a.Arrow,onPress:()=>{H.setString(`discord.gg/${t.code}`),_(`the invite discord.gg/${t.code}`)},onLongPress:()=>{p.show({title:"Revoke friend invites",body:`Would you like to revoke all friend invites?
This action is permanent and cannot be undone.`,confirmText:"Revoke",cancelText:"Cancel",onConfirm:()=>{F.revokeFriendInvites().then(()=>{F.getAllFriendInvites().then(i=>{!i||i.length==0?(h.open({content:"Friends invites have been revoked",source:d.Success}),s(null)):(console.log("[ revokeFriendInvites Response ]",i),h.open({content:"Something went wrong. Invite list sent to console",source:d.Failed}))}).catch(i=>{console.log("[ revokeFriendInvites Response ]",i),h.open({content:"Something went wrong. Details sent to console",source:d.Failed})})})}})}})))||o.createElement(o.Fragment,null,o.createElement(a,{key:Math.floor(Math.random()*1001),label:"Create a friend invite",subLabel:"You do not have any friend invites! Try creating one.",leading:o.createElement(a.Icon,{style:J.icon,source:d.Add}),trailing:a.Arrow,onPress:()=>{xe.getCurrentUser().phone||p.show({title:"Oh no!",body:"Using friend invites requires you to have a phone number linked. This is a Discord limitation for some odd reason. You can still try the plugin, however you will be met with errors.",confirmText:"Okay",cancelText:"So stupid"});const t=Fe.v4();$e.post({url:"/friend-finder/find-friends",body:{modified_contacts:{[t]:[1,"",""]}}}).then(i=>F.createFriendInvite({code:i.body.invite_suggestions[0][3],recipient_phone_number_or_email:t})).catch(i=>console.log("[ createFriendInvite Error ]",i)).then(i=>{i?(h.open({content:"Friend invite created",source:d.Success}),H.setString(`discord.gg/${i.code}`),_(`the invite discord.gg/${i.code}`),F.getAllFriendInvites().then(l=>{!l||l.length===0?s(null):s(l)}).catch(l=>{console.log("[ getAllFriendInvites Error ]",l),h.open({content:"Something went wrong. Error details sent to console",source:d.Failed})})):(console.log("[ createFriendInvite Error ]",i),h.open({content:"Something went wrong. Error details sent to console",source:d.Failed}))})}}))),o.createElement(x,null))}};Q(Ie);
