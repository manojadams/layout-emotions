# Layout Emotions [![CodeFactor](https://www.codefactor.io/repository/github/wearemothership/layout-emotions/badge)](https://www.codefactor.io/repository/github/wearemothership/layout-emotions)

[Fork of the excellent work from manojadams](https://github.com/manojadams/layout-emotions)

Page layouting `out of the box` without using any css libraries/frameworks.

## Change logs
* update: update packages to use latest typescript, emotion/styled etc
* [enhancement: add basic margin and padding properties to row component from styled system/rebass](https://github.com/manojadams/layout-emotions/issues/13)

## About 
This is a very light-weight collection of `layout components in js` alongwith `css classes for columns` meant to be used for page layouting in `css in js` requirements/solutions.

## Components
* Container
* Row
* Col

## Available columns classes (12 grid system):
| Column | Generic | Extra small devices | Small devices | Medium devices | Large device | Extra large Device | Very Large device |
|--------|---------|---------------------|---------------|----------------|--------------|--------------------|-------------------|
| Column 1 | mcol-1 | mcol-xs-1 | mcol-sm-1 | mcol-md-1 | mcol-lg-1 | mcol-xl-1 | mcol-xxl-1 |
| Column 2 | mcol-2 | mcol-xs-2 | mcol-sm-2 | mcol-md-2 | mcol-lg-2 | mcol-xl-2 | mcol-xxl-2 |
| Column 3 | mcol-3 | mcol-xs-3 | mcol-sm-3 | mcol-md-3 | mcol-lg-3 | mcol-xl-3 | mcol-xxl-3 |
| Column 4 | mcol-4 | mcol-xs-4 | mcol-sm-4 | mcol-md-4 | mcol-lg-4 | mcol-xl-4 | mcol-xxl-4 |
| Column 5 | mcol-5 | mcol-xs-5 | mcol-sm-5 | mcol-md-5 | mcol-lg-5 | mcol-xl-5 | mcol-xxl-5 |
| Column 6 | mcol-6 | mcol-xs-6 | mcol-sm-6 | mcol-md-6 | mcol-lg-6 | mcol-xl-6 | mcol-xxl-6 |
| Column 7 | mcol-7 | mcol-xs-7 | mcol-sm-7 | mcol-md-7 | mcol-lg-7 | mcol-xl-7 | mcol-xxl-7 |
| Column 8 | mcol-8 | mcol-xs-8 | mcol-sm-8 | mcol-md-8 | mcol-lg-8 | mcol-xl-8 | mcol-xxl-8 |
| Column 9 | mcol-9 | mcol-xs-9 | mcol-sm-9 | mcol-md-9 | mcol-lg-9 | mcol-xl-9 | mcol-xxl-9 |
| Column 10 | mcol-10 | mcol-xs-10 | mcol-sm-10 | mcol-md-10 | mcol-lg-10 | mcol-xl-10 | mcol-xxl-10 |
| Column 11 | mcol-11 | mcol-xs-11 | mcol-sm-11 | mcol-md-11 | mcol-lg-11 | mcol-xl-11 | mcol-xxl-11 | 
| Column 12 | mcol-12 | mcol-xs-12 | mcol-sm-12 | mcol-md-12 | mcol-lg-12 | mcol-xl-12 | mcol-xxl-12 |
  
## Usage 1

```tsx
import { Container, Row, Col } from "layout-emotions";

function About() {
  return (
    <Container>
      <Row>
        <Col md={6}>This is column 1</Col>
        <Col md={6}>This is column 2</Col>
      </Row>
    </Container>
  )
}
return default About;
```

## Usage 2

```tsx
import { Container, Row } from "layout-emotions";

function About() {
  return (
    <Container>
      <Row>
        <div className="mcol-6">This is column 1</div>
        <div className="mcol-6">This is column 2</div>
      </Row>
    </Container>
  )
}
return default About;
```

### Above example is equivalent to the following in bootstrap:

```html
function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">This is para1</div>
        <div className="col-6">This is para2</div>
      </div>
    </div>
  )
}

return default About;
```

## Give a ⭐️ if you liked this project!
