var Rotate = (function() {
   'use strict';
    var mouseDown = false;
    var start_x, start_y, end_x, end_y;
    
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
        
        mouseUpEvent: function(e) {
            mouseDown = false;
            end_x = e.clientX;
            end_y = e.clientY;
        }
    }
    
}());