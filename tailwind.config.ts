import { nextui } from '@nextui-org/react';

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        'scrolling-banner': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-30% - var(--gap)/2))' },
        },
        'scrolling-banner-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-50% - var(--gap)/2))' },
        },
      },
      animation: {
        'scrolling-banner': 'scrolling-banner var(--duration) linear infinite',
        'scrolling-banner-vertical': 'scrolling-banner-vertical var(--duration) linear infinite',
      },
    },
  },
  darkMode: ['class'],
  plugins: [
    nextui({
      /** 
        https://nextui.org/docs/customization/layout
      */
      prefix: 'nextui',
      addCommonColors: false,
      defaultTheme: 'light',
      layout: {
        spacingUnit: 4, // in px
        disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: '1px', // h-divider the default height applied to the divider component
        fontSize: {
          tiny: '0.75rem', // text-tiny
          small: '0.875rem', // text-small
          medium: '1rem', // text-medium
          large: '1.125rem', // text-large
        },
        lineHeight: {
          tiny: '1rem', // text-tiny
          small: '1.25rem', // text-small
          medium: '1.5rem', // text-medium
          large: '1.75rem', // text-large
        },
        radius: {
          small: '8px', // rounded-small
          medium: '12px', // rounded-medium
          large: '14px', // rounded-large
        },
        borderWidth: {
          small: '1px', // border-small
          medium: '2px', // border-medium (default)
          large: '3px', // border-large
        },
      },
      themes: {
        light: {
          colors: {
            background: '#FFFFFF',
            foreground: '#11181C',
            divider: '#11111126',
            focus: '#F26419',
            content1: '#FFFFFF',
            content2: '#F4F4F5',
            content3: '#D4D4D8',
            content4: '#D4D4D8',

            default: {
              50: '#FAFAFA',
              100: '#F4F4F5',
              200: '#E4E4E7',
              300: '#D4D4D8',
              400: '#A1A1AA',
              500: '#71717A',
              600: '#52525B',
              700: '#3F3F46',
              800: '#27272A',
              900: '#18181B',
              foreground: '#11181C',
              DEFAULT: '#D4D4D8',
            },
            primary: {
              50: '#FEF6EE',
              100: '#FEEAD6',
              200: '#FBD2AD',
              300: '#F9B278',
              400: '#F58842',
              500: '#F26419',
              600: '#E34D13',
              700: '#BD3811',
              800: '#962E16',
              900: '#792915',
              // foreground: '#11181C',
              DEFAULT: '#F26419',
            },
            secondary: {
              50: '#F0FAFF',
              100: '#DFF5FF',
              200: '#B9ECFE',
              300: '#7BDFFE',
              400: '#34CFFC',
              500: '#0ABAED',
              600: '#0096CB',
              700: '#007DAB',
              800: '#056587',
              900: '#0A5370',
              // foreground: '#11181C',
              DEFAULT: '#007DAB',
            },
            success: {
              50: '#E8FAF0',
              100: '#D1F4E0',
              200: '#A2E9C1',
              300: '#74DFA2',
              400: '#45D483',
              500: '#17C964',
              600: '#12A150',
              700: '#0E793C',
              800: '#095028',
              900: '#095028',
              // foreground: '#11181C',
              DEFAULT: '#17C964',
            },
            warning: {
              50: '#FEFCE8',
              100: '#FDEDD3',
              200: '#FBDBA7',
              300: '#F9C97C',
              400: '#F7B750',
              500: '#F5A524',
              600: '#C4841D',
              700: '#936316',
              800: '#62420E',
              900: '#312107',
              // foreground: '#11181C',
              DEFAULT: '#F5A524',
            },
            danger: {
              50: '#FEE7EF',
              100: '#FDD0DF',
              200: '#FAA0BF',
              300: '#F871A0',
              400: '#F54180',
              500: '#F31260',
              600: '#C20E4D',
              700: '#920B3A',
              800: '#610726',
              900: '#310413',
              // foreground: '#11181C',
              DEFAULT: '#F31260',
            },
          },
          layout: {},
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#ECEDEE',
            divider: '#FFFFFF26',
            focus: '#F26419',
            content1: '#18181B',
            content2: '#27272A',
            content3: '#3F3F46',
            content4: '#52525B',

            default: {
              50: '#18181B',
              100: '#27272A',
              200: '#3F3F46',
              300: '#52525B',
              400: '#71717A',
              500: '#A1A1AA',
              600: '#D4D4D8',
              700: '#E4E4E7',
              800: '#F4F4F5',
              900: '#FAFAFA',
              // foreground: '#ECEDEE',
              DEFAULT: '#3F3F46',
            },
            primary: {
              50: '#792915',
              100: '#962E16',
              200: '#BD3811',
              300: '#E34D13',
              400: '#F26419',
              500: '#F58842',
              600: '#F9B278',
              700: '#FBD2AD',
              800: '#FEEAD6',
              900: '#FEF6EE',
              // foreground: '#ECEDEE',
              DEFAULT: '#F26419',
            },
            secondary: {
              50: '#0A5370',
              100: '#056587',
              200: '#007DAB',
              300: '#0096CB',
              400: '#0ABAED',
              500: '#34CFFC',
              600: '#7BDFFE',
              700: '#B9ECFE',
              800: '#DFF5FF',
              900: '#F0FAFF',
              // foreground: '#ECEDEE',
              DEFAULT: '#0ABAED',
            },
            success: {
              50: '#052814',
              100: '#095028',
              200: '#0E793C',
              300: '#12A150',
              400: '#17C964',
              500: '#45D483',
              600: '#74DFA2',
              700: '#A2E9C1',
              800: '#D1F4E0',
              900: '#E8FAF0',
              // foreground: '#ECEDEE',
              DEFAULT: '#17C964',
            },
            warning: {
              50: '#312107',
              100: '#62420E',
              200: '#936316',
              300: '#C4841D',
              400: '#F5A524',
              500: '#F7B750',
              600: '#F9C97C',
              700: '#FBDBA7',
              800: '#FDEDD3',
              900: '#FEFCE8',
              // foreground: '#ECEDEE',
              DEFAULT: '#F5A524',
            },
            danger: {
              50: '#310413',
              100: '#610726',
              200: '#920B3A',
              300: '#C20E4D',
              400: '#F31260',
              500: '#F54180',
              600: '#F871A0',
              700: '#FAA0BF',
              800: '#FDD0DF',
              900: '#FEE7EF',
              // foreground: '#ECEDEE',
              DEFAULT: '#F31260',
            },
          },
          layout: {},
        },
      },
    }),
  ],
};
export default config;
