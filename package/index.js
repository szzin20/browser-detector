function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName = "Unknown";
    let browserVersion = "Unknown";
    
    // Mendeteksi browser menggunakan User Agent
    if (userAgent.indexOf("Firefox") > -1) {
        browserName = "Mozilla Firefox";
    } else if (userAgent.indexOf("Chrome") > -1) {
        browserName = "Google Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        browserName = "Apple Safari";
    } else if (userAgent.indexOf("Edge") > -1) {
        browserName = "Microsoft Edge";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        browserName = "Internet Explorer";
    }

    // Mendeteksi versi browser
    const versionRegex = /(?:Version|MSIE|Firefox|Chrome|Safari|Edge|OPR)\/([\d.]+)/;
    const match = userAgent.match(versionRegex);
    if (match) {
        browserVersion = match[1];
    }

    // Mengembalikan hasil deteksi browser
    return {
        name: browserName,
        version: browserVersion,
        userAgent: userAgent
    };
}

module.exports = {
    detectBrowser
};
