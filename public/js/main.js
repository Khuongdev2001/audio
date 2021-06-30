const listAudio = {
    storyId: 1248753,
    chapters: [
        { chapterId: 14, code: "1UB4NMbhORR3uZlseQRxEJ_IDZ3M92ojR", audioName: "Tiểu Thuyết", thumbnail: "https://i.pinimg.com/originals/e0/53/99/e05399a19fbcd5b66f46b0b31f62e01a.jpg" },
        { chapterId: 23, code: "1UB4NMbhORR3uZlseQRxEJ_IDZ3M92ojR", audioName: "học hành", thumbnail: "http://www.techrum.vn/chevereto/images/2016/04/21/B4eY1.jpg" },
        { chapterId: 34, code: "1UB4NMbhORR3uZlseQRxEJ_IDZ3M92ojR", audioName: "vui vẻ", thumbnail: "https://banthogodep.com/wp-content/uploads/2019/10/phong-tho-dep-1-1.jpg" }
    ]
};

class AudioForm {
    constructor(audios) {
        this.chapterLength = audios.chapters.length;
        // create new map
        const audioMaps = new Map();
        audios.chapters.forEach((value, index, array) => {
            value.index = index;
            audioMaps.set(value.chapterId, value);
        });
        let that = this;
        this.config();
        // get list audio localStoge
        const audioLocalStoges = localStorage.getItem("item");
        const modeLocalStoge = localStorage.getItem("mode");
        // convert audiolocalstoge and modelocalstoge to json
        let jsonAudioLocalStoges = JSON.parse(audioLocalStoges);
        if (!jsonAudioLocalStoges || jsonAudioLocalStoges.storyId != audios.storyId) {
            jsonAudioLocalStoges = {};
        };
        const jsonModelLocalStoges = JSON.parse(modeLocalStoge) || {};
        // create element
        const audioDom = document.createElement("audio");
        // audioDom.controls=true;
        // get bar status
        const barStatus = document.querySelector(".bar .status");
        // get bar
        const bar = document.querySelector(".bar");
        // get btn Play
        const btnPlay = document.querySelector(".btn-play");
        // setText 
        const audioName = document.querySelector(".story-name");
        // get box thumbnail
        const cdRom = document.querySelector(".cd-rom");
        // hadling next()
        const btnNext = document.querySelector(".btn-next");
        // handle preve
        const btnPrev = document.querySelector(".btn-prev");
        // get dom timenow
        const timeNow = document.querySelector(".time-now");
        // get time all
        const timeAll = document.querySelector(".time-all");
        // get btnSpeaker
        const btnSpeaker = document.querySelector(".btn-speaker");
        // get btnRepeate
        const btnRepeate = document.querySelector(".btn-repeat");
        // get thumbnail
        const thumbnail = cdRom.children[0];
        this.thumbnail = jsonAudioLocalStoges.thumbnail || audios.chapters[0].thumbnail;
        thumbnail.src = this.thumbnail;
        // create position
        this.positionAudio = jsonAudioLocalStoges.index || 0;
        // set play begin
        setPostionAudio(this.positionAudio, false);
        // render dom
        document.getElementById("wrapper-audio").after(audioDom);
        // set title
        this.audioName = jsonAudioLocalStoges.audioName || audios.chapters[this.positionAudio].audioName;
        audioName.textContent = this.audioName;
        // set time
        this.currentTime = jsonAudioLocalStoges.currentTime || 0;
        audioDom.currentTime = this.currentTime;
        // repeat 0:none,1:lặp 1 bài duy nhất, 2 lặp lại toàn bài
        this.mode = { repeat: jsonModelLocalStoges.repeat || 0 };
        // set mode default
        const optionRepeat = [{ class: "none", text: "repeat" }, { class: "repeat_one", text: "repeat_one" }, { class: "repeat", text: "repeat" }];
        btnRepeate.classList.add(optionRepeat[this.mode.repeat].class);
        btnRepeate.textContent = optionRepeat[this.mode.repeat].text;
        // set play
        btnPlay.onclick = function() {
            if (this.classList.contains("play")) {
                this.textContent = that.optionStauts[0];
                this.classList.remove("play");
                cdRom.classList.remove("active");
                audioDom.pause();
                return;
            };
            audioDom.play();
            this.classList.add("play");
            this.textContent = that.optionStauts[1];
            cdRom.classList.add("active");
        }
        btnNext.onclick = nextAudio;
        btnPrev.onclick = prevAudio;
        // on update time
        audioDom.addEventListener("timeupdate", function(e) {
            that.currentTime = e.target.currentTime;
            timeNow.textContent = that.formatTime(that.currentTime);
            barStatus.style.width = `${(that.currentTime/e.target.duration)*100}%`;
            timeAll.textContent = that.formatTime(e.target.duration || 0);
            // kiểm tra mod
        });
        // update localstoge
        setInterval(() => {
            if (!audioDom.played) {
                return;
            }
            localStorage.setItem("item", JSON.stringify({
                src: this.audioSrc,
                name: this.audioName,
                thumbnail: this.thumbnail,
                currentTime: this.currentTime,
                index: this.positionAudio,
                storyId: audios.storyId
            }))
        }, 3000);

        function setPostionAudio(positionAudio) {
            // only autoplay when user click play
            audioDom.autoplay = btnPlay.classList.contains("play");
            // render audio new
            that.positionAudio = positionAudio;
            that.audioSrc = that.convertCodeToUrl(audios.chapters[positionAudio].code);
            audioDom.src = that.audioSrc;
            that.thumbnail = audios.chapters[positionAudio].thumbnail;
            thumbnail.src = that.thumbnail;
            that.audioName = audios.chapters[positionAudio].audioName;
            audioName.textContent = that.audioName;
            // check disable prev
            btnNext.classList.remove("disable");
            btnPrev.classList.remove("disable");
            if (positionAudio == 0) {
                btnPrev.classList.add("disable");
            }
            if (positionAudio == that.chapterLength - 1) {
                btnNext.classList.add("disable");
            }
        }

        function nextAudio() {
            let positionAudio = that.positionAudio + 1;
            if (positionAudio >= that.chapterLength) {
                return;
            }
            setPostionAudio(positionAudio);
        }

        function prevAudio() {
            let positionAudio = that.positionAudio - 1;
            if (positionAudio < 0) {
                return;
            }
            setPostionAudio(positionAudio);
        };
        // set time click
        bar.addEventListener("click", function(e) {
            let timeSet = (e.offsetX * audioDom.duration) / bar.offsetWidth;
            audioDom.currentTime = timeSet;
        });
        // set speaker
        btnSpeaker.onclick = function() {
            let option = !audioDom.muted,
                className = ["volume_up", "volume_off"];
            audioDom.muted = option;
            btnSpeaker.textContent = className[Number(option)];
        };
        // set repeat
        btnRepeate.onclick = function() {
            this.classList.remove("none", "repeat_one", "repeat");
            that.mode.repeat++;
            if (that.mode.repeat > 2) {
                that.mode.repeat = 0;
            }
            this.textContent = optionRepeat[that.mode.repeat].text;
            this.classList.add(optionRepeat[that.mode.repeat].class);
            // setlocalStoge
            localStorage.setItem("mode", JSON.stringify({ repeat: that.mode.repeat }));
        };
        bar.addEventListener("drag", function(e) {
            if (e.offsetX >= bar.offsetWidth) {
                return barStatus.style.width = "100%";
            }
            if (e.offsetX <= 0) {
                return barStatus.style.width = "0%"
            }
            barStatus.style.width = (e.offsetX / bar.offsetWidth) * 100 + "%";
            timeNow.textContent = that.formatTime((e.offsetX * audioDom.duration) / bar.offsetWidth);
            audioDom.pause();
        })
        bar.addEventListener("dragend", function(e) {
            let x = e.offsetX;
            if (e.offsetX >= bar.offsetWidth) {
                x = bar.offsetWidth;
            }
            let timeSet = (x * audioDom.duration) / bar.offsetWidth;
            audioDom.currentTime = timeSet;
            audioDom.play();
        });
        audioDom.onended = function() {
            switch (that.mode.repeat) {
                // phát lại bài
                case 1:
                    setPostionAudio(that.positionAudio);
                    break;
                    // lặp all
                case 2:
                    if (that.positionAudio == that.chapterLength - 1) {
                        return setPostionAudio(0);
                    }
                    nextAudio();
                    break;
                default:
                    nextAudio();
            }
        }
    }
    config() {
        this.optionStauts = [
            "play_circle",
            "pause_circle"
        ];
    }
    convertCodeToUrl(code) {
        return `http://docs.google.com/uc?export=open&id=${code}`
    }
    formatTime($time) {
        let time = new Date($time * 1000);
        // vì Việt Nam múi giờ 7
        time.setHours(time.getHours() - 7);
        return time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
    };
}

new AudioForm(listAudio);