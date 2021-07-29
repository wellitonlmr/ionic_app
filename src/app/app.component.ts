import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'home' },
    
    { title: 'Galeria', url: '/galeria', icon: 'images' },

    { title: 'Presidência', url: '/galeria', icon: 'book' },
    { title: 'Superintendência', url: '/galeria', icon: 'book' },
    { title: 'Diretoria Técnica', url: '/galeria', icon: 'body' },
    { title: 'Diretoria Administrativa', url: '/galeria', icon: 'body' },
    { title: 'Pediatria', url: '/galeria', icon: 'body' },
    { title: 'UTI', url: '/galeria', icon: 'warning' },
    { title: 'Nutrição', url: '/galeria', icon: 'pizza' },
    { title: 'Farmácia', url: '/galeria', icon: 'pint' },
    { title: 'Bioimagem', url: '/galeria', icon: 'finger-print' },
    { title: 'Higienização', url: '/galeria', icon: 'trash' },
    
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
