
    // ページ内アンカーリンク
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        let speed = 400; // ミリ秒で記述
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top - 50;
        $('body,html').animate({scrollTop:position}, speed, 'swing');

        // スクロール量が足りなかった時
        setTimeout(function(){
            if(position < target.offset().top - 50){
                position = target.offset().top - 50;
                $('body,html').animate({scrollTop:position}, speed/10, 'swing');
            }
        },speed);
        
        return false;
    });