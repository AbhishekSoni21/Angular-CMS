export const PAGE_LAYOUTS = [
  {
    description: 'Full Page Layout',
    displayOrder: 0,
    isEnabled: true,
    label: 'Full Page',
    metadata: {
      sections: [
        {
          breakpoint: {
            desktop: 12,
            tablet: 12,
            mobile: 12,
          },
          displayOrder: 0,
        },
      ],
      mnemonic: 'full_layout',
    },
  },
  {
    description: '8-4 page layout',
    displayOrder: 1,
    isEnabled: true,
    label: '8-4',
    metadata: {
      sections: [
        {
          breakpoint: {
            desktop: 8,
            tablet: 6,
            mobile: 12,
          },
          displayOrder: 0,
        },
        {
          breakpoint: {
            desktop: 4,
            tablet: 6,
            mobile: 12,
          },
          displayOrder: 1,
        },
      ],
      mnemonic: '8_4_layout',
    },
  },
  {
    description: '4-8 page layout',
    displayOrder: 1,
    isEnabled: true,
    label: '4-8',
    metadata: {
      sections: [
        {
          breakpoint: {
            desktop: 4,
            tablet: 6,
            mobile: 12,
          },
          displayOrder: 0,
        },
        {
          breakpoint: {
            desktop: 8,
            tablet: 6,
            mobile: 12,
          },
          displayOrder: 1,
        },
      ],
      mnemonic: '4_8_layout',
    },
  },
  {
    description: '6-6 page layout',
    displayOrder: 1,
    isEnabled: true,
    label: '6-6',
    metadata: {
      sections: [
        {
          breakpoint: {
            desktop: 6,
            tablet: 6,
            mobile: 12,
          },
          displayOrder: 0,
        },
        {
          breakpoint: {
            desktop: 6,
            tablet: 6,
            mobile: 12,
          },
          displayOrder: 1,
        },
      ],
      mnemonic: '6_6_layout',
    },
  },
  {
    description: '4-4-4 page layout',
    displayOrder: 1,
    isEnabled: true,
    label: '4-4-4',
    metadata: {
      sections: [
        {
          breakpoint: {
            desktop: 4,
            tablet: 4,
            mobile: 12,
          },
          displayOrder: 0,
        },
        {
          breakpoint: {
            desktop: 4,
            tablet: 4,
            mobile: 12,
          },
          displayOrder: 1,
        },
        {
          breakpoint: {
            desktop: 4,
            tablet: 4,
            mobile: 12,
          },
          displayOrder: 2,
        },
      ],
      mnemonic: '4_4_4_layout',
    },
  },
];
