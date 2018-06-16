// Light object, Renderer uses this to determine lighting position for colouring sprites

(function (window, shine) {

    var defaults = {
        position: {
            x: 0,
            y: 0,
        },
        radius: 50, // The extinction radius of the light source
    };

    function Light(options) {
        this.opts = $.extend({}, defaults, options || {});

        this.init();
    }

    shine.Light = Light;

    Light.prototype = {

        init: function () {
            this.position = this.opts.position;
            this.radius = this.opts.radius;
            this.$element = $('<div></div>');
        },

        render: function () {
            this.$element.css({
                transform: 'translate(' + (this.position.x - this.radius) + 'px, ' + (this.position.y - this.radius) + 'px)',
            })
        },

        addTo: function ($root) {
            this.$element.appendTo($root);
        }

    };



    var pointDefaults = $.extend({}, defaults, {
        dropoffCurve: 1,    // The dropoff rate of the light intensity
    });

    function PointLight(options) {
        this.opts = $.extend({}, pointDefaults, options || {});

        this.init();
    }

    shine.PointLight = PointLight;

    PointLight.prototype = Object.create(Light.prototype);

    $.extend(PointLight.prototype, {

        init: function () {
            // Call super
            Light.prototype.init.call(this);

            this.$element.css({
                width: this.opts.radius * 2,
                height: this.opts.radius * 2,
                background: 'radial-gradient(closest-side, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
                position: 'absolute',
                zIndex: 10,
            });
        },

    });



    var spotDefaults = $.extend({}, defaults, {
        dropoffCurve: 1,    // The dropoff rate of the light intensity
        direction: 0,       // Angle in degrees
    });

    function SpotLight(options) {
        this.opts = $.extend({}, pointDefaults, options || {});

        this.init();
    }

    shine.SpotLight = SpotLight;

    SpotLight.prototype = Object.create(Light.prototype);

    $.extend(SpotLight.prototype, {

        init: function () {
            // Call super
            Light.prototype.init.call(this);
        },

    });

})(window, window.shine);