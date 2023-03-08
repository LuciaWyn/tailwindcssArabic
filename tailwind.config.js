/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend:{
      fontFamily:{
        sans: ['Noto Sans Arabic'],
        serif: ['Noto Naskh Arabic']
      }
    },
    fontSize:{
      'xs':['0.75rem',
        {
          lineHeight: '1.7rem'
        }
      ],
      'sm':['0.875rem',
        {
          lineHeight: '2.1rem'
        }
      ],
      'base':['1rem',
        {
          lineHeight: '2.3rem'
        }
      ],
      'lg':['1.125rem',
        {
          lineHeight: '2.7rem'
        }
      ],
      'xl':['1.25rem',
        {
          lineHeight: '2.7rem'
        }
      ],
      '2xl':['1.5rem',
        {
          lineHeight: '3.2rem'
        }
      ],
      '3xl':['1.875rem',
        {
          lineHeight: '4.2rem'
        }
      ],
      '4xl':['2.25rem',
        {
          lineHeight: '4.85rem'
        }
      ],
      '5xl':['3rem',
        {
          lineHeight: '1.75'
        }
      ],
      '6xl':['3.175rem',
        {
          lineHeight: '1.75'
        }
      ],
      '7xl':['4.5rem',
        {
          lineHeight: '1.75'
        }
      ],
      '8xl':['6rem',
        {
          lineHeight: '1.75'
        }
      ],
      '9xl':['8rem',
        {
          lineHeight: '1.75'
        }
      ]
    }
  },
  plugins:[]
}
