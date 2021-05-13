import { text } from '@storybook/addon-knobs';
import { HeaderComponent } from './header.component';
//IMPORT TOOLBAR MODULE
import { MatToolbarModule } from '@angular/material/toolbar';

//IMPORT THEME
import '@angular/material/prebuilt-themes/deeppurple-amber.css';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
};

export const primary = () => ({
  moduleMetadata: {
    imports: [MatToolbarModule],
  },
  props: {
    title: text('title', ''),
  },
});
