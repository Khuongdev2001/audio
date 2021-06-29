

// tạo icon play và pause
// this.optionStauts = [
//     [{
//         className: "pause",
//         svg: `<svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-981.333333a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m255.445333 473.344a20.458667 20.458667 0 0 1-1.450666 4.16 18.261333 18.261333 0 0 1-0.874667 2.496 12.245333 12.245333 0 0 1-0.874667 0.96 22.741333 22.741333 0 0 1-2.901333 3.2 20.501333 20.501333 0 0 1-3.306667 2.794666 12.48 12.48 0 0 1-1.002666 0.853334l-382.656 213.333333a20.778667 20.778667 0 0 1-3.2 1.045333c-0.256 0-0.533333 0.149333-0.810667 0.256a22.144 22.144 0 0 1-6.272 1.258667c-0.490667 0-0.917333 0.298667-1.429333 0.298667a21.504 21.504 0 0 1-2.88-0.576 23.594667 23.594667 0 0 1-3.242667-0.661334 19.2 19.2 0 0 1-5.056-2.389333 18.794667 18.794667 0 0 1-2.133333-1.472 20.672 20.672 0 0 1-3.562667-3.904 18.389333 18.389333 0 0 1-1.514667-1.664c-0.234667-0.384-0.234667-0.832-0.426666-1.216a21.610667 21.610667 0 0 1-1.301334-3.690667 21.098667 21.098667 0 0 1-0.96-4.778666c0-0.341333-0.192-0.64-0.192-0.981334V298.666667c0-0.341333 0.170667-0.64 0.192-0.981334a20.864 20.864 0 0 1 0.96-4.778666 21.610667 21.610667 0 0 1 1.301334-3.690667c0.192-0.384 0.192-0.832 0.426666-1.216a18.389333 18.389333 0 0 1 1.514667-1.664 20.672 20.672 0 0 1 3.562667-3.904 18.794667 18.794667 0 0 1 2.133333-1.472 19.2 19.2 0 0 1 5.056-2.389333 23.594667 23.594667 0 0 1 3.242667-0.661334A21.504 21.504 0 0 1 362.666667 277.333333c0.512 0 0.938667 0.256 1.429333 0.298667a21.994667 21.994667 0 0 1 6.272 1.258667c0.277333 0 0.554667 0.149333 0.810667 0.256a20.778667 20.778667 0 0 1 3.2 1.045333l382.656 213.333333a12.48 12.48 0 0 1 1.002666 0.853334 20.501333 20.501333 0 0 1 3.306667 2.794666 22.741333 22.741333 0 0 1 2.901333 3.2 12.245333 12.245333 0 0 1 0.874667 0.96 17.301333 17.301333 0 0 1 0.874667 2.496 20.458667 20.458667 0 0 1 1.450666 4.16 27.072 27.072 0 0 1 0 8.021334zM384 689.173333L701.866667 512 384 334.933333v354.346667z"  /></svg>`
//     }, {
//         className: "play",
//         svg: `<svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-981.333333a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m128 661.333333a21.333333 21.333333 0 0 1-21.333333-21.333333V341.333333a21.333333 21.333333 0 0 1 42.666666 0v341.333334a21.333333 21.333333 0 0 1-21.333333 21.333333z m-256 0a21.333333 21.333333 0 0 1-21.333333-21.333333V341.333333a21.333333 21.333333 0 0 1 42.666666 0v341.333334a21.333333 21.333333 0 0 1-21.333333 21.333333z"  /></svg>`
//     }]
// ];

// const audio = document.createElement("audio");
// audio.src = "http://docs.google.com/uc?export=open&id=1UB4NMbhORR3uZlseQRxEJ_IDZ3M92ojR";
// audio.autoplay = true;
// audio.controls = true;
// document.getElementById("wrapper-audio").after(audio);
// window.onclick = function() {
//     console.log(audio.currentTime, audio.duration / 60)
//     console.log(audio.ended);
// }

// // loading
// // audio.addEventListener('progress', function(e) {
// //     console.log(e);
// // })

// audio.addEventListener('timeupdate', function() {
//     if (audio.ended) {
//         console.log("dừng");
//     }
// })
const listAudio={
    storyId:123,
    chapters:[
        {chapterId:14,code:"1UB4NMbhORR3uZlseQRxEJ_IDZ3M92ojR",name:"Tiểu Thuyết",thumbnail:"https://i.pinimg.com/originals/e0/53/99/e05399a19fbcd5b66f46b0b31f62e01a.jpg"},
        {chapterId:23,code:"1UB4NMbhORR3uZlseQRxEJ_IDZ3M92ojR",name:"học hành",thumbnail:"http://www.techrum.vn/chevereto/images/2016/04/21/B4eY1.jpg"},
        {chapterId:34,code:"1UB4NMbhORR3uZlseQRxEJ_IDZ3M92ojR",name:"vui vẻ",thumbnail:"https://banthogodep.com/wp-content/uploads/2019/10/phong-tho-dep-1-1.jpg"}
    ]
};

class AudioForm{
    constructor(audios){
        // create new map
        const audioMaps=new Map();
        audios.chapters.forEach((value,index,array) => {
            value.index=index;
            audioMaps.set(value.chapterId,value);
        });
        this.config();
        // get list audio localStoge
        const audioLocalStoges=localStorage.getItem("item");
        const modeLocalStoge=localStorage.getItem("mode");
        // convert audiolocalstoge and modelocalstoge to json
        try{
            const jsonAudioLocalStoges=JSON.parse(audioLocalStoges) || {};
            const jsonModelLocalStoges=JSON.parse(modeLocalStoge) || {};
            // create element
            const audioDom=document.createElement("audio");
            // get src localsoge or array input
            this.audioSrc=jsonAudioLocalStoges.src || audios.chapters[0].code;
            // set mode
            audioDom.src=this.convertCodeToUrl(this.audioSrc);
            // audioDom.controls=true;
            document.getElementById("wrapper-audio").after(audioDom);
            // get bar status
            const barStatus=document.querySelector(".bar .status");
            // get bar
            const bar=document.querySelector(".bar");
            // get btn Play
            const btnPlay=document.querySelector(".btn-play");
            // setText 
            const audioName=document.querySelector(".story-name");
            // get box thumbnail
            const cdRom=document.querySelector(".cd-rom");
            // hadling next()
            const btnNext=document.querySelector(".btn-next");
            // handle preve
            const btnPrev=document.querySelector(".btn-prev");
            // get dom timenow
            const timeNow=document.querySelector(".time-now");
            // get time all
            const timeAll=document.querySelector(".time-all");
            // get btnSpeaker
            const btnSpeaker=document.querySelector(".btn-speaker");
            // get btnRepeate
            const btnRepeate=document.querySelector(".btn-repeat");
            // get thumbnail
            const thumbnail=cdRom.children[0];
            this.thumbnail= jsonAudioLocalStoges.thumbnail || audios.chapters[0].thumbnail;
            thumbnail.src=this.thumbnail;
            // create position
            this.positionAudio= jsonAudioLocalStoges.index || 0;
            // set title
            let that=this;
            this.audioName=jsonAudioLocalStoges.name || audios.chapters[this.positionAudio].name;
            audioName.textContent=this.audioName;
            // set time
            this.currentTime=jsonAudioLocalStoges.currentTime || 0;
            audioDom.currentTime=this.currentTime;
            // repeat 0:none,1:lặp 1 bài duy nhất, 2 lặp lại toàn bài
            this.mode={
                repeat:jsonModelLocalStoges.repeat || 0
            }
            // set mode default
            const optionRepeat=[{class:"none",text:"repeat"},{class:"repeat_one",text:"repeat_one"},{class:"repeat",text:"repeat"}];
            btnRepeate.classList.add(optionRepeat[this.mode.repeat].class);
            btnRepeate.textContent=optionRepeat[this.mode.repeat].text
            // set play
            btnPlay.onclick=function(){
                if(this.classList.contains("play")){
                    this.textContent=that.optionStauts[0];
                    this.classList.remove("play");
                    cdRom.classList.remove("active");
                    audioDom.pause();
                    return;
                }
                audioDom.play();
                this.classList.add("play");
                this.textContent=that.optionStauts[1];
                cdRom.classList.add("active");
            }
            btnNext.onclick=nextAudio;
            btnPrev.onclick=function(){
                let positionAudio=that.positionAudio-1;
                if(positionAudio<0){
                    return;
                }
                setPostionAudio(positionAudio);                 
            }
            // on update time
            audioDom.addEventListener("timeupdate",function(e){
                that.currentTime=e.target.currentTime;
                timeNow.textContent=that.formatTime(that.currentTime);
                barStatus.style.width=`${(that.currentTime/e.target.duration)*100}%`;
                timeAll.textContent=that.formatTime(e.target.duration || 0);
                // kiểm tra mod
                if(!this.ended){
                    return;
                }
                switch(that.mode.repeat){
                    // phát lại bài
                    case 1:      
                        setPostionAudio(that.positionAudio);
                    break;
                    // lặp all
                    case 2:
                        if(that.positionAudio == audios.chapters.length-1){
                            return setPostionAudio(0);
                        }
                        nextAudio();
                    break; 
                    default:
                    nextAudio();
                }
            })

            // update localstoge
            setInterval(()=>{
                if(!audioDom.played){
                    return;
                }
                localStorage.setItem("item",JSON.stringify({
                    src:this.audioSrc,
                    name:this.audioName,
                    thumbnail:this.thumbnail,
                    currentTime:this.currentTime,
                    index:this.positionAudio
                }))
            },3000);

            function setPostionAudio(positionAudio){
                audioDom.autoplay=true;
                // render audio new
                that.positionAudio=positionAudio;
                that.src=that.convertCodeToUrl(audios.chapters[positionAudio].code);
                audioDom.src= that.src;
                that.thumbnail=audios.chapters[positionAudio].thumbnail;
                thumbnail.src=that.thumbnail;
                that.audioName=audios.chapters[positionAudio].name;
                audioName.textContent=that.audioName;
            }

            function nextAudio(){
                let positionAudio=that.positionAudio+1;
                if(positionAudio>=audios.chapters.length){
                    return;
                }
                setPostionAudio(positionAudio);
            }

            // set time click
            bar.onclick=function(e){
                let timeSet=(e.offsetX * audioDom.duration)/bar.offsetWidth;
                audioDom.currentTime=timeSet;
            }
            // set speaker
            btnSpeaker.onclick=function(){
                let option=!audioDom.muted,
                    className=["volume_up","volume_off"];   
                audioDom.muted=option;
                btnSpeaker.textContent=className[Number(option)];    
            }
            // set repeat
            btnRepeate.onclick=function(){
                this.classList.remove("none","repeat_one","repeat");
                that.mode.repeat++;
                if(that.mode.repeat > 2){
                    that.mode.repeat=0;
                }
                this.textContent=optionRepeat[that.mode.repeat].text;
                this.classList.add(optionRepeat[that.mode.repeat].class);
                // setlocalStoge
                localStorage.setItem("mode",JSON.stringify({repeat:that.mode.repeat}));
            }
        }
        catch(e){
            throw("Please No Edit !",e)
        }
    }

    
    config(){
        this.optionStauts = [ 
            "play_circle",
            "pause_circle"
        ]
    }
    convertCodeToUrl(code){
        return `http://docs.google.com/uc?export=open&id=${code}`
    }

    formatTime($time){
        let time=new Date($time*1000);
        // vì Việt Nam múi giờ 7
        time.setHours(time.getHours()-7);
        return time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
    }
}

new AudioForm(listAudio);








