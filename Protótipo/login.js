let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
        document.querySelector('.cart-count').textContent = cartCount;

        function switchTab(tab) {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            
            if (tab === 'login') {
                document.querySelectorAll('.auth-tab')[0].classList.add('active');
                document.getElementById('loginForm').classList.add('active');
            } else {
                document.querySelectorAll('.auth-tab')[1].classList.add('active');
                document.getElementById('registerForm').classList.add('active');
            }
            
            hideMessages();
        }

        function togglePassword(inputId) {
            const input = document.getElementById(inputId);
            input.type = input.type === 'password' ? 'text' : 'password';
        }

        function showMessage(type, message) {
            hideMessages();
            const messageEl = document.getElementById(type === 'success' ? 'successMessage' : 'errorMessage');
            messageEl.textContent = message;
            messageEl.style.display = 'block';
            
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 5000);
        }

        function hideMessages() {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'none';
        }

        function handleLogin(event) {
            event.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;
            
            // Simulate login
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                if (rememberMe) {
                    localStorage.setItem('rememberMe', 'true');
                }
                showMessage('success', 'Login realizado com sucesso! Redirecionando...');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                showMessage('error', 'E-mail ou senha incorretos. Tente novamente.');
            }
        }

        function handleRegister(event) {
            event.preventDefault();
            
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                showMessage('error', 'As senhas não coincidem. Tente novamente.');
                return;
            }
            
            // Check if user already exists
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(u => u.email === email)) {
                showMessage('error', 'Este e-mail já está cadastrado. Faça login.');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password,
                createdAt: new Date().toISOString()
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            showMessage('success', 'Conta criada com sucesso! Você já pode fazer login.');
            
            setTimeout(() => {
                switchTab('login');
                document.getElementById('loginEmail').value = email;
            }, 1500);
        }

        function socialLogin(provider) {
            showMessage('success', `Login com ${provider} em desenvolvimento. Use e-mail e senha.`);
        }