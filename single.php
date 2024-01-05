<?php
get_header();
?>

<?php echo get_template_part("template-parts/global/page-intro"); ?>
<div class="single-news">
	<div class="container">
		<?php if (have_posts()) : ?>
			<?php the_post(); ?>
			<?php the_content(); ?>
		<?php endif; ?>
	</div>
</div>
<?php
get_footer();
