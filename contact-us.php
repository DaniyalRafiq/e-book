<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Us</title>
    <?php include 'links.php' ?>
</head>

<body>
    <!-- header -->
    <?php include 'header.php' ?>
    <!-- End header -->

    <!-- section banner -->
    <section class="hero-section other-hero">
        <img class="hero-section-bottom-img" src="assets/images/hero-section-bottom-img.png" alt="">
        <div class="container">
            <div class="row align-items-center ">
                <div class="col-lg-12 col-md-12">
                    <div class="hero-content">
                        <h1>Contact Us</h1>
                        <p>
                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex econsequat.
                        </p>
                        <!--<img class="dragon-img animate-up " src="assets/images/dragon-img.png" alt="">-->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- End section -->

    <section class="contact-form">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="contact-form-content">
                        <h2 class="main-heading">Let's talk with us</h2>
                        <p>Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.</p>
                        <div class="contact-form-content-social-media-main">
                            <a href="#" class="contact-form-content-social-media">
                                <div class="icon">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </div>
                                <span>1055 Arthur ave Elk Groot, 67.
                                    New Palmas South Carolina.</span>
                            </a>
                            <a href="#" class="contact-form-content-social-media">
                                <div class="icon">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <span>+1 222 678 9189 9</span>
                            </a>
                            <a href="#" class="contact-form-content-social-media">
                                <div class="icon">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <span>yalradanifiqq1111@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-12">
                    <div class="bg-contact-form">
                        <form method="POST" action="signup" class="needs-validation" novalidate="">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="mb-3">
                                                <input type="text" class="form-control" placeholder="Enter Name" pattern="[A-Za-z ]+" name="name" required="">
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="mb-3">
                                                <input type="email" class="form-control" placeholder="Enter Email" name="email" pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" required="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <input type="number" class="form-control" placeholder="Enter Contact No." name="phone" onkeypress="if(this.value.length==12) return false;" required="">
                                    </div>
                                    <div class="mb-3">
                                        <textarea class="form-control model-textarea" onkeypress="if(this.value.length==250) return false;" name="message" rows="4" cols="50" placeholder="Enter Message"></textarea>
                                    </div>
                                    <div class="mb-0 contact-btn">
                                        <button type="submit" class="btn theme-btn mt-1">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- footer -->
    <?php include 'footer.php' ?>
    <!-- end -->


</body>

</html>