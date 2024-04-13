console.log("running before");
const links = document.querySelectorAll("#site_menu .set-link a");
links.forEach(element => {
  const href = element.href;
  element.setAttribute("data-tags", href);
  console.log("updated link data-tags", href);
});
