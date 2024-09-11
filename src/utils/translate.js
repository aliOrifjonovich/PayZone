export const translate = (item, slug, lang) => {
  if (lang === "en") {
    lang = "eng";
  }

  return item[slug + "_" + lang];
};

export const translateTitleWithModification = (item, slug, lang) => {
  if (lang === "en") {
    lang = "eng";
  }
  let text = item[slug + "_" + lang];
  const words = text.split(" ");
  
  if (lang === "uz" || lang === "ru") {
    if (words.length >= 4) {
      words[3] = `<span style="color: #00d44a">${words[3]}</span><br />`;
    }
  }else {
    if (words.length >= 5) {
      words[4] = `<span style="color: #00d44a">${words[4]}</span><br />`;
    }
  }
  
  return <span dangerouslySetInnerHTML={{ __html: words.join(" ") }} />;
};

