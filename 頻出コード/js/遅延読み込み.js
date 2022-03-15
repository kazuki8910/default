
    // 画像遅延読込
    {
        // 全画像要素格納
        const $imgs = $('img[data-src]');
        
        // 画像要素と画像の位置の配列
        let imgs = []; 
        $imgs.each(function(ind, elm){
            imgs.push({"elm":$(elm),"pos":$(elm).offset().top});
        });

        let flag = true; // スクロールイベントの負荷軽減
        const reduce = 100 // スクロールイベント軽減量
        const appear = 200 // 画像の表示の速さ
        $(window).on("load scroll resize",function(){
            if(flag && imgs.length > 0){
                flag = false;
                setTimeout(function(){
                    const s = window.pageYOffset + appear + window.innerHeight;
                    while(true){
                        if(imgs.length > 0){
                            if(imgs[0].pos < s){
                                imgs[0].elm.attr("src", imgs[0].elm.attr("data-src")); // 画像表示
                                imgs.shift(); // 配列から表示した画像を削除
                                imgs.forEach(function(val){
                                    val.pos = val.elm.offset().top; // 画像の位置再取得
                                });
                            }else{
                                break;
                            }
                        }else{
                            break;
                        }
                    }
                    flag = true;
                }, reduce);
            }
        });
    }