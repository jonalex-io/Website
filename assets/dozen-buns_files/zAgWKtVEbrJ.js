;/*FB_PKG_DELIM*/

__d("PolarisKeywordExploreStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("\u627e\u4e0d\u5230\u7b26\u5408\u6b64\u641c\u5c0b\u689d\u4ef6\u7684\u5167\u5bb9\u3002");b=h._("\u67e5\u7121\u7d50\u679c");c=h._("\u641c\u5c0b\u5716\u793a\u3002");g.NO_KEYWORD_GRID_RESULTS_BODY=a;g.NO_KEYWORD_GRID_RESULTS_HEADER=b;g.NO_KEYWORD_GRID_RESULTS_SEARCH_ICON=c}),98);
__d("PolarisKeywordExploreNullStateView.react",["PolarisGenericNullStateView.react","PolarisIGCoreBox","PolarisIGCoreSearchPanoOutlineIcon","PolarisKeywordExploreStrings","PolarisSvgIconWithCircularBackground.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=32,j=96;function a(){return h.jsx(c("PolarisGenericNullStateView.react"),{body:d("PolarisKeywordExploreStrings").NO_KEYWORD_GRID_RESULTS_BODY,header:d("PolarisKeywordExploreStrings").NO_KEYWORD_GRID_RESULTS_HEADER,icon:h.jsx(c("PolarisIGCoreBox"),{marginBottom:2,children:h.jsx(c("PolarisSvgIconWithCircularBackground.react"),{borderColor:"ig-primary-text",icon:h.jsx(c("PolarisIGCoreSearchPanoOutlineIcon"),{alt:d("PolarisKeywordExploreStrings").NO_KEYWORD_GRID_RESULTS_SEARCH_ICON,size:i}),size:j})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordSearchExploreHeader.react",["cx","PolarisGenericMobileHeader.react","PolarisIGCoreBox","PolarisIGCoreText","PolarisKeywordSearchRefinementPill.react","PolarisNavBackButton.react","PolarisReactRedux","PolarisStringUtils","PolarisUA","polarisDynamicExploreSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.keyword;a=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getKeywordRefinementItems(a,b)});return d("PolarisUA").isMobile()?i.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:i.jsx(c("PolarisNavBackButton.react"),{}),title:d("PolarisStringUtils").lowercaseAndCapitalizeFirst(b)}):i.jsx("div",{className:"_aarr",children:i.jsxs(c("PolarisIGCoreBox"),{children:[i.jsx(c("PolarisIGCoreText").Title,{display:"truncated",children:d("PolarisStringUtils").lowercaseAndCapitalizeFirst(b)}),i.jsx(c("PolarisIGCoreBox"),{direction:"row",wrap:!0,children:a.map(function(a){return i.jsx(c("PolarisIGCoreBox"),{direction:"column",marginEnd:3,marginTop:4,children:i.jsx(c("PolarisKeywordSearchRefinementPill.react"),{keywordRefinement:a})},a.keywordId)})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMobileKeywordSearchExploreHeader.react",["PolarisGenericMobileHeader.react","PolarisKeywordSearchRefinementPillSection.react","PolarisNavBackButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.keyword;a=a.keywordRefinements;return h.jsx(c("PolarisGenericMobileHeader.react"),{leftActions:h.jsx(c("PolarisNavBackButton.react"),{}),title:b,children:a.length>0&&h.jsx(c("PolarisKeywordSearchRefinementPillSection.react"),{keywordRefinements:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisKeywordSearchExplorePage.react",["fbt","PolarisConditionalPageLayoutHandler.react","PolarisDynamicExploreMediaHelpers","PolarisDynamicExplorePageContentWrapper.react","PolarisDynamicExplorePageSharedGrid.react","PolarisDynamicExploreTypes","PolarisExploreLogger","PolarisKeywordExploreNullStateView.react","PolarisKeywordSearchExploreHeader.react","PolarisKeywordSearchExploreHooks","PolarisLinkBuilder","PolarisMobileKeywordSearchExploreHeader.react","PolarisOrganicThumbnailImpression","PolarisPageMetadata.react","PolarisReactRedux","PolarisSearchLogger","PolarisShell.react","PolarisUA","gkx","polarisDynamicExploreSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useEffect,k="KeywordSearchExplorePage",l=h._("\u95dc\u9375\u5b57\u63a2\u7d22\u9801\u9762");function a(a){var b=a.keyword;a=d("PolarisReactRedux").useDispatch();var e=d("PolarisKeywordSearchExploreHooks").useKeywordExploreSectionalItems(b),f=e[0];e=e[1];j(e,[a,b]);a=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getKeywordRefinementItems(a,b)});var g=d("PolarisReactRedux").useSelector(function(a){return d("polarisDynamicExploreSelectors").getKeywordIdFromKeyword(a,b)}),h=d("PolarisKeywordSearchExploreHooks").useKeywordExplorePagination(b),m=h[0];h=h[1];var n=function(a){return d("PolarisUA").isMobile()?d("PolarisLinkBuilder").buildChainingMediaLinkForKeyword(d("PolarisDynamicExploreMediaHelpers").getPostCode(a),b):d("PolarisLinkBuilder").buildMediaLink(d("PolarisDynamicExploreMediaHelpers").getPostCode(a))},o=!m.isLoading&&f.length===0,p=d("PolarisReactRedux").useSelector(function(a){return a.discoverChaining.token}),q=function(a,c){var e;return{analyticsContext:k,entityId:a.id.split("_")[1],entityName:(e=a.user)==null?void 0:e.username,entityPageId:g,entityPageName:b,entityPageType:d("PolarisSearchLogger").TYPE_MAP.KEYWORD_RESULT,entityType:a.user?"user":null,gridItemSize:c,mPk:a.id,mediaType:d("PolarisDynamicExploreMediaHelpers").getMediaType(a),rankToken:m==null?void 0:m.rankToken,row:a.row,column:a.column,searchSessionId:p}},r=function(a,b,c,e,f){d("PolarisExploreLogger").logKeywordExploreThumbnailClick(q(a,b))},s=c("gkx")("4813"),t=function(a,b){b=q(a,b);return d("PolarisOrganicThumbnailImpression").makeThumbnailImpressionAction(babelHelpers["extends"]({},b,{postId:(b=a.pk)!=null?b:""}))};o=i.jsxs(c("PolarisShell.react"),{mobileHeader:i.jsx(c("PolarisMobileKeywordSearchExploreHeader.react"),{keyword:b,keywordRefinements:a}),pageIdentifier:k,children:[i.jsx(c("PolarisPageMetadata.react"),{id:k,title:b!==null?b:l}),i.jsx(c("PolarisKeywordSearchExploreHeader.react"),{keyword:b}),o?i.jsx("div",{className:"x1iyjqo2",children:i.jsx(c("PolarisKeywordExploreNullStateView.react"),{})}):i.jsx(c("PolarisDynamicExplorePageContentWrapper.react"),{pageId:k,children:i.jsx(c("PolarisDynamicExplorePageSharedGrid.react"),{exploreGridQuery:b,exploreGridType:d("PolarisDynamicExploreTypes").DYNAMIC_EXPLORE_GRID_TYPES.keyword_grid,hasMobileHeaderWithRefinements:d("PolarisUA").isMobile()&&a.length>0,logGridItemClick:r,logGridItemImpression:s?t:void 0,mediaLinkBuilder:n,modalEntryPath:d("PolarisLinkBuilder").buildKeywordSearchExploreLink(b),onNextPage:h,pageID:k,pagination:m,requestInitialGrid:e,sectionalItems:f})})]});return c("PolarisConditionalPageLayoutHandler.react")!=null?i.jsx(c("PolarisConditionalPageLayoutHandler.react"),{mainComponent:o}):o}a.displayName=a.name+" [from "+f.id+"]";g.KeywordSearchExplorePage=a}),98);
__d("PolarisKeywordSearchExploreRoot.react",["PolarisKeywordSearchExplorePage.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.props.routeParams;return h.jsx(d("PolarisKeywordSearchExplorePage.react").KeywordSearchExplorePage,{keyword:a.q})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);