import { Chip } from './Chip';
import { AriaAttributes } from 'react';

export function ChipGroup({ chips, ...props }: AriaAttributes & { chips: string[] }) {
  return (
    <ul className="chip-group" {...props}>
      {chips.map((chip) => (
        <li key={chip}>
          <Chip content={chip} />
        </li>
      ))}
    </ul>
  );
}
