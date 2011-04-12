Behaviour.register({
    'textarea.htmlfield': {
        initialize: function() {
            if(typeof CodeMirror != 'undefined'){
                var el = this;
                el.editor = CodeMirror.fromTextArea(el.id, {
                    height: '$Height',
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
        }
    },
    '#Form_EditForm': {
        initialize: function() {
            this.observeMethod('BeforeSave', this.beforeSave);
        },
        beforeSave: function() {
            $$('#Form_EditForm textarea.htmlfield').each(function(el){
                el.editor.toTextArea();
            });
        }
    }
});