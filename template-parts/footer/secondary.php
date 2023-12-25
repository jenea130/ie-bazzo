<?php
$secondary = get_field('secondary', 'option');
$title = $secondary['title'];
$address = $secondary['address'];
$phone = $secondary['phone'];
$fax = $secondary['fax'];
$email = $secondary['email'];
?>

<div class="block-contact__point">
    <h3 class="block-contact__subtitle"><?php echo $title; ?></h3>
    <div class="block-contact__street"><?php echo $address; ?></div>
    <div class="block-contact__tel">Tel. <a href="tel:<?php echo clear_phone($phone); ?>" target="_blank"><?php echo $phone; ?></a></div>
    <div class="block-contact__fax">Fax. <a href="tel:<?php echo clear_phone($fax); ?>" target="_blank"><?php echo $fax; ?></a></div>
    <div class="block-contact__email">Email: <a href="mailto:<?php echo $email; ?>" target="_blank"><?php echo $email; ?></a></div>
</div>