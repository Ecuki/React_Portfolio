import React, { useReducer, useContext } from "react";
import { useAuth0 } from "../../Login/react-auth0-spa";
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
    case "delete":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case "edit":
      return {
        ...state,
        isEdited: true,
        active: action.payload
      };
    case "exit":
      return {
        ...state,
        isEdited: false
      };
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
    search: "",
    isEdited: false
  });
  const { isAuthenticated } = useAuth0();
  const { items, search, active, isEdited } = state;
  const getSerchItems = () =>
    items.filter(item => item.description.includes(search));
  const getActiveItem = () => items.filter(item => item.id === active)[0];
  return (
    <Context.Provider
      value={{ dispatch: dispatch, isAuthenticated: isAuthenticated }}
    >
      <div className="howTo">
        <Search />
        <HowToList items={getSerchItems()} />
        <HowToDescription {...getActiveItem()} />
      </div>
      {isEdited && <Modal {...getActiveItem()} />}
    </Context.Provider>
  );
}

export default HowTo;

function Search() {
  const { dispatch } = useContext(Context);
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
  return (
    <ul className="howTo__list">
      {items.map(item => (
        <HowToItem key={item.id} {...item} />
      ))}
    </ul>
  );
}

function HowToItem({ id, description }) {
  const { dispatch, isAuthenticated } = useContext(Context);
  return (
    <>
      <li
        id={id}
        key={id}
        onClick={() => dispatch({ type: "active", payload: id })}
      >
        {id + " " + description}
      </li>
      {/* {isAuthenticated && */}(
      <button
        onClick={() => {
          dispatch({ type: "edit", payload: id });
        }}
      >
        Edit
      </button>
      )
    </>
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
function Modal({ id = Date.now(), description = "", url = "", text = "" }) {
  const { dispatch } = useContext(Context);
  const handleSave = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    dispatch({ type: "save", payload: e.currentTarget.value });
  };
  return (
    <div className="howTo__modal">
      <span className="exit" onClick={() => dispatch({ type: "exit" })}>
        +
      </span>
      <form onSubmit={e => handleSave(e)}>
        <label htmlFor="id">Id:</label>
        <input type="text" name="id" defaultValue={id} disabled />
        <br />
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" defaultValue={description} />
        <br />
        <label htmlFor="url">Url:</label>
        <input type="text" name="url" defaultValue={url} />
        <br />
        <label htmlFor="text">Text:</label>
        <textarea
          type="text"
          name="text"
          defaultValue={text}
          disabled={false}
        />
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
