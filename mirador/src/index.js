import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';

    const config = {
      id: 'demo',
       theme: {
         transitions: window.location.port === '4488' ?  { create: () => 'none' } : {},
       },
       catalog: [
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/tenDollar.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/TheWorkingImage.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/womenUnionHistory.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/box26.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/ruthBullock.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/SD-01-01-0015.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/SD_WLHP_513_02.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/sd_wlhp_149_02.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/SDA_IWA_030.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/SD-01-01-006.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/SD-01-01-0511.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/SD-OtoSlides.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/box4.json' },
         { manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/IVC.json' }
       ],

      // windows: [
      //   {
      //     imageToolsEnabled: true,
      //     imageToolsOpen: true,
      //     manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/box26.json',
      //   },
      //   {
      //     imageToolsEnabled: true,
      //     imageToolsOpen: true,
      //     manifestId: 'https://crossingfonds.github.io/mirador/assets/JSON/box4.json',
      //   }
      // ]

      window: 
        {
          imageToolsEnabled: true,
          imageToolsOpen: true
        }

    };

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
]);


