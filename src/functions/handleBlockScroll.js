export default (condition) => {
  condition
    ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
    : (document.getElementsByTagName("body")[0].style.overflow = "visible");
};
