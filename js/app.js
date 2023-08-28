const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "NHUY";

const player = $(".player");
const heading = $(".title-song .name-song");
const audio = $("#audio");
const playBtn = $(".btnmusic-toggle-play");
const progress = $(".progress");
const prevBtn = $("#prev-track");
const nextBtn = $("#next-track");
const randomBtn = $("#random-track");
const repeatBtn = $("#repeat-track");
let volume = document.querySelector("#volume-control");

let canvas = document.getElementById("canvas");
let cdimage = document.querySelector("#cdani");
const playlist = $(".listmusic");



const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},

  
  songs: [
    {
      name: "Vùng ký ức",
      singer: "Chillies",
      path: "./assets/music/vung_ky_uc_chillies.mp3",
      tag: ["rock ballad"]
    },
    {
      name: "Bet on me",
      singer: "Su boi",
      path: "./assets/music/suboi_bet_on_me.mp3",
      tag: ["rap melody"]
    },
    {
      name: "Salvame",
      singer: "Sonohra",
      path: "./assets/music/sonohra_salvame.mp3",
      tag: ["pop", "rock"]
    },
    {
      name: "Paris je taime",
      singer: "Silver C",
      path: "./assets/music/silver_c_paris_je_taime.mp3",
      tag: ["rap"]
    },
    {
      name: "Better now",
      singer: "Post Malone",
      path: "./assets/music/post_malone_better_now.mp3",
      tag: ["rap"]
    },
    {
      name: "Bad love",
      singer: "niwel",
      path: "./assets/music/niwel_bad_love.mp3",
      tag: ["edm"]
    },
    {
      name: "Everytime",
      singer: "Chen & Punch",
      path: "./assets/music/mv_chen_xpunch_everytime_lost.mp3",
      tag: ["ballad"]
    },
    {
      name: "Lần cuối",
      singer: "Ngọt",
      path: "./assets/music/lan_cuoi_ngot.mp3",
      tag: ["rock ballad"]
    },
    {
      name: "Đã lỡ yêu em nhiều",
      singer: "Justatee",
      path: "./assets/music/justatee_da_lo_yeu_em_nhieu.mp3",
      tag: ["pop"]
    },
    {
      name: "Blueless Bird",
      singer: "Joni",
      path: "./assets/music/joni_blueless_bird.mp3",
      tag: ["pop"]
    },
    {
      name: "The reason",
      singer: "Hoobastank",
      path: "./assets/music/hoobastank_the_reason.mp3",
      tag: ["rock ballad"]
    },
    {
      name: "Đủ xa tình sẽ cũ",
      singer: "Jsol",
      path: "./assets/music/du_xa_tinh_se_cu_jsol.mp3",
      tag: ["pop","ballad"]
    },
    {
      name: "Double take",
      singer: "dhruv",
      path: "./assets/music/dhruv_double_take.mp3",
      tag: ["ballad"]
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    
    
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                                <p class ="tag">${song.tag}</p>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },



  handleEvents: function () {
    const _this = this;



    // Xử lý phóng to / thu nhỏ CD
   

    // Xử lý khi click play
    
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        pause.style.display = "none";
        play.style.display = "block";
        audio.pause();
      } else {
        audio.play();
        play.style.display = "none";
        pause.style.display = "block";
        
      }
    };

    // Khi song được play
    
    audio.onplay = function () {
      _this.isPlaying = true;
      audioCtx.resume();
    };

    // Khi song bị pause
    
    audio.onpause = function () {
      _this.isPlaying = false;
    };

    // Khi tiến độ bài hát thay đổi
    
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };
    const random = document.querySelector(".btnmusic-random")
    random.addEventListener("click",toggleRandom);
    function toggleRandom(){
      random.classList.toggle("is-active1");
    }
    // Xử lý lặp lại một song
    
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };
    const repeat = document.querySelector(".btnmusic-repeat")
    repeat.addEventListener("click",toggleActive);
    function toggleActive(){
      repeat.classList.toggle("is-active");
    };

    // Xử lý next song khi audio ended
    
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          pause.style.display = "block";
          play.style.display = "none";
          audio.play();
        }

        // Xử lý khi click vào song option
        
        if (e.target.closest(".option")) {
        }
      }
    };

      //Xử lý âm thanh
    volume.addEventListener("change", function(e) {
      audio.volume = e.currentTarget.value / 100;
      })
      
      //Xử lý CD
    function rotateAnimation () {
      cdimage.classList.add('rotate');
    };
    function removerotateAnimation () {
      cdimage.classList.remove('rotate');
    };
    audio.addEventListener("play",rotateAnimation);
    audio.addEventListener("pause",removerotateAnimation);

    //Đổi màu CD  
    function randomColor() {
    for (let i = 0; i < 6; i++) {
          let color =  Math.floor(Math.random()*16777215).toString(16)      
          cdimage.style.boxShadow = '0 0 7px #fff,' + "\n" + '0 0 10px #fff,' + "\n" + '0 0 14px #fff,' + "\n" + '0 0 21px' + '#' + color + "," + "\n" + '0 0 32px ' + '#' + color + "," + "\n" + '0 0 42px ' + '#' + color + "," + "\n" + '0 0 52px ' + '#' + color + "," + "\n" + '0 0 82px ' + '#' + color;
      }  
  };
  
    audio.addEventListener("play", randomColor);



    //Visualizer
    let audioCtx = new AudioContext();
    let source = audioCtx.createMediaElementSource(audio);

    let analyser = audioCtx.createAnalyser();
    let ctx = canvas.getContext("2d");


    source.connect(analyser);
    source.connect(audioCtx.destination);

    analyser.smoothingTimeConstant = 0.6;
    analyser.fftSize = 512;

    let bufferLength = analyser.frequencyBinCount;
    let data = new Uint8Array(bufferLength);
    function draw(data) {
      let gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(1, "#fff");
      ctx.fillStyle = gradient;
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#ffe9cf";
    
      let cx = canvas.width / 2;
      let cy = canvas.height / 2;
      let radius = 100;
      let barWidth = 3;
      let barHeight = 15;
      let barSpacing = 7;
      let maxBarNum = Math.floor((radius * 4 * Math.PI) / (barWidth + barSpacing));
      let slicedPercent = Math.floor((maxBarNum * 25) / 50);
      let barNum = maxBarNum - slicedPercent;
      let freqJump = Math.floor(data.length / maxBarNum);
    
      for (let i = 0; i < barNum; i++) {
        let amplitude = data[i * freqJump];
        let alfa = (i * 2 * Math.PI) / maxBarNum;
        let beta = ((3 * 45 - barWidth) * Math.PI) / 270;
        let x = 0;
        let y = radius - (amplitude / 12 - barHeight);
        let w = barWidth;
        let h = amplitude / 6 + barHeight;
    
        ctx.save();
        ctx.translate(cx + barSpacing, cy + barSpacing);
        ctx.rotate(alfa - beta);
        ctx.fillRect(x, y, w, h);
        ctx.restore();
      }
    }
    function loopingFunction() {
      requestAnimationFrame(loopingFunction);
      analyser.getByteFrequencyData(data);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(data);
    }
    
    loopingFunction();
    
    
    //Xử lý thanh Search
    let list = document.getElementsByClassName("song")
    function mySearch() {
      let search_query = document.getElementById("myInput").value;
        for (let i = 0; i < list.length; i++) {
          if(list[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            list[i].classList.remove("is-hidden");
        } else {
            list[i].classList.add("is-hidden");
        }
        }; 
        
    }
    let searchInput = document.getElementById("myInput");
    searchInput.addEventListener("input", mySearch);

    
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();

