function diffForHumans(date) {
    const now = new Date();
    const past = new Date(date);
    const diffInSeconds = Math.floor((now - past) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} detik yang lalu`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} menit yang lalu`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} jam yang lalu`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} hari yang lalu`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} bulan yang lalu`;
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} tahun yang lalu`;
}

function smartTrim(text, maxLength = 60) {
    if (text.length <= maxLength) return text;

    const words = text.split(" ");
    let result = "";

    for (const word of words) {
        if ((result + " " + word).trim().length <= maxLength) {
            result = (result + " " + word).trim();
        } else {
            break;
        }
    }

    return result + "...";
}

function formatTime(datetime) {
    const date = new Date(datetime);

    const hari = date.toLocaleDateString("id-ID", { weekday: "long" });
    const tanggal = date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
    const jam = date.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return `${hari}, ${tanggal} - Jam ${jam}`;
}

function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}

export { diffForHumans, smartTrim, formatTime, stripHtml };
