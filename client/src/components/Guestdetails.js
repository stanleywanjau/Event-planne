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