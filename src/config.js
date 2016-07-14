window.config = {
    local_host : "http://localhost:3030",
    local_iis :  "http://localhost:8030",
    dev_host : "http://nd-reporting.debug.web.nd",
    debug_host : "http://nd-reporting.debug.web.nd",
    beta_host : "http://nd-reporting.beta.web.sdp.101.com",
    host : ""
}

var current_host = window.location.href;
if(current_host.indexOf(window.config.local_host)>-1){
    window.config.host = window.config.dev_host;
}
else if(current_host.indexOf(window.config.local_iis)>-1){
    window.config.host = window.config.dev_host;
}
else if(current_host.indexOf(window.config.dev_host)>-1){
    window.config.host = window.config.dev_host;
}else if(current_host.indexOf(window.config.debug_host)>-1){
    window.config.host = window.config.debug_host;
}else if(current_host.indexOf(window.config.beta_host)>-1){
    window.config.host = window.config.beta_host;
}

