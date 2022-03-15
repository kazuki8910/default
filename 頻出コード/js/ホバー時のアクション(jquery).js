// ホバー時のアクション（jquery）

//マウスを乗せたら発動
$('div').hover(function() {

//マウスを乗せたら色が変わる
$(this).css('background', '#c00');

//ここにはマウスを離したときの動作を記述
}, function() {

//色指定を空欄にすれば元の色に戻る
$(this).css('background', '');

});