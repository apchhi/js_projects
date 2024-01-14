import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App({ events, categories, favoriteEvents, onAddFavorite }) {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeEvent, setActiveEvent] = useState(null);

  function handleCategoryClick(category) {
    setActiveCategory(category);
    setActiveEvent(null);
  }

  function handleEventClick(event) {
    setActiveEvent(event);
  }

  function handleAddFavorite(event) {
    onAddFavorite(event);
  }

  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Events App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Events</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <EventList
            events={events}
            categories={categories}
            activeCategory={activeCategory}
            activeEvent={activeEvent}
            onCategoryClick={handleCategoryClick}
            onEventClick={handleEventClick}
            onAddFavorite={handleAddFavorite}
          />
        </Route>
        <Route path="/favorites">
          <FavoriteEvents
            favoriteEvents={favoriteEvents}
            onEventClick={handleEventClick}
          />
        </Route>
      </Switch>
    </Router>
  );
}

function EventList({ events, categories, activeCategory, activeEvent, onCategoryClick, onEventClick, onAddFavorite }) {
  const filteredEvents = activeCategory
    ? events.filter((event) => event.category === activeCategory)
    : events;

  return (
    <Container>
      <h1>Events</h1>
      <Nav variant="tabs" defaultActiveKey="" onSelect={onCategoryClick}>
        <Nav.Item>
          <Nav.Link eventKey="">All</Nav.Link>
        </Nav.Item>
        {categories.map((category) => (
          <Nav.Item key={category}>
            <Nav.Link eventKey={category}>{category}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <div className="event-list">
        {filteredEvents.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            active={event === activeEvent}
            onEventClick={onEventClick}
            onAddFavorite={onAddFavorite}
          />
        ))}
      </div>
    </Container>
  );
}

function [EventItem]({ event, active, onEventClick, onAddFavorite }) {

  function handleEventClick() {
    onEventClick(event);
  }

  function handleAddFavoriteClick() {
    onAddFavorite(event);
  }

  return (
    <div className={`event-item ${active ? 'active' : ''}`} onClick={handleEventClick}>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <div className="event-details">
        <div className="event-date">{event.date}</div>
        <div className="event-location">{event.location}</div>
        <button className="btn btn-primary" onClick={handleAddFavoriteClick}>Add to Favorites</button>
      </div>
    </div>
  );
}

function FavoriteEvents({ favoriteEvents, onEventClick }) {

  function handleEventClick(event) {
    onEventClick(event);
  }

  return (
    <Container>
      <h1>Favorite Events</h1>
      <div className="event-list">
        {favoriteEvents.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            active={false}
            onEventClick={handleEventClick}
          />
        ))}
      </div>
    </Container>
  );
}

