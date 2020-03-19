import React, { useState, useReducer, useContext } from "react";
import "./HowTo.scss";
const howTos = [
  {
    id: 1,
    description: "howTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "1To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 2,
    description: "howfghghgfhTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "2To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 3,
    description: "howretgrgdfbgbfgdhhTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "3To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 4,
    description: "hownghjtytrTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "1To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 5,
    description: "hofdgtrhrbwewTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "2To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 6,
    description: "howdfsdfsdfvfdnbfhjtTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "3To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 7,
    description: "hosdfwTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "1To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 8,
    description: "howfsdfsdfsdfTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "2To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  },
  {
    id: 9,
    description: "hodfsdwTo",
    url: "https://emotion.sh/docs/styled",
    text:
      "3To use styles from a styled component but change the element that’s rendered, you can use the as prop."
  }
];
function appReducer(state, action) {
  switch (action.type) {
    case "active":
      return {
        ...state,
        active: action.payload
      };
    case "add":
      return {};
    case "remove":
      return {};
    case "search":
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
}
const Context = React.createContext();
function HowTo() {
  const [state, dispatch] = useReducer(appReducer, {
    active: 1,
    items: howTos,
    search: ""
  });

  return (
    <Context.Provider value={dispatch}>
      <div className="howTo">
        <Search />
        <HowToList
          items={state.items.filter(item =>
            item.description.includes(state.search)
          )}
        />

        <HowToDescription
          {...state.items.filter(item => item.id === state.active)[0]}
        />
      </div>
    </Context.Provider>
  );
}

export default HowTo;

function Search() {
  const dispatch = useContext(Context);
  const handleChange = e => {
    e.preventDefault();
    dispatch({ type: "search", payload: e.currentTarget.value });
  };
  return (
    <form>
      <label htmlFor="search">Search for HowTO:</label>
      <input
        type="text"
        id="search"
        name="q"
        aria-label="Search for HowTO"
        onChange={e => handleChange(e)}
      />
    </form>
  );
}

function HowToList({ items }) {
  const dispatch = useContext(Context);
  return (
    <ul className="howTo__list">
      {items.map(item => (
        <li
          id={item.id}
          key={item.id}
          onClick={() => dispatch({ type: "active", payload: item.id })}
        >
          {item.description}
        </li>
      ))}
    </ul>
  );
}
function HowToDescription({ text, url }) {
  return (
    <div className="howTo__description">
      {text}
      <a
        className="howTo__link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more
      </a>
    </div>
  );
}
