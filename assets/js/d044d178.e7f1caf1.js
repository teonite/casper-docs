"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2273],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1792:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={},s="The Chain Specification",p={unversionedId:"operators/setup-network/chain-spec",id:"operators/setup-network/chain-spec",title:"The Chain Specification",description:"the-chain-specification}",source:"@site/source/docs/casper/operators/setup-network/chain-spec.md",sourceDirName:"operators/setup-network",slug:"/operators/setup-network/chain-spec",permalink:"/operators/setup-network/chain-spec",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/operators/setup-network/chain-spec.md",tags:[],version:"current",lastUpdatedAt:1678121171,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Unbonding as a Validator",permalink:"/operators/becoming-a-validator/unbonding"},next:{title:"Set Up a Private Casper Network",permalink:"/operators/setup-network/create-private"}},l={},u=[{value:"chainspec.toml",id:"chainspectoml",level:2},{value:"accounts.toml",id:"accountstoml",level:2}],f={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-chain-specification"},"The Chain Specification"),(0,a.kt)("p",null,"The Casper node software creates a genesis block from the following input files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"chainspec.toml"),(0,a.kt)("li",{parentName:"ul"},"accounts.toml")),(0,a.kt)("h2",{id:"chainspectoml"},"chainspec.toml"),(0,a.kt)("p",null,"A version of the ",(0,a.kt)("a",{parentName:"p",href:"/concepts/glossary/C#chainspec"},"chainspec")," is downloaded by the ",(0,a.kt)("inlineCode",{parentName:"p"},"pull_casper_node_version.sh")," script installed with the casper-node-launcher debian package. This script pulls the chainspec.toml file from the appropriate path defined in the network config file used (",(0,a.kt)("inlineCode",{parentName:"p"},"casper.conf")," for MainNet and ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-test.conf")," for TestNet)."),(0,a.kt)("p",null,"The production version of the file from which this is based on can be found at ",(0,a.kt)("inlineCode",{parentName:"p"},"casper-node/resources/production/chainspec.toml")," in the code base. To create a custom network, this file can be updated as desired. Any changes to this file will result in a different genesis hash. Refer to the file itself for detailed documentation on each of the variables in the file."),(0,a.kt)("h2",{id:"accountstoml"},"accounts.toml"),(0,a.kt)("p",null,"This file contains the genesis validator set information, starting accounts and associated balances and bond amounts."),(0,a.kt)("p",null,"If an account is not bonded at genesis, specify a ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," for the bond amount."),(0,a.kt)("p",null,"Similar to the chainspec.toml, this is pulled from the appropriate path defined in the network config file used."))}h.isMDXComponent=!0}}]);