import React, { useState } from 'react';

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправка данных формы на сервер
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Название события:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Описание события:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <br />
      <button type="submit">Добавить событие</button>
    </form>
  );
}

function CommentForm() {
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // отправка данных формы на сервер
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Комментарий:
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
      </label>
      <br />
      <button type="submit">Добавить комментарий</button>
    </form>
  );
}
