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
                            (t += `<tr class="my-code">\n   <td> <div class="jl-title-wrap">\n   <div class="jl-title"><a target="_blank" class="data-link" href="${e.jobs[a].link}">${
                                e.jobs[a].title
                            }</a><div class="jl-main-head"><div class="jl-location"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/63c1428ec77fbc6cb91ce1c7_location-icon.png"/><span>${e.jobs[a].city},</span> <span>${
                                e.jobs[a].state_code
                            }</span></div></div></div><div class="apply-now-wrap"><a target="_blank" class="btn-test"href="https://app.directshifts.com/jobs/p/${
                                e.jobs[a].slug
                            }?utm_source=${getUtmSource}?utm_medium=${getUtmMedium}?utm_campaign=${getUtmCampaign}">Test Button</a><a target="_blank" class="btn-applynow" href="${e.jobs[a].link}">Apply Now</a></div></div>\n   <div class="jl-types"> <a target="_blank" class="data-link"href="${
                                e.jobs[a].link
                            }"\n   <div class="jl-sn-wrapper">\n   <h6 class="jl-sn-heading">Specialty</h6>\n   <div class="jl-sn">${i}</div>\n   </div> <div class="jl-pt-wrapper">\n   <h6 class="jl-pt-heading">Practice Type</h6>\n   <div class="jl-pt">${
                                "string" == typeof e.jobs[a].practice_type ? `<span class="jl-pt-inr-items">${e.jobs[a].practice_type}</span>` : l
                            }</div>\n   </div></a></div></td></tr>`),
                                4 === a &&
                                    (t +=
                                        '<tr class="desktopSign cstom1 mobile-apps-1"><td colspan="2"><div class="main-content-b"><div class="image-block"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6514047d22c7101f4b2f9ee3_sign-up-banner---Illustration.jpg"alt="image"></div><div class="right-content"><div class="directshift_regstring"><h4>Make the most of Directshifts by registering for free</h4><div class="dirctneq"><ul><li>Personalised recommendations</li><li>Get support at every step</li><li>Real-time updates</li><li>Boost visibility with employers</li></ul></div><div class="dirctregstrbtn"><a href="/sign-up">Register Now</a></div></div></div></div></td></tr>'),
                                10 === a &&
                                    (t +=
                                        '<tr class="desktopSign cstom2 mobile-apps"><td colspan="2"><div class="directshift_drmhlth"><div class="drctgetinbtn"><div class="drctgetinbtninnr innr1"><p>Download the DirectShifts mobile app and stay up-to-date on the newest job opportunities, anytime, anywhere.</p><ul><li class="drctgplay"><a href="https://play.google.com/store/apps/details?id=com.directshifts&amp;hl=en_US&amp;gl=US" target="_blank"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/62ebcbb9a2b05a280e438f48_g-.png" class="img-fluid" alt=""></a></li><li class="drctapstr"><a href="https://apps.apple.com/us/app/directshifts/id1420001050" target="_blank"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/62e10a5b5da41e77eb18df78_app_store_badge.png" class="img-fluid" alt=""></a></li></ul></div><div class="drctgetinbtninnr innr2"><div class="brscnr"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/651408d909f980cd949b56ce_mobile-banner.png" class="img-fluid" alt=""></div></div></div></div></td></tr>');
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
                            '<div class="nrfound"><h2>Message for when we don’t have a job</h2><p>We may have job openings for you, even if it\'s not yet listed!\nOur job listings are constantly evolving. Connect with us to uncover potential job openings tailored to your needs. We\'re here to help you find the right job for you. </p><a href="https://www.directshifts.com/clinician-perks-benefits">Contact a recruiter</a></div>'),
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
        setTimeout(function() {
            var datalist = $('#lists_state');
            var options = datalist.find('label');
            $('#searchState').on('keyup', function() {
              var searchTerm = $(this).val().toLowerCase();
              options.each(function() {
                var label = $(this);
                var stateName = label.find('span').text().toLowerCase();
        
                if (stateName.includes(searchTerm)) {
                  label.show();
                } else {
                  label.hide();
                }
              });
            });
        }, 2000); // 2000 milliseconds = 2 seconds
});
