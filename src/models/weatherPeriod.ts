export class weatherPeriod {
     number: BigInteger;
     name :string;
     temperature: string;
     temperatureUnit: string;
     icon :string;
     shortForecast: string;
     constructor(number:BigInteger, name: string, temperature: string, temperatureUnit: string,icon:string,shortForecast:string) {  
        this.number = number;
        this.name = name;  
        this.temperature = temperature;  
        this.temperatureUnit = temperatureUnit;
        this.icon = icon;
        this.shortForecast = shortForecast;  
    }  
}
