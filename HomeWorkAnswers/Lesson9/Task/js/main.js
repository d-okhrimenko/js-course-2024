let scriptList = [
    // "../../../node_modules/mustache/mustache.min.js",
    "js/mustache.min.js",
    "js/model.js",
    "js/view.js",
    "js/controller.js",
];
scriptList.forEach(link => {
    let script = document.createElement('script'); //генегування <script> елементу
    script.src = link;
    script.async = false;
    document.body.appendChild(script);
});