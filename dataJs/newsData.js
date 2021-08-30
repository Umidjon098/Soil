import { baseUrl } from "./baseUrl.js";
$(document).ready(function () {
  getNewsData();
});
let massiveLength = 0;
async function getNewsData(search) {
  await axios(`${baseUrl}/api/v1/main/news/`, {
    params: {
      search: search,
      page_size: 4,
    },
  }).then((response) => {
    massiveLength = response.data.results.length;
    if (response.data.results.length === 0) {
      newsBox.innerHTML = `  
             <div class="load-data">
                <img src="./images/load-data.gif" alt="">
              </div>`;
    } else {
      const newsBox = document.querySelector("#newsBox");
      let newsItem = response.data.results
        .map((data) => {
          let img = data.images[0];
          const lang = window.localStorage.getItem("language");
          return `
                  <div  data-id=${
                    data.id
                  } class="blog-wrapper clearfix mt-4 item-news">
                    <div class="blog-meta">
                      <ul class="list-inline">
                        <li>
                        <i class="fas fa-calendar-day"></i>
                        ${
                          data.created_date.slice(11, 16) +
                          "/" +
                          data.created_date.slice(0, 10)
                        }</li>
                        <li>
                      <div class="seen"><i class="fas fa-eye"></i> 
                        <span>${data.view_count}</span>
                      </div>
                        </li>
                      </ul>
                  
                    </div>
                    <div class="blog-media">
                      <a href="" title="">
                      <img
                       class="img-responsive img-rounded"
                          src=${img === undefined ? "" : img.file}
                          alt=${img === undefined ? "" : img.name}
                      />
                      </a>
                    </div>
                    <div class="blog-desc-big">
                      <p class="lead">
                        ${
                          lang === "uz"
                            ? data.title_uz
                            : lang === "eng"
                            ? data.title_en
                            : data.title_ru
                        }
                      </p>
                      <p>
                      ${
                        lang === "uz"
                          ? data.short_description_uz
                          : lang === "eng"
                          ? data.short_description_en
                          : data.short_description_ru
                      }
                      </p>
                      <a href="news-detail.html" class="btn btn-primary setID">Read More</a> 
                    </div>
                  </div>
                `;
        })
        .join("");
      newsBox.innerHTML = newsItem;
    }
  });
}
if (massiveLength <= 4) {
  const pagination = document.querySelector(".pagination");
  pagination.classList.add("d-none");
}
const item = document.querySelector("#newsBox");
item.addEventListener("click", getNewsDetail);
function getNewsDetail(e) {
  // e.preventDefault();
  if (e.target.classList.contains("setID")) {
    const currentID = e.target.parentElement.parentElement.dataset.id;
    localStorage.setItem("currentID", currentID);
  }
}
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("login-form");
searchForm.addEventListener("submit", Search);
function Search(e) {
  e.preventDefault();
  getNewsData(searchInput.value);
}
