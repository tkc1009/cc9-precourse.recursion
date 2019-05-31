/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (className) => {
  const result = [];

  const traverseDOM = (node) => {
    if(node.className && node.className.split(' ').indexOf(className) > -1){
      result.push(node);
    }

    const children = node.childNodes;
    for(let i=0; i<children.length; i++){
      traverseDOM(children[i]);
    }
  };

  traverseDOM(document.body);
  return result;
};
