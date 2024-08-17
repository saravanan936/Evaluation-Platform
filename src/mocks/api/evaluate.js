const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  
    const data = await response.json();
    console.log('Evaluation Result:', data);
    // Handle the evaluation result (e.g., update the UI)
};
