import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  title = input.required<string>()
  description = input.required<string>()
  img = input.required<string>()
  color = input.required<"bg-primary"  | "bg-secondary"   | "bg-tertiary">();

}
