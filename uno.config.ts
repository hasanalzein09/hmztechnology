import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerVariantGroup,
    transformerDirectives,
} from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            cdn: 'https://esm.sh/'
        }),
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
    theme: {
        colors: {
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))'
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))'
            },
            brand: {
                blue: '#3b82f6',
                purple: '#8b5cf6',
                pink: '#ec4899',
                cyan: '#06b6d4'
            }
        },
        borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
            '2xl': '1rem',
            '3xl': '1.5rem',
        },
        animation: {
            keyframes: {
                blob: '{0% {transform: translate(0px, 0px) scale(1);} 33% {transform: translate(30px, -50px) scale(1.1);} 66% {transform: translate(-20px, 20px) scale(0.9);} 100% {transform: translate(0px, 0px) scale(1);}}',
                gradient: '{0%, 100% {background-size: 200% 200%; background-position: left center;} 50% {background-size: 200% 200%; background-position: right center;}}',
                float: '{0%, 100% {transform: translateY(0px);} 50% {transform: translateY(-20px);}}',
                glow: '{0%, 100% {box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);} 50% {box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);}}',
            },
            durations: {
                blob: '7s',
                gradient: '8s',
                float: '6s',
                glow: '2s',
            },
            counts: {
                blob: 'infinite',
                gradient: 'infinite',
                float: 'infinite',
                glow: 'infinite',
            },
            timingFns: {
                gradient: 'ease',
                float: 'ease-in-out',
                glow: 'ease-in-out',
            }
        }
    },
    shortcuts: [
        ['btn', 'px-4 py-2 rounded inline-block bg-primary text-primary-foreground hover:opacity-90 transition-opacity'],
        ['glass-card', 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl'],
        ['glass-nav', 'bg-slate-950/80 backdrop-blur-md border-b border-white/10'],
        ['text-gradient', 'bg-gradient-to-r from-brand-blue via-brand-purple to-brand-pink bg-clip-text text-transparent'],
        ['glow-border', 'border border-transparent hover:border-brand-blue/30 transition-all duration-300'],
    ],
})
