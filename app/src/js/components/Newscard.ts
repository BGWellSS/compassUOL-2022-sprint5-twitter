import "./../../../dist/styles/main.css";

export interface NewsCardProps {
  id: string;
  title: string;
  time: string;
  textContent: string;
  tags: string;
  dark?: boolean;
}

export const createNewsCard = ({
  id,
  title,
  time,
  textContent,
  tags,
  dark,
}: NewsCardProps) => {
  const newsCard = `
  <article class="news-card${dark ? " news-card-dark" : ""}">
    <section class="content-container">
      <div class="card-content">
        <header class="news-card-header">
          <span class="news-card-desc">${title}</span>
          <span class="dot-separator">.</span>
          <div class="news-card-time">${time}</div>
        </header>
        <p class="news-card-text">${textContent}</p>
      </div>
      <picture class="news-card-image-container">
        <img src="/images/news-${
          id ? id : "default"
        }.png" alt="news image - ${title}" class="news-card-image">
      </picture>
    </section>
    <footer class="news-card-footer">
      <span class="tag-label">Trending with</span>
      <a href="/404.html" class="tags">${tags}</a>
    </footer>
  </article>
  `;
  return newsCard;
};
