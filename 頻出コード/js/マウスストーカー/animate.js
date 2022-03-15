$(function(){
    
    //マウスストーカー用のdivを取得
    const stalker = document.getElementById('stalker');
    
    //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
    document.addEventListener('mousemove', function (e) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
});

