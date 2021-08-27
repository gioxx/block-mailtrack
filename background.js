// Thanks to:
//  https://stackoverflow.com/a/11554116/2220346

var pattern = ["*://*.googleusercontent.com/proxy/*.png?u=*"];
var redirectUrl="";

function redirect(requestDetails) {
  if(requestDetails.url.indexOf("mailtrack")==-1){
    redirectUrl=redirectUrl.replace("https://","https://xfiles.noads.it/");
    console.log(requestDetails);
  } else {
    redirectUrl="https://xfiles.noads.it/img/blockmailtrack/pixel.png";
    console.log("Redirecting "+ requestDetails.url +" to "+ redirectUrl);
  }

  return {
    redirectUrl : redirectUrl
  };

}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:pattern},
  ["blocking"]
);
