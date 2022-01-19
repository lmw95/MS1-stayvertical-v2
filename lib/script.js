window.onload = (event) => {

    $(document).scroll(function () {
        let $nav = $(".navbar");
        $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height());
      });

    $('.card').hover(function() {
      $(this).find('.card-img').toggleClass('card-img-purple');
    });

}