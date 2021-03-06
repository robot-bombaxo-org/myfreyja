import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fj-demo-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  public navItems = [
    {
      path: '/button',
      label: 'Button'
    },
    {
      path: '/radio-button',
      label: 'Radio Button'
    },
    {
      path: '/toggle',
      label: 'Toggle'
    },
    {
      path: '/check-box',
      label: 'Check Box'
    },
    {
      path: '/content-switcher',
      label: 'Content switcher'
    },
    {
      path: '/text-input',
      label: 'Text Input'
    },
    {
      path: '/number-input',
      label: 'Number Input'
    },
    {
      path: '/spinner',
      label: 'Spinner'
    },
    {
      path: '/progress-bar',
      label: 'Progress Bar'
    },
    {
      path: '/table',
      label: 'Table'
    },
    {
      path: '/card-item',
      label: 'Card-item'
    },
    {
      path: '/svg-icon',
      label: 'SVG Icon'
    },
    {
      path: '/modal',
      label: 'Modal'
    },
    {
      path: '/inline-editing',
      label: 'Inline Editing'
    },
    {
      path: '/card',
      label: 'Card'
    },
    {
      path: '/table',
      label: 'Table'
    },
    {
      path: '/accordion',
      label: 'Accordion'
    },
    {
      path: '/card-item',
      label: 'Card-item'
    },
    {
      path: '/native-dropdown',
      label: 'Native dropdown'
    },
    {
      path: '/custom-dropdown',
      label: 'Custom dropdown'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
