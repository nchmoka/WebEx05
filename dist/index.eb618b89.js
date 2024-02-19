const $content = document.querySelector(".content");
const contentHtml = model.map((b)=>b.toHTML()).join("");
$content.insertAdjacentHTML("beforeend", contentHtml);

