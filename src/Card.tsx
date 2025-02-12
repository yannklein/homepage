import "./Card.css";
import { useMemo } from 'react';
import { FaReact, FaPython, FaVuejs, FaLine } from 'react-icons/fa';
import { DiRuby, DiHeroku, DiPostgresql } from 'react-icons/di';
import { SiThreedotjs, SiPrisma, SiGooglecloud, SiNextdotjs, SiOpenai, SiVite, SiGraphql, SiSvelte, SiVercel, SiFirebase, SiFlask, SiRubyonrails, SiJavascript } from 'react-icons/si';

type CardData = {
  type: string;
  url: string;
  img: string;
  title: string;
  description: string;
  langs: string[];
  gif: boolean;
};

const Card = ({ type, url, img, title, description, langs, gif }: CardData) => {  

  // Helper function for background image
  const isPad = () => /iPad/i.test(navigator.userAgent);

  const clBackgroundImage = (type: string) => {
    return {backgroundImage: `url(https://res.cloudinary.com/yanninthesky/${type}/${img}${isPad() ? '.png' : '.webp'})`};
  };

  // Dynamically display the language icon
  const displayLangIcon = (lang: string) => {
    const icons = {
      ruby: DiRuby,
      flask: SiFlask,
      rails: SiRubyonrails,
      python: FaPython,
      javascript: SiJavascript,
      react: FaReact,
      vue: FaVuejs,
      firebase: SiFirebase,
      svelte: SiSvelte,
      graphql: SiGraphql,
      heroku: DiHeroku,
      postgres: DiPostgresql,
      three: SiThreedotjs,
      gcloud: SiGooglecloud,
      openai: SiOpenai,
      vite: SiVite,
      nextjs: SiNextdotjs,
      prisma: SiPrisma,
      line: FaLine,
      vercel: SiVercel
    };
    return icons[lang as keyof typeof icons] || null;
  };

  // Icon display logic based on the type
  const displayIcon = useMemo(() => {
    const icons = {
      vr: 'fa-vr-cardboard',
      code: 'fa-laptop-code',
      help: 'fa-hands-helping',
      maker: 'fa-tools',
      love: 'fa-heart',
    };
    return `fas icon-${type} ${icons[type as keyof typeof icons] || ''}`;
  }, [type]);

  return (
    <div className={`card-${type} card-frame visible`}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="header">
          <div className="title">
            <h2>{title}</h2>
            <div className="icon">
              <div className="lang">
                {langs.map((lang) => {
                  const LangIcon = displayLangIcon(lang);
                  return LangIcon ? <LangIcon key={lang} width="24px" height="24px" /> : null;
                })}
              </div>
              <i className={displayIcon}></i>
            </div>
          </div>
          <p>{description}</p>
        </div>
        {gif ? (
          <div className="media" style={clBackgroundImage('video/upload')}>
            <video loop muted autoPlay src={`https://res.cloudinary.com/yanninthesky/video/upload/${img}.webm`}></video>
          </div>
        ) : (
          <div className="media" style={clBackgroundImage('image/upload/yannklein.me')}></div>
        )}
      </a>
    </div>
  );
};

export default Card;