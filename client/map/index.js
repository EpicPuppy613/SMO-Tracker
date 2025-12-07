if (localStorage.getItem("SHA") !== window.__COMMIT_SHA__) {
    clearCache();
}
localStorage.setItem("SHA", window.__COMMIT_SHA__);

function clearCache() {}

const params = new URLSearchParams(location.search);
const roomId = params.get("roomId");

if (!roomId) {
    let res = fetch("/api/create", { method: "POST" });

    if (res.ok) {
        let data = res.json();
        if (data.roomId) location.href = `../map?roomId=${data.roomId}`;
    }
}