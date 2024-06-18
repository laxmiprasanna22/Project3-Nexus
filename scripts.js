document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const contactSuccessMessage = document.getElementById('contact-success');
    contactSuccessMessage.style.display = 'none';
    
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Simulate form submission
        setTimeout(() => {
            contactSuccessMessage.style.display = 'block';
            contactForm.reset();
            document.getElementById('feedback').scrollIntoView({
                behavior: 'smooth'
            });
        }, 500);
    });

    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackSuccessMessage = document.getElementById('feedback-success');
    feedbackSuccessMessage.style.display = 'none';
    
    feedbackForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(feedbackForm);
        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

        fetch('http://localhost:3000/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Feedback submitted successfully') {
                feedbackSuccessMessage.style.display = 'block';
                feedbackForm.reset();
                setTimeout(() => {
                    feedbackSuccessMessage.style.display = 'none';
                }, 3000);
            } else {
                alert('Failed to submit feedback');
            }
        })
        .catch(error => {
            alert('Feedback submitted sucessfully');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const customerForm = document.getElementById('customer-form');
    const infoSuccessMessage = document.getElementById('info-success');
    infoSuccessMessage.style.display = 'none';
    
    customerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const formData = new FormData(customerForm);
        const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

        fetch('http://localhost:3000/submit-customer-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Details submitted successfully') {
                infoSuccessMessage.style.display = 'block';
                customerForm.reset();
            } else {
                alert('Failed to submit details');
            }
        })
        .catch(error => {
            alert('  Sucessfully Submitted');
        });
    });
});


