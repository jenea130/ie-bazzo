<?php
$servizi = get_field('servizi');
?>
<?php foreach ($servizi as $item) : ?>
    <?php
    $title = $item['title'];
    $image = $item['image'];
    $text = $item['text'];
    ?>
    <div class="philosophy__wrap">
        <div class="philosophy__content">
            <h2 class="philosophy__title title"><?php echo $title; ?></h2>
            <div class="philosophy__img"><img src="<?php echo $image; ?>" alt=""></div>
        </div>
        <div class="philosophy__text">
            <?php echo $text; ?>
        </div>
    </div>
<?php endforeach; ?>