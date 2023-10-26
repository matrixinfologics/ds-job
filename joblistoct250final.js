jQuery(document).ready(function () {
    const apiCall = function (args) {
    jQuery.ajax({
      url: "https://app.directshifts.com/jobs/p/list.json",
      async: true,
      data: args,
      crossDomain: true,
      success: function (result) {
        let root = document.getElementById("root");
        let html = "";
        if(result.jobs != ''){
        for (let i = 0; i < result.jobs.length; i++) {
        let specialty_names_str = result.jobs[i].specialty_names;
          let specialty_names_arr = specialty_names_str.split(",");
          let specialty_names_html = '';
          for(let k = 0; k < specialty_names_arr.length; k++){
            specialty_names_html += `<span class="jl-sn-inr-items">${specialty_names_arr[k]}</span>`;
          }

          let practice_type_obj = result.jobs[i].practice_type;
          let practice_type_html = '';
          for (const [key, value] of Object.entries(practice_type_obj)) {
            practice_type_html += `<div class="jl-location tagPracticType"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b97cd50b343566cede6_Practice%20type.svg"/><span><span class="jl-pt-inr-items">${value}</span></span></div>`;
          }
          let pratciceType = result.jobs[i].practice_type;
          var pratciceTypeElement = pratciceType ? `<div class="jl-location tagPracticType"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b97cd50b343566cede6_Practice%20type.svg"/><span><span class="jl-pt-inr-items">${result.jobs[i].practice_type}</span></span></div>`: '';

          let hotJob = result.jobs[i].hot;
          let name = result.jobs[i].title;
          console.log(name, hotJob);
          var hotJobElement = hotJob === true ? '<div id="hotJob"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b92927905d052de6d4e_Hot%20job.svg"><span>Hot Job</span></div>' : '';
          var shareBtnId = 'shareBtn' + i;

          html += `<tr>
            <td>
                ${hotJobElement}
                <div class="jl-title-wrap">
                <div class="jl-title">
                <a target="_blank" class="data-link" href="${result.jobs[i].link}">${result.jobs[i].title}</a>
                <div class="jl-main-head">
                <div class="jl-location">
                   <img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b9548588f48e27bc925_Location.svg"/>
                   <span>${result.jobs[i].city},</span> <span>${result.jobs[i].state_code}</span>
                </div>
                <div class="jl-location jl-location shift-${result.jobs[i].shift_type}">
                   <span>${result.jobs[i].shift_type} Shift</span>
                </div>
                <div class="jl-location shift-${result.jobs[i].hours_per_shift}">
                   <img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b92415a74cf87e280c9_Hours%20per%20shifts.svg"/>
                   <span>${result.jobs[i].hours_per_shift} Hours Per Shift</span>
                </div>
                <div class="jl-location shift-${result.jobs[i].category}">
                   <img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b9503ed3515087c48d6_Job%20category.svg"/>
                   <span>${result.jobs[i].category}</span>
                </div>
                ${typeof result.jobs[i].practice_type === "string" ? pratciceTypeElement : practice_type_html}
                </div>
                </div>
                <div class="apply-now-wrap">
                <a target="_blank" class="btn-applynow" href="${result.jobs[i].link}">Apply Now</a>
                </div>
                </div>
                <div class="jl-types">
                <div class="jl-sn-wrapper">
                  <div class="jl-sn">
                    ${specialty_names_html}
                  </div>
                  <div class="more-link" style="display: none;">More</div>
                </div>
                <div class="shareBtn">
                    <div class="share_box">
                        <img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b992fcd0945fc55e4c4_Share.svg"/>
                        <span id="${shareBtnId}" class="shareBtnClick">Share</span>
                    </div>
                </div>
                </div>
            </td>
        </tr>`;

        if (i === 4){ html += `<tr class="desktopSign cstom1 mobile-apps-1"><td colspan="2"><div class="main-content-b"><div class="image-block"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f538c315ff9443fa72_Sign%20Up%20Banner%20(1).svg" alt="image"></div><div class="right-content"><div class="directshift_regstring"><h4>Make the most of DirectShifts by registering for free!</h4><div class="dirctneq"><ul><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f1b3935fbb351447b5_Personalised%20recommendations.svg"><span>Personalised recommendations</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f18c8705e97403803c_Get%20support%20at%20every%20step.svg"><span>Get support at every step</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f1e4171f39a0ede315_Boost%20visibility%20with%20employers%20.svg"><span>Real-time updates</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f27031cb2307405bbf_Real-time%20updates.svg"><span>Boost visibility with employers</span></li></ul></div><div class="dirctregstrbtn"><a href="/sign-up">Sign Up</a></div></div></div></div></td></tr>`; }
        if (i === 10){ html += `<tr class="desktopSign cstom2 mobile-apps download-app"><td colspan="2"><div class="main-content-b"><div class="image-block"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/653222e09e96e3d3c8cd0db8_ad-2-mockup-img.png" alt="image"></div><div class="right-content"><div class="directshift_regstring"><h4>Find your perfect healthcare job on the go with the DirectShifts App!</h4><div class="dirctneq"><ul class="app-list"><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Application Tracking</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Document Management</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Seamless Timesheets</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Paycheck Tracking</span></li></ul></div><div class="dirctregstrbtn download"><a href="https://play.google.com/store/apps/details?id=com.directshifts&amp;hl=en_US&amp;gl=US">Download Now</a></div></div></div></div></td></tr>`; }

        }

        // pagination start
        let pagination_html = '';
        if(result.total_pages > 1){
        if(result.current_page == 1){
          pagination_html = `<nav class="pagination">
        <span data-value="${result.current_page}" class="current">${result.current_page}</span>
        <span data-value="${result.next_page}" class="pgn-func">${result.next_page}</span>
        <span data-value="${result.current_page + 1}" rel="next" class="pgn-func next">Next</span>
        <span data-value="${result.total_pages}" class="pgn-func last last-1">Last</span>
        </nav>
        `;
        }else if(result.total_pages == result.current_page){
            pagination_html = `<nav class="pagination">
        <span data-value="1" class="pgn-func first">First</span>
        <span data-value="${result.current_page - 1}" class="pgn-func prev">Prev</span>
        <span data-value="${result.prev_page}" class="pgn-func">${result.prev_page}</span>
        <span class="current">${result.current_page}</span>
        </nav>
        `;
        }else{
          pagination_html = `<nav class="pagination">
        <span data-value="1" class="pgn-func first">First</span>
        <span data-value="${result.current_page - 1}" class="pgn-func prev">Prev</span>
        <span data-value="${result.prev_page}" class="pgn-func">${result.prev_page}</span>
        <span class="current">${result.current_page}</span>
        <span data-value="${result.next_page}" class="pgn-func">${result.next_page}</span>
        <span data-value="${result.current_page + 1}" rel="next" class="pgn-func next">Next</span>
        <span data-value="${result.total_pages}" class="pgn-func last last-1">Last</span>
        </nav>
        `;
        }
        }
        jQuery('.api-pagination').html(pagination_html);
        // pagination end
        }else{
            html = '<div class="nrfound"><h2>We may have job openings for you, even if it\'s not yet listed!</h2><p>Our job listings are constantly evolving. Connect with us to uncover potential job openings tailored to your needs. We\'re here to help you find the right job for you. </p><a href="https://www.directshifts.com/clinician-perks-benefits">Connect with a clinician partner</a></div>';
            jQuery('.sidebtmlft').addClass('notFoundResult');
            jQuery('.api-pagination').html('');
        }
        root.innerHTML = html;
        if (!document.getElementById("lists_state")) {
            // Add States to SearchForm
            let states_html = "";
            for(let j = 0; j < result.states.length; j++){
                states_html += `<label><input type="checkbox" class="api-state" name="state" value="${result.states[j].code}"><span>${result.states[j].code}</span>${result.states[j].name} </label>`;
            }
           jQuery('.apiState').after(`<datalist id="lists_state">${states_html}</datalist>`);
        }
        if (!document.getElementById("lists_city")) {
            // cities
            let cities_html = "";
            for(let j = 0; j < result.cities.length; j++){
                cities_html += `<label><input type="checkbox" class="api-state" name="state" value="${result.cities[j].code}"><span>${result.cities[j].code}</span>${result.cities[j].name} </label>`;
            }
            jQuery('.apiCity').after(`<datalist id="lists_city">${cities_html}</datalist>`);
        }
        // specialties

        let specialties_html = "";
        for (let j = 0; j < result.specialties.length; j++) {
            specialties_html += `<label><input type="checkbox" class="api-speciality" name="specialty_radio" value="${result.specialties[j]}">${result.specialties[j]}</label>`;
        }
        var arg_specialty = getUrlParameter('specialty%5B%5D');
        if(!arg_specialty){
            jQuery('.listSpeciality').empty().append(`<input type="text" id="searchSpecialty" placeholder="Specialty"><datalist id="lists_speciality">${specialties_html}</datalist>`);
        }

        if (!document.getElementById("lists_practice_type")) {
            // Practice Types
            let uniquePracticeTypes = ['Emergency Department','Inpatient','Outpatient','Telemedicine','Urgent Care','Correctional','Home Care','Clinic/Office-Based Practice','Addiction Center/Rehab'];

            let practice_type_html = "";
            for(let j = 0; j < uniquePracticeTypes.length; j++){
            practice_type_html += `<label><input type="checkbox" class="api-practice-type" name="practice_types" value="${uniquePracticeTypes[j]}">${uniquePracticeTypes[j]}</label>`;
            }
            jQuery('.listPractice').after(`<datalist id="lists_practice_type">${practice_type_html}</datalist>`);
        }
        // Categories
        if (!document.getElementById("lists_category")) {
            let uniqueCategories = ['Contract','Per-Diem','Permanent'];
            let categories_html = "";
            for(let j = 0; j < uniqueCategories.length; j++){
            categories_html += `<label><input type="checkbox" class="api-category" name="categories" value="${uniqueCategories[j]}">${uniqueCategories[j]}</label>`;
            }
            jQuery('.listCategory').after(`<datalist id="lists_category">${categories_html}</datalist>`);
        }
        // Occupations
        if (!document.getElementById("lists_occupation")) {
            let uniqueOccupations = ['Physician (MD/DO)','Physician Assistant (PA)','Advanced Practice Registered Nurse (APRN, NP, CNS, Midwife, etc.)','Certified Registered Nurse Anesthesist (CRNA)','NurseMidwife','Nurse Specialist/CNS','Registered Nurse (RN)','Licensed Practical Nurse/Licensed Vocational Nurse (LVN, LPN)','Certified Nursing Assistant (CNA)','Patient Care Technician (PCT)','Respiratory, Rehabilitative & Developmental Therapists (OT, PT, etc.)','Technologist (Sonography, Radiology, etc.)','Technician (Radiologic, Cardiovascular, Histo, etc.)','Medical Assistants (CMA, RMA)','Dental Services (DDS, Technician, Hygienist, etc.)','Behavioral Health & Social Work Services (Counselors, Social Workers, etc.)','Dietitians and Nutritionists','Pharmacist','Healthcare Administration'];
            let occupations_html = "";
            for(let j = 0; j < uniqueOccupations.length; j++){
            occupations_html += `<label><input type="radio" class="api-occupation" name="occupations" value="${uniqueOccupations[j]}">${uniqueOccupations[j]}</label>`;
            }
            jQuery('.apiOccupation').after(`<datalist id="lists_occupation">${occupations_html}</datalist>`);
        }
        $(document).ready(function () {
            $('.jl-sn-wrapper').each(function () {
                var $items = $(this).find('.jl-sn-inr-items');
                var $moreLink = $(this).find('.more-link');

                if ($items.length > 2) {
                    var count = $items.length - 2;
                    $items.slice(2).hide();
                    $moreLink.text('+' + count + ' More');
                    $moreLink.show();
                }
                $moreLink.click(function () {
                    $items.slice(2).toggle();
                    $(this).text(function (i, text) {
                        var count = $items.length - 2;
                        return text === '+' + count + ' More' ? '' : '+' + count + ' More';
                    });
                });
            });
        });
        $('.shareBtnClick').on('click', function() {
            var index = $(this).index('.shareBtnClick');
            var name = result.jobs[index].title;
            var link = result.jobs[index].link;
            if (navigator.share) {
            const shareData = {
                title: name,
                url: link
            };
            navigator.share(shareData)
                .then(() => {
                  console.log('Share Successful');
                })
                .catch((error) => {
                  console.error('Share failed:', error);
                });
            } else {
            alert('Web Share not supported');
            }
        });
        $(document).ready(function() {
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
        });

      },
    });
  }; //apiCall function end

//   Call function when page loads
  const queryString = window.location.search;
  if(queryString){
    const urlParams = new URLSearchParams(queryString);
    const query_params = Object.fromEntries(urlParams);
    apiCall(query_params);
  }else{
     apiCall();
  }


   //Search jobs
    jQuery(document).on("click", "datalist input", function () {
        let checkboxCount = jQuery('input[type="checkbox"]:checked').length;
        let radioCount = jQuery('input[type="radio"]:checked').length;
        let totalCount = checkboxCount + radioCount;
        jQuery("#checked-count").text("Applied (" + totalCount + ")");
        if(jQuery(this).hasClass('api-occupation')){
        	let i = getSelectedValues(".api-occupation:checked");
        	r = new URL("https://www.directshifts.com/a-job-listing-copy-25-oct");
        	if (i.length) r.searchParams.set("occupation[]", i.join("&"));
        	window.history.pushState(null, "", r.toString());
	        apiCall({ occupation: i });
        } else {
        let t = getSelectedValues(".api-state:checked"),
            s = getSelectedValues(".api-city:checked"),
            i = getSelectedValues(".api-occupation:checked"),
            n = getSelectedValues(".api-speciality:checked"),
            l = getSelectedValues(".api-category:checked"),
            c = getSelectedValues(".api-practice-type:checked"),
            r = new URL("https://www.directshifts.com/a-job-listing-copy-25-oct");
            if (t.length) r.searchParams.set("state[]", t.join("&"));
	        if (s.length) r.searchParams.set("city[]", s.join("&"));
	        if (i.length) r.searchParams.set("occupation[]", i.join("&"));
	        if (n.length) r.searchParams.set("specialty[]", n.join("&"));
	        if (l.length) r.searchParams.set("category[]", l.join("&"));
	        if (c.length) r.searchParams.set("practice_type[]", c.join("&"));

	        window.history.pushState(null, "", r.toString());
	        apiCall({ state: t, city: s, occupation: i, specialty: n, category: l, practice_type: c });
        }
    });
    function getSelectedValues(selector) {
        return jQuery(selector).map(function () {
            return this.value;
        }).get();
    }
    jQuery("#clear-all-button").on("click", function () {
        jQuery('input[type="checkbox"]').prop("checked", !1);
        let a = new URL("https://www.directshifts.com/a-job-listing-copy-25-oct");
        a.searchParams.delete("state"),
            a.searchParams.delete("city"),
            a.searchParams.delete("occupation"),
            a.searchParams.delete("specialty"),
            a.searchParams.delete("category"),
            a.searchParams.delete("practice_type"),
            window.history.pushState(null, "", a.toString()),
            apiCall({ state: null, city: null, occupation: null, specialty: null, category: null, practice_type: null }),
            jQuery("#checked-count").text("Applied (0)");
    }),
    jQuery(document).on("click", "span.pgn-func", function () {
        let a = jQuery(".api-state:checked").val(),
            t = jQuery(".api-city:checked").val(),
            s = jQuery(".api-occupation:checked").val(),
            i = jQuery(".api-speciality:checked").val(),
            n = jQuery(".api-category:checked").val(),
            l = jQuery(".api-practice-type:checked").val(),
            c = jQuery(this).attr("data-value");
            apiCall({ state: a, city: t, occupation: s, specialty: i, category: n, practice_type: l, page: c });
    });
    $(document).ready(function () {
     if (window.innerWidth < 767) {
        $('#api-job-listing').hide();
           var mobileDiv = $('<div class="mobile_filter"><h3>Filter Jobs</h3></div>');
             $('#api-job-listing').before(mobileDiv);
               mobileDiv.click(function() {
                  $('.mobile_filter').toggleClass('mactive');
                  $('#api-job-listing').slideToggle();
              });
       }
    });
});
const clearAllButton = document.getElementById("clear-all-button");
const occTriggerH4 = document.getElementById("occ_trigger");
clearAllButton.addEventListener("click", function() {
    // Check if the viewport width is above 767 pixels
    if (window.innerWidth > 767) {
      // Trigger a click event on the Occupation h4 element
      const clickEvent = new Event("click", {
        bubbles: true,
        cancelable: true
      });
      occTriggerH4.dispatchEvent(clickEvent);
    }
});
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
