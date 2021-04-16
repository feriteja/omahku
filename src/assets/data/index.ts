export const category = [
  {
    name: 'Kitchen',
    img: require('../../assets/kitchen.png'),
    color: '#8F87F5',
    devices: [
      {
        device: 'cctv',
        list: [
          {name: 'Xiaomi mi Cam', batery: 90},
          {name: 'Xiaomi mi Pro Cam', batery: 60},
          {name: 'Xiaomi mi Pro V2', batery: 70},
        ],
      },
      {device: 'ac', list: [{name: 'LG Ultra', batery: 90}]},
      {
        device: 'lamp',
        list: [
          {name: 'Xiaomi RGB', batery: 80},
          {name: 'Xiaomi RGB Pro', batery: 49},
          {name: 'Xiaomi RGB V2', batery: 20},
        ],
      },
    ],
  },
  {
    name: 'Bedroom Room',
    img: require('../../assets/bedroom.png'),
    color: '#BEE6F4',
    devices: [
      {
        device: 'cctv',
        list: [{name: 'Xiaomi mi Cam', batery: 90}],
      },
      {device: 'ac', list: [{name: 'LG Ultra', batery: 90}]},
      {
        device: 'lamp',
        list: [
          {name: 'Xiaomi RGB', batery: 80},
          {name: 'Xiaomi RGB Pro', batery: 40},
          {name: 'Xiaomi RGB V2', batery: 20},
        ],
      },
    ],
  },
  {
    name: 'Family Room',
    img: require('../../assets/room.png'),
    color: '#E1D6F5',
  },
];
