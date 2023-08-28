let klbbutton = document.getElementById("kalimbaButton");
let homebutton = document.getElementById("homeButton");
let logobutton = document.getElementById("logoButton")
let style = document.createElement('style');

//#region Kalimba
function kaLimba() {
    document.getElementById("kalimbapage").style.display = 'block';
    document.getElementById("homepage").style.display = 'none';
};

klbbutton.addEventListener('click', kaLimba);


//#endregion Kalimba



//#region Home

function homeChange() {
    document.getElementById("kalimbapage").style.display = 'none';
    document.getElementById("homepage").style.display = 'block';
};
logoButton.addEventListener('click', homeChange);

function muteKlb() {
    const kalimbaAudio = document.getElementById("kalimbaAudio");
    const kalimbaAudio1 = document.getElementById("kalimbaAudio1");
    const kalimbaAudio2 = document.getElementById("kalimbaAudio2");
    const kalimbaAudio3 = document.getElementById("kalimbaAudio3");
    const kalimbaAudio4 = document.getElementById("kalimbaAudio4");
    const kalimbaAudio5 = document.getElementById("kalimbaAudio5");
    const kalimbaAudio6 = document.getElementById("kalimbaAudio6");
    const kalimbaAudio7 = document.getElementById("kalimbaAudio7");
    const kalimbaAudio8 = document.getElementById("kalimbaAudio8");
    const kalimbaAudio9 = document.getElementById("kalimbaAudio9");
    const kalimbaAudio10 = document.getElementById("kalimbaAudio10");
    const kalimbaAudio11 = document.getElementById("kalimbaAudio11");
    const kalimbaAudio12 = document.getElementById("kalimbaAudio12");
    const kalimbaAudio13 = document.getElementById("kalimbaAudio13");
    const kalimbaAudio14 = document.getElementById("kalimbaAudio14");
    const kalimbaAudio15 = document.getElementById("kalimbaAudio15");
    const kalimbaAudio16 = document.getElementById("kalimbaAudio16");


    kalimbaAudio.muted = true;
    kalimbaAudio1.muted = true;
    kalimbaAudio2.muted = true;
    kalimbaAudio3.muted = true;
    kalimbaAudio4.muted = true;
    kalimbaAudio5.muted = true;
    kalimbaAudio6.muted = true;
    kalimbaAudio7.muted = true;
    kalimbaAudio8.muted = true;
    kalimbaAudio9.muted = true;
    kalimbaAudio10.muted = true;
    kalimbaAudio11.muted = true;
    kalimbaAudio12.muted = true;
    kalimbaAudio13.muted = true;
    kalimbaAudio14.muted = true;
    kalimbaAudio15.muted = true;
    kalimbaAudio16.muted = true;
}

function unmuteKlb() {
    const kalimbaAudio = document.getElementById("kalimbaAudio");
    const kalimbaAudio1 = document.getElementById("kalimbaAudio1");
    const kalimbaAudio2 = document.getElementById("kalimbaAudio2");
    const kalimbaAudio3 = document.getElementById("kalimbaAudio3");
    const kalimbaAudio4 = document.getElementById("kalimbaAudio4");
    const kalimbaAudio5 = document.getElementById("kalimbaAudio5");
    const kalimbaAudio6 = document.getElementById("kalimbaAudio6");
    const kalimbaAudio7 = document.getElementById("kalimbaAudio7");
    const kalimbaAudio8 = document.getElementById("kalimbaAudio8");
    const kalimbaAudio9 = document.getElementById("kalimbaAudio9");
    const kalimbaAudio10 = document.getElementById("kalimbaAudio10");
    const kalimbaAudio11 = document.getElementById("kalimbaAudio11");
    const kalimbaAudio12 = document.getElementById("kalimbaAudio12");
    const kalimbaAudio13 = document.getElementById("kalimbaAudio13");
    const kalimbaAudio14 = document.getElementById("kalimbaAudio14");
    const kalimbaAudio15 = document.getElementById("kalimbaAudio15");
    const kalimbaAudio16 = document.getElementById("kalimbaAudio16");


    kalimbaAudio.muted = false;
    kalimbaAudio1.muted = false;
    kalimbaAudio2.muted = false;
    kalimbaAudio3.muted = false;
    kalimbaAudio4.muted = false;
    kalimbaAudio5.muted = false;
    kalimbaAudio6.muted = false;
    kalimbaAudio7.muted = false;
    kalimbaAudio8.muted = false;
    kalimbaAudio9.muted = false;
    kalimbaAudio10.muted = false;
    kalimbaAudio11.muted = false;
    kalimbaAudio12.muted = false;
    kalimbaAudio13.muted = false;
    kalimbaAudio14.muted = false;
    kalimbaAudio15.muted = false;
    kalimbaAudio16.muted = false;
}

window.addEventListener('load', muteKlb)
klbbutton.addEventListener('click', unmuteKlb);
homebutton.addEventListener('click', muteKlb);
homebutton.addEventListener('click', homeChange);


//#endregion Home