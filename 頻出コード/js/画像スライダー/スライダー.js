// スライダーアニメーション
const $next = $('.slider__btn_next'); //進むボタンの要素
const $prev = $('.slider__btn_prev'); //戻るボタンの要素
const $sliderImg = $('.slider__img'); //画像の要素

let sliderPosition = 0; // 表示している画像の位置
let imgNum = $sliderImg.length; //画像の個数

console.log(imgNum);

    // 進むボタン
    $next.click(function(){

        if(sliderPosition < imgNum*100-100){

            sliderPosition = sliderPosition + 100;
            $sliderImg.css('right', sliderPosition+'%');

        }else{
            
            sliderPosition = 0;
            $sliderImg.css('right', sliderPosition+'%');

        }

    });
    
    // 戻るボタン
    $prev.click(function(){

        if(sliderPosition > 0){

            sliderPosition = sliderPosition - 100;
            $sliderImg.css('right', sliderPosition+'%');

        }else{
            
            sliderPosition = imgNum*100 - 100;
            $sliderImg.css('right', sliderPosition+'%');

        }

    });