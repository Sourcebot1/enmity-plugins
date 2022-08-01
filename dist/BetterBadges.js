function create(e){return window.enmity.patcher.create(e)}function registerPlugin(e){window.enmity.plugins.registerPlugin(e)}function getByDisplayName(...e){return window.enmity.modules.getByDisplayName(...e)}window.enmity.modules.common,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const React=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const Toasts=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack;const Theme=window.enmity.modules.common.Theme;window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;var name="BetterBadges",version="0.0.1",description="Custom badges for anyone and everyone :)",authors=[{name:"NotMarek",id:"206299359007080450"}],color="#ff0069",sourceUrl="https://raw.githubusercontent.com/notmarek/enmity-plugins/master/dist/BetterBadges.js",manifest={name,version,description,authors,color,sourceUrl};const{components}=window.enmity;components.Alert,components.Button,components.FlatList;const Image=components.Image;components.ImageBackground,components.KeyboardAvoidingView,components.Modal,components.Pressable,components.RefreshControl,components.ScrollView,components.SectionList,components.StatusBar,components.StyleSheet,components.Switch,components.Text,components.TextInput,components.TouchableHighlight;const TouchableOpacity=components.TouchableOpacity;components.TouchableWithoutFeedback,components.Touchable;const View=components.View;components.VirtualizedList,components.Form,components.FormArrow,components.FormCTA,components.FormCTAButton,components.FormCardSection,components.FormCheckbox,components.FormDivider,components.FormHint,components.FormIcon,components.FormInput,components.FormLabel,components.FormRadio,components.FormRow,components.FormSection,components.FormSelect,components.FormSubLabel,components.FormSwitch,components.FormTernaryCheckBox,components.FormText,components.FormTextColors,components.FormTextSizes;const c={useMemo:e=>e(),useState:e=>[e,()=>{}],useReducer:e=>[e,()=>{}],useEffect:()=>{},useLayoutEffect:()=>{},useRef:()=>({current:null}),useCallback:e=>e},a=Object.keys(c);var wrapInHooks=e=>(...n)=>{const m=React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current,s=a.map(t=>[t,m[t]]);Object.assign(m,c);const o={rendered:null,error:null};try{o.rendered=e(...n)}catch(t){o.error=t}if(Object.assign(m,Object.fromEntries(s)),o.error)throw o.error;return o.rendered};const BadgesUrl="https://raw.githubusercontent.com/notmarek/enmitybadges/main/",Patcher=create("BetterBadges"),Badges=getByDisplayName("ProfileBadges",{default:!1}),BetterBadges={...manifest,onStart(){},onStop(){(void 0)("badges"),Patcher.after(Badges,"default",(e,[{user:n,isEnmity:m,...s}],o)=>{if(m)return;const[t,d]=React.useState([]);return React.useEffect(()=>{try{fetchUserBadges(n.id).then(d)}catch{console.error(`Failed to request/parse badges for ${n.id}`)}},[]),t.length&&(o||(o=wrapInHooks(Badges.default)({user:new Proxy({},{get:(r,i)=>i==="flags"?-1:n[i]}),isEnmity:!0,...s}),o.props.badges=[]),o.props.badges.push(...t.map(r=>React.createElement(View,{key:r,__enmity:!0,style:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"}},React.createElement(Badge,{type:r}))))),o}),Patcher.unpatchAll()},patches:[]};function Badge({type}){const[badge,setBadge]=React.useState(null);return React.useEffect(()=>{try{fetchBadge(type).then(setBadge)}catch(e){console.error(`Failed to get badge data for ${type}.`,e.message)}},[]),badge!=null&&badge.url?React.createElement(TouchableOpacity,{onPress:()=>{if(badge.script)try{eval(badge.script)}catch(e){console.log(e.message)}Toasts.open({content:badge.name,source:{uri:badge.url[Theme.theme]}})}},React.createElement(Image,{source:{uri:badge.url[Theme.theme]},style:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}})):null}async function fetchUserBadges(e){return await fetch(`${BadgesUrl}${e}.json`,{headers:{"Cache-Control":"no-cache"}}).then(n=>n.json()).catch(()=>[])}async function fetchBadge(e){return await fetch(`${BadgesUrl}data/${e}.json`,{headers:{"Cache-Control":"no-cache"}}).then(n=>n.json()).catch(()=>{})}registerPlugin(BetterBadges);