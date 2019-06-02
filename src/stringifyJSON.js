/* exported stringifyJSON */

/*

What does the output for stringifyJSON look like? Play around with JSON.stringify to find out!

*/

const stringifyJSON = (inputItem) => {

  if (inputItem === null) {
    return "null";

  } else if (typeof inputItem === "function" || inputItem === undefined) {
    return false;
  
  } else if (inputItem instanceof Date) {
    return `"${inputItem.toISOString()}"`

  } else if (Array.isArray(inputItem)) {
    let returnString = "";
    inputItem.forEach((item, i) => {
      returnString = returnString + stringifyJSON(item);
      if (inputItem.length > 1 && inputItem.length !== i + 1 ) returnString = `${returnString},`;
    })
    return `[${returnString}]`;

  } else if (typeof inputItem === "object") {
    let returnString = "";
    const inputItemAsArray = Object.entries(inputItem);
    inputItemAsArray.forEach((item, i) => {
      if (stringifyJSON(item[1])) {
        returnString = returnString + `${stringifyJSON(item[0])}:${stringifyJSON(item[1])}`;
        if (inputItemAsArray.length > 1 && inputItemAsArray.length !== i + 1 ) returnString = `${returnString},`;
      }
    })
    return `{${returnString}}`;

  } else if (typeof inputItem === "string") {
    return `"${String(inputItem)}"`;

  } else {
    return String(inputItem);

  }
};
