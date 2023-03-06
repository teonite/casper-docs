"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[263],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7113:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={},p="Required Methods for Minimal Compliance",l={unversionedId:"developers/json-rpc/minimal-compliance",id:"developers/json-rpc/minimal-compliance",title:"Required Methods for Minimal Compliance",description:"The methods included in this document represent the most basic, fundamental endpoints for a viable and compliant Casper SDK. They allow the user to retrieve the information necessary to interact with a Casper network, as well as the means to interact.",source:"@site/source/docs/casper/developers/json-rpc/minimal-compliance.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/minimal-compliance",permalink:"/developers/json-rpc/minimal-compliance",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/json-rpc/minimal-compliance.md",tags:[],version:"current",lastUpdatedAt:1678121171,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Guidance for JSON-RPC SDK Compliance",permalink:"/developers/json-rpc/guidance"},next:{title:"Transactional JSON-RPC Method",permalink:"/developers/json-rpc/json-rpc-transactional"}},c={},m=[],d={toc:m},u="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"required-methods-for-minimal-compliance"},"Required Methods for Minimal Compliance"),(0,o.kt)("p",null,"The methods included in this document represent the most basic, fundamental endpoints for a viable and compliant Casper SDK. They allow the user to retrieve the information necessary to interact with a Casper network, as well as the means to interact."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational#chain-get-block"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_get_block"))," - This method returns the JSON representation of a Block from the network. The ongoing validity of the chain depends on block verification, which includes both a record of deploys and transfers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational#info-get-deploy"},(0,o.kt)("inlineCode",{parentName:"a"},"info_get_deploy"))," - This method allows retrieval of a Deploy from a Casper network. Without this method, users will be unable to verify any subsequent information relating to a sent Deploy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-transactional#account-put-deploy"},(0,o.kt)("inlineCode",{parentName:"a"},"account_put_deploy"))," - This method allows users to send their compiled Wasm (as part of a Deploy) to a node on a Casper network. Deploys represent the only means by which a user can perform computation on the platform, without which their interaction with a Casper network will be entirely passive.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational#chain-get-state-root-hash"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_get_state_root_hash"))," - The state root hash is one of the several ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#globalstateidentifier"},"global state identifiers")," used to query the network state after deployments, and the only way to do so in the context of ",(0,o.kt)("inlineCode",{parentName:"p"},"state_get_balance")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"state_get_dictionary_item"),". A minimal SDK requires both dependent methods.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational#state-get-account-info"},(0,o.kt)("inlineCode",{parentName:"a"},"state_get_account_info"))," - This method returns a JSON representation of an Account from the network. ",(0,o.kt)("inlineCode",{parentName:"p"},"state_get_account_info")," is required to view associated account information, including any associated keys, named keys, action thresholds and the main purse.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational#state-get-balance"},(0,o.kt)("inlineCode",{parentName:"a"},"state_get_balance"))," - This method returns a purse's balance from a network. This is the only method to return a purse's balance in a human-readable format.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational#state-get-dictionary-item"},(0,o.kt)("inlineCode",{parentName:"a"},"state_get_dictionary_item"))," - This method returns an item from a Dictionary. Dictionaries represent a more efficient means of tracking large amounts of state.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/json-rpc-informational#query-global-state"},(0,o.kt)("inlineCode",{parentName:"a"},"query_global_state"))," - This method allows for querying values stored under certain keys in global state. Aside from purse balances, this is the main means of recovering stored data from a Casper network."))),(0,o.kt)("p",null,"In addition to these methods, a minimally compliant Casper SDK must account for the ",(0,o.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain"},"types")," associated with each method. Each method above links to the expanded information available within the larger JSON RPC method pages, which includes the necessary associated types."))}h.isMDXComponent=!0}}]);