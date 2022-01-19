window.onload = (event) => {

  // Changes colour of navbar as user scrolls
    $(document).scroll(function () {
        let $nav = $(".navbar");
        $nav.toggleClass('nav-scrolled', $(this).scrollTop() > $nav.height());
      });


  //Toggles card to increase scale when card button clicked
  $('.toggle-section').click(function() {
    var toggle = $(this).attr('id').split('toggle-')[1];
    var cards = $('.card').map(function() {
      return $(this).attr('id');
    }).get();

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].split('card-')[1] == toggle) {
        var cardId = cards[i].split('card-')[1];
      }
    }

    var growCard = `${cardId}`;
    if (toggle == growCard) {
      $(`#card-${growCard}`).toggleClass('grow-card');
    }

    console.log(growCard);
  });


  // Toggles the card img wrapper purple when card button clicked
    $('.toggle-section').click(function() {
      var toggle = $(this).attr('id').split('toggle-')[1];
      var cardDivs = $('.card-img').map(function() {
        return $(this).attr('id');
      }).get(); 

      for (let i = 0; i < cardDivs.length; i++) {
        if (cardDivs[i].split('-img')[0] == toggle) {
          var cardDivId = cardDivs[i].split('-img')[0];
        }
      }

      var turnPurple = `${cardDivId}`;
        if (toggle == turnPurple) {
            $(`#${turnPurple}-img`).toggleClass('card-img-purple');
        }
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