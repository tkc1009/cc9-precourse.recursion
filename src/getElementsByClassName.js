/* exported getElementsByClassName */

/*
  The Document object in JavaScript is amazing. It does a lot of beautiful things for you,
  like getting all the elements on a page by their classname:

  const className = 'example';
  const elements = document.getElementsByClassName(className);

  But we don't like easy! So we'll make you write your own.
*/

const getElementsByClassName = (className) => {
  const results = [];
  function recurse(collectionLeft) {
    if(collectionLeft.length === 0){
      return;
    }
    for(let i = 0; i < collectionLeft.length; i++) {
      for(let j = 0; j < collectionLeft[i].className.split(" ").length; j++){
        if(collectionLeft[i].className.split(" ")[j] === className){
          results.push(collectionLeft[i]);
        }
      }
      recurse(collectionLeft[i].children);
    }
  };
  recurse(this.document.firstElementChild.children);
  return results;
};
