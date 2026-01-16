# 🚀 Awesome React Hooks

![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-Hooks-61DAFB?style=flat-square&logo=react)


A collection of **12 essential Custom Hooks** for React.
These hooks are built with **TypeScript** to help you write clean, reusable, and type-safe code.

--- --- 

## 📚 Documentation

Here is the list of hooks categorized by their purpose.
### 💾 Group 1: Data & State Management
Hooks to help you manage data, API calls, and complex states easily.

|Hook Name|Description|When to use?|
|:-:|:-:|:-:|
|`useLocalStorage`|**Synchronizes** your **state** with the browser's LocalStorage|Use it to **save user settings** (like **Dark Mode**) so they persist after refreshing the page|
|`useFetch`|Handles **API calls** with `loading`, `error`, and `data` states|Use it when you need to **get data** from a **backend server**|
|`usePrevious`|**Stores** the **value of a state** from the previous render|Use it to **compare** **old** props vs **new** props (ex: Checking if a price has increased)|
|`useToggle`|A simple hook to **switch** between `true` and `false`|Use it for **Modals**, **Menus**, or **Show/Hide** password buttons|

### 🖱️ Group 2: User Interaction
Hooks to improve UX and handle user events.

|Hook Name|Description|When to use?|
|:-:|:-:|:-:|
|`useOnClickOutside`|**Detects clicks outside** of a specific element|Use it to **close a Dropdown menu** or Modal when the user clicks the background|
|`useDebounce`|**Delays** the **update** of a **value** until the user stops typing|Use it for **Search Bars** to **avoid** **calling the API** too many times|
|`useHover`|**Detects** if the **mouse** is **hovering** over an element|Use it to **show** Tooltips or **highlight** cards on mouseover|
|`useCopyToClipboard`|**Copies text** to the clipboard easily|Use it for **"Copy Link"** or **"Copy API Key"** buttons|

### 🛠️ Group 3: System & Utilities
Hooks to interact with the Browser and Window properties.

|Hook Name|Description|When to use?|
|:-:|:-:|:-:|
|`useWindowSize`|**Tracks** the **width** and **height** of the browser window|Use it for **responsive logic** (ex: Rendering different layouts for mobile/desktop)|
|`useMediaQuery`|**Checks** if the **screen matches** a CSS media query|Use it to **hide/show** components based on **screen size**|
|`useEventListener`|**Adds** and **removes** **event listeners** safely|Use it to **listen** for **key presses** or **scroll events**|
|`useInterval`|**Handles** `setInterval` correctly within React components|Use it for **Countdowns**, **Timers**, or **polling data** from a server every X seconds|

--- --- 

## 🔨 How to Use
**Example:** Using `useToggle` and `useOnClickOutside`
```typescript
import React, { useRef } from 'react';
import { useToggle, useOnClickOutside } from './hooks';

const ModalComponent = () => {
  // 1. Setup state
  const [isOpen, toggleOpen] = useToggle(false);
  const modalRef = useRef(null);

  // 2. Close modal when clicking outside
  useOnClickOutside(modalRef, () => {
    if (isOpen) toggleOpen();
  });

  return (
    <div>
      <button onClick={toggleOpen}>Open Modal</button>

      {isOpen && (
        <div ref={modalRef} className="modal-box">
          <h1>Hello!</h1>
          <p>Click outside to close me.</p>
        </div>
      )}
    </div>
  );
};
```
--- --- 

## 👨‍💻 Author
- GitHub: apase95
- Handle: noobyhandsome

## Happy Coding! 💻
