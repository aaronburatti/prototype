
    /*Hiding all all tables besides the activity log, preparing for the toggle functions*/
    $('#ready-table, .down').hide();
    $('#sum-table').hide();
    $('#search-results').hide();
    $('#reminder-table, .down2').hide();

    /* Toggling the table attached to the ready to hire button right above the pipeline*/
    $('.ready-to-hire').click(function(){
      $('#ready-table, .down').toggle();
    });


    /*Toggling the table attached to the reminder button right above the pipeline*/
    $('.reminders').click(function(){
      $('#reminder-table, .down2').toggle();
    });

    
    $('#phone-screen').click(function(){
      $('#sum-table').toggle();
      $('#phone-screen').toggleClass('greenshow');
    });



    $('#search-bar').click(function(){
      event.preventDefault();

        $('#search-bar').keyup(function(){
          $('#search-results').show(.1);
      })
    });

    $('#search-bar').keydown(function(){
      $('#greyout').addClass('grey');
    });


    $(document).click(function(e){
          if(!$(e.target).closest('#search-bar').length){
             $('#search-results').hide();
             $('#greyout').removeClass();
            }
      });
