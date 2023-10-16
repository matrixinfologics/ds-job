jQuery(document).ready(function () {
    let e = function (e) {
          jQuery.ajax({
              url: "https://app.directshifts.com/jobs/p/list.json",
              async: !0,
              data: e,
              crossDomain: !0,
              success: function (e) {
                  let a = document.getElementById("root"),
                      t = "";
                  if ("" != e.jobs) {
                      for (let a = 0; a < e.jobs.length; a++) {
                          e.specialties;
                          let s = e.jobs[a].specialty_names.split(","),
                              i = "";
                          for (let e = 0; e < s.length; e++) e <= 2 && (i += `<span class="jl-sn-inr-items">${s[e]}</span>`);
                          let n = e.jobs[a].practice_type,
                              l = "",
                              c = 0;
                          for (let [e, a] of Object.entries(n)) c <= 2 && (l += `<span class="jl-pt-inr-items">${a}</span>`), c++;
                          var getParms = `${e.jobs[a].link}`;
                          var queryParams = new URLSearchParams(new URL(getParms).search);
                          var utmSource = queryParams.get("utm_source");

                          var currentURL = window.location.href;
                          var urlParams = new URLSearchParams(new URL(currentURL).search);
                          var getUtmSource = urlParams.get('utm_source');
                          var getUtmMedium = urlParams.get('utm_medium');
                          var getUtmCampaign = urlParams.get('utm_campaign');
                          function checkUTMParameters(url) {
                            var regex = /[?&](utm_medium|utm_source|utm_campaign)=/;
                            return regex.test(url);
                          }
                         (t += `<tr class="my-code">\n   <td> <div class="jl-title-wrap">\n   <div class="jl-title"><a target="_blank" class="data-link" href="${e.jobs[a].link}">${
                              e.jobs[a].title
                          }</a><div class="jl-main-head"><div class="jl-location"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b9548588f48e27bc925_Location.svg"/><span>${e.jobs[a].city},</span> <span>${
                              e.jobs[a].state_code
                          }</span></div><div class="jl-location shift-${e.jobs[a].shift_type}"><span>${e.jobs[a].shift_type} Shift</span> </div><div class="jl-location shift-${e.jobs[a].hours_per_shift}"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b92415a74cf87e280c9_Hours%20per%20shifts.svg"/> <span>${e.jobs[a].hours_per_shift} Hours Per Shift</span> </div><div class="jl-location cat-${e.jobs[a].category}"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b9503ed3515087c48d6_Job%20category.svg"/> <span>${e.jobs[a].category}</span> </div><div class="jl-location office-${e.jobs[a].practice_type}"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b97cd50b343566cede6_Practice%20type.svg"/> <span>${e.jobs[a].practice_type}</span> </div></div></div><div class="apply-now-wrap">` + 
                          (checkUTMParameters(currentURL) ? `<a target="_blank" class="btn-test" href="https://app.directshifts.com/jobs/p/${e.jobs[a].slug}?utm_source=${getUtmSource}&utm_medium=${getUtmMedium}&utm_campaign=${getUtmCampaign}">Test Button</a>` 
                          : `<a target="_blank" class="btn-test" href="${e.jobs[a].link}">Test Button</a>`) + 
                          `<a target="_blank" class="btn-applynow" href="${e.jobs[a].link}">Apply Now</a></div></div>\n   <div class="jl-types"> <a target="_blank" class="data-link" href="${
                              e.jobs[a].link
                          }">\n   <div class="jl-sn-wrapper">\n   <h6 class="jl-sn-heading">Specialty</h6>\n   <div class="jl-sn">${i}</div>\n   </div> <div class="jl-pt-wrapper">\n   <h6 class="jl-pt-heading">Practice Type</h6>\n   <div class="jl-pt">${
                              "string" == typeof e.jobs[a].practice_type ? `<span class="jl-pt-inr-items">${e.jobs[a].practice_type}</span>` : l
                          }</div>\n   </div></a></div></td></tr>`),
                              4 === a &&
                                  (t +=
                                      '<tr class="desktopSign cstom1 mobile-apps-1"><td colspan="2"><div class="main-content-b"><div class="image-block"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f538c315ff9443fa72_Sign%20Up%20Banner%20(1).svg" alt="image"></div><div class="right-content"><div class="directshift_regstring"><h4>Make the most of DirectShifts by registering for free!</h4><div class="dirctneq"><ul><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f1b3935fbb351447b5_Personalised%20recommendations.svg"><span>Personalised recommendations</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f18c8705e97403803c_Get%20support%20at%20every%20step.svg"><span>Get support at every step</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f1e4171f39a0ede315_Boost%20visibility%20with%20employers%20.svg"><span>Real-time updates</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f27031cb2307405bbf_Real-time%20updates.svg"><span>Boost visibility with employers</span></li></ul></div><div class="dirctregstrbtn"><a href="/sign-up">Register for free</a></div></div></div></div></td></tr>'),
                              10 === a &&
                                  (t +=
                                      '<tr class="desktopSign cstom2 mobile-apps download-app"><td colspan="2"><div class="main-content-b"><div class="image-block"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d2d92988a64a768196642_Job-Listing-2add.png" alt="image"></div><div class="right-content"><div class="directshift_regstring"><h4>Find your perfect healthcare job on the go with the DirectShifts App!</h4><div class="dirctneq"><ul class="app-list"><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Application Tracking</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Document Management</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Seamless Timesheets</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Paycheck Tracking</span></li></ul></div><div class="dirctregstrbtn download"><a href="https://play.google.com/store/apps/details?id=com.directshifts&amp;hl=en_US&amp;gl=US">Download Now</a></div></div></div></div></td></tr>');
                      }
                      let a = "";
                      e.total_pages > 1 &&
                          (a =
                              1 == e.current_page
                                  ? `<nav class="pagination">\n     <span data-value="${e.current_page}" class="current">${e.current_page}</span>\n     <span data-value="${e.next_page}" class="pgn-func">${
                                        e.next_page
                                    }</span>\n     <span data-value="${e.current_page + 1}" rel="next" class="pgn-func next">Next</span>\n     <span data-value="${e.total_pages}" class="pgn-func last last-1">Last</span>\n     </nav>`
                                  : e.total_pages == e.current_page
                                  ? `<nav class="pagination">\n     <span data-value="1" class="pgn-func first">First</span>\n     <span data-value="${e.current_page - 1}" class="pgn-func prev">Prev</span>\n     <span data-value="${
                                        e.prev_page
                                    }" class="pgn-func">${e.prev_page}</span>\n     <span class="current">${e.current_page}</span>\n     </nav>`
                                  : `<nav class="pagination">\n     <span data-value="1" class="pgn-func first">First</span>\n     <span data-value="${e.current_page - 1}" class="pgn-func prev">Prev</span>\n     <span data-value="${
                                        e.prev_page
                                    }" class="pgn-func">${e.prev_page}</span>\n     <span class="current">${e.current_page}</span>\n     <span data-value="${e.next_page}" class="pgn-func">${e.next_page}</span>\n     <span data-value="${
                                        e.current_page + 1
                                    }" rel="next" class="pgn-func next">Next</span>\n     <span data-value="${e.total_pages}" class="pgn-func last last-1">Last</span>\n     </nav>`),
                          jQuery(".api-pagination").html(a);
                  } else
                      (t =
                          '<div class="nrfound"><h2>We may have job openings for you, even if it\'s not yet listed!</h2><p>Our job listings are constantly evolving. Connect with us to uncover potential job openings tailored to your needs. We\'re here to help you find the right job for you. </p><a href="https://www.directshifts.com/clinician-perks-benefits">Connect with a clinician partner</a></div>'),
                          jQuery(".api-pagination").html("");
                  if (((a.innerHTML = t), !document.getElementById("lists_state"))) {
                      let a = "";
                      for (let t = 0; t < e.states.length; t++)
                          a += `<label>\n         <input type="radio" class="api-state" name="state" value="${e.states[t].code}">\n         <span>${e.states[t].code}</span>\n         ${e.states[t].name}\n       </label>`;
                      jQuery(".apiState").after(`<datalist id="lists_state">${a}</datalist>`);
                  }
                  if (!document.getElementById("lists_city")) {
                      let e = ["Loganville", "Hudson", "Chico", "Remote", "Any", "Martinez", "Modesto", "Chicago", "Brooklyn", "Saratoga springs", "Yonkers", "Muskegon", "Wilmington", "Staten island", "Austin"],
                          a = "";
                      for (let t = 0; t < e.length; t++) {
                          let s = e[t];
                          a += `<label>\n   <input type="radio" class="api-city" name="city_radio" value="${s}">\n       ${s}\n      </label>`;
                      }
                      jQuery(".apiCity").after(`<datalist id="lists_city">${a}</datalist>`);
                  }
                  let s = "";
                  for (let a = 0; a < e.specialties.length; a++) {
                      let t = e.specialties[a];
                      s += `<label>\n         <input type="radio" class="api-speciality" name="specialty_radio" value="${t}">\n            ${t}\n      </label>`;
                  }
                  if ((jQuery("#lists_speciality").remove(), jQuery(".listSpeciality").after(`<datalist id="lists_speciality">${s}</datalist>`), !document.getElementById("lists_practice_type"))) {
                      let e = ["Emergency Department", "Inpatient", "Outpatient", "Telemedicine", "Urgent Care", "Correctional", "Home Care", "Clinic/Office-Based Practice", "Addiction Center/Rehab"],
                          a = "";
                      for (let t = 0; t < e.length; t++) {
                          let s = e[t];
                          a += `<label>\n        <input type="radio" class="api-practice-type" name="practice_types" value="${s}">\n          ${s}\n        </label>`;
                      }
                      jQuery(".listPractice").after(`<datalist id="lists_practice_type">${a}</datalist>`);
                  }
                  if (!document.getElementById("lists_category")) {
                      let e = ["Contract", "Per-Diem", "Permanent"],
                          a = "";
                      for (let t = 0; t < e.length; t++) {
                          let s = e[t];
                          a += `<label>\n         <input type="radio" class="api-category" name="categories" value="${s}">\n           ${s}\n        </label>`;
                      }
                      jQuery(".listCategory").after(`<datalist id="lists_category">${a}</datalist>`);
                  }
                  if (!document.getElementById("lists_occupation")) {
                      let e = [
                              "Physician (MD/DO)",
                              "Physician Assistant (PA)",
                              "Advanced Practice Registered Nurse (APRN, NP, CNS, Midwife, etc.)",
                              "Certified Registered Nurse Anesthesist (CRNA)",
                              "NurseMidwife",
                              "Nurse Specialist/CNS",
                              "Registered Nurse (RN)",
                              "Licensed Practical Nurse/Licensed Vocational Nurse (LVN, LPN)",
                              "Certified Nursing Assistant (CNA)",
                              "Patient Care Technician (PCT)",
                              "Respiratory, Rehabilitative & Developmental Therapists (OT, PT, etc.)",
                              "Technologist (Sonography, Radiology, etc.)",
                              "Technician (Radiologic, Cardiovascular, Histo, etc.)",
                              "Medical Assistants (CMA, RMA)",
                              "Dental Services (DDS, Technician, Hygienist, etc.)",
                              "Behavioral Health & Social Work Services (Counselors, Social Workers, etc.)",
                              "Dietitians and Nutritionists",
                              "Pharmacist",
                              "Healthcare Administration",
                          ],
                          a = "";
                      for (let t = 0; t < e.length; t++) {
                          let s = e[t];
                          a += `<label>\n          <input type="radio" class="api-occupation" name="occupations" value="${s}">\n           ${s}\n       </label>`;
                      }
                      jQuery(".apiOccupation").after(`<datalist id="lists_occupation">${a}</datalist>`);
                  }
              },
          });
      },
      a = window.location.search;
  if (a) {
      let t = new URLSearchParams(a),
          s = Object.fromEntries(t);
      e(s);
  } else e();
  jQuery(document).on("click", "datalist input", function () {
      let a = jQuery('input[type="radio"]:checked').length;
      jQuery("#checked-count").text("Applied (" + a + ")");
      let t = jQuery(".api-state:checked").val(),
          s = jQuery(".api-city:checked").val(),
          i = jQuery(".api-occupation:checked").val(),
          n = jQuery(".api-speciality:checked").val(),
          l = jQuery(".api-category:checked").val(),
          c = jQuery(".api-practice-type:checked").val(),
          r = new URL("https://www.directshifts.com/job-listing-copy-aug-24");
      t && r.searchParams.set("state", t),
          s && r.searchParams.set("city", s),
          i && r.searchParams.set("occupation", i),
          n && r.searchParams.set("specialty", n),
          l && r.searchParams.set("category", l),
          c && r.searchParams.set("practice_type", c),
          window.history.pushState(null, "", r.toString()),
          e({ state: t, city: s, occupation: i, specialty: n, category: l, practice_type: c });
  }),
      jQuery("#clear-all-button").on("click", function () {
          jQuery('input[type="radio"]').prop("checked", !1);
          let a = new URL("https://www.directshifts.com/job-listing-copy-aug-24");
          a.searchParams.delete("state"),
              a.searchParams.delete("city"),
              a.searchParams.delete("occupation"),
              a.searchParams.delete("specialty"),
              a.searchParams.delete("category"),
              a.searchParams.delete("practice_type"),
              window.history.pushState(null, "", a.toString()),
              e({ state: null, city: null, occupation: null, specialty: null, category: null, practice_type: null }),
              jQuery("#checked-count").text("Applied (0)");
      }),
      jQuery(document).on("click", "span.pgn-func", function () {
          let a = jQuery(".api-state").val(),
              t = jQuery(".api-city").val(),
              s = jQuery(".api-occupation").val(),
              i = jQuery(".api-speciality").val(),
              n = jQuery(".api-category").val(),
              l = jQuery(".api-practice-type").val(),
              c = jQuery(this).attr("data-value");
          e({ state: a, city: t, occupation: s, specialty: i, category: n, practice_type: l, page: c });
      });
      // setTimeout(function() {
      //     var datalist = $('#lists_state');
      //     var options = datalist.find('label');
      //     $('#searchState').on('keyup', function() {
      //       var searchTerm = $(this).val().toLowerCase();
      //       options.each(function() {
      //         var label = $(this);
      //         var stateName = label.find('span').text().toLowerCase();
      
      //         if (stateName.includes(searchTerm)) {
      //           label.show();
      //         } else {
      //           label.hide();
      //         }
      //       });
      //     });
      // }, 2000);
      $(document).ready(function() {
          setTimeout(function() {
              function filterDatalist(inputId, datalistId) {
                  var input = $("#" + inputId);
                  var datalist = $("#" + datalistId);
          
                  input.on("keyup", function() {
                      var filterValue = input.val().toLowerCase();
                      var options = datalist.find("label");
                      options.each(function() {
                          var label = $(this);
                          var labelText = label.text().toLowerCase();
                          if (labelText.indexOf(filterValue) > -1) {
                              label.show();
                          } else {
                              label.hide();
                          }
                      });
                  });
              }
              filterDatalist("searchOccupation", "lists_occupation");
              filterDatalist("searchSpecialty", "lists_speciality");
              filterDatalist("searchPractice", "lists_practice_type");
              filterDatalist("searchState", "lists_state");
              filterDatalist("searchCat", "lists_category");
              
          }, 2000);
      });
      
});
