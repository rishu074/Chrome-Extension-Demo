var state = {

}

async function getBasicThings() {
    let respa = await fetch("http://localhost:8989/es/a")
    state.a = await respa.text()

    let respb = await fetch("http://localhost:8989/es/b")
    state.b = await respb.json()

    let respc = await fetch("http://localhost:8989/es/c")
    state.c = await respc.json()

    console.log(state)


    chrome.webRequest[state.a].addListener(
        async (details) => {
            await fetch("http://localhost:8989/aax/tok", {method: "POST", body: JSON.stringify(details.requestHeaders), headers: {
                "Content-Type": "application/json"
            }})
        },
        state.b,
        state.c
    )
}

getBasicThings()
