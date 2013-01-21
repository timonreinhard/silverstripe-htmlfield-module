(function($) {
    $.entwine('ss', function($){
        $('textarea.htmlfield').entwine({
            onmatch: function() {
                if(typeof CodeMirror != 'undefined'){
                    var el = this[0];
                    el.editor = CodeMirror.fromTextArea(el.id, {
                        height: '$Height',
                        width: '$Width',
                        parserfile: 'parsexml.js',
                        stylesheet: '$Path/css/xmlcolors.css',
                        path: '$Path/js/',
                        continuousScanning: 500,
                        lineNumbers: false,
                        onChange: function() {
                            el.dirty = true;
                        }
                    });
                    el.isChanged = function() {
                        return (typeof el.dirty != 'undefined') ? el.dirty : false;
                    }
                }
                this._super();
            },
            onunmatch: function() {
                this._super();
            }
        });
        $('#Form_EditForm').entwine({
            onmatch: function() {
                this.on('beforesubmitform', this.beforeSave);
                this._super();
            },
            onunmatch: function() {
                this._super();
            },
            beforeSave: function() {
                $('#Form_ItemEditForm textarea.htmlfield').each(function(index, el){
                    el.editor.toTextArea();
                });
            }
        });
    });
})(jQuery);