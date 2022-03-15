// スクロールイベントの負荷軽減
{
    let timeoutId;
    const delay = 500; // 処理の遅延時間


    window.addEventListener( "scroll", function () {
        // setTimeout()がセットされていたら無視
        if ( timeoutId ) return ;
    
        timeoutId = setTimeout( function () {
            timeoutId = 0 ;
    
            // 処理内容
        }, delay ) ;
    } ) ;
}