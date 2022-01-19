window.onload = (event) => {

    $(document).scroll(function () {
        let $nav = $(".navbar");
        $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height());
      });

}