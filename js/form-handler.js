/* ============================================
   CONTACT FORM HANDLER
   Using Web3Forms API for email delivery
   
   SETUP INSTRUCTIONS:
   1. Go to https://web3forms.com/
   2. Enter your email: iamthaizzie@gmail.com
   3. You'll receive an access key via email
   4. Replace 'YOUR_ACCESS_KEY_HERE' in contact.html with your key
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const formMessage = document.getElementById('formMessage');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate form
        if (!validateForm()) {
            return;
        }

        // Show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }

        // Prepare form data
        const formData = new FormData(contactForm);
        
        // Create JSON object for submission
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Add from name for email
        formObject.from_name = formObject.first_name + ' ' + formObject.last_name;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                showMessage('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
                contactForm.reset();
            } else {
                showMessage('error', 'Oops! Something went wrong. Please try again or contact us directly.');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('error', 'Unable to send message. Please check your internet connection and try again.');
        } finally {
            // Reset button state
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        }
    });

    // Form validation
    function validateForm() {
        let isValid = true;
        const requiredFields = contactForm.querySelectorAll('[required]');
        
        // Remove previous error styles
        contactForm.querySelectorAll('.form-control').forEach(field => {
            field.style.borderColor = '';
        });

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#ef4444';
                shakeElement(field);
            }

            // Email validation
            if (field.type === 'email' && field.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value.trim())) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    shakeElement(field);
                }
            }

            // Phone validation (optional, but if filled, must be valid)
            if (field.name === 'phone' && field.value.trim()) {
                const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
                if (!phoneRegex.test(field.value.trim())) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                    shakeElement(field);
                }
            }
        });

        if (!isValid) {
            showMessage('error', 'Please fill in all required fields correctly.');
        }

        return isValid;
    }

    // Show message
    function showMessage(type, text) {
        if (!formMessage) return;

        formMessage.className = 'form-message ' + type;
        formMessage.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            ${text}
        `;
        formMessage.style.display = 'block';

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide message after 5 seconds for errors
        if (type === 'error') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    // Shake animation for invalid fields
    function shakeElement(element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 500);
    }

    // Real-time validation on blur
    contactForm.querySelectorAll('.form-control').forEach(field => {
        field.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }

            // Email validation on blur
            if (this.type === 'email' && this.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value.trim())) {
                    this.style.borderColor = '#ef4444';
                }
            }
        });

        // Clear error on focus
        field.addEventListener('focus', function() {
            this.style.borderColor = '';
        });
    });
});

/* Add shake animation CSS dynamically */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .shake {
        animation: shake 0.5s ease-in-out;
    }
`;
document.head.appendChild(shakeStyle);
