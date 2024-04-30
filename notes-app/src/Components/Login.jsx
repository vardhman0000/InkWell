import React from 'react'
// import './Login.css'

function Login() {

    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    });

    document.querySelector('.cross-x').addEventListener('click', () => { 
    window.location.href='index.html';
    })


    return (
        <div>
            {/* <!-- main container  --> */}
            <div class="cross-x">
                <button class="cross-button">
                <span class="X"></span>
                <span class="Y"></span>
                </button>
            </div>
            <div class="container">
                {/* <!-- section-1  --> */}
                <div class="forms-container">
                <div class="signin-signup">
                    {/* <!-- form-1  --> */}
                    <form action="#" class="sign-in-form">
                    <h2 class="title">Sign in</h2>
                    <div class="input-field">
                        {/* <!-- for icon  --> */}
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" class="btn solid" />
                    <p class="social-text">Or Sign in with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                        <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                        <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    </form>
                    {/* <!-- form-2  --> */}
                    <form action="#" class="sign-up-form">
                    <h2 class="title">Sign up</h2>
                    <div class="input-field">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="input-field">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" class="btn" value="Sign up" />
                    <p class="social-text">Or Sign up with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-icon">
                        <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                        <i class="fab fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    </form>
                </div>
                </div>
                {/* <!-- section-2  --> */}
                <div class="panels-container">
                {/* <!-- panel contains some descriptive text and buttons to toggle between sign-in and sign-up forms. --> */}
                {/* <!-- panel-1  --> */}
                <div class="panel left-panel">
                    <div class="content">
                    <h3>New here ?</h3>
                    <p>
                        Join the Quizzify community and start your journey today!
                        Sign up for free to connect with like-minded individuals,
                        and unlock exclusive benefits. Let's get started on creating your account!
                    </p>
                    <button class="btn transparent" id="sign-up-btn">
                        Sign up
                    </button>
                    </div>
                    <img src="login5.png" class="image" alt="" />
                </div>
                {/* <!-- panel-2  --> */}
                <div class="panel right-panel">
                    <div class="content">
                    <h3>One of us ?</h3>
                    <p>
                        Unlock the full potential of Quizzify !
                        Sign in to your account to dive into a world of exclusive content,
                        and seamless connectivity. If you're new here,
                        don't worry signing up is quick and easy.
                    </p>
                    <button class="btn transparent" id="sign-in-btn">
                        Sign in
                    </button>
                    </div>
                    <img src="reg2.png" class="image" alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Login
