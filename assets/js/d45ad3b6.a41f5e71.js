"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3617],{3905:function(e,n,a){a.d(n,{Zo:function(){return l},kt:function(){return u}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function f(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},l=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},b="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=f(e,["components","mdxType","originalType","parentName"]),b=s(a),p=r,u=b["".concat(o,".").concat(p)]||b[p]||i[p]||c;return a?t.createElement(u,d(d({ref:n},l),{},{components:a})):t.createElement(u,d({ref:n},l))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,d=new Array(c);d[0]=p;var f={};for(var o in n)hasOwnProperty.call(n,o)&&(f[o]=n[o]);f.originalType=e,f[b]="string"==typeof e?e:r,d[1]=f;for(var s=2;s<c;s++)d[s]=a[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6607:function(e,n,a){a.r(n),a.d(n,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return f},metadata:function(){return s},toc:function(){return b}});var t=a(7462),r=a(3366),c=(a(7294),a(3905)),d=["components"],f={},o="Transactional JSON-RPC Methods",s={unversionedId:"developers/json-rpc/json-rpc-transactional",id:"developers/json-rpc/json-rpc-transactional",title:"Transactional JSON-RPC Methods",description:"transactional}",source:"@site/source/docs/casper/developers/json-rpc/json-rpc-transactional.md",sourceDirName:"developers/json-rpc",slug:"/developers/json-rpc/json-rpc-transactional",permalink:"/developers/json-rpc/json-rpc-transactional",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/json-rpc/json-rpc-transactional.md",tags:[],version:"current",lastUpdatedAt:1694784329,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"developers",previous:{title:"Required Methods for Minimal Compliance",permalink:"/developers/json-rpc/minimal-compliance"},next:{title:"Informational JSON-RPC Methods",permalink:"/developers/json-rpc/json-rpc-informational"}},l={},b=[{value:"account_put_deploy",id:"account-put-deploy",level:2},{value:"<code>account_put_deploy_result</code>",id:"account_put_deploy_result",level:3},{value:"speculative_exec",id:"speculative_exec",level:2},{value:"<code>speculative_exec_result</code>",id:"speculative_exec_result",level:3}],i={toc:b},p="wrapper";function u(e){var n=e.components,a=(0,r.Z)(e,d);return(0,c.kt)(p,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"transactional"},"Transactional JSON-RPC Methods"),(0,c.kt)("hr",null),(0,c.kt)("h2",{id:"account-put-deploy"},"account_put_deploy"),(0,c.kt)("p",null,"This is the only means by which users can send their compiled Wasm (as part of a Deploy) to a node on a Casper network. The request takes in the ",(0,c.kt)("a",{parentName:"p",href:"/concepts/design/casper-design/#execution-semantics-deploys"},"Deploy")," as a parameter, prior to sending it to a node on a network for execution."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#deploy"},"deploy")),(0,c.kt)("td",{parentName:"tr",align:null},"Object"),(0,c.kt)("td",{parentName:"tr",align:null},"A Deploy consists of an item containing a smart contract along with the requester's signature(s).")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Note"),": You can find a list of ",(0,c.kt)("a",{parentName:"p",href:"/operators/setup/joining/#known-addresses"},"trusted peers")," in the network's configuration file, ",(0,c.kt)("inlineCode",{parentName:"p"},"config.toml"),". Here is an ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/dev/resources/production/config-example.toml#L131"},"example config.toml"),". You may send deploys to one of the trusted nodes or use them to query other online nodes.")),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Example account_put_deploy request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "method": "account_put_deploy",\n  "params": [\n    {\n      "approvals": [\n        {\n          "signature": "014c1a89f92e29dd74fc648f741137d9caf4edba97c5f9799ce0c9aa6b0c9b58db368c64098603dbecef645774c05dff057cb1f91f2cf390bbacce78aa6f084007",\n          "signer": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c"\n        }\n      ],\n      "hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa",\n      "header": {\n        "account": "01d9bf2148748a85c89da5aad8ee0b0fc2d105fd39d41a4c796536354f0ae2900c",\n        "body_hash": "d53cf72d17278fd47d399013ca389c50d589352f1a12593c0b8e01872a641b50",\n        "chain_name": "casper-example",\n        "dependencies": [\n          "0101010101010101010101010101010101010101010101010101010101010101"\n        ],\n        "gas_price": 1,\n        "timestamp": "2020-11-17T00:39:24.072Z",\n        "ttl": "1h"\n      },\n      "payment": {\n        "StoredContractByName": {\n          "args": [\n            [\n              "amount",\n              {\n                "bytes": "e8030000",\n                "cl_type": "I32",\n                "parsed": 1000\n              }\n            ]\n          ],\n          "entry_point": "example-entry-point",\n          "name": "casper-example"\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "bytes": "e8030000",\n                "cl_type": "I32",\n                "parsed": 1000\n              }\n            ]\n          ]\n        }\n      }\n    }\n  ]\n}\n\n'))),(0,c.kt)("h3",{id:"account_put_deploy_result"},(0,c.kt)("inlineCode",{parentName:"h3"},"account_put_deploy_result")),(0,c.kt)("p",null,"The result contains the ",(0,c.kt)("a",{parentName:"p",href:"/developers/json-rpc/types_chain#deployhash"},"deploy_hash"),", which is the primary identifier of a Deploy within a Casper network."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"api_version"),(0,c.kt)("td",{parentName:"tr",align:null},"String"),(0,c.kt)("td",{parentName:"tr",align:null},"The RPC API version.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#deployhash"},"deploy_hash")),(0,c.kt)("td",{parentName:"tr",align:null},"String"),(0,c.kt)("td",{parentName:"tr",align:null},"A hex-encoded hash of the Deploy as sent.")))),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Example account_put_deploy result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 1,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.13",\n    "deploy_hash": "5c9b3b099c1378aa8e4a5f07f59ff1fcdc69a83179427c7e67ae0377d94d93fa"\n  }\n}\n\n'))),(0,c.kt)("h2",{id:"speculative_exec"},"speculative_exec"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"speculative_exec")," endpoint provides a method to execute a ",(0,c.kt)("inlineCode",{parentName:"p"},"Deploy")," without committing its execution effects to global state. By default, ",(0,c.kt)("inlineCode",{parentName:"p"},"speculative_exec")," is disabled on a node. Sending a request to a node with the endpoint disabled will result in an error message. If enabled, ",(0,c.kt)("inlineCode",{parentName:"p"},"speculative_exec")," operates on a separate port from the primary JSON-RPC, using 7778."),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"speculative_exec")," executes a Deploy at a specified block. In the case of this endpoint, the execution effects are not committed to global state. As such, it can be used for observing the execution effects of a Deploy without paying for the execution of the Deploy."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#blockidentifier"},"block_identifier")),(0,c.kt)("td",{parentName:"tr",align:null},"Object"),(0,c.kt)("td",{parentName:"tr",align:null},"The block hash or height on top of which to execute the deploy. If not supplied,the most recent block will be used.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#deploy"},"deploy")),(0,c.kt)("td",{parentName:"tr",align:null},"Object"),(0,c.kt)("td",{parentName:"tr",align:null},"A Deploy consists of an item containing a smart contract along with the requester's signature(s).")))),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Example speculative_exec request"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "jsonrpc": "2.0",\n  "method": "speculative_exec",\n  "params": {\n    "block_identifier": null,\n    "deploy": {\n      "hash": "b6aa46333fb858deee7f259a5bca581251c6200a5d902aeb1244c3a7169b5971",\n      "header": {\n        "account": "01a2905e4680aa49e0b44100d9dfc861b9605bb35f9956b1e99eb43863363d80aa",\n        "timestamp": "2023-05-23T13:32:45.554Z",\n        "ttl": "30m",\n        "gas_price": 1,\n        "body_hash": "74db109805bb20de43ef89a5b084544a858908b236601519d5827cd9b7fbb925",\n        "dependencies": [],\n        "chain_name": "integration-test"\n      },\n      "payment": {\n        "ModuleBytes": {\n          "module_bytes": "",\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400e1f505",\n                "parsed": "100000000"\n              }\n            ]\n          ]\n        }\n      },\n      "session": {\n        "Transfer": {\n          "args": [\n            [\n              "amount",\n              {\n                "cl_type": "U512",\n                "bytes": "0400f90295",\n                "parsed": "2500000000"\n              }\n            ],\n            [\n              "target",\n              {\n                "cl_type": "PublicKey",\n                "bytes": "01265ea737411b349ad3d0fc724c2c588acd2765c057e5c690cd5e3dade401782b",\n                "parsed": "01265ea737411b349ad3d0fc724c2c588acd2765c057e5c690cd5e3dade401782b"\n              }\n            ],\n            [\n              "id",\n              {\n                "cl_type": {\n                  "Option": "U64"\n                },\n                "bytes": "010000000000000000",\n                "parsed": 0\n              }\n            ]\n          ]\n        }\n      },\n      "approvals": [\n        {\n          "signer": "01a2905e4680aa49e0b44100d9dfc861b9605bb35f9956b1e99eb43863363d80aa",\n          "signature": "01c94d517d5bbc8d5c74e0e68b8cb308561ff979a1c91907b56d427cc90156c437726c0b736d17f7303f2db66e405c7e5c8175b8b863703938eff1659766dff808"\n        }\n      ]\n    }\n  },\n  "id": 6889533540839698701\n}\n\n'))),(0,c.kt)("h3",{id:"speculative_exec_result"},(0,c.kt)("inlineCode",{parentName:"h3"},"speculative_exec_result")),(0,c.kt)("p",null,"The result contains the hash of the targeted block and the results of the execution."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"api_version"),(0,c.kt)("td",{parentName:"tr",align:null},"String"),(0,c.kt)("td",{parentName:"tr",align:null},"The RPC API version.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#blockhash"},"block_hash")),(0,c.kt)("td",{parentName:"tr",align:null},"Object"),(0,c.kt)("td",{parentName:"tr",align:null},"The Block hash on top of which the deploy was executed.")),(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"/developers/json-rpc/types_chain#executionresult"},"execution_results")),(0,c.kt)("td",{parentName:"tr",align:null},"Object"),(0,c.kt)("td",{parentName:"tr",align:null},"The map of Block hash to execution result.")))),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Example speculative_exec result"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "jsonrpc": "2.0",\n  "id": -8801853076373554652,\n  "result": {\n    "api_version": "1.5.0",\n    "block_hash": "ff862326b08702a5089d64e32100537b7ff984cac4c0ba6d1c561f7c47125f76",\n    "execution_result": {\n      "Success": {\n        "effect": {\n          "operations": [],\n          "transforms": [\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-0a300922655180354a9ee92b808c7b45b08e5b01d9da0bac9a9b3415bcebbf8d",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "05f0e630ed87",\n                  "parsed": "583799990000"\n                }\n              }\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": {\n                "AddUInt512": "100000000"\n              }\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-0a300922655180354a9ee92b808c7b45b08e5b01d9da0bac9a9b3415bcebbf8d",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "05f0e630ed87",\n                  "parsed": "583799990000"\n                }\n              }\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": {\n                "AddUInt512": "100000000"\n              }\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-92ec6dfbdf151e20b55c89e0a327959cf6e5b091c5f2b39201c1858e2943f3bd",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "05f0ed2d5887",\n                  "parsed": "581299990000"\n                }\n              }\n            },\n            {\n              "key": "balance-92ec6dfbdf151e20b55c89e0a327959cf6e5b091c5f2b39201c1858e2943f3bd",\n              "transform": {\n                "AddUInt512": "2500000000"\n              }\n            },\n            {\n              "key": "transfer-97426c848475dae98446f2c2fd00ec7901cd8ddfe250171ff4ed25d78412a612",\n              "transform": {\n                "WriteTransfer": {\n                  "deploy_hash": "d898910011b1f2f8797a442740e69cd5de41b9f796e658e962a24663e6199e5a",\n                  "from": "account-hash-0a9b33af5108c5a6e1067b0ddec6853ce1745d591375d767ac5db680d21845e7",\n                  "to": "account-hash-f466e7f5f9240fb577d1d4c650c4063752553406dff7aa24b4822ba2b72e5b65",\n                  "source": "uref-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678-007",\n                  "target": "uref-92ec6dfbdf151e20b55c89e0a327959cf6e5b091c5f2b39201c1858e2943f3bd-004",\n                  "amount": "2500000000",\n                  "gas": "0",\n                  "id": 0\n                }\n              }\n            },\n            {\n              "key": "deploy-d898910011b1f2f8797a442740e69cd5de41b9f796e658e962a24663e6199e5a",\n              "transform": {\n                "WriteDeployInfo": {\n                  "deploy_hash": "d898910011b1f2f8797a442740e69cd5de41b9f796e658e962a24663e6199e5a",\n                  "transfers": [\n                    "transfer-97426c848475dae98446f2c2fd00ec7901cd8ddfe250171ff4ed25d78412a612"\n                  ],\n                  "from": "account-hash-0a9b33af5108c5a6e1067b0ddec6853ce1745d591375d767ac5db680d21845e7",\n                  "source": "uref-7c25ef9382fcae902b922866434f7111a1b34534323e93ff5bf22f1a401c2678-007",\n                  "gas": "100000000"\n                }\n              }\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-0a300922655180354a9ee92b808c7b45b08e5b01d9da0bac9a9b3415bcebbf8d",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-d2dfc9409965993f9e186db762b585274dcafe439fa1321cfca08017262c8e46",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-59c6451dd58463708fa0b122e97114f07fa5f609229c9d67ac9426935416fbeb",\n              "transform": "Identity"\n            },\n            {\n              "key": "hash-f8df015ba26860a7ec8cab4ee99f079325b0bbb9ef0e7810b63d85df39da95fe",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ecc530e74cf2185936a334aa1e0f07539aa3b33c4b547e71fc4109151755652f",\n              "transform": "Identity"\n            },\n            {\n              "key": "balance-ea3c9bdcbe57f067a29609d397981b2d0fb39853a0a9f06e444b06404eadcb1a",\n              "transform": {\n                "WriteCLValue": {\n                  "cl_type": "U512",\n                  "bytes": "00",\n                  "parsed": "0"\n                }\n              }\n            },\n            {\n              "key": "balance-ecc530e74cf2185936a334aa1e0f07539aa3b33c4b547e71fc4109151755652f",\n              "transform": {\n                "AddUInt512": "100000000"\n              }\n            }\n          ]\n        },\n        "transfers": [\n          "transfer-97426c848475dae98446f2c2fd00ec7901cd8ddfe250171ff4ed25d78412a612"\n        ],\n        "cost": "100000000"\n      }\n    }\n  }\n}\n\n'))))}u.isMDXComponent=!0}}]);