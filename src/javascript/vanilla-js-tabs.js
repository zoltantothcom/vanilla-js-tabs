/**
 * @fileOverview
 * @author Zoltan Toth
 * @version 1.0.0
 */

/**
 * @description
 * Vanilla Javascript Tabs
 *
 * @class
 * @param {string} options.elem - HTML id of the tabs container
 * @param {number} [options.open = 0] - Render the tabs with this item open
 */
var Tabs = function(options) {
    var elem         = document.getElementById(options.elem),
        open         = options.open || 0,
        titleClass   = options.titleClass || 'js-tabs__title',
        activeClass  = options.activeClass || 'js-tabs__title-active',
        contentClass = options.contentClass || 'js-tabs__content',
        tabsNum      = elem.querySelectorAll('.' + titleClass).length;
        
    render();
    
    /**
     * Initial rendering of the tabs.
     */
    function render() {
        elem.addEventListener('click', onClick);
        
        var init = checkTab(open);
  
        for (var i = 0; i < tabsNum; i++) {
            elem.querySelectorAll('.' + titleClass)[i].setAttribute('data-index', i);
            if (i === init) openTab(i);
        }
    }

    /**
     * Handle clicks on the tabs.
     * 
     * @param {object} e - Element the click occured on.
     */
    function onClick(e) {
        if (e.target.className.indexOf(titleClass) === -1) return;
        e.preventDefault();

        openTab(e.target.getAttribute('data-index'));
    }
    
    /**
     * Hide all tabs and re-set tab titles.
     */
    function reset() {
        [].forEach.call(elem.querySelectorAll('.' + contentClass), function(item) {
            item.style.display = 'none';
        });
        
        [].forEach.call(elem.querySelectorAll('.' + titleClass), function(item) {
            item.className = removeClass(item.className, activeClass);
        });
    }
    
    /**
     * Utility function to remove the open class from tab titles.
     *
     * @param {string} str - Current class.
     * @param {string} cls - The class to remove.
     */
    function removeClass(str, cls) {
        var reg = new RegExp('(\ )' + cls + '(\)', 'g');
        return str.replace(reg, '');
    }

    /**
     * Utility function to remove the open class from tab titles.
     *
     * @param n - Tab to open.
     */
    function checkTab(n) {
        return (n < 0 || isNaN(n) || n > tabsNum) ? 0 : n;
    }
    
    /**
     * Opens a tab by index.
     * 
     * @param {number} n - Index of tab to open. Starts at 0.
     * 
     * @public
     */
    function openTab(n) {
        reset();

        var i = checkTab(n);

        elem.querySelectorAll('.' + titleClass)[i].className += ' ' + activeClass;
        elem.querySelectorAll('.' + contentClass)[i].style.display = '';
    }

    return {
        open: openTab
    };
};
