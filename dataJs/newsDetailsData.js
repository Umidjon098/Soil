import { baseUrl } from "./baseUrl.js";
const newsDetail = document.getElementById("news-item");
getNewsDetail();

function getNewsDetail() {
  const id = localStorage.getItem("currentID");
  const lang = window.localStorage.getItem("language");

  axios(`${baseUrl}/api/v1/main/news/${id}`)
    .then((response) => {
      let news = `
                 <div class="box-header">
                      <div class="date"><i class="fas fa-calendar-day"></i> 
                      <span>${
                        response.data.created_date.slice(11, 16) +
                        "/" +
                        response.data.created_date.slice(0, 10)
                      }
                      </span>
                      </div>
                        <div class="seen"><i class="fas fa-eye"></i> 
                        <span>${response.data.view_count}</span>
                      </div>
                    </div>
                    <div class="news-item">
                          <div class="title">
                          ${
                            lang === "uz"
                              ? response.data.title_uz
                              : lang === "eng"
                              ? response.data.title_en
                              : response.data.title_ru
                          }
                          </div>
                          <div class="short-des"> 
                                 ${
                                   lang === "uz"
                                     ? response.data.short_description_uz
                                     : lang === "eng"
                                     ? response.data.short_description_en
                                     : response.data.short_description_ru
                                 }
                          </div>
                          <div class="media-box">
                            <div class="row">
                                <div class="col-md-12">
                                    <div id="aboutCarousel" class="owl-carousel">
                                        ${response.data.images
                                          .map((data) => {
                                            return `
                                                    <img src=${data.file} alt="About image"/>
                                                    `;
                                          })
                                          .join("")}
                                       </div>
                                     </div>
                                     <div class=${
                                       response.data.video === null
                                         ? "d-none"
                                         : "col-md-12"
                                     }>
                                        <video controls>
                                        <source src=${
                                          response.data.video
                                        } type="video/mp4">
                                        </video>
                                     </div>
                                </div>
                          </div>
                          <div class="description">
                                  ${
                                    lang === "uz"
                                      ? response.data.body_uz
                                      : lang === "eng"
                                      ? response.data.body_en
                                      : response.data.body_ru
                                  }
                          </div>
                </div>`;
      newsDetail.innerHTML = news;
    })
    .catch((err) => {
      console.log(err);
    });
}
