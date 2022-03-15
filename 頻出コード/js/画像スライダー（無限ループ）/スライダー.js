
    // スライダーアニメーション
    // 最初と最後の要素のクローン作成
    $('.slider__img_last2').clone(true).insertBefore('.slider__img_first');
    $('.slider__img_last').clone(true).insertBefore('.slider__img_first');
    $('.slider__img_first').clone(true).appendTo('.slider__container');
    $('.slider__img_first2').clone(true).appendTo('.slider__container');

    const $next = $('.slider__btn_next'); //進むボタンの要素
    const $prev = $('.slider__btn_prev'); //戻るボタンの要素
    const $sliderImg = $('.slider__img'); //画像の要素

    let sliderPosition = 200; // 表示している画像の位置
    let imgNum = $sliderImg.length; //画像の個数

    // 画像の初期位置
    $sliderImg.css('right', 200 + '%');

    // 進む動作
    function next(){
        if(sliderPosition < imgNum*100-300){
            sliderPosition = sliderPosition + 100;
            $sliderImg.animate({'right':sliderPosition+'%'},500);
        }else{
            $.when(
                sliderPosition = sliderPosition + 100,
                $sliderImg.animate({'right':sliderPosition+'%'},500)
            ).done(function(){
                sliderPosition = 200;
                $sliderImg.css('right', sliderPosition+'%');
            });
        }
    }
    // 戻る動作
    function prev(){
        if(sliderPosition > 200){
            sliderPosition = sliderPosition - 100;
            $sliderImg.animate({'right':sliderPosition+'%'},500);
        }else{
            $.when(
                sliderPosition = sliderPosition - 100,
                $sliderImg.animate({'right':sliderPosition+'%'},500)
            ).done(function(){
                sliderPosition = imgNum*100 - 300;
                $sliderImg.css('right', sliderPosition+'%');
            });
        }
    }

        // 進むボタン
        $next.click(function(){
            next();
        });
        
        // 戻るボタン
        $prev.click(function(){
            prev();
        });

        // スワイプ
        $('.slider__img').on('touchstart', onTouchStart); //指が触れたか検知
        $('.slider__img').on('touchmove', onTouchMove); //指が動いたか検知
        $('.slider__img').on('touchend', onTouchEnd); //指が離れたか検知
        let direction, position;
    
        //スワイプ開始時の横方向の座標を格納
        function onTouchStart(event) {
            position = getPosition(event);
            direction = ''; //一度リセットする
        }
    
        //スワイプの方向（left／right）を取得
        function onTouchMove(event) {
            if (position - getPosition(event) > 70) { // 70px以上移動しなければスワイプと判断しない
                direction = 'left'; //左と検知
            } else if (position - getPosition(event) < -70){  // 70px以上移動しなければスワイプと判断しない
                direction = 'right'; //右と検知
            }
        }
    
        function onTouchEnd(event) {
            if (direction == 'right'){
                prev();
            } else if (direction == 'left'){
                next();
            }
        }
    
        //横方向の座標を取得
        function getPosition(event) {
            return event.originalEvent.touches[0].pageX;
        }