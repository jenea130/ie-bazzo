<?php
$block_content = get_field("block_content");
?>
<section class="block-content">

    <div class="container">
        <?php foreach ($block_content as $item) : ?>
            <?php
            $title = $item['title'];
            $text = $item['text'];
            ?>
            <div class="block-content__wrap">
                <h2 class="block-content__title title"><?php echo $title; ?></h2>
                <div class="block-content__text text"><?php echo $text; ?></div>
            </div>
        <?php endforeach; ?>
    </div>
</section>