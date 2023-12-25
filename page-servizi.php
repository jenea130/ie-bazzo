<?php get_header(); ?>
<?php 
    $banner = get_field('banner');
    $image = $banner['image'];
?>
<div class="philosophy">
    <div class="container">
        <?php echo get_template_part("template-parts/servizi/servizi"); ?>

        <div class="philosophy__banner"><img src="<?php echo $image; ?>" alt=""></div>

        <?php echo get_template_part("template-parts/servizi/consult"); ?>
    </div>
</div>
<?php get_footer(); ?>