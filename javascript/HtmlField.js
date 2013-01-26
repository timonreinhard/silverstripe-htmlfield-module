(function($) {
    $.entwine('ss', function($) {
        $('textarea.htmlfield').entwine({
            onmatch: function() {
                if (typeof CodeMirror == 'undefined') return;
                var self = this;
                var el = self[0];
                el.editor = CodeMirror.fromTextArea(el.id, {
                    height: '$Height',
                    width: '$Width',
                    parserfile: 'parsexml.js',
                    stylesheet: '$Path/css/xmlcolors.css',
                    path: '$Path/js/',
                    continuousScanning: 500,
                    lineNumbers: false,
                    onChange: function() {
                        self[0].dirty = true;
                    }
                });
                el.isChanged = function() {
                    return (typeof el.dirty != 'undefined') ? el.dirty : false;
                }
                self.closest('form').on('beforesubmitform', function() {
                    el.editor.toTextArea();
                });
                this._super();
            },
            onunmatch: function() {
                this._super();
            }
        });
    });
})(jQuery);