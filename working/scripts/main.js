
    $(document).ready(function() {
        //$('.carousel').carousel()

        function scrollToAnchor(aid){
    var aTag = $(aid );
        $('html,body').animate({scrollTop: aTag.offset().top},'fast');
    }

    $(".navbar-nav li a").click(function(e) {
        e.preventDefault();
       scrollToAnchor($(this).attr('href'));
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        $(this).find('input, textarea').val('');
            var data = {
            name: $("input[name='full_name']").val(),
            email: $("input[name='email']").val(),
            message: $("textarea[name='message']").val()
            };
            $.ajax({
                type: "POST",
                url: "send_form_email.php",
                data: data,
                success: function(){
                    $('.success').fadeIn(1000);
                }
            });


    });




    });