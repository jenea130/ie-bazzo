<?php 
/**
 *  Template Name: Home
 */
get_header(); ?>
<?php echo get_template_part("template-parts/home/home-intro"); ?>
<?php echo get_template_part("template-parts/home/block-content"); ?>
<?php echo get_template_part("template-parts/home/block-profile"); ?>
<?php echo get_template_part("template-parts/home/block-news"); ?>
    <section class="block-contact">
      <div class="container">
        <h2 class="block-contact__title title">contatti</h2>
        <div class="block-contact__wrap">
          <div class="block-contact__form">
            <div class="form">
              <form action=""> 
                <div class="form__wrap">
                  <div class="form__group">
                    <input type="text" placeholder="name">
                  </div>
                  <div class="form__group">
                    <input type="email" placeholder="email">
                  </div>
                </div>
                <div class="form__group">
                  <input type="text" placeholder="oggetto">
                </div>
                <div class="form__group">
                  <textarea placeholder="Messaggio"></textarea>
                </div>
                <div class="form__footer">
                  <button class="form__submit btn" disabled="true">Invia</button>
                  <div class="form__privacy">
                    <input class="form__checkbox" id="checkbox" type="checkbox">
                    <label for="checkbox">Cliccando su invia dichiari di aver preso visione e di accettare la nostra <span>privacy policy</span></label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="block-contact__points">
            <div class="block-contact__point"> 
              <h3 class="block-contact__subtitle">Sede principale</h3>
              <div class="block-contact__street">31053 - PIEVE DI SOLIGO (TV)  Viale Garibaldi n.57</div>
              <div class="block-contact__text">Orario di apertura: dal lunedì al venerdì 8.30 - 12.00 e 14.00 - 18.30</div>
              <div class="block-contact__tel">Tel. <a href="tel:+39043882684" target="_blank">+39 (0)438 82684</a></div>
              <div class="block-contact__fax">Fax. <a href="tel:+3904381844173">+39 (0)438 1844173</a></div>
              <div class="block-contact__email">Email: <a href="mailto:studio@smba.it" target="_blank">studio@smba.it</a></div>
            </div>
            <div class="block-contact__point"> 
              <h3 class="block-contact__subtitle">Sede secondaria</h3>
              <div class="block-contact__text">Via XX Settembre 22, 32020 Cencenighe a Gordino (BL)</div>
              <div class="block-contact__tel">Tel: <a href="tel:+390437580124">+39 (0)437 580124</a></div>
              <div class="block-contact__fax">Fax. <a href="tel:+390437588070">+39 (0)437 588070</a></div>
              <div class="block-contact__email">Email: <a href="mailto:studiocence@smba.it" target="_blank">studiocence@smba.it</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
<?php get_footer(); ?>