export function toTitleCase(str) {
    // Check if str is undefined or null
    if (!str) return "";

    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

