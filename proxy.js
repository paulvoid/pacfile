function FindProxyForURL(url, host) {

    // use proxy for specific domains
    if (dnsDomainIs(host, "ego-d.xyz")){
        return "PROXY 127.0.0.1:8000";
    }
    // any url of ego-d.xyz
    if (shExpMatch(url, "ego-d.xyz/*")){
        return "PROXY 127.0.0.1:8000";
    }

    // roblox.com
    if (dnsDomainIs(host, "roblox.com") || (shExpMatch(url, "*.roblox.com*"))){
        return "PROXY 127.0.0.1:8000";
    }

    // by default use no proxy
    return "DIRECT";
}
