# Simple Calculator API

This is a basic Express.js API providing arithmetic operations: addition, subtraction, multiplication, and division.

## Usage

- **POST /add**: Adds two numbers.
- **POST /subtract**: Subtracts one number from another.
- **POST /multiply**: Multiplies two numbers.
- **POST /divide**: Divides one number by another.

## Example

### POST /add
Request:
```json
{
  "a": 10,
  "b": 5
}
