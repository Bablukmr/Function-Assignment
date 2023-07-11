import React, { useState } from "react";
import "./Emoji2.css";
import { Emoji } from "./EmojiList";

export default function Emoji2() {
  const [items, setItems] = useState("");

  const emojiFilter = Emoji.filter((item) => {
    const emojiName = item.name.toLowerCase();
    return emojiName.includes(items.toLowerCase());
  });

  return (
    <div>
      <input value={items} onChange={(e) => setItems(e.target.value)} />
      <div className="main_div">
        {emojiFilter.map((item) => (
          <div className="item_div" key={item.id}>
            {item.symbol}
          </div>
        ))}
      </div>
    </div>
  );
}
