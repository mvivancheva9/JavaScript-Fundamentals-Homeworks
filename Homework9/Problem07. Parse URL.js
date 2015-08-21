/**
 * Problem 7. Parse URL

 Write a script that parses an URL address given in the format: [protocol]://[server]/[resource]
 and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.
 */
var url = 'http://telerikacademy.com/Courses/Courses/Details/239',
    protocol = '',
    server = '',
    resource = '';
protocol = url.substr(0, url.indexOf("://"));
url = url.substr(url.indexOf("://") + 3);
server = url.substr(0, url.indexOf("/"));
resource = url.substr(url.indexOf("/"));

var parsed = {
    protocol: protocol,
    server: server,
    resource: resource
}
console.log(parsed);