import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router'
import DemosSection from '.';

jest.mock('react-router-dom', () => {
    // Require the original module to not be mocked...
    const originalModule = jest.requireActual('react-router-dom');

    return {
        __esModule: true,
        ...originalModule,
        // add your noops here
        useParams: () => ({ demoName: "analytics" })
    };
});

test('DemoSection should renders correctly', () => {
    render(
        <MemoryRouter>
            <DemosSection />
        </MemoryRouter>
    );
    expect(screen.getByText("Analytics")).toBeInTheDocument();
});
