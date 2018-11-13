import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
  <footer className="footer">
    <span className="todo-count" data-testid="todo-count">
      <strong>{props.remaining}</strong>
      {props.remaining === 1 ? ' todo' : ' todos'} left
    </span>
    <ul className="filters" data-testid="filters">
      <li><Link to="/" data-testid="filter-all">All</Link></li>
      {' '}
      <li><Link to="/active" data-testid="filter-active">Active</Link></li>
      {' '}
      <li><Link to="/completed" data-testid="filter-completed">Completed</Link></li>
    </ul>
  </footer>
