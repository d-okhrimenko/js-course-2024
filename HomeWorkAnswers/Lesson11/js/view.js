const weatherOutlook = {
    renderWithTemplate(weatherDataCurrent, element, template) {
        if (!weatherDataCurrent.conditionIcon) {
            weatherDataCurrent.conditionIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC";
        } else {
            weatherDataCurrent.conditionIcon = "https:"+weatherDataCurrent.conditionIcon;
        }
        element.innerHTML  = Mustache.render(template, weatherDataCurrent);
    },
}

const cityInformation = {
    renderWithTemplate(weatherDataLocation, element, template) {
        element.innerHTML  =  Mustache.render(template, weatherDataLocation);
    },
}

function renderResult(message,element) {
          element.innerHTML  =  message;
      }

