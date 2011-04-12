<?php
/**
 * A CodeMirror-powered field for pleasant editing of raw HTML code.
 * Editor fields are created from <textarea> tags, which are then converted with JavaScript.
 *
 * @author Timon Reinhard
 * @package HtmlField
 *
 */
class HtmlField extends TextareaField {

    function __construct($name, $title = null, $rows = 5, $cols = 20, $value = '', $form = null) {
        parent::__construct($name, $title = null, $rows, $cols, $value = '', $form = null);
        $this->addExtraClass('htmlfield');
    }

    function FieldHolder() {
        Requirements::backend()->css('htmlfield/thirdparty/codemirror/css/codemirror.css');
        Requirements::backend()->javascript('htmlfield/thirdparty/codemirror/js/codemirror.js');
        Requirements::backend()->css('htmlfield/css/HtmlField.css');
        Requirements::backend()->javascriptTemplate('htmlfield/javascript/HtmlField.js', array(
            'Id' => $this->id(),
            'Height' => 'height: ' . ($this->rows * 16) . 'px',
            'Path' => Director::absoluteBaseURL() . 'htmlfield/thirdparty/codemirror'
        ));
        return parent::FieldHolder();
    }

}
