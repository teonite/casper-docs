"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2388],{3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return y}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},i=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,s(s({ref:n},i),{},{components:t})):r.createElement(y,s({ref:n},i))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8219:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),s=["components"],p={},l="Golang SDK",c={unversionedId:"developers/dapps/sdk/go-sdk",id:"developers/dapps/sdk/go-sdk",title:"Golang SDK",description:"Usage Examples",source:"@site/source/docs/casper/developers/dapps/sdk/go-sdk.md",sourceDirName:"developers/dapps/sdk",slug:"/developers/dapps/sdk/go-sdk",permalink:"/developers/dapps/sdk/go-sdk",draft:!1,editUrl:"https://github.com/casper-network/docs/tree/main/source/docs/casper/developers/dapps/sdk/go-sdk.md",tags:[],version:"current",lastUpdatedAt:1686658592,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{},sidebar:"developers",previous:{title:".NET SDK",permalink:"/developers/dapps/sdk/csharp-sdk"},next:{title:"Python SDK",permalink:"/developers/dapps/sdk/python-sdk"}},i={},d=[{value:"Usage Examples",id:"usage-examples",level:2},{value:"Generating Account Keys",id:"generating-account-keys",level:2},{value:"Deploying a contract",id:"deploying-a-contract",level:2}],u={toc:d},m="wrapper";function y(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"golang-sdk"},"Golang SDK"),(0,o.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,o.kt)("p",null,"This section includes some examples of how to use Golang SDK:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sending a transfer"),(0,o.kt)("li",{parentName:"ul"},"Installing a contract via a Deploy")),(0,o.kt)("h2",{id:"generating-account-keys"},"Generating Account Keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    import (\n        "fmt"\n        "github.com/casper-ecosystem/casper-golang-sdk/keypair"\n        "github.com/casper-ecosystem/casper-golang-sdk/keypair/ed25519"\n        "github.com/casper-ecosystem/casper-golang-sdk/sdk"\n        "math/big"\n        "time"\n    )\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    func main() {\n        nodeRpc := "http://159.65.118.250:7777"\n        nodeEvent := "http://159.65.118.250:9999"\n        privKeyPath := "/path/to/secret_key.pem"\n\n        rpcClient, _ := sdk.NewRpcClient(nodeRpc)\n        eventClient := sdk.NewEventService(nodeEvent)\n\n        pair, _ := ed25519.ParseKeyFiles(privKeyPath)\n        target, _ := keypair.FromPublicKeyHex("0172a54c123b336fb1d386bbdff450623d1b5da904f5e2523b3e347b6d7573ae80")\n\n        deployParams := sdk.DeployParams{\n            Account:   pair.PublicKey(),\n            Timestamp: time.Now(),\n            TTL:       30 * time.Minute,\n            GasPrice:  1,\n            ChainName: "casper-test",\n        }\n        payment := sdk.StandardPayment(big.NewInt(100000000))\n        session := sdk.NewTransfer(big.NewInt(25000000000), target, uint64(5589324))\n\n        deploy, _ := sdk.MakeDeploy(deployParams, payment, session)\n        _ = deploy.Sign(pair)\n        putDeploy, _ := rpcClient.PutDeploy(deploy)\n\n        processedDeploy, _ := eventClient.AwaitDeploy(putDeploy.DeployHash)\n\n        fmt.Printf("%+v\\n", processedDeploy)\n    }\n')),(0,o.kt)("h2",{id:"deploying-a-contract"},"Deploying a contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    import (\n        "fmt"\n        "github.com/casper-ecosystem/casper-golang-sdk/keypair"\n        "github.com/casper-ecosystem/casper-golang-sdk/keypair/ed25519"\n        "github.com/casper-ecosystem/casper-golang-sdk/sdk"\n        "math/big"\n        "time"\n    )\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'    func main() {\n        nodeRpc := "http://159.65.118.250:7777"\n        nodeEvent := "http://159.65.118.250:9999"\n        privKeyPath := "/path/to/secret_key.pem"\n        modulePath := "/path/to/contract.wasm"\n\n        rpcClient, _ := sdk.NewRpcClient(nodeRpc)\n        eventClient := sdk.NewEventService(nodeEvent)\n\n        pair, _ := ed25519.ParseKeyFiles(privKeyPath)\n        module, _ := ioutil.ReadFile(modulePath)\n\n        deployParams := sdk.DeployParams{\n            Account:   pair.PublicKey(),\n            Timestamp: time.Now(),\n            TTL:       30 * time.Minute,\n            GasPrice:  1,\n            ChainName: "casper-test",\n        }\n        payment := sdk.StandardPayment(big.NewInt(100000000))\n        session := sdk.NewModuleBytes(module, nil)\n\n        deploy, _ := sdk.MakeDeploy(deployParams, payment, session)\n        _ = deploy.Sign(pair)\n        putDeploy, _ := rpcClient.PutDeploy(deploy)\n\n        processedDeploy, _ := eventClient.AwaitDeploy(putDeploy.DeployHash)\n\n        fmt.Printf("%+v\\n", processedDeploy)\n    }\n')))}y.isMDXComponent=!0}}]);