type User = {
  id: number;
  userName: string;
};

type Service = {
  id: number;
  name: string;
};

export type Booking = {
  id: number;
  customerName: string;
  address: string;
  date: string; 
  time: string; 
  service: Service;
  user: User;
};

export type BookingForm = {
  customerName: string;
  address: string;
  date: string; 
  time: string;
  serviceId: number;
  userId: number;
};