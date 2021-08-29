const languages = {
  uz: {
    about: "Biz Haqimizda",
    document: "Dokument",
    service: "Hizmatlar",
    media: "Mediya",
    labaratory: "Labaratoriya",
    news: "Yangiliklar",
    address: "Bog'lanish",
  },
  en: {
    about: "About",
    document: "Document",
    service: "Service",
    media: "Media",
    labaratory: "Labaratory",
    news: "News",
    address: "Address",
  },
  ru: {
    about: "О нас",
    document: "Документ",
    service: "Услуги",
    media: "Медиа",
    labaratory: "Лаборатория",
    news: "Новости",
    address: "Контакт",
  },
};

const about = document.getElementById("about");
const doc = document.getElementById("doc");
const ser = document.getElementById("ser");
const med = document.getElementById("med");
const lab = document.getElementById("lab");
const news = document.getElementById("new");
const add = document.getElementById("add");

const language = localStorage.getItem("language");
if (language === "eng") {
  about.innerText = `${languages.en.about}`;
  doc.innerText = `${languages.en.document}`;
  ser.innerText = `${languages.en.service}`;
  med.innerText = `${languages.en.media}`;
  lab.innerText = `${languages.en.labaratory}`;
  news.innerText = `${languages.en.news}`;
  add.innerText = `${languages.en.address}`;
} else if (language === "rus") {
  about.innerText = `${languages.ru.about}`;
  doc.innerText = `${languages.ru.document}`;
  ser.innerText = `${languages.ru.service}`;
  med.innerText = `${languages.ru.media}`;
  lab.innerText = `${languages.ru.labaratory}`;
  news.innerText = `${languages.ru.news}`;
  add.innerText = `${languages.ru.address}`;
} else if (language === "uzb") {
  about.innerText = `${languages.uz.about}`;
  doc.innerText = `${languages.uz.document}`;
  ser.innerText = `${languages.uz.service}`;
  med.innerText = `${languages.uz.media}`;
  lab.innerText = `${languages.uz.labaratory}`;
  news.innerText = `${languages.uz.news}`;
  add.innerText = `${languages.uz.address}`;
}
