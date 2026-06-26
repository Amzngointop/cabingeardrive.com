interface RatingBarsProps {
  ratings: {
    durability: number;
    value: number;
    easeOfUse: number;
  };
}

export default function RatingBars({ ratings }: RatingBarsProps) {
  const rows = [
    { label: 'Durability', score: ratings.durability },
    { label: 'Value', score: ratings.value },
    { label: 'Ease of Use', score: ratings.easeOfUse },
  ];

  return (
    <div style={{ margin: '10px 0' }}>
      {rows.map(({ label, score }) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span
            style={{
              fontSize: 11,
              color: '#777',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              width: 80,
              flexShrink: 0,
            }}
          >
            {label}
          </span>
          <div style={{ flex: 1, height: 6, background: '#e8e8e8', borderRadius: 3 }}>
            <div style={{ width: `${(score / 5) * 100}%`, height: '100%', background: '#CC0000', borderRadius: 3 }} />
          </div>
          <span style={{ fontSize: 12, color: '#444', width: 24, textAlign: 'right' }}>{score.toFixed(1)}</span>
        </div>
      ))}
    </div>
  );
}
