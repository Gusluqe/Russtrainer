// Difuminado suave tipo la app, solo en algunos sectores.
type Variante = 'arriba' | 'suave';

export default function Blobs({ variante = 'suave' }: { variante?: Variante }) {
  const a = variante === 'arriba';
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <i
        className="absolute block rounded-full"
        style={{ filter: 'blur(80px)', left: '-12%', top: '-30%', width: '55%', height: a ? '75%' : '80%', background: '#d4848f', opacity: a ? 0.34 : 0.22 }}
      />
      <i
        className="absolute block rounded-full"
        style={{ filter: 'blur(80px)', left: '52%', top: '-22%', width: '60%', height: '70%', background: '#b98468', opacity: a ? 0.3 : 0.2 }}
      />
      <i
        className="absolute block rounded-full"
        style={{ filter: 'blur(80px)', left: '38%', top: '46%', width: '66%', height: '50%', background: '#e9c9bd', opacity: a ? 0.55 : 0.5 }}
      />
      {a && (
        <i
          className="absolute block left-0 bottom-0 w-full"
          style={{ height: '34%', background: 'linear-gradient(to bottom, rgba(252,252,247,0), #FCFCF7)' }}
        />
      )}
    </div>
  );
}
