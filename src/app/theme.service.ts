import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private isDarkMode = false;

    toggleTheme(): void {
        this.isDarkMode = !this.isDarkMode;
        const body = document.body;
        if (this.isDarkMode) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    isDarkTheme(): boolean {
        return this.isDarkMode;
    }
}
