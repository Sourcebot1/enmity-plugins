function W(e){window.enmity.plugins.registerPlugin(e)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const f=window.enmity.modules.common.Native,n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const _=window.enmity.modules.common.Storage,v=window.enmity.modules.common.Toasts,D=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const x=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const R=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const H=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const q=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const g=o.Text;o.TextInput,o.TouchableHighlight;const b=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const h=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox;const p=o.FormDivider;o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const l=o.FormRow,F=o.FormSection;o.FormSelect,o.FormSubLabel;const J=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;const S={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function N(...e){return window.enmity.modules.bulk(...e)}function K(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const M=e=>{let t=0;for(let s in e)t++;return t};function r(e){return window.enmity.assets.getIDByName(e)}const c={Debug:r("debug"),Retry:r("ic_message_retry"),Failed:r("Small"),Cancel:r("ic_megaphone_nsfw_16px"),Add:r("add_white"),Delete:r("ic_message_delete"),Clear:r("ic_clear_all_24px"),Pencil:r("ic_pencil_24px"),Success:r("ic_selection_checked_24px"),Warning:r("ic_warning_24px"),Copy:r("toast_copy_link"),Open:r("ic_leave_stage"),Clipboard:r("pending-alert"),Initial:r("coffee"),Shield:r("ic_person_shield"),Debug_Command:{Sent:r("ic_application_command_24px"),Clock:r("clock")},Settings:{Toasts:{Context:r("toast_image_saved"),Settings:r("ic_selection_checked_24px")},Self:r("friends_toast_icon"),Share:r("share"),Robot:r("ic_robot_24px"),Commands:r("ic_profile_badge_bot_commands"),Debug:r("ic_rulebook_16px")}},I=e=>{v.open({content:`Copied ${e} to clipboard.`,source:c.Clipboard})},X=e=>{let t=e.split(`
                   
