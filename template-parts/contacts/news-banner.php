<?php
$news_banner = get_field("news_banner");
$title = $news_banner['title'];
$image = $news_banner['image'];
?>
<div class="news-banner">
    <div class="news-banner__img"><img src="<?php echo $image; ?>" alt="">
        <div class="container">
            <h2 class="news-banner__title"><?php echo $title; ?></h2>
        </div>
    </div>
</div>