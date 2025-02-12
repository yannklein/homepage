import { useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import "./SelfIntroBanner.css";

const IntroCard = () => {
  const [introText, setIntroText] = useState<string>("");

  // Fetch markdown content when the component is mounted
  useEffect(() => {
    const url = "https://raw.githubusercontent.com/yannklein/yannklein/master/readme.md";
    fetch(url)
      .then(response => response.text())
      .then((data) => {
        setIntroText(data);
      });
  }, []);

  // Render the markdown
  const md = new MarkdownIt();
  const formattedIntro = md.render(introText);

  return (
    <div className="intro-card-frame">
      <div className="intro-card" dangerouslySetInnerHTML={{ __html: formattedIntro }} />
    </div>
  );
};

export default IntroCard;