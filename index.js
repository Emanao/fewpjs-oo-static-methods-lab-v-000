class Formatter {
  //add static methods here
  static capitalize(newString){
    return newString.replace(/^[a-z]/,newString.charAt(0).toUpperCase());
  }
  static sanitize(newString){
    return newString.replace(/^[A-Za-z0-9-']/);
  })
}
