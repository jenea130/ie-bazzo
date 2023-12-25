<?php
$about_company = get_field('about_company');
$icon = $about_company['icon'];
$text = $about_company['text'];
?>
<section class="about-company">
    <div class="container">
        <div class="about-company__wrap">
            <div class="about-company__logo">
                <?php echo $icon; ?>
            </div>
            <div class="about-company__content">
                <?php echo $text; ?>
            </div>
        </div>
    </div>
</section>