import './FeatureList.css';
import { features } from '../data/features';

// Dates are "YYYY", "YYYY-MM" or "YYYY-MM-DD": show only what we know
const formatDate = (date: string) => {
  const [year, month] = date.split('-');
  if (!month) return year;
  return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
};

// Compact list of talks, workshops and press under the highlighted blog cards
const FeatureList = () => {
  const items = [...features].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="feature-list">
      <h3 className="feature-list-title">More talks, workshops &amp; press</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="feature-row">
            <span className="feature-date">{formatDate(item.date)}</span>
            <span className={`feature-kind feature-kind-${item.kind.toLowerCase()}`}>{item.kind}</span>
            <span className="feature-body">
              <a className="feature-link" href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
              <span className="feature-source">
                {item.source}
                {item.extraLinks?.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
