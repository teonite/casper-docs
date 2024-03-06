"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5036],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=(n(4996),["components"]),i={title:"Fungible Tokens",slug:"/resources/tutorials/beginner/cep18"},s="Fungible Tokens (CEP-18) Implementation and Usage",p={unversionedId:"resources/beginner/cep18",id:"resources/beginner/cep18",title:"Fungible Tokens",description:"This tutorial assumes that you have worked through the following examples. If you have not already done so, then we recommend that you do so now:",source:"@site/source/docs/casper/resources/beginner/cep18.md",sourceDirName:"resources/beginner",slug:"/resources/tutorials/beginner/cep18",permalink:"/resources/tutorials/beginner/cep18",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/dev/source/docs/casper/resources/beginner/cep18.md",tags:[],version:"current",lastUpdatedAt:1709742245,formattedLastUpdatedAt:"Mar 6, 2024",frontMatter:{title:"Fungible Tokens",slug:"/resources/tutorials/beginner/cep18"},sidebar:"resources",previous:{title:"Contract Upgrades",permalink:"/resources/tutorials/beginner/upgrade-contract"},next:{title:"AWS Casper Nodes",permalink:"/resources/tutorials/beginner/aws-node"}},c={},d=[{value:"Outline of the Tutorial",id:"outline",level:2},{value:"ERC-20 Standard",id:"erc20-standard",level:2},{value:"Interaction of ERC-20 Based Tokens with the Uniswap Standard",id:"erc20-uniswap",level:2},{value:"ERC-20 Implementations on Casper and Implications for Decentralized Exchanges",id:"erc20-implications",level:2},{value:"The Casper CEP-18 Standard",id:"cep18-standard",level:2},{value:"Creating a CEP-18 Token on the Testnet",id:"cep18-testnet",level:2},{value:"Clone and Compile the CEP-18 Contract",id:"cep18-contract-clone",level:3},{value:"Install the CEP-18 Contract",id:"cep18-contract-install",level:3},{value:"Query the Entry Points in the CEP-18 contract",id:"cep18-contract-clone",level:3},{value:"Summary",id:"summary",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fungible-tokens-cep-18-implementation-and-usage"},"Fungible Tokens (CEP-18) Implementation and Usage"),(0,r.kt)("p",null,"This tutorial assumes that you have worked through the following examples. If you have not already done so, then we recommend that you do so now:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/developers/prerequisites"},"Developer Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/getting-started"},"Getting Started with Rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/developers/writing-onchain-code/simple-contract"},"Writing a Basic Smart Contract in Rust"))),(0,r.kt)("h2",{id:"outline"},"Outline of the Tutorial"),(0,r.kt)("p",null,"This tutorial explains the purpose of the ERC-20 standard and the Casper CEP-18 Fungible Token implementation, which serves the same purpose for Casper blockchains. It explains the implications of not adhering to the standard and why it is important to base dApps on one common standard implementation supported by the underlying blockchain protocol."),(0,r.kt)("h2",{id:"erc20-standard"},"ERC-20 Standard"),(0,r.kt)("p",null,"The ERC-20 (Ethereum Request for Comment 20) standard is a technical specification used for creating and implementing tokens on the Ethereum blockchain."),(0,r.kt)("p",null,"It outlines a set of rules and interfaces that tokens must adhere to in order to be compatible with the broader Ethereum ecosystem. ERC-20 tokens have become the most widely adopted and recognized token standard on Ethereum network and other Blockchain protocols like NEAR or Solana. Some key points of the ERC-20 standard include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A set of functions and events that a token contract must implement to enable basic functionalities such as transferring tokens between addresses, checking token balances, and approving third-party spending of tokens. These functions include transfer(), balanceOf(), approve(), transferFrom(), and others. The tokens are not sent between wallet addresses. Instead, the token contract creates an owner list to track how many tokens are owned by which owner address.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Optional metadata functions like ",(0,r.kt)("inlineCode",{parentName:"p"},"name()"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol()"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"decimals()"),", which provide additional information about the token. These functions allow for the retrieval of token name, ticker symbol, and decimal places for proper display and identification purposes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A common set of rules for token developers to follow concerning security and consistency. This helps prevent potential vulnerabilities and ensures that tokens behave predictably across different platforms and wallets. By adhering to the ERC-20 standard, token developers can leverage the existing infrastructure, wallets, and exchanges that support ERC-20 tokens."))),(0,r.kt)("p",null,"Each blockchain protocol should have one official supported implementation of the ERC-20 Standard as to allow the interoperability of the assets between the protocols."),(0,r.kt)("h2",{id:"erc20-uniswap"},"Interaction of ERC-20 Based Tokens with the Uniswap Standard"),(0,r.kt)("p",null,"By conforming to the ERC-20 specification it is possible to leverage the functionality of decentralized exchange (DEX) implementations like Uniswap V2."),(0,r.kt)("p",null,"Uniswap V2 uses ERC-20 tokens in the following scenarios:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Listing Tokens \u2013 Any ERC-20 token can be listed on Uniswap V2 if it complies with the ERC-20 standard."),(0,r.kt)("li",{parentName:"ul"},"Liquidity Pools \u2013 any two pairs of ERC-20 tokens can be used to create a liquidity pool."),(0,r.kt)("li",{parentName:"ul"},"Uniswap V2 uses the ERC-20 standard ",(0,r.kt)("inlineCode",{parentName:"li"},"transfer()")," function to allow an exchange of tokens within the liquidity pools.")),(0,r.kt)("h2",{id:"erc20-implications"},"ERC-20 Implementations on Casper and Implications for Decentralized Exchanges"),(0,r.kt)("p",null,"There exist at least two different implementations of the ERC-20 Standard on Casper networks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Rengo-Labs/casper-erc20"},"Rengo-Labs implementation"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/FriendlyMarket/casper-erc20"},"Friendly Market implementation"),".")),(0,r.kt)("p",null,"While both implement the ERC-20 specification using a common set of rules devised from the original ERC-20 Ethereum standard, using different implementations of the standard can introduce complexities and potential risks."),(0,r.kt)("p",null,"The following considerations should be applied when trying to create an ERC-20 Token:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interoperability \u2013 Different implementations of the ERC-20 standard can hinder seamless integration between tokens, dApps or wallets.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Project Security Audits \u2013 Well-established standards usually undergo a thorough security audit. This ensures a higher level of security and reduces the risk of vulnerabilities.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ecosystem \u2013 The longer a blockchain network exists, the more widespread a standard implementation like ERC-20 becomes. Using a different implementation may limit availability of supported projects and require additional effort for integration."))),(0,r.kt)("p",null,"The CEP-18 Casper Fungible Token Standard establishes a single implementation of the ERC-20 Standard for Casper networks to avoid disparities and incompatibilities."),(0,r.kt)("h2",{id:"cep18-standard"},"The Casper CEP-18 Standard"),(0,r.kt)("p",null,"The CEP-18 Token Standard is a Casper network compliant implementation of ERC-20 that provides the following contract methods to interact with the token contract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allowance")," - Returns the amount of owner\u2019s tokens allowed to be spent by the spender"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"approve")," - Allows a spender to transfer up to an amount of the direct caller\u2019s tokens"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"balance_of")," - Returns the token balance of the owner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decimals")," - Returns the decimal places applied to the balance of the token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - Returns the name of the token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symbol")," - Returns the symbol of the token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"total_supply")," - Returns the total supply of the token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer")," - Transfers an amount of tokens from the direct caller to a recipient"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer_from")," - Transfers an amount of tokens from the owner to a recipient, if the direct caller has been previously approved to spend the specified amount on behalf of the owner")),(0,r.kt)("p",null,"For more detail on these methods, there is a reference implementation available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/cep18"},"GitHub"),"."),(0,r.kt)("h2",{id:"cep18-testnet"},"Creating a CEP-18 Token on the Testnet"),(0,r.kt)("h3",{id:"cep18-contract-clone"},"Clone and Compile the CEP-18 Contract"),(0,r.kt)("p",null,"Building on the construction of a CEP-18 token as explained above, we will be installing our own token contract in global state."),(0,r.kt)("p",null,"If you are unsure how to interact with Casper Contracts please refer to the following tutorial: ",(0,r.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/simple-contract"},"Writing a Basic Smart Contract in Rust"),"."),(0,r.kt)("p",null,"We will clone the token repository and prepare the token contract for sending in a Deploy."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone the Fungible Token contract from the repository.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    git clone https://github.com/casper-ecosystem/cep18.git\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make any necessary changes to the code for your customization requirements.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Compile the contract to create the target .wasm file and build the Wasm."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    cd cep18\n    make prepare\n    make build-contract\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"build-contract")," finishes with an error ",(0,r.kt)("inlineCode",{parentName:"p"},"wasm-strip: command not found"),", make sure you install an additional package on MacOS:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    brew install wabt\n"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Build and verify the compiled contract.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    make test\n")),(0,r.kt)("h3",{id:"cep18-contract-install"},"Install the CEP-18 Contract"),(0,r.kt)("p",null,"As it is important to understand the potential costs of your Deploy, you should send several on Testnet to familiarize yourself before sending a Deploy to Mainnet."),(0,r.kt)("p",null,"Use the following template to install the contract on the Testnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\ncasper-client put-deploy \\\n    --node-address http://<HOST:PORT> \\\n    --chain-name [NETWORK_NAME]] \\\n    --secret-key [PATH_TO_YOUR_KEY]/secret_key.pem \\\n    --payment-amount [AMOUNT] \\\n    --session-path [WASM_FILE_PATH]/[File_Name].wasm\n    --session-arg <"NAME:TYPE=\'VALUE\'" OR "NAME:TYPE=null">\n\n')),(0,r.kt)("p",null,"Check if the request to the Testnet can be made and get a snapshot of the network with the state root hash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ncasper-client get-state-root-hash --node-address http://78.46.32.13:7777\n\n")),(0,r.kt)("p",null,"You should obtain a response similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": 3323991011802671610,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "state_root_hash": "9b43fd7388559c078f363403972cb079d69786259bf6c5cd9cd7adcc14029d74"\n  }\n}\n')),(0,r.kt)("p",null,"An exemplary deploy to the Casper Testnet is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\ncasper-client put-deploy \\\n--node-address http://78.46.32.13:7777 \\\n--chain-name casper-test \\\n--secret-key "./keys/secret_key.pem" \\\n--payment-amount 150000000000 \\\n--session-path "./target/wasm32-unknown-unknown/release/cep18.wasm" \\\n--session-arg "name:string=\'CHF Coin\'" \\\n--session-arg "symbol:string=\'CHFC\'" \\\n--session-arg "decimals:u8=\'10\'" \\\n--session-arg "total_supply:u256=\'1000\'"\n\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Always be mindful of the ",(0,r.kt)("inlineCode",{parentName:"p"},"--secret-key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--session-path")," arguments. Path provided to the arguments should always be with regard to the current folder, where the command is executed."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," folder is not a part of the CEP18 folder structure. Optionally you should provide a folder where your keys are stored.")),(0,r.kt)("p",null,"The response from the ",(0,r.kt)("inlineCode",{parentName:"p"},"put-deploy")," command should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "id": 5066914343373494745,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "deploy_hash": "19853d1569fec2b0fa36e81f2f24bea77ccf039a399071cb7d4b377202a073d6"\n  }\n}\n\n')),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy_hash")," the state of the deploy can be checked:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ncasper-client get-deploy \\\n    --node-address http://78.46.32.13:7777 19853d1569fec2b0fa36e81f2f24bea77ccf039a399071cb7d4b377202a073d6\n\n")),(0,r.kt)("p",null,"In the execution results we can see, that the deploy was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\n...\n "execution_results": [\n      {\n        "block_hash": "426a8823c1018e75f8c3823d580116269fd272f20e60561dff0565375a95316d",\n        "result": {\n          "Success": {\n            "cost": "140416131900",\n            "effect": {\n              "operations": [],\n...\n\n')),(0,r.kt)("p",null,"Be always mindful of the payment amount during the deploy process. If the amount is too small, then the deploy will fail with ",(0,r.kt)("inlineCode",{parentName:"p"},"Out of gas error"),"."),(0,r.kt)("h3",{id:"cep18-contract-clone"},"Query the Entry Points in the CEP-18 contract"),(0,r.kt)("p",null,"Get the state root hash from the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-state-root-hash --node-address http://78.46.32.13:7777\n")),(0,r.kt)("p",null,"Your response should look similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": 2950480729544096556,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "state_root_hash": "7706d906fce25dcdadb2a9453f5243a6c72c4444e6c826cf2941157333a48705"\n  }\n}\n')),(0,r.kt)("p",null,"With the state root hash and the account hash which performed the deploy, you can query the contract arguments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client query-global-state --node-address http://78.46.32.13:7777 \\\n--state-root-hash 7706d906fce25dcdadb2a9453f5243a6c72c4444e6c826cf2941157333a48705 \\\n--key account-hash-ee57bb3b39eb66b74a1dcf12f3f0e7d8e906e34b11f85dc05497bf33fbf3a1f9 \\\n-q "cep18_contract_hash_CHF Coin/name"\n')),(0,r.kt)("p",null,"The above command will query the contract for the name. The template for the query is ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_name/named_key"),"."),(0,r.kt)("p",null,"You will obtain the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "id": -7058786841478812744,\n  "jsonrpc": "2.0",\n  "result": {\n    "api_version": "1.4.15",\n    "block_header": null,\n    "merkle_proof": "[94526 hex chars]",\n    "stored_value": {\n      "CLValue": {\n        "bytes": "0800000043484620436f696e",\n        "cl_type": "String",\n        "parsed": "CHF Coin"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Try to query the contract for other Named Keys and check how the contract behaves."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"In this tutorial, we:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Explained the ERC20 standard and what the implications are for not using the standard implementations."),(0,r.kt)("li",{parentName:"ul"},"Developed a CEP-18 Rust contract on a Casper network and defined the proper arguments for the deploy."),(0,r.kt)("li",{parentName:"ul"},"Installed the contract on the Testnet"),(0,r.kt)("li",{parentName:"ul"},"Called an entry point on the contract to get the value of the Named Key ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),".")))}m.isMDXComponent=!0}}]);