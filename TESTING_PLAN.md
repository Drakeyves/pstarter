# Testing Plan

This document outlines the testing strategy for the SaaS Starter Kit project. It provides guidelines for what needs to be tested, how to test it, and what coverage is expected.

## Testing Levels

### 1. Unit Testing

Unit tests focus on testing individual components, functions, or modules in isolation.

- **Tools**: Jest, React Testing Library
- **Location**: `__tests__` directory
- **Naming Convention**: `[component/function].test.ts(x)`
- **Coverage Target**: 80% for critical paths

#### What to Test

- React components (rendering, props, state changes, user interactions)
- Utility functions
- Hooks
- API handlers

#### Example

```typescript
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button text="Click me" onClick={() => {}} />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### 2. Integration Testing

Integration tests focus on testing how components or modules work together.

- **Tools**: Jest, React Testing Library
- **Location**: `__tests__/integration` directory
- **Naming Convention**: `[feature].test.ts(x)`
- **Coverage Target**: 70% for critical paths

#### What to Test

- Page components with multiple sub-components
- API routes with database interactions
- Authentication flows
- Form submissions

### 3. End-to-End Testing

E2E tests focus on testing the application as a whole, simulating real user scenarios.

- **Tools**: Playwright
- **Location**: `tests` directory
- **Naming Convention**: `[feature].spec.ts`
- **Coverage Target**: All critical user flows

#### What to Test

- User registration and login
- Team creation and management
- Subscription and payment flows
- Settings and profile management

#### Example

```typescript
// auth.spec.ts
import { test, expect } from '@playwright/test';

test('user can sign up and log in', async ({ page }) => {
  // Sign up
  await page.goto('/signup');
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  // Verify redirect to dashboard
  await expect(page).toHaveURL('/dashboard');
  
  // Log out
  await page.click('button[aria-label="Open user menu"]');
  await page.click('text=Sign out');
  
  // Log in
  await page.goto('/login');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  // Verify redirect to dashboard
  await expect(page).toHaveURL('/dashboard');
});
```

## Testing Workflow

### Before Development

1. Identify the requirements and acceptance criteria
2. Define the test cases based on requirements
3. Consider edge cases and error scenarios

### During Development

1. Write unit tests for new components and functions
2. Run existing tests to ensure no regressions
3. Update tests as needed when requirements change

### Before Pull Request

1. Ensure all tests pass locally
2. Check test coverage for new code
3. Add or update tests as needed

## Running Tests

### Unit and Integration Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:cov
```

### End-to-End Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run specific E2E test
npx playwright test tests/auth.spec.ts
```

## Test Data Management

- Use factories or fixtures for test data
- Clean up test data after tests
- Use mocks for external services
- Consider using a separate test database

## Continuous Integration

All tests are run automatically on GitHub Actions when:

- A pull request is created or updated
- Code is pushed to the `dev` or `main` branch

## Debugging Failed Tests

1. Check the test logs for error messages
2. Use `console.log` or debugger to inspect variables
3. Run the specific failing test in isolation
4. Check if the test environment is properly set up

## Test Maintenance

- Review and update tests regularly
- Remove obsolete tests
- Refactor tests when the codebase changes
- Keep test code as clean as production code 