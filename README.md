Vanilla Javascript Tabs
-------

Vanilla Javascript tabs - tiny and simple.

#### Demo

[http://zoltantothcom.github.io/vanilla-js-tabs](http://zoltantothcom.github.io/vanilla-js-tabs)

#### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
elem | string |  | The _id_ of the select container in the HTML markup.
openTab | number | 0 | Opens this tab initially.
titleClass | string | js-tabs__title | CSS class of the tab titles. 
activeClass | string | js-tabs__title-active | CSS class of the currently active tab title. 
contentClass | string | js-tabs__content | CSS class of the tab content containers.

#### Methods

Methods are called on the select:

```javascript
// Initialize the tabs
var tabs = new Tabs({
  elem: "tabs"
});

// Open any particular tab
tabs.open(3);
```

Method | Type | Description
------ | ---- | -----------
open(n) | number | Opens a tab by index

#### Example

Initialize:

```javascript
var tabs = new Tabs({
    elem: "tabs",
    openTab: 1
});
```

#### Browser support and dependencies

Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE | yes* | -

\* _IE9 and up_

#### License

Free. [Unlicense](http://unlicense.org).
