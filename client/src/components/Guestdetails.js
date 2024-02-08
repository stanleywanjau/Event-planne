import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GuestDetails = () => {
  const { id } = useParams();
  const [guest, setGuest] = useState(null);
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    fetch(`/guest/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch guest details');
        }
        return response.json();
      })
      .then(data => {
        setGuest(data);
      })
      .catch(error => {
        console.error('Error fetching guest details:', error);
      });
  }, [id]);

  const handleStatusUpdate = () => {
    if (window.confirm(`Are you sure you want to change the status to 'confirmed'?`)) {
      fetch(`/guest/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'confirmed' })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update guest status');
          }
          // Update the guest status in the state
          setGuest({ ...guest, status: 'confirmed' });
        })
        .catch(error => {
          console.error('Error updating guest status:', error);
        });
    }
  };