export default function Display({ formulaScreen, outputScreen }) {
  return (
    <div id="screen">
      <p id="formulaScreen">{formulaScreen}</p>
      <p id="display">{outputScreen}</p>
    </div>
  );
}
