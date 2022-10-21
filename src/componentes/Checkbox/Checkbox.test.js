import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './index';

test('Deve renderizar um checkbox que pode ser clicado', () => {
  render(<Checkbox />);
  const input = screen.getByLabelText('Check');
  userEvent.click(input);
  expect(input).toBeChecked();
});
