import React from 'react';

// Mock child components
jest.mock('./AppRoutes', () => () => <div data-testid="mocked-child">Mocked Child</div>);
