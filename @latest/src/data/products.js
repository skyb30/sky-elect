const makeWhatsAppLink = (name) => {
  const number = '+2348101335958'
  const text = `Hello SKY-ELECT! I want to order: ${name}.`;
  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
}

export const products = [
  {
    id: 'wire-1',
    name: 'Copper Electrical Wire 2.5mm',
    category: 'Electrical Wires',
    description: 'Durable copper wire for reliable electrical distribution.',
    longDescription:
      'High-quality copper electrical wire designed for safe and stable power delivery in residential and commercial installations.',
    fromPrice: 18,
    specs: [
      { k: 'Conductor', v: 'Copper' },
      { k: 'Size', v: '2.5mm²' },
      { k: 'Use', v: 'Residential/Commercial' },
    ],
    whatsappLink: makeWhatsAppLink('Copper Electrical Wire 2.5mm'),
  },
  {
    id: 'cable-1',
    name: 'Armoured Cable 4-Core 10mm',
    category: 'Armoured Cables',
    description: 'Protected armoured cable for industrial and outdoor runs.',
    longDescription:
      'Armoured cable built for tough environments, offering strong mechanical protection and dependable conductivity for industrial installations.',
    fromPrice: 65,
    specs: [
      { k: 'Cores', v: '4' },
      { k: 'Size', v: '10mm²' },
      { k: 'Protection', v: 'Armoured' },
    ],
    whatsappLink: makeWhatsAppLink('Armoured Cable 4-Core 10mm'),
  },
  {
    id: 'panel-1',
    name: 'Solar Panel 550W Mono',
    category: 'Solar Panels',
    description: 'High-efficiency solar panel for premium energy generation.',
    longDescription:
      'A premium mono solar panel with high-efficiency output designed for residential solar systems and commercial installations.',
    fromPrice: 210,
    specs: [
      { k: 'Power', v: '550W' },
      { k: 'Type', v: 'Mono PERC' },
      { k: 'Efficiency', v: '~21.5%' },
    ],
    whatsappLink: makeWhatsAppLink('Solar Panel 550W Mono'),
  },
  {
    id: 'inv-1',
    name: 'Inverter 5kW Hybrid',
    category: 'Inverters',
    description: 'Hybrid inverter for stable conversion and battery-ready setups.',
    longDescription:
      'A reliable hybrid inverter for solar installations, supporting clean energy conversion with advanced protection and stable output.',
    fromPrice: 420,
    specs: [
      { k: 'Power', v: '5kW' },
      { k: 'Mode', v: 'Hybrid' },
      { k: 'Protection', v: 'Multi-layer' },
    ],
    whatsappLink: makeWhatsAppLink('Inverter 5kW Hybrid'),
  },
  {
    id: 'bat-1',
    name: 'LiFePO4 Battery 100Ah',
    category: 'Batteries',
    description: 'Long-life battery storage for off-grid and backup power.',
    longDescription:
      'Premium LiFePO4 battery designed for safe, efficient energy storage in solar systems. Long cycle life for dependable performance.',
    fromPrice: 360,
    specs: [
      { k: 'Capacity', v: '100Ah' },
      { k: 'Chemistry', v: 'LiFePO4' },
      { k: 'Cycle Life', v: '~6000 cycles' },
    ],
    whatsappLink: makeWhatsAppLink('LiFePO4 Battery 100Ah'),
  },
  {
    id: 'cb-1',
    name: 'Mini Circuit Breaker 16A',
    category: 'Circuit Breakers',
    description: 'Safety-first mini breaker for protection and control.',
    longDescription:
      'Mini circuit breaker designed for reliable protection against overload and short circuits in electrical systems.',
    fromPrice: 9,
    specs: [
      { k: 'Rating', v: '16A' },
      { k: 'Type', v: 'MCB' },
      { k: 'Application', v: 'Residential/Commercial' },
    ],
    whatsappLink: makeWhatsAppLink('Mini Circuit Breaker 16A'),
  },
  {
    id: 'led-1',
    name: 'LED Bulb 12W Warm White',
    category: 'LED Lights',
    description: 'Energy-efficient LED lighting with premium brightness.',
    longDescription:
      'High-quality LED bulb offering warm lighting, reduced energy consumption and long-life performance for homes and offices.',
    fromPrice: 6,
    specs: [
      { k: 'Power', v: '12W' },
      { k: 'Light', v: 'Warm White' },
      { k: 'Use', v: 'Indoor' },
    ],
    whatsappLink: makeWhatsAppLink('LED Bulb 12W Warm White'),
  },
  {
    id: 'acc-1',
    name: 'Electrical Accessories Pack',
    category: 'Electrical Accessories',
    description: 'Sockets, switches, connectors and installation accessories bundle.',
    longDescription:
      'Premium electrical accessories bundle designed to complete modern installations with reliable connectors and durable switching components.',
    fromPrice: 28,
    specs: [
      { k: 'Bundle', v: 'Sockets/Switches' },
      { k: 'Finish', v: 'Premium' },
      { k: 'Use', v: 'Installation' },
    ],
    whatsappLink: makeWhatsAppLink('Electrical Accessories Pack'),
  },
]

