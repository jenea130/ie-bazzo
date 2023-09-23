<?php 
    $home_intro = get_field("home_intro");
    $title = $home_intro['title'];
    $image = $home_intro['image'];
?>
<section class="home-intro">
    <div class="home-intro__img"> <img src="<?php echo $image; ?>" alt="Intro"></div>
    <div class="container">
        <h1 class="home-intro__title"><?php echo $title; ?></h1>
    </div>
</section>