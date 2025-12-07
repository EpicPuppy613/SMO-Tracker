if (localStorage.getItem("SHA") !== window.__COMMIT_SHA__) {
    clearCache();
}
localStorage.setItem("SHA", window.__COMMIT_SHA__);

function clearCache() {}

const params = new URLSearchParams(location.search);
const roomId = params.get("roomId");

if (!roomId) {
    (async () => {
        let res = await fetch("/api/create", { method: "POST" });

        if (res.ok) {
            let data = await res.json();
            if (data.roomId) location.href = `/map?roomId=${encodeURIComponent(data.roomId)}`;
        }
    })();
}

const kingdoms = [
    "cap",
    "cascade",
    "sand",
    "lake",
    "wooded",
    "cloud",
    "lost",
    "metro",
    "snow",
    "seaside",
    "luncheon",
    "ruined",
    "bowser",
    "moon",
    "dark",
    "darker",
    "mushroom"
];

const kingdomList = document.getElementById("kingdom-list");

kingdoms.forEach((kingdom) => {
    let newDiv = document.createElement("div");
    newDiv.id = `kingdom-list-${kingdom}`;
    newDiv.innerHTML = `<img src="/resource/kingdoms/${kingdom}.png" alt="${kingdom}" title="${kingdom}">`;
    kingdomList.appendChild(newDiv);
});