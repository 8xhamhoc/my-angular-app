import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../../core/services/counter.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  private counterService = inject(CounterService);
  count$ = this.counterService.count$;

  increment(): void {
    this.counterService.increment();
  }

  decrement(): void {
    this.counterService.decrement();
  }

  reset(): void {
    this.counterService.reset();
  }
}
