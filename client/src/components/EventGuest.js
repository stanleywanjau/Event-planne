import React from 'react';
import { useParams } from 'react-router-dom';

const EventGuest = () => {
  const { event_id, guest_id } = useParams();

  const associateGuestWithEvent = () => {
    fetch(`/event/${event_id}/guest/${guest_id}`, {
      method: 'POST'
    })