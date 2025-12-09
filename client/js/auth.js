const params = new URLSearchParams(location.search);
const roomId = params.get("roomId");

if (!roomId) {
    (async () => {
        let res = await fetch("/api/create", { method: "POST" });

        if (res.ok) {
            let data = await res.json();
            if (data.roomId) location.href = `?roomId=${encodeURIComponent(data.roomId)}`;
        }
    })();
}

if (localStorage.getItem("roomId") != roomId) {
    clearCache();
}

localStorage.setItem("roomId", roomId);

function clearCache() {
    localStorage.clear();
}