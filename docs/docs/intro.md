---
sidebar_position: 1
---

# Introduction

A very small library of styled components for layouting.

## Getting Started

Basic layout components:
- Container
- Row
- Column

### What you'll need
- React

### How to use a container

```javascript
  import { Container } from "layout-emotions";
  function MyApp() {
    return (
      <Container>
        {/*..---Children.*/}
      </Container>
    )
  }
```

### How to use a row

```javascript
  import { Container, Row } from "layout-emotions";
  function MyApp() {
    return (
      <Container>
        <Row>
          {/*..---Children.*/}
        </Row>
      </Container>
    )
  }
```

### How to use columns

```javascript
  import { Container, Row } from "layout-emotions";
  function MyApp() {
    return (
      <Container>
        <Row>
          {/* Column 1*/}
          <div className="mcol">
            <p>Column 1</p>
          </div>
          {/* Column 2*/}
          <div className="mcol">
            <p>Column 2</p>
          </div>
        </Row>
      </Container>
    )
  }