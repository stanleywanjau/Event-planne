import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestList = () => {
  const [guests, setGuests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/guests')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch guests');
        }
        return response.json();
      })
      .then(data => {
        setGuests(data);
      })
      .catch(error => {
        console.error('Error fetching guests:', error);
      });
  }, []);

const handleGuestClick = (guestname,guestId) => {
    navigate(`/guest/${guestname}/${guestId}`);
  };

  const create_guest = () => {
    navigate(`/createguest`);
  };

  const handleDeleteGuest = (guestId) => {
    if (window.confirm('Are you sure you want to delete this guest?')) {
      fetch(`/guest/${guestId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete guest');
          }