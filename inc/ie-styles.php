<?php
function ie_bazzo_scripts()
{
	wp_enqueue_style('ie-bazzo-style', get_stylesheet_uri(), array(), _S_VERSION);
	wp_enqueue_style('ie-bazzo-leaflet-css', get_template_directory_uri() . "/assets/libs/leaflet/leaflet.css", array(), _S_VERSION);
	wp_enqueue_style('ie-bazzo-my-css', get_template_directory_uri() . "/assets/css/my.css", array(), _S_VERSION);
	wp_style_add_data('ie-bazzo-style', 'rtl', 'replace');

	// wp_enqueue_script('ie-bazzo-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true);
	wp_enqueue_script('ie-bazzo-leaflet', get_template_directory_uri() . '/assets/libs/leaflet/leaflet.js', array("jquery"), null, true);
	wp_enqueue_script('ie-bazzo-webpack', get_template_directory_uri() . '/assets/js/dist/webpack.js', array("jquery"), null, true);
	// wp_enqueue_script('ie-bazzo-custom-jquery', get_template_directory_uri() . '/assets/jquery/custom-jquery.js', array("jquery"), null, true);

	// if (is_singular() && comments_open() && get_option('thread_comments')) {
	// 	wp_enqueue_script('comment-reply');
	// }
}
add_action('wp_enqueue_scripts', 'ie_bazzo_scripts');
