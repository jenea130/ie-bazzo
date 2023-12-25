<?php 
    $about_banner = get_field('about_banner');
    $image = $about_banner['image'];
?>
<div class="about-banner">
    <div class="about-banner__img"><img src="<?php echo $image; ?>" alt=""></div>
</div>