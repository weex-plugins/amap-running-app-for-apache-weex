module.exports = {
  gengerateRandomId(prefix) {
    return prefix + ((new Date()).getTime().toString().substring(9, 3)) + parseInt(Math.random() * 10000, 10);
  },
  setFirstLetterToUppercase(str) {
    return str.substr(0, 1).toUpperCase() + str.substring(1);
  },
  getObjectFirstVal(obj) {
    if(typeof obj === 'object') {
      return obj[Object.keys(obj)[0]]
    }
    return null;
  },
  // offset polyfill
  calcOffset(x, y) {
    var halfY = y / 2;
    var newX = x - halfY;
    return [newX, y];
  }
};
