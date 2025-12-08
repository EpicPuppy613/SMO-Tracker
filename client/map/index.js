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
const sidebar = document.getElementById("sidebar");
const sidebarContent = document.getElementById("sidebar-content");
const tabCaptures = document.getElementById("sidebar-tab-captures");
const tabAbilities = document.getElementById("sidebar-tab-abilities");
const tabSubAreas = document.getElementById("sidebar-tab-subAreas");
const tabLoadingZones = document.getElementById("sidebar-tab-loadingZones");
const tabAvailableChecks = document.getElementById("sidebar-tab-availableChecks");

let currentKingdom = "sand";
let currentSidebarTab = "captures";

tabCaptures.onclick = updateSidebarTab;
tabAbilities.onclick = updateSidebarTab;
tabSubAreas.onclick = updateSidebarTab;
tabLoadingZones.onclick = updateSidebarTab;
tabAvailableChecks.onclick = updateSidebarTab;



kingdoms.forEach((kingdom) => {
    let newDiv = document.createElement("div");
    newDiv.id = `kingdom-list-${kingdom}`;
    newDiv.innerHTML = `<img src="/resource/kingdoms/${kingdom}.png" alt="${kingdom}" title="${kingdom}" draggable="false">`;
    newDiv.onclick = updateCurrentKingdom;
    kingdomList.appendChild(newDiv);
});

function updateCurrentKingdom(event) {
    let target = event.target.tagName == "IMG" ? event.target.parentElement : event.target;

    let newKingdom = target.id.split("-")[2];

    document.getElementById(`kingdom-list-${currentKingdom}`).classList.remove("selected");
    document.getElementById(`kingdom-list-${newKingdom}`).classList.add("selected");

    currentKingdom = newKingdom;
}

function updateSidebarTab(event) {
    let target = event.target.tagName == "P" ? event.target.parentElement : event.target;

    let newSidebarTab = target.id.split("-")[2];

    document.getElementById(`sidebar-tab-${currentSidebarTab}`).classList.remove("selected");
    document.getElementById(`sidebar-tab-${newSidebarTab}`).classList.add("selected");

    currentSidebarTab = newSidebarTab;

    switch(newSidebarTab) {
        case "captures":
            setSidebarContentCaptures();
            return;
        case "abilities":
            setSidebarContentAbilities();
            return;
        case "subAreas":
            setSidebarContentSubAreas();
            return;
        case "loadingZones":
            setSidebarContentLoadingZones();
            return;
        case "availableChecks":
            setSidebarContentAvailableChecks();
            return;
    }
}

function setSidebarContentCaptures() {

}

function setSidebarContentAbilities() {

}

function setSidebarContentSubAreas() {

}

function setSidebarContentLoadingZones() {

}

function setSidebarContentAvailableChecks() {

}