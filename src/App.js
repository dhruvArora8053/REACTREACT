const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <div>Logo</div>;
}

function Form() {
  return <div>Form</div>;
}

function PackingList() {
  return <div>list</div>;
}

function Stats() {
  return <div>stats</div>;
}
