---
sidebar_position: 2
---

# Introduction

## Basic layout components:
- Container
- Row
- Column

## Usage

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

Columns can be used two ways:
- using column component
- using column classnames

### Using column component
```javascript
import { Container, Row, Col } from "layout-emotions";
function MyApp() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <p>Column 1</p>
        </Col>
        <Col md={6}>
          <p>Column 2</p>
        </Col>
      </Row>
    </Container>
  )
}
```
### Using classnames

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