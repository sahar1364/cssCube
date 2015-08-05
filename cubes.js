var Rotate = (function() {
   'use strict';
    var mouseDown = false;
    var start_x, start_y, end_x, end_y;
    var div;
    
    return {    
        mouseDownEvent: function(e) {
            mouseDown = true;  
            start_x = e.clientX;
            start_y = e.clientY;
        },
        
        mouseMoveEvent: function(e, div) {
            if (mouseDown) {
                end_x = e.clientX;
                end_y = e.clientY; 
                var delta_y = end_y - start_y;
                var delta_x = end_x - start_x;
                if (Math.abs(delta_y) >= 1 || Math.abs(delta_x) >= 1) {
                    var angleInDegrees = Math.atan2(delta_y, delta_x)*180/Math.PI; 
                    div.style.transform = "rotate("+angleInDegrees+"deg)";
                }
            }

        },
        
        rotateY: function(div, angleInDegrees) {           
            div.style.transform = "rotateY("+angleInDegrees+"deg)";    
        },
        
        rotateZ: function(div, angleInDegrees) {           
            div.style.transform = "rotateZ("+angleInDegrees+"deg)";    
        },
        
        rotateX: function(div, angleInDegrees) {           
            div.style.transform = "rotateX("+angleInDegrees+"deg)";    
        },
        
        rotateLoop: function(div) {
            for (var i=1; i < 361; i++) {
                setTimeout(function() { 
                    div.style.transform = "rotateY("+arguments[0]+"deg)";
                    div.style.transform = "rotateX("+arguments[0]+"deg)";
                 }, i*200, i); 
            }
        },
        
        mouseUpEvent: function(e) {
            mouseDown = false;
            end_x = e.clientX;
            end_y = e.clientY;
        }
    }
    
}());