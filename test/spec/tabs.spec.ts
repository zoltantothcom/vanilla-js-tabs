const fixturePath: string = "base/test/spec/fixtures";
const tabsFixture: string = "tabs.fixture.html";

interface Tabs {
  openTab: (n: number) => void;
  update: (n: number) => void;
  destroy: () => void;
}

describe("TABS", function () {
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = fixturePath;
    loadFixtures(tabsFixture);

    const tabsInstance: Tabs = new Tabs({
      elem: "tabs",
      open: -123,
    });

    this.tabs = tabsInstance;
  });

  afterEach(function () {
    this.tabs.destroy();
  });

  describe("original tabs", function () {
    it("markup should be present", function () {
      expect($("#tabs")).toBeDefined();
    });

    it("should have more than 0 tabs", function () {
      expect($(".js-tabs__title").length).toBeGreaterThan(0);
      expect($(".js-tabs__content").length).toBeGreaterThan(0);
    });

    it("should have the same number of titles and content blocks", function () {
      const titles: number = $(".js-tabs__title").length;
      const contents: number = $(".js-tabs__content").length;

      expect(titles).toBe(contents);
    });

    it("should default to 1st tab when open property is invalid", function () {
      expect($(".js-tabs__title")[0]).toHaveClass("js-tabs__title-active");
    });
  });

  describe("methods", function () {
    it("should have .openTab() method", function () {
      expect(typeof this.tabs.openTab).toBe("function");
    });

    it("should have .update() method", function () {
      expect(typeof this.tabs.update).toBe("function");
    });

    it("should have .destroy() method", function () {
      expect(typeof this.tabs.destroy).toBe("function");
    });
  });

  describe("method calls", function () {
    beforeEach(function () {
      jasmine.getFixtures().fixturesPath = fixturePath;
      loadFixtures(tabsFixture);

      const tabsInstance: Tabs = new Tabs({
        elem: "tabs",
      });

      this.tabs = tabsInstance;
    });

    it("should default to 1st tab when .openTab() argument is invalid", function () {
      this.tabs.openTab(-123);
      expect($(".js-tabs__title")[0]).toHaveClass("js-tabs__title-active");
    });

    it(".openTab(2) should open the 3rd tab", function () {
      expect($(".js-tabs__title")[2]).not.toHaveClass("js-tabs__title-active");
      this.tabs.openTab(2);
      expect($(".js-tabs__title")[2]).toHaveClass("js-tabs__title-active");
    });

    it(".update(2) should reset the tabs with 3rd tab open", function () {
      expect($(".js-tabs__title")[0]).toHaveClass("js-tabs__title-active");
      expect($(".js-tabs__title")[2]).not.toHaveClass("js-tabs__title-active");
      this.tabs.update(2);
      expect($(".js-tabs__title")[2]).toHaveClass("js-tabs__title-active");
    });

    it("should not react to clicks after destroy()", function () {
      expect($(".js-tabs__title")[0]).toHaveClass("js-tabs__title-active");

      this.tabs.destroy();

      const spyEvent = spyOnEvent(".js-tabs__title", "click");
      $(".js-tabs__title")[1].click();

      expect("click").toHaveBeenTriggeredOn(".js-tabs__title");
      expect(spyEvent).toHaveBeenTriggered();

      expect($(".js-tabs__title")[1]).not.toHaveClass("js-tabs__title-active");
    });
  });

  describe("behavior", function () {
    it("should open the 2nd tab on title click", function () {
      expect($(".js-tabs__title")[1]).not.toHaveClass("js-tabs__title-active");

      const spyEvent = spyOnEvent(".js-tabs__title", "click");
      $(".js-tabs__title")[1].click();

      expect("click").toHaveBeenTriggeredOn(".js-tabs__title");
      expect(spyEvent).toHaveBeenTriggered();

      expect($(".js-tabs__title")[1]).toHaveClass("js-tabs__title-active");
    });

    it("should ignore any clicks in the content blocks", function () {
      this.tabs.openTab(2);
      expect($(".js-tabs__title")[2]).toHaveClass("js-tabs__title-active");

      const spyEvent = spyOnEvent(".js-tabs__content", "click");
      $(".js-tabs__content")[2].click();

      expect("click").toHaveBeenTriggeredOn(".js-tabs__content");
      expect(spyEvent).toHaveBeenTriggered();

      expect($(".js-tabs__title")[2]).toHaveClass("js-tabs__title-active");
    });
  });
});
