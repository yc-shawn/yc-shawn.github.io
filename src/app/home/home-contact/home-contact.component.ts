import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'yc-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss'],
})
export class HomeContactComponent implements OnInit {
  @HostBinding('id') id = 'contact';

  messageSent = false;

  contact = {
    name: null,
    _replyto: null,
    message: null,
  };

  constructor(
    private _http: HttpClient,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contact.name && this.contact._replyto) {
      this._http
        .post('https://formspree.io/f/mrgrkpzv', this.contact)
        .subscribe(() => {
          this.messageSent = true;
        });
    }
  }
}
