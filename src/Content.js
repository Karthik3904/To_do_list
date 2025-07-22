import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul className="list">
      {items.length ? (
        items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
              aria-label={`Delete ${item.item}`}
            />
          </li>
        ))
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>No items found</p>
      )}
    </ul>
  );
};

export default Content;
