import { useState } from "react";
import './Nav.css';

export default function Nav({handleSelector}) {
    return (
        <nav className="nav-bar">
            <ul className="nav-list">
                <li className="nav-item" onClick={() => handleSelector(1)}>Всі клієнти</li>
                <li className="nav-item" onClick={() => handleSelector(3)}>Всі роботи</li>
            </ul>
        </nav>
    );
}