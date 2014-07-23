StringUtilities = {};

StringUtilities.trimInput = function(val) {
  return val.replace(/^\s*|\s*$/g, "");
}

StringUtilities.removeWhitespace = function(val) {
  return val.replace(/\s/g, "");
}

StringUtilities.isNotEmpty = function(val) {
	return /([^\s])/.test(val);
}

Validations = {};

Validations.isValidPassword = function(val) {
	return (val.length >= 6);
}