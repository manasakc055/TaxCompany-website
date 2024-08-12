<template>
    <div>

        <!--footer-->
        <footer>
            <div class="container pt-5">
                <hr class="bg-light">

                <div class="row text-left text-md-left gap-1">
                    <div class="col-md-4 col-sm-12">
                        <img class=" mt-5" src="../../assets/images/white-logo.svg" alt="" style="height: 45px;">
                        <p class="footer-para py-4">Lorem ipsum dolor sit consectetur adipiscing <br>elit sed do eiusmod
                            tempor
                            incididunt</p>

                        <div class=" social-media d-flex gap-4 ">
                            <li><a href="#"><i class="bi bi-facebook fs-5"></i></a></li>
                            <li><a href="#"><i class="bi bi-linkedin fs-5"></i></a></li>
                            <li><a href="#"><i class="bi bi-instagram fs-5"></i></a></li>
                            <li><a href="#"><i class="bi bi-twitter fs-5"></i></a></li>
                        </div>
                    </div>
                    <div class=" list1 col-md-2 col-sm-12  text-white mt-3">
                        <div class="py-4">
                            <li class="">
                                <RouterLink class="routlink" to="/">Home</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/about">About</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/service">Service</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/contact">Contact</RouterLink>
                            </li>

                        </div>
                    </div>
              
                    <div class=" list2 col-md-2 col-sm-12 text-white mt-3">
                        <div class="py-4">
                            <li class="">
                                <RouterLink class="routlink" to="/service">Registrations</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/service">Auditing</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/service">Investigations</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/service">EDP & IT related</RouterLink>
                            </li>
                                                  
                        </div>
                    </div>
                    <div class=" list2 col-md-2 col-sm-12 text-white mt-3">
                        <div class="row ">
                            <div class="gap-2 d-flex">
                                <i class="bi bi-envelope-fill pt-3"></i>
                                <p class="pt-3">Jastrithasolution@gmail.com</p>
                            </div>
                            <div class="gap-2 d-flex">
                                <i class="bi bi-telephone-fill pt-3"></i>
                                <p class="pt-3">+919705200099</p>
                            </div>
                            <div class=" gap-2 d-flex">
                                <i class="bi bi-geo-alt-fill pt-3"></i>
                                <p class="pt-3">Venkateswara Nagar, J.N.Road, Rajamahendravaram</p>
                            </div>
                        </div>
                    </div>

                </div>

                <hr class="bg-light mt-5 ">
                <div class="row  pb-2">
                    <div class="col text-center">
                        <p>Copyright 2017 Jasatritha Solutins.</p>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "AppFooter"
        }
    }
}
</script>
<style scoped>
/*************** footer *****************/


footer {
    background-color: #2e363a;
    color: white !important;
}

.routlink,
.bi {
    color: white;
    text-decoration: none;

}

footer .routlink:hover {
    text-decoration: underline;


}

footer .social-media {
    list-style: none;
}

footer p {
    margin: 0;
}

footer .list1,
.list2 {
    list-style-type: square;

}

@media (max-width:768px) {
    footer .row {
        text-align: left;
    }

    footer .list1,
    footer .list2 {
        padding-left: 10px;
        text-align: left;
    }
}
</style>