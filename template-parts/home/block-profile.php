<?php
$block_profile = get_field('block_profile');
$image = $block_profile['image'];
$title = $block_profile['title'];
$logo = $block_profile['logo'];
$text = $block_profile['text'];
$button_text = $block_profile['button_text'];
$button_url = $block_profile['button_url'];
?>
<section class="block-profile">
    <div class="container">
        <div class="block-profile__img"><img src="<?php echo $image; ?>" alt=""></div>
        <div class="block-profile__wrap">
            <div class="block-profile__logo">
                <h2 class="block-profile__title title"><?php echo $title; ?></h2>
                <div class="block-profile__svg">
                    <?php echo $logo; ?>
                </div>
            </div>
            <div class="block-profile__content">
                <div class="block-profile__text text">
                    <?php echo $text; ?>
                </div>
                <a class="block-profile__btn btn" href="<?php echo $button_url; ?>"><?php echo $button_text; ?></a>
            </div>
        </div>
    </div>
</section>