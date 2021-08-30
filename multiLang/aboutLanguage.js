const data = {
  uz: {
    homeText: "TUPROQ TARKIBI VA REPOZITORIYSI, SIFATI TAHLIL MARKAZI",
    ruleText:
      "Qishloq xo‘jaligi sohasini boshqarish tizimini isloh qilish, er va suv  resurslaridan oqilona foydalanish borasidagi ilg‘or    texnologiyalarni joriy etish, oziq-ovqat xavfsizligini ta’minlash  eng muhim vazifamizdir",
    moreRead: "Ko'proq o'qish",
    moreSee: "Ko'proq ko'rish ",
    aboutTitle: " Biz haqimizda",
    serviceTitle: "Xizmatlar",
    newsTitle: "So'ngi Yangiliklar",
    newsText:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,iure in, ab animi fuga atque aut nesciunt nulla, labore earum veritatis. Debitis, veritatis  voluptatibus ad illum dolor vel nesciunt atque numquam.Autem ipsam esse officia facilis nisi suscipit quisquam natus",
    allNews: "Barcha yangiliklar",
    serviceRule: "Biz sizga eng yaxshi va sifatli xizmatlarni  taklif etamiz!",
    expertTitle: "Halqaro ekspertlar",
    expertText: "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    areaTitle: "Tahlil qilingan maydon soni",
    areaText: "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    areaQuantity: " Tadqiqot olib borilgan gegtar",
    quantityText:
      "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    clientsTitle: "Mijozlar soni",
    clientsText:
      "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
  },
  en: {
    homeText: "SOIL COMPOSITION AND REPOSITORY, QUALITY ANALYSIS CENTER",
    ruleText:
      "Our most important task is to reform the management system of the agricultural sector, the introduction of advanced technologies for the rational use of land and water resources, food security",
    moreRead: "Read More",
    moreSee: "See more",
    aboutTitle: "About us",
    serviceTitle: "Services",
    newsTitle: "Latest News",
    newsText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, iure in, ab animi fuga atque aut nesciunt nulla, labore earum veritatis. natus ",
    allNews: "All news",
    serviceRule: "We offer you the best and quality services!",
    expertTitle: "International experts",
    expertText: "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    areaTitle: "Number of fields analyzed",
    areaText: "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    areaQuantity: "Hectare surveyed",
    quantityText:
      "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    clientsTitle: "Number of customers",
    clientsText:
      "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
  },
  ru: {
    homeText: "СОСТАВ ПОЧВЫ, ЦЕНТР АНАЛИЗА КАЧЕСТВА",
    ruleText:
      "Наша важнейшая задача - реформирование системы управления аграрным сектором, внедрение передовых технологий для рационального использования земельных и водных ресурсов, обеспечения продовольственной безопасности",
    moreRead: "Подробнее",
    подробнееСм: "Узнать больше",
    aboutTitle: "О нас",
    serviceTitle: "Услуги",
    newsTitle: "Последние новости",
    newsText:
      "Lorem ipsum dolor sit amet, conctetur adipisicing elit. Quisquam, iure in, ab animi fuga atque aut nesciunt nulla, labore earum veritatis. natus",
    allNews: "Все новости",
    serviceRule: "Мы предлагаем Вам самые лучшие и качественные услуги!",
    expertTitle: "Международные эксперты",
    expertText: "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    areaTitle: "Количество проанализированных полей",
    areaText: "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    areaQuantity: "Гектар обследован",
    quantityText:
      "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
    clientsTitle: "Количество клиентов",
    clientsText:
      "Quisque porttitor eros quis leo pulvinar, at hendrerit sapien",
  },
};

let homeText = document.getElementById("homeText");
let ruleText = document.getElementById("ruleText");
let moreRead = document.getElementById("moreRead");
let moreSee = document.getElementById("moreSee");
let aboutTitle = document.getElementById("aboutTitle");
let serviceTitle = document.getElementById("serviceTitle");
let serviceLink = document.getElementById("serviceLink");
let newsTitle = document.getElementById("newsTitle");
let newsText = document.getElementById("newsText");
let allNews = document.getElementById("allNews");
let serviceRule = document.getElementById("serviceRule");
let expertTitle = document.getElementById("expertTitle");
let expertText = document.getElementById("expertText");
let areaTitle = document.getElementById("areaTitle");
let areaQuantity = document.getElementById("areaQuantity");
let quantityText = document.getElementById("quantityText");
let clientsTitle = document.getElementById("clientsTitle");
let clientsText = document.getElementById("clientsText");
const til = localStorage.getItem("language");
if (til === "eng") {
  homeText.innerText = data.en.homeText;
  ruleText.innerText = data.en.ruleText;
  moreRead.innerText = data.en.moreRead;
  moreSee.innerText = data.en.moreSee;
  // aboutTitle.innerText = data.en.aboutTitle;
  // serviceTitle.innerText = data.en.serviceTitle;
  serviceLink.innerText = data.en.serviceTitle;
  newsTitle.innerText = data.en.newsTitle;
  newsText.innerText = data.en.newsText;
  allNews.innerText = data.en.allNews;
  serviceRule.innerText = data.en.serviceRule;
  expertTitle.innerText = data.en.expertTitle;
  expertText.innerText = data.en.expertText;
  areaTitle.innerText = data.en.areaTitle;
  areaQuantity.innerText = data.en.areaQuantity;
  quantityText.innerText = data.en.areaQuantity;
  clientsTitle.innerText = data.en.clientsTitle;
  clientsText.innerText = data.en.clientsText;
} else if (til === "rus") {
  homeText.innerText = data.ru.homeText;
  ruleText.innerText = data.ru.ruleText;
  moreRead.innerText = data.ru.moreRead;
  moreSee.innerText = data.ru.moreSee;
  aboutTitle.innerText = data.ru.aboutTitle;
  serviceTitle.innerText = data.ru.serviceTitle;
  serviceLink.innerText = data.ru.serviceTitle;
  newsTitle.innerText = data.ru.newsTitle;
  newsText.innerText = data.ru.newsText;
  allNews.innerText = data.ru.allNews;
  serviceRule.innerText = data.ru.serviceRule;
  expertTitle.innerText = data.ru.expertTitle;
  expertText.innerText = data.ru.expertText;
  areaTitle.innerText = data.ru.areaTitle;
  areaQuantity.innerText = data.ru.areaQuantity;
  quantityText.innerText = data.ru.quantityText;
  clientsTitle.innerText = data.ru.clientsTitle;
  clientsText.innerText = data.ru.clientsText;
} else if (til === "uzb") {
  homeText.innerText = data.uz.homeText;
  ruleText.innerText = data.uz.ruleText;
  moreRead.innerText = data.uz.moreRead;
  moreSee.innerText = data.uz.moreSee;
  aboutTitle.innerText = data.uz.aboutTitle;
  serviceTitle.innerText = data.uz.serviceTitle;
  serviceLink.innerText = data.uz.serviceTitle;
  newsTitle.innerText = data.uz.newsTitle;
  newsText.innerText = data.uz.newsText;
  allNews.innerText = data.uz.allNews;
  serviceRule.innerText = data.uz.serviceRule;
  expertTitle.innerText = data.uz.expertTitle;
  expertText.innerText = data.uz.expertText;
  areaTitle.innerText = data.uz.areaTitle;
  areaQuantity.innerText = data.uz.areaQuantity;
  quantityText.innerText = data.uz.areaQuantity;
  clientsTitle.innerText = data.uz.clientsTitle;
  clientsText.innerText = data.uz.clientsText;
}
