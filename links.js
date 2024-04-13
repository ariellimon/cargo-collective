const siteMenu=document.getElementById("site_menu");
const links=document.querySelectorAll(".set-link a");
links.forEach(element => {
  const href=element.href;
  element.setAttribute("data-tags", href);
  console.log("updated link data-tags", href);
});
