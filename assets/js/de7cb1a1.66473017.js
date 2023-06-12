"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5153],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,h=u["".concat(c,".").concat(k)]||u[k]||d[k]||o;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Accounts and Keys"},c="Accounts and Cryptographic Keys",p={unversionedId:"concepts/accounts-and-keys",id:"concepts/accounts-and-keys",title:"Accounts and Keys",description:"The Casper blockchain uses an on-chain account-based model, uniquely identified by an AccountHash derived from a specific PublicKey. The AccountHash is a 32-byte hash derived from any of the supported PublicKey variants below to standardize keys that can vary in length.",source:"@site/source/docs/casper/concepts/accounts-and-keys.md",sourceDirName:"concepts",slug:"/concepts/accounts-and-keys",permalink:"/concepts/accounts-and-keys",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/concepts/accounts-and-keys.md",tags:[],version:"current",lastUpdatedAt:1686578625,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"Accounts and Keys"},sidebar:"concepts",previous:{title:"Introduction to dApps",permalink:"/concepts/intro-to-dapps"},next:{title:"Understanding Hash Types",permalink:"/concepts/hash-types"}},l={},u=[{value:"Creating Accounts and Keys",id:"creating-accounts-and-keys",level:2},{value:"Option 1: Generating Keys using the Casper Client",id:"option-1-key-generation-using-the-casper-client",level:3},{value:"EdDSA Keys",id:"eddsa-keys",level:4},{value:"Ethereum Keys",id:"ethereum-keys",level:4},{value:"Option 2: Generating Keys using a Block Explorer",id:"option-2-key-generation-using-a-block-explorer",level:3},{value:"Funding your Account",id:"funding-your-account",level:2},{value:"Working with Existing Ethereum Keys",id:"working-with-existing-ethereum-keys",level:2},{value:"Option 3: Generating Keys using OpenSSL",id:"option-3-generating-keys-using-openssl",level:3},{value:"Generating the <code>secret_key.pem</code> file",id:"generating-the-secret_keypem-file",level:4},{value:"Generating public keys from the <code>secret_key.pem</code> file",id:"generating-public-keys-from-the-secret_keypem-file",level:4},{value:"Generating an Account Hash",id:"generating-an-account-hash",level:2},{value:"Finding the Main Purse URef",id:"purse-uref",level:2},{value:"Using the Casper CLI client",id:"using-the-casper-cli-client",level:3},{value:"Using a block explorer",id:"using-a-block-explorer",level:3}],d={toc:u},k="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts-and-cryptographic-keys"},"Accounts and Cryptographic Keys"),(0,o.kt)("p",null,"The Casper blockchain uses an on-chain ",(0,o.kt)("a",{parentName:"p",href:"/concepts/design/casper-design#accounts-head"},"account-based model"),", uniquely identified by an ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountHash")," derived from a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountHash")," is a 32-byte hash derived from any of the supported ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey")," variants below to standardize keys that can vary in length."),(0,o.kt)("p",null,"By default, a transactional interaction with the blockchain takes the form of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," cryptographically signed by the key-pair corresponding to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicKey")," used to create the account."),(0,o.kt)("p",null,"The Casper platform supports two types of keys for creating accounts and signing transactions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#eddsa-keys"},"Ed25519")," keys, which use the Edwards-curve Digital Signature Algorithm (EdDSA) and are 66 bytes long"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#ethereum-keys"},"Secp256k1")," keys, commonly known as Ethereum keys, which are 68 bytes long")),(0,o.kt)("p",null,"You can generate keys using both formats, and it is also possible to ",(0,o.kt)("a",{parentName:"p",href:"#working-with-existing-ethereum-keys"},"work with existing Ethereum keys"),"."),(0,o.kt)("p",null,"You can also ",(0,o.kt)("a",{parentName:"p",href:"#generating-an-account-hash"},"generate an account hash")," from a public key with the Casper command-line client."),(0,o.kt)("h2",{id:"creating-accounts-and-keys"},"Creating Accounts and Keys"),(0,o.kt)("p",null,"When you create an account on the Casper blockchain, a cryptographic key-pair will be created when using either the ",(0,o.kt)("a",{parentName:"p",href:"#option-1-key-generation-using-the-casper-client"},"Casper command-line client")," or a block explorer."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"SAVE your keys to a safe place, preferably offline.")),(0,o.kt)("h3",{id:"option-1-key-generation-using-the-casper-client"},"Option 1: Generating Keys using the Casper Client"),(0,o.kt)("p",null,"This option describes how you can use the Casper command-line client to set up an account using either key type."),(0,o.kt)("h4",{id:"eddsa-keys"},"EdDSA Keys"),(0,o.kt)("p",null,"The command-line client generates EdDSA keys by default. Use the command below to create the account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ed25519-keys\ncasper-client keygen ed25519-keys/\ntree ed25519-keys/\n")),(0,o.kt)("p",null,"Sample output of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tree")," command shows the contents of the ",(0,o.kt)("em",{parentName:"p"},"ed25519-keys")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ed25519-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n\n0 directories, 3 files\n")),(0,o.kt)("p",null,"Here are some details about the files generated:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key.pem")," is a ",(0,o.kt)("em",{parentName:"li"},"PEM"),"-encoded public key"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"public_key_hex")," is a hexadecimal-encoded string of the public key"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"secret_key.pem")," is the ",(0,o.kt)("em",{parentName:"li"},"PEM"),"-encoded secret key")),(0,o.kt)("p",null,"The public-key-hex for ",(0,o.kt)("inlineCode",{parentName:"p"},"Ed25519")," keys starts with 01 and is 66 bytes long:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat ed25519-keys/public_key_hex\n011724c5c8e2404ca01c872e1bbd9202a0114e5d143760f685086a5cffe261dabd\n")),(0,o.kt)("h4",{id:"ethereum-keys"},"Ethereum Keys"),(0,o.kt)("p",null,"To create ",(0,o.kt)("inlineCode",{parentName:"p"},"Secp256k1")," keys with the Casper command-line client, commonly known as Ethereum keys, follow these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir secp256k1-keys\ncasper-client keygen -a secp256k1 secp256k1-keys/\ntree secp256k1-keys/\n")),(0,o.kt)("p",null,"Sample output of the ",(0,o.kt)("inlineCode",{parentName:"p"},"tree")," command shows the contents of the ",(0,o.kt)("em",{parentName:"p"},"secp256k1-keys")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"secp256k1-keys/\n\u251c\u2500\u2500 public_key.pem\n\u251c\u2500\u2500 public_key_hex\n\u2514\u2500\u2500 secret_key.pem\n\n0 directories, 3 files\n")),(0,o.kt)("p",null,"The public-key-hex for ",(0,o.kt)("inlineCode",{parentName:"p"},"Secp256k1")," keys starts with 02 and is 68 bytes long:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat secp256k1-keys/public_key_hex\n020287e1a79d0d9f3196391808a8b3e5007895f43cde679e4c960e7e9b92841bb98d\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"After generating keys for the account, you may add funds to the account's purse to finish the account creation process.")),(0,o.kt)("h3",{id:"option-2-key-generation-using-a-block-explorer"},"Option 2: Generating Keys using a Block Explorer"),(0,o.kt)("p",null,"This option is available on networks that have a block explorer."),(0,o.kt)("p",null,"For instance, on the official Testnet, the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live/"},"CSPR.live")," block explorer is available, and the following instructions assume you are using it."),(0,o.kt)("p",null,"Start by creating an account using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.casperwallet.io/"},"Casper Wallet"),", ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/articles/4416379141009-Casper-CSPR-?support=true"},"Ledger"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://casper.tor.us/"},"Torus Wallet"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Casper Signer has been replaced with the Casper Wallet and will be deprecated. We recommend migrating all your Casper accounts to the Casper Wallet as outlined ",(0,o.kt)("a",{parentName:"p",href:"https://www.casperwallet.io/user-guide/signer-user-start-here"},"here"),".")),(0,o.kt)("h2",{id:"funding-your-account"},"Funding your Account"),(0,o.kt)("p",null,"Once you create your account, you can ",(0,o.kt)("a",{parentName:"p",href:"/developers/prerequisites#funding-an-account"},"fund the account's main purse")," to finish the process of setting it up."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Until you fund your account's main purse, it does not exist on the blockchain.")),(0,o.kt)("h2",{id:"working-with-existing-ethereum-keys"},"Working with Existing Ethereum Keys"),(0,o.kt)("p",null,"You can also use existing Ethereum keys in Casper. Here is an example set of Ethereum keys and their corresponding address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Address:0x7863B6F7232D99FF80B74E4C8BB3BEE3BDE0291F\nPublic key:0470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66\nPrivate key:29773906aef3ee1f5868371fd7c50f9092205df26f60e660cafacbf2b95fe086\n")),(0,o.kt)("p",null,"To use existing Ethereum keys, the Casper virtual machine (VM) needs to know that the key is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Secp256k1")," type. To achieve this, we will prefix the public key hex with 02, as shown in the example below."),(0,o.kt)("p",null,"The Casper command-line client provides an example of how this works."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("p",null,"The following transaction sends 10 CSPR."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client transfer \\\n--transfer-id 1234567 \\\n--node-address http://localhost:7777 \\\n--chain-name casper \\\n--target-account 020470fecd1f7ae5c1cd53a52c4ca88cd5b76c2926d7e1d831addaa2a64bea9cc3ede6a8e9981c609ee7ab7e3fa37ba914f2fc52f6eea9b746b6fe663afa96750d66 \\\n--amount 10000000000 \\\n--secret-key <path-to-secret_key.pem> \\\n--payment-amount 100000000\n")),(0,o.kt)("p",null,"The Casper command-line client requires the secret key in ",(0,o.kt)("em",{parentName:"p"},"PEM")," format to send a Deploy from this account. If you want to use existing Ethereum keys with the command-line client, a conversion to ",(0,o.kt)("em",{parentName:"p"},"PEM")," format is needed."),(0,o.kt)("p",null,"The following example is a JS script that generates a ",(0,o.kt)("em",{parentName:"p"},"PEM")," file, using a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stacks-network/key-encoder-js"},"key encoder")," and Node.js. To install these components, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install nodejs\nnpm install key-encoder\n")),(0,o.kt)("p",null,"Then create the JS script ",(0,o.kt)("em",{parentName:"p"},"convert-to-pem.js")," using ",(0,o.kt)("em",{parentName:"p"},"vi")," or ",(0,o.kt)("em",{parentName:"p"},"nano"),", and include this content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'var KeyEncoder = require("key-encoder"),\n    keyEncoder = new KeyEncoder.default("secp256k1");\nlet priv_hex = "THE SECRET KEY TO ENCODE";\nlet priv_pem = keyEncoder.encodePrivate(priv_hex, "raw", "pem");\nconsole.log(priv_pem);\n')),(0,o.kt)("p",null,"Then run the script using Node.js and name the secret key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node convert-to-pem.js > eth-secret.pem\n")),(0,o.kt)("p",null,"To view the secret key, use ",(0,o.kt)("inlineCode",{parentName:"p"},"cat <filename>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat eth-secret.pem\n")),(0,o.kt)("p",null,"Below is the sample output showing the contents of the secret key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIBjXY+7xZagzTjL4p8bGWS8FPRcW13mgytdu5c3e556MoAcGBSuBBAAK\noUQDQgAEpV4dVaPeAEaH0VXrQtLzjpGt1pui1q08311em6wDCchGNjzsnOY7stGF\ntlKF2V5RFQn4rzkwipSYnrqaPf1pTA==\n-----END EC PRIVATE KEY-----\n")),(0,o.kt)("h3",{id:"option-3-generating-keys-using-openssl"},"Option 3: Generating Keys using OpenSSL"),(0,o.kt)("p",null,"You can generate keys without the Casper client using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"openssl")," cryptography toolkit. The commands below are valid only for generating Ed25519 keys on a Linux operating system."),(0,o.kt)("h4",{id:"generating-the-secret_keypem-file"},"Generating the ",(0,o.kt)("inlineCode",{parentName:"h4"},"secret_key.pem")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openssl genpkey -algorithm ed25519 -out secret_key.pem\n")),(0,o.kt)("h4",{id:"generating-public-keys-from-the-secret_keypem-file"},"Generating public keys from the ",(0,o.kt)("inlineCode",{parentName:"h4"},"secret_key.pem")," file"),(0,o.kt)("p",null,"For default Ed25519 keys, you can generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"public_key.pem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"public_key_hex")," using these commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'openssl pkey -in secret_key.pem -pubout -out public_key.pem\n\n{ echo -n 01; openssl pkey -outform DER -pubout -in "secret_key.pem" | tail -c +13 | openssl base64 | openssl base64 -d | hexdump -ve \'/1 "%02x" \' | tr -d "/n"; } > public_key_hex\n')),(0,o.kt)("h2",{id:"generating-an-account-hash"},"Generating an Account Hash"),(0,o.kt)("p",null,"To generate the account hash for a public key, use the ",(0,o.kt)("em",{parentName:"p"},"account-address")," option of the Casper client. The argument for the ",(0,o.kt)("em",{parentName:"p"},"public-key")," must be a properly formatted public key. The public key may also be read from a file, which should be one of the two files generated via the ",(0,o.kt)("em",{parentName:"p"},"keygen")," command: ",(0,o.kt)("em",{parentName:"p"},"public_key_hex")," or ",(0,o.kt)("em",{parentName:"p"},"public_key.pem"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client account-address --public-key <FORMATTED STRING or PATH>\n")),(0,o.kt)("h2",{id:"purse-uref"},"Finding the Main Purse URef"),(0,o.kt)("p",null,"You can use the Casper CLI client or a block explorer to find the URef identifying an account's main purse."),(0,o.kt)("h3",{id:"using-the-casper-cli-client"},"Using the Casper CLI client"),(0,o.kt)("p",null,"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"casper-client"),", use the ",(0,o.kt)("inlineCode",{parentName:"p"},"get-account-info")," subcommand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-account-info \\\n--node-address <HOST:PORT>  \\\n--public-key <FORMATTED STRING or PATH>\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"node-address")," - An IP address of a peer on the network. The default port of nodes' JSON-RPC servers on Mainnet and Testnet is 7777"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"public-key")," - This must be a properly formatted public key. The public key may instead be read in from a file, in which case, enter the path to the file as the argument. The file should be one of the two public key files generated via the ",(0,o.kt)("inlineCode",{parentName:"li"},"keygen"),' subcommand; "public_key_hex" or "public_key.pem"')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Sample command and output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'casper-client get-account-info --node-address http://65.21.75.254:7777  --public-key 0202ceafc0aa35f5a7bdda22f65c046b9b30b858459e18d3670f035839ad887fe5db\n{\n  "id": -2018234245556346849,\n  "jsonrpc": "2.0",\n  "result": {\n    "account": {\n      "account_hash": "account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34",\n      "action_thresholds": {\n        "deployment": 1,\n        "key_management": 1\n      },\n      "associated_keys": [\n        {\n          "account_hash": "account-hash-0ea7998b2822afe5b62b08a21d54c941ad791279b089f3f7ede0d72b477eca34",\n          "weight": 1\n        }\n      ],\n      "main_purse": "uref-974019c976b5f26412ce486158d2431967af35d91387dae8cbcd43c20fce6452-007",\n      "named_keys": []\n    },\n    "api_version": "1.4.15",\n    "merkle_proof": "[29712 hex chars]"\n  }\n}\n\n'))),(0,o.kt)("p",null,"Run the following help command for more details:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client get-account-info --help\n")),(0,o.kt)("h3",{id:"using-a-block-explorer"},"Using a block explorer"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"http://cspr.live"},"cspr.live")," block explorer, open the Account in question, and expand the ",(0,o.kt)("inlineCode",{parentName:"p"},"Raw Data")," section. Look for the ",(0,o.kt)("inlineCode",{parentName:"p"},"main_purse")," field and find the corresponding URef. If you do not see data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Raw Data")," section, then the account has not been funded yet."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/image/design/main_purse_uref.png",alt:"Image showing an account's main purse",width:"500"})))}h.isMDXComponent=!0}}]);