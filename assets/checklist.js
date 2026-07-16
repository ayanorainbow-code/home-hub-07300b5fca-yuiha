(function () {
  var pageKey = document.body.getAttribute("data-page") || location.pathname;

  function storageKey(id) {
    return "checklist:" + pageKey + ":" + id;
  }

  document.querySelectorAll(".checklist input[type=checkbox]").forEach(function (box) {
    var id = box.id;
    if (!id) return;
    var li = box.closest("li");
    var saved = localStorage.getItem(storageKey(id));
    if (saved === "1") {
      box.checked = true;
      if (li) li.classList.add("done");
    }
    box.addEventListener("change", function () {
      localStorage.setItem(storageKey(id), box.checked ? "1" : "0");
      if (li) li.classList.toggle("done", box.checked);
    });
  });
})();
