import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yc-home-aboutme',
  templateUrl: './home-aboutme.component.html',
  styleUrls: ['./home-aboutme.component.scss'],
})
export class HomeAboutmeComponent implements OnInit {
  skills: string[] = [
    'Javascript',
    'Typescript',
    'React',
    'Ember',
    'Angular',
    'NodeJS',
    'Bootstrap',
    'MongoDB',
  ];

  levels = {
    Java: 5,
    Python: 4,
    'C#': 3,
    Swift: 4,
    'C++': 3,
    HTML: 5,
    'CSS/SASS/SCSS': 5,
    Javascript: 5,
    Typescript: 4,
    Jquery: 4,
    NodeJS: 4,
    Ember: 4,
    Angular: 4,
    Bootstrap: 4,
    AWS: 3,
    MongoDB: 3,
  };

  constructor() {}

  ngOnInit(): void {}
}
