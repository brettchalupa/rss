import { parseRss } from "./mod.ts";

(async () => {
  const response = await fetch(
    //"https://lorem-rss.herokuapp.com/feed?length=20",
    "https://www.engadget.com/rss.xml",
  );
  const xml = await response.text();
  console.log(xml);
  const channel = await parseRss(xml);

  console.log("========== RESULT ============");
  console.log(channel);
})();