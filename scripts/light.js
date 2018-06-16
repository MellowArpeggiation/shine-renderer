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

    shine.Light = Light;

    Light.prototype = {

        init: function () {
            
        },

        render: function () {

        },

    };



    var pointDefaults = $.extend({}, defaults, {
        dropoffCurve: 1,    // The dropoff rate of the light intensity
        radius: 20,         // The extinction radius of the light source
    });

    function PointLight(options) {
        this.opts = $.extend({}, pointDefaults, options || {});

        this.init();
    }

    PointLight.prototype = Object.create(Light.prototype);

    $.extend(PointLight.prototype, {



    });



    var spotDefaults = $.extend({}, defaults, {
        dropoffCurve: 1,    // The dropoff rate of the light intensity
        distance: 20,       // The distance at which all light from this source is extinct
        direction: 0,       // Angle in degrees
    });

    function SpotLight(options) {
        this.opts = $.extend({}, pointDefaults, options || {});

        this.init();
    }

    SpotLight.prototype = Object.create(Light.prototype);

    $.extend(SpotLight.prototype, {



    });

})(window, window.shine);