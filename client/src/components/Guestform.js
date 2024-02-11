const GuestForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('invited');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form fields
        if (!name || !email) {
          alert('Name and email are required fields');
          return;
        }
        