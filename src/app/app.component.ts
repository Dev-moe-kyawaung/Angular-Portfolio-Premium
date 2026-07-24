import { Component, OnInit, HostBinding } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { AosService } from './services/aos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Moe Kyaw Aung - Premium Portfolio';

  constructor(
    private themeService: ThemeService,
    private aosService: AosService
  ) {}

  ngOnInit() {
    this.themeService.init();
    this.aosService.init();
  }
}
