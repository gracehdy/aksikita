export const getStatusString = (action: any): string => {
  if (!action || !action.scheduledAt) return 'Status Tidak Diketahui';
  const now = new Date();
  const scheduledDate = new Date(action.scheduledAt);
  
  if (scheduledDate > now) return 'Akan Datang';
  if (scheduledDate.toDateString() === now.toDateString()) return 'Sedang Berjalan';
  return 'Selesai';
};


export const getStatusColor = (status: string): string => {
  if (status === 'Sedang Berjalan') return '#19456B';
  if (status === 'Selesai') return '#16C79A';
  return '#11698E'; // Akan Datang
};

export const getStatusIcon = (status: string): string => {
  if (status === 'Sedang Berjalan') return 'mdi-play';
  if (status === 'Selesai') return 'mdi-check-circle-outline';
  return 'mdi-clock-outline';
};

export const getButtonConfig = (status: string) => {
  if (status === 'Sedang Berjalan') return { color: '#11698E', text: 'Lihat Detail' };
  if (status === 'Selesai') return { color: 'grey', text: 'Aksi Selesai' };
  return { color: '#16C79A', text: 'Daftar Sekarang' };
};

export const formatStatusText = (status: string): string => {
  return status; 
};