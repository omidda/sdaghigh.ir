import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "./Header";
import { assert } from 'console';

it('Render header', () => {
  let title = "Header";
  render(<Header title={title} />);
  expect(screen.getByText(title));
});