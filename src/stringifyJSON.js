/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (target) => {
  let result = [];
  function recurse(value){
    if(toString.apply(value).split(' ')[1].match('Undefined') || toString.apply(value).split(' ')[1].match('Function')){
      if(result[result.length - 1] === ':'){
        result.splice(result.lastIndexOf('"'));
        result.splice(result.lastIndexOf('"'));  
      }
    } else if(toString.apply(value).split(' ')[1].match('Null')){
      for(let s = 0; s < String(value).length; s++){
        result.push(String(value)[s]);
      }
    } else if(toString.apply(value).split(' ')[1].match('Array')){
      result.push('[');
      if(value.length !== 0){
        for(let i = 0; i < value.length; i++){
          if(result[result.length - 1] !== '['){
            result.push(',');
          }
          recurse(value[i]);
        }
      }
      result.push(']');
    } else if(toString.apply(value).split(' ')[1].match('Object')){
      result.push('{');
      if(Object.keys(value).length !== 0){
        for(let i = 0; i < Object.keys(value).length; i++){
          if(result[result.length - 1] !== '{'){
            result.push(',');
          }
          result.push('"');
          for(let s = 0; s < Object.keys(value)[i].length; s++){
            result.push(Object.keys(value)[i][s]);
          }
          result.push('"');
          result.push(':');
          recurse(value[Object.keys(value)[i]]);
        }
      }
      result.push('}');
    } else if(toString.apply(value).split(' ')[1].match('Date')){
      result.push('"');
      for(let s = 0; s < value.toJSON().length; s++){
        result.push(value.toJSON()[s]);
      }
      result.push('"');
    } else if(toString.apply(value).split(' ')[1].match('String')){
      result.push('"');
      for(let s = 0; s < value.length; s++){
        result.push(value[s]);
      }
      result.push('"');
    } else {
      for(let s = 0; s < value.toString().length; s++){
        result.push(value.toString()[s]);
      }
    }
  }
  recurse(target);
  return result.join('');
};