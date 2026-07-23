'use client';

import { createContext, useContext, type ReactNode } from 'react';
import { CONTENIDO_DEFAULT, type Contenido } from '@/lib/contenidoTipos';

// El contenido editable se lee una sola vez en el servidor (page.tsx) y se
// reparte a todos los componentes por acá.

const ContenidoCtx = createContext<Contenido>(CONTENIDO_DEFAULT);

export function ContenidoProvider({
  contenido,
  children,
}: {
  contenido: Contenido;
  children: ReactNode;
}) {
  return <ContenidoCtx.Provider value={contenido}>{children}</ContenidoCtx.Provider>;
}

export function useContenido(): Contenido {
  return useContext(ContenidoCtx);
}
