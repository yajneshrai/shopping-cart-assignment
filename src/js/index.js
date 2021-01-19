import Banner from './banner';

class App {

    banner;

    constructor() {
        this.banner = new Banner();
        this.banner.loadBanners();
    }
}

export default new App();

