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

        /**
         * @param {Function} callback You can attach a game loop to the renderer callback to have a synchronous model
         */
        run: function (callback) {
            if (this.loopHandle) {
                console.warn('Already running loop');
                return;
            }

            this.callback = callback || (() => {});

            this._loop();
        },

        stop: function () {
            if (this.loopHandle) {
                cancelAnimationFrame(this.loopHandle);
            }
        },

        _loop: function () {
            this.loopHandle = requestAnimationFrame(() => {
                this.callback();
                this.render();
                this._loop();
            });
        },

        render: function () {
            for (var i = 0; i < this.sprites.length; i++) {
                this.sprites[i].render();
            }
        },

    };

})(window);
