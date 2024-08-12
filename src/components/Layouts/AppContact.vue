<template>
    <!-- Contact -->
    <div class=" contact-sec1 d-flex align-items-center">
        <div class="container">
            <div class="row p-2">
                <div>
                    <RouterLink class="routlink" to="/">Home page</RouterLink> <i class="bi bi-chevron-right"></i>
                    <RouterLink class="routlink" to="/contact">Contact us</RouterLink>
                </div>
                <h1 class="my-3 ">Contac Us</h1>
                <p>with over 10 years of experience helping
                    busineto fi d<br>comprehensive solution
                </p>
            </div>
        </div>
    </div>

    <!--sec-1-->
    <section class=" contact-sec2 my-5">
        <div class="container">
            <div class="row gap-5">
                <div class="col-sm">
                    <p class="mini-h mb-1 ">Contact Us</p>
                    <h2 class="pb-5"> Let’s discuss about your tax project</h2>
                    <div class="details d-flex align-items-top  py-3">
                        <i class="fa-solid fa-envelope fs-1"></i>
                        <div class="det">
                            <p class=" head mb-2">Contact Phone</p>
                            <p class=" "> +91 9705200099</p>
                        </div>
                    </div>
                    <div class="details d-flex align-items-top  py-3">
                        <i class="fa-solid fa-phone fs-1"></i>
                        <div class="det">
                            <p class=" head mb-2">Email</p>
                            <p class=" ">aasrithacorporatesolutions@gmail.com</p>
                        </div>
                    </div>
                    <div class="details d-flex align-items-top  py-3">
                        <i class="fa-solid fa-location-dot fs-1"></i>
                        <div class="det">
                            <p class=" head mb-2">Location</p>
                            <p class=" "> 81-29-6, #303, Paluri Heights, New Sbi Colony, Venkateswara Nagar, J.N.Road,
                                Rajamahendravaram - 533103 Andhra Pradesh, India</p>
                        </div>
                    </div>
                    <div class="row py-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.29
                            5576126233!2d81.80029587515637!3d17.00916578381497!2m3!1f0!2f0!3f0!3m2!1i1024!2i76
                            8!4f13.1!3m3!1m2!1s0x3a37a3c976d3b6f3%3A0xf50b688facd24b55!2sJaasritha%20Corporate%2
                            0Solutions!5e0!3m2!1sen!2sin!4v1720179433937!5m2!1sen!2sin" width="600" height="450"
                            style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>

                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="row">
                        <form class="Contact-form" action="#">
                            <div class="c-form">
                                <h4>Contact Us</h4>
                                <input type="text" placeholder="Name*"  required>
                                <input type="text" placeholder="Phone*"  required>
                                <input type="text" placeholder="Email*"  required>
                                <input type="text" placeholder="Message*" class="msg">
                                <button type="submit">Submit Now</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>



</template>
<script>
export default {
    data() {
        return {
            name: "AppContact",
        };
    },
};

</script>
<style scoped>
/************Contact-form*************/
.routlink {
    color: white;
    text-decoration: none;

}

.bi-chevron-right {
    color: white !important;
    /* font-weight:bold; */

}

.Contact-form {
    width: 100%;
    height: auto;
    background-color: #F1F6F2;
    border-radius: 20px;
}

.c-form {
    margin: 50px 20px;
    padding: 20px 0px;

}

.c-form input {
    width: 100%;
    height: auto;
    font-size: 15px;
    margin-bottom: 30px;
    background-color: white;
    border: transparent;
    padding: 10px;
    outline-color: rgb(158, 161, 160);
}

.c-form .msg {
    padding-bottom: 75px;
}

.c-form button {
    width: 100%;
    height: 40px;
    font-size: 17px;
    font-weight: 600;
    color: white;
    background-color: #317447;
    border: transparent;
}

/*************contact*******************/
.contact-sec1 {
    color: white;
    background-image: url("../../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 400px;

}

.mini-h {
    color: rgb(0, 84, 139);
    font-weight: 700;
    font-size: 19px;


}
.contact-sec2 h2 {
    color: #317447;
}

.head {
    font-size: 14px;
    color: rgb(85, 85, 85);

}
</style>