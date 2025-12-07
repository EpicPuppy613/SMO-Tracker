import { readFileSync, writeFileSync } from "fs";
import path from "path";

const sha = process.env.VERCEL_GIT_COMMIT_SHA || "dev";

const htmlPaths = [
    path.resolve(__dirname, "..", "..", "client", "index.html"),
    path.resolve(__dirname, "..", "..", "client", "map", "index.html")
];

htmlPaths.map((htmlPath) => {
    let html = readFileSync(htmlPath, "utf8");
    const updated = html.replace("__COMMIT_SHA_PLACEHOLDER__", sha);
    writeFileSync(htmlPath, updated);
});

console.log("Injected commit SHA", sha);