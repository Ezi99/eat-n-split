# Friend Expense Splitter

This React-based application helps manage and split expenses between friends. Users can add friends, track balances, and split bills dynamically, all through an intuitive interface.

## Purpose

This project is part of my journey to practice and improve React skills, focusing on modern techniques like **state management**, **controlled components**, and **derived state**. It's built with functional components and React hooks, demonstrating clean and modular code practices.

## Features

- **Add and manage friends**: Create a list of friends with unique profiles, including names and avatars.
- **Dynamic bill splitting**: Calculate expenses dynamically using derived state for accurate and efficient value computations.
- **Controlled inputs**: Ensure seamless user interaction and predictable state updates with fully controlled form elements.
- **Balance tracking**: Easily identify who owes whom and the amounts.

## React Concepts Demonstrated

### Derived State

Efficiently compute values (e.g., friend’s share of the bill) based on existing state, ensuring up-to-date calculations without redundant state variables.

### Controlled Elements

All form inputs (e.g., text fields, dropdowns) are fully controlled by React state, ensuring consistency between the UI and underlying data.

### Component-based Architecture

The application is built using reusable, modular components like `Button`, `FriendsList`, and `FormSplitBill`, promoting scalability and maintainability.
