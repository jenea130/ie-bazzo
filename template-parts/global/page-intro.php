<?php
$page_intro = get_field("page_intro");
$title = $page_intro['title'];
$image = $page_intro['image'];
?>
<div class="page-intro">
    <div class="page-intro__img"><img src="<?php echo $image; ?>" alt="">
        <?php if ($title) : ?>
            <div class="container">
                <h2 class="page-intro__title"><?php echo $title; ?></h2>
            </div>
        <?php endif; ?>
    </div>
</div>