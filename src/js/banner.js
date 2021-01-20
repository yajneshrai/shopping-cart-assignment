import HttpRequest from './http';
import RenderTemplateData from './render';
import HomePageTemplate from '../view/partials/_home.hbs';

class Banner {

    request;
    banners = [];

    constructor() {
        this.request = new HttpRequest('GET', 'banners', null);
    }

    loadBanners() {
        this.request.invoke()
        .then(data => {
            this.banners = data;
            RenderTemplateData('banner__container', HomePageTemplate, this.banners);
        })
        .catch( err => console.log(err) );
    }
}

export default Banner;