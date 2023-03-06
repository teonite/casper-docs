"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8872],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=["components"],i={},c="Key-Value Storage Tutorial",l={unversionedId:"dapp-dev-guide/tutorials/kv-storage-tutorial",id:"dapp-dev-guide/tutorials/kv-storage-tutorial",title:"Key-Value Storage Tutorial",description:"This tutorial covers a simple contract, which creates a key that stores a CLType value. This example will show you how to store a U64, string, account hash, or U512 value.",source:"@site/source/docs/casper/dapp-dev-guide/tutorials/kv-storage-tutorial.md",sourceDirName:"dapp-dev-guide/tutorials",slug:"/dapp-dev-guide/tutorials/kv-storage-tutorial",permalink:"/dapp-dev-guide/tutorials/kv-storage-tutorial",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/dapp-dev-guide/tutorials/kv-storage-tutorial.md",tags:[],version:"current",lastUpdatedAt:1678121171,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{}},u={},p=[{value:"The Contract",id:"the-contract",level:2},{value:"Testing the Contract",id:"testing-the-contract",level:2},{value:"Write Unit Tests",id:"write-unit-tests",level:3},{value:"Running Locally",id:"running-locally",level:3},{value:"Deploying to the Testnet and Interacting with the Contract",id:"deploying-to-the-testnet-and-interacting-with-the-contract",level:2},{value:"Deploy the Contract",id:"deploy-the-contract",level:3},{value:"Query the Contract On Chain",id:"query-the-contract-on-chain",level:3}],h={toc:p},d="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-value-storage-tutorial"},"Key-Value Storage Tutorial"),(0,o.kt)("p",null,"This tutorial covers a simple contract, which creates a key that stores a ",(0,o.kt)("inlineCode",{parentName:"p"},"CLType")," value. This example will show you how to store a ",(0,o.kt)("em",{parentName:"p"},"U64"),", ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("em",{parentName:"p"},"account hash"),", or ",(0,o.kt)("em",{parentName:"p"},"U512")," value."),(0,o.kt)("p",null,"The code is available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/casper-ecosystem/kv-storage-contract"},"Casper Ecosystem GitHub"),". Or, you can get started in ",(0,o.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/casper-ecosystem/kv-storage-contract"},"GitPod"),"."),(0,o.kt)("h2",{id:"the-contract"},"The Contract"),(0,o.kt)("p",null,"Let's start by understanding the structure of the contract itself. Here we create a contract and name it ",(0,o.kt)("inlineCode",{parentName:"p"},"kvstorage_contract"),". The contract package will be stored under this name on the blockchain. Since the key-value contract is slightly stateless, initialization is not required."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[no_mangle]\n pub extern "C" fn store_u64() {\n     let name: String = runtime::get_named_arg("name");\n     let value: u64 = runtime::get_named_arg("value");\n     set_key(name.as_str(), value);\n }\n\n #[no_mangle]\n pub extern "C" fn store_u512() {\n     let name: String = runtime::get_named_arg("name");\n     let value: U512 = runtime::get_named_arg("value");\n     set_key(name.as_str(), value);\n }\n\n #[no_mangle]\n pub extern "C" fn store_string() {\n     let name: String = runtime::get_named_arg("name");\n     let value: String = runtime::get_named_arg("value");\n     set_key(name.as_str(), value);\n }\n\n #[no_mangle]\n pub extern "C" fn store_account_hash() {\n     let name: String = runtime::get_named_arg("name");\n     let value: AccountHash = runtime::get_named_arg("value");\n     set_key(name.as_str(), value);\n }\n\n #[no_mangle]\n pub extern "C" fn store_bytes() {\n     let name: String = runtime::get_named_arg("name");\n     let value: Vec<u8> = runtime::get_named_arg("value");\n     set_key(name.as_str(), value);\n }\n\n #[no_mangle]\n pub extern "C" fn call() {\n     let (contract_package_hash, _) = storage::create_contract_package_at_hash();\n     let mut entry_points = EntryPoints::new();\n\n     entry_points.add_entry_point(EntryPoint::new(\n         String::from("store_u64"),\n         vec![\n             Parameter::new("name", CLType::String),\n             Parameter::new("value", CLType::U64),\n         ],\n         CLType::Unit,\n         EntryPointAccess::Public,\n         EntryPointType::Contract,\n     ));\n\n     entry_points.add_entry_point(EntryPoint::new(\n         String::from("store_u512"),\n         vec![\n             Parameter::new("name", CLType::String),\n             Parameter::new("value", CLType::U512),\n         ],\n         CLType::Unit,\n         EntryPointAccess::Public,\n         EntryPointType::Contract,\n     ));\n\n     entry_points.add_entry_point(EntryPoint::new(\n         String::from("store_string"),\n         vec![\n             Parameter::new("name", CLType::String),\n             Parameter::new("value", CLType::String),\n         ],\n         CLType::Unit,\n         EntryPointAccess::Public,\n         EntryPointType::Contract,\n     ));\n\n     entry_points.add_entry_point(EntryPoint::new(\n         String::from("store_account_hash"),\n         vec![\n             Parameter::new("name", CLType::String),\n             Parameter::new("value", AccountHash::cl_type()),\n         ],\n         CLType::Unit,\n         EntryPointAccess::Public,\n         EntryPointType::Contract,\n     ));\n\n     entry_points.add_entry_point(EntryPoint::new(\n         String::from("store_bytes"),\n         vec![\n             Parameter::new("name", CLType::String),\n             Parameter::new("value", CLType::List(Box::new(CLType::U8))),\n         ],\n         CLType::Unit,\n         EntryPointAccess::Public,\n         EntryPointType::Contract,\n     ));\n\n     let (contract_hash, _) =\n         storage::add_contract_version(contract_package_hash, entry_points, Default::default());\n     runtime::put_key("kvstorage_contract", contract_hash.into());\n     let contract_hash_pack = storage::new_uref(contract_hash);\n     runtime::put_key("kvstorage_contract_hash", contract_hash_pack.into())\n }\n\n fn set_key<T: ToBytes + CLTyped>(name: &str, value: T) {\n     match runtime::get_key(name) {\n         Some(key) => {\n             let key_ref = key.try_into().unwrap_or_revert();\n             storage::write(key_ref, value);\n         }\n         None => {\n             let key = storage::new_uref(value).into();\n             runtime::put_key(name, key);\n         }\n     }\n }\n')),(0,o.kt)("h2",{id:"testing-the-contract"},"Testing the Contract"),(0,o.kt)("p",null,"The Casper Contracts SDK supports local testing of smart contracts. This tutorial will cover how to test the U64 key-value function, which you can adapt for other types."),(0,o.kt)("p",null,"To test the contract, you need to deploy the contract and store the value on chain. Here is some sample code to accomplish these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'impl KVstorageContract{\n   pub fn deploy() -> Self {\n\n       // build the test context with the account for the deploy\n\n        let mut context = TestContextBuilder::new()\n            .with_account(TEST_ACCOUNT, U512::from(128_000_000))\n            .build();\n\n       // specify the session code & build the deploy\n        let session_code = Code::from("contract.wasm");\n        let session = SessionBuilder::new(session_code, runtime_args! {})\n            .with_address(TEST_ACCOUNT)\n            .with_authorization_keys(&[TEST_ACCOUNT])\n            .build();\n        context.run(session);\n        let kvstorage_hash = Self::contract_hash(&context, KV_STORAGE_HASH);\n        Self {\n            context,\n            kvstorage_hash,\n        }\n    }\n\n    // query the contract hash after the deploy is complete\n\n    pub fn contract_hash(context: &TestContext, name: &str) -> Hash {\n        context\n            .query(TEST_ACCOUNT, &[name])\n            .unwrap_or_else(|_| panic!("{} contract not found", name))\n            .into_t()\n            .unwrap_or_else(|_| panic!("{} is not a type Contract.", name))\n    }\n\n    // store the u_64 value in the global state\n\n    pub fn call_store_u64(&mut self, name: String, value: u64) {\n        let code = Code::Hash(self.kvstorage_hash, "store_u64".to_string());\n        let args = runtime_args! {\n            "name" => name,\n            "value" => value,\n        };\n        let session = SessionBuilder::new(code, args)\n            .with_address(TEST_ACCOUNT)\n            .with_authorization_keys(&[TEST_ACCOUNT])\n            .build();\n        self.context.run(session);\n    }\n}\n')),(0,o.kt)("h3",{id:"write-unit-tests"},"Write Unit Tests"),(0,o.kt)("p",null,"With these functions in place, it's possible to start writing tests for the contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'mod tests {\n    #[test]\n    fn should_store_u64() {\n        const KEY_NAME: &str = "test_u64";\n        let mut kv_storage = KVstorageContract::deploy();\n        let name = String::from("test_u64");\n        let value: u64 = 1;\n        kv_storage.call_store_u64(name, value);\n        let check: u64 = kv_storage.query_contract(&KEY_NAME).unwrap();\n        assert_eq!(value, check);\n    }\n\n   // A test to check whether the value is updated\n   #[test]\n    fn should_update_u64() {\n        const KEY_NAME: &str = "testu64";\n        let mut kv_storage = KVstorageContract::deploy();\n        let original_value: u64 = 1;\n        let updated_value: u64 = 2;\n        kv_storage.call_store_u64(KEY_NAME.to_string(), original_value);\n        kv_storage.call_store_u64(KEY_NAME.to_string(), updated_value);\n        let value: u64 = kv_storage.query_contract(&KEY_NAME).unwrap();\n        assert_eq!(value, 2);\n    }\n}\n')),(0,o.kt)("h3",{id:"running-locally"},"Running Locally"),(0,o.kt)("p",null,"You can run unit tests locally if you have set up the contract using ",(0,o.kt)("em",{parentName:"p"},"cargo-casper")," as shown in the ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started"},"Getting started")," guide."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo test -p tests\n")),(0,o.kt)("h2",{id:"deploying-to-the-testnet-and-interacting-with-the-contract"},"Deploying to the Testnet and Interacting with the Contract"),(0,o.kt)("p",null,"When working with the testnet, create an account on ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.cspr.live"},"Testnet CSPR Live")," and fund it using the faucet. Download the private key and use the key to sign the deployment. It's possible to create keys using the rust client as well."),(0,o.kt)("h3",{id:"deploy-the-contract"},"Deploy the Contract"),(0,o.kt)("p",null,"After compiling the contract, you need to deploy the compiled Wasm to the network. This action installs the contract in the blockchain."),(0,o.kt)("p",null,"The following example shows you how to use the Casper client to retrieve the contract session hash and the block hash where the contract is deployed. The paths for the ",(0,o.kt)("em",{parentName:"p"},"secret-key")," and ",(0,o.kt)("em",{parentName:"p"},"session-path")," are relative to your system. You need to specify the paths on your machine to run the command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --chain-name <CHAIN-NAME> \\\n    --node-address http://<HOST>:<PORT> \\\n    --secret-key <PATH>/secretkey.pem \\\n    --session-path  $HOME/kv-storage-contract/target/wasm32-unknown-unknown/release/contract.wasm \\\n    --payment-amount 1000000000000\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query the Account & Get the Contract Hash")),(0,o.kt)("p",null,"The internal state of the blockchain is updated via a series of steps (blocks). All blockchain queries must include a [",(0,o.kt)("em",{parentName:"p"},"global state hash")," which corresponds to the block hash or height of the blockchain. Visit ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started#querying-global-state-for-the-address-of-a-contract"},"Querying the address of a contract"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Invoke an Entry Point & Set a value")),(0,o.kt)("p",null,"Once the contract is deployed, you can create another deploy, which calls one of the entry points within the contract. You must know the entry point's name or the session hash retrieved in the previous step to call an entry point. The command below shows you how to do this. The ",(0,o.kt)("em",{parentName:"p"},"session-path")," is relative to your system. Specify the path on your machine and then run the command."),(0,o.kt)("p",null,"The kv-client has four distinct commands to set key-values for U64, string, U512, and account hash. In this example, we will use a String."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client put-deploy \\\n    --session-name kvstorage_contract \\\n    --session-entry-point store_string \\\n    --session-arg=name:\"string='test'\" \\\n    --session-arg=value:\"string='your test string here'\" \\\n    --payment-amount 100000000000 \\\n    --chain-name <CHAIN-NAME> \\\n    --node-address http://<HOST>:<PORT> \\\n    --secret-key <PATH>/secretkey.pem\n")),(0,o.kt)("p",null,"If the deploy works, a you will see a similar response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{"api_version":"1.0.0","deploy_hash":"8c3068850354c2788c1664ac6a275ee575c8823676b4308851b7b3e1fe4e3dcc"}\n')),(0,o.kt)("h3",{id:"query-the-contract-on-chain"},"Query the Contract On Chain"),(0,o.kt)("p",null,"Contracts can be executed under different contexts. In this example, when the contract is deployed, it runs in the context of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Contract")," and not a ",(0,o.kt)("inlineCode",{parentName:"p"},"Session"),". This means that all stored keys are not stored under the account hash, but within the context of the contract. Therefore, when we query to retrieve the value under a key, we are querying ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountHash/kvstorage_contract/<key-name>")," and not just ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountHash/<key-name>"),"."),(0,o.kt)("p",null,"It would be best if you first found the block hash for the block that contains your deploy. Once you have the requisite block hash, you can use the Casper client to retrieve the session hash."),(0,o.kt)("p",null,"Reading a value is simple; we obtain the block hash under which the value is stored, and then using that block hash, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"query-global-state")," command to retrieve the value stored under a named key."),(0,o.kt)("p",null,"An example global state query looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"casper-client query-global-state --node-address http://<HOST>:<PORT> -k <PUBLIC_KEY_AS_HEX> -g GLOBAL_STATE_HASH | jq -r\n")),(0,o.kt)("p",null,"Please reference the ",(0,o.kt)("a",{parentName:"p",href:"/developers/writing-onchain-code/getting-started#querying-global-state-for-the-address-of-a-contract"},"Querying Section")," for more details."))}m.isMDXComponent=!0}}]);