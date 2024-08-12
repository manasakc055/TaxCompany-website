<template>
    <!-- col2 -->
    <div class="col-sm-3  ps-1">
        <div class="position-sticky top-0">
            <h3>About Tax</h3>
            <hr />
            <ul>
                <li>
                    <RouterLink to="/sub/1">What is Tax?</RouterLink>
                </li>
                <li>
                    <RouterLink to="/sub/3">Direct Tax in India</RouterLink>
                  
                </li>
                <li>Difference between Direct and Indirect Taxes</li>
                <li> Goods and Service Tax(GST)</li>
                <li> Capital Gains Tax(CGT)</li>
                <li>Capital Gain Tax on Shares</li>
                <li>Advance Tax</li>
                <li> Income Tax for FY 2017-18 |Check Slab Rates,Calculation & News</li>
            </ul>
            <!-- form -->
<!-- 
            <div class="row">
                <div class="container">
                    <form class="f" href="#">
                        <div class="send-form">
                            <h4>Contact Us</h4>

                            <input type="text" placeholder="Name*">
                            <input type="text" placeholder="Phone*">
                            <input type="text" placeholder="Email*">
                            <input type="text" placeholder="Message*" class="msg">
                            <button type="submit">Submit Now</button>
                        </div>

                    </form>
                </div>

            </div> -->
        </div>
    </div>


</template>

<script>
export default {
    data() {
        return {
            name: "sidemenu",

        }
    }
}

</script>
<style scoped>
/* col2 */
.servpage-sec1-col2 {
    width: 400px;
    /* background-color: #8bdbaf; */
    padding: 25px 25px;
}

.service-sec2 h3 {
    font-size: 25px;
    margin: 30px 0;
    color: #3a526a;
}

.service-sec2 hr {
    border-bottom: 2px solid gray;
    margin-bottom: 40px;
}

.service-sec2 ul {
    padding-left: 5px;
    list-style: none;
}

.service-sec2 ul li {
    margin-bottom: 25px;
}

.service-sec2 ul li:hover {
    cursor: pointer;
    font-weight: 700;
    color: #3a526a;
    text-decoration: underline #18ba60 1px;
}


/*********form************/
.f {
    width: 100%;
    height: auto;
    background-color: #F1F6F2;
    border-radius: 25px;
}

.send-form {
    margin: 30px 15px;
    padding: 20px 0px;

}

.send-form input {
    width: 100%;
    height: auto;
    font-size: 17px;
    margin-bottom: 30px;
    background-color: white;
    border: transparent;
    padding: 8px;
}

.send-form .msg {
    padding-bottom: 75px;
}

.send-form button {
    width: 100%;
    height: 40px;
    font-size: 17px;
    font-weight: 600;
    color: white;
    background-color: #18ba60;
    border: transparent;
}
</style>