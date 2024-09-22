const weatherData = {
        "location": {
            "name": "",
            "region": "",
            "country": "",
            "lat": "",
            "lon": "",
            "tz_id": "",
            "localtime_epoch":"" ,
            "localtime": ""
        },
        "current": {
            "temp_c": "",
            "conditionText": "",
            "conditionIcon": "",
            "wind_kph": "",
            "pressure_mb": "",
        },
        "queryResult":"",
        clear: function() {
            this.location.name="";
            this.location.region="";
            this.location.country="";
            this.location.lat="";
            this.location.lon="";
            this.location.tz_id="";
            this.location.localtime_epoch="";
            this.location.localtime="";
            this.current.temp_c="";
            this.current.conditionText="";
            this.current.conditionIcon="";
            this.current.wind_kph="";
            this.current.pressure_mb="";
            this.queryResult="";
        },
}