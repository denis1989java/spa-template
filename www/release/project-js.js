function show() {
    document.getElementById("show").style.display = "none";
    document.getElementById("hide").style.display = "block";
    document.getElementById("terms").style.display = "block";
}

function hide() {
    document.getElementById("show").style.display = "block";
    document.getElementById("hide").style.display = "none";
    document.getElementById("terms").style.display = "none";
}

function create() {
    document.getElementById("form-div").style.display = "none";
    document.getElementById("form-div-reg").style.display = "block";
}

function sign() {
    document.getElementById("form-div").style.display = "block";
    document.getElementById("form-div-reg").style.display = "none";
}

$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        }
    };

    var accordion = new Accordion($('#accordion'), false);
});

function more() {
    document.getElementById("p-f").style.display = "block";
    document.getElementById("p-s").style.display = "block";
    document.getElementById("p-t").style.display = "block";
    document.getElementById("p-fo").style.display = "block";
    document.getElementById("p-l").style.display = "block";
    document.getElementById("less").style.display = "block";
    document.getElementById("more").style.display = "none";
}

function less() {
    document.getElementById("p-f").style.display = "none";
    document.getElementById("p-s").style.display = "none";
    document.getElementById("p-t").style.display = "none";
    document.getElementById("p-fo").style.display = "none";
    document.getElementById("p-l").style.display = "none";
    document.getElementById("less").style.display = "none";
    document.getElementById("more").style.display = "block";
}

function buyUsed() {
    if (document.getElementById("buyUsed").checked) {
        document.getElementById("addUsed").style.display = "block";
        document.getElementById("addNew").style.display = "none";
        document.getElementById("buyNew").checked = false;
        document.getElementById("usedPrice").style.backgroundColor="#f3efea";
        document.getElementById("newPrice").style.backgroundColor="white";

    }
}

function buyNew() {
    if (document.getElementById("buyUsed").checked) {
        document.getElementById("addUsed").style.display = "none";
        document.getElementById("addNew").style.display = "block";
        document.getElementById("buyUsed").checked = false;
        document.getElementById("newPrice").style.backgroundColor="#f3efea";
        document.getElementById("usedPrice").style.backgroundColor="white";
    }
}

function moreDescr() {
    document.getElementById("desc1").style.display = "none";
    document.getElementById("desc2").style.display = "inline-block";
    document.getElementById("moreDescr").style.display = "none";
    document.getElementById("lessDescr").style.display = "block";
}

function lessDescr() {
    document.getElementById("desc1").style.display = "inline-block";
    document.getElementById("desc2").style.display = "none";
    document.getElementById("moreDescr").style.display = "block";
    document.getElementById("lessDescr").style.display = "none";
}