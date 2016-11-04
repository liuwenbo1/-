



var s =  $('.audiob').find('i').html().trim();
if(s==='暂无音频'){
  $('.audiob').css('background','none');
  $('.audiob').find('span').hide();
};



//音频播放
var audio = document.getElementById("D_audio");
var initid = 1;

// audio.duration  播放时长     audio.currentTime 播放进度
var bar = document.getElementById("audio_bar");



$('.audiob').on("touchstart", function(t) {
  if(initid==1){
      var that = $(this);

      $(this).find('span').addClass('Ma_on');
      audio.play();
      initid=2;
      //
      js = window.setInterval("AudioBar()",500);
      audio.onended = function(){
        //alert('播放结束');
        clearInterval(js);
        bar.style.width = "0%";
        $(that).find('span').removeClass('Ma_on');
        initid=1;
      }


  }else{
      $(this).find('span').removeClass('Ma_on');
      audio.pause();
      initid=1;
      //
  };
});

function AudioBar(){
 var cur = Math.round(audio.currentTime)/Math.round(audio.duration) * 100;
 bar.style.width= cur+"%";
};



