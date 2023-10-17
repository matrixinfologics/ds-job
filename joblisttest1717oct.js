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
            if( k <= 2){
            specialty_names_html += `<span class="jl-sn-inr-items">${specialty_names_arr[k]}</span>`;
            }
          }

          let practice_type_obj = result.jobs[i].practice_type;
          let practice_type_html = '';
          let pt = 0;
          for (const [key, value] of Object.entries(practice_type_obj)) {
            if(pt <= 2){
            practice_type_html += `<span class="jl-pt-inr-items">${value}</span>`;
            }
            pt++;
          }
          let practice_type_strr = `<span class="jl-pt-inr-items">${result.jobs[i].practice_type}</span>`;
          html += `<tr>
            <td>
                ${result.jobs[i].hot === 'true' ? `
                <div class="hotjob">
                    Hot Job
                </div>` : ''}
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
                <div class="jl-location tagPracticType">
                   <img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b97cd50b343566cede6_Practice%20type.svg"/>
                   <span>${typeof result.jobs[i].practice_type === "string" ? practice_type_strr : practice_type_html}</span>
                </div>
                </div>
                </div>
                <div class="apply-now-wrap">
                <a target="_blank" class="btn-applynow" href="${result.jobs[i].link}">Apply Now</a>
                </div>
                </div>
                <div class="jl-types">
                <div class="jl-sn-wrapper">
                <h6 class="jl-sn-heading">Specialty</h6>
                  <div class="jl-sn">
                    ${specialty_names_html}
                    <div class="more-link" style="display: none;">More</div>
                  </div>
                </div>
                <div class="jl-pt-wrapper">
                <h6 class="jl-pt-heading">Practice Type</h6>
                <div class="jl-pt">${typeof result.jobs[i].practice_type === "string" ? practice_type_strr : practice_type_html}</div>
                </div>
                <div class="shareBtn">
                    <div class="share_box">
                        <img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d3b992fcd0945fc55e4c4_Share.svg"/>
                        <span id="shareBtn" class="share_text">Share</span>
                    </div>
                    <div class="share_buttons_box" style="display: none;">
                        <div class="sign_in_link" style="color: black">Share this Job</div>
                        <div class="share_buttons">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=${result.jobs[i].link}" id="opnEfacebook"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652e7ce579d575eda90856b8_uil_facebook.png"/></a>
                        <a href="https://twitter.com/share?url=${result.jobs[i].link}" id="opnEtwitter"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652e7ce48893873df6d2531e_mdi_twitter.png"/></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${result.jobs[i].link}" id="opnElinkedin"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652e7ce471885f5ba4c453a7_mdi_linkedin.png"/></a>
                        <a href="https://web.whatsapp.com/${result.jobs[i].link}" id="opnEwhatsapp"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652e7ce539ac6c84eec43fcc_ri_whatsapp-fill.png"/></a>
                        <div class="sprite-link-black sprite-icon-big" id="copyLink"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652e7ce399ede0d448cea375_iconamoon_link-bold.png"/></div>
                        </div>
                    </div>
                </div>
                </div>
            </td>
        </tr>`;
        if (i === 4){ html += `<tr class="desktopSign cstom1 mobile-apps-1"><td colspan="2"><div class="main-content-b"><div class="image-block"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f538c315ff9443fa72_Sign%20Up%20Banner%20(1).svg" alt="image"></div><div class="right-content"><div class="directshift_regstring"><h4>Make the most of DirectShifts by registering for free!</h4><div class="dirctneq"><ul><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f1b3935fbb351447b5_Personalised%20recommendations.svg"><span>Personalised recommendations</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f18c8705e97403803c_Get%20support%20at%20every%20step.svg"><span>Get support at every step</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f1e4171f39a0ede315_Boost%20visibility%20with%20employers%20.svg"><span>Real-time updates</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/6528d4f27031cb2307405bbf_Real-time%20updates.svg"><span>Boost visibility with employers</span></li></ul></div><div class="dirctregstrbtn"><a href="/sign-up">Register for free</a></div></div></div></div></td></tr>`; } 
        if (i === 10){ html += `<tr class="desktopSign cstom2 mobile-apps download-app"><td colspan="2"><div class="main-content-b"><div class="image-block"><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d2d92988a64a768196642_Job-Listing-2add.png" alt="image"></div><div class="right-content"><div class="directshift_regstring"><h4>Find your perfect healthcare job on the go with the DirectShifts App!</h4><div class="dirctneq"><ul class="app-list"><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Application Tracking</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Document Management</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Seamless Timesheets</span></li><li><img src="https://uploads-ssl.webflow.com/5abebcf1b3e0cb4bb9718bba/652d302711d2571508f3795e_Get%20support%20at%20every%20step%201.svg"><span>Paycheck Tracking</span></li></ul></div><div class="dirctregstrbtn download"><a href="https://play.google.com/store/apps/details?id=com.directshifts&amp;hl=en_US&amp;gl=US">Download Now</a></div></div></div></div></td></tr>`; }
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
            jQuery('.api-pagination').html('');
        }
        root.innerHTML = html;
        if (!document.getElementById("lists_state")) {
            // Add States to SearchForm
            let states_html = "";
            for(let j = 0; j < result.states.length; j++){
                states_html += `<label><input type="radio" class="api-state" name="state" value="${result.states[j].code}"><span>${result.states[j].code}</span>${result.states[j].name} </label>`;
            }
           jQuery('.apiState').after(`<datalist id="lists_state">${states_html}</datalist>`);
        }
        if (!document.getElementById("lists_city")) {
            // cities
            let cities_html = "";
            for(let j = 0; j < result.cities.length; j++){
                cities_html += `<option value="${result.cities[j]}"></option>`;
            }
            jQuery('.apiCity').after(`<datalist id="lists_city">${cities_html}</datalist>`);
        }
        if (!document.getElementById("lists_speciality")) {
            // specialties
            let specialties_html = "";
            for(let j = 0; j < result.specialties.length; j++){
                specialties_html += `<label><input type="radio" class="api-speciality" name="specialty_radio" value="${result.specialties[j]}">${result.specialties[j]}</label>`;
            }
            jQuery('.listSpeciality').after(`<datalist id="lists_speciality">${specialties_html}</datalist>`);
        }
        if (!document.getElementById("lists_practice_type")) {
            // Practice Types
            let uniquePracticeTypes = ['Emergency Department','Inpatient','Outpatient','Telemedicine','Urgent Care','Correctional','Home Care','Clinic/Office-Based Practice','Addiction Center/Rehab'];

            let practice_type_html = "";
            for(let j = 0; j < uniquePracticeTypes.length; j++){
            practice_type_html += `<label><input type="radio" class="api-practice-type" name="practice_types" value="${uniquePracticeTypes[j]}">${uniquePracticeTypes[j]}</label>`;
            }
            jQuery('.listPractice').after(`<datalist id="lists_practice_type">${practice_type_html}</datalist>`);
        }
        // Categories
        if (!document.getElementById("lists_category")) {
            let uniqueCategories = ['Contract','Per-Diem','Permanent'];
            let categories_html = "";
            for(let j = 0; j < uniqueCategories.length; j++){
            categories_html += `<label><input type="radio" class="api-category" name="categories" value="${uniqueCategories[j]}">${uniqueCategories[j]}</label>`;
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
            $('.jl-sn').each(function () {
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
        // $(document).ready(function() {
        //     $('.share_box').click(function() {
        //         $(this).next('.share_buttons_box').toggle();
        //     });
        // });
      const shareBtn = document.querySelector('#shareBtn');
      shareBtn.onclick = async function() {
        if(navigator.share) {
          const shareData = {
            title: 'Web Share Demo',
            text: 'This is some text I wanted to share',
            url: 'https://josephkhan.me'
          };
          await navigator.share(shareData);
          console.log('Share Successfull');
        } else {
          alert('Web Share not supported');
        }
      }
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


//   Search jobs
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
        apiCall({ state: t, city: s, occupation: i, specialty: n, category: l, practice_type: c });
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
            apiCall({ state: null, city: null, occupation: null, specialty: null, category: null, practice_type: null }),
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
            apiCall({ state: a, city: t, occupation: s, specialty: i, category: n, practice_type: l, page: c });
    });
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

