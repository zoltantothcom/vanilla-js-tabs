/**
* @fileOverview
* @author Zoltan Toth
* @version 0.1
*/

/**
* @description
* Vanilla Javascript Tabs
*
* @class
* @param {string} options.elem - The HTML id of the tabs container.
* @param {number} [options.openTab = 0] - Render the tabs with this item open.
* @param {string} [options.titleClass = "b-accordion__title"] - The HTML class of the tab titles.
* @param {string} [options.activeClass = "b-accordion__title_active"] - The HTML class of the currently active tab title.
* @param {string} [options.contentClass = "b-accordion__content"] - The HTML class of the tab content.
*/
Tabs = function(options) {
    var elem         = document.getElementById(options.elem),
        openTab      = options.open || 0,
        titleClass   = "b-tab__title",
        activeClass  = "b-tab__title_active",
        contentClass = "b-tab__content",
        tabsNum      = elem.querySelectorAll("." + titleClass).length;
        
    render();
    
    /**
     * Initial rendering of the tabs.
     */
    function render() {
        elem.addEventListener("click", onClick);
        
        var init = (openTab < 0 || isNaN(openTab) || openTab > tabsNum) ? 0 : openTab;
  
        for (var i = 0; i < tabsNum; i++) {
            elem.querySelectorAll("." + titleClass)[i].setAttribute("data-index", i);
            if (i === init) open(i);
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

        open(e.target.getAttribute("data-index"));
    }
    
    /**
     * Hide all tabs and re-set tab titles.
     */
    function reset() {
        [].forEach.call(elem.querySelectorAll("." + contentClass), function(item) {
            item.style.display = "none";
        });
        
        [].forEach.call(elem.querySelectorAll("." + titleClass), function(item) {
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
     * Opens a tab by index.
     * 
     * @param {number} n - Index of tab to open. Starts at 0.
     * 
     * @public
     */
    function open(n) {
        reset();

        elem.querySelectorAll("." + titleClass)[n].className += " " + activeClass;
        elem.querySelectorAll("." + contentClass)[n].style.display = "";
    }

    this.open = open;
}