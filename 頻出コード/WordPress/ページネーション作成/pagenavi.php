<!-- 固定ページでページネーション実装方法 -->
<?php
$args = array( 
    'post_type' => 'post', // カスタム投稿スラッグ指定
    'posts_per_page' => 10, // 一ページの取得数指定
    'paged' => $paged,
    'post_status' => 'publish',

);
$the_query = new WP_Query($args); 
if($the_query->have_posts()):
    while ($the_query->have_posts()):
        $the_query->the_post();
?>

<?php
    endwhile;

if( function_exists('wp_pagenavi') ) {
    wp_pagenavi(array('query' => $the_query));
}

endif;
wp_reset_postdata();
?>