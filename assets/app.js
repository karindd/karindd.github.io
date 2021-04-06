function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  
  $(document).on("scroll", function(){
    var pixels = $(document).scrollTop();
    var pageHeight = $(document).height() - $(window).height();
    var progress = 100 * pixels / pageHeight;
    
    $("div.progress").css("width", progress + "%");
  })
  
  // ---- Notes ---- //
  
  // pixels = amount of px from top of page
  // pageHeight = whole page height minus viewable page height
  // progress = pixels from top / page-height * 100