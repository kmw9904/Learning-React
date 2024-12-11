export default function Card({ title, children }) {
  return (
    <div class="card">
      <div class="card__header">{title}</div>
      <div class="card__body">
        {children}
      </div>
    </div>
  );
}
