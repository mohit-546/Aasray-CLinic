// Handle Login Form
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Add your login logic here
    console.log('Login attempt:', { email, password });
});

// Handle Signup Form
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Add your signup logic here
    console.log('Signup attempt:', { name, email, password });
});
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Collect form data
  const formData = {
      name: document.getElementById('patientName').value,
      email: document.getElementById('patientEmail').value,
      phone: document.getElementById('patientPhone').value,
      date: document.getElementById('appointmentDate').value,
      time: document.getElementById('appointmentTime').value,
      type: document.getElementById('appointmentType').value
  };

  // Here you would typically send this data to your backend
  console.log('Appointment Details:', formData);
  
  // Show success message
  alert('Appointment request submitted successfully! We will contact you shortly.');
  
  // Close the modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('appointmentModal'));
  modal.hide();
  
  // Reset form
  this.reset();
});
document.addEventListener('DOMContentLoaded', function() {
    const appointmentDateInput = document.getElementById('appointmentDate');
    
    appointmentDateInput.addEventListener('input', function() {
        const selectedDate = new Date(this.value);
        const dayOfWeek = selectedDate.getDay();
        
        // 5 = Friday, 6 = Saturday
        if (dayOfWeek === 5 || dayOfWeek === 6) {
            alert('Sorry, the clinic is closed on Fridays and Saturdays. Please select another day.');
            this.value = '';
        }
    });

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    appointmentDateInput.setAttribute('min', today);
});

function submitContactForm(event) {
    event.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    };

    // Basic validation
    if (!validatePhone(formData.phone)) {
        showAlert('Please enter a valid phone number', 'danger');
        return;
    }

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Show success message
        showAlert('Message sent successfully! We will contact you soon.', 'success');
        
        // Clear form
        document.getElementById('contactForm').reset();
    }, 1000);
}

function validatePhone(phone) {
    // Basic phone validation - adjust regex as needed
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Insert alert before the form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alertDiv, form);

    // Auto-dismiss alert after 5 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}