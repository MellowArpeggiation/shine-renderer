// Light object, Renderer uses this to determine lighting position for colouring sprites

(function (window, shine) {

    var defaults = {
        position: {
            x: 0,
            y: 0,
        },
    };

    function Light(options) {
        this.opts = $.extend({}, defaults, options || {});

        this.init();
    }

    Light.prototype = {

        init: function () {
            
        },

    };

    shine.Light = Light;

})(window, window.shine);