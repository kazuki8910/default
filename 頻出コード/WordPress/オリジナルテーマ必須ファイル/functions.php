<? 
// テーマディレクトリのパス
define("DIR", get_template_directory_uri());



//ファイルの読み込みに関する記述をまとめた関数
function add_files(){
    wp_enqueue_style('style', DIR.'/assets/css/style.css', false, "1");
    wp_enqueue_script('script', DIR.'/assets/js/script.js',  false, "1", true);
}
add_action('wp_enqueue_scripts', 'add_files');




// アイキャッチ画像を有効にする。
add_theme_support('post-thumbnails');



// ウィジェット
function sidebar_widget(){
    register_sidebar( array(
        'name' => 'ウィジェット名',
        'id' => 'sidebar_area',
        'before_widget' => '<aside class="sidebar__sidebar">',
        'after_widget' => '</aside>',
        'before_title' => '<p class="sidebar__title">',
        'after_title' => '</p>'
    ));
}
add_action('widgets_init','sidebar_widget');