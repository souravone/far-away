import { useState } from "react";
import Form from "./Form";

import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((i) => [...i, item]);
  }

  function handleDeleteItem(id) {
    setItems((i) => i.filter((it) => it.id !== id));
  }

  function handleToggle(id) {
    setItems((i) =>
      i.map((x) => (x.id === id ? { ...x, packed: !x.packed } : x))
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggle={handleToggle}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
