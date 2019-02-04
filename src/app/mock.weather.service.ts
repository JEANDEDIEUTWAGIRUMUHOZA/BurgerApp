import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export class MockWeatherService {

  getWeatherFromCityName(cityName: string): Observable<any> {
    return of(
      {
        main: {
          temp: 10,
          temp_min: -5
        }
      }
    )
  }
}
