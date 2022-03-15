// 要素意外とクリックしたときのアクション
$(document).click(function(event) {
    if(!$(event.target).closest('').length) {
        // 要素外のクリックイベント
    } else {
        // 要素のクリックイベント
    }
});