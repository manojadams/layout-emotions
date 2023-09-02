---
sidebar_position: 2
---

# Columns using component

## Properties of column component

| Property | Value | Datatype |Description |
|----------|-------|----------|------------|
|    xxl   | 1 to 12 | number | Used for very large screen with width > 1400px |
|    xl   | 1 to 12 | number | Used for very large screen with width > 1200px |
|    lg   | 1 to 12 | number | Used for large screen with width > 992px |
|    md   | 1 to 12 | number | Used for medium width screen with width > 768px |
|    sm   | 1 to 12 | number | Used for small width screen with width > 576px |
|    xs   | 1 to 12 | number | Used for very small screen with width < 576px |

### Basic uage example

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
