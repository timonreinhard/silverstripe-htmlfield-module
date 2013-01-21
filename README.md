# HtmlField Module

Provides a [CodeMirror](http://codemirror.net/)-powered field for pleasant editing of raw HTML code.

## Requirements

 * SilverStripe 3.0

## Project Links

*  [GitHub Project Page](https://github.com/timonr/htmlfield)
*  [Issue Tracker](https://github.com/timonr/htmlfield/issues)

## Installation Instructions

*  Put the module into the root folder of your SilverStripe installation.
*  Run /dev/build?flush=all
*  Run /admin/?flush=all

## Usage Overview

Example for replacing SilverStripe's built-in TinyMCE editor with CodeMirror:

<pre>
&lt;?php
class HtmlPage extends Page {

    function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->removeFieldFromTab('Root.Main', 'Content');
        $fields->addFieldToTab('Root.Main', $html_editor = HtmlField::create('Content', 'HTML Content'));
        $html_editor->setRows(20);
        
        return $fields;
    }

}
</pre>

## Known Limitations

*  This field can not be used in frontend forms.
