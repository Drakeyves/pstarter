# Sample Issues for Junior Developers

This document contains a list of sample issues that are suitable for junior developers to work on. These issues are designed to help new team members get familiar with the codebase while making meaningful contributions.

## Frontend Issues

### 1. Implement User Profile Page

**Description:**
Create a user profile page where users can view and edit their profile information.

**Requirements:**

- Create a new page at `/profile`
- Display user's name, email, and avatar
- Allow users to update their name and avatar
- Add form validation
- Implement responsive design using Tailwind CSS

**Acceptance Criteria:**

- User can view their profile information
- User can update their name
- User can upload a new avatar
- Form validates input before submission
- UI is responsive on mobile and desktop
- Unit tests are written for the component

**Technical Notes:**

- Use SWR for data fetching
- Implement form validation with Formik and Yup
- Follow the project's coding standards

**Labels:** good first issue, enhancement, frontend

### 2. Improve Form Accessibility

**Description:**
Enhance the accessibility of our forms throughout the application.

**Requirements:**

- Add proper ARIA labels to form elements
- Ensure all forms can be navigated using keyboard only
- Add error messages that are accessible to screen readers
- Implement focus states for form elements

**Acceptance Criteria:**

- All form elements have appropriate ARIA labels
- Forms can be completed using keyboard navigation only
- Error messages are announced by screen readers
- Focus states are visible and follow design guidelines

**Technical Notes:**

- Use React Testing Library to test accessibility
- Follow WCAG 2.1 AA guidelines
- Test with screen readers (NVDA or VoiceOver)

**Labels:** accessibility, good first issue, frontend

### 3. Add Loading States to Buttons

**Description:**
Implement loading states for buttons throughout the application to improve user experience during async operations.

**Requirements:**

- Add loading spinner to buttons when actions are in progress
- Disable buttons during loading state
- Maintain button width during loading state to prevent layout shifts
- Apply consistent loading state styling across the application

**Acceptance Criteria:**

- Buttons show loading state during async operations
- Buttons are disabled during loading state
- No layout shifts occur when buttons enter loading state
- Loading state styling is consistent across the application

**Technical Notes:**

- Create a reusable Button component if not already exists
- Use React's useState for managing loading state
- Follow the project's design system

**Labels:** enhancement, good first issue, frontend

## Backend Issues

### 4. Implement API Rate Limiting

**Description:**
Add rate limiting to API routes to prevent abuse.

**Requirements:**

- Implement rate limiting for all API routes
- Set appropriate limits based on endpoint sensitivity
- Return proper status codes and headers when limits are exceeded
- Add documentation for rate limits

**Acceptance Criteria:**

- Rate limiting is applied to all API routes
- Different limits are set for different types of endpoints
- 429 status code is returned when limits are exceeded
- Headers include information about rate limits and reset times
- Documentation is updated with rate limit information

**Technical Notes:**

- Research rate limiting libraries for Next.js API routes
- Consider using Redis for distributed rate limiting if needed
- Follow RESTful best practices for headers and status codes

**Labels:** backend, security, good first issue

### 5. Add Pagination to Team Members API

**Description:**
Implement pagination for the team members API endpoint to improve performance for teams with many members.

**Requirements:**

- Add pagination parameters to the API endpoint
- Implement limit and offset or cursor-based pagination
- Return pagination metadata in the response
- Update frontend components to handle pagination

**Acceptance Criteria:**

- API accepts pagination parameters
- API returns paginated results
- Response includes metadata about total count and next/previous pages
- Frontend components display pagination controls
- Performance is improved for large teams

**Technical Notes:**

- Follow RESTful conventions for pagination
- Consider using Prisma's built-in pagination features
- Update API documentation to reflect pagination parameters

**Labels:** backend, performance, good first issue

### 6. Implement Email Verification Reminder

**Description:**
Create a system to remind users to verify their email if they haven't done so after registration.

**Requirements:**

- Check if users have verified their email after 24 hours
- Send a reminder email if verification is pending
- Limit reminders to a maximum of 3
- Track reminder count in the database

**Acceptance Criteria:**

- System identifies users with unverified emails after 24 hours
- Reminder emails are sent to users with unverified emails
- No more than 3 reminders are sent to any user
- Reminder count is tracked in the database

**Technical Notes:**

- Use a scheduled job or webhook for checking unverified emails
- Create an email template for the reminder
- Update the user model to track reminder count if needed

**Labels:** backend, email, good first issue

## Testing Issues

### 7. Improve Test Coverage for Authentication Flow

**Description:**
Increase test coverage for the authentication flow, including registration, login, and password reset.

**Requirements:**

- Add unit tests for authentication-related components
- Add integration tests for authentication API routes
- Add end-to-end tests for the complete authentication flow
- Ensure edge cases are covered (invalid inputs, rate limiting, etc.)

**Acceptance Criteria:**

- Test coverage for authentication-related code is at least 80%
- All critical paths in the authentication flow are tested
- Edge cases are properly tested
- Tests are well-organized and follow the project's testing patterns

**Technical Notes:**

- Use Jest for unit and integration tests
- Use Playwright for end-to-end tests
- Mock external services as needed

**Labels:** testing, good first issue

### 8. Add Visual Regression Tests

**Description:**
Implement visual regression testing for key pages to catch unintended UI changes.

**Requirements:**

- Set up a visual regression testing tool
- Create baseline screenshots for key pages
- Integrate visual regression tests into the CI pipeline
- Document the process for updating baseline screenshots

**Acceptance Criteria:**

- Visual regression testing is set up and working
- Baseline screenshots are created for key pages
- Tests run automatically in the CI pipeline
- Process for updating baseline screenshots is documented

**Technical Notes:**

- Research visual regression testing tools (e.g., Percy, Chromatic, Playwright)
- Focus on critical user flows first
- Consider different viewport sizes for responsive testing

**Labels:** testing, good first issue

## Documentation Issues

### 9. Create Component Documentation

**Description:**
Create documentation for the core UI components to help developers understand how to use them.

**Requirements:**

- Document props, usage examples, and best practices for each component
- Create a simple component showcase or storybook
- Include accessibility considerations
- Document any known limitations or edge cases

**Acceptance Criteria:**

- All core UI components are documented
- Documentation includes props, examples, and best practices
- Component showcase or storybook is implemented
- Documentation is clear and helpful for new developers

**Technical Notes:**

- Consider using Storybook or a similar tool
- Follow a consistent documentation format
- Include TypeScript types in the documentation

**Labels:** documentation, good first issue

### 10. Improve API Documentation

**Description:**
Enhance the documentation for API endpoints to make it easier for developers to understand and use them.

**Requirements:**

- Document all API endpoints with request/response formats
- Include authentication requirements
- Document error codes and messages
- Add examples for common use cases

**Acceptance Criteria:**

- All API endpoints are documented
- Documentation includes request/response formats
- Authentication requirements are clearly explained
- Error codes and messages are documented
- Examples are provided for common use cases

**Technical Notes:**

- Consider using a tool like Swagger/OpenAPI
- Ensure documentation is kept in sync with the actual API
- Include information about rate limits and pagination

**Labels:** documentation, good first issue

## How to Use This Document

1. Create GitHub issues based on these samples
2. Assign appropriate labels to help with filtering
3. Provide additional context or requirements as needed
4. Assign to junior developers or mark as "good first issue"
5. Provide guidance and support during implementation
