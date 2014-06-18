StringUtilities = {};

StringUtilities.trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

StringUtilities.removeWhitespace = function(val) {
  return val.replace(/\s/g, "");
}