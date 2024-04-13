console.log("running before 1");
const links = document.querySelectorAll("#site_menu .set-link a");
console.log("found links", links);
links.forEach(element => {
  console.log("element", element);
  const href = element.href;
  element.setAttribute("data-tags", href);
  console.log("updated link data-tags", href);
});
