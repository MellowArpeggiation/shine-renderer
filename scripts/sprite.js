// Sprite, has a single render texture and some masks

(function (window, shine) {

    var defaults = {
        position: {
            x: 0,
            y: 0,
        },
        url: '', // The image URL
        mask: '', // THe mask texture for the lighting engine
    };

    function Sprite(options) {
        this.opts = $.extend({}, defaults, options || {});

        this.init();
    }

    Sprite.prototype = {

        init: function () {
            this.position = this.opts.position;

            this.$element = $('<div class="sprite"></div>');
            this.$base = $('<img src="' + this.opts.url + '">').appendTo(this.$container);
            this.$mask = $('<img src="' + this.opts.mask + '">').appendTo(this.$container);
        },

        render: function () {
            this.$element.css({
                transform: 'translate(' + this.position.x + 'px, ' + this.position.y + 'px)',
            });
        },

    };

    shine.Sprite = Sprite;

})(window, window.shine);