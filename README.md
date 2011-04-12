# HtmlField Module

Provides a [CodeMirror](http://codemirror.net/)-powered field for pleasant editing of raw HTML code.

## Requirements

 * Silverstripe 2.4

## Project Links

*  [GitHub Project Page](https://github.com/timonr/htmlfield)
*  [Issue Tracker](https://github.com/timonr/htmlfield/issues)

## Installation Instructions

*  Put the module into the root folder of your Silverstripe installation.
*  Run /dev/build?flush=all

## Usage Overview

Example for replacing Silverstripe's built-in TinyMCE with CodeMirror:

<pre>
&lt;?php
class HtmlPage extends Page {

    function getCMSFields() {
        $fields = parent::getCMSFields();
        $fields->removeFieldFromTab('Root.Content.Main', 'Content');
        $fields->addFieldToTab('Root.Content.Main', new HtmlField('Content', "HTML Content"));
        return $fields;
    }

}
</pre>

## Known Limitations

*  This field can not be used in frontend forms.