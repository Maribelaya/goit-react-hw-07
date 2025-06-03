import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addContact({ name, number }));
    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className={css.input}
      />
      <input
        type="tel"
        value={number}
        placeholder="Number"
        onChange={(e) => setNumber(e.target.value)}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Додати контакт
      </button>
    </form>
  );
}
