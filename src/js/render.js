const RenderTemplateData = (selector, template, context) => {
    const element = document.getElementById(selector);
    //template = Handlebars.compile(element.innerHTML);
    element.innerHTML = template(context);
}

export default RenderTemplateData;