export const PORTAL_PAGE = [
  {
    displayType: 'content',
    isEnabled: true,
    label: 'New Page',
    layoutContainer: [
      {
        displayOrder: 0,
        layoutContainerTemplate: {
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
                widgets: [
                  {
                    displayOrder: 1,
                    widget: {
                      data: {},
                      widgetDefination: {
                        description: 'table widget',
                        isEnabled: true,
                        label: 'Table Widget',
                        mfeDefination: 'vistable',
                        mnemonic: 'vistable',
                        widgetConfig: {},
                      },
                    },
                  },
                ],
              },
            ],
          },
          mnemonics: 'full_layout',
        },
      },
      {
        displayOrder: 1,
        layoutContainerTemplate: {
          label: '8-4',
          metadata: {
            sections: [
              {
                breakpoint: { mobile: 12, tablet: 6, desktop: 8 },
                displayOrder: 0,
                widgets: [],
              },
              {
                breakpoint: { mobile: 12, tablet: 6, desktop: 4 },
                displayOrder: 1,
                widgets: [],
              },
            ],
          },
          mnemonics: '8_4_layout',
        },
      },
    ],
    pageType: 'site',
    status: {
      currentStatus: {
        approval: {},
        statusChangeMessage: '',
        statusLabel: 'draft',
      },
      historicalStatus: [
        {
          approval: {},
          statusChangeMessage: '',
          statusLabel: 'draft',
        },
      ],
    },
  },
];
