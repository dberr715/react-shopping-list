import { useState } from "react";
import { ActualList } from "./ActualList";

export const ListForm = () => {
  const [items, setItems] = useState([]);
  const [itemDisplay, setItemDisplay] = useState("");
  console.log({ items });

  const handleChange = (e) => {
    console.log(e);
    setItemDisplay(e.target.value);
    console.log(items);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setItems([itemDisplay, ...items]);
    setItemDisplay("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="enter item here"
          value={itemDisplay}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />

        <button type="button" onClick={handleClick}>
          Add to List
        </button>
        <h3>Here is your list:</h3>

        {/* <ul>
          <li>{itemDisplay}</li>
        </ul> */}
      </form>
      <ActualList items={items} />
    </>
  );
};
