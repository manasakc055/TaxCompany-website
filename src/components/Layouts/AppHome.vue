<template>
    <div>
        <!-- about section -->
        <div class=" home-sec1  min-vh-100 d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class=" col-12 ">
                        <h1 class="my-3 display-5">
                            File with peace of mind,<br> Our experts guide you</h1>
                        <p class="lead">With over 10 years of experience helping
                            business field<br class="d-none d-md-block" />comprehensive solution
                        </p>
                        <RouterLink class="routlink btn btn-success text-white" to="/about">Our Company</RouterLink> 
                        <RouterLink class="routlink btn btn-outline-light ms-3 " to="/contact">Get in Touch</RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <!--sec-1-->
        <section class=" home-sec2 mt-3">
            <div class="container">
                <div class="row">
                    <div class=" col-lg-6 info-box gap-5">
                        <img src="../../assets/images/1.jpg ">
                    </div>
                    <div class="col-lg-6">
                        <div class=" p-3 ">
                            <h6 class=" text-success py-2">About Us</h6>
                            <h2 class=" my-2 ">We're not your typical CPA firm<br>
                                we're an outsourced accounting service</h2>
                            <p>Tax services that are customized to enhance your financial strategy<br>
                                and minimize tax liabilities.
                                Trust us for tax preparation, planning,<br>
                                and filing needs to thrive in today's competitive market.
                            </p>
                            <p><i class="fa-regular fa-circle-check"></i> We create a Comprehensive Tax Reduction Plan
                            </p>
                            <p><i class="fa-regular fa-circle-check"></i> We clean up your Bookkeeping, Payroll,
                                Accounting
                                & Operations</p>
                            <p><i class="fa-regular fa-circle-check"></i> We pro-actively manage your S-Corp or LLC
                                salary
                                decisions & tax payments</p>
                            <p><i class="fa-regular fa-circle-check"></i> We keep your Bookkeeping up-to-date & accurate
                            </p>

                            <RouterLink class="routlink btn btn-success text-white " to="/about">More About</RouterLink>

                            <!-- <a href="#" class="btn btn-success">More About <i
                                    class="fa-solid fa-arrow-right ps-2 text-white"></i></a> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--sec-2-->
        <section class=" home-sec3 mt-3" style="background:#f0f7fc ">
            <div class="container ">
                <h2 class="">Our Service</h2>
                <hr class=" rounded-3 " style="width: 120px; height:5px; background-color: #00ff73;">

                <!-- row1 -->
                <div class="row d-flex flex-wrap">
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none "  style="width: 100%;height:100%; " >
                            <div
                                class="card-body  mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/financial.png " style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">Accounting Services</a></h5>
                                    <p class="card-text">Expert bookkeeping, tax prep & analysis to empower our
                                        business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >
                            <div
                                class="card-body  mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/registration-form.png" style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">Registrations</a></h5>
                                    <p class="card-text">Officially sign up & manage licenses online.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >

                            <div
                                class="card-body  mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/audit.png" style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">Auditing</a></h5>
                                    <p class="card-text">Uncover financial insights with our expert review.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- row2 -->
                    <div class=" col-lg-4 info-box py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >

                            <div
                                class="card-body mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3 ">
                                <img src="../icons/search.png" style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">Investigations</a></h5>
                                    <p class="card-text">Get the answers you need with our thorough investigation
                                        services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >

                            <div
                                class="card-body mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/valuation.png" style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">Valuations</a></h5>
                                    <p class="card-text">Determine the fair value of your assets for informed decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >

                            <div
                                class="card-body mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/eps.png" style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">EDP & IT related Servies</a></h5>
                                    <p class="card-text">Optimize your technology for efficient operations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- row3 -->
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >

                            <div
                                class="card-body  mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/management-consulting.png" style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">Management Consultancy</a></h5>
                                    <p class="card-text">Expert guidance to achieve your business goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >

                            <div
                                class="card-body mb-1 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/laws.png" style="height: 50px;width:auto;">
                                <div class="">
                                    <h5 class="card-title"><a href="#">Company Law and Administration</a></h5>
                                    <p class="card-text">Navigate legal complexities with confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-4 info-box  py-2">
                        <div class="card shadow-sm border-none " style="width: 100%; height:100%;" >

                            <div
                                class="card-body  mb-2 bg-body rounded d-inline align-items-center justify-content-around gap-3">
                                <img src="../icons/learning.png" style="height: 50px;width:auto;">
                                <div class="py-2">
                                    <h5 class="card-title"><a href="#">Training & Education</a></h5>
                                    <p class="card-text">Empower your team with valuable skills and knowledge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--sec-3-->
        <section class="home-sec4 mb-3">
            <div class="container text-white">
                <div class="row">
                    <div class=" col-lg-9  gap-5">
                        <h1>GET A CALL BACK</h1>
                        <p class=" lh-lg">If you need to speak to us about a general query <br>
                            Unlock Financial Excellence With Jastrith Solution CPA Bookkeeping Services !</p>
                        <RouterLink class="routlink btn btn-success text-white " to="/contact">Book A Free Consultation</RouterLink>
                    </div>
                </div>
            </div>
        </section>
        <!--sec-4-->
        <section class=" home-sec5 my-3 ">
            <div class="container">
                <h2>Latest News</h2>
                <hr class=" rounded-3 " style="width: 120px; height:5px; background-color: #00ff73;">

                <!-- row1 -->
                <div class="row  mt-4">
                    <div class="news-card col-lg-4 info-box py-2">
                        <div class="card-body border bg-light">
                            <img class="card-img-top " src="../../assets/images/approved.jpg">
                            <div class="p-4">
                                <h5 class="card-title pb-3 pt-1"><a href="#">Approvals Related Queries?</a></h5>
                                <p class="card-text text-seco">CBEC Approves Undertaking for Exports without Payment of
                                    Integrated Tax in Place of Bonds.</p>
                            </div>
                        </div>
                    </div>
                    <div class="news-card col-sm info-box py-2">
                        <div class="card-body border bg-light">
                            <img class="card-img-top " src="../../assets/images/tax.jpg">
                            <div class="p-4">
                                <h5 class="card-title pb-4 pt-2"><a href="#">Tax Realted Queries?</a></h5>
                                <p class="card-text text-seco">Income Tax Slabs/Rates For FY 2017-18 And Tax Saving
                                    Under Section 80C Deductions</p>
                            </div>
                        </div>
                    </div>
                    <div class=" news-box col-sm py-2">
                        <div class="card-body shadow-none">
                            <div class="row">
                                <div class="col-4 mt-3">
                                    <img class="card-img-top" src="../../assets/images/insurence-document.jpg">
                                </div>
                                <div class="col-7">
                                    <div class="p-1">
                                        <h6 class="card-title py-1"><a href="#">We deal all insurences Services</a></h6>
                                        <p class="card-text text-secondary">we are into insurances market</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-4 mt-3">
                                    <img class="card-img-top" src="../../assets/images/health-insurence.jpg ">
                                </div>
                                <div class="col-7">
                                    <div class="p-1">
                                        <h6 class="card-title py-1"><a href="#">Health Insurance</a></h6>
                                        <p class="card-text text-secondary">Star Health Insurance, ICICI Lombard;</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-4">
                                    <img class="card-img-top" src="../../assets/images/ICICI-ed-lombard.jpg ">
                                </div>
                                <div class="col-7">
                                    <div class="p-1">
                                        <h6 class="card-title py-1"><a href="#">General Insurance</a></h6>
                                        <p class="card-text text-secondary">ICICI Lombard General Insurance;</p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-4">
                                    <img class="card-img-top" src="../../assets/images/life-insurance.jpg">
                                </div>
                                <div class="col-7 ">
                                    <div class="p-1">
                                        <h6 class="card-title py-1"><a href="#">Life Insurance</a></h6>
                                        <p class="card-text text-secondary"> Max Life Insurance;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "AppHome",
        };
    },
};

</script>

<style scoped>
@media (max-width: 992px) {

    .home-sec4 {
        background-position: bottom;
    }

}



/* Home-section-1 */
.home-sec1 {
    color: white;
    background-image: url("../../assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

}
section {
    padding-top: 80px;
    padding-bottom: 80px;
}

.info-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-box img {
    width: 100%;
    height: auto;
}

i {
    color: #317447;
}

.home-sec3 {
    padding-top: 50px;
    padding-bottom: 60px;

}

.home-sec3 .row a,
.home-sec5 a {
    color: black;
}

.home-sec3 .row a:hover {
    color: #317447;
}

a {
    text-decoration: none;
}

a:hover {
    color: #317447;
}

.home-sec4 {
    background-image: url(../../assets/images/call-back.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

}

/* Home-section-4*/
.home-sec5.card-body:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    background-color: white;
}

.news-box img {
    width: 100%;
    height: auto;
}

.news-box p {
    font-size: 15px;
}
</style>