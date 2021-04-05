// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 

function domainName(url) {
  let regEx = /http:\/\/|https:\/\/|www./g;

  let trimUrl = url.replace(regEx, '');

  return trimUrl.split('.')[0];
}

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
