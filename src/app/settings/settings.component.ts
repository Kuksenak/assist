import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-settings',
  imports: [MatSlideToggleModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(public themeService: ThemeService) { }

  toggleTheme(): void {
    this.themeService.toggleTheme();

  }
}
