/**
 ** author: Eleanor Mao
 ** email: danningmao@outlook.com
 ** 调用方法 $(dom).scrollUp()
 ** 可传值距离顶部高度||上滚速度
 **/
;(function(m) {
    m.fn.scrollUp = function(tp, speed) {
        var def = { tp: 400, speed: 500 }
        if (tp == 'slow' || 'fast') { 
            speed = tp;
            tp = undefined; 
        }
        var option = { tp: tp, speed: speed }
        moption = m.extend(def, option);
        return this.each(function() {
            var mthis = m(this);
            var a;
            mthis.hide();
            m(window).on('scroll', function() { 
               a = document.documentElement.scrollTop || document.body.scrollTop;
               if (a > moption.tp) { 
                  mthis.fadeIn(); 
               } else { 
                  mthis.fadeOut('fast'); 
               } 
            })
            mthis.on('click', function() {
              m("body,html").animate({ scrollTop: 0 }, moption.speed); 
            })
        })
    }
})(jQuery)
