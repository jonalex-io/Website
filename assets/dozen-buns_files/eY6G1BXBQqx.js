;/*FB_PKG_DELIM*/

__d("usePolarisPostQuerySetup",["PolarisQueryBaseHooks"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){d("PolarisQueryBaseHooks").usePolarisAnyQuerySetup(a,b,"POST")}g["default"]=a}),98);
__d("PolarisSidebarSectionHeader.react",["PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreText","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs(c("PolarisIGCoreBox"),{alignItems:"center",direction:"row",paddingX:4,paddingY:1,children:[h.jsx(c("PolarisIGCoreBox"),{flex:"grow",children:h.jsx(c("PolarisIGCoreText").BodyEmphasized,{color:"ig-secondary-text",children:a.headerText})}),a.linkTo&&Boolean(a.secondaryText)&&a.placeholder===!0&&h.jsx(c("PolarisIGCoreText").Body2,{color:"ig-secondary-text",children:a.secondaryText}),a.linkTo&&Boolean(a.secondaryText)&&a.placeholder!==!0&&h.jsx(c("PolarisIGCoreButton"),{borderless:!0,color:"ig-secondary-button",disabled:!!a.placeholder,href:a.linkTo,onClick:a.onClick,children:h.jsx(c("PolarisIGCoreText").Body2Emphasized,{children:a.secondaryText})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react",["cx","PolarisIGCoreBox","PolarisRoutes","PolarisSidebarSectionHeader.react","PolarisSuggestedUserList.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.children,e=a.familiarFeed;a=a.hasHeaderPlaceholder;return i.jsxs("div",{className:"_aak3"+(e?" _agh4":""),children:[i.jsx(c("PolarisSidebarSectionHeader.react"),{headerText:d("PolarisSuggestedUserList.react").HEADER_TEXT,linkTo:d("PolarisRoutes").DISCOVER_PEOPLE_PATH,placeholder:a,secondaryText:d("PolarisSuggestedUserList.react").SEE_ALL_TEXT}),i.jsx(c("PolarisIGCoreBox"),{marginBottom:1,marginStart:1,children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSuggestedUserListWithInitialDataFetch.react",["fbt","PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react","PolarisIGCoreBox","PolarisIGCoreButton","PolarisReactRedux","PolarisRoutes","PolarisSuggestedUserList.react","PolarisUserActionLoadSULV2","polarisSuggestedUserSelectors","react","usePolarisPostQuerySetup"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(){return i.jsx(c("PolarisIGCoreBox"),{paddingX:4,paddingY:3,children:i.jsx(c("PolarisIGCoreButton"),{borderless:!0,href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH,children:h._("\u67e5\u770b\u6240\u6709\u5efa\u8b70")})})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=a.analyticsContext,e=a.avatarSize;e=e===void 0?"medium":e;var f=a.borderlessFollowButton;f=f===void 0?!1:f;var g=a.count,h=a.footer,k=a.header,l=a.familiarFeed,m=a.hasHeaderPlaceholder,n=a.hideName;n=n===void 0?!1:n;var o=a.hideUpsells;o=o===void 0?!1:o;var p=a.initialRenderCount;p=p===void 0?d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:p;var q=a.variant;q=q===void 0?"LIST":q;var r=a.viewModule;a=a.suggestedUserListQueryRef;c("usePolarisPostQuerySetup")(a,d("PolarisUserActionLoadSULV2").onSuggestedUserListResponse);a=d("PolarisReactRedux").useSelector(d("polarisSuggestedUserSelectors").getSuggestions);return a.length===0?null:i.jsxs(c("PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react"),{familiarFeed:l,hasHeaderPlaceholder:m,children:[i.jsx(d("PolarisSuggestedUserList.react").SuggestedUserList,{analyticsContext:b,avatarSize:e,borderlessFollowButton:f,hideName:n,hideUpsells:o,initialRenderCount:p,isLoading:!1,subHeader:k!==void 0?k:d("PolarisSuggestedUserList.react").HEADER_TEXT,userIds:isNaN(g)?a.slice(0,p):a.slice(0,g),variant:q,viewModule:r}),q==="LIST"&&(h!==void 0?h:i.jsx(j,{}))]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFeedSidebarSuggestedUserList.react",["PolarisConnectionsLogger","PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react","PolarisIGCoreBox","PolarisIGCoreListItemPlaceholder","PolarisPanavisionQEHelpers","PolarisSuggestedUserListWithInitialDataFetch.react","PolarisSuspenseWithErrorBoundary.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=5,j="small";function a(a){var b=a.hasHeaderPlaceholder;a=a.suggestedUserListQueryRef;var e=d("PolarisPanavisionQEHelpers").hasFamiliarFeed();return h.jsx(c("PolarisSuspenseWithErrorBoundary.react"),{loadingRenderer:h.jsx(c("PolarisFeedSidebarSuggestedUserListHeaderAndMargin.react"),{familiarFeed:e,hasHeaderPlaceholder:b,children:h.jsxs(c("PolarisIGCoreBox"),{paddingY:2,children:[h.jsx(c("PolarisIGCoreListItemPlaceholder"),{size:j}),h.jsx(c("PolarisIGCoreListItemPlaceholder"),{size:j}),h.jsx(c("PolarisIGCoreListItemPlaceholder"),{size:j}),h.jsx(c("PolarisIGCoreListItemPlaceholder"),{size:j}),h.jsx(c("PolarisIGCoreListItemPlaceholder"),{size:j})]})}),children:h.jsx(c("PolarisSuggestedUserListWithInitialDataFetch.react"),{analyticsContext:"desktop",avatarSize:j,borderlessFollowButton:!0,count:i,familiarFeed:e,footer:null,hasHeaderPlaceholder:b,header:null,hideName:!0,hideUpsells:!0,initialRenderCount:i,suggestedUserListQueryRef:a,viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.desktop_feed})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisSidebarUserSummary.react",["cx","FastLink","PolarisAuthStrings","PolarisHasAccountSwitching","PolarisIGCoreBox","PolarisIGCoreButton","PolarisIGCoreConstants","PolarisIGCoreListItem","PolarisIGCoreText","PolarisIGCoreVerifiedBadge","PolarisLinkBuilder","PolarisNavigationActions","PolarisPanavisionQEHelpers","PolarisReactRedux","PolarisRoutes","PolarisUserAvatarWithStories.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(){var a=d("PolarisReactRedux").useDispatch();if(!d("PolarisHasAccountSwitching").hasAccountSwitching())return null;var b=function(){return a(d("PolarisNavigationActions").openAccountSwitcher({next:d("PolarisRoutes").FEED_PATH,source:"feed_sidebar"}))};return i.jsx(c("PolarisIGCoreButton"),{borderless:!0,onClick:b,children:i.jsx(c("PolarisIGCoreText").Body2,{color:"ig-primary-action",weight:"semibold",children:d("PolarisAuthStrings").SWITCH_CTA_TEXT})})}j.displayName=j.name+" [from "+f.id+"]";function a(a){var b=a.isVerified,e=a.name,f=a.profilePictureUrl;a=a.username;var g=d("PolarisPanavisionQEHelpers").hasPolarisFeedRevamp(),h=g?"medium":"large";return i.jsx(c("PolarisIGCoreBox"),{"data-testid":void 0,marginEnd:1,width:"100%",children:i.jsx(c("PolarisIGCoreListItem"),{action:i.jsx(j,{}),icon:i.jsx(c("PolarisUserAvatarWithStories.react"),{className:g?"":"_aak0",isLink:!0,profilePictureUrl:f,size:c("PolarisIGCoreConstants").AVATAR_SIZES[h],storyEntrypoint:"reel_feed_timeline",username:a}),paddingX:0,paddingY:0,subtitle:e!==""?i.jsx(c("PolarisIGCoreBox"),{flex:"grow",marginStart:g?0:3,children:i.jsx(c("PolarisIGCoreText").Body,{color:"ig-secondary-text",display:"truncated",children:e})}):null,title:i.jsxs(c("PolarisIGCoreBox"),{direction:"row",flex:"grow",marginStart:g?0:3,children:[i.jsx(c("FastLink"),{className:"_aak1",href:d("PolarisLinkBuilder").buildUserLink(a),children:a}),b&&i.jsx(c("PolarisIGCoreBox"),{display:"inlineBlock",marginStart:1,children:i.jsx(c("PolarisIGCoreVerifiedBadge"),{})})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFeedSidebar.react",["cx","PolarisBatchDOM","PolarisDOMListener.react","PolarisErrorBoundary.react","PolarisFeedSidebarSuggestedUserList.react","PolarisFooter.react","PolarisReactRedux","PolarisSidebarUserSummary.react","nullthrows","polarisStorySelectors","polarisUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useRef,m=b.useState;function a(a){a=a.suggestedUserListQueryRef;var b=d("PolarisReactRedux").useSelector(d("polarisUserSelectors").getViewer),e=d("PolarisReactRedux").useSelector(d("polarisStorySelectors").getFeedStoryTrayWithoutOwn),f=m(null),g=f[0],h=f[1],n=l(null),o=j(function(){d("PolarisBatchDOM").measure(function(){if(n.current==null)return;var a=n.current.getBoundingClientRect().left;d("PolarisBatchDOM").mutate(function(){if(n.current==null)return;h(a)})})},[n]);k(function(){o()},[o]);return i.jsxs(i.Fragment,{children:[i.jsx(c("PolarisDOMListener.react"),{event:"scroll",handler:o,passive:!0,target:window}),i.jsx(c("PolarisDOMListener.react"),{event:"resize",handler:o,passive:!0,target:window}),i.jsx("div",{className:"_aak4",ref:n}),i.jsxs("div",{className:"_aak6"+(g!=null?" _aak9":""),style:{left:g},children:[i.jsx("div",{className:"_aakb _aakc",children:i.jsx(c("PolarisSidebarUserSummary.react"),{isVerified:!1,name:c("nullthrows")(b==null?void 0:b.fullName),profilePictureUrl:c("nullthrows")(b==null?void 0:b.profilePictureUrl),username:c("nullthrows")(b==null?void 0:b.username)})}),i.jsx(c("PolarisErrorBoundary.react"),{children:i.jsx(c("PolarisFeedSidebarSuggestedUserList.react"),{hasHeaderPlaceholder:e==null,suggestedUserListQueryRef:a})}),i.jsx(c("PolarisFooter.react"),{variant:c("PolarisFooter.react").VARIANTS.sidebar})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisFeedSidebarDeferred.react",["deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";d("react");a=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisFeedSidebar.react").__setRef("PolarisFeedSidebarDeferred.react"));b=a;g["default"]=b}),98);