import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onSetFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !image) return;

    const friend = {
      name,
      image,
      balance: 0,
      id: crypto.randomUUID(),
    };

    onSetFriends(friend);

    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🕴️Friend name </label>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label>ℹ️ Image URL </label>
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
