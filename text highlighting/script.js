document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const words = content.textContent.split(" ");

  words.forEach((word) => {
    if (word.length > 8) {
      const span = document.createElement("span");
      span.textContent = word;
      span.classList.add("highlight");
      content.appendChild(span);
      content.appendChild(document.createTextNode(" "));
    } else {
      const textNode = document.createTextNode(word + " ");
      content.appendChild(textNode);
    }
  });
});
