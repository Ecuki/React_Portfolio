import React, { useReducer, useContext } from "react";
import { useAuth0 } from "../../Login/react-auth0-spa";

import Modal from "./Modal";
import Search from "./Search";

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

const findPrevElement = (arr, id) => {
  const idx = arr.findIndex(item => item.id === id) - 1;
  return arr[idx >= 0 ? idx : 1].id;
};

function appReducer(state, action) {
  switch (action.type) {
    case "active":
      return {
        ...state,
        active: action.payload
      };
    case "add":
      return { ...state, modal: true };
    case "save":
      return { ...state, items: [...state.items, action.payload] };
    case "delete":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        active:
          state.items.length > 1
            ? findPrevElement(state.items, action.payload)
            : 0
      };
    case "edit":
      return {
        ...state,
        modal: true,
        isEdited: true,
        active: action.payload
      };
    case "exit":
      return {
        ...state,
        modal: false,
        isEdited: false
      };
    case "change":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === parseInt(action.payload.id)
            ? {
                ...action.payload,
                id: parseInt(action.payload.id)
              }
            : item
        )
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
export const Context = React.createContext();

function HowTo() {
  const [state, dispatch] = useReducer(appReducer, {
    active: 1,
    items: howTos,
    search: [""],
    modal: false,
    isEdited: false
  });
  const { isAuthenticated } = useAuth0();
  const { items, search, active, modal, isEdited } = state;

  const filterBySearch = () => {
    let words = [];

    if (search.length === 1 && search[0] === "") {
      words = items;
    } else {
      items.map(item =>
        search.map(s =>
          item.description.includes(s) && words.indexOf(item) === -1 && s !== ""
            ? words.push(item)
            : null
        )
      );
    }

    return words;
  };

  const getActiveItem = () => items.filter(item => item.id === active)[0];
  const getEditItem = () => (isEdited ? getActiveItem() : {});
  return (
    <Context.Provider
      value={{
        dispatch,
        isAuthenticated,
        active
      }}
    >
      <div className="howTo">
        <Search />
        <HowToList items={filterBySearch()} />
        <HowToDescription {...getActiveItem()} />
      </div>
      {modal && <Modal isEdited={isEdited} {...getEditItem()} />}
    </Context.Provider>
  );
}

export default HowTo;

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
  const { dispatch } = useContext(Context);
  const { active } = useContext(Context);
  return (
    <li
      id={id}
      key={id}
      onClick={() => dispatch({ type: "active", payload: id })}
      className={id === active ? "active" : ""}
    >
      {description}
    </li>
  );
}
function HowToDescription({ id, text, url }) {
  const { dispatch, isAuthenticated } = useContext(Context);
  return (
    <div className="howTo__description">
      <div className="howTo__description-top">
        <button
          onClick={() => {
            dispatch({ type: "edit", payload: id });
          }}
          className={"button"}
          // disabled={isAuthenticated}
        >
          Edit
        </button>
      </div>
      <p className="howTo__description-mid"> {text}</p>
      <div className="howTo__description-bottom">
        <a
          className="howTo__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
        <button
          className="button new"
          onClick={e => {
            e.preventDefault();
            dispatch({ type: "add" });
          }}
          title="Add new"
          // disabled={isAuthenticated}
        >
          New
        </button>
      </div>
    </div>
  );
}
