
// Form Validation and Authentication Functions

// Validate Email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate Password
function isValidPassword(password) {
    return password.length >= 6;
}

// Check if Passwords Match
function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
}

// Validate Phone Number
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone.trim());
}

// Show/Hide Password
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleBtn = event.target.closest('.toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
        passwordField.type = 'password';
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        let isValid = true;

        // Validate Email
        if (!email) {
            showError('البريد الإلكتروني مطلوب');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('البريد الإلكتروني غير صحيح');
            isValid = false;
        }

        // التحقق من كلمة المرور
        if (!password) {
            showError('كلمة المرور مطلوبة');
            isValid = false;
        } else if (!isValidPassword(password)) {
            showError('كلمة المرور قصيرة جداً (6 أحرف على الأقل)');
            isValid = false;
        }

        if (isValid) {
            // Simulate Successful Login
            showSuccess('تم تسجيل الدخول بنجاح! جاري التحويل...');
            // Save user session
            saveUserSession(email);
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1500);
        }
    });
}

// Registration Form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const city = document.getElementById('city').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.getElementById('terms').checked;
        
        let isValid = true;

        // Validate First Name
        if (!firstName) {
            showError('الاسم الأول مطلوب');
            isValid = false;
        } else if (firstName.length < 2) {
            showError('الاسم الأول يجب أن يكون أكثر من حرف واحد');
            isValid = false;
        }

        // Validate Last Name
        if (!lastName) {
            showError('الاسم الأخير مطلوب');
            isValid = false;
        } else if (lastName.length < 2) {
            showError('الاسم الأخير يجب أن يكون أكثر من حرف واحد');
            isValid = false;
        }

        // Validate Email
        if (!email) {
            showError('البريد الإلكتروني مطلوب');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('البريد الإلكتروني غير صحيح');
            isValid = false;
        }

        // Validate Phone Number
        if (!phone) {
            showError('رقم الهاتف مطلوب');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('رقم الهاتف غير صحيح (10 أرقام على الأقل)');
            isValid = false;
        }

        // Validate City
        if (!city) {
            showError('المدينة مطلوبة');
            isValid = false;
        }

        // التحقق من كلمة المرور
        if (!password) {
            showError('كلمة المرور مطلوبة');
            isValid = false;
        } else if (!isValidPassword(password)) {
            showError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            isValid = false;
        }

        // Validate Confirm Password
        if (!confirmPassword) {
            showError('تأكيد كلمة المرور مطلوب');
            isValid = false;
        } else if (!passwordsMatch(password, confirmPassword)) {
            showError('كلمات المرور غير متطابقة');
            isValid = false;
        }

        // Validate Terms Agreement
        if (!terms) {
            showError('يجب الموافقة على الشروط والأحكام');
            isValid = false;
        }

        if (isValid) {
            // Simulate Successful Registration
            showSuccess('تم التسجيل بنجاح! جاري التحويل...');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        }
    });

    // Real-time Email Validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailHelp = document.getElementById('emailHelp');
            if (this.value.trim()) {
                if (isValidEmail(this.value.trim())) {
                    emailHelp.textContent = '✓ البريد الإلكتروني صحيح';
                    emailHelp.className = 'help-text success';
                } else {
                    emailHelp.textContent = '✗ البريد الإلكتروني غير صحيح';
                    emailHelp.className = 'help-text error';
                }
            }
        });
    }

    // Real-time Password Validation
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const passwordHelp = document.getElementById('passwordHelp');
            if (this.value) {
                const strength = getPasswordStrength(this.value);
                passwordHelp.textContent = strength.message;
                passwordHelp.className = 'help-text ' + strength.class;
            }
        });
    }
}

// Measure Password Strength
function getPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 6) strength++;
    if (password.length >= 10) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength < 3) {
        return { message: '✗ كلمة المرور ضعيفة', class: 'error' };
    } else if (strength < 5) {
        return { message: '○ كلمة المرور متوسطة', class: 'warning' };
    } else {
        return { message: '✓ كلمة المرور قوية', class: 'success' };
    }
}

// Show Error Message
function showError(message) {
    let errorContainer = document.getElementById('errorContainer');
    
    if (!errorContainer) {
        errorContainer = document.createElement('div');
        errorContainer.id = 'errorContainer';
        errorContainer.className = 'error-message show';
        const form = document.querySelector('form');
        form.parentNode.insertBefore(errorContainer, form);
    }
    
    errorContainer.textContent = message;
    errorContainer.classList.add('show');
    
    setTimeout(() => {
        errorContainer.classList.remove('show');
    }, 5000);
}

// Show Success Message
function showSuccess(message) {
    let successContainer = document.getElementById('successContainer');
    
    if (!successContainer) {
        successContainer = document.createElement('div');
        successContainer.id = 'successContainer';
        successContainer.className = 'success-message show';
        const form = document.querySelector('form');
        form.parentNode.insertBefore(successContainer, form);
    }
    
    successContainer.textContent = message;
    successContainer.classList.add('show');
    
    setTimeout(() => {
        successContainer.classList.remove('show');
    }, 5000);
}

// Check if User is Logged In
function isUserLoggedIn() {
    const userSession = localStorage.getItem('userSession');
    return userSession ? true : false;
}

// Get Current User Session
function getCurrentUser() {
    const userSession = localStorage.getItem('userSession');
    return userSession ? JSON.parse(userSession) : null;
}

// Save User Session after Login
function saveUserSession(email) {
    const user = {
        email: email,
        loginTime: new Date().toISOString()
    };
    localStorage.setItem('userSession', JSON.stringify(user));
}

// Logout User
function logoutUser() {
    localStorage.removeItem('userSession');
}

// Handle Social Login Buttons
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.classList.contains('facebook') ? 'فيسبوك' : 'جوجل';
        showSuccess(`جاري الاتصال بـ ${provider}...`);
        
        setTimeout(() => {
            showSuccess(`تم تسجيل الدخول عبر ${provider} بنجاح!`);
        }, 2000);
    });
});

// Apply Filters
const filterBtn = document.querySelector('.filters .btn-primary');
if (filterBtn) {
    filterBtn.addEventListener('click', function() {
        const searchTerm = document.getElementById('search')?.value.toLowerCase() || '';
        const category = document.getElementById('category')?.value || '';
        const priceMin = parseFloat(document.getElementById('priceMin')?.value) || 0;
        const priceMax = parseFloat(document.getElementById('priceMax')?.value) || Infinity;
        
        // Show Filters Applied Message
        showSuccess('تم تطبيق الفلاترز بنجاح!');
    });
}
