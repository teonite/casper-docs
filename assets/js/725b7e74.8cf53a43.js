"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6958],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[d]="string"==typeof e?e:s,r[1]=c;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5453:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var a=t(7462),s=t(3366),o=(t(7294),t(3905)),r=["components"],c={title:"Additional Examples"},i="Additional Examples",u={unversionedId:"resources/advanced/multi-sig/other-scenarios",id:"resources/advanced/multi-sig/other-scenarios",title:"Additional Examples",description:"This section presents examples of single and multi-signature schemes, where accounts have multiple associated keys and thresholds for signing transactions.",source:"@site/source/docs/casper/resources/advanced/multi-sig/other-scenarios.md",sourceDirName:"resources/advanced/multi-sig",slug:"/resources/advanced/multi-sig/other-scenarios",permalink:"/resources/advanced/multi-sig/other-scenarios",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/advanced/multi-sig/other-scenarios.md",tags:[],version:"current",lastUpdatedAt:1709742245,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"Additional Examples"},sidebar:"resources",previous:{title:"Multi-Sig Workflow",permalink:"/resources/advanced/multi-sig/multi-sig-workflow"},next:{title:"Runtime Return Values",permalink:"/resources/tutorials/advanced/return-values-tutorial"}},l={},d=[{value:"Example 1: An account with a single (primary) key",id:"example-1-an-account-with-a-single-primary-key",level:3},{value:"Example 2: An account with primary and associated keys",id:"example-2-an-account-with-primary-and-associated-keys",level:3},{value:"Example 3: Multi-sig setup for deploys and account updates",id:"example-3-multi-sig-setup-for-deploys-and-account-updates",level:3},{value:"Example 4: Signing deploys but restricting account updates",id:"example-4-signing-deploys-but-restricting-account-updates",level:3},{value:"Example 5: Recovering a lost primary key",id:"example-5-recovering-a-lost-primary-key",level:3}],p={toc:d},m="wrapper";function h(e){var n=e.components,t=(0,s.Z)(e,r);return(0,o.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"additional-examples"},"Additional Examples"),(0,o.kt)("p",null,"This section presents examples of single and multi-signature schemes, where accounts have multiple associated keys and thresholds for signing transactions."),(0,o.kt)("h3",{id:"example-1-an-account-with-a-single-primary-key"},"Example 1: An account with a single (primary) key"),(0,o.kt)("p",null,"In this example, only one key (",(0,o.kt)("inlineCode",{parentName:"p"},"account-hash-a1\u2026"),") can sign transactions in the name of this account. This key is the primary key of the account and has a ",(0,o.kt)("inlineCode",{parentName:"p"},"weight")," equal to 1. For deployments or key management, the weight required is also 1. Therefore, the key meets the deployment and key management thresholds and can perform both actions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account details in example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Account": {\n   "account_address": "account-hash-a1\u2026",\n      "action_thresholds": {\n         "deployment": 1,\n         "key_management": 1\n   },\n   "associated_keys": [\n      {\n         "account_address": "account-hash-a1\u2026", // primary key\n         "weight": 1\n      }\n   ],\n   "main_purse": "uref-1234\u2026",\n   "named_keys": []\n}\n')),(0,o.kt)("h3",{id:"example-2-an-account-with-primary-and-associated-keys"},"Example 2: An account with primary and associated keys"),(0,o.kt)("p",null,"In this example, the account has a primary key with weight 2 and an associated key with a lower weight for signing deploys. The primary key can perform account updates and deploys, while the associated key can only sign deploys."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account details in example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Account": {\n   "account_address": "account-hash-a1\u2026",\n   "action_thresholds": {\n         "deployment": 1,\n         "key_management": 2\n   },\n   "associated_keys": [\n      {\n         "account_address": "account-hash-a1\u2026", // primary key for key management\n         "weight": 2\n      },\n      {\n         "account_address": "account-hash-b2\u2026", // associated key used for deploys\n         "weight": 1\n      }\n   ],\n   "main_purse": "uref-1234\u2026",\n   "named_keys": []\n}\n')),(0,o.kt)("h3",{id:"example-3-multi-sig-setup-for-deploys-and-account-updates"},"Example 3: Multi-sig setup for deploys and account updates"),(0,o.kt)("p",null,"The following account has associated keys that can manage the account and send deploys independently of the primary key. The two associated keys have a cumulative weight of 2, which meets the deployment and key management thresholds. Both keys must sign the deploy to make updates."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account details in example 3:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Account": {\n   "account_address": "account-hash-a1\u2026",\n   "action_thresholds": {\n      "deployment": 2,\n      "key_management": 2\n   },\n   "associated_keys": [\n      {\n         "account_address": "account-hash-a1\u2026", // primary key\n         "weight": 2\n      },\n      {\n         "account_address": "account-hash-b2\u2026", // associated key\n         "weight": 1\n      },\n      {\n         "account_address": "account-hash-c3\u2026", // associated key\n         "weight": 1\n      }\n   ],\n   "main_purse": "uref-1234\u2026",\n   "named_keys": []\n}\n')),(0,o.kt)("h3",{id:"example-4-signing-deploys-but-restricting-account-updates"},"Example 4: Signing deploys but restricting account updates"),(0,o.kt)("p",null,"This scenario builds on the previous example. The account has a primary key with a weight of 3, equal to the key management threshold, and two associated keys with a cumulative weight of 2, for signing deploys. The associated keys can sign deploys but not make account updates because they do not meet the key management threshold. Only the primary key can update the account. If the primary key is lost or compromised, the entire account becomes compromised because the associated keys do not have enough cumulative weight to remove the compromised key."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account details in example 4:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Account": {\n   "account_address": "account-hash-a1\u2026",\n   "action_thresholds": {\n      "deployment": 2,\n      "key_management": 3\n   },\n   "associated_keys": [\n      {\n         "account_address": "account-hash-a1\u2026", // primary key\n         "weight": 3\n      },\n      {\n         "account_address": "account-hash-b2\u2026", // associated key\n         "weight": 1\n      },\n      {\n         "account_address": "account-hash-c3\u2026", // associated key\n         "weight": 1\n      }\n   ],\n   "main_purse": "uref-1234\u2026",\n   "named_keys": []\n}\n')),(0,o.kt)("h3",{id:"example-5-recovering-a-lost-primary-key"},"Example 5: Recovering a lost primary key"),(0,o.kt)("p",null,"This account has a primary key with a weight of 3, equal to the key management threshold, and three associated keys with a cumulative weight of 3. Two associated keys can combine their weight to sign deploys. All three associated keys can combine their weight to make account updates. If the primary key is lost or compromised, the associated keys can remove it and secure the account."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account details in example 5:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"Account": {\n   "account_address": "account-hash-a1\u2026",\n   "action_thresholds": {\n      "deployment": 2,\n      "key_management": 3\n   },\n   "associated_keys": [\n      {\n         "account_address": "account-hash-a1\u2026", // primary key\n         "weight": 3\n      },\n      {\n         "account_address": "account-hash-b2\u2026", // associated key\n         "weight": 1\n      },\n      {\n         "account_address": "account-hash-c3\u2026", // associated key\n         "weight": 1\n      },\n      {\n         "account_address": "account-hash-d4\u2026", // associated key\n         "weight": 1\n      }\n   ],\n   "main_purse": "uref-1234\u2026",\n   "named_keys": []\n}\n')))}h.isMDXComponent=!0}}]);