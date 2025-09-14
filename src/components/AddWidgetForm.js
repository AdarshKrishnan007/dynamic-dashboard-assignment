import React, { useState } from "react";
import "../App.css";
function AddWidgetForm({ isOpen, onClose, onSave }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      onSave({ name, text });
      setName("");
      setText("");
      onClose();
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add Widget</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Widget text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddWidgetForm;
