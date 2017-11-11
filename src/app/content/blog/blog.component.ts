import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 })
          ]))
        ]), { optional: true })
      ])
    ]),

    trigger('explarnerAnim', [
      transition('* => *', [
        query('.col-sm-4', style({ opacity: 0, transform: 'translateX(-45px)' })),
        query('.col-sm-4', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ]), { optional: true })
      ])
    ]),
  ]
})
export class BlogComponent implements OnInit {
  items = [];

  constructor() {
    this.items = ['Here is a item', 'Here is a one', 'Here is a someone'];

  }

  ngOnInit() {
  }

  pushItem() {
    this.items.push('New item');
  }

  removeItem() {
    this.items.pop();
  }
}
