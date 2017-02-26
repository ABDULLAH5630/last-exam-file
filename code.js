$(document).ready(function () {





    //    password form validage

    $("#pass").keyup(function () {
        var pass = $("#pass").val();
        if (pass.length < 6) {
            $("#result").text("your password is week");
            $("#result").addClass("red");

        } else {
            $("#result").removeClass("red");
            $("#result").text("your password is strong");
        }


    });



    //    reset button


    $("#reset").click(function () {
        $("#pass").val("");
        $("#name").val("");

    });



    //    subpage link



    $('#login').click(function () {
        var pass = $("#pass").val();
        var name = $("#name").val();
        if (pass.length == 0 && name.length == 0) {
            alert("please fillup the form");

        } else {
            window.location.href = 'subpage.html';
        }
    });




    // Add isotope 

    $('.main-iso').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    // Isotope click function
    $('.iso-nav ul li').click(function () {
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.main-iso').isotope({
            filter: selector
        });
        return false;
    });






    //textarea section

    $("#txtarea").keyup(function () {

        var count = $("#txtarea").val();
        $("#counter").text(count.length);

    });


    //    datepicker

    $("#datepicker").datepicker();
    $("#changebg").click(function () {
        $(".wrapper").toggleClass("bgaqua bggold");

    });
    
    
    
      //    change background

    $("#datepicker").datepicker();
    $("#changebg").click(function () {
        $(".wrapper").toggleClass("bgaqua");

    });


    //    ui tabs
    $(function () {
        $("#tabs").tabs();
    });


$('.wraper').parallax({imageSrc: 'one.jpg'});
    $('#set-parallax').parallax({imageSrc: 'two.jpg'});





});