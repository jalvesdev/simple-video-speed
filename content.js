function showSpeed(video) {
    // Remove um indicador anterior, caso ainda exista.
    document.getElementById("simple-video-speed-indicator")?.remove();

    const indicator = document.createElement("div");
    indicator.id = "simple-video-speed-indicator";
    indicator.textContent = `${video.playbackRate.toFixed(1)}×`;

    Object.assign(indicator.style, {
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "2147483647",

        padding: "8px 14px",
        borderRadius: "6px",

        background: "rgba(0, 0, 0, 0.75)",
        color: "white",

        fontFamily: "sans-serif",
        fontSize: "18px",
        fontWeight: "bold",

        pointerEvents: "none"
    });

    document.body.appendChild(indicator);

    setTimeout(() => {
        indicator.remove();
    }, 800);
}


document.addEventListener("keydown", (event) => {
    const target = event.target;

    if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
    ) {
        return;
    }

    const videos = [...document.querySelectorAll("video")];

    const video =
        videos.find((v) => !v.paused && !v.ended) ||
        videos[0];

    if (!video) {
        return;
    }

    const key = event.key.toLowerCase();
    
    if (!["d", "s", "r"].includes(key)){
        return;
    }

    // A tecla pertence ao Simple Video Speed.
    // Evita conflito com atalhos do site.
    event.preventDefault();
    event.stopPropagation();

    if (key === "d") {
        video.playbackRate = Math.min(3, video.playbackRate + 0.5);
        showSpeed(video);
    }

    if (key === "s") {
        video.playbackRate = Math.max(0.5, video.playbackRate - 0.5);
        showSpeed(video);
    }

    if (key === "r") {
        video.playbackRate = 1;
        showSpeed(video);
    }
});
