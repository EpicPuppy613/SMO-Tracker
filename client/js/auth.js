function clearCache() {
    [
        "moons",
        "moonTotals",
        "captures",
        "abilities"
    ].forEach((variable) => {
        localStorage.removeItem(variable);
    });
}

window.clearCache = clearCache;

(async function () {
    async function getOrCreateRoom() {
        const params = new URLSearchParams(location.search);
        let roomId = params.get("roomId");

        if (!roomId) {
            let res = await fetch("/api/create", { method: "POST" });

            if (res.ok) {
                let data = await res.json();
                if (data.roomId) {
                    roomId = data.roomId;
                    const url = new URL(location.href);
                    url.searchParams.set("roomId", roomId);
                    history.replaceState(null, "", url);
                }
            }
        }
        if (localStorage.getItem("roomId") != roomId) {
            clearCache();
        }

        localStorage.setItem("roomId", roomId);
        return roomId;
    }

    async function initAbly() {
        const roomId = await getOrCreateRoom();

        const client = new Ably.Realtime({
            authUrl: `/api/auth?roomId=${encodeURIComponent(roomId)}`,
            echoMessages: false
        });

        await new Promise((resolve) => {
            client.connection.once("connected", resolve);
        });

        window.clientId = client.auth.clientId;

        const channelName = `room:${roomId}`;
        const channel = client.channels.get(channelName);
        
        window.ably = channel;
    }

    window.initAbly = initAbly;
})();