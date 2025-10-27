import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

/**
 * 🎨 Tu tema personalizado basado en Aura
 */
export const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',
      400: '#38bdf8', // color principal
      500: '#a3e635',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
      950: '#082f49',
    },
  }
});

