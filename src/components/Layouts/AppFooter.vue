<template>
    <div>

        <!--footer-->
        <footer>
            <div class="container pt-5">
                <div class="row ">
                    <div class=" col-sm gap-3 d-flex align-items-center">
                        <i class="bi bi-envelope-fill"></i>
                        <p class="pt-3">Jastrithasolution.@gmail</p>
                    </div>
                    <div class=" col-sm gap-3 d-flex align-items-center">
                        <i class="bi bi-telephone-fill"></i>
                        <p class="pt-3">+91 9705200099</p>
                    </div>
                    <div class=" col-sm gap-3 d-flex align-items-center">
                        <i class="bi bi-geo-alt-fill"></i>
                        <p class="pt-3">Venkateswara Nagar, J.N.Road, Rajamahendravaram</p>
                    </div>
                </div>
                <hr class="bg-light">

                <div class="row">
                    <div class="col-4">
                        <img class=" mt-5" src="../../assets/images/white-logo.svg" alt="" style="height: 45px;">
                        <p class="py-5">Lorem ipsum dolor sit consectetur adipiscing <br>elit sed do eiusmod tempor
                            incididunt</p>
                    </div>
                    <div class=" list1 col-3 mt-5 py-5 text-white">
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
                    <div class=" list2 col-3 mt-5 py-5 text-white">
                        <div class="py-4">
                            <li class="">
                                <RouterLink class="routlink" to="/">Home</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink  class="routlink" to="/about">About</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/service">Service</RouterLink>
                            </li>
                            <li class="">
                                <RouterLink class="routlink" to="/contact">Contact</RouterLink>
                            </li>
                        </div>
                    </div>
                    <div class="col-2 mt-5 py-5 text-white">
                        <div class=" social-media py-4 ">
                            <li><a href="#"><i class="bi bi-facebook fs-5"></i></a></li>
                            <li><a href="#"><i class="bi bi-linkedin fs-5"></i></a></li>
                            <li><a href="#"><i class="bi bi-instagram fs-5"></i></a></li>
                        </div>
                    </div>
                </div>
                <hr class="bg-light mt-0 pt-0">
                <div class="row ">
                    <p>Copyright 2017 Jasatritha Solutins.</p>
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
    text-decoration: none !important;
}

.routlink,.bi {
    color:white;
    text-decoration: none !important;

}
footer .social-media {
    list-style: none;
}

footer .list1,
.list2 {
    list-style-type: square;
    
}
</style>