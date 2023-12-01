import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rand',
  templateUrl: './rand.component.html',
  styleUrl: './rand.component.css'
})
export class RandComponent {
  cat_fact = ''
  cat_image = ''
  emoji = ''
  random_colors: string[] = [];
  http = inject(HttpClient);

  //this is my own try, getting random information from different sources:
  //1. https://emojihub.yurace.pro/api/all
  //2. https://meowfacts.herokuapp.com/
  //3. https://api.thecatapi.com/v1/images/search

  reloadPage() {
    window.location.reload();
  }
  ngOnInit() {
    this.http.get('https://meowfacts.herokuapp.com/')
      .subscribe((data: any) => {
        this.cat_fact = data['data'][0]
      });

    this.http.get('https://api.thecatapi.com/v1/images/search')
      .subscribe((data: any) => {
        this.cat_image = data[0]['url'];
      });
    this.http.get('https://emojihub.yurace.pro/api/random')
      .subscribe((data: any) => {
        this.emoji = String.fromCodePoint(parseInt(data['unicode'][0].substring(2), 16));
      });
    for (let i = 0; i < 4; i++) {
      const randomTime = new Date().getMilliseconds();
      this.http.get<any>('https://www.colr.org/json/color/random?' + randomTime).subscribe((data: any) => {
        const hex_color = data.colors[0].hex;
        if (!this.random_colors.includes(hex_color)) {
          this.random_colors.push(hex_color);
        } else {
          i--;
        }
      });
    }
  }
}
