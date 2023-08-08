import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function AddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const id = crypto.randomUUID();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label>🌀Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🧲Image URL:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, handleSpliBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [howIsPaying, setHowIsPaying] = useState("user");
  const paidByFriend = bill ? bill - expense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !expense) return;

    handleSpliBill(howIsPaying === "user" ? expense : -expense);
  }

  return (
    <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
      <h2>SPLIT A BILL WITH YOUR {selectedFriend.name}</h2>

      <label> 👾 Bill Value:</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>😶‍🌫️Your expense:</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(
            Number(e.target.value) > bill ? expense : Number(e.target.value)
          )
        }
      />

      <label>🐱 {selectedFriend.name} expense:</label>
      <input type="text" disabled value={paidByFriend} />

      <label htmlFor="">👌Who is paying the bill</label>
      <select
        value={howIsPaying}
        onChange={(e) => setHowIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}

function Friend({ Friend, setSelectedFriend, selectedFriend }) {
  const isSelected = Friend === selectedFriend;
  return (
    <li key={Friend.key}>
      <img src={Friend.image} alt="" />
      <h3>{Friend.name}</h3>
      <p
        className={
          Friend.balance > 0 ? "green" : Friend.balance === 0 ? "" : "red"
        }
      >
        {Friend.balance === 0
          ? `you and ${Friend.name} are even`
          : Friend.balance > 0
          ? `${Friend.name} owes you R$ ${Friend.balance}`
          : `you owes ${Friend.name} R$ ${Friend.balance}`}
      </p>
      <Button onClick={() => setSelectedFriend(Friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FriendsList({ friends, setSelectedFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((s) => (
        <Friend
          Friend={s}
          key={s.id}
          setSelectedFriend={setSelectedFriend}
          selectedFriend={selectedFriend}
        ></Friend>
      ))}
    </ul>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(true);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(nfriend) {
    setFriends((s) => [...s, nfriend]);
    setShowAddFriend((s) => !s);
  }

  function handleSelection(friend) {
    setSelectedFriend((s) => (friend === s ? null : friend));
    setShowAddFriend(false);
  }

  function handleSpliBill(value) {
    setFriends((s) =>
      s.map((friend) =>
        friend === selectedFriend
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          setSelectedFriend={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <AddFriend handleAddFriend={handleAddFriend} />}

        <Button onClick={() => setShowAddFriend(!showAddFriend)}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSpliBill={handleSpliBill}
        />
      )}
    </div>
  );
}

export default App;

/**
 * onApp{
FriendsList: [friends, onSelection, selectedFriend],
FormAddFriend: [setFriends],
Button: [onClick],
FormSplitBill: [selectedFriend, handleSplitBill],
functions: {handleSelection: [friend], handleDisplayAddFrien: [], handleAddFriend:[newFriend], handleSplitBill:[value] }
}
 */
