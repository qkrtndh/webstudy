
var body = {
    setBackgroundColor: function (color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css("backgroundColor",color);
    },
    setColor: function (color) {
        //document.querySelector('body').style.color = color;
        $('body').css("color",color);
    }
}
var links = {
    setColor: function (color) {
        // var array = document.querySelectorAll('a');
        // var i = 0;
        // for (i = 0; i < array.length; i++) {
        //     array[i].style.color = color;
        // }
        $('a').css("color",color);
    }
}
function changemode(self) {
    var target = document.querySelector('body');
    if (self.value == 'switch-N') {
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'switch-D';
        links.setColor('powderblue');
    }
    else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'switch-N';
        links.setColor('blue');
    }
}