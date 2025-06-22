document.getElementById('feedbackForm').onsubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  try {
    const res = await fetch('Your API url/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (res.ok) {
      document.getElementById('response').innerText = result.message;
      form.reset();
    } else {
      document.getElementById('response').innerHTML = `<span class="error">Error: ${result.message || 'Submission failed'}</span>`;
    }
  } catch (err) {
    document.getElementById('response').innerHTML = `<span class="error">Error: ${err.message}</span>`;
  }
};
