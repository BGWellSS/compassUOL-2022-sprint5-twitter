import "./../../../dist/styles/main.css";
import { createNewsCard } from "./Newscard";

export interface NewsProps {
  dark?: boolean;
}

export const createNews = ({ dark }: NewsProps) => {
  const newsItems: string[] = [
    createNewsCard({
      id: "default",
      title: "COVID19",
      time: "Last night",
      textContent:
        "England’s Chief Medical Officer says the UK is at the most dangerous time of the pandemic",
      tags: "#covid19",
      dark: dark,
    }),
    createNewsCard({
      id: "1",
      title: "US news",
      time: "4h ago",
      textContent:
        "Parler may go offline following suspensions by Amazon, Apple and Google",
      tags: "#trump",
      dark: dark,
    }),
    createNewsCard({
      id: "2",
      title: "India",
      time: "1h ago",
      textContent:
        "India vs Australia: India hold on to earn a draw on Day 5 in Sydney Test",
      tags: "#sport",
      dark: dark,
    }),
  ];

  const newsSection = `
    <section class="news-section${dark ? " news-section-dark" : ""}">
      <header class="news-section-header">
        <h3 class="section-title">What’s happening</h3>
      </header>
      <div class="cards-container">
        ${newsItems
          .map((item) => {
            return item;
          })
          .join("")}
      </div>
      <footer class="news-section-footer">
        <a href="/404.html" class="news-showmore">Show more</a>
      </footer>
    </section>
  `;

  return newsSection;
};
