let companyProfile = document.querySelector('.companyProfile-modal');
let vision = document.querySelector('.vision-modal');
let mision = document.querySelector('.mission-modal');
let coreValues = document.querySelector('.coreValues-modal');
let OrgChart = document.querySelector('.organizationalChart-modal');
let companyProfileBtn = document.querySelector('.companyProfile');
let visionBtn = document.querySelector('.vision');
let missionBtn = document.querySelector('.mission');
let coreValuesBtn = document.querySelector('.coreValues');
let OrganizationalChartBtn = document.querySelector('.OrganizationalChart');




//setting function that will pop Compamny Profile
const popCompanyProfile = function (){
    companyProfileBtn.classList.add('active');
    visionBtn.classList.remove('active');
    missionBtn.classList.remove('active');
    coreValuesBtn.classList.remove('active');
    OrganizationalChartBtn.classList.remove('active');


    companyProfile.classList.remove('hide');
    vision.classList.add('hide');
    mision.classList.add('hide');
    coreValues.classList.add('hide');
    OrgChart.classList.add('hide');
}

//setting function that will pop Vision
const popVision =function (){
    companyProfileBtn.classList.remove('active');
    visionBtn.classList.add('active');
    missionBtn.classList.remove('active');
    coreValuesBtn.classList.remove('active');
    OrganizationalChartBtn.classList.remove('active');


    companyProfile.classList.add('hide');
    vision.classList.remove('hide');
    mision.classList.add('hide');
    coreValues.classList.add('hide');
    OrgChart.classList.add('hide');
}

//setting function that will pop Mision
const popMision = function (){
    companyProfileBtn.classList.remove('active');
    visionBtn.classList.remove('active');
    missionBtn.classList.add('active');
    coreValuesBtn.classList.remove('active');
    OrganizationalChartBtn.classList.remove('active');


    companyProfile.classList.add('hide');
    vision.classList.add('hide');
    mision.classList.remove('hide');
    coreValues.classList.add('hide');
    OrgChart.classList.add('hide');
}

//setting function that will pop Core Values
const popCoreValues = function (){
    companyProfileBtn.classList.remove('active');
    visionBtn.classList.remove('active');
    missionBtn.classList.remove('active');
    coreValuesBtn.classList.add('active');
    OrganizationalChartBtn.classList.remove('active');


    companyProfile.classList.add('hide');
    vision.classList.add('hide');
    mision.classList.add('hide');
    coreValues.classList.remove('hide');
    OrgChart.classList.add('hide');
}

//setting function that will pop Org Chart
const popOrgChart = function (){
    companyProfileBtn.classList.remove('active');
    visionBtn.classList.remove('active');
    missionBtn.classList.remove('active');
    coreValuesBtn.classList.remove('active');
    OrganizationalChartBtn.classList.add('active');


    companyProfile.classList.add('hide');
    vision.classList.add('hide');
    mision.classList.add('hide');
    coreValues.classList.add('hide');
    OrgChart.classList.remove('hide');
}


//adding eventlistener to Company Profile Btn
companyProfileBtn.addEventListener('click', popCompanyProfile);

//adding eventlistener to Company Profile Btn
visionBtn.addEventListener('click', popVision);

//adding eventlistener to Company Profile Btn
missionBtn.addEventListener('click', popMision);


//adding eventlistener to Company Profile Btn
coreValuesBtn.addEventListener('click', popCoreValues);

//adding eventlistener to Company Profile Btn
OrganizationalChartBtn.addEventListener('click', popOrgChart);

