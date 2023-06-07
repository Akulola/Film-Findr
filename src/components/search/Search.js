import React, { useState } from 'react';
import Transaction from "./Transaction";
function MovieSearch() {
    const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();