<?php
$about_staff = get_field('about_staff');
$title = $about_staff['title'];
$items = $about_staff['items'];
?>
<section class="about-staff">
    <div class="container">
        <h2 class="about-staff__title title"><?php echo $title; ?></h2>

        <div class="about-staff__wrap">
            <?php foreach ($items as $item) : ?>
                <?php
                $image = $item['image'];
                $title = $item['title'];
                $subtitle = $item['subtitle'];
                $text = $item['text'];
                ?>

                <div class="about-staff__item">
                    <div class="about-staff__img"><img src="<?php echo $image; ?>" alt=""></div>
                    <div class="about-staff__content">
                        <h3 class="about-staff__subtitle title"><?php echo $title; ?></h3>
                        <div class="about-staff__label"><?php echo $subtitle; ?></div>
                        <div class="about-staff__text"><?php echo $text; ?></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>