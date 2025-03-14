<?php
$page = basename($_SERVER['PHP_SELF'], '.php');
?>
<!-- <svg xmlns="http://www.w3.org/2000/svg" class="goo" version="1.1" width="100%">
    <defs>
        <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo"></feColorMatrix>
            <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
        </filter>
    </defs>
</svg> -->


<!-- <div id="cursor"></div> -->

<header class="header">
    <nav class="navbar navbar-expand-xl navbar-dark stroke bg-transparent">
        <div class="container">
            <div class="header-bottom">
                <a class="navbar-brand" href="index">
                    <img src="assets/images/logo.png" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <div class="collapse navbar-collapse navbar-main " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link <?php if ($page == 'index') {
                                                    echo 'active';
                                                } ?>" href="index">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php if ($page == 'about-author') {
                                                    echo 'active';
                                                } ?>" href="about-author">About the Author</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link <?php if ($page == 'book') {
                                                    echo 'active';
                                                } ?>" href="book">
                                Books
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php if ($page == 'blogs') {
                                                    echo 'active';
                                                } ?>" href="blogs">
                                Blogs
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php if ($page == 'testimonials') {
                                                    echo 'active';
                                                } ?>" href="testimonials">
                                Testimonials
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php if ($page == 'contact-us') {
                                                    echo 'active';
                                                } ?>" href="contact-us">
                                Contact Us
                            </a>
                        </li>

                    </ul>
                    <div class="my-2 my-lg-0 d-xl-block d-none">
                        <!-- From Uiverse.io by zjssun -->
                        <button class="theme-btn">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>


<!-- popup -->
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-md model-sec">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row align-items-center">
                    <div class="col-xl-12 col-lg-12 col-md-12">
                        <div class="model-discount">
                            <div class="d-block text-center align-items-center">
                                <div class="animate-div"><span>Order Your Book</span></div>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <hr>
                            <form method="POST" action="signup.php" class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Name</label>
                                            <input type="text" class="form-control model-input" placeholder="Enter Name"
                                                pattern="[A-Za-z ]+" name="name" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email</label>
                                            <input type="email" class="form-control model-input"
                                                placeholder="Enter Email" name="email"
                                                pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Contact No.</label>
                                            <input type="number" class="form-control model-input"
                                                placeholder="Enter Contact No." name="phone"
                                                onkeypress="if(this.value.length==12) return false;" required>
                                        </div>
                                    </div>
                                    <div class="col-xl-12 col-lg-12 col-md-12">
                                        <button class="theme-btn">
                                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                            <span class="text">Submit</span>
                                            <span class="circle"></span>
                                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- end -->