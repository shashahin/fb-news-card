let newses = [
  {
    title: "Kalbela",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
  {
    title: "Bhorer kaghoj",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
  {
    title: "Joghantor",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
  {
    title: "Noyadin",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
  {
    title: "Jaijai Din",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
  {
    title: "Noya Digonto",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
  {
    title: "Kaler Kantho",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
  {
    title: "Batijar Khobor",
    news: "kalbela is a novel written by Samaresh Majumdar. It is a novel based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993. The novel is based on the Naxalite movement in Bengal. The novel was published in 1993.",
  },
];

function card(news) {
  return `
    <div class="card">
        <div class="card-header">
          <h3>${news.title}</h3>
          <div class="card-icon">
            <span>***</span>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </span>
          </div>
        </div>
        <div class="card-body">
          <p>
             ${news.news}
          </p>
        </div>
        <div class="card-body-sec">
          <div class="card-body-sec1">
            <div>
              <span>@</span>
              <span>#</span>
              <span>@</span>
              <span>18</span>
            </div>
            <div>
              <span>2 comments</span>
              <span>3 shares</span>
            </div>
          </div>
          <hr />
          <div class="card-body-sec2">
            <span>@Like</span>
            <span>#Comment</span>
            <span>@Share</span>
          </div>
        </div>
      </div>
    `;
}

function loadCards() {
  let cards = newses.map((news) => card(news)).join("");
  document.querySelector("#card_container").innerHTML = cards;
  // document.querySelector(".heading").setAttribute("data-count", books.length);
}
window.addEventListener("load", () => loadCards());
