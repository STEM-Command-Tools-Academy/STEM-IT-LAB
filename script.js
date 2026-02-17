function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function scrollToArticles() {
  document.getElementById("articles").scrollIntoView({ behavior: "smooth" });
}

function submitForm(e) {
  e.preventDefault();
  alert("Thank you! We will contact you soon.");
}

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function addArticle() {
  const title = document.getElementById("articleTitle").value;
  const desc = document.getElementById("articleDesc").value;

  if (!title || !desc) return;

  const container = document.getElementById("articleList");
  const article = document.createElement("div");
  article.className = "project";
  article.innerHTML = `<h4>${title}</h4><p>${desc}</p>`;

  container.prepend(article);

  closeModal();
}
