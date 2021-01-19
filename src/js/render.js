const RenderTemplateData = (selector, template, context) => {
    const element = document.getElementById(selector);
    element.innerHTML = template(context);
}

export default RenderTemplateData;