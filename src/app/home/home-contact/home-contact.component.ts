import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'yc-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {

  contact = {
    name: null,
    _replyto: null,
    message: null,
  }

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Submit!', this.contact);
    if (this.contact.name && this.contact._replyto) {
      this._http
        .post('https://formspree.io/ychen248@buffalo.edu', this.contact)
        .subscribe();
    }
  }

}
