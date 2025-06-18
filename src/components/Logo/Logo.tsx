import classNames from 'classnames';
import './Logo.css';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={classNames('logo', className)}
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left shape - D */}
      <path
        d="M16 7
           L36 7 
           Q39 7 42 8
           L59 14 
           L73 21 
           L89 32 
           L100 44 
           L104 49 
           L113 65 
           L117 78 
           Q118 81 118 84
           L118 97 
           Q118 100 116 103
           L108 119 
           L101 128 
           L85 143 
           L67 153 
           L53 159 
           L40 163 
           L22 167 
           L5 167 
           Q2 167 0 165
           Q-2 163 -2 160
           L-1 108 
           L-2 47 
           L-2 16 
           Q-2 13 0 10
           Q2 7 5 7
           L16 7
           Z"
      />
      {/* Right shape - M */}
      <path
        d="M169 8 
           L175 8 
           Q178 8 180 10
           L187 20 
           L200 38 
           L210 52 
           Q211 53 212 52
           L222 38 
           L237 16 
           Q239 13 242 13
           L249 13 
           Q252 13 254 15
           L271 84 
           L289 155 
           L292 167 
           Q293 171 292 174
           Q291 177 288 179
           L180 179 
           L151 180 
           L137 180 
           Q133 180 130 178
           Q127 176 126 172
           Q125 168 126 165
           L147 78 
           L162 15 
           Q163 11 166 9
           Q168 8 169 8
           Z"
      />
    </svg>
  );
}
