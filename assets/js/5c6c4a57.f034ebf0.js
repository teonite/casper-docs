"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2570],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,s=k["".concat(p,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},4:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"OpCode Costs Tables"},p="OpCode Costs Tables",d={unversionedId:"developers/cli/opcode-costs",id:"developers/cli/opcode-costs",title:"OpCode Costs Tables",description:"The following tables outline the cost, in motes, for a given operation on Casper's Mainnet. If you are building for a private network or other instance of Casper, you will need to verify these costs in the associated chainspec.toml.",source:"@site/source/docs/casper/developers/cli/opcode-costs.md",sourceDirName:"developers/cli",slug:"/developers/cli/opcode-costs",permalink:"/developers/cli/opcode-costs",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/developers/cli/opcode-costs.md",tags:[],version:"current",lastUpdatedAt:1701096128,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"OpCode Costs Tables"},sidebar:"developers",previous:{title:"Calling Contracts",permalink:"/developers/cli/calling-contracts"},next:{title:"Execution Error Codes",permalink:"/developers/cli/execution-error-codes"}},m={},k=[{value:"Storage Costs",id:"storage-costs",level:2},{value:"OpCode Costs",id:"opcode-costs",level:2},{value:"Control Flow Operation Costs",id:"control-flow-operation-costs",level:2},{value:"<code>Br_Table</code> OpCode Costs",id:"br_table-opcode-costs",level:2},{value:"External Function Costs",id:"external-function-costs",level:2},{value:"Protocol Operating Costs",id:"protocol-operating-costs",level:2},{value:"<code>Auction</code> System Contract Costs",id:"auction-system-contract-costs",level:3},{value:"<code>Mint</code> System Contract Costs",id:"mint-system-contract-costs",level:3},{value:"<code>Handle_Payment</code> System Contract Costs",id:"handle_payment-system-contract-costs",level:3},{value:"<code>Standard_Payment</code> System Contract Costs",id:"standard_payment-system-contract-costs",level:3}],u={toc:k},N="wrapper";function s(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(N,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"opcode-costs-tables"},"OpCode Costs Tables"),(0,l.kt)("p",null,"The following tables outline the cost, in motes, for a given operation on Casper's Mainnet. If you are building for a private network or other instance of Casper, you will need to verify these costs in the associated ",(0,l.kt)("inlineCode",{parentName:"p"},"chainspec.toml"),"."),(0,l.kt)("p",null,"More information on ",(0,l.kt)("inlineCode",{parentName:"p"},"chainspec"),"s for private networks can be found ",(0,l.kt)("a",{parentName:"p",href:"/operators/setup-network/chain-spec"},"here")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"All costs in this table are in ",(0,l.kt)("a",{parentName:"p",href:"/concepts/glossary/M/#motes"},"motes"),", not CSPR, and the corresponding chainspec is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/casper-network/casper-node/blob/53dd33865c2707c29284ccc0e8485f22ddd6fbe3/resources/production/chainspec.toml#L129"},"here"),".")),(0,l.kt)("h2",{id:"storage-costs"},"Storage Costs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gas_per_byte"),(0,l.kt)("td",{parentName:"tr",align:null},"Gas charged per byte stored in global state."),(0,l.kt)("td",{parentName:"tr",align:null},"630,000")))),(0,l.kt)("h2",{id:"opcode-costs"},"OpCode Costs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bit"),(0,l.kt)("td",{parentName:"tr",align:null},"Bit operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"add"),(0,l.kt)("td",{parentName:"tr",align:null},"Arithmetic add operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"210")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mul"),(0,l.kt)("td",{parentName:"tr",align:null},"Mul operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"240")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"div"),(0,l.kt)("td",{parentName:"tr",align:null},"Div operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"320")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory load operation multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"2_500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"store"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory store operation multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"4,700")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const"),(0,l.kt)("td",{parentName:"tr",align:null},"Const store operation multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"110")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local"),(0,l.kt)("td",{parentName:"tr",align:null},"Local operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"390")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"global"),(0,l.kt)("td",{parentName:"tr",align:null},"Global operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"390")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"integer_comparison"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"250")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"conversion"),(0,l.kt)("td",{parentName:"tr",align:null},"Conversion operations multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"420")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unreachable"),(0,l.kt)("td",{parentName:"tr",align:null},"Unreachable operation multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"270")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nop"),(0,l.kt)("td",{parentName:"tr",align:null},"Nop operation multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"current_memory"),(0,l.kt)("td",{parentName:"tr",align:null},"Get the current memory operation multiplier."),(0,l.kt)("td",{parentName:"tr",align:null},"290")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"grow_memory"),(0,l.kt)("td",{parentName:"tr",align:null},"Grow memory cost per page (64 kB)."),(0,l.kt)("td",{parentName:"tr",align:null},"240,000")))),(0,l.kt)("h2",{id:"control-flow-operation-costs"},"Control Flow Operation Costs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"block"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"block")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loop"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"loop")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"if"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"if")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"else"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"else")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"end")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"br"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"br")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"35_000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"br_if"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"br_if")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"35,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"return"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"return")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"select")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"call"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"call")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"68_000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"call_indirect"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"call_indirect")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"68,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"drop"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost for ",(0,l.kt)("inlineCode",{parentName:"td"},"drop")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"440")))),(0,l.kt)("h2",{id:"br_table-opcode-costs"},(0,l.kt)("inlineCode",{parentName:"h2"},"Br_Table")," OpCode Costs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cost"),(0,l.kt)("td",{parentName:"tr",align:null},"Fixed cost per ",(0,l.kt)("inlineCode",{parentName:"td"},"br_table")," opcode."),(0,l.kt)("td",{parentName:"tr",align:null},"35,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size_multiplier"),(0,l.kt)("td",{parentName:"tr",align:null},"Size of target labels in the ",(0,l.kt)("inlineCode",{parentName:"td"},"br_table")," opcode will be multiplied by ",(0,l.kt)("inlineCode",{parentName:"td"},"size_multiplier"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"100")))),(0,l.kt)("h2",{id:"external-function-costs"},"External Function Costs"),(0,l.kt)("p",null,'The following costs are for low-level bindings for host-side ("external") functions. More information on the Casper external FFI can be found ',(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/casper-contract/latest/casper_contract/ext_ffi/index.html"},"here"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Host-Side Function"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"),(0,l.kt)("th",{parentName:"tr",align:null},"Arguments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"add"),(0,l.kt)("td",{parentName:"tr",align:null},"5,800"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"add_associated_key"),(0,l.kt)("td",{parentName:"tr",align:null},"9,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"add_contract_version"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blake2b"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"call_contract"),(0,l.kt)("td",{parentName:"tr",align:null},"4,500"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 420, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"call_versioned_contract"),(0,l.kt)("td",{parentName:"tr",align:null},"4,500"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 0, 0, 420, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_contract_package_at_hash"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_contract_user_group"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_purse"),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disable_contract_version"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_balance"),(0,l.kt)("td",{parentName:"tr",align:null},"3,800"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_blocktime"),(0,l.kt)("td",{parentName:"tr",align:null},"330"),(0,l.kt)("td",{parentName:"tr",align:null},"[0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_caller"),(0,l.kt)("td",{parentName:"tr",align:null},"380"),(0,l.kt)("td",{parentName:"tr",align:null},"[0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_key"),(0,l.kt)("td",{parentName:"tr",align:null},"2,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 440, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_main_purse"),(0,l.kt)("td",{parentName:"tr",align:null},"1,300"),(0,l.kt)("td",{parentName:"tr",align:null},"[0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_named_arg"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_named_arg_size"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_phase"),(0,l.kt)("td",{parentName:"tr",align:null},"710"),(0,l.kt)("td",{parentName:"tr",align:null},"[0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_system_contract"),(0,l.kt)("td",{parentName:"tr",align:null},"1,100"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"has_key"),(0,l.kt)("td",{parentName:"tr",align:null},"1,500"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 840]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_valid_uref"),(0,l.kt)("td",{parentName:"tr",align:null},"760"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"load_named_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"42,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"new_uref"),(0,l.kt)("td",{parentName:"tr",align:null},"17,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 590]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"random_bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"print"),(0,l.kt)("td",{parentName:"tr",align:null},"20,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 4,600]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"provision_contract_user_group_uref"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"put_key"),(0,l.kt)("td",{parentName:"tr",align:null},"38,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 1,100, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read_host_buffer"),(0,l.kt)("td",{parentName:"tr",align:null},"3,500"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 310, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read_value"),(0,l.kt)("td",{parentName:"tr",align:null},"6,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read_value_local"),(0,l.kt)("td",{parentName:"tr",align:null},"5,500"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 590, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove_associated_key"),(0,l.kt)("td",{parentName:"tr",align:null},"4,200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove_contract_user_group"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove_contract_user_group_urefs"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remove_key"),(0,l.kt)("td",{parentName:"tr",align:null},"61,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 3,200]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ret"),(0,l.kt)("td",{parentName:"tr",align:null},"23,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 420,000]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"revert"),(0,l.kt)("td",{parentName:"tr",align:null},"500"),(0,l.kt)("td",{parentName:"tr",align:null},"[0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set_action_threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"74,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transfer_from_purse_to_account"),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transfer_from_purse_to_purse"),(0,l.kt)("td",{parentName:"tr",align:null},"82,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transfer_to_account"),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 0, 0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"update_associated_key"),(0,l.kt)("td",{parentName:"tr",align:null},"4,200"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write"),(0,l.kt)("td",{parentName:"tr",align:null},"14,000"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 0, 0, 980]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"write_local"),(0,l.kt)("td",{parentName:"tr",align:null},"9,500"),(0,l.kt)("td",{parentName:"tr",align:null},"[0, 1,800, 0, 520]")))),(0,l.kt)("h2",{id:"protocol-operating-costs"},"Protocol Operating Costs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wasmless_transfer_cost"),(0,l.kt)("td",{parentName:"tr",align:null},"Default gas cost for a wasmless transfer."),(0,l.kt)("td",{parentName:"tr",align:null},"100,000,000")))),(0,l.kt)("h3",{id:"auction-system-contract-costs"},(0,l.kt)("inlineCode",{parentName:"h3"},"Auction")," System Contract Costs"),(0,l.kt)("p",null,"These are the costs of calling ",(0,l.kt)("inlineCode",{parentName:"p"},"auction")," system contract entrypoints."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_era_validators"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"get_era_validators")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read_seigniorage_recipients"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"read_seigniorage_recipients")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"add_bid"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"add_bid")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"withdraw_bid"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"withdraw_bid")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delegate"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"delegate")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"undelegate"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"undelegate")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run_auction"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"run_auction")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"slash"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"slash")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distribute"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"distribute")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"withdraw_delegator_reward"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"withdraw_delegator_reward")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"withdraw_validator_reward"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"withdraw_validator_reward")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read_era_id"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"read_era_id")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"activate_bid"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"activate_bid")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"redelegate"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"redelegate")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")))),(0,l.kt)("h3",{id:"mint-system-contract-costs"},(0,l.kt)("inlineCode",{parentName:"h3"},"Mint")," System Contract Costs"),(0,l.kt)("p",null,"These are the costs of calling ",(0,l.kt)("inlineCode",{parentName:"p"},"mint")," system contract entrypoints."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mint"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"mint")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reduce_total_supply"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"reduce_total_supply")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"create")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"balance"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"balance")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transfer"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"transfer")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"read_base_round_reward"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"read_base_round_reward")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mint_into_existing_purse"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"mint_into_existing_purse")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"2,500,000,000")))),(0,l.kt)("h3",{id:"handle_payment-system-contract-costs"},(0,l.kt)("inlineCode",{parentName:"h3"},"Handle_Payment")," System Contract Costs"),(0,l.kt)("p",null,"These are the costs of calling entrypoints on the ",(0,l.kt)("inlineCode",{parentName:"p"},"handle_payment")," system contract."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_payment_purse"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"get_payment_purse")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"set_refund_purse"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"set_refund_purse")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get_refund_purse"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"get_refund_purse")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"finalize_payment"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"finalize_payment")," entrypoint."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")))),(0,l.kt)("h3",{id:"standard_payment-system-contract-costs"},(0,l.kt)("inlineCode",{parentName:"h3"},"Standard_Payment")," System Contract Costs"),(0,l.kt)("p",null,"These settings manage the costs of calling entrypoints on the ",(0,l.kt)("inlineCode",{parentName:"p"},"standard_payment")," system contract."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Entrypoint"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Cost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pay"),(0,l.kt)("td",{parentName:"tr",align:null},"Cost of calling the ",(0,l.kt)("inlineCode",{parentName:"td"},"pay")," entrypoint and sending an amount to a payment purse."),(0,l.kt)("td",{parentName:"tr",align:null},"10,000")))))}s.isMDXComponent=!0}}]);