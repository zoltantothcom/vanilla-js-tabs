interface TabsOptions {
  elem: string;
  open?: number;
}

class Tabs {
  private elem: HTMLElement;
  private open: number;
  private titleClass: string = "js-tabs__title";
  private activeClass: string = "js-tabs__title-active";
  private contentClass: string = "js-tabs__content";
  private tabsNum: number;

  constructor(options: TabsOptions) {
    const elem = document.getElementById(options.elem);

    if (elem == null) {
      return;
    }

    this.elem = elem;
    this.open = options.open || 0;
    this.tabsNum = this.elem.querySelectorAll("." + this.titleClass).length;
    this.render();
  }

  private render(n?: number): void {
    this.elem.addEventListener("click", this.onClick);

    const init = n == null ? this.checkTab(this.open) : this.checkTab(n);

    for (let i = 0; i < this.tabsNum; i++) {
      this.elem
        .querySelectorAll("." + this.titleClass)
        [i].setAttribute("data-index", i.toString());
      if (i === init) this.openTab(i);
    }
  }

  private onClick(e: MouseEvent): void {
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.className.indexOf(this.titleClass) === -1) return;
    e.preventDefault();

    const target = e.target.getAttribute("data-index");
    if (target == null) {
      return;
    }

    this.openTab(parseInt(target));
  }

  private reset(): void {
    [].forEach.call(
      this.elem.querySelectorAll("." + this.contentClass),
      (item: HTMLElement) => {
        item.style.display = "none";
      }
    );

    [].forEach.call(
      this.elem.querySelectorAll("." + this.titleClass),
      (item: HTMLElement) => {
        item.className = this.removeClass(item.className, this.activeClass);
      }
    );
  }

  private removeClass(str: string, cls: string): string {
    const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`, "g");
    return str.replace(reg, "");
  }

  private checkTab(n: number): number {
    return n < 0 || isNaN(n) || n >= this.tabsNum ? 0 : n;
  }

  public openTab(n: number): void {
    this.reset();

    const i = this.checkTab(n);

    (
      this.elem.querySelectorAll("." + this.titleClass)[i] as HTMLElement
    ).className += " " + this.activeClass;
    (
      this.elem.querySelectorAll("." + this.contentClass)[i] as HTMLElement
    ).style.display = "";
  }

  public update(n: number): void {
    this.destroy();
    this.reset();
    this.render(n);
  }

  public destroy(): void {
    this.elem.removeEventListener("click", this.onClick);
  }
}
