<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <?php 
    $logo = get_field('logo', 'option');
    $logo_mini = get_field('logo_mini', 'option');
  ?>
  <div class="site">
    <header class="main-header">
      <div class="container">
        <div class="main-header__wrap">
          <a class="main-header__logo" href="<?php echo home_url(); ?>">
            <?php echo $logo; ?>
          </a>
          <a class="main-header__logomini" href="<?php echo home_url(); ?>">
            <?php echo $logo_mini; ?>
          </a>
          <?php wp_nav_menu([
            'theme_location'  => 'menu-header',
            'menu'            => '',
            'container'       => '',
            'container_class' => '',
            'container_id'    => '',
            'menu_class'      => 'main-header__menu',
            'menu_id'         => 'js-main-menu',
            'echo'            => true,
            'fallback_cb'     => 'wp_page_menu',
            'before'          => '',
            'after'           => '',
            'link_before'     => '',
            'link_after'      => '',
            'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
            'depth'           => 0,
            'walker'          => '',
          ]); ?>
          <div class="sandwich-wrap" id="js-sandwich-wrap">
            <div class="sandwich">
              <div class="sandwich__line sandwich__line--top"></div>
              <div class="sandwich__line sandwich__line--middle"></div>
              <div class="sandwich__line sandwich__line--bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </header>