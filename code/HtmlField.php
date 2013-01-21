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

    function __construct($name, $title = null, $value = null) {
        parent::__construct($name, $title, $value);
        $this->addExtraClass('htmlfield');
    }

    public function FieldHolder($properties = array()) {
        $obj = ($properties) ? $this->customise($properties) : $this;

        Requirements::css('htmlfield/thirdparty/codemirror/css/codemirror.css');
        Requirements::javascript('htmlfield/thirdparty/codemirror/js/codemirror.js');
        Requirements::css('htmlfield/css/HtmlField.css');
        Requirements::javascriptTemplate('htmlfield/javascript/HtmlField.js', array(
            'Id' => $this->id(),
            'Height' => ($this->rows * 16) . 'px',
            'Path' => Director::absoluteBaseURL() . 'htmlfield/thirdparty/codemirror'
        ));

        return $obj->renderWith($this->getFieldHolderTemplates());
    }

}