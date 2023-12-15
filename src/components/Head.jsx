export default function Head({ display }) {
  return (
    <div className="calculator">
      <input type="text" value={display} disabled />
    </div>
  );
}
