import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  act,
  render as testingRender,
  renderHook,
  screen,
  waitFor,
  within,
  RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function render(
  ui: ReactNode,
  initialEntries: Array<string> = ['/']
): RenderResult {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      </QueryClientProvider>
    );
  }

  return testingRender(ui, { wrapper: Wrapper });
}

export { act, render, renderHook, screen, waitFor, userEvent, within };
