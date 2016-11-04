/**
 * Created by zhao.shuying on 16/9/22.
 */
/**
 * Created by leilei on 16/8/24.
 */
archives = function(){
    return archives.rule.init();
};

archives=archives.prototype={
    g:{
        myScroll:''
    },
    init:function(){
        var that = this;
        that.bindEvent();
    //
    },
    swipeLeft:function(){

    },
    scrollCnt:function(){
        var that=this;
        that.g.myScroll = new IScroll('#wrapper');
        that.g.myScroll.on("slideUp", function () {
            alert("1")
        });
    },
    bindEvent:function(){
        var that=this;
        that.swipeLeft();
        //点击年份切换下面的内容
        $(".J_bookListYear li").bind("click",function(){
            $(this).parents(".J_bookListYear").find("li").removeClass("active");
            $(this).addClass("active");
            $(".J_bookListYearCnt").find(".bookListYearCntLi").removeClass("active");
            $(".J_bookListYearCnt").find(".bookListYearCntLi").eq($(this).index()).addClass("active");
        });
        //整个页面左划,显示菜单
        $("body").on("swipeRight",function(){
            $(".J_archivesLfHide").animate({
                "left":'0'
            })
        });
        //点击菜单 左侧菜单显示
        var flag = 1;
        $(".AmenuBtn").click(function(){
            if(flag==1){
                $(".J_archivesLfHide").animate({ "left":'0'});   
                flag = 0;                
            }else if( flag==0){
                $('.J_archivesLfHide').animate({"left":'-190px'});
                flag = 1;
            }
        });
        //弹出的左侧内容点击自身隐藏
        $(".J_archivesLfHide").bind("click",function(){
            $(this).animate({
                "left":'-190px'
            })
        });

        /*
        $(".J_bookListJson").on("swipeUp",function(){
            alert("向上划了")
        });
        */

        $(document).ready(function(){
            //给虚线获取页面高度 
            var conH = $('.gainH').height()+20;
            $('.bookListLf ,.bookListRt').css('height',conH+'px');

            //给虚线获取页面高度 
            var conH2 = $('.gainH2').height();
            $('.bookListLf ,.bookListRt').css('height',conH2+'px');

        });

    }

};
$(function(){
    archives.init();
});
//男孩 搜索页
  //年级筛选 单选
$(function(){

    $('.grade_iem-inner a').on('tap',function(){
        var indexA = $('.grade_iem-inner a').index(this);
        var Vs2 = $('.grade_iem-inner a').eq(indexA).attr('state');
        function remov(){ $('.grade_iem-inner a').removeClass('gii_on'); };
        
        if(Vs2 =='off'){
            remov();
            $('.grade_iem-inner a').eq(indexA).addClass('gii_on').attr('state','on');
        }else if(Vs2 =='on'){
            var has = $('.grade_iem-inner a').eq(indexA).hasClass("gii_on");
            if(has){
                remov();
                $('.grade_iem-inner a').eq(indexA).removeClass('gii_on').attr('state','off');               
            }else{
                remov();
                $('.grade_iem-inner a').attr('state','off');
                $('.grade_iem-inner a').eq(indexA).addClass('gii_on').attr('state','on');
            };
        }
     });   



  //读物类型筛选 多选
    $('.grade_iem-inner1 a').on('tap',function(){
        var indexB=$('.grade_iem-inner1 a').index(this);
        var Vs = $('.grade_iem-inner1 a').eq(indexB).attr('state');

        if(Vs=='off'){
            $('.grade_iem-inner1 a').eq(indexB).addClass('gii_on');
            $('.grade_iem-inner1 a').eq(indexB).attr('state','on');
        }else if(Vs=='on'){
            $('.grade_iem-inner1 a').eq(indexB).removeClass('gii_on');
            $('.grade_iem-inner1 a').eq(indexB).attr('state','off');
        } 
    });

});

/*
$(function(){
    //禁止拖动
    
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    });
      
});

*/ 




// star星级

$(function(){
    function starLev(){
        //elem = elem || document.querySelector(elem);
        var  html = '';
        var img1 = '<img class="img-1" src="images/star-normal.png" alt="">';
        var img0 = '<img class="img-0" src="images/star-pararet.png" alt="">';
        var bl = 'bl_';

        var elem = $('.book_lev ,.imgpa_lev');

        $(elem).each(function(){
            if($(this).hasClass(bl+0)){
                html=img0+img0+img0+img0+img0;
                $(this).append(html);
            }else if($(this).hasClass(bl+1)){
                html=img1+img0+img0+img0+img0;
                $(this).append(html);
            }else if($(this).hasClass(bl+2)){
                html=img1+img1+img0+img0+img0;
                $(this).append(html);
            }else if($(this).hasClass(bl+3)){
                html=img1+img1+img1+img0+img0;
                $(this).append(html);
            }else if($(this).hasClass(bl+4)){
                html=img1+img1+img1+img1+img0;
                $(this).append(html);
            }else if($(this).hasClass(bl+5)){
                html=img1+img1+img1+img1+img1;
                $(this).append(html);
            }else{
                html='';
            };
        });   
    };
    starLev();
});


//判断横屏竖屏
$(function(){
    $("body").append("<div id='lock' class='lock flex flex-v flex-align-center flex-pack-center'><div class='lock_bg'></div> <p class='lock_txt'>竖屏查看效果更好哦！</p></div>");

    var lock = document.getElementById('lock');

    window.addEventListener('orientationchange', function(){
     if(window.neworientation.current === 'portrait'){
        $('.lock').css('display','none');
     } else {
        $('.lock').css('display','-webkit-box');
        $('.lock').css('display','-webkit-flex');
        $('.lock').css('display','-ms-flexbox');
        $('.lock').css('display','flex');
     }
    }, false);

});


$(function(){
    $('img').error(function(){
        $(this).attr('src',"../images/pic-none.png");
    });
});