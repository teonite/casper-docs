"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9508],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2844:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4996),c=["components"],s={},l="Upgrading and Maintaining Smart Contracts",p={unversionedId:"developers/writing-onchain-code/upgrading-contracts",id:"developers/writing-onchain-code/upgrading-contracts",title:"Upgrading and Maintaining Smart Contracts",description:"Our smart contract packaging tools enable you to:",source:"@site/source/docs/casper/developers/writing-onchain-code/upgrading-contracts.md",sourceDirName:"developers/writing-onchain-code",slug:"/developers/writing-onchain-code/upgrading-contracts",permalink:"/developers/writing-onchain-code/upgrading-contracts",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/writing-onchain-code/upgrading-contracts.md",tags:[],version:"current",lastUpdatedAt:1709742245,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{},sidebar:"developers",previous:{title:"Testing Smart Contracts",permalink:"/developers/writing-onchain-code/testing-contracts"},next:{title:"Calling Contracts",permalink:"/developers/writing-onchain-code/calling-contracts"}},u={},d=[{value:"The Contract Package",id:"the-contract-package",level:2},{value:"Videos and Tutorials",id:"videos-and-tutorials",level:2},{value:"Maintaining a Contract",id:"maintaining-a-contract",level:2}],g={toc:d},h="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrading-and-maintaining-smart-contracts"},"Upgrading and Maintaining Smart Contracts"),(0,o.kt)("p",null,"Our smart contract packaging tools enable you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upgrade your contracts and specify how the state of the contract is managed"),(0,o.kt)("li",{parentName:"ul"},"Specify whether a contract is upgradable or immutable"),(0,o.kt)("li",{parentName:"ul"},"Version your contracts and deprecate old versions"),(0,o.kt)("li",{parentName:"ul"},"Set permissions around who can perform contract upgrades")),(0,o.kt)("h2",{id:"the-contract-package"},"The Contract Package"),(0,o.kt)("p",null,"When you upgrade a contract, you add a new contract version in a contract package. The versioning process is additive rather than an in-place replacement of an existing contract. The original version of the contract is still there, and you can enable certain versions for specific clients. You can also disable a contract version if needed. If you find that you need to use a disabled contract version, you may also re-enable it."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:(0,i.Z)("/image/package-representation.png"),alt:"package-representation",width:"400"})),(0,o.kt)("p",null,"The contract package is like a container for different contract versions, with functionality that can differ slightly or significantly among versions. The contract package is created when you install the contract on the blockchain."),(0,o.kt)("h2",{id:"videos-and-tutorials"},"Videos and Tutorials"),(0,o.kt)("p",null,"To learn more about versioning contracts, consult the following video, which builds upon the previous topics and videos in the ",(0,o.kt)("a",{parentName:"p",href:"/writing-contracts"},"Writing On-Chain Code")," documentation."),(0,o.kt)("p",{align:"center"},(0,o.kt)("iframe",{width:"400",height:"225",src:"https://www.youtube.com/embed?v=sUg0nh3K3iQ&list=PL8oWxbJ-csEqi5FP87EJZViE2aLz6X1Mj&index=10",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("p",null,"Or, for a different perspective, consult the ",(0,o.kt)("a",{parentName:"p",href:"/resources/tutorials/beginner/upgrade-contract"},"Smart Contract Upgrade Tutorial"),"."),(0,o.kt)("h2",{id:"maintaining-a-contract"},"Maintaining a Contract"),(0,o.kt)("p",null,"The contract maintenance process is generally covered through the contract upgrade process."),(0,o.kt)("p",null,"Only major version changes in the Casper node software would require specific contract maintenance since a node version has a one-to-one mapping with the contract version. Otherwise, minor contract version changes can be addressed through the contract upgrade process. At the moment, we are not anticipating major contract changes in the Casper Mainnet. Therefore, the contract upgrade process can cater to any minor contract maintenance."),(0,o.kt)("p",null,"On instances like new node version releases, type upgrades, and bug fixes, we advise you to adhere to the same contract upgrade process."))}f.isMDXComponent=!0}}]);