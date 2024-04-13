console.log("running before 2");
const button = document.getElementById("site_menu_button");;
button.addEventListener("click", () => {
  setTimeout(() => {
    const links = document.querySelectorAll("#site_menu .set-link a");
    console.log("found links", links);
    links.forEach(element => {
      console.log("element", element);
      const href = element.href;
      element.setAttribute("data-tags", href);
      console.log("updated link data-tags", href);
    });
  }, 200)
})
