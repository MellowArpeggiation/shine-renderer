// FAncy fucken renderer thing

(function (window) {

    var defaults = {
        $canvas: $(),
    };

    var shine = window.shine = {};

    function Renderer(options) {
        this.opts = $.extend({}, defaults, options || {});

        this.init();
    }

    shine.Renderer = Renderer;

    Renderer.prototype = {

        init: function () {
            this.lights = [];
            this.sprites = [];

            this.$canvas = this.opts.$canvas;

            // this.opts.$canvas.html('test');
        },

        addLight: function (light) {
            this.lights.push(light);
        },

        clearLights: function () {
            this.lights = [];
        },

        addSprite: function (sprite) {
            this.sprites.push(sprite);
            this.$canvas.append(sprite.$element);
        },

        clearSprites: function () {
            this.sprites = [];
        },

        run: function () {
            if (this.loopHandle) {
                console.warn('Already running loop');
                return;
            }

            this.loopHandle = requestAnimationFrame(() => {
                this._loop();

                this.loopHandle = undefined;

                this.run();
            });
        },

        stop: function () {
            if (this.loopHandle) {
                cancelAnimationFrame(this.loopHandle);
            }
        },

        _loop: function () {
            // this.opts.$canvas.append(this.opts.$canvas.html() + ' bee');
            this.render();
        },

        render: function () {
            for (var i = 0; i < this.sprites.length; i++) {
                this.sprites[i].render();
            }
        },

    };

})(window);
