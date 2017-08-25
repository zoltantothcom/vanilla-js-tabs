# Vanilla JavaScript Tabs

Vanilla JavaScript Tabs - simple and awesome.

*— Inspired by the blazing fast, lightweight, cross-platform and crazy popular [Vanilla JS](http://vanilla-js.com/)  framework.*


## Demo

[Vanilla JavaScript Tabs](http://zoltantothcom.github.io/vanilla-js-tabs)


## Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
elem | string |  | HTML _id_ of the tab container in the HTML markup.
open | number | 0 | Opens this tab initially.


## Methods

Method | Type | Description
------ | ---- | -----------
open(n) | number | Opens a tab by index
update(n) | number | Updates the tabs with _n_-th tab open<br />_(useful when dynamically adding tabs)_
destroy() | | Removes the listeners


## Usage example

```javascript
var tabs = new Tabs({
    elem: "tabs",
    open: 1
});
```

```javascript
// Open any other tab
tabs.open(3);
```


## Run the tests

```
npm test
```


## Browser support and dependencies

Browser | Support | Dependencies
------ | -------- | -----------
Chrome | yes | -
Firefox | yes | -
Safari | yes | -
Opera | yes | -
IE9 and up | yes | -


## License

Free to use and modify. [Unlicense](http://unlicense.org).
