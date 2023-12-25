<?php
$consult = get_field('consult');
?>
<?php foreach ($consult as $item) : ?>
    <?php
    $title = $item['title'];
    $text = $item['text'];
    ?>

    <div class="philosophy__wrap">
        <div class="philosophy__content">
            <h2 class="philosophy__title title"><?php echo $title; ?></h2>
        </div>
        <div class="philosophy__text">
            <?php echo $text; ?>
        </div>
    </div>
<?php endforeach; ?>