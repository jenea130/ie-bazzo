<?php
$block_news = get_field('block_news', 701);
$title = $block_news['title'];
$button_text = $block_news['button_text'];
?>
<section class="block-news">
    <div class="container">
        <?php if (is_front_page()) : ?>
            <h2 class="block-news__title title"><?php echo $title; ?></h2>
        <?php endif; ?>
        <?php
        $articles = new WP_Query([
            "posts_type" => "post",
            "posts_per_page" => 8
        ]);
        ?>
        <?php if ($articles->have_posts()) : ?>
            <div class="block-news__wrap">
                <?php while ($articles->have_posts()) : ?>
                    <?php $articles->the_post(); ?>
                    <?php
                    $title = get_the_title();
                    $img_url = get_the_post_thumbnail_url();
                    $permalink = get_the_permalink();
                    ?>
                    <div class="block-news__item">
                        <div class="block-news__img"><img src="<?php echo $img_url; ?>" alt=""></div>
                        <div class="block-news__content">
                            <div class="block-news__text text"><?php echo $title; ?></div>
                            <a class="block-news__link" href="<?php echo $permalink; ?>"><?php echo $button_text; ?></a>
                        </div>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
        <?php endif; ?>
    </div>
</section>