class Tabs {
    constructor(options) {
        this.titleClass = "js-tabs__title";
        this.activeClass = "js-tabs__title-active";
        this.contentClass = "js-tabs__content";
        const elem = document.getElementById(options.elem);
        if (elem == null) {
            return;
        }
        this.elem = elem;
        this.open = options.open || 0;
        this.tabsNum = this.elem.querySelectorAll("." + this.titleClass).length;
        this.render();
    }
    render(n) {
        this.elem.addEventListener("click", this.onClick);
        const init = n == null ? this.checkTab(this.open) : this.checkTab(n);
        for (let i = 0; i < this.tabsNum; i++) {
            this.elem
                .querySelectorAll("." + this.titleClass)[i].setAttribute("data-index", i.toString());
            if (i === init)
                this.openTab(i);
        }
    }
    onClick(e) {
        if (!(e.target instanceof HTMLElement))
            return;
        if (e.target.className.indexOf(this.titleClass) === -1)
            return;
        e.preventDefault();
        const target = e.target.getAttribute("data-index");
        if (target == null) {
            return;
        }
        this.openTab(parseInt(target));
    }
    reset() {
        [].forEach.call(this.elem.querySelectorAll("." + this.contentClass), (item) => {
            item.style.display = "none";
        });
        [].forEach.call(this.elem.querySelectorAll("." + this.titleClass), (item) => {
            item.className = this.removeClass(item.className, this.activeClass);
        });
    }
    removeClass(str, cls) {
        const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`, "g");
        return str.replace(reg, "");
    }
    checkTab(n) {
        return n < 0 || isNaN(n) || n >= this.tabsNum ? 0 : n;
    }
    openTab(n) {
        this.reset();
        const i = this.checkTab(n);
        this.elem.querySelectorAll("." + this.titleClass)[i].className += " " + this.activeClass;
        this.elem.querySelectorAll("." + this.contentClass)[i].style.display = "";
    }
    update(n) {
        this.destroy();
        this.reset();
        this.render(n);
    }
    destroy() {
        this.elem.removeEventListener("click", this.onClick);
    }
}
