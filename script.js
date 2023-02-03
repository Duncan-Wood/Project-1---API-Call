
let button = document.querySelector("#searchButton")

async function getData (event) {
    event.preventDefault()
    let textInput = document.querySelector("#inputBar").value

    const url = `http://api.weatherapi.com/v1/current.json?key=933bde006f044a14a6515410230302&q=${textInput}`

    fetch(url)
        .then(res => {
        return res.json()
        })
        .then (res => {
            console.log(url)
            console.log(`Success!`, res)

        })
        .catch(err => {
            console.log("Error!", err)
        })
}

//Add event listener for the button to call function when pressed
button.onclick = getData