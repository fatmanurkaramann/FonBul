import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() content: string;
  @Input() content2: string;

  @Input() image1Src: string;
  @Input() image2Src: string;
  @Input() style: string;

}
