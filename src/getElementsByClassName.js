/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (targetClassName) => {
  const matchedNodes = [];
  const documentRoot = this.document;

  const traverseDOM = (node) => {
    for (let childNode of node.children) {
      if (childNode.classList.contains(targetClassName)) matchedNodes.push(childNode);
      traverseDOM(childNode);
    }
  }

  traverseDOM(documentRoot);
  return matchedNodes;

};
