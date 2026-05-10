export const mockReports = [
  {
    id: 1,
    title: 'Sampah menumpuk di sungai',
    description: 'Banyak sampah plastik yang menyumbat aliran sungai.',
    category: 'Lingkungan',
    location: 'Semarang',
    status: 'action',
    createdAt: new Date(),
    image: '',
    author: {
      name: 'Budi',
      avatar: ''
    },
    volunteerAction: {
      registeredPeople: 5,
      requiredPeople: 10,
      scheduledDate: new Date()
    }
  },
  {
    id: 2,
    title: 'Jalan berlubang',
    description: 'Lubang besar di jalan utama.',
    category: 'Infrastruktur',
    location: 'Demak',
    status: 'open',
    createdAt: new Date(),
    image: '',
    author: {
      name: 'Siti',
      avatar: ''
    }
  }
]