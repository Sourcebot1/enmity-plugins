const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const y=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch,o.Text,o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable,o.View,o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const s=o.FormRow,d=o.FormSection;o.FormSelect,o.FormSubLabel;const k=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function p(e){window.enmity.plugins.registerPlugin(e)}function h(e){return window.enmity.plugins.installPlugin(e)}function r(e,t,m){window.enmity.settings.set(e,t,m)}function l(e,t,m){return window.enmity.settings.get(e,t,m)}function S(e){return window.enmity.patcher.create(e)}var v="BetterTiktokEmbeds",b="1.1.3",F="Convert TikTok links to tiktxk.com links so the TikTok embed is better and can be played.",T=[{name:"spin",id:"308440976723148800"}],f="#ff0069",_="https://raw.githubusercontent.com/spinfal/enmity-plugins/master/dist/BetterTiktokEmbeds.js",w={name:v,version:b,description:F,authors:T,color:f,sourceUrl:_};window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const C=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const x=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;function E(e,t){return window.enmity.modules.getModule(e,t)}window.enmity.modules.common;const{native:i}=window.enmity;function B(){i.reload()}i.version,i.build,i.device,i.version;var A=({pluginUrl:e})=>n.createElement(s,{label:"Update Plugin",trailing:s.Arrow,onPress:()=>{console.log(e),h(`${e}?${Math.floor(Math.random()*1001)}.js`),x.show({title:"Plugin Update",body:"Updating the plugin using this button will require you to reload Discord. Would you like to reload Discord now?",confirmText:"Yep!",cancelText:"Later",onConfirm:B})}});function c(e){return window.enmity.assets.getIDByName(e)}const u=E(e=>e.open!==void 0&&e.close!==void 0&&!e.openLazy&&!e.startDrag&&!e.init&&!e.openReplay&&!e.openChannelCallPopout),g=S("BTE"),P={...w,onStart(){try{l("_tiktok","_type",!1)||r("_tiktok","_type","tiktxk.com"),g.before(C,"sendMessage",(e,t,m)=>{const a=t[1].content;!a.match(/http(s)?:\/\/(www.)?tiktok.com\/(@[a-zA-Z0-9_.]{2,24}\/video\/\d+|\w{1}\/[a-zA-Z0-9_.-]{8,12})(\/)?/gim)||(t[1].content=a.replace(/http(s)?:\/\/(www.)?tiktok.com/gim,`https://${l("_tiktok","_type",!1)}`))})}catch(e){console.log("[ BetterTiktokEmbeds Error ]",e)}},onStop(){g.unpatchAll()},patches:[],getSettingsPanel({settings:e}){return n.createElement(y,{settings:e},n.createElement(d,{title:"Settings"},n.createElement(s,{label:"Use vm.dstn.to instead of tiktxk.com",leading:n.createElement(s.Icon,{source:c("toast_copy_link")}),trailing:n.createElement(k,{value:e.getBoolean("_tiktxk",!1),onValueChange:()=>{try{e.toggle("_tiktxk",!1),e.getBoolean("_tiktxk",!1)?r("_tiktok","_type","vm.dstn.to"):r("_tiktok","_type","tiktxk.com"),u.open({content:`Switched to ${l("_tiktok","_type",!1)}.`,source:c("check")})}catch(t){console.log("[ BetterTiktokEmbeds Error ]",t),u.open({content:"An error has occurred. Check debug logs for more info.",source:c("Small")})}}})})),n.createElement(d,{title:"Plugin"},n.createElement(A,{pluginUrl:w.sourceUrl})))}};p(P);