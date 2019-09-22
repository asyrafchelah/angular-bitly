import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Data{
  shortUrl: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bitly';
  

  inputUrl = new FormControl ('')
  outputUrl = new FormControl('')

  constructor(private http: HttpClient){}

  ngOnInit(){
  }


  onsubmit(){
    let url = "https://protected-bayou-98151.herokuapp.com/urls"
    let params = {
      "urls": this.inputUrl.value,
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }

    this.http.post(url, params, httpOptions ).subscribe((data: Data) => {
      console.log(data.shortUrl)
       this.outputUrl.setValue(data.shortUrl)
    })
  }
}
