import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: "Nice Picture!", username: "Bob Ross", content: "Look what I saw today! So pretty" },
    { title: "Look!", username: "Sponge Bob", content: "Just a great photo from me!" },
    { title: "Such Photo!", username: "Sadie", content: "A photo just for my friends!" }
  ]
}
