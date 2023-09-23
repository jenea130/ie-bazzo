<?php
/**
 * ie-bazzo functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package ie-bazzo
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

require_once __DIR__."/inc/func.php";
require_once __DIR__."/inc/ie-setup.php";
require_once __DIR__."/inc/ie-widgets.php";
require_once __DIR__."/inc/ie-styles.php";

function ie_bazzo_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'ie_bazzo_content_width', 640 );
}
add_action( 'after_setup_theme', 'ie_bazzo_content_width', 0 );



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

