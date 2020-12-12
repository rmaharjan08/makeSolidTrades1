import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  navList = [
    {label: 'Home', dataValue: 'about', href: '#', target:false},
    {label: 'Lessons', dataValue: 'portfolio', href: 'https://www.makesolidtrades.com/my-blog',target:true},
    {label: 'Chat Room', dataValue: 'blog', href: 'https://discord.gg/xtrD4Tz', target:true},
    {label: 'Articles', dataValue: 'team', href: 'https://www.makesolidtrades.com/my-blog', target:true},
    {label: 'Join Us', dataValue: 'contact', href: '#contact', target:false}
  ]

  ngOnInit(): void {
  }

  getTarget(target):string {
    if (target === false) {
      return '';
    } else {
      return '_blank';
    }

  }

}
