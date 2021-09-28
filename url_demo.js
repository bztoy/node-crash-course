const url = require('url');

const url_demo = () => {
    const google = new URL('https://www.google.com/search?q=abc&uact=5');
    const myWebsite = new URL('http://gotonowwhere.com:5000/solarsystem.html?planet=pluto');

    // Serialized URL
    console.log(`URL is: ${google.href}`);
    console.log(`URL from tostring: ${google.toString()}`);

    // Host (root domain with port number)
    console.log(`Host: ${google.host}`);
    console.log(`Host: ${myWebsite.host}`);
    // Hostname (does not show port)
    console.log(`Hostname: ${google.hostname}`);
    console.log(`Hostname: ${myWebsite.hostname}`);
    // Pathname
    console.log(`Pathname: ${google.pathname}`);
    console.log(`Pathname: ${myWebsite.pathname}`);
    // Serialized query
    console.log(`Serialized query: ${google.search}`);
    console.log(`Serialized query: ${myWebsite.search}`);
    // Params object
    console.log(`Params object: ${google.searchParams}`);
    console.log(`Params object: ${myWebsite.searchParams}`);
    // Add param
    myWebsite.searchParams.append('weather', 'very very cold');
    console.log(`Params object after modifed: ${myWebsite.searchParams}`);
    // Loop through params
    myWebsite.searchParams.forEach((value, name) => console.log(`${value}:${name}`));

}

module.exports = url_demo;