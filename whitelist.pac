/*
 * Proxy Auto-Configuration file
 *
 * Learn more about PAC file:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file
 */

function FindProxyForURL(url, host) {
    
    if (shExpMatch(host, "*.i2p")) {
        return "PROXY localhost:4444;";
    }
    
    return "DIRECT";
}
