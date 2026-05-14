"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider
            attribute="data-theme"   // <‑‑ asegura que el atributo sea `data-theme`
            defaultTheme="poseidon" // el mismo que usas en <Layout />
            enableSystem={false}    // evita que el tema sea decidido por el SO en SSR
            disableTransitionOnChange   // elimina flashes que pueden causar hidratación
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}
