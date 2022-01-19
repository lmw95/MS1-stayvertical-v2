window.onload = (event) => {

  // Changes colour of navbar as user scrolls
    $(document).scroll(function () {
        let $nav = $(".navbar");
        $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height());
      });


  // Toggles card image background colour on card hover
    $('.card').hover(function() {
      $(this).find('.card-img').toggleClass('card-img-purple');
    });


  // Toggles each section in accordance with which card button clicked
    $('.toggle-section').click(function() {
      var toggle = $(this).attr('id').split('toggle-')[1];
      var sections = $('.section').map(function() {
        return $(this).attr('id');
        }).get();

      for (let i = 0; i < sections.length; i++) {
        if (sections[i] == toggle) {
          var sectionToggled = sections.find(element => element == toggle);
        }
      }

      var sectionDisplay = `${sectionToggled}`;
        if (toggle == sectionToggled) {
            $(`#${sectionDisplay}`).toggleClass('d-none open');

            if($(`#${sectionDisplay}`).hasClass('open')) {
              var position = $(`#${sectionDisplay}`).position();
              scroll(0,position.top);
            }
        }
    });

}