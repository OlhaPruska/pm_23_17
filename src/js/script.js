
$(function () {
    var user;
   var xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/src/js/data.json', true);//js/   
xhttp.send();
xhttp.onload = function(){
    if (this.status == 200) {
        user = JSON.parse(this.responseText);
        setTimeout(function(){
    var alert = $('.alert');
            alert.css('visibility', 'visible');
       console.log(user.name);
       $('.alert-name').append(user.name);
       $('.alert-mess').append(user.mess);
       $('.alert-dtime').append(user.dtime);
  },5000);
   }
    }
   
    var addButton = $(".new-button");
    var allProjects = $(".projects-all");
    //var deleteButton=$(".delete-project");
    var newProject = '<div class="project-row project-row-new"> <div class="percent percent-new">0%</div><div class="caption caption-new"><span>New project</span> </div><div class="delete-project"><button class="delete-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></button></div></div>'
    addButton.click(function () {
        allProjects.prepend(newProject);
    });
   

    var slide_b = $(".slide-button");
    var show_u = $(".show-users");
    var down_b = $(".button-down");
    var proj_r_h = $(".project-row-hidden");
    var path_up = "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z";
    var path_down = "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z";
    var up = "bi-chevron-up";
    var down = "bi-chevron-down";

    slide_b.click(function () {
        proj_r_h.slideToggle("2000", "linear", function () {
            if ($(".slide-chevron").hasClass(up)) {
                $(".slide-chevron").removeClass(up).addClass(down);
                $(".path-chevron").attr("d", path_down);
            }
            else {
                $(".slide-chevron").removeClass(down).addClass(up);
                $(".path-chevron").attr("d", path_up);
            }
        });
        proj_r_h.css("display", "flex");

        //$(".slide-chevron").css("transform", "rotateX(180deg)","2000");
    });

    down_b.click(function () {
        show_u.slideToggle("2000", "linear");
        show_u.css("display", "flex");
        //$("slide-chevron").css("transform", "rotateX(180deg)");
    });

    $(".button-reload").click(function () {
        $(".bi-arrow-counterclockwise").css("transform", "rotate(369deg)");
    });


    $(".icon-fill-1").mouseover(function () {
        $(".icon-fill-1").css("fill", "#ff503f");
        $(".text-icon-1").css("color", "white");
    });

    $(".icon-fill-1").mouseleave(function () {
        $(".icon-fill-1").css("fill", "#595959");
        $(".text-icon-1").css("color", "#595959");
    });
    $(".icon-fill-2").mouseover(function () {
        $(".icon-fill-2").css("fill", "#ff503f");
        $(".text-icon-2").css("color", "white");
    });

    $(".icon-fill-2").mouseleave(function () {
        $(".icon-fill-2").css("fill", "#595959");
        $(".text-icon-2").css("color", "#595959");
    });

    $(".icon-fill-3").mouseover(function () {
        $(".icon-fill-3").css("fill", "#ff503f");
        $(".text-icon-3").css("color", "white");
    });

    $(".icon-fill-3").mouseleave(function () {
        $(".icon-fill-3").css("fill", "#595959");
        $(".text-icon-3").css("color", "#595959");
    });

    $(".icon-fill-4").mouseover(function () {
        $(".icon-fill-4").css("fill", "#ff503f");
        $(".text-icon-4").css("color", "white");
    });

    $(".icon-fill-4").mouseleave(function () {
        $(".icon-fill-4").css("fill", "#595959");
        $(".text-icon-4").css("color", "#595959");
    });

    $(".icon-fill-5").mouseover(function () {
        $(".icon-fill-5").css("fill", "#ff503f");
        $(".text-icon-5").css("color", "white");
    });

    $(".icon-fill-5").mouseleave(function () {
        $(".icon-fill-5").css("fill", "#595959");
        $(".text-icon-5").css("color", "#595959");
    });
});
$(document).mouseup(function(){
    var allProjects = $(".projects-all");
    var deleteButton=$(".delete-project");
    deleteButton.click(function(){
        console.log(deleteButton.parent());
        deleteButton.parent().remove();
    });
});

