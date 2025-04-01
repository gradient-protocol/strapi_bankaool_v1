const config = {
  locales: [
    'es',
  ],
  defaultLocale: 'es',
  theme: {
    // COLORES - Modo claro
    colors: {
      // Colores primarios - Accent color y highlight para lightmode
      primary100: '#E6EEFF',
      primary200: '#C7DBFF',
      primary500: '#83A1FF',
      primary600: '#5D7FFF',
      primary700: '#3A5FFF',
      
      // Colores de éxito - Para mensajes y acciones exitosas
      success100: '#EAFBE7',
      success200: '#C6F6C2',
      success500: '#5CB176',
      success600: '#328048',
      success700: '#2F6846',
      successHover: '#8CD5B5',
      
      // Colores de advertencia - Para alertas y advertencias
      warning100: '#FDF4DC',
      warning200: '#FAE7B9',
      warning500: '#F29D41',
      warning600: '#D9822F',
      warning700: '#BE5D01',
      warningHover: '#F9C58D',
      
      // Colores de peligro/error - Para notificaciones y errores
      danger100: '#FFE6E6',
      danger200: '#FFC7C7',
      danger500: '#FF4040',
      danger600: '#FF1A1A',
      danger700: '#E60000',
      dangerHover: '#FF7373',
      
      // Colores neutrales - Para fondos, textos y bordes
      neutral0: '#FFFFFF',    // Background color: #FFFFFF
      neutral100: '#F6F6F9',  // Gris muy claro
      neutral150: '#EAEAEF',  // Gris claro
      neutral200: '#DCDCE4',  // Gris medio-claro
      neutral300: '#C0C0CF',  // Gris medio
      neutral400: '#8E8EA9',  // Gris medio-oscuro
      neutral500: '#666687',  // Gris oscuro
      neutral600: '#4A4A6A',  // Gris muy oscuro
      neutral700: '#32324D',  // Casi negro
      neutral800: '#272740',  // Negro con matiz
      neutral900: '#212134',  // Negro puro
      neutral1000: '#151515', // Negro brillante
      
      // Colores para botones
      buttonPrimary500: '#83A1FF',
      buttonPrimary600: '#5D7FFF',
      buttonPrimaryHover: '#A0B9FF',
      buttonSecondary500: '#F6F6F9',
      buttonSecondary600: '#DCDCE4',
      buttonSecondaryHover: '#E0E0EA',
      
      // Colores para bordes
      borderColor: 'rgba(55, 55, 55, 0.4)',
      
      // Colores para enlaces
      linkColor: '#5D7FFF',
      linkHover: '#3A5FFF',
    },
    
    // TIPOGRAFÍA
    fonts: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeights: {
      xs: 1.1,
      sm: 1.25,
      md: 1.5,
      lg: 1.75,
      xl: 2,
    },
    
    // ESPACIADO
    spaces: {
      0: '0',
      1: '0.25rem',  // 4px
      2: '0.5rem',   // 8px
      3: '0.75rem',  // 12px
      4: '1rem',     // 16px
      5: '1.5rem',   // 24px
      6: '2rem',     // 32px
      7: '3rem',     // 48px
      8: '4rem',     // 64px
      9: '5rem',     // 80px
      10: '6rem',    // 96px
    },
    
    // BORDES Y RADIOS
    borderRadius: {
      xs: '0.125rem',  // 2px
      sm: '0.25rem',   // 4px
      md: '0.5rem',    // 8px
      lg: '0.75rem',   // 12px
      xl: '1rem',      // 16px
      circle: '50%',
      pill: '9999px',
    },
    borderWidth: {
      none: '0',
      xs: '1px',
      sm: '2px',
      md: '4px',
      lg: '8px',
    },
    
    // SOMBRAS
    shadows: {
      xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    
    // TRANSICIONES
    transitions: {
      fast: '0.1s',
      normal: '0.2s',
      slow: '0.5s',
    },
    
    // MODO OSCURO
    dark: {
      colors: {
        // Colores primarios - Accent color y highlight para darkmode
        // Escala de verdes para el modo oscuro, desde más oscuro a más claro
        primary100: '#2A3600',  // Verde muy oscuro para fondos
        primary200: '#3F5200',  // Verde oscuro
        primary500: '#7A9E00',  // Verde medio
        primary600: '#A6D400',  // Verde claro
        primary700: '#C7FB56',  // Verde muy claro (acento)
        
        // Botones primarios con colores adecuados para contraste
        buttonPrimary500: '#A6D400',
        buttonPrimary600: '#7A9E00',
        buttonPrimaryHover: '#C7FB56',
        
        // Colores de éxito - Para mensajes y acciones exitosas
        success100: '#1A3A27',  // Verde oscuro
        success200: '#2F6846',  // Verde medio-oscuro
        success500: '#5CB176',  // Verde medio
        success600: '#8CD5B5',  // Verde claro
        success700: '#C6F6C2',  // Verde muy claro
        successHover: '#8CD5B5',
        
        // Colores de advertencia - Para alertas y advertencias
        warning100: '#4D2500',  // Naranja oscuro
        warning200: '#BE5D01',  // Naranja medio-oscuro
        warning500: '#F29D41',  // Naranja medio
        warning600: '#F9C58D',  // Naranja claro
        warning700: '#FAE7B9',  // Naranja muy claro
        warningHover: '#F9C58D',
        
        // Colores de peligro/error - Para notificaciones y errores
        danger100: '#4D0000',   // Rojo oscuro
        danger200: '#990000',   // Rojo medio-oscuro
        danger500: '#FF4040',   // Rojo medio
        danger600: '#FF7373',   // Rojo claro
        danger700: '#FFC7C7',   // Rojo muy claro
        dangerHover: '#FF7373',
        
        // Colores neutrales - Para fondos, textos y bordes
        neutral0: '#151515',    // Background color: #151515
        neutral100: '#1A1A1A',  // Gris muy oscuro
        neutral150: '#202020',  // Gris oscuro
        neutral200: '#272727',  // Gris medio-oscuro
        neutral300: '#3A3A3A',  // Gris medio
        neutral400: '#CCCCCC',  // Gris claro para texto secundario
        neutral500: '#DDDDDD',  // Gris muy claro
        neutral600: '#EEEEEE',  // Casi blanco
        neutral700: '#F5F5F5',  // Prácticamente blanco
        neutral800: '#FAFAFA',  // Blanco con matiz
        neutral900: '#FCFCFC',  // Blanco puro
        neutral1000: '#FFFFFF', // Blanco brillante
        
        // Colores para botones
        buttonSecondary500: '#272727',
        buttonSecondary600: '#3A3A3A',
        buttonSecondaryHover: '#4A4A4A',
        
        // Colores para bordes
        borderColor: '#373737',
        
        // Colores para enlaces
        linkColor: '#C7FB56',
        linkHover: '#D9FC8A',
      },
      
      // SOMBRAS para modo oscuro
      shadows: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.2)',
        sm: '0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        none: 'none',
      },
    },
  },
  
  // Estilos globales para personalizar las barras de desplazamiento
  global: {
    scrollbars: {
      // Estilos para barras de desplazamiento en modo claro
      light: {
        track: {
          background: '#151515',
          width: '5px',
          borderRadius: '5px'
        },
        thumb: {
          background: '#404040 2px',
          width: '5px',
          borderRadius: '5px',
          hoverColor: '#272727'
        }
      },
      // Estilos para barras de desplazamiento en modo oscuro
      dark: {
        track: {
          background: '#272727',
          width: '10px',
          borderRadius: '5px'
        },
        thumb: {
          background: '#A6D400',
          width: '8px',
          borderRadius: '5px',
          hoverColor: '#C7FB56'
        }
      }
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
  
  // Aplicar estilos personalizados para las barras de desplazamiento
  const injectScrollbarStyles = () => {
    const scrollbarStyles = document.createElement('style');
    scrollbarStyles.innerHTML = `
      /* Estilos para barras de desplazamiento - Modo claro */
      :root {
        scrollbar-width: thin;
        scrollbar-color: ${config.global.scrollbars.light.thumb.background} ${config.global.scrollbars.light.track.background};
      }
      
      ::-webkit-scrollbar {
        width: ${config.global.scrollbars.light.track.width};
        height: ${config.global.scrollbars.light.track.width};
      }
      
      ::-webkit-scrollbar-track {
        background: ${config.global.scrollbars.light.track.background};
        border-radius: ${config.global.scrollbars.light.track.borderRadius};
      }
      
      ::-webkit-scrollbar-thumb {
        background: ${config.global.scrollbars.light.thumb.background};
        border-radius: ${config.global.scrollbars.light.thumb.borderRadius};
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: ${config.global.scrollbars.light.thumb.hoverColor};
      }
      
      /* Estilos para barras de desplazamiento - Modo oscuro */
      [data-theme="dark"] {
        scrollbar-width: thin;
        scrollbar-color: ${config.global.scrollbars.dark.thumb.background} ${config.global.scrollbars.dark.track.background};
      }
      
      [data-theme="dark"]::-webkit-scrollbar {
        width: ${config.global.scrollbars.dark.track.width};
        height: ${config.global.scrollbars.dark.track.width};
      }
      
      [data-theme="dark"]::-webkit-scrollbar-track {
        background: ${config.global.scrollbars.dark.track.background};
        border-radius: ${config.global.scrollbars.dark.track.borderRadius};
      }
      
      [data-theme="dark"]::-webkit-scrollbar-thumb {
        background: ${config.global.scrollbars.dark.thumb.background};
        border-radius: ${config.global.scrollbars.dark.thumb.borderRadius};
      }
      
      [data-theme="dark"]::-webkit-scrollbar-thumb:hover {
        background: ${config.global.scrollbars.dark.thumb.hoverColor};
      }
    `;
    document.head.appendChild(scrollbarStyles);
  };
  
  // Inyectar estilos cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectScrollbarStyles);
  } else {
    injectScrollbarStyles();
  }
};

export default {
  config,
  bootstrap,
};
