# Coding Standards

This document outlines the coding standards and best practices for the SaaS Starter Kit project. Following these guidelines ensures consistency across the codebase and makes collaboration easier.

## General Principles

- **Simplicity**: Write simple, readable code that others can easily understand
- **Consistency**: Follow established patterns in the codebase
- **Maintainability**: Write code that is easy to maintain and extend
- **Performance**: Consider performance implications of your code

## TypeScript Guidelines

### Types and Interfaces

- Use TypeScript types for all variables, parameters, and return values
- Create interfaces for complex data structures in the `types` directory
- Avoid using `any` type unless absolutely necessary
- Use type guards when working with union types

```typescript
// Good
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): User | null {
  // ...
}

// Bad
function getUser(id): any {
  // ...
}
```

### Naming Conventions

- Use PascalCase for interfaces, types, and classes
- Use camelCase for variables, functions, and methods
- Use UPPER_CASE for constants
- Prefix interfaces with `I` only when necessary to avoid naming conflicts

## React Guidelines

### Component Structure

- Use functional components with hooks instead of class components
- Keep components small and focused on a single responsibility
- Extract reusable logic into custom hooks
- Use proper prop typing with TypeScript interfaces

```typescript
// Good
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button = ({ text, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button 
      className={`btn btn-${variant}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Bad
const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};
```

### State Management

- Use React's built-in state management (useState, useReducer) for component-level state
- Use SWR for data fetching and caching
- Keep state as local as possible
- Avoid prop drilling by using context when necessary

## CSS/Styling Guidelines

- Use Tailwind CSS utility classes for styling
- Follow a mobile-first approach for responsive design
- Use semantic class names when creating custom components
- Avoid inline styles

```jsx
// Good
<div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
  <h2 className="text-xl font-bold">Title</h2>
  <Button text="Click me" />
</div>

// Bad
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>
  <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Title</h2>
  <Button text="Click me" />
</div>
```

## API Guidelines

- Use RESTful principles for API design
- Handle errors gracefully and return appropriate status codes
- Validate request data before processing
- Use consistent response formats

```typescript
// Good
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Validate request
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid ID' });
    }
    
    // Process request
    const data = await fetchData(id);
    
    if (!data) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    
    return res.status(200).json({ data });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
```

## Testing Guidelines

- Write tests for all new features and bug fixes
- Follow the testing patterns established in the codebase
- Use Jest for unit and integration tests
- Use Playwright for end-to-end tests
- Aim for high test coverage, especially for critical paths

## Git Commit Guidelines

- Write clear, concise commit messages
- Use present tense ("Add feature" not "Added feature")
- Reference issue numbers when applicable
- Keep commits focused on a single change

```
feat: add user profile page (#123)
fix: resolve authentication issue with Google login
docs: update README with new setup instructions
```

## Code Review Guidelines

- Be respectful and constructive in code reviews
- Focus on the code, not the person
- Explain the reasoning behind your suggestions
- Approve only when all issues are addressed

## Documentation

- Document complex functions and components with JSDoc comments
- Keep README and other documentation up to date
- Document any non-obvious behavior or edge cases 