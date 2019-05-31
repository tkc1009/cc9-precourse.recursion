/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (value) => {
  if(value === undefined) return undefined;

  //primitive stringify functions
  const stringifySimple = (val) => val + '';
  const stringifyString = (val) => '\"' + val + '\"';

  const type = typeof value;
  if(type === 'boolean' || type === 'number' || value === null )
    return stringifySimple(value);
  else if(type === 'string')
    return stringifyString(value);
  else if(Array.isArray(value)) {
    var stringifiedItems = [];
    value.forEach((item) => {
      stringifiedItems.push(stringifyJSON(item));
    });
    return '[' + stringifiedItems.join(',') + ']';
  }
  else if(type === 'object'){
    var keyValuePairStrings = [];
    for(var key in value){
      var keyStr = stringifyJSON(key);
      var valStr = stringifyJSON(value[key]);
      if(keyStr && valStr){
        keyValuePairStrings.push(keyStr + ":" + valStr);
      }
    }
    return "{" + keyValuePairStrings.join(',') + "}";
  }
};
