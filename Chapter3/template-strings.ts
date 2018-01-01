var baseUrl = "http://path-to-domain";
var pathToResource = "/path/to/resource";
var parameterValue = "11";
var secondParameterValue = "Billy Bob";

var url = `
${baseUrl}/${pathToResource}?
param=${parameterValue}&
secondParameter=${secondParameterValue}`;
