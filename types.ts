
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

export interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  customerName: string;
  customerEmail: string;
  location: {
    lat: number;
    lng: number;
  };
}

export enum Segment {
  STUDENT = 'Student',
  CORPORATE = 'Corporate'
}