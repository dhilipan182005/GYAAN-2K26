# GYAAN-2K26 Symposium Website

![HTML](https://img.shields.io/badge/HTML-FF5733?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-2965f1?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## Project Overview

**GYAAN-2K26** is a symposium website designed to showcase event details, provide registration facilities, and highlight sponsors and gallery content. It serves as the official portal for participants, organizers, and visitors to access information about the symposium.

---

## Features

- **Homepage**: Overview of the symposium and highlights.  
- **Event Information**: Details of sessions, workshops, and schedules.  
- **Registration Portal**: Online form for participants to register.  
- **Sponsors Section**: Dedicated space for partner organizations.  
- **Gallery**: Images and media from past and current events.  
- **Responsive Design**: Optimized for desktop, tablet, and mobile.  

---

## Advantages

| Feature | Advantage |
|---------|-----------|
| Responsive Design | Accessible on all devices |
| Registration Portal | Easy participant onboarding |
| Sponsors Section | Visibility for partners |
| Gallery | Showcases event highlights |
| Interactive UI | Engaging and modern look |

---

## Application Timeline

| Date | Milestone |
|------|-----------|
| Apr 2026 | Initial Design & Wireframe |
| May 2026 | Homepage & Event Info Development |
| Jun 2026 | Registration Form Integration |
| Jul 2026 | Sponsors & Gallery Section |
| Aug 2026 | Responsive Design Testing |
| Sep 2026 | Symposium Website Launch |

---

## ER Diagram (Entity Relationship)

```mermaid
erDiagram
    USER ||--o{ REGISTRATION : submits
    USER {
        int user_id
        string name
        string email
        string college
    }
    REGISTRATION {
        int reg_id
        datetime reg_date
        string event_selected
    }
    EVENT ||--o{ REGISTRATION : includes
    EVENT {
        int event_id
        string title
        string description
        datetime date
    }
```

---

## UML Class Diagram

```mermaid
classDiagram
    class User {
        +int user_id
        +string name
        +string email
        +string college
    }
    class Registration {
        +int reg_id
        +datetime reg_date
        +string event_selected
    }
    class Event {
        +int event_id
        +string title
        +string description
        +datetime date
    }

    User --> Registration : submits
    Registration --> Event : includes
```

---

## Developed By

**Dhilipan S**  
Electronics and Communication Engineering Student  

Email: [dhilipan1804@outlook.in](mailto:dhilipan1804@outlook.in)  
LinkedIn: [Dhilipan S](https://www.linkedin.com/in/dhilipan-s)  

---

## Installation

Clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/dhilipan182005/GYAAN-2K26.git
cd GYAAN-2K26
```

Open:

```bash
index.html
```

---

## Project Structure

```text
GYAAN-2K26/

├── index.html
├── style.css
├── script.js
├── assets/
├── gallery/
├── icons/
├── images/
├── sponsors/
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```
