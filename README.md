# Vanilla JavaScript Tabs

[![Build Status](https://travis-ci.org/zoltantothcom/vanilla-js-tabs.svg?branch=master)](https://travis-ci.org/zoltantothcom/vanilla-js-tabs) [![Coverage Status](https://coveralls.io/repos/github/zoltantothcom/vanilla-js-tabs/badge.svg?branch=master)](https://coveralls.io/github/zoltantothcom/vanilla-js-tabs?branch=master) [![Code Climate](https://codeclimate.com/github/zoltantothcom/vanilla-js-tabs/badges/gpa.svg)](https://codeclimate.com/github/zoltantothcom/vanilla-js-tabs) ![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)

Vanilla JavaScript Tabs - simple and awesome.

*— Inspired by the blazing fast, lightweight, cross-platform and crazy popular [Vanilla JS](http://vanilla-js.com/)  framework.*


## Demo

[TABS](http://zoltantothcom.github.io/vanilla-js-tabs)


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


## Running the tests

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

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

See [Unlicense](http://unlicense.org) for full details.


## Related

* [Vanilla JavaScript **Carousel**](https://github.com/zoltantothcom/vanilla-js-carousel)
* [Vanilla JavaScript **Dropdown**](https://github.com/zoltantothcom/vanilla-js-dropdown)
* [Vanilla JavaScript **Tooltip**](https://github.com/zoltantothcom/vanilla-js-tooltip)
* [Vanilla JavaScript **Accordion**](https://github.com/zoltantothcom/vanilla-js-accordion)

