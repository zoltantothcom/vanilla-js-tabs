describe('TABS', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = fixturePath;
        loadFixtures(tabsFixture);

        this.tabs = new Tabs({
            elem: 'tabs',
            openTab: -123
        });
    });

    describe('original tabs', function() {
        it('markup should be present', function() {
            expect( $('#tabs') ).toBeDefined();
        });

        it('should have more than 0 tabs', function() {
            expect( $('.js-tabs__title').length ).toBeGreaterThan(0);
            expect( $('.js-tabs__content').length ).toBeGreaterThan(0);
        });

        it('should have the same number of titles and content blocks', function() {
            var titles = $('.js-tabs__title').length,
                contents = $('.js-tabs__content').length;

            expect(titles).toBe(contents);
        });

        it('should default to 1st tab when open property is invalid', function() {
            expect( $('.js-tabs__title')[0] ).toHaveClass('js-tabs__title-active');
        });
    });

    describe('methods', function() {
        it('should default to 1st tab when .open() argument is invalid', function() {
            this.tabs.open(-123);
            expect( $('.js-tabs__title')[0] ).toHaveClass('js-tabs__title-active');
        });

        it('.open(2) should open the 3rd tab', function() {
            expect( $('.js-tabs__title')[2] ).not.toHaveClass('js-tabs__title-active');
            this.tabs.open(2);
            expect( $('.js-tabs__title')[2] ).toHaveClass('js-tabs__title-active');
        });
    });

    describe('behavior', function() {
        it('should open the 2nd tab on title click', function() {
            expect( $('.js-tabs__title')[1] ).not.toHaveClass('js-tabs__title-active');

            var spyEvent = spyOnEvent('.js-tabs__title', 'click');
            $('.js-tabs__title')[1].click();

            expect('click').toHaveBeenTriggeredOn('.js-tabs__title');
            expect(spyEvent).toHaveBeenTriggered();

            expect(  $('.js-tabs__title')[1] ).toHaveClass('js-tabs__title-active');
        });

        it('should ignore any clicks in the content blocks', function() {
            this.tabs.open(2);
            expect( $('.js-tabs__title')[2] ).toHaveClass('js-tabs__title-active');
            
            var spyEvent = spyOnEvent('.js-tabs__content', 'click');
            $('.js-tabs__content')[2].click();

            expect('click').toHaveBeenTriggeredOn('.js-tabs__content');
            expect(spyEvent).toHaveBeenTriggered();

            expect(  $('.js-tabs__title')[2] ).toHaveClass('js-tabs__title-active');
        });
    });
});