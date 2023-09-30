<?php 
/**
 *  Template Name: Home
 */
get_header(); ?>
<?php echo get_template_part("template-parts/home/home-intro"); ?>
<?php echo get_template_part("template-parts/home/block-content"); ?>
<?php echo get_template_part("template-parts/home/block-profile"); ?>
<?php echo get_template_part("template-parts/home/block-news"); ?>
<?php get_footer(); ?>